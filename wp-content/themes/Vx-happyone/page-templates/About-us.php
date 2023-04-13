<?php
 /**
 * template name: Giới Thiệu
 */
 get_header();
 get_template_part('sections/breadcum');
?>

<section>

    <div class="vanxuan_gt section__wrapper">
        <div class="container history__contain">
            <h4 class="title--section">VỀ VẠN XUÂN GROUP</h4>
            <blockquote>
            <p><cite>Công ty Cổ Phần Tập Đoàn Địa Ốc Vạn Xuân</cite> hay còn gọi VẠN XUÂN GROUP - là công ty chuyên về đầu tư, xây dựng và phát triển các dự án bất động sản tại thành phố Hồ Chí Minh, Bình Dương,…</p>
            <p>Bên cạnh việc trân trọng giá trị đạo đức kinh doanh – mang đến sản phẩm thực, giá trị thực, đảm bảo lợi ích tốt nhất cho khách hàng, đối tác và xã hội thì VẠN XUÂN GROUP còn chú trọng xây dựng nên nguồn nhân lực có chuyên môn sâu.</p>
            <p>Với đội ngũ trẻ đầy năng động và nhiệt huyết, VẠN XUÂN GROUP luôn hướng đến sứ mệnh: Kiến tạo không gian sống tối ưu cho quý khách hàng…</p>
            </blockquote>
        </div>
    </div>

    <div class="history__about-us section__wrapper">
        <div class="container history__contain">
            <h4 class="title--section">LỊCH SỬ HÌNH THÀNH</h4>
            <!-- <div class="line_blue_parent">
            <span class="line_blue"></span>
            </div> -->
            <p class="history__detail"><?php echo get_field('history-about-us'); ?></p>
        </div>
    </div>

    <div class="value__infor section__wrapper">
      <div class="container">
        <h4 class="title--section text--center">Giá trị cốt lõi</h4>
        <div class="value__bac">
          <?php while(have_rows('value_main' , 'option')) : the_row(); ?>
          <div class="value_vanxuan--infor">
            <img class="value_vanxuan--img logo" src="<?php echo get_sub_field('image_values','option') ?>" alt="gioi-thieu-vivahomes">
            <div class="value_vanxuan--items">
              <p class="title--item text--upcase"><?php echo  get_sub_field('title_values', 'option');?></p>
              <p class="value_vanxuan--content"><?php echo  get_sub_field('content_values', 'option');?></p>
            </div>
          </div>
          <?php endwhile;?>
        </div>
      </div>
    </div>

  <div class="row-divide about__us">
    <div class="col-divide-6 col-divide-sm-12">
      <div class="about__card">
        <img src="<?php echo get_field('about-image','option'); ?>" alt="" class="about__card-img">
      </div>
    </div>
    <div class="col-divide-6 col-divide-sm-12">
      <div class="about__us--vision">
        <img class="about__us--vision-image" src="<?php echo get_theme_file_uri('./assets/images/vision.png'); ?>" alt="gioi-thieu-vivahomes">
        <p class="title--section text--upcase text--light">tầm nhìn</p>
        <p class="text--light">Đến năm 2025, Vạn Xuân Group sẽ trở thành công ty bất động sản uy tín, chuyên nghiệp và thu hút nhất trên thị trường bất động sản trong và ngoài nước.
        Top 20 tập đoàn Bất động sản danh tiếng nhất Việt Nam</p>
      </div>
    </div>
  </div>

  <div class="section__wrapper">
    <div class="container">
        <div class="row-divide">
            <div class="col-divide-9 col-divide-sm-12 page__style">
                <?php
                if ( have_posts() ) {
                    // Load posts loop.
                    while ( have_posts() ) {
                        the_post();?>
                <!-- <h3 class="title--section title--background text--upcase my-0"><?php the_title(); ?></h3> -->
                <div class="page__Content my-20">
                    <?php the_content(); ?>
                </div>
                <?php }} ?>
            </div>
        </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>
