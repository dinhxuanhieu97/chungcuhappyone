<section class="slider_home" class="page_wrapper">
     <div id="slider_home_page_custom_nav" class="slider_home_page_custom_nav"></div>
    <div class="slider_home_page">
    <?php while(have_rows('slider_image_theme' , 'option')) : the_row(); ?>
    <div class="slider_item carousel--banner">
        <img class="img-responsive hidden-xs kenburns-left im_slider_item" src="<?php echo  get_sub_field('slider_image_desktop', 'option');?>" alt="<?php echo  get_sub_field('heading_text_1', 'option');?>" />
        <img class="visible-xs-block img-responsive im_slider_item kenburns-left" src="<?php echo  get_sub_field('image_mobile', 'option');?>" alt="<?php echo  get_sub_field('heading_text_1', 'option');?>" />
        <div class="item_content">
            <div class="border_top_slider"></div>
            <div class="slider_text_1 slider_big_text"><?php echo  get_sub_field('heading_text_1', 'option');?></div>
            <h2 class="slider_text_2 slider_big_text"><?php echo  get_sub_field('heading_text_2', 'option');?></h2>
            <div class="text_small_1 text_small_slider"><?php echo  get_sub_field('description_1', 'option');?></div>
            <div class="text_small_2 text_small_slider"><?php echo  get_sub_field('description_2', 'option');?></div>
            <div class="button_1 button_slider">
                <span class="for_mobile_button"><a class="button_slider_link" href="<?php echo  get_sub_field('button_1_link', 'option');?>" ><?php echo  get_sub_field('button_1', 'option');?></a></span>
                <span class="for_mobile_button for_mobile_button_2"><a class="button_slider_link" href="<?php echo  get_sub_field('button_1_link', 'option');?>" ><?php echo  get_sub_field('button_2', 'option');?></a></span>
            </div>
        </div>
    </div>
    <?php endwhile;?>
    </div>
</section>

<section class="value_vanxuan">
  <div class="container">
    <div class="row-divide">
      <?php while(have_rows('value_main' , 'option')) : the_row(); ?>
      <div class="value_vanxuan-col col-divide-4 col-divide-md-4 col-divide-sm-12">
        <img class="value_vanxuan--img" src="<?php echo get_sub_field('image_values','option') ?>" alt="">
        <div class="value_vanxuan--items">
          <p class="title--item text--upcase"><?php echo  get_sub_field('title_values', 'option');?></p>
          <p class="value_vanxuan--content"><?php echo  get_sub_field('content_values', 'option');?></p>
        </div>
      </div>
      <?php endwhile;?>
    </div>
  </div>
</section>
