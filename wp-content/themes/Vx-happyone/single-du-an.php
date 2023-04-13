<?php
 /**
* template name: single-project
*/
get_header();
get_template_part('sections/breadcum');  ?>

<section class="section__wrapper" id="singleProject">
 <div class="container">
   <div class="row-divide">
     <!-- begin sidebar right -->
     <div class="col-divide-3 col-divide-md-12 col-divide-sm-12">
       <?php get_template_part('sections/sidebar-menu');?>
       <div class="widget--sidbar"><?php if (is_active_sidebar('sidebar')){dynamic_sidebar('sidebar');}?></div>
     </div>
     <!-- end sidebar right -->

     <!-- begin description project -->
     <div class="col-divide-6 col-divide-md-12 col-divide-sm-12">
       <div class="post__contain">
         <div class="">
           <h3 class="title--section text--backgroud text--upcase  mt-0"><?php the_title(); ?></h3>
           <p><i class="fa fa-bookmark" aria-hidden="true"></i><?php echo get_the_date();?>
             <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2Fvivahomes.service&layout=button_count&size=small&appId=2526379767590380&width=92&height=20"
             width="92" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"
             allow="encrypted-media"></iframe>
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
       <div class="text--upcase" id="post__recent">
         <?php if (is_active_sidebar('post-widget')){dynamic_sidebar('post-widget');}?>
       </div>
     </div>
     <div class="col-divide-3 col-divide-md-12 col-divide-sm-12"></div>
     </div>
     <?php get_template_part('sections/related-post'); ?>
   </div>
</section>
<?php
get_footer();
?>
