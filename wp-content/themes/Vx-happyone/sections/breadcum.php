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
        <span class="breckcrum__the-title"><?php the_title(); ?></span>
      </div>
    </div>
  </div>
</section>
