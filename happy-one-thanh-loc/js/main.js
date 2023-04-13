function menuToggleFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// When the user scrolls the page, execute myFunction
// scrolls header
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

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

  var o = jQuery("#submit_happy_one_popup");
  o.click(function () {
    var o = document.forms.happy_one_dang_ki_tu_van_popup.HPO_HTDKTV.value;
    a = document.forms.happy_one_dang_ki_tu_van_popup.HPO_DTDKTV.value;
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
            url: "https://script.google.com/macros/s/AKfycbxPGMyQXiY5gRJ_NyaC6qqmS-wFo8JKx0JsxKo9Ozxl5MOdhN0/exec",
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
        url: "https://script.google.com/macros/s/AKfycbxPGMyQXiY5gRJ_NyaC6qqmS-wFo8JKx0JsxKo9Ozxl5MOdhN0/exec",
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

/************* BEGIN MODAL IMAGES *************/
jQuery(".header__register-btn").click(function () {
  jQuery("#myModal").modal("show");
});

jQuery(".overview__btn").click(function () {
  jQuery("#myModal").modal("show");
});

// Get the modal image
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("modalImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Get the modal image
var modal = document.getElementById("imageModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("modalImg1");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption1");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
