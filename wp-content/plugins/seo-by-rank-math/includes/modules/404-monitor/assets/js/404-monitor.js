!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 1));
})([
  function (e, t) {
    e.exports = jQuery;
  },
  function (e, t, r) {
    "use strict";
    r.r(t);
    var n,
      o = r(0);
    (n = r.n(o).a)(function () {
      var e = this;
      (e.wrap = n(".rank-math-404-monitor-wrap")),
        e.wrap.on("click", ".rank-math-404-delete", function (e) {
          e.preventDefault();
          var t = n(this),
            r = t
              .attr("href")
              .replace("admin.php", "admin-ajax.php")
              .replace("action=delete", "action=rank_math_delete_log")
              .replace("page=", "math=");
          n.ajax({
            url: r,
            type: "GET",
            success: function (e) {
              e &&
                e.success &&
                t.closest("tr").fadeOut(800, function () {
                  n(this).remove();
                });
            },
          });
        }),
        e.wrap.on("click", ".rank-math-clear-logs", function (e) {
          if ((e.preventDefault(), !confirm(rankMath.logConfirmClear)))
            return !1;
          n(this)
            .closest("form")
            .append('<input type="hidden" name="action" value="clear_log">')
            .submit();
        }),
        n("#doaction, #doaction2").on("click", function () {
          "redirect" === n("#bulk-action-selector-top").val() &&
            n(this).closest("form").attr("action", rankMath.redirectionsUri);
        });
    });
  },
]);
