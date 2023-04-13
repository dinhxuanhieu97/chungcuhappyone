<?php
 /**
* template name: single-product
*/
 get_header();
 get_template_part('sections/breadcum');
 ?>
 <section class="section__wrapper wrapper" id="singlePost">
   <div class="container">
       <div class="row-divide">
           <div class="col-divide-7 col-divide-md-12">
               <div id="single-post__image" class="">
                   <div class="single-post__image-label">
                       <span class="product-box new-box">
                           <span class="label-new">Mới</span>
                       </span>
                   </div>
                   <div class="show-single-product-image">
                     <div id="showSingleProduct">
                       <?php  while(have_rows('product_gallery')) : the_row(); ?>
                         <div class="product__img" style="height:100%">
                             <img src="<?php echo get_sub_field('product_gallery')?>" alt="nha pho van xuan" />
                         </div>
                         <?php endwhile; ?>
                     </div>
                 </div>

             <ul class="product--infor-detail">
                 <li class="product-detail-detail">
                   <img class="product__icon-image" src="<?php echo get_theme_file_uri('./assets/images/area.png'); ?>" alt="">
                   <p><b>Diện tích đất: </b><?php echo get_field('dien_tich') ?> (m2) </p>
               </li>
               <li class="product-detail-detail">
                   <img class="product__icon-image" src="<?php echo get_theme_file_uri('./assets/images/map.png'); ?>" alt="">
                   <p><b>Hướng: </b><?php echo get_field('huong_san_pham') ?></p>
               </li>
               <li class="product-detail-detail">
                   <img class="product__icon-image" src="<?php echo get_theme_file_uri('./assets/images/loai.png'); ?>" alt="">
                   <p><b>Loại đất: </b><?php echo get_field('loai-dat') ?></p>
               </li>
               <li class="product-detail-detail">
                   <img class="product__icon-image" src="<?php echo get_theme_file_uri('./assets/images/road.png'); ?>" alt="">
                   <p><b>Đường trước: </b><?php echo get_field('duong_truoc_nha') ?> (m) </p>
               </li>
               <li class="product-detail-detail">
                   <img class="product__icon-image" src="<?php echo get_theme_file_uri('./assets/images/phap-ly.png'); ?>" alt="">
                   <p><b>Pháp lý: </b><?php echo get_field('schematic_product') ?></p>
               </li>
           </ul>

         </div>
     </div>

         <div class="col-divide-5 col-divide-md-12 page_style">
           <div class="product__contain">
               <div> <h2><?php the_title(); ?></h2> </div>
               <div class="product__contain-infor my-10">
                   <?php
                   $company_phone = get_field('company_phone','option');
                   $company_email = get_field('company_email','option');
                   ?>
                   <ul class="list-style-none line--height">
                       <li class="product-cout">
                           <b>Giá: </b><?php echo get_field('price_product'); ?> &nbsp;<?php echo get_field('Unit_price_product'); ?>
                       </li>
                       <li class="product-detail"><p><?php echo get_field('content_products')?></p></li>
                       <!-- <li class="product-detail">
                           <?php  while(have_rows('property')) : the_row(); ?>
                               <p><b><?php echo get_sub_field('property_product')?>: </b> <?php echo get_sub_field('property_product_value')?></p>
                           <?php endwhile; ?>
                       </li> -->
                   </ul>
                </div>
              </div>
             </div>
           </div>
         <?php get_template_part('sections/products-outstanding'); ?>
         <?php get_template_part('sections/related-post'); ?>
     </div>
 </section>
 <?php get_footer(); ?>
