<?php
// Projects post type
function theme_projects(){
  $label = array(
    'name' => 'Dự án',
    'singular_name' => 'Dự án' ,
     'add_new'              => __( 'Thêm dự án', 'textdomain' ),
    'add_new_item'          => __( 'Tên dự án', 'textdomain' ),
    'new_item'              => __( 'Sản phẩm mới', 'textdomain' ),
    'edit_item'             => __( 'Chỉnh sửa dự án', 'textdomain' ),
    'view_item'             => __( 'Xem dự án', 'textdomain' ),
    'all_items'             => __( 'Tất cả dự án', 'textdomain' ),
    'search_items'          => __( 'Tìm kiếm dự án', 'textdomain' ),
    'featured_image'        => _x( 'Hình ảnh dự án', 'textdomain' ),
    'set_featured_image'    => _x( 'Chọn hình ảnh dự án', 'textdomain' ),
    'remove_featured_image' => _x( 'Xóa hình ảnh dự án', 'textdomain' ),
  );
    $args = array(
      'labels' => $label,
      'description' => 'Phần dự án',
      'supports' => array(
      'title',
      'thumbnail',
      'custom-fields'
      ),
      'hierarchical' => false,
      'order' => 'DESC',
      'orderby' => 'date',
      'posts_per_page' => 30,
      'public' => true,
      'show_ui' => true,
      'show_in_menu' => true,
      'show_in_nav_menus' => true,
      'show_in_admin_bar' => true,
      'show_in_rest' => true,
      'menu_position' => 5,
      'menu_icon'           => 'dashicons-products',
      'can_export' => true,
      'has_archive' => true,
      'publicly_queryable' => true,
      'capability_type' => 'post'
    );
    register_post_type('projects', $args);
}
add_action('init', 'theme_projects');

function make_taxonomy_theme_projects() {
        $labels = array(
          'name' => 'Phân loại dự án',
          'singular' => 'Phân loại dự án',
          'menu_name' => 'Phân loại dự án',
          'add_new_item' => __( 'Thêm phân loại dự án' ),
        );
        $args = array(
          'labels'   => $labels,
          'supports' => array(
          'title',
          'thumbnail',
          'custom-fields'
          ),
          'hierarchical'               => true,
          'public'                     => true,
          'show_ui'                    => true,
          'show_admin_column'          => true,
          'show_in_rest'               => true,
          'show_in_nav_menus'          => true,
          'show_tagcloud'              => true,
        );
        register_taxonomy('du-an-van-xuan', 'projects', $args);
}
add_action( 'init', 'make_taxonomy_theme_projects', 0 );
function make_taxonomy_theme_projects_brand() {
        $labels = array(
          'name' => 'Nguồn dự án',
          'singular' => 'Nguồn dự án',
          'menu_name' => 'Nguồn dự án',
          'add_new_item' => __( 'Thêm nguồn dự án' ),
        );
        $args = array(
          'labels'   => $labels,
          'supports' => array(
          'title',
          'thumbnail',
          'custom-fields'
          ),
          'hierarchical'               => true,
          'public'                     => true,
          'show_ui'                    => true,
          'show_admin_column'          => true,
          'show_in_rest'               => true,
          'show_in_nav_menus'          => true,
          'show_tagcloud'              => true,
        );
        register_taxonomy('du-an-van-xuan', 'projects', $args);
}
add_action( 'init', 'make_taxonomy_theme_projects_brand', 0 );

// Products post type
function theme_products(){
  $label = array(
    'name' => 'Nhà phố',
    'singular_name' => 'Sản phẩm' ,
     'add_new'              => __( 'Thêm sản phẩm', 'textdomain' ),
    'add_new_item'          => __( 'Tên sản phẩm', 'textdomain' ),
    'new_item'              => __( 'Sản phẩm mới', 'textdomain' ),
    'edit_item'             => __( 'Chỉnh sửa sản phẩm', 'textdomain' ),
    'view_item'             => __( 'Xem sản phẩm', 'textdomain' ),
    'all_items'             => __( 'Tất cả sản phẩm', 'textdomain' ),
    'search_items'          => __( 'Tìm kiếm sản phẩm', 'textdomain' ),
    'featured_image'        => _x( 'Hình ảnh sản phẩm', 'textdomain' ),
    'set_featured_image'    => _x( 'Chọn hình ảnh sản phẩm', 'textdomain' ),
    'remove_featured_image' => _x( 'Xóa hình ảnh sản phẩm', 'textdomain' ),
  );
    $args = array(
      'labels' => $label,
      'description' => 'Phần sản phẩm',
      'supports' => array(
      'title',
      'thumbnail',
      'custom-fields'
      ),
      'hierarchical' => false,
      'order' => 'DESC',
      'orderby' => 'date',
      'posts_per_page' => 30,
      'public' => true,
      'show_ui' => true,
      'show_in_menu' => true,
      'show_in_nav_menus' => true,
      'show_in_admin_bar' => true,
      'show_in_rest' => true,
      'menu_position' => 5,
      'menu_icon'           => 'dashicons-products',
      'can_export' => true,
      'has_archive' => true,
      'publicly_queryable' => true,
      'capability_type' => 'post'
    );
    register_post_type('products', $args);
}
add_action('init', 'theme_products');

function make_taxonomy_theme() {
        $labels = array(
          'name' => 'Phân loại sản phẩm',
          'singular' => 'Phân loại sản phẩm',
          'menu_name' => 'Phân loại sản phẩm',
          'add_new_item' => __( 'Thêm phân loại sản phẩm' ),
        );
        $args = array(
          'labels'   => $labels,
          'supports' => array(
          'title',
          'thumbnail',
          'custom-fields'
          ),
          'hierarchical'               => true,
          'public'                     => true,
          'show_ui'                    => true,
          'show_admin_column'          => true,
          'show_in_rest'               => true,
          'show_in_nav_menus'          => true,
          'show_tagcloud'              => true,
        );
        register_taxonomy('du-an', 'products', $args);
}
add_action( 'init', 'make_taxonomy_theme', 0 );

function make_taxonomy_theme_products_brand() {
        $labels = array(
          'name' => 'Nguồn dự án',
          'singular' => 'Nguồn dự án',
          'menu_name' => 'Nguồn dự án',
          'add_new_item' => __( 'Thêm nguồn dự án' ),
        );
        $args = array(
          'labels'   => $labels,
          'supports' => array(
          'title',
          'thumbnail',
          'custom-fields'
          ),
          'hierarchical'               => true,
          'public'                     => true,
          'show_ui'                    => true,
          'show_admin_column'          => true,
          'show_in_rest'               => true,
          'show_in_nav_menus'          => true,
          'show_tagcloud'              => true,
        );
        register_taxonomy('du-an-van-xuan', 'projects', $args);
      }
add_action( 'init', 'make_taxonomy_theme_products_brand', 0 );
?>
