(() => {
  var e = {
      7678: (e) => {
        e.exports = function (e) {
          var t,
            o,
            n,
            r,
            i,
            d,
            c,
            s,
            l = window.pageXOffset || document.documentElement.scrollLeft,
            a =
              ((t = e),
              (o = document.body),
              (n = document.documentElement),
              (r = t.getBoundingClientRect()),
              (i = n.clientHeight),
              (d = Math.max(
                o.scrollHeight,
                o.offsetHeight,
                n.clientHeight,
                n.scrollHeight,
                n.offsetHeight
              )),
              (c = r.bottom - i / 2 - r.height / 2),
              (s = d - i),
              Math.min(c + window.pageYOffset, s));
          window.scrollTo(l, a);
        };
      },
    },
    t = {};
  function o(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, o), i.exports;
  }
  (o.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e,
        t,
        n,
        r,
        i,
        d,
        c = o(7678),
        s = o.n(c),
        l = window.mc4wp_submitted_form,
        a = window.mc4wp.forms;
      function u(e, t) {
        a.trigger(t[0].id + "." + e, t), a.trigger(e, t);
      }
      if (l) {
        var m = document.getElementById(l.element_id);
        (e = a.getByElement(m)),
          (t = l.event),
          (n = l.errors),
          (r = l.data),
          (i = Date.now()),
          (d = document.body.clientHeight),
          n && e.setData(r),
          window.scrollY <= 10 && l.auto_scroll && s()(e.element),
          window.addEventListener("load", function () {
            u("submitted", [e]),
              n
                ? u("error", [e, n])
                : (u("success", [e, r]),
                  u(t, [e, r]),
                  "updated_subscriber" === t && u("subscribed", [e, r, !0]));
            var o = Date.now() - i;
            l.auto_scroll &&
              o > 1e3 &&
              o < 2e3 &&
              document.body.clientHeight !== d &&
              s()(e.element);
          });
      }
    })();
})();
