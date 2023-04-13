<div class="bg__news"></div>
<section class="news__tt">
  <div class="text--center">
    <h3 class="title--section title--background">BÀI VIẾT DÀNH CHO BẠN</h3>
  </div>
  <p class="mb-10">Tổng hợp nhiều bài viết thông tin và đánh giá dự án bất động sản nổi bậc.</p>
  <div class="row-divide ">
    <?php
		$args = array(
			'post_type' => 'post',
			'post_status' => 'publish',
			'order' => 'DESC',
			'posts_per_page' => 1,
			'nopaging' => false,
		);
		$new_list = new WP_Query($args); if( $new_list -> have_posts()) : ?>

    <div class="news__ttcontent1 col-divide-6 col-divide-md-7 col-divide-sm-12">
      <?php	while($new_list -> have_posts()) : $new_list -> the_post();	?>
      <div class="news__ttcontent-img1">
        <a href="<?php the_permalink();?>"><?php the_post_thumbnail('large')?></a>
      </div>

      <div class="news__ttcontent-content1">
        <a href="<?php the_permalink();?>">
          <h4 class="news__ttcontent-title"><?php echo the_title();?></h4>
        </a>
        <div class="ttcontent--theday">
          <i class="far fa-clock"></i>&nbsp;<?php echo get_the_date(); ?>&nbsp;<?= gt_get_post_view(); ?>
        </div>

      </div>
      <?php	endwhile;	wp_reset_postdata();?>
      <?php	else : esc_html_e( 'No testimonials in the diving taxonomy!', 'text-domain' ); endif;	?>
    </div>


    <?php
		$args = array(
			'post_type'   => 'post',
			'post_status' => 'publish',
			'order'       => 'DESC',
			'posts_per_page' => 3,
			'post__in' => array(1017,970,1002),         //(array) - Danh sách các post muốn lấy, dùng ID
			);
			$new_list = new WP_Query($args); if( $new_list -> have_posts()) : ?>

    <div class="col-divide-6 col-divide-md-5 col-divide-sm-12">
      <div class="news__ttcontent">
        <?php	while($new_list -> have_posts()) : $new_list -> the_post();	?>
        <div class="news__ttcontent-img">
          <a href="<?php the_permalink();?>"><?php the_post_thumbnail('medium')?></a>
        </div>

        <div class="news__ttcontent-content">
          <a href="<?php the_permalink();?>">
            <h4 class="news__ttcontent-title"><?php echo the_title();?></h4>
          </a>
          <div class="ttcontent--theday">
            <i class="far fa-clock"></i>&nbsp;<?php echo get_the_date(); ?>&nbsp;<?= gt_get_post_view(); ?>
          </div>
          <!-- <div class="news__ttcontent-description"><?php //echo the_content();?></div> -->
        </div>

        <?php	endwhile;	wp_reset_postdata();?>
        <?php	else : esc_html_e( 'No testimonials in the diving taxonomy!', 'text-domain' ); endif;	?>
      </div>
    </div>
  </div>
</section>