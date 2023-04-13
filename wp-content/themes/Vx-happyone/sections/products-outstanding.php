<section class="section__wrapper border--dashed-1">
    <p class="">Tin quảng cáo nổi bậc</p>
		<div class="post__news">
			<?php
        // WP_Query arguments
        $args = array (
             'post_type'              => array( 'products' ),
             'post_status'            => array( 'publish' ),
             'nopaging'               => true,
             'order'                  => 'ASC',
             'orderby'                => 'menu_order',
            );
        // The Query
        $products = new WP_Query( $args );
        // The Loop
        if ( $products ->have_posts() ) {
        while ( $products ->have_posts() ) {
        $products ->the_post();
        $price= get_field('price_product');
        $newProduct = get_field('new_product');
        if($newProduct == 1){
        ?>
			<a class="d--block my-10" href="<?php the_permalink()?>">
				<div class="product__item px-12">
					<div class="product__item-img position--relative">
						<?php the_post_thumbnail('medium') ?>
						<img class="icon-img brand-new-logo" src="<?php echo get_theme_file_uri('./assets/images/new.gif'); ?>" alt="product-new-label">
				    </div>
				    <div class="product__item-info my-10">
						<p class="title--item"><?php the_title(); ?></p>
						<?php  while(have_rows('property')) : the_row();   ?>
							 <p><b><?php echo get_sub_field('property_product')?>: </b><?php echo get_sub_field('property_product_value')?></p>
						<?php endwhile; ?>
						<p><b>Giá: </b><?php echo $price; ?> tỷ</p>
				     </div>
				</div>
			</a>

    <?php }}} else {
      echo "Không tìm thấy bài viết!!!"; }
      // Restore original Post Data
      wp_reset_postdata(); ?>
	  </div>
</section>
