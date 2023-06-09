!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
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
    n((n.s = 63));
})({
  1: function (e, t) {
    e.exports = lodash;
  },
  3: function (e, t) {
    e.exports = jQuery;
  },
  6: function (e, t) {
    e.exports = wp.hooks;
  },
  63: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(3),
      i = n.n(r),
      o = n(1),
      a = n(6);
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    new ((function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.fields = []),
          Object(a.addAction)(
            "rank_math_loaded",
            "rank-math",
            this.init.bind(this)
          );
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "init",
            value: function () {
              this.getFields(), this.events();
            },
          },
          {
            key: "getFields",
            value: function () {
              var e = this;
              i()("#the-list > tr:visible").each(function (t, n) {
                var r = i()("#" + n.id + "-key").val();
                -1 !== i.a.inArray(r, rankMath.analyzeFields) &&
                  e.fields.push("#" + n.id + "-value");
              });
            },
          },
          {
            key: "events",
            value: function () {
              Object(a.addFilter)(
                "rank_math_content",
                "rank-math",
                this.getContent.bind(this)
              ),
                i()(this.fields).each(function (e, t) {
                  i()(t).on(
                    "keyup change",
                    Object(o.debounce)(function () {
                      rankMathEditor.refresh("content");
                    }, 500)
                  );
                });
            },
          },
          {
            key: "getContent",
            value: function (e) {
              return (
                i()(this.fields).each(function (t, n) {
                  e += i()(n).val();
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
    })())();
  },
});
