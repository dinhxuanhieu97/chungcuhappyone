 <?php
 /**
 * template name: Liên hệ
 */
 get_header();
?>
<?php
     get_template_part('sections/breadcum');
     ?>
<section class="section__wrapper" id="contact">
	<div class="container">
		<div class="row-divide">
			<div class="col-divide-9 col-divide-md-8 col-divide-sm-12 text--center">
				<h3 class="title--main title--background text--upcase my-0"> Thông tin <?php the_title(); ?></h3>
        <!-- <div class="line_blue_parent"> <span class="line_blue"></span></div> -->
				<?php
					$Company_name = get_field('Company_name','option');
					$company_address = get_field('company_address','option');
					$company_phone = get_field('company_phone','option');
					$company_fax = get_field('company_fax','option');
					$company_email = get_field('company_email','option');
					$google_map = get_field('google_map','option');
				?>
				<div class="infor-company">
					<h3 class="title--item text--upcase text--red"><?php echo $Company_name;?> </h3>
					<p><i class="fas fa-map-marker-alt mr-15"></i>Địa chỉ: <?php echo $company_address;?></p>
					<p><i class="fas fa-phone-square transform-ro90 mr-15"></i>Tel: <a href="tel:<?php echo $company_phone;?>"><?php echo $company_phone;?></a></p>
					<p><i class="fas fa-phone-square transform-ro90 mr-15"></i>Tel support:
							<?php  while(have_rows('company_phone_support','option')) : the_row();   ?>
								<a href="tel:<?php echo get_sub_field('tel-support','option') ?>"><span class="mr-15"> <?php echo get_sub_field('tel-support','option') ?></span></a>
							<?php endwhile; ?>
					</p>
					<p><i class="fas fa-envelope mr-15"></i>Email: <a href="mailto:<?php echo $company_email;?>"><?php echo $company_email;?></a></p>
					<p class="py-30 contact-map"><?php echo $google_map;?></p>
				</div>
        <!-- <?php get_template_part('sections/leave-messenger') ?> -->
			</div>
			<div class="col-divide-3 col-divide-md-4 col-divide-sm-12">
        <div class="form__contact">
          <p class="text--center title--main">Đăng ký online</p>
          <?php echo do_shortcode( '[contact-form-7 id="1259" title="Form trang liên hệ"]' ); ?> </div>
        <?php get_template_part('sections/sidebar-menu');?>
			</div>
		</div>
		<?php get_template_part('sections/related-post'); ?>
	</div>
</section>
<?php
 get_footer();
?>
