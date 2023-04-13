<?php
 /*
 *  GLOBAL VARIABLES
 */
define('THEME_DIR', get_stylesheet_directory());
define('THEME_URL', get_stylesheet_directory_uri());

/*
 *  INCLUDED FILES
 */

    $file_includes = [
        'includes/theme-assets.php',                // Style and JS
        'includes/theme-setup.php',                // General theme setting
        'includes/acf-options.php',               // ACF Option page
        // 'includes/crop-images.php',               // Resize image
        'includes/product-post-type.php',        // Products custom post type
        'includes/api.php',                     // api
        ];

    foreach ($file_includes as $file) {
        if (!$filePath = locate_template($file)) {
            trigger_error(sprintf(__('Missing included file'), $file), E_USER_ERROR);
            }

        require_once $filePath;
    }

    unset($file, $filePath);

// Import feauture images and menu navbar
function theme_features() {
    register_nav_menu('headerMenuLocation','Header Menu Location');
    register_nav_menu('sidebarMenuLocation','Sidebar Menu Location');
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'theme_features');
 // Register Widget
function arphabet_widgets_init(){
// Post
    register_sidebar(array(
        'name'          => 'Post Widget',
        'id'            => 'post-widget',
        'before_widget' => '<div class="">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="title--section title--background">',
        'after_title'   => '</h2>',
    ));
    // Sidebar

    register_sidebar(array(
        'name'          => 'Sidebar',
        'id'            => 'sidebar',
        'before_widget' => '<div id="post__recent">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="title--main text--center">',
        'after_title'   => '</h3>',
    ));
    // Footer center
    register_sidebar(array(
        'name'          => 'Footer giữa',
        'id'            => 'footer-center',
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="title--section text--upcase">',
        'after_title'   => '</h2>',
    ));
    //Footer trái
    register_sidebar(array(
        'name'          => 'Footer trái',
        'id'            => 'footer-right',
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="title--section text--upcase">',
        'after_title'   => '</h2>',
    ));
}

add_action( 'widgets_init', 'arphabet_widgets_init' );
// Shortcode-post-navigaiton
        function post_navigaiton($atts, $content = null)
        {return '<!--nextpage-->';}
        add_shortcode('pos-nav', 'post_navigaiton');
// 404
function redirect_404(){
    global $wp_query;
    if($wp_query->is_404){
        wp_redirect(get_bloginfo('url'), 301);
        exit;
    }
}
add_action('wp','redirect_404', 1 );
// style category bl
function gt_get_post_view() {
$count = get_post_meta( get_the_ID(), 'post_views_count', true );
return " $count";
}
function gt_set_post_view() {
    $key = 'post_views_count';
    $post_id = get_the_ID();
    $count = (int) get_post_meta( $post_id, $key, true );
    $count++;
    update_post_meta( $post_id, $key, $count );
}
function gt_posts_column_views( $columns ) {
    $columns['post_views'] = 'Views';
    return $columns;
}
function gt_posts_custom_column_views( $column ) {
    if ( $column === 'post_views') {
        echo gt_get_post_view();
    }
}
add_filter( 'manage_posts_columns', 'gt_posts_column_views' );
add_action( 'manage_posts_custom_column', 'gt_posts_custom_column_views' );

    // style category bl
	/*
 * Function creates post duplicate as a draft and redirects then to the edit post screen
 */
function rd_duplicate_post_as_draft(){
	global $wpdb;
	if (! ( isset( $_GET['post']) || isset( $_POST['post'])  || ( isset($_REQUEST['action']) && 'rd_duplicate_post_as_draft' == $_REQUEST['action'] ) ) ) {
		wp_die('No post to duplicate has been supplied!');
	}

	/*
	 * Nonce verification
	 */
	if ( !isset( $_GET['duplicate_nonce'] ) || !wp_verify_nonce( $_GET['duplicate_nonce'], basename( __FILE__ ) ) )
		return;

	/*
	 * get the original post id
	 */
	$post_id = (isset($_GET['post']) ? absint( $_GET['post'] ) : absint( $_POST['post'] ) );
	/*
	 * and all the original post data then
	 */
	$post = get_post( $post_id );

	/*
	 * if you don't want current user to be the new post author,
	 * then change next couple of lines to this: $new_post_author = $post->post_author;
	 */
	$current_user = wp_get_current_user();
	$new_post_author = $current_user->ID;

	/*
	 * if post data exists, create the post duplicate
	 */
	if (isset( $post ) && $post != null) {

		/*
		 * new post data array
		 */
		$args = array(
			'comment_status' => $post->comment_status,
			'ping_status'    => $post->ping_status,
			'post_author'    => $new_post_author,
			'post_content'   => $post->post_content,
			'post_excerpt'   => $post->post_excerpt,
			'post_name'      => $post->post_name,
			'post_parent'    => $post->post_parent,
			'post_password'  => $post->post_password,
			'post_status'    => 'draft',
			'post_title'     => $post->post_title,
			'post_type'      => $post->post_type,
			'to_ping'        => $post->to_ping,
			'menu_order'     => $post->menu_order
		);

		/*
		 * insert the post by wp_insert_post() function
		 */
		$new_post_id = wp_insert_post( $args );

		/*
		 * get all current post terms ad set them to the new post draft
		 */
		$taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");
		foreach ($taxonomies as $taxonomy) {
			$post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
			wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
		}

		/*
		 * duplicate all post meta just in two SQL queries
		 */
		$post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
		if (count($post_meta_infos)!=0) {
			$sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
			foreach ($post_meta_infos as $meta_info) {
				$meta_key = $meta_info->meta_key;
				if( $meta_key == '_wp_old_slug' ) continue;
				$meta_value = addslashes($meta_info->meta_value);
				$sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";
			}
			$sql_query.= implode(" UNION ALL ", $sql_query_sel);
			$wpdb->query($sql_query);
		}


		/*
		 * finally, redirect to the edit post screen for the new draft
		 */
		wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );
		exit;
	} else {
		wp_die('Post creation failed, could not find original post: ' . $post_id);
	}
}
add_action( 'admin_action_rd_duplicate_post_as_draft', 'rd_duplicate_post_as_draft' );

/*
 * Add the duplicate link to action list for post_row_actions
 */
function rd_duplicate_post_link( $actions, $post ) {
	if (current_user_can('edit_posts')) {
		$actions['duplicate'] = '<a href="' . wp_nonce_url('admin.php?action=rd_duplicate_post_as_draft&post=' . $post->ID, basename(__FILE__), 'duplicate_nonce' ) . '" title="Duplicate this item" rel="permalink">Duplicate</a>';
	}
	return $actions;
}

add_filter( 'post_row_actions', 'rd_duplicate_post_link', 10, 2 );

// // Start count read post time
// function WebExp24h_count_read_post_time($postID){
//     // $postID này khi nào gọi hàm thì chúng ta sẽ truyền nó vào
//     $postID;
//     $count_key="read_post_count"; // Đây là tham số để chúng ta lưu số lần người đọc vào cơ sở dữ liệu
//    $count= get_post_meta($postID, $count_key, true);
//     //Lấy giá trị của read_post_count
//     if($count == ''){ // Kiểm tra xem có giá trị gì trong $count chưa bằng lệnh rẽ nhánh
//         // Nếu chưa có thì
//         $count = 1; // gán count bằng 0
//         // Xóa giá trị nếu có trong  post meta
//        delete_post_meta($postID, $count_key);
//         // Thêm giá trị vào post meta ban đầu là 0
//        add_post_meta($postID, $count_key, $count);
//
//     }else{ // Nếu trái với điều kiện trên thì mỗi lần người đọc tải trang tăng $count lên 1 đơn vị
//         $count = $count + 1;
//         // Hoặc các bạn có thể khai báo $count++;
//         // Sau đó cập nhật vào post meta
//         update_post_meta($postID, $count_key, $count);
//     }
//     // Cuối cùng trả về giá trị $count
//     return  $count;
// }
// // End count read post time
//
// // WebExp24h Csss And Js
// // End WebExp24h Css And Js

//My New Menu Class
if (!class_exists('WebExp24h_Walker_Nav_Menu')) {
	class WebExp24h_Mobile_Nav_Walker_Nav_Menu extends Walker_Nav_Menu
	{
		function display_element($element, &$children_elements, $max_depth, $depth = 0, $args, &$output)
		{
			if (!$element)
				return;
			$id_field = $this->db_fields['id'];
			//display this element
			if (is_array($args[0]))
				$args[0]['has_children'] = !empty($children_elements[$element->$id_field]);
			else if (is_object($args[0]))
				$args[0]->has_children = !empty($children_elements[$element->$id_field]);
			$cb_args = array_merge(array(&$output, $element, $depth), $args);
			call_user_func_array(array(&$this, 'start_el'), $cb_args);

			$id = $element->$id_field;
			// descend only when the depth is right and there are childrens for this element
			if (($max_depth == 0 || $max_depth > $depth + 1) && isset($children_elements[$id])) {
				foreach ($children_elements[$id] as $child) {
					if (!isset($newlevel)) {
						$newlevel = true;
						//start the child delimiter
						$cb_args = array_merge(array(&$output, $depth), $args);
						call_user_func_array(array(&$this, 'start_lvl'), $cb_args);
					}
					$this->display_element($child, $children_elements, $max_depth, $depth + 1, $args, $output);
				}
				unset($children_elements[$id]);
			}
			if (isset($newlevel) && $newlevel) {
				//end the child delimiter
				$cb_args = array_merge(array(&$output, $depth), $args);
				call_user_func_array(array(&$this, 'end_lvl'), $cb_args);
			}
			//end this element
			$cb_args = array_merge(array(&$output, $element, $depth), $args);
			call_user_func_array(array(&$this, 'end_el'), $cb_args);
		}// display_element
		/**
		 * @link https://gist.github.com/duanecilliers/1817371 copy from this url
		 */
		public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
		{
			if ((is_object($item) && $item->title == null) || (!is_object($item))) {
				return ;
			}
			$indent = ($depth) ? str_repeat("\t", $depth) : '';
			$li_attributes = '';
			$class_names = $value = '';
			$classes = empty($item->classes) ? array() : (array) $item->classes;
			//Add class and attribute to LI element that contains a submenu UL.
			$classes[] = 'menu-item-' . $item->ID;
			//If we are on the current page, add the active class to that menu item.
			$classes[] = ($item->current) ? 'active' : '';
			//Make sure you still add all of the WordPress classes.
			$class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
			$class_names = ' class="' . esc_attr($class_names) . '"';
			$id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
			$id = strlen($id) ? ' id="' . esc_attr($id) . '"' : '';
			$output .= $indent . '<li' . $id . $value . $class_names . $li_attributes . '>';
			//Add attributes to link element.
			$attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
			$attributes .=!empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
			$attributes .=!empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
			$attributes .=!empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
			$attributes .= (is_object($args) && $args->has_children) ? ' class="dropdown-toggle" ' : '';
			$item_output = (is_object($args)) ? $args->before : '';
			$item_output .= '<a' . $attributes . '>';
			$item_output .= (is_object($args) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (is_object($args) ? $args->link_after : '');
			$item_output .= (is_object($args) && $args->has_children) ? ' <span class="extra_menu"><i class="fa fa-caret-down "> </i></span> ' : '';
			$item_output .= '</a>';
			$item_output .= (is_object($args) ? $args->after : '');
			$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
		}

		public function start_lvl(&$output, $depth = 0, $args = array())
		{
			$indent = str_repeat("\t", $depth);
			$output .= "\n$indent<ul class=\"sub-menu dropdown-menu\">\n";
		}
	}
}
//End My New Menu Class

//Check mobile
function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
// End check mobile
//Add menu mobile
function print_mobile_menu($atts, $content = null) {

    extract(shortcode_atts(array(
    'name' => null,
    'container'     => false,
    'menu_class'       => 'webexp24h_menu_mobile_nav menu_mobile_nav',
    'menu_id'       => 'webexp24h_menu_mobile_nav',
    ), $atts));
    return wp_nav_menu( array(
        'menu' => $name,
        'menu_class'       => $menu_class,
        'menu_id'       => $menu_id,
        'walker'        => new WebExp24h_Mobile_Nav_Walker_Nav_Menu(),
        'echo' => false ) );
}
add_shortcode('mobile-nav', 'print_mobile_menu');
//[mobile-nav name="main-menu" menu_class="nav webexp24h_menu_mobile_nav navbar-nav" menu_id="webexp24h_menu_mobile_nav"]

//chuyển hướng contact form 7
// add_action( 'wp_footer', 'redirect_cf7' );
// function redirect_cf7() {
//
// <script type="text/javascript">
// document.addEventListener( 'wpcf7mailsent', function( event ) {
//        location = '/form-submitted/';
// }, false );
// </script>
//

?>
