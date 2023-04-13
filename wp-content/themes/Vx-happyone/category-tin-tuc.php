<?php get_header();
/**
* template name: category tin tuc
*/
 ?>
<section id="breckcrum" class="breckcrum__page">
 <div class="banner__img">
   <?php while(have_rows('banner_page', 'option')) : the_row(); ?>
       <div class="banner__img-detail">
         <img src="<?php echo get_sub_field('banner_tin_tuc', 'option'); ?>" alt="<?php echo get_sub_field('banner_tin_tuc', 'option'); ?>">
     </div>
 <?php endwhile; ?>
</div>
<div class="breckcrum__contain">
   <div class="container">
     <div class="">
       <span class="fas fa-home" href="<?php echo get_home_url(); ?> " >
         <a class="breckcrum-home" href="<?php echo get_home_url(); ?> " >Trang chủ</a>
     </span>
     <span class="breckcrum_space">&raquo;</span>
     <span class="breckcrum__the-title">Tin tức</span>
 </div>
</div>
</div>
</section>

<section class="section__wrapper" id="PostCategoryTintuc">
   <div class="container">
       <div class="row-divide">
           <div class="col-divide-3 col-divide-md-4 col-divide-sm-12 order-2">
               <?php get_template_part('sections/sidebar-menu');?>
               <div class="widget--sidbar">
                   <?php if (is_active_sidebar('sidebar')){dynamic_sidebar('sidebar');}?>
               </div>
           </div>
           <div class="col-divide-9 col-divide-md-8 col-divide-sm-12">
               <h3 class="title--main title--background text--upcase my-0"><?php single_cat_title(); ?></h3>
               <div class="line_blue_parent"> <span class="line_blue"></span></div>
               <?php while(have_posts()) : the_post(); ?>
                   <div class="row-divide category__information">
                       <div class="col-divide-4 col-divide-lg-12 col-divide-sm-12 category__information__img opacity-hover">
                           <a href="<?php the_permalink(); ?>"><?php echo the_post_thumbnail('medium'); ?></a>
                       </div>
                       <div class="col-divide-8 col-divide-lg-12 col-divide-sm-12">
                           <div class="category__information__smalltitle">
                               <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                           </div>
                           <div class="category__information__date-bl">
                               <p><i class="fa fa-calendar-o" aria-hidden="true"></i> <?php echo get_the_date();?></p>
                           </div>
                           <div class="category__information__content">
                               <?php the_excerpt(); ?>
                           </div>
                           <div class="button_more">
                            <button class="custom-btn btn-15"><a href="<?php the_permalink(); ?>">Đọc Thêm</a></button>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?>
            <?php the_posts_pagination(); ?>
           </div>
       </div>
   </div>
</section>
<?php get_footer(); ?>
