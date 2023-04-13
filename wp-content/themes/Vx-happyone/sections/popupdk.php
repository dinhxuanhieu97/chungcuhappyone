<section id="oppos">
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-dialog-middle" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="content-modal">
                        <div class="loadpost_result dang_ki_nhanh_div" >
                            <div class="gf_browser_chrome gform_wrapper gf_browser_chrome_tuyen_dung_page">
                                <form action=" " method="GET" enctype="multipart/form-data" id="happy_one_dang_ki_tu_van_popup" class="wpcf7-form happy_one_dang_ki_tu_van_popup" novalidate="novalidate">
                                    <img class="top-header-icon" src="images/logo-vanxuan-white.png" alt=""/>
                                    <div class="register__happy-one">
                                      <span>Giỏ hàng đặc biệt tháng 7</span><br>
                                      <span>Nhận thông tin từ Đại lý phát triển</span>
                                    </div>
                                    <div class="left_contact_form">
                                        <span class="wpcf7-form-control-wrap hoTen">
                                          <input type="text" placeholder = "Nhập họ tên" value="" id="mcHTDKTV" name="HOC_HTDKTV" size="40" class="wpcf7-form-control my-10 wpcf7-text wpcf7-validates-as-required my-20" />
                                          <p class="d--none nameVal text-color-validate">Bạn chưa điền họ và tên !</p>
                                        </span><br/>
                                        <span class="wpcf7-form-control-wrap dien_thoai">
                                          <input name="HOC_DTDKTV" value="" id="mcDTDKTV" size="40" class="wpcf7-form-control my-10 wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel dien_thoai" id="dien_thoai" placeholder="Nhập số điện thoại"/>
                                          <p class="d--none phoneVal text-color-validate">Bạn chưa điền số điện thoại !</p>
                                        </span>
                                    </div>
                                    <div class="submit_line py-20">
                                          <input type="submit" value="Tư Vấn Cho Tôi" id="submit_happy_one_popup" class="wpcf7-form-control wpcf7-submit"/>
                                          <?php $validURL1 = "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; $validURL1 = str_replace("&", "&amp", $validURL1);?>
                                        <input type="hidden" class="hidden_date" value="<?php date_default_timezone_set("Asia/Bangkok"); echo date("H:i-d/m/Y"); ?>" name="HOC_Date_DK" />
                                        <input type="hidden" class="hidden_date" value="<?php echo $validURL1; //the_permalink(); ?>" name="HOC_URL_DKN" />
                                        <input type="hidden" class="hidden_date" value=" " name="HOC_NOTE_DKN" />
                                        <input type="hidden" class="hidden_date" value=" " name="HOC_NOTE_DKN1" />
                                        <input type="hidden" class="hidden_date" value=" " name="HOC_NOTE_DKN2" />
                                        <input type="hidden" class="hidden_date" value=" " name="HOC_NOTE_DKN3" />
                                        <input type="hidden" class="hidden_date" value=" " name="HOC_NOTE_DKN4" />
                                    </div>
                                </form>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
