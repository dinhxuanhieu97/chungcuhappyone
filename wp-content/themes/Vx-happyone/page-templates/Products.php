<?php
/**
* template name: Sản phẩm
*/
get_header();
get_template_part('sections/breadcum');
?>
<section class="section__wrapper" id="products">
  <div class="container">
   <div class="row-divide">
     <div class="col-divide-3 col-divide-md-4 col-divide-sm-12">
       <?php get_template_part('sections/sidebar-menu');?>
       <div class="widget--sidbar section__wrapper">
         <?php if (is_active_sidebar('sidebar')){dynamic_sidebar('sidebar');}?>
       </div>
     </div>
     <div class="col-divide-9 col-divide-md-8 col-divide-sm-12">
       <h3 class="title--main title--background text--upcase my-0">Sản phẩm đang bán</h3>
       <div class="products my-20">
           <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
           $args = array(
             'post_type'      => array( 'products' ),
             'posts_per_page' => 12,
             'post_status'=>'publish',
             'orderby' => 'menu_order',
             'order'=> 'ASC',
             'paged'=>$paged
           );
           $query = new WP_Query($args);

           if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post();$price= get_field('price_product'); ?>
            <div class="product__posts my-10 position--relative">
             <a href="<?php the_permalink()?>">
              <div class="product__item d--flex">
                <div class="product__item-img position--relative"><?php the_post_thumbnail('thumbnail') ?></div>
               <div class="mx-10">
                 <p class="title--item"><?php the_title(); ?></p>
                 <?php  while(have_rows('property')) : the_row();   ?>
                  <p><b><?php echo get_sub_field('property_product')?>: </b><?php echo get_sub_field('property_product_value')?></p>
                <?php endwhile; ?>
                <p class="font--weight--600"><?php echo $price; ?> <?php echo get_field('Unit_price_product'); ?></p>

                <div class="product-detail-detail">
                  <img class="product__icon-image" src="<?php echo get_theme_file_uri('./assets/images/area.png'); ?>" alt="">
									<p><b>Diện tích đất: </b><?php echo get_field('dien_tich') ?> (m2)</p>
								</div>
                <div class="product-detail-detail">
                  <img class="product__icon-image" src="<?php echo get_theme_file_uri('./assets/images/map.png'); ?>" alt="">
									<p><b>Hướng:</b> <?php echo get_field('huong_san_pham') ?></b>
								</div>

              </div>
            </div>
          </a>
        </div>
      <?php endwhile; ?>

    <div id="news-navigation">
      <?php
      $GLOBALS['wp_query']->max_num_pages = $query->max_num_pages;
      the_posts_pagination( array(
        'mid_size' => 3,
        'prev_text' => __( '<', 'page-found' ),
        'next_text' => __( '>', 'page-found' ),
      ) ); ?>
    </div>

    <?php else : ?>
     <h4><?php _e('Not Found','page-found'); ?></h4>
     <p><?php _e("Sorry, but you are looking for something that isn't here.",'page-found'); ?></p>
   <?php endif; ?>
 </div>
</div>
<div class="col-divide-2 col-divide-md-6 col-divide-sm-12"></div>
</div>
</div>
</section>

<?php get_footer(); ?>
