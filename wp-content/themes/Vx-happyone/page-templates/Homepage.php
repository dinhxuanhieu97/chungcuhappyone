<!--
Template name: HomePage
Author: Xuan Hieu -->
<?php
  wp_reset_query();
  get_header();
  // get_template_part('sections/main-slider');
?>

<section id="HomePage">
  <div class="container">
    <?php
    // get_template_part('sections/du-an');
    get_template_part('sections/nha-pho-van-xuan');
    // get_template_part('sections/products-outstanding');
    // get_template_part('sections/related-post');
    get_template_part('sections/news-post');
    // get_template_part('sections/doi-tac');
    ?>
  </div>
</section>

<?php get_footer() ?>