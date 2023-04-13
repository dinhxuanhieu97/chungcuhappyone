<section class="my__project section__wrapper">
	<div class="text--center"><h1 class="title--section">Chung cư Happy One Vạn Xuân</h1></div>
		<p class="mb-10">Tiếp tục thành công trong lĩnh vực xây dựng các khu nhà phố Vx Home, khu biệt thự Vạn Xuân Villa.</p>
		<p class="mb-10">Năm 2018 Vạn Xuân Group cho ra mắt dòng căn hộ biệt lập 4.0 Happy One Phú Hòa tại Thành phố Thủ Dầu Một
	 và Khu căn hộ thông minh Happy One Premier tại phường Thạnh Lộc, Quận 12, thành phố Hồ Chí Minh.</p>
		<p class="mb-10">Cuối năm 2020, Vạn Xuân Group tiếp tục triển khai dự án Happy One Central - với 2 tòa tháp đôi cao 40 tầng
			 là "Biểu tượng cao nhất Thủ Dầu Một", minh chứng cho đường lối đúng đắn và sự phát triển vượt bậc của Tập Đoàn Vạn Xuân.</p>
		<div class="my__project--contain">

			<?php while(have_rows('project_infor' , 'option')) : the_row();
		        $content_project= get_sub_field('content_project', 'option');
			?>
            <div class="row-divide" style="display:flex">
                <div class="col-divide-6 col-divide-sm-12">
                    <a href="<?php echo get_sub_field('link_du_an', 'option'); ?>" class="projects_loop--image">
                        <?php while(have_rows('project_gallery', 'option')) : the_row(); ?>
                            <img src="<?php echo get_sub_field('project_gallery-item','option'); ?>" alt="" title="" />
                        <?php endwhile;?>
                    </a>
                </div>
                <div class="col-divide-6 col-divide-sm-12">
                    <div class="product__item-info">
                        <h2 class="projects__name"><?php echo get_sub_field('ten_du_an', 'option'); ?></h2>
                        <ul class="ml-20">
                            <li>
                                <p><b>Vị trí: </b><?php echo get_sub_field('vi_tri', 'option'); ?></p>
                            </li>
                            <li>
                                <p><b>Tình trạng: </b> Đang xây dựng</p>
                            </li>
                        </ul>
                        <p class="product__item--content"><?php echo $content_project ?></p>
                        <div class="button_1 button_slider">
                            <span class="for_mobile_button"><a class="button_slider_link" href="<?php echo get_sub_field('link_du_an', 'option'); ?>">Xem thêm</a></span>
                            <span class="for_mobile_button for_mobile_button_2"><a class="button_slider_link" href="">Đăng ký tư vấn</a></span>
                        </div>
                    </div>
                </div>
            </div>

	        <?php endwhile; ?>
	    </div>
</section>
