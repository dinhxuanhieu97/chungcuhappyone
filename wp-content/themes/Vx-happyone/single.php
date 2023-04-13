<?php
 /*** template name: single posts */
get_header();
get_template_part('sections/breadcum');
?>
<section class="section__wrapper" id="singlePost">
 <div class="container">
   <div class="row-divide">
     <div class="colum-left col-divide-9 col-divide-md-12 col-divide-sm-12">
       <div class="post__contain">
         <div class="">
           <h3 class="title--main text--backgroud"><?php the_title(); ?></h3>
           <p><i class="fa fa-bookmark" aria-hidden="true"></i> <?php echo get_the_date();?>
             <a class="fa fa-facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>&text=<?php the_title(); ?>" target="_blank" title="chia sẻ lên facebook" rel="noopener noreferrer"> Chia sẻ</a>
             <!-- twitter -->
             <a class="fa fa-twitter" href="http://twitter.com/share?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>" target="_blank" title="chia sẻ lên Twitter"> Twitter</a>
           </p>
         </div>
         <?php
         if ( have_posts() ) {
         // Load posts loop.
         while ( have_posts() ) { the_post();?>
           <div class="thumbnail my-20"> <?php the_post_thumbnail('medium') ?> </div>
           <div class="new__content text--justify"> <?php the_content() ?>	</div>
         <?php }} ?>
       </div>
       <div class="post__recent--style" id="post__recent">
         <?php if (is_active_sidebar('post-widget')){dynamic_sidebar('post-widget');}?>
       </div>
     </div>
     <div class="col-divide-3 col-divide-md-12">
       <?php get_template_part('sections/sidebar-menu');?>
       <div class="widget--sidbar"><?php if (is_active_sidebar('sidebar')){dynamic_sidebar('sidebar');}?></div>
     </div>
   </div>
     <?php get_template_part('sections/related-post'); ?>
   </div>
</section>
<?php get_footer(); ?>
