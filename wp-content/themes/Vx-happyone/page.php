<?php
 /**
 * template name: page default
 */
get_header();
get_template_part('sections/breadcum');
?>
 <section class="wrapper" id="Page">
    <div class="container">
        <div class="row-divide">
            <div class="col-divide-3 col-divide-sm-12 order-2">
                <?php get_template_part('sections/sidebar-menu');?>
                <div class="widget--sidbar">
                    <?php if (is_active_sidebar('sidebar')){dynamic_sidebar('sidebar');}?>
                </div>
            </div>
            <div class="col-divide-9 col-divide-sm-12 page__style">
                <?php
		          if ( have_posts() ) {
			         // Load posts loop.
			         while ( have_posts() ) {
                        the_post();?>
                <!-- <h3 class="title--section title--background text--upcase my-0"><?php the_title(); ?></h3> -->
                <div class="page__Content my-20">
                  <h4 class="title--section text--center text--upcase my-10"><?php the_title(); ?></h4>
                    <?php the_content(); ?>
                </div>
            </div>
			<?php }
		}?>
        </div>
    </div>
 </section>
<?php
 get_footer();
?>
