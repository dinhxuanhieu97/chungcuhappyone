!(function (e) {
  var r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var a = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
  }
  (t.m = e),
    (t.c = r),
    (t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, r) {
      if ((1 & r && (e = t(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var a in e)
          t.d(
            n,
            a,
            function (r) {
              return e[r];
            }.bind(null, a)
          );
      return n;
    }),
    (t.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(r, "a", r), r;
    }),
    (t.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t.p = ""),
    t((t.s = 1));
})([
  function (e, r) {
    e.exports = jQuery;
  },
  function (e, r, t) {
    "use strict";
    t.r(r);
    var n,
      a = t(0);
    (n = t.n(a).a)(function () {
      ({
        init: function () {
          (this.wrap = n(".rank-math-seo-analysis-wrap")),
            (this.results = this.wrap.find(".rank-math-results-wrapper")),
            (this.progress = this.wrap.find(".progress")),
            (this.counter = this.wrap.find(".progress-bar span")),
            this.events(),
            this.graphs(),
            this.single();
        },
        events: function () {
          var e = this;
          this.wrap.on("click", ".rank-math-recheck", function (r) {
            var t = n(this);
            r.preventDefault(),
              e.wrap.addClass("is-loading").removeClass("is-loaded"),
              e.results.empty(),
              t.hide();
            var a = function (r) {
              n(".notice-seo-analysis-error").remove(),
                0 !== r.length &&
                  (e.wrap.find(".rank-math-analyzer-result").first().prepend(r),
                  r.slideDown());
            };
            n.ajax({
              url: ajaxurl,
              type: "POST",
              dataType: "html",
              data: {
                action: "rank_math_analyze",
                security: rankMath.security,
                u: e.wrap.find(".rank-math-analyze-url").val(),
              },
              beforeSend: function () {
                e.renderProgressBar();
              },
              complete: function () {
                clearInterval(e.interval),
                  e.progress.css("width", "100%"),
                  e.counter.html("100%");
              },
              error: function () {
                var r = n(
                  '<div class="notice notice-error is-dismissible notice-seo-analysis-error"><p>An error occured.</p></div>'
                ).hide();
                a(r), e.wrap.addClass("is-loaded").removeClass("is-loading");
              },
              success: function (r) {
                e.results.html(r);
                var s = e.results.find(".notice");
                0 !== n(r).find("#rank-math-circle-progress").length
                  ? (e.wrap.addClass("is-loaded").removeClass("is-loading"),
                    e.graphs())
                  : (e.wrap.removeClass("is-loaded is-loading"),
                    e.progress.css("width", "0%"),
                    e.counter.html("0%")),
                  t.show(),
                  a(s);
              },
            });
          }),
            e.wrap.on("click", ".result-action", function (e) {
              e.preventDefault(), n(this).parent("div").toggleClass("expanded");
            }),
            e.wrap.on("click", ".enable-auto-update", function (e) {
              e.preventDefault(),
                n.ajax({
                  url: ajaxurl,
                  type: "POST",
                  data: {
                    action: "rank_math_enable_auto_update",
                    security: rankMath.security,
                  },
                }),
                n(this)
                  .closest(".auto-update-disabled")
                  .addClass("hidden")
                  .siblings(".auto-update-enabled")
                  .removeClass("hidden")
                  .closest(".row-description")
                  .find(".status-icon")
                  .removeClass("status-warning dashicons-warning")
                  .addClass("status-ok dashicons-yes");
            });
        },
        renderProgressBar: function () {
          var e = this,
            r = 0;
          e.progress.css("width", r),
            (e.interval = setInterval(function () {
              100 == ++r && clearInterval(e.interval),
                e.counter.html(r + "%"),
                e.progress.css("width", r + "%");
            }, 30));
        },
        graphs: function () {
          var e = n("#rank-math-circle-progress");
          if (!(0 > e.length)) {
            var r = e.data("result"),
              t = ["#58bb58", "#58bb58"];
            0.5 > r
              ? (t = ["#ed6a5e", "#ed6a5e"])
              : 0.7 > r && (t = ["#f7ca63", "#f7ca63"]),
              e.circleProgress({
                value: r,
                size: 207,
                thickness: 17,
                lineCap: "round",
                emptyFill: "#e9e9ea",
                fill: { gradient: t },
              });
          }
        },
        single: function () {
          var e = this,
            r = e.wrap.find(".rank-math-current-url"),
            t = e.wrap.find(".rank-math-analyze-url"),
            n = e.wrap.find(".rank-math-recheck"),
            a = e.wrap.find(".rank-math-changeurl"),
            s = e.wrap.find(".rank-math-changeurl-ok");
          if (!t.length) return e;
          a.on("click", function () {
            return r.hide(), a.hide(), t.show(), s.show(), !1;
          }),
            s.on("click", function () {
              return (
                t.hide(),
                s.hide(),
                r.show(),
                a.show(),
                r.html(t.val()),
                n.trigger("click"),
                !1
              );
            }),
            t.on("keypress", function (e) {
              13 === e.keyCode && s.trigger("click");
            }),
            n.trigger("click");
        },
      }).init();
    });
  },
]);
