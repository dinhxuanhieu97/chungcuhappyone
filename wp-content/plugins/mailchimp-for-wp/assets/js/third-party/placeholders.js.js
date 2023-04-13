/*! For license information please see placeholders.js.js.LICENSE.txt */
({
  6315: function () {
    !(function (t) {
      "use strict";
      var e = void 0 !== document.createElement("input").placeholder;
      if (
        ((t.Placeholders = {
          nativeSupport: e,
          disable: e ? B : C,
          enable: e
            ? B
            : function (t) {
                j(t, D);
              },
        }),
        !e)
      ) {
        var r,
          n = [
            "text",
            "search",
            "url",
            "tel",
            "email",
            "password",
            "number",
            "textarea",
          ],
          a = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
          u = new RegExp("(?:^|\\s)placeholdersjs(?!\\S)"),
          l = "data-placeholder-value",
          i = "data-placeholder-active",
          o = "data-placeholder-type",
          c = "data-placeholder-submit",
          s = "data-placeholder-bound",
          d = "data-placeholder-maxlength",
          g = document.getElementsByTagName("head")[0],
          b = document.documentElement,
          f = t.Placeholders,
          v = document.getElementsByTagName("input"),
          p = document.getElementsByTagName("textarea"),
          h = "false" === b.getAttribute("data-placeholder-focus"),
          m = "false" !== b.getAttribute("data-placeholder-live"),
          A = document.createElement("style");
        A.type = "text/css";
        var y,
          x,
          E = document.createTextNode(".placeholdersjs {color:#ccc;}");
        A.styleSheet ? (A.styleSheet.cssText = E.nodeValue) : A.appendChild(E),
          g.insertBefore(A, g.firstChild);
        for (var N = 0, T = v.length + p.length; N < T; N++)
          (x = N < v.length ? v[N] : p[N - v.length]),
            (y = x.attributes.placeholder) &&
              (y = y.nodeValue) &&
              L(n, x.type) &&
              P(x);
        var w = setInterval(function () {
          for (var t = 0, e = v.length + p.length; t < e; t++)
            (x = t < v.length ? v[t] : p[t - v.length]),
              (y = x.attributes.placeholder)
                ? (y = y.nodeValue) &&
                  L(n, x.type) &&
                  (x.getAttribute(s) || P(x),
                  (y !== x.getAttribute(l) ||
                    ("password" === x.type && !x.getAttribute(o))) &&
                    ("password" === x.type &&
                      !x.getAttribute(o) &&
                      R(x, "text") &&
                      x.setAttribute(o, "password"),
                    x.value === x.getAttribute(l) && (x.value = y),
                    x.setAttribute(l, y)))
                : x.getAttribute(i) && (V(x), x.removeAttribute(l));
          m || clearInterval(w);
        }, 100);
        k(t, "beforeunload", function () {
          f.disable();
        });
      }
      function B() {}
      function S() {
        try {
          return document.activeElement;
        } catch (t) {}
      }
      function L(t, e) {
        for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return !0;
        return !1;
      }
      function k(t, e, r) {
        return t.addEventListener
          ? t.addEventListener(e, r, !1)
          : t.attachEvent
          ? t.attachEvent("on" + e, r)
          : void 0;
      }
      function I(t, e) {
        var r;
        t.createTextRange
          ? ((r = t.createTextRange()).move("character", e), r.select())
          : t.selectionStart && (t.focus(), t.setSelectionRange(e, e));
      }
      function R(t, e) {
        try {
          return (t.type = e), !0;
        } catch (t) {
          return !1;
        }
      }
      function j(t, e) {
        if (t && t.getAttribute(l)) e(t);
        else
          for (
            var r = t ? t.getElementsByTagName("input") : v,
              n = t ? t.getElementsByTagName("textarea") : p,
              a = r ? r.length : 0,
              u = a + (n ? n.length : 0),
              i = 0;
            i < u;
            i++
          )
            e(i < a ? r[i] : n[i - a]);
      }
      function C(t) {
        j(t, V);
      }
      function V(t, e) {
        var r = !!e && t.value !== e,
          n = t.value === t.getAttribute(l);
        if ((r || n) && "true" === t.getAttribute(i)) {
          t.removeAttribute(i),
            (t.value = t.value.replace(t.getAttribute(l), "")),
            (t.className = t.className.replace(u, ""));
          var a = t.getAttribute(d);
          parseInt(a, 10) >= 0 &&
            (t.setAttribute("maxLength", a), t.removeAttribute(d));
          var c = t.getAttribute(o);
          return c && (t.type = c), !0;
        }
        return !1;
      }
      function D(t) {
        var e = t.getAttribute(l);
        return !(
          "" !== t.value ||
          !e ||
          (t.setAttribute(i, "true"),
          (t.value = e),
          (t.className += " placeholdersjs"),
          t.getAttribute(d) ||
            (t.setAttribute(d, t.maxLength), t.removeAttribute("maxLength")),
          t.getAttribute(o)
            ? (t.type = "text")
            : "password" === t.type &&
              R(t, "text") &&
              t.setAttribute(o, "password"),
          0)
        );
      }
      function P(t) {
        var e = t.form;
        e &&
          "string" == typeof e &&
          ((e = document.getElementById(e)).getAttribute(c) ||
            (k(
              e,
              "submit",
              (function (t) {
                return function () {
                  C(t);
                };
              })(e)
            ),
            e.setAttribute(c, "true"))),
          k(
            t,
            "focus",
            (function (t) {
              return function () {
                h &&
                t.value === t.getAttribute(l) &&
                "true" === t.getAttribute(i)
                  ? I(t, 0)
                  : V(t);
              };
            })(t)
          ),
          k(
            t,
            "blur",
            (function (t) {
              return function () {
                D(t);
              };
            })(t)
          ),
          h &&
            (k(
              t,
              "keydown",
              (function (t) {
                return function (e) {
                  if (
                    ((r = t.value),
                    "true" === t.getAttribute(i) &&
                      r === t.getAttribute(l) &&
                      L(a, e.keyCode))
                  )
                    return e.preventDefault && e.preventDefault(), !1;
                };
              })(t)
            ),
            k(
              t,
              "keyup",
              (function (t) {
                return function () {
                  V(t, r), "" === t.value && (t.blur(), I(t, 0));
                };
              })(t)
            ),
            k(
              t,
              "click",
              (function (t) {
                return function () {
                  t === S() &&
                    t.value === t.getAttribute(l) &&
                    "true" === t.getAttribute(i) &&
                    I(t, 0);
                };
              })(t)
            )),
          t.setAttribute(s, "true"),
          t.setAttribute(l, y),
          (h || t !== S()) && D(t);
      }
    })(this);
  },
})[6315]();
