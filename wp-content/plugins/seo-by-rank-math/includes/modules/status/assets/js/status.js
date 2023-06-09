!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t) {
    e.exports = jQuery;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var o,
      r = n(0);
    function i(e) {
      return (
        (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        i(e)
      );
    }
    (o = n.n(r).a)(function () {
      var e = o(".rank-math-tab-nav");
      function t(t, n) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3;
        n = n || "error";
        var i = o(
          '<div class="notice is-dismissible rank-math-tool-notice"><p></p></div>'
        );
        i
          .hide()
          .addClass("notice-" + n)
          .find("p")
          .text(t),
          e.prev(".notice").remove(),
          e.before(i),
          i.slideDown(),
          o("html,body").animate({ scrollTop: i.offset().top - 50 }, "slow"),
          o(document).trigger("wp-updates-notice-added"),
          r &&
            setTimeout(function () {
              i.fadeOut();
            }, r);
      }
      o(".tools-action").on("click", function (e) {
        e.preventDefault();
        var n = o(this);
        return (
          (n.data("confirm") && !confirm(n.data("confirm"))) ||
            (n.attr("disabled", "disabled"),
            o
              .ajax({
                url: rankMath.api.root + "rankmath/v1/toolsAction",
                method: "POST",
                beforeSend: function (e) {
                  e.setRequestHeader("X-WP-Nonce", rankMath.restNonce);
                },
                data: { action: n.data("action") },
              })
              .always(function () {
                n.removeAttr("disabled");
              })
              .fail(function (e) {
                e &&
                  (e.responseJSON && e.responseJSON.message
                    ? t(e.responseJSON.message)
                    : t(e.statusText));
              })
              .done(function (e) {
                if (e) {
                  if ("string" == typeof e) return void t(e, "success", !1);
                  if ("object" === i(e) && e.status && e.message)
                    return void t(e.message, e.status, !1);
                }
                t("Something went wrong. Please try again later.");
              })),
          !1
        );
      });
    });
  },
]);
