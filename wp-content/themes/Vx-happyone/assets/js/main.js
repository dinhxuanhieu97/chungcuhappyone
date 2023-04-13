function SearchList(search) {
  return jQuery.ajax({
    url: `https://chungcuhappyonevanxuan.com/wp-json/products/v1/search?title=${search}`,
    type: "GET",
  });
}

function showData() {
  var content = "";
  var inputSearch = jQuery("#Search").val();
  if (inputSearch == "" || inputSearch == undefined || inputSearch == null) {
    jQuery(".show__search").addClass("d--none");
  } else {
    jQuery(".show__search").removeClass("d--none");
    var mangSearch = [];
    ajaxSearch = SearchList(inputSearch);
    ajaxSearch
      .done(function (result) {
        mangSearch = result;
        if (result.length <= 1) {
          jQuery(".show__search").addClass("d--none");
        }
        result.forEach((item, index) => {
          if (index >= 1) {
            content += `
							<div class="row-divide one--rowdata">
								<div class="col-divide-4 ">
									<a href="${item.link}">${item.picture}</a>
								</div>
								<div class="col-divide-8 data__title">
									<a href="${item.link}">${item.title}</a>
								</div>
							</div>
							`;
          }
          return content;
        });
        jQuery("#styleResultSearch").html(content);
      })
      .fail(function (err) {
        console.log(err);
      });
  }
}

jQuery(document).ready(function () {
  jQuery("#navBtn").click(function () {
    jQuery("#headerNavBar").toggle();
  });
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  //slide products new page home
  jQuery(".post__news").slick({
    dots: false,
    lazyLoad: "ondemand",
    infinite: true,
    // autoplay: false,
    // autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // slide project new page home
  jQuery(".my__project--contain").slick({
    dots: false,
    arrows: true,
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // slide images project page home
  jQuery(".projects_loop--image").slick({
    dots: true,
    arrows: false,
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1200,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
        },
      },
    ],
  });

  jQuery(".slider_home_page").slick({
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 15000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: false,
          autoplaySpeed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  jQuery(".partner_carousel").slick({
    arrows: true,
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    slidesToShow: 4,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  // slider tin tức page home
  // jQuery('.news__ttcontent').slick({
  //   dots: true,
  //   speed: 1000,
  // 	autoplay:true,
  // 	autoplaySpeed: 4000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  // 				autoplay:true,
  // 				autoplaySpeed: 2000,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // caurousel banner page
  jQuery(".banner__img").slick({
    dots: false,
    arrows: true,
    lazyLoad: "fade",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    fade: true,
  });

  //carousel slider single products
  jQuery("#showSingleProduct").slick({
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
  jQuery(".sub-menu").addClass("slide-bottom");
});

jQuery(function ($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function () {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function (i) {
      var $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 10 < offset) {
        $animatable.removeClass("animatable").addClass("animated");
      }
    });
  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});

/************* WEBEXP24H MENU MOBILE*************/
jQuery(document).ready(function () {
  var menu_title = '<i class="fa fa-bars"></i>';
  //var menu_title = '<span class="navbar-toggle navbar-toggle-sub-mobile"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></span>';
  var arrow_add =
    '<span class="extra_menu"><i class="fa fa-arrow-left"> </i></span>';
  var m_mobile = '<div id="menu_mobile"><div class="menu_header">';
  m_mobile += '<div class="menu_title">' + menu_title + "</div>";
  m_mobile += '<div class="menu_close"><i class="fa fa-times" ></i></div>';
  m_mobile += "</div>";
  m_mobile +=
    '<div class="menu_inner"></div><div class="for_phone_and_res"></div></div><div class="menu_overlay"></div>';
  jQuery.fn.va_menu = function () {
    var menu_clone = jQuery(this);
    this.find("li").each(function (index, el) {
      jQuery(this).attr("id", "va_item" + index);
    });
    if (this.find(".extra_menu").length < 0) {
      this.find("a").each(function (index, el) {
        if (jQuery(this).next().length > 0) {
          var new_t = jQuery(this).text();
          jQuery(this).html(new_t + "" + arrow_add);
        }
      });
    }
    jQuery("html body").append(m_mobile);
    jQuery("#menu_mobile .menu_inner").html(this.clone());
    jQuery("#menu_mobile").on("click", ".extra_menu", function (event) {
      event.preventDefault();
      var dropdown = jQuery(this).parent().next().clone();
      var data_id = jQuery(this).parent().parent().attr("id");
      jQuery(".menu_title").html(
        '<span class="back_to_last_menu" data_id="' +
          data_id +
          '"><i class="fa fa-arrow-left" ></i> ' +
          jQuery("#" + data_id + ">a").html() +
          "</span>"
      );
      jQuery("#menu_mobile .menu_inner").animate(
        { left: "-100%" },
        0,
        function () {
          jQuery("#menu_mobile .menu_inner").html(dropdown);
          jQuery("#menu_mobile .menu_inner").animate({ left: "0" }, 500);
        }
      );
      return false;
    });
    jQuery("#menu_mobile").on("click", ".back_to_last_menu", function (event) {
      event.preventDefault();
      var data_id = jQuery(this).attr("data_id");
      var dropdown = jQuery("#" + data_id)
        .parent("ul")
        .clone();
      if (
        jQuery("#" + data_id)
          .parent()
          .parent()
          .parent("ul").length > 0
      ) {
        var did = jQuery("#" + data_id)
          .parent("ul")
          .parent()
          .attr("id");
        jQuery(".menu_title").html(
          '<span class="back_to_last_menu" data_id="' +
            did +
            '"><i class="fa fa-arrow-left" ></i> ' +
            jQuery("#" + did + ">a").html() +
            "</span>"
        );
      } else {
        jQuery(".menu_title").html(menu_title);
      }
      jQuery("#menu_mobile .menu_inner").animate(
        { left: "-100%" },
        0,
        function () {
          jQuery("#menu_mobile .menu_inner").html(dropdown);
          jQuery("#menu_mobile .menu_inner").animate({ left: "0" }, 500);
        }
      );
      return false;
    });
    jQuery("#menu_mobile").on("click", ".menu_close", function (event) {
      event.preventDefault();
      jQuery("#menu_mobile").animate({ left: "-100%" }, 500, function () {
        jQuery("#menu_mobile .menu_inner").html(menu_clone.clone());
        jQuery(".menu_title").html(menu_title);
        jQuery("html").removeClass("menu_open");
        jQuery(".menu_overlay").removeClass("hidden_menu");
      });
    });
    jQuery(".navbar-toggle").on("click", function (event) {
      event.preventDefault();
      jQuery("html").addClass("menu_open");
      jQuery("#menu_mobile").animate({ left: "0%" }, 500);
      jQuery(".menu_overlay").addClass("hidden_menu");
      return false;
    });
    jQuery(".menu_overlay").on("click", "", function (event) {
      event.preventDefault();
      jQuery(".menu_overlay").addClass("hidden_menu");
      jQuery("#menu_mobile .menu_close").click();
    });
  };
  jQuery(".webexp24h_menu_mobile_nav").va_menu();
});
/************* END WEBEXP24H MENU MOBILE *************/
