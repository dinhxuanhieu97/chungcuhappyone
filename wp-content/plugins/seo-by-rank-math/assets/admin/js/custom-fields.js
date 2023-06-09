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
    n((n.s = 64));
})({
  1: function (e, t) {
    e.exports = lodash;
  },
  3: function (e, t) {
    e.exports = jQuery;
  },
  64: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(3),
      o = n.n(r),
      i = n(1);
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.getContent = function (e) {
            return (
              o()(this.fields).each(function (t, n) {
                e += o()(n).val();
              }),
              e
            );
          }),
          this.init(),
          this.hooks(),
          this.events();
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "init",
            value: function () {
              (this.fields = this.getFields()),
                (this.getContent = this.getContent.bind(this));
            },
          },
          {
            key: "hooks",
            value: function () {
              wp.hooks.addFilter(
                "rank_math_content",
                "rank-math",
                this.getContent,
                11
              );
            },
          },
          {
            key: "events",
            value: function () {
              o()(this.fields).each(function (e, t) {
                o()(t).on(
                  "keyup change",
                  Object(i.debounce)(function () {
                    rankMathEditor.refresh("content");
                  }, 500)
                );
              });
            },
          },
          {
            key: "getFields",
            value: function () {
              var e = [];
              return (
                o()("#the-list > tr:visible").each(function (t, n) {
                  var r = o()("#" + n.id + "-key").val();
                  -1 !== o.a.inArray(r, rankMath.analyzeFields) &&
                    e.push("#" + n.id + "-value");
                }),
                e
              );
            },
          },
        ]) && u(t.prototype, n),
        r && u(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    o()(function () {
      setTimeout(function () {
        new a();
      }, 500);
    });
  },
});
