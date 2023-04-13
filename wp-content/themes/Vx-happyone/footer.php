<?php wp_footer(); ?>
<!-- Begin Nút like Facebook -->
<!-- <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v13.0&appId=2526379767590380&autoLogAppEvents=1" nonce="AaXgJSd0"></script> -->
<!-- End Nút like Facebook -->
<section class="footer">
    <div class="footer__main mt-20">
        <div class="main__contain container">
            <div class="row-divide">
                <div class="col-divide-3 col-divide-md-3 col-divide-sm-12">
                    <h4><?php echo get_field('title_chinh_sach','option'); ?></h4>
                    <div class="line_blue_parent"> <span class="line_blue"></span></div>
                    <div class="left__footer-hd">
                        <a href="<?php echo site_url("huong-dan-mua-hang"); ?>">Hướng dẫn mua hàng</a>
                    </div>
                    <div class="left__footer-hd">
                        <a href="<?php echo site_url("hinh-thuc-thanh-toan"); ?>">Hình thức thanh toán</a>
                    </div>
                    <div class="left__footer-hd">
                        <a href="<?php echo site_url("chinh-sach-bao-mat"); ?>">Chính sách bảo mật</a>
                    </div>
                </div>

                <div class="col-divide-5 col-divide-md-5 col-divide-sm-12 mid-footer">
                    <div class="title_contact">
                        <h3 class="text--upcase"><?php echo get_field('Company_name','option'); ?></h3>
                        <div class="line_blue_parent"> <span class="line_blue"></span></div>
                        <div class="line--height">
                            <p><i class="fas fa-map-marker mr-15"></i>Địa chỉ:
                              <a target="_blank" rel="no-follow" href="<?php echo get_field('link_google_map','option'); ?>" title="Nhấn vào để mở google map">
                              <?php echo get_field('company_address','option'); ?></a></p>
                            <p><i class="fas fa-phone-square mr-15"></i>Điện thoại: <a href="tel:<?php echo get_field('company_phone','option'); ?>" title="Nhấn vào để gọi"><?php echo get_field('company_phone','option'); ?></a></p>
                            <p><i class="fas fa-phone-square mr-15"></i> Chăm sóc khách hàng:
                                <?php while(have_rows('company_phone_support','option')) : the_row(); ?>
                                    &nbsp;-&nbsp;<a href="tel: <?php echo get_sub_field('tel-support','option'); ?>" title="Nhấn vào để gọi"><?php echo get_sub_field('tel-support','option'); ?></a>
                                <?php endwhile; ?>
                            </p>
                            <p><i class="fas fa-envelope mr-15"></i>Email: <a href="mailto: <?php echo get_field('company_email','option'); ?>" title="Nhấn vào để gửi email"><?php echo get_field('company_email','option'); ?></a></p>
                        </div>
                    </div>
                </div>

                <div class="col-divide-4 col-divide-md-4 col-divide-sm-12 footer-location">
    			    <h3 class="text--upcase"><?php echo get_field('footer_contact_title', 'option'); ?></h3>
                    <div class="line_blue_parent"> <span class="line_blue"></span></div>
                        <div class="footer_colum_content">
                            <div class="button_social_share">
                            <a target="_blank" rel="no-follow" href="<?php echo get_field('youtube', 'option'); ?>" class="icon-button youtube-play"><i class="fa fa-youtube" aria-hidden="true"></i><span></span></a>
                            <a target="_blank" rel="no-follow" href="<?php echo get_field('facebook', 'option'); ?>" class="icon-button facebook"><i class="fa fa-facebook" aria-hidden="true"></i><span></span></a>
                            <a href="mailto:<?php echo get_field('company_email', 'option'); ?>" class="icon-button google-plus"><i class="fa fa-google" aria-hidden="true"></i><span></span></a>
                            <a target="_blank" rel="no-follow" href="<?php echo get_field('twitter', 'option'); ?>" class="icon-button twitter"><i class="fa fa-twitter" aria-hidden="true"></i><span></span></a>
                        </div>
                    <div class="social_fanpage">
                        <a target="_blank" rel="no-follow" href="<?php echo get_field('facebook', 'option'); ?>">
                            <div class="fanpage_option">
                                <div class="facebook_fan_main_image">
                                    <img class="image_fanpage" src="<?php echo get_field('img_fanpage_facebook', 'option'); ?>" alt="<?php the_title() ?>"/>
                                    <div class="facebook_fan_overlay"></div>
                                </div>

                                <div class="fanppage_content">
                                    <div class="left_facebook_fanpage">
                                        <img class="image_fanpage_logo" src="<?php echo get_field('fanpage_facebook_logo', 'option'); ?>" alt="<?php the_title() ?>" />
                                    </div>
                                    <div class="right_facebook_fanpage">
                                        <h3><?php echo get_field('fanpage_facebook_title', 'option'); ?></h3>
                                        <span class="fanpage_like_now"><i class="fa fa-facebook-square" aria-hidden="true"></i>Xem Fanpage Facebook</span>
                                        <div class="facebook_like_time"><?php echo get_field('fanpage_facebook_like_time', 'option'); ?></div>
                                    </div>
                                </div>
                            </div>
    				    </a>
                    </div>
                </div>
    		</div>
        </div>
    </div>
</div>
    <div class="footer__sub">
        <div class="container d--flex space--between">
            <a class="text--light" href="https://www.facebook.com/hieu.77k1" target="_blank">Serviced by KeyDev. All Rights Reserved.</a>
            <a class="text--light" href="<?php echo get_field('facebook', 'option'); ?>" target="_blank">© Bản quyền thuộc về Vạn Xuân Group</a>
        </div>
    </div>
</section>
<?php
    get_template_part('sections/contact-phone');
    // get_template_part('sections/popupdk');
    // get_template_part('sections/popUpNoti');
?>
<!-- <script async src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@16.1.0/dist/lazyload.min.js"></script>
  <script type="text/javascript">
  var imgLazy = document.getElementsByTagName('img');
  for( i=0; i < imgLazy.length; i++)
  {
    imgLazy[i]=imgLazy[i].classList.add("lazy");
  }
  window.lazyLoadOptions = {
          elements_selector: '.lazy',
      };
  </script> -->
</body>
</html>
