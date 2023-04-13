<section class="partner section__wrapper">
	<div class="text--center">
		<h3 class="title--section title--background">Đối tác Vạn Xuân</h3>
	</div>
  <div class="partner_carousel">
			<?php while(have_rows('partner-img','option')) : the_row();?>
	    <div class="doi-tac-items col-divide-3 col-divide-md-4 col-divide-sm-6">
	      <div class="doi-tac-imgs">
					<img src="<?php echo get_sub_field('partner-img-items','option') ?>" alt="đối tác viva homes">
				</div>
				<div class="title--item text--center"><p><?php echo get_sub_field('partner-name','option') ?></p></div>
	    </div>
	    <?php endwhile; ?>
  </div>
</section>
