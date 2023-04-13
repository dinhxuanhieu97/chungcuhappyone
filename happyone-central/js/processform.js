/************* BEGIN PROCESS FORM REGISTER *************/
jQuery(document).ready(function () {
  var e = jQuery("#popUpNotiTV");
  jQuery("#popUpNotiCloseTV");

  jQuery("#popUpNotiCloseTV").click(function () {
    e.css("display", "none"),
      jQuery("#oppos #myModal").css("display", "none"),
      jQuery(".modal-backdrop.fade.in")
        .removeClass("in")
        .css("display", "none");
  });
  var s = jQuery("#popUpNotiTV2");
  jQuery("#popUpNotiCloseTV2").click(function () {
    s.css("display", "none"), location.reload(!0);
  });

  // Xử lý form
  var o = jQuery("#submit_happy_one_popup");
  o.click(function () {
    var o = document.forms.happy_one_dang_ki_tu_van_popup.HOC_HTDKTV.value;
    a = document.forms.happy_one_dang_ki_tu_van_popup.HOC_DTDKTV.value;
    n = jQuery.trim(a.replace(/ /g, ""));
    p = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if ("" == o || "" == a)
      return (
        "" == o && jQuery(".nameVal").css("display", "block"),
        jQuery("#mcHTDKTV").click(function () {
          jQuery(".nameVal").css("display", "none");
        }),
        "" !== a
          ? 0 == p.test(n)
            ? (jQuery(".phoneVal")
                .empty()
                .append("<span>Số điện thoại không đúng định dạng!</span>"),
              jQuery(".phoneVal").css("display", "block"))
            : (jQuery(".phoneVal").empty().append("<span></span>"),
              jQuery(".phoneVal").css("display", "block"))
          : (jQuery(".phoneVal").empty().append("Bạn chưa nhập số điện thoại!"),
            jQuery(".phoneVal").css("display", "block")),
        jQuery("#mcDTDKTV").click(function () {
          jQuery(".phoneVal").css("display", "none");
        }),
        !1
      );
    if ("" !== o || "" !== a) {
      if (0 != p.test(n)) {
        jQuery(".phoneVal").empty().append("<span></span>"),
          jQuery(".phoneVal").css("display", "block");
        var c = jQuery("#happy_one_dang_ki_tu_van_popup").serialize();
        return (
          jQuery.ajax({
            type: "GET",
            url: "https://script.google.com/macros/s/AKfycbx3JZxMsGHZqm6RMWB98E0zvkmhj7ef_loO0NXhWQ/exec",
            dataType: "json",
            crossDomain: !0,
            data: c,
            header: "Access-Control-Allow-Origin: *",
            success: function (o) {
              "false" == o
                ? s.css("display", "block")
                : e.css("display", "block");
            },
          }),
          !1
        );
      }
      return (
        jQuery(".phoneVal")
          .empty()
          .append("<span>Số điện thoại không đúng định dạng!</span>"),
        jQuery(".phoneVal").css("display", "block"),
        !1
      );
    }
    var c = jQuery("#happy_one_dang_ki_tu_van_popup").serialize();
    return (
      jQuery.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbx3JZxMsGHZqm6RMWB98E0zvkmhj7ef_loO0NXhWQ/exec",
        dataType: "json",
        crossDomain: !0,
        data: c,
        header: "Access-Control-Allow-Origin: *",
        success: function (o) {
          "false" == o ? s.css("display", "block") : e.css("display", "block");
        },
      }),
      !1
    );
  });
});
/************* END PROCESS FORM REGISTER *************/

jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 50) {
      jQuery(".header__contain").addClass("header_menu_wrapper");
    } else if (scroll <= 50) {
      jQuery(".header__contain").removeClass("header_menu_wrapper");
    }
  });
});

/************* BEGIN MODAL BUTTON *************/
jQuery(document).ready(function () {
  jQuery(".header__register-btn").click(function () {
    jQuery("#myModal").modal("show");
  });

  jQuery(".overview__regist").click(function () {
    jQuery("#myModal").modal("show");
  });

  jQuery(".overview__btn-destop").click(function () {
    jQuery("#myModal").modal("show");
  });

  jQuery("#datlichhen").click(function () {
    jQuery("#myModal").modal("show");
  });

  jQuery(".carousel--banner").click(function () {
    jQuery("#myModal").modal("show");
  });
});
// show popup modal regist
jQuery(document).ready(function () {
  jQuery(window).load(function () {
    setTimeout(function () {
      jQuery("#myModal").modal("show");
    }, 20000);
  });

  jQuery(window).load(function () {
    setTimeout(function () {
      jQuery(".talked_number").show();
    }, 5000);
  });

  jQuery(window).load(function () {
    setTimeout(function () {
      jQuery(".talked_number").empty().append("2");
    }, 15000);
  });
});
// scroll when click link menu
jQuery(document).ready(function () {
  jQuery("a.scrollLink").click(function (event) {
    event.preventDefault();
    jQuery("html, body").animate(
      {
        scrollTop: jQuery(jQuery(this).attr("href")).offset().top - 100,
      },
      1000
    );
  });
});
