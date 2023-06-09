/*! This file is auto-generated */
(this.wp = this.wp || {}),
  (this.wp.i18n = (function (e) {
    var r = {};
    function t(n) {
      if (r[n]) return r[n].exports;
      var i = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function (e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
      }),
      (t.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (t.t = function (e, r) {
        if ((1 & r && (e = t(e)), 8 & r)) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (t.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & r && "string" != typeof e)
        )
          for (var i in e)
            t.d(
              n,
              i,
              function (r) {
                return e[r];
              }.bind(null, i)
            );
        return n;
      }),
      (t.n = function (e) {
        var r =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(r, "a", r), r;
      }),
      (t.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (t.p = ""),
      t((t.s = 442))
    );
  })({
    188: function (e, r, t) {
      var n;
      !(function () {
        "use strict";
        var i = {
          not_string: /[^s]/,
          not_bool: /[^t]/,
          not_type: /[^T]/,
          not_primitive: /[^v]/,
          number: /[diefg]/,
          numeric_arg: /[bcdiefguxX]/,
          json: /[j]/,
          not_json: /[^j]/,
          text: /^[^\x25]+/,
          modulo: /^\x25{2}/,
          placeholder:
            /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
          key: /^([a-z_][a-z_\d]*)/i,
          key_access: /^\.([a-z_][a-z_\d]*)/i,
          index_access: /^\[(\d+)\]/,
          sign: /^[+-]/,
        };
        function o(e) {
          return (function (e, r) {
            var t,
              n,
              u,
              a,
              s,
              c,
              p,
              f,
              l,
              d = 1,
              g = e.length,
              h = "";
            for (n = 0; n < g; n++)
              if ("string" == typeof e[n]) h += e[n];
              else if ("object" == typeof e[n]) {
                if ((a = e[n]).keys)
                  for (t = r[d], u = 0; u < a.keys.length; u++) {
                    if (null == t)
                      throw new Error(
                        o(
                          '[sprintf] Cannot access property "%s" of undefined value "%s"',
                          a.keys[u],
                          a.keys[u - 1]
                        )
                      );
                    t = t[a.keys[u]];
                  }
                else t = a.param_no ? r[a.param_no] : r[d++];
                if (
                  (i.not_type.test(a.type) &&
                    i.not_primitive.test(a.type) &&
                    t instanceof Function &&
                    (t = t()),
                  i.numeric_arg.test(a.type) &&
                    "number" != typeof t &&
                    isNaN(t))
                )
                  throw new TypeError(
                    o("[sprintf] expecting number but found %T", t)
                  );
                switch ((i.number.test(a.type) && (f = t >= 0), a.type)) {
                  case "b":
                    t = parseInt(t, 10).toString(2);
                    break;
                  case "c":
                    t = String.fromCharCode(parseInt(t, 10));
                    break;
                  case "d":
                  case "i":
                    t = parseInt(t, 10);
                    break;
                  case "j":
                    t = JSON.stringify(
                      t,
                      null,
                      a.width ? parseInt(a.width) : 0
                    );
                    break;
                  case "e":
                    t = a.precision
                      ? parseFloat(t).toExponential(a.precision)
                      : parseFloat(t).toExponential();
                    break;
                  case "f":
                    t = a.precision
                      ? parseFloat(t).toFixed(a.precision)
                      : parseFloat(t);
                    break;
                  case "g":
                    t = a.precision
                      ? String(Number(t.toPrecision(a.precision)))
                      : parseFloat(t);
                    break;
                  case "o":
                    t = (parseInt(t, 10) >>> 0).toString(8);
                    break;
                  case "s":
                    (t = String(t)),
                      (t = a.precision ? t.substring(0, a.precision) : t);
                    break;
                  case "t":
                    (t = String(!!t)),
                      (t = a.precision ? t.substring(0, a.precision) : t);
                    break;
                  case "T":
                    (t = Object.prototype.toString
                      .call(t)
                      .slice(8, -1)
                      .toLowerCase()),
                      (t = a.precision ? t.substring(0, a.precision) : t);
                    break;
                  case "u":
                    t = parseInt(t, 10) >>> 0;
                    break;
                  case "v":
                    (t = t.valueOf()),
                      (t = a.precision ? t.substring(0, a.precision) : t);
                    break;
                  case "x":
                    t = (parseInt(t, 10) >>> 0).toString(16);
                    break;
                  case "X":
                    t = (parseInt(t, 10) >>> 0).toString(16).toUpperCase();
                }
                i.json.test(a.type)
                  ? (h += t)
                  : (!i.number.test(a.type) || (f && !a.sign)
                      ? (l = "")
                      : ((l = f ? "+" : "-"),
                        (t = t.toString().replace(i.sign, ""))),
                    (c = a.pad_char
                      ? "0" === a.pad_char
                        ? "0"
                        : a.pad_char.charAt(1)
                      : " "),
                    (p = a.width - (l + t).length),
                    (s = a.width && p > 0 ? c.repeat(p) : ""),
                    (h += a.align
                      ? l + t + s
                      : "0" === c
                      ? l + s + t
                      : s + l + t));
              }
            return h;
          })(
            (function (e) {
              if (a[e]) return a[e];
              var r,
                t = e,
                n = [],
                o = 0;
              for (; t; ) {
                if (null !== (r = i.text.exec(t))) n.push(r[0]);
                else if (null !== (r = i.modulo.exec(t))) n.push("%");
                else {
                  if (null === (r = i.placeholder.exec(t)))
                    throw new SyntaxError("[sprintf] unexpected placeholder");
                  if (r[2]) {
                    o |= 1;
                    var u = [],
                      s = r[2],
                      c = [];
                    if (null === (c = i.key.exec(s)))
                      throw new SyntaxError(
                        "[sprintf] failed to parse named argument key"
                      );
                    for (u.push(c[1]); "" !== (s = s.substring(c[0].length)); )
                      if (null !== (c = i.key_access.exec(s))) u.push(c[1]);
                      else {
                        if (null === (c = i.index_access.exec(s)))
                          throw new SyntaxError(
                            "[sprintf] failed to parse named argument key"
                          );
                        u.push(c[1]);
                      }
                    r[2] = u;
                  } else o |= 2;
                  if (3 === o)
                    throw new Error(
                      "[sprintf] mixing positional and named placeholders is not (yet) supported"
                    );
                  n.push({
                    placeholder: r[0],
                    param_no: r[1],
                    keys: r[2],
                    sign: r[3],
                    pad_char: r[4],
                    align: r[5],
                    width: r[6],
                    precision: r[7],
                    type: r[8],
                  });
                }
                t = t.substring(r[0].length);
              }
              return (a[e] = n);
            })(e),
            arguments
          );
        }
        function u(e, r) {
          return o.apply(null, [e].concat(r || []));
        }
        var a = Object.create(null);
        (r.sprintf = o),
          (r.vsprintf = u),
          "undefined" != typeof window &&
            ((window.sprintf = o),
            (window.vsprintf = u),
            void 0 ===
              (n = function () {
                return { sprintf: o, vsprintf: u };
              }.call(r, t, r, e)) || (e.exports = n));
      })();
    },
    442: function (e, r, t) {
      "use strict";
      t.r(r);
      var n,
        i,
        o,
        u,
        a = t(5);
      (n = {
        "(": 9,
        "!": 8,
        "*": 7,
        "/": 7,
        "%": 7,
        "+": 6,
        "-": 6,
        "<": 5,
        "<=": 5,
        ">": 5,
        ">=": 5,
        "==": 4,
        "!=": 4,
        "&&": 3,
        "||": 2,
        "?": 1,
        "?:": 1,
      }),
        (i = ["(", "?"]),
        (o = { ")": ["("], ":": ["?", "?:"] }),
        (u = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/);
      var s = {
        "!": function (e) {
          return !e;
        },
        "*": function (e, r) {
          return e * r;
        },
        "/": function (e, r) {
          return e / r;
        },
        "%": function (e, r) {
          return e % r;
        },
        "+": function (e, r) {
          return e + r;
        },
        "-": function (e, r) {
          return e - r;
        },
        "<": function (e, r) {
          return e < r;
        },
        "<=": function (e, r) {
          return e <= r;
        },
        ">": function (e, r) {
          return e > r;
        },
        ">=": function (e, r) {
          return e >= r;
        },
        "==": function (e, r) {
          return e === r;
        },
        "!=": function (e, r) {
          return e !== r;
        },
        "&&": function (e, r) {
          return e && r;
        },
        "||": function (e, r) {
          return e || r;
        },
        "?:": function (e, r, t) {
          if (e) throw r;
          return t;
        },
      };
      function c(e) {
        var r = (function (e) {
          for (var r, t, a, s, c = [], p = []; (r = e.match(u)); ) {
            for (
              t = r[0], (a = e.substr(0, r.index).trim()) && c.push(a);
              (s = p.pop());

            ) {
              if (o[t]) {
                if (o[t][0] === s) {
                  t = o[t][1] || t;
                  break;
                }
              } else if (i.indexOf(s) >= 0 || n[s] < n[t]) {
                p.push(s);
                break;
              }
              c.push(s);
            }
            o[t] || p.push(t), (e = e.substr(r.index + t.length));
          }
          return (e = e.trim()) && c.push(e), c.concat(p.reverse());
        })(e);
        return function (e) {
          return (function (e, r) {
            var t,
              n,
              i,
              o,
              u,
              a,
              c = [];
            for (t = 0; t < e.length; t++) {
              if (((u = e[t]), (o = s[u]))) {
                for (n = o.length, i = Array(n); n--; ) i[n] = c.pop();
                try {
                  a = o.apply(null, i);
                } catch (e) {
                  return e;
                }
              } else a = r.hasOwnProperty(u) ? r[u] : +u;
              c.push(a);
            }
            return c[0];
          })(r, e);
        };
      }
      var p = { contextDelimiter: "", onMissingKey: null };
      function f(e, r) {
        var t;
        for (t in ((this.data = e),
        (this.pluralForms = {}),
        (this.options = {}),
        p))
          this.options[t] = void 0 !== r && t in r ? r[t] : p[t];
      }
      (f.prototype.getPluralForm = function (e, r) {
        var t,
          n,
          i,
          o,
          u = this.pluralForms[e];
        return (
          u ||
            ("function" !=
              typeof (i =
                (t = this.data[e][""])["Plural-Forms"] ||
                t["plural-forms"] ||
                t.plural_forms) &&
              ((n = (function (e) {
                var r, t, n;
                for (r = e.split(";"), t = 0; t < r.length; t++)
                  if (0 === (n = r[t].trim()).indexOf("plural="))
                    return n.substr(7);
              })(t["Plural-Forms"] || t["plural-forms"] || t.plural_forms)),
              (o = c(n)),
              (i = function (e) {
                return +o({ n: e });
              })),
            (u = this.pluralForms[e] = i)),
          u(r)
        );
      }),
        (f.prototype.dcnpgettext = function (e, r, t, n, i) {
          var o, u, a;
          return (
            (o = void 0 === i ? 0 : this.getPluralForm(e, i)),
            (u = t),
            r && (u = r + this.options.contextDelimiter + t),
            (a = this.data[e][u]) && a[o]
              ? a[o]
              : (this.options.onMissingKey && this.options.onMissingKey(t, e),
                0 === o ? t : n)
          );
        });
      var l = t(46),
        d = t.n(l),
        g = t(188),
        h = t.n(g);
      function y(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function b(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? y(Object(t), !0).forEach(function (r) {
                Object(a.a)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      t.d(r, "setLocaleData", function () {
        return w;
      }),
        t.d(r, "__", function () {
          return O;
        }),
        t.d(r, "_x", function () {
          return j;
        }),
        t.d(r, "_n", function () {
          return k;
        }),
        t.d(r, "_nx", function () {
          return S;
        }),
        t.d(r, "sprintf", function () {
          return P;
        });
      var v = {
          "": {
            plural_forms: function (e) {
              return 1 === e ? 0 : 1;
            },
          },
        },
        x = d()(console.error),
        m = new f({});
      function w(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "default";
        (m.data[r] = b({}, v, {}, m.data[r], {}, e)),
          (m.data[r][""] = b({}, v[""], {}, m.data[r][""]));
      }
      function _() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "default",
          r = arguments.length > 1 ? arguments[1] : void 0,
          t = arguments.length > 2 ? arguments[2] : void 0,
          n = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0;
        return m.data[e] || w(void 0, e), m.dcnpgettext(e, r, t, n, i);
      }
      function O(e, r) {
        return _(r, void 0, e);
      }
      function j(e, r, t) {
        return _(t, r, e);
      }
      function k(e, r, t, n) {
        return _(n, void 0, e, r, t);
      }
      function S(e, r, t, n, i) {
        return _(i, n, e, r, t);
      }
      function P(e) {
        try {
          for (
            var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1;
            n < r;
            n++
          )
            t[n - 1] = arguments[n];
          return h.a.sprintf.apply(h.a, [e].concat(t));
        } catch (r) {
          return x("sprintf error: \n\n" + r.toString()), e;
        }
      }
    },
    46: function (e, r, t) {
      e.exports = function (e, r) {
        var t,
          n,
          i = 0;
        function o() {
          var o,
            u,
            a = t,
            s = arguments.length;
          e: for (; a; ) {
            if (a.args.length === arguments.length) {
              for (u = 0; u < s; u++)
                if (a.args[u] !== arguments[u]) {
                  a = a.next;
                  continue e;
                }
              return (
                a !== t &&
                  (a === n && (n = a.prev),
                  (a.prev.next = a.next),
                  a.next && (a.next.prev = a.prev),
                  (a.next = t),
                  (a.prev = null),
                  (t.prev = a),
                  (t = a)),
                a.val
              );
            }
            a = a.next;
          }
          for (o = new Array(s), u = 0; u < s; u++) o[u] = arguments[u];
          return (
            (a = { args: o, val: e.apply(null, o) }),
            t ? ((t.prev = a), (a.next = t)) : (n = a),
            i === r.maxSize ? ((n = n.prev).next = null) : i++,
            (t = a),
            a.val
          );
        }
        return (
          (r = r || {}),
          (o.clear = function () {
            (t = null), (n = null), (i = 0);
          }),
          o
        );
      };
    },
    5: function (e, r, t) {
      "use strict";
      function n(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      t.d(r, "a", function () {
        return n;
      });
    },
  }));
