/*! This file is auto-generated */
(this.wp = this.wp || {}),
  (this.wp.wordcount = (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
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
      n((n.s = 432))
    );
  })({
    2: function (e, t) {
      !(function () {
        e.exports = this.lodash;
      })();
    },
    432: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2),
        o = {
          HTMLRegExp: /<\/?[a-z][^>]*?>/gi,
          HTMLcommentRegExp: /<!--[\s\S]*?-->/g,
          spaceRegExp: /&nbsp;|&#160;/gi,
          HTMLEntityRegExp: /&\S+?;/g,
          connectorRegExp: /--|\u2014/g,
          removeRegExp: new RegExp(
            ["[", "!-@[-`{-~", "-¿×÷", " -⯿", "⸀-⹿", "]"].join(""),
            "g"
          ),
          astralRegExp: /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
          wordsRegExp: /\S\s+/g,
          characters_excluding_spacesRegExp: /\S/g,
          characters_including_spacesRegExp: /[^\f\n\r\t\v\u00AD\u2028\u2029]/g,
          l10n: { type: "words" },
        },
        i = function (e, t) {
          if (e.HTMLRegExp) return t.replace(e.HTMLRegExp, "\n");
        },
        c = function (e, t) {
          return e.astralRegExp ? t.replace(e.astralRegExp, "a") : t;
        },
        u = function (e, t) {
          return e.HTMLEntityRegExp ? t.replace(e.HTMLEntityRegExp, "") : t;
        },
        p = function (e, t) {
          return e.connectorRegExp ? t.replace(e.connectorRegExp, " ") : t;
        },
        s = function (e, t) {
          return e.removeRegExp ? t.replace(e.removeRegExp, "") : t;
        },
        a = function (e, t) {
          return e.HTMLcommentRegExp ? t.replace(e.HTMLcommentRegExp, "") : t;
        },
        g = function (e, t) {
          return e.shortcodesRegExp ? t.replace(e.shortcodesRegExp, "\n") : t;
        },
        d = function (e, t) {
          if (e.spaceRegExp) return t.replace(e.spaceRegExp, " ");
        },
        f = function (e, t) {
          return e.HTMLEntityRegExp ? t.replace(e.HTMLEntityRegExp, "a") : t;
        };
      function l(e, t, n) {
        if ("" === e) return 0;
        if (e) {
          var l = (function (e, t) {
              var n = Object(r.extend)(o, t);
              return (
                (n.shortcodes = n.l10n.shortcodes || {}),
                n.shortcodes &&
                  n.shortcodes.length &&
                  (n.shortcodesRegExp = new RegExp(
                    "\\[\\/?(?:" + n.shortcodes.join("|") + ")[^\\]]*?\\]",
                    "g"
                  )),
                (n.type = e || n.l10n.type),
                "characters_excluding_spaces" !== n.type &&
                  "characters_including_spaces" !== n.type &&
                  (n.type = "words"),
                n
              );
            })(t, n),
            x = l[t + "RegExp"],
            E =
              "words" === l.type
                ? (function (e, t, n) {
                    return (
                      (e = Object(r.flow)(
                        i.bind(this, n),
                        a.bind(this, n),
                        g.bind(this, n),
                        d.bind(this, n),
                        u.bind(this, n),
                        p.bind(this, n),
                        s.bind(this, n)
                      )(e)),
                      (e += "\n").match(t)
                    );
                  })(e, x, l)
                : (function (e, t, n) {
                    return (
                      (e = Object(r.flow)(
                        i.bind(this, n),
                        a.bind(this, n),
                        g.bind(this, n),
                        d.bind(this, n),
                        c.bind(this, n),
                        f.bind(this, n)
                      )(e)),
                      (e += "\n").match(t)
                    );
                  })(e, x, l);
          return E ? E.length : 0;
        }
      }
      n.d(t, "count", function () {
        return l;
      });
    },
  }));
