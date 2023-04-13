 <?php
 /**
 * template name: archive
 */
 get_header();
 get_template_part('sections/breadcum');
?>
 <section class="wrapper" id="PostCategoryTintuc">
   <div class="container">
     <div class="row-divide">
       <div class="col-divide-3 col-divide-md-12 col-divide-sm-12">
         <?php get_template_part('sections/sidebar-menu');?>
         <div class="widget--sidbar">
           <?php if (is_active_sidebar('sidebar')){dynamic_sidebar('sidebar');}?>
         </div>
       </div>
       <div class="col-divide-9 col-divide-md-12 col-divide-sm-12">
         <h3 class="title--section title--background text--upcase my-0"><?php single_cat_title(); ?></h3>
         <div>
           <?php the_excerpt(); ?>
         </div>
         <div class="row-divide">
           <?php while(have_posts()) : the_post(); $price= get_field('price_product');?>
           <a class="d--block col-divide-6 col-divide-md-12 my-10" href="<?php the_permalink()?>">
             <div class="product__item d--flex border--solid-1 p-12">
               <div class="product__item-img position--relative">
                 <?php the_post_thumbnail('thumbnail') ?>
               </div>
               <div class="product__item-info">
                 <p class="title--item"><?php the_title(); ?></p>
                 <?php  while(have_rows('property')) : the_row();   ?>
                 <p><b><?php echo get_sub_field('property_product')?>:
                   </b><?php echo get_sub_field('property_product_value')?></p>
                 <?php endwhile; ?>
                 <p><b>Giá: </b><?php echo $price; ?></p>
               </div>
             </div>
           </a>
           <?php endwhile; ?>
         </div>
         <?php the_posts_pagination(); ?>
       </div>
     </div>
   </div>

 </section>
 <?php
 get_footer();
?>