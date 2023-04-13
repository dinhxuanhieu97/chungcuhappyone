
<!-- *Sections: header -->
<section class="header">
	<!-- hot trend -->
		<div class="header__hot-trend">
			<div class="container">
				<div class="row-divide">
					<div class="col-divide-8 col-divide-md-8 col-divide-sm-12">
						<div class="trending-slide">
							<p style="display:flex; align-item:center;">
								<b style="color:white"><i class="fa fa-bolt"></i> Tin mới: </b>
								<?php
							  $args = array(
							  'post_type' => 'post',
							  'post_status' => 'publish',
							  );
							  $new_list = new WP_Query($args); if( $new_list -> have_posts()) : ?>

								<marquee scrolldelay="3s" class="marquee-item">
									<?php	while($new_list -> have_posts()) : $new_list -> the_post();	?>
									<a href="<?php the_permalink();?>"><?php echo the_title(); ?></a>
								<?php	endwhile;	wp_reset_postdata();?>
								<?php	else : esc_html_e( 'No testimonials in the diving taxonomy!', 'text-domain' ); endif;	?>
								</marquee>
							</p>
						</div> <!--/.trending-slide-->
					</div>
					<div class="col-divide-4 col-divide-md-4 col-divide-sm-12 position--relative">
						<div class="position--relative">
							<input type="text" id="Search" placeholder=" Tìm kiếm sản phẩm..." onkeyup="showData()"  name="search">
						</div>
						<div class="show__search d--none" id="dataResult">
							<div id="styleResultSearch">
							</div>
						</div>
					</div>
					<!-- end col -->
				</div>
				<!-- end row -->
			</div>
		</div>

		<!-- menu header -->
		<div class="header__contain">
			<div class="container">
				<div class="d--flex">
					<div id="logo__main">
						<a href="<?php echo site_url(); ?>" class="d--block logo">
							<img src="<?php echo get_field('logo', 'option') ?>" alt="chung cu happy one van xuan">
						</a>
					</div>

					<div class="center--flex header__item dp--none ">
						<?php wp_nav_menu(array('theme_location' => 'headerMenuLocation' )); ?>
					</div>

					<!-- button hotline -->
          <!-- <div class="btn-call-main-menu phone-ring-circle heartbeat">
              <div class="hotline-phone-ring-circle"></div>
              <a class="phone_btn btn" href="tel:<?php //echo get_field('company_phone','option'); ?>" title="gọi ngay">
                  <i class="fa fa-phone" aria-hidden="true"></i><?php //echo get_field('company_phone','option'); ?>
              </a>
          </div> -->

	        <div id="icon_bar" class="navbar-header toggle">
	          <span class="navbar-toggle" ><i class="fa fa-bars"></i></span>
	        </div>
	        <nav style="display: none;"  class="hide mobile_menu">
	          <?php  echo do_shortcode('[mobile-nav name="main-menu" menu_class="webexp24h_menu_mobile_nav" menu_id="webexp24h_menu_mobile_nav"]');?>
	        </nav>
				</div>
			</div>
		</div>
</section>

<script type="text/javascript">
	jQuery(document).ready(function () {
		jQuery(window).scroll(function(){
			var scroll = jQuery(window).scrollTop();
			if (scroll >= 50) {
				jQuery(".header__contain").addClass("header_menu_wrapper");
			} else if (scroll <= 50) {
				jQuery(".header__contain").removeClass("header_menu_wrapper");
			}
		});
	});
</script>
