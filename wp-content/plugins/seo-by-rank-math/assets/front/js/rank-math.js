!(function (n) {
  var t = {};
  function e(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return n[r].call(a.exports, a, a.exports, e), (a.l = !0), a.exports;
  }
  (e.m = n),
    (e.c = t),
    (e.d = function (n, t, r) {
      e.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: r });
    }),
    (e.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (e.t = function (n, t) {
      if ((1 & t && (n = e(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var a in n)
          e.d(
            r,
            a,
            function (t) {
              return n[t];
            }.bind(null, a)
          );
      return r;
    }),
    (e.n = function (n) {
      var t =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return e.d(t, "a", t), t;
    }),
    (e.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (e.p = ""),
    e((e.s = 1));
})([
  function (n, t) {
    n.exports = jQuery;
  },
  function (n, t, e) {
    "use strict";
    e.r(t);
    var r,
      a = e(0);
    (r = e.n(a).a)(function () {
      (window.rankMathFront = {
        init: function () {
          this.adminMenu();
        },
        adminMenu: function () {
          var n = r("#wp-admin-bar-rank-math-mark-me"),
            t = this;
          n.on("click", ".mark-page-as a", function (n) {
            n.preventDefault(),
              t.ajax("mark_page_as", {
                objectID: rankMath.objectID,
                objectType: rankMath.objectType,
                what: r(this).attr("href").replace("#", ""),
              }),
              r(this).find(".dashicons").length
                ? r(this).find(".dashicons").remove()
                : r(this).prepend(
                    '<span class="dashicons dashicons-yes" style="font-family:dashicons;font-size:19px;line-height:28px;margin:0 3px 0 -4px;"></span>'
                  );
          });
        },
        ajax: function (n, t, e) {
          return r.ajax({
            url: rankMath.ajaxurl,
            type: e || "POST",
            dataType: "json",
            data: r.extend(
              !0,
              { action: "rank_math_" + n, security: rankMath.security },
              t
            ),
          });
        },
      }),
        window.rankMathFront.init();
    });
  },
]);
