!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
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
    var r,
      o = n(0);
    (r = n.n(o).a)(function () {
      r(".rank-math-rollback-form").on("submit", function () {
        if (
          !confirm(
            rankMath.rollbackConfirm.replace(
              "%s",
              r("#rm_rollback_version").val()
            )
          )
        )
          return !1;
        r("#rm-rollback-button").prop("disabled", !0),
          r(".rollback-loading-indicator").removeClass("hidden");
      });
      var e = r("#rm-rollback-button");
      r("#rm_rollback_version")
        .on("change", function () {
          e.text(e.data("buttonlabel").replace("%s", r(this).val()));
        })
        .trigger("change"),
        r('input[name="enable_auto_update"]')
          .on("change", function () {
            r("#control_update_notification_email").toggleClass(
              "hidden",
              "on" === r(this).attr("value")
            );
          })
          .filter(":checked")
          .trigger("change");
    });
  },
]);
