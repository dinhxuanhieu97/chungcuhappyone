!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var a = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          n.d(
            r,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 71));
})({
  3: function (t, e) {
    t.exports = jQuery;
  },
  71: function (t, e, n) {
    "use strict";
    n.r(e);
    var r,
      a = n(3);
    (r = n.n(a).a)(function () {
      (window.rankMathValidate = {
        init: function () {
          this.extendLibrary(), this.watchFields();
        },
        extendLibrary: function () {
          r.validator.addMethod(
            "regex",
            function (t, e, n) {
              var a = new RegExp(
                "string" == typeof n ? n : r(e).data("validate-pattern")
              );
              return this.optional(e) || a.test(t);
            },
            rankMath.validationl10n.regexErrorDefault
          ),
            r.extend(r.validator.messages, {
              required: rankMath.validationl10n.requiredErrorDefault,
              email: rankMath.validationl10n.emailErrorDefault,
              url: rankMath.validationl10n.urlErrorDefault,
            }),
            r.extend(r.validator.defaults, { errorClass: "invalid" });
        },
        watchFields: function () {
          var t = this;
          r(".rank-math-validate-field").on(
            "focus",
            "input[type=text], input[type=password], input[type=url], input[type=email], input[type=number], textarea",
            function () {
              t.fieldValidation(r(this).closest("form"));
            }
          );
        },
        fieldValidation: function (t) {
          return (
            "1" !== t.data("validated") &&
            (t.data("validated", "1").validate(), !0)
          );
        },
      }),
        window.rankMathValidate.init();
    });
  },
});
