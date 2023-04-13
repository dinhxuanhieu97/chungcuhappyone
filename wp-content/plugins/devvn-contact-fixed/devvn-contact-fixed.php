<?php
/**
 * Plugin Name: DevVN Contact Fixed
 * Plugin URI: https://levantoan.com
 * Description: Contact Fixed at bottom screen
 * Version: 1.0.1
 * Author: Le Van Toan
 * Author URI: https://levantoan.com
 * Text Domain: devvn-contactfixed
 * Domain Path: /languages
 *
 */
if ( !class_exists( 'DevVN_Contact_Fixed_Class' ) ) {
    class DevVN_Contact_Fixed_Class
    {

        public $_version = '1.0.1';

        public $_optionName = 'contactfixed_options';
        public $_optionGroup = 'contactfixed-options-group';
        public $_defaultOptions = array(
            'list_contact' => array(),
            'min_screen'    =>  560,
            'active'        => 1,
            'bg_color'        => '#fff',
            'border_color'        => '#cbcbcb',
            'text_color'        => '#333',
        );


        public static function init()
        {
            is_null(self::$instance) AND self::$instance = new self;
            return self::$instance;
        }

        public function __construct()
        {

            global $contactfixed_settings;
            $contactfixed_settings  = $this->get_options();

            add_action( 'admin_menu', array( $this, 'admin_menu' ) );
            add_action( 'admin_init', array( $this, 'register_mysettings') );

            add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'add_action_links' ), 10, 2 );

            add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );

            add_action('wp_footer', array($this, 'wp_footer'), 9999);
            add_filter('body_class', array($this, 'body_class'));
        }

        function get_options(){
            return wp_parse_args(get_option($this->_optionName),$this->_defaultOptions);
        }

        function admin_menu() {
            add_options_page(
                __('Contact Fixed','devvn-contactfixed'),
                __('Contact Fixed','devvn-contactfixed'),
                'manage_options',
                'setting-contactfixed',
                array(
                    $this,
                    'settings_page'
                )
            );
        }

        function register_mysettings() {
            register_setting( $this->_optionGroup, $this->_optionName );
        }

        public function admin_enqueue_scripts() {
            $current_screen = get_current_screen();
            if ( isset( $current_screen->id ) && $current_screen->id == 'settings_page_setting-contactfixed' ) {
                wp_enqueue_style( 'wp-color-picker' );
                wp_enqueue_style('devvn-contactfixed-styles', plugins_url('/assets/admin-style.css', __FILE__), array(), $this->_version, 'all');
                wp_enqueue_script('devvn-contactfixed-js', plugins_url('/assets/admin-js.js', __FILE__), array('jquery','jquery-ui-sortable','wp-util', 'wp-color-picker'), $this->_version, true);
                wp_localize_script('devvn-contactfixed-js', 'contactfix_array', array(
                    'ajaxurl'       => admin_url('admin-ajax.php'),
                    'siteurl'       => home_url(),
                ));
            }
        }

        function settings_page() {
            global $contactfixed_settings;
            wp_enqueue_media();
            $list_contact = $contactfixed_settings['list_contact'];
            $min_screen = $contactfixed_settings['min_screen'];
            $active = $contactfixed_settings['active'];
            $bg_color = $contactfixed_settings['bg_color'];
            $border_color = $contactfixed_settings['border_color'];
            $text_color = $contactfixed_settings['text_color'];
            ?>
            <div class="wrap">
                <h1><?php _e('Cài đặt liên hệ', 'devvn-contactfixed')?></h1>
                <form method="post" action="options.php" novalidate="novalidate">
                    <?php settings_fields( $this->_optionGroup );?>
                    <table class="form-table">
                        <tbody>
                        <tr>
                            <th scope="row"><label for="active"><?php _e('Kích hoạt', 'devvn-contactfixed')?></label></th>
                            <td>
                                <input value="1" name="<?php echo $this->_optionName?>[active]" type="radio" <?php checked(1, $active, true);?> /> <?php _e('Có', 'devvn-contactfixed')?>
                                <input value="0" name="<?php echo $this->_optionName?>[active]" type="radio" <?php checked(0, $active, true);?>/> <?php _e('Không', 'devvn-contactfixed')?>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="bg_color"><?php _e('Màu nền', 'devvn-contactfixed')?></label></th>
                            <td>
                                <input value="<?php echo $bg_color;?>" name="<?php echo $this->_optionName?>[bg_color]" type="text" class="color_picker" data-default-color="<?php echo $this->_defaultOptions['bg_color']?>"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="border_color"><?php _e('Màu viền', 'devvn-contactfixed')?></label></th>
                            <td>
                                <input value="<?php echo $border_color;?>" name="<?php echo $this->_optionName?>[border_color]" type="text" class="color_picker" data-default-color="<?php echo $this->_defaultOptions['border_color']?>"/><br>
                                <small>Nếu bạn không thích có viền thì xóa màu tại mục này. Để trống mã màu là được.</small>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="text_color"><?php _e('Màu chữ', 'devvn-contactfixed')?></label></th>
                            <td>
                                <input value="<?php echo $text_color;?>" name="<?php echo $this->_optionName?>[text_color]" type="text" class="color_picker" data-default-color="<?php echo $this->_defaultOptions['text_color']?>"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="min_screen"><?php _e('Kích thước màn hình', 'devvn-contactfixed')?></label></th>
                            <td>
                                <input value="<?php echo $min_screen;?>" name="<?php echo $this->_optionName?>[min_screen]" type="number"/>px<br>
                                <small><?php _e('Kích thước màn hình lớn nhất để bắt đầu hiển thị liên hệ', 'devvn-contactfixed');?></small>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="list_contact"><?php _e('Danh sách liên hệ', 'devvn-contactfixed')?></label></th>
                            <td>
                                <table class="widefat contactfixed_tablesetting">
                                    <thead>
                                    <tr>
                                        <th><?php _e('Icon', 'devvn-contactfixed')?></th>
                                        <th><?php _e('Tiêu đề', 'devvn-contactfixed')?></th>
                                        <th><?php _e('Đường dẫn', 'devvn-contactfixed')?></th>
                                        <th><?php _e('Màu nền', 'devvn-contactfixed')?></th>
                                        <th><?php _e('Màu chữ', 'devvn-contactfixed')?></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody class="contactfixed_tbody">
                                    <?php if($list_contact):?>
                                        <?php foreach ($list_contact as $key=>$sp):
                                            $imgid = isset($sp['icon']) ? intval($sp['icon']) : '';
                                            $tieude = isset($sp['tieude']) ? esc_attr($sp['tieude']) : '';
                                            $mau_nen = isset($sp['mau_nen']) ? esc_attr($sp['mau_nen']) : '';
                                            $mau_chu = isset($sp['mau_chu']) ? esc_attr($sp['mau_chu']) : '';
                                            $link = isset($sp['link']) ? $sp['link'] : '';
                                            ?>
                                            <tr>
                                                <td>
                                                    <div class="svl-upload-image <?php if($imgid):?>has-image<?php endif;?>">
                                                        <div class="view-has-value">
                                                            <input type="hidden" class="text clone_delete" name="<?php echo $this->_optionName?>[list_contact][<?php echo $key;?>][icon]" id="contact_icon" value="<?php echo $imgid;?>"/>
                                                            <img src="<?php echo wp_get_attachment_image_url($imgid,'full')?>" class="image_view pins_img"/>
                                                            <a href="#" class="svl-delete-image">x</a>
                                                        </div>
                                                        <div class="hidden-has-value"><input type="button" class="ireel-upload button" value="<?php _e( 'Chọn icon', 'devvn-contactfixed' )?>" /></div>
                                                    </div>
                                                </td>
                                                <td><input value="<?php echo $tieude;?>" name="<?php echo $this->_optionName?>[list_contact][<?php echo $key;?>][tieude]" type="text"/></td>
                                                <td><input value="<?php echo $link;?>" name="<?php echo $this->_optionName?>[list_contact][<?php echo $key;?>][link]" type="text"/></td>
                                                <td><input value="<?php echo $mau_nen;?>" name="<?php echo $this->_optionName?>[list_contact][<?php echo $key;?>][mau_nen]" type="text" class="color_picker" data-default-color=""/></td>
                                                <td><input value="<?php echo $mau_chu;?>" name="<?php echo $this->_optionName?>[list_contact][<?php echo $key;?>][mau_chu]" type="text" class="color_picker" data-default-color=""/></td>
                                                <td>
                                                    <input type="button" class="button devvn_button devvn_delete_contact" value="<?php _e('Xóa', 'devvn-contactfixed')?>">
                                                </td>
                                            </tr>
                                            <?php endforeach;?>
                                    <?php endif;?>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td colspan="6"><input type="button" class="button devvn_button devvn_add_contact" value="<?php _e('Thêm liên hệ', 'devvn-contactfixed')?>"></td>
                                    </tr>
                                    </tfoot>
                                </table>
                                <p>
                                    Link gọi điện dạng: tel:{SĐT} ví dụ tel:0936307069<br>
                                    Link nhắn tin dạng: sms:{SĐT} ví dụ sms:0936307069<br>
                                    Link zalo dạng: https://zalo.me/{SĐT - Hoặc Tên người dùng} ví dụ https://zalo.me/toanlevan<br>
                                    Link facebook messenger dạng: https://m.me/{tên_facebook} ví dụ https://m.me/levantoan.wp<br>
                                </p>
                                <script type="text/html" id="tmpl-devvn-trcontact">
                                    <tr>
                                        <td>
                                            <div class="svl-upload-image">
                                                <div class="view-has-value">
                                                    <input type="hidden" class="text clone_delete" name="<?php echo $this->_optionName?>[list_contact][id_{{{ data.stt }}}][icon]" id="contact_icon" value=""/>
                                                    <img src="" class="image_view pins_img"/>
                                                    <a href="#" class="svl-delete-image">x</a>
                                                </div>
                                                <div class="hidden-has-value"><input type="button" class="ireel-upload button" value="<?php _e( 'Chọn icon', 'devvn-contactfixed' )?>" /></div>
                                            </div>
                                        </td>
                                        <td><input value="" name="<?php echo $this->_optionName?>[list_contact][id_{{{ data.stt }}}][tieude]" type="text"/></td>
                                        <td><input value="" name="<?php echo $this->_optionName?>[list_contact][id_{{{ data.stt }}}][link]" type="text"/></td>
                                        <td><input value="" name="<?php echo $this->_optionName?>[list_contact][id_{{{ data.stt }}}][mau_nen]" type="text" class="color_picker" data-default-color=""/></td>
                                        <td><input value="" name="<?php echo $this->_optionName?>[list_contact][id_{{{ data.stt }}}][mau_chu]" type="text" class="color_picker" data-default-color=""/></td>
                                        <td>
                                            <input type="button" class="button devvn_button devvn_delete_contact" value="<?php _e('Xóa', 'devvn-contactfixed')?>">
                                        </td>
                                    </tr>
                                </script>
                            </td>
                        </tr>
                        <?php do_settings_fields($this->_optionGroup, 'default'); ?>
                        </tbody>
                    </table>
                    <?php do_settings_sections($this->_optionGroup, 'default'); ?>
                    <?php submit_button();?>
                </form>
            </div>
            <?php
        }

        public function add_action_links( $links, $file ) {
            if ( strpos( $file, 'devvn-contact-fixed.php' ) !== false ) {
                $settings_link = '<a href="' . admin_url( 'options-general.php?page=setting-contactfixed' ) . '" title="'.__('View Settings','devvn-contactfixed').'">' . __( 'Settings', 'devvn-contactfixed' ) . '</a>';
                array_unshift( $links, $settings_link );
            }
            return $links;
        }

        function body_class($classes)
        {
            global $contactfixed_settings;
            $list_contact = $contactfixed_settings['list_contact'];
            $active = $contactfixed_settings['active'];
            if($list_contact && !empty($list_contact) && $active) {
                $classes[] = 'has_devvn_toolbar';
            }
            return $classes;
        }

        function wp_footer()
        {
            global $contactfixed_settings;
            $list_contact = $contactfixed_settings['list_contact'];
            $min_screen = $contactfixed_settings['min_screen'];
            $active = $contactfixed_settings['active'];
            $bg_color = $contactfixed_settings['bg_color'];
            $border_color = $contactfixed_settings['border_color'];
            $text_color = $contactfixed_settings['text_color'];
            if($list_contact && !empty($list_contact) && $active){
            ?>
                <style>
                    .devvn_toolbar{
                        display: none;
                    }
                    @media (max-width: <?php echo $min_screen;?>px) {
                        body.has_devvn_toolbar {
                            padding-bottom: 50px;
                        }

                        .devvn_toolbar {
                            background: <?php echo $bg_color;?>;
                            display: inline-block;
                            width: 100%;

                            bottom: 0;
                            left: 0;
                            position: fixed;
                            z-index: 99999999;
                            height: auto;
                            padding: 0;
                            border-top: 0;

                            visibility: hidden;
                            opacity: 0;

                            transform: translate3d(0,120%,0);
                            -moz-transform: translate3d(0,120%,0);
                            -webkit-transform: translate3d(0,120%,0);

                            transition: all .3s linear;
                            -moz-transition: all .3s linear;
                            -webkit-transition: all .3s linear;
                        }

                        .show_contactfix .devvn_toolbar {
                            transform: translate3d(0,0,0);
                            -moz-transform: translate3d(0,0,0);
                            -webkit-transform: translate3d(0,0,0);
                            visibility: visible;
                            opacity: 1;
                        }

                        <?php if($border_color){ ?>
                        .devvn_toolbar {
                            border-top: 1px solid <?php echo $border_color;?>;
                        }
                        <?php }?>

                        .devvn_toolbar ul {
                            list-style: none;
                            padding: 0;
                            margin: 0;
                            display: table;
                            border-collapse: collapse;
                            table-layout: fixed;
                            width: 100%;
                        }

                        .devvn_toolbar ul li {
                            text-align: center;
                            display: table-cell;
                            vertical-align: top;
                        }

                        .devvn_toolbar ul li a {
                            display: inline-block;
                            width: 100%;
                            outline: none;
                            text-decoration: none;
                            padding: 5px 3px;
                        }

                        .devvn_toolbar ul li a span {
                            font-family: 'Roboto', sans-serif;
                            font-weight: 400;
                            color: <?php echo $text_color;?>;
                            font-size: 3.5vw;
                        }

                        .devvn_toolbar ul li a img {
                            height: 6vw;
                            width: auto;
                        }

                        .woocommerce-checkout .devvn_toolbar {
                            display: none !important;
                        }
                    }
                </style>
                <div class="devvn_toolbar">
                    <ul>
                        <?php
                        $i = 1;
                        foreach($list_contact as $contact):
                        $imgid = isset($contact['icon']) ? intval($contact['icon']) : '';
                        $tieude = isset($contact['tieude']) ? esc_attr($contact['tieude']) : '';
                        $link = isset($contact['link']) ? $contact['link'] : '';
                        $mau_nen = isset($contact['mau_nen']) ? esc_attr($contact['mau_nen']) : '';
                        $mau_chu = isset($contact['mau_chu']) ? esc_attr($contact['mau_chu']) : '';
                        ?>
                        <li>
                            <a href="javascript:callme('<?php echo $link;?>')" id="devvn_contact_<?php echo $i;?>" title="<?php echo $tieude;?>" <?php if($mau_nen):?>style="background-color: <?php echo $mau_nen;?>;"<?php endif;?>>
                                <?php echo wp_get_attachment_image($imgid, 'full');?><br>
                                <span <?php if($mau_chu):?>style="color: <?php echo $mau_chu;?>;"<?php endif;?>><?php echo $tieude;?></span>
                            </a>
                        </li>
                        <?php $i++; endforeach;?>
                    </ul>
                </div>
                <script>
                    function callme(url){
                        window.location = url;
                    }
                    (function ($) {
                        $(document).ready(function () {
                            function dcf_scroll_element(){
                                $top = jQuery(window).scrollTop();
                                if( $top >= 50 && !($('body').hasClass('show_contactfix')) ){
                                    $('body').addClass('show_contactfix');
                                }else if($top < 50 && $('body').hasClass('show_contactfix') ){
                                    $('body').removeClass('show_contactfix');
                                }
                            }
                            dcf_scroll_element();
                            $(window).scroll(function(){
                                dcf_scroll_element();
                            });
                        });
                    })(jQuery);
                </script>

            <?php
            }
        }
    }

    new DevVN_Contact_Fixed_Class();
}