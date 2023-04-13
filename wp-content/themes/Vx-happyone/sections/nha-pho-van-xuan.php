<div class="row-divide">
  <div class="col-divide-9 col-divide-md-6 col-divide-sm-12">
     <div class="product">
       <div class="product__contain--banner">
         <?php while(have_rows('banner_home_ads' , 'option')) : the_row(); ?>
            <a href="<?php echo get_sub_field('link_bannner_ads','option') ?>" class="product__banner">
                 <img src="<?php echo get_sub_field('banner_ads','option') ?>" alt="<?php echo get_sub_field('banner_ads','option') ?>">
            </a>
            <?php endwhile;?>
          </div>
          <div class="product__popular">
            <div class="text--center">
              <h2 class="title--section text--upcase">Dự án VX Home - Nhà phố Vạn Xuân</h2>
            </div>
              <p class="mb-10"><b>Vạn Xuân Group</b> đã triển khai và xây dựng thành công hơn 50 khu nhà phố Vx Home và biệt thự Vạn Xuân cao cấp tại Thành phố Hồ Chí Minh. Đặc biệt là Quận 12, Gò Vấp và Thủ Đức</p>
               <div class="product__list row-divide">
                <?php
                     // WP_Query arguments
                     $args = array (
                          'post_type'              => array( 'products' ),
                          'post_status'            => array( 'publish' ),
                          'nopaging'               => true,
                          'order'                  => 'DESC',
                          'orderby'                => 'menu_order',
                                    );
                     // The Query
                          $productsPopular = new WP_Query( $args );
                     // The Loop
                     if ( $productsPopular ->have_posts() ) {
                     while ( $productsPopular ->have_posts() ) {
                       $productsPopular ->the_post();
                       $pricePopular= get_field('price_product');
                       $newProductPopular = get_field('popular_product');
                     if($newProductPopular == 1){
                     ?>
                     <div class="product__posts d--block col-divide-6 col-divide-md-12 col-divide-sm-12 my-10 position--relative">
                      <a href="<?php the_permalink()?>">
                        <div class="product__item d--flex border--solid-1 p-12">
                          <div class="product__item-img position--relative"><?php the_post_thumbnail('thumbnail') ?></div>
                          <div class="mx-10">
                               <p class="title--item"><?php the_title(); ?></p>
                               <?php  while(have_rows('property')) : the_row();   ?>
                                    <p><b><?php echo get_sub_field('property_product')?>: </b><?php echo get_sub_field('property_product_value')?></p>
                               <?php endwhile; ?>
                               <p><b>Giá: </b><?php echo $pricePopular; ?> tỷ</p>
                          </div>
                        </div>
                      </a>
                      <div class="btn-small product__item-btn">
                        <a class="add_to_compare btn" href="<?php the_permalink()?>" title="Xem chi tiết"> <span>Xem chi tiết</span> <i class="fa fa-refresh"></i> </a>
                      </div>
                     </div>
                     <?php }}
                     } else { echo "Không tìm thấy bài viết!!!";}
                     // Restore original Post Data
                     wp_reset_postdata();
                ?>

           </div>
      </div>
  </div>
  <?php get_template_part('sections/btn--seen-more'); ?>
</div>
<div class="col-divide-3 col-divide-md-6 col-divide-sm-12">

   <?php get_template_part('sections/sidebar-menu');?>
   <div class="widget--sidbar section__wrapper">
        <?php if (is_active_sidebar('sidebar')){dynamic_sidebar('sidebar');}?>
   </div>
</div>
</div>
