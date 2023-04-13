<?php
/**
* template name: Dự án
*/
get_header();
get_template_part('sections/breadcum');
?>

<section class="section__wrapper" id="projects__page">
  <div class="container">
    <h3 class="title--main">Dự án đang triển khai</h3>
    <div class="line_blue_parent"> <span class="line_blue"></span></div>

    <div class="my__projects--contain section__wrapper">
      <div class="row-divide">

        <?php while(have_rows('project_infor' , 'option')) : the_row();
        $content_project= get_sub_field('content_project', 'option');
        ?>

        <div class="col-divide-4 col-divide-md-6 col-divide-sm-12 project__contain">
          <a href="<?php echo get_sub_field('link_du_an','option'); ?>" class="">
            <div class="projects_loop--image">
              <?php while(have_rows('project_gallery', 'option')) : the_row(); ?>
                <img class="" src="<?php echo get_sub_field('project_gallery-item','option'); ?>" alt="<?php echo get_sub_field('ten_du_an', 'option'); ?>" title="" />
              <?php endwhile;?>
            </div>

            <div class="product__item-info">
              <h2 class="projects__name"><?php echo get_sub_field('ten_du_an', 'option'); ?></h2>
              <ul>
                <li>
                  <p><b>Giá: </b><?php echo get_sub_field('price_project', 'option'); ?></p>
                </li>
                <li>
                  <p><b>Mật độ xây dựng: </b><?php echo get_sub_field('mat_do_xay_dung', 'option'); ?></p>
                </li>
                <li>
                  <p><i class="fas fa-map-marker mr-15"></i> <?php echo get_sub_field('vi_tri', 'option'); ?></p>
                </li>
              </ul>
            </div>
          </a>
        </div>
      <?php endwhile; ?>
    </div>
  </div>

  <?php get_template_part('sections/related-post');
  get_template_part('sections/doi-tac'); ?>
</div>
</section>

<?php get_footer(); ?>
