!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
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
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
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
    n((n.s = 20));
})([
  function (e, t) {
    e.exports = wp.i18n;
  },
  function (e, t) {
    e.exports = lodash;
  },
  function (e, t) {
    e.exports = wp.element;
  },
  function (e, t) {
    e.exports = wp.components;
  },
  function (e, t) {
    e.exports = wp.data;
  },
  function (e, t) {
    e.exports = wp.hooks;
  },
  function (e, t, n) {
    var r;
    !(function () {
      "use strict";
      var n = {}.hasOwnProperty;
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          if (r) {
            var o = typeof r;
            if ("string" === o || "number" === o) e.push(r);
            else if (Array.isArray(r)) {
              if (r.length) {
                var c = a.apply(null, r);
                c && e.push(c);
              }
            } else if ("object" === o)
              if (r.toString === Object.prototype.toString)
                for (var i in r) n.call(r, i) && r[i] && e.push(i);
              else e.push(r.toString());
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((a.default = a), (e.exports = a))
        : void 0 ===
            (r = function () {
              return a;
            }.apply(t, [])) || (e.exports = r);
    })();
  },
  function (e, t) {
    e.exports = wp.compose;
  },
  function (e, t) {
    e.exports = jQuery;
  },
  function (e, t) {
    e.exports = wp.apiFetch;
  },
  function (e, t) {
    e.exports = rankMathAnalyzer;
  },
  function (e, t) {
    e.exports = React;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        return e;
      };
    }
    var a = function () {};
    (a.thatReturns = r),
      (a.thatReturnsFalse = r(!1)),
      (a.thatReturnsTrue = r(!0)),
      (a.thatReturnsNull = r(null)),
      (a.thatReturnsThis = function () {
        return this;
      }),
      (a.thatReturnsArgument = function (e) {
        return e;
      }),
      (e.exports = a);
  },
  function (e, t) {
    e.exports = wp.plugins;
  },
  function (e, t) {
    e.exports = wp.editPost;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      a = i(n(11)),
      o = i(n(16)),
      c = i(n(19));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = void 0;
    function l(e, t) {
      var n,
        c,
        i,
        u,
        m,
        p,
        h,
        f,
        d = [],
        b = {};
      for (p = 0; p < e.length; p++)
        if ("string" !== (m = e[p]).type) {
          if (!t.hasOwnProperty(m.value) || void 0 === t[m.value])
            throw new Error(
              "Invalid interpolation, missing component node: `" + m.value + "`"
            );
          if ("object" !== r(t[m.value]))
            throw new Error(
              "Invalid interpolation, component node must be a ReactElement or null: `" +
                m.value +
                "`",
              "\n> " + s
            );
          if ("componentClose" === m.type)
            throw new Error(
              "Missing opening component token: `" + m.value + "`"
            );
          if ("componentOpen" === m.type) {
            (n = t[m.value]), (i = p);
            break;
          }
          d.push(t[m.value]);
        } else d.push(m.value);
      return (
        n &&
          ((u = (function (e, t) {
            var n,
              r,
              a = t[e],
              o = 0;
            for (r = e + 1; r < t.length; r++)
              if ((n = t[r]).value === a.value) {
                if ("componentOpen" === n.type) {
                  o++;
                  continue;
                }
                if ("componentClose" === n.type) {
                  if (0 === o) return r;
                  o--;
                }
              }
            throw new Error(
              "Missing closing component token `" + a.value + "`"
            );
          })(i, e)),
          (h = l(e.slice(i + 1, u), t)),
          (c = a.default.cloneElement(n, {}, h)),
          d.push(c),
          u < e.length - 1 && ((f = l(e.slice(u + 1), t)), (d = d.concat(f)))),
        1 === d.length
          ? d[0]
          : (d.forEach(function (e, t) {
              e && (b["interpolation-child-" + t] = e);
            }),
            (0, o.default)(b))
      );
    }
    t.default = function (e) {
      var t = e.mixedString,
        n = e.components,
        a = e.throwErrors;
      if (((s = t), !n)) return t;
      if ("object" !== (void 0 === n ? "undefined" : r(n))) {
        if (a)
          throw new Error(
            "Interpolation Error: unable to process `" +
              t +
              "` because components is not an object"
          );
        return t;
      }
      var o = (0, c.default)(t);
      try {
        return l(o, n);
      } catch (e) {
        if (a)
          throw new Error(
            "Interpolation Error: unable to process `" +
              t +
              "` because of error `" +
              e.message +
              "`"
          );
        return t;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(11),
      a =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103,
      o = n(12),
      c = n(17),
      i = n(18),
      s = "function" == typeof Symbol && Symbol.iterator;
    function l(e, t) {
      return e && "object" == typeof e && null != e.key
        ? ((n = e.key),
          (r = { "=": "=0", ":": "=2" }),
          "$" +
            ("" + n).replace(/[=:]/g, function (e) {
              return r[e];
            }))
        : t.toString(36);
      var n, r;
    }
    function u(e, t, n, r) {
      var o,
        i = typeof e;
      if (
        (("undefined" !== i && "boolean" !== i) || (e = null),
        null === e ||
          "string" === i ||
          "number" === i ||
          ("object" === i && e.$$typeof === a))
      )
        return n(r, e, "" === t ? "." + l(e, 0) : t), 1;
      var m = 0,
        p = "" === t ? "." : t + ":";
      if (Array.isArray(e))
        for (var h = 0; h < e.length; h++)
          m += u((o = e[h]), p + l(o, h), n, r);
      else {
        var f = (function (e) {
          var t = e && ((s && e[s]) || e["@@iterator"]);
          if ("function" == typeof t) return t;
        })(e);
        if (f) {
          0;
          for (var d, b = f.call(e), y = 0; !(d = b.next()).done; )
            m += u((o = d.value), p + l(o, y++), n, r);
        } else if ("object" === i) {
          0;
          var k = "" + e;
          c(
            !1,
            "Objects are not valid as a React child (found: %s).%s",
            "[object Object]" === k
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : k,
            ""
          );
        }
      }
      return m;
    }
    var m = /\/+/g;
    function p(e) {
      return ("" + e).replace(m, "$&/");
    }
    var h,
      f,
      d = b,
      b = function (e) {
        var t = this;
        if (t.instancePool.length) {
          var n = t.instancePool.pop();
          return t.call(n, e), n;
        }
        return new t(e);
      },
      y = function (e) {
        var t = this;
        c(
          e instanceof t,
          "Trying to release an instance into a pool of a different type."
        ),
          e.destructor(),
          t.instancePool.length < t.poolSize && t.instancePool.push(e);
      };
    function k(e, t, n, r) {
      (this.result = e),
        (this.keyPrefix = t),
        (this.func = n),
        (this.context = r),
        (this.count = 0);
    }
    function w(e, t, n) {
      var a,
        c,
        i = e.result,
        s = e.keyPrefix,
        l = e.func,
        u = e.context,
        m = l.call(u, t, e.count++);
      Array.isArray(m)
        ? v(m, i, n, o.thatReturnsArgument)
        : null != m &&
          (r.isValidElement(m) &&
            ((a = m),
            (c =
              s + (!m.key || (t && t.key === m.key) ? "" : p(m.key) + "/") + n),
            (m = r.cloneElement(
              a,
              { key: c },
              void 0 !== a.props ? a.props.children : void 0
            ))),
          i.push(m));
    }
    function v(e, t, n, r, a) {
      var o = "";
      null != n && (o = p(n) + "/");
      var c = k.getPooled(t, o, r, a);
      !(function (e, t, n) {
        null == e || u(e, "", t, n);
      })(e, w, c),
        k.release(c);
    }
    (k.prototype.destructor = function () {
      (this.result = null),
        (this.keyPrefix = null),
        (this.func = null),
        (this.context = null),
        (this.count = 0);
    }),
      (h = function (e, t, n, r) {
        var a = this;
        if (a.instancePool.length) {
          var o = a.instancePool.pop();
          return a.call(o, e, t, n, r), o;
        }
        return new a(e, t, n, r);
      }),
      ((f = k).instancePool = []),
      (f.getPooled = h || d),
      f.poolSize || (f.poolSize = 10),
      (f.release = y);
    e.exports = function (e) {
      if ("object" != typeof e || !e || Array.isArray(e))
        return (
          i(
            !1,
            "React.addons.createFragment only accepts a single object. Got: %s",
            e
          ),
          e
        );
      if (r.isValidElement(e))
        return (
          i(
            !1,
            "React.addons.createFragment does not accept a ReactElement without a wrapper object."
          ),
          e
        );
      c(
        1 !== e.nodeType,
        "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components."
      );
      var t = [];
      for (var n in e) v(e[n], t, n, o.thatReturnsArgument);
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, a, o, c, i) {
      if (!e) {
        var s;
        if (void 0 === t)
          s = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var l = [n, r, a, o, c, i],
            u = 0;
          (s = new Error(
            t.replace(/%s/g, function () {
              return l[u++];
            })
          )).name = "Invariant Violation";
        }
        throw ((s.framesToPop = 1), s);
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(12);
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return e.match(/^\{\{\//)
        ? { type: "componentClose", value: e.replace(/\W/g, "") }
        : e.match(/\/\}\}$/)
        ? { type: "componentSelfClosing", value: e.replace(/\W/g, "") }
        : e.match(/^\{\{/)
        ? { type: "componentOpen", value: e.replace(/\W/g, "") }
        : { type: "string", value: e };
    }
    e.exports = function (e) {
      return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(8),
      a = n.n(r),
      o = n(6),
      c = n.n(o),
      i = n(1),
      s = n(0),
      l = n(5),
      u = n(3),
      m = n(2),
      p = n(13),
      h = n(14),
      f = n(4),
      d = n(7),
      b = n(9),
      y = n.n(b);
    function k(e) {
      return (
        (k =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        k(e)
      );
    }
    function w(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function v(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function g(e, t) {
      return (
        (g = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        g(e, t)
      );
    }
    function _(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = E(e);
        if (t) {
          var a = E(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return O(this, n);
      };
    }
    function O(e, t) {
      if (t && ("object" === k(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return j(e);
    }
    function j(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function E(e) {
      return (
        (E = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        E(e)
      );
    }
    var S = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && g(e, t);
        })(o, e);
        var t,
          n,
          r,
          a = _(o);
        function o() {
          var e;
          return (
            w(this, o),
            ((e = a.apply(this, arguments)).state = { score: 0 }),
            (e.setState = e.setState.bind(j(e))),
            e
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this;
                return (
                  setTimeout(function () {
                    e.setState({ score: e.props.score });
                  }, 1e3),
                  wp.element.createElement(
                    "div",
                    { className: "rank-math-ca-score" },
                    wp.element.createElement(
                      "div",
                      { className: "score-text" },
                      Object(s.__)("Score:", "rank-math"),
                      " ",
                      this.state.score,
                      wp.element.createElement(
                        "span",
                        null,
                        " / ",
                        Object(s.__)("100", "rank-math")
                      )
                    ),
                    wp.element.createElement(
                      "div",
                      { className: "score-wrapper" },
                      wp.element.createElement("span", {
                        className: "score-dot",
                        style: {
                          left:
                            (Object(i.inRange)(this.state.score, 0, 5)
                              ? 5
                              : this.state.score) + "%",
                        },
                      })
                    )
                  )
                );
              },
            },
          ]) && v(t.prototype, n),
          r && v(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(m.Component),
      C = Object(d.compose)(
        Object(f.withSelect)(function (e) {
          var t = Object.values(e("rank-math").getContentAIScore());
          return { score: Object(i.round)(Object(i.sum)(t) / t.length) };
        })
      )(S),
      P = function (e) {
        return 100 < e
          ? "bad-fk dark"
          : 80 < e
          ? "good-fk"
          : 50 < e
          ? "ok-fk"
          : "bad-fk";
      };
    function N(e) {
      return (
        (N =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        N(e)
      );
    }
    function R(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function x(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function T(e, t) {
      return (
        (T = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        T(e, t)
      );
    }
    function A(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = D(e);
        if (t) {
          var a = D(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return M(this, n);
      };
    }
    function M(e, t) {
      if (t && ("object" === N(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return I(e);
    }
    function I(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function D(e) {
      return (
        (D = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        D(e)
      );
    }
    var B = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && T(e, t);
        })(o, e);
        var t,
          n,
          r,
          a = A(o);
        function o() {
          var e;
          return (
            R(this, o),
            ((e = a.apply(this, arguments)).state = { activeTab: "" }),
            (e.setState = e.setState.bind(I(e))),
            e
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "render",
              value: function () {
                return wp.element.createElement(
                  "div",
                  { className: "rank-math-ca-recommendations" },
                  this.getRecommendations(this.props.recommendations)
                );
              },
            },
            {
              key: "getRecommendations",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = [];
                return (
                  Object(i.forEach)(e, function (e, a) {
                    if ("total" !== a) {
                      var o = Object(i.isUndefined)(e.total) ? e : e.total,
                        l = t.getPostStats(a),
                        u = c()(a, {
                          "has-children": !Object(i.isUndefined)(e.total),
                          show: a === t.state.activeTab,
                        }),
                        m = t.getScore(a, l, o, n),
                        p = Object(i.ceil)((150 * o) / 100);
                      r.push(
                        wp.element.createElement(
                          "div",
                          {
                            className: u + " " + P(m),
                            onClick: function () {
                              return t.setState({
                                activeTab: t.state.activeTab !== a ? a : "",
                              });
                            },
                            role: "presentation",
                          },
                          wp.element.createElement(
                            "h4",
                            null,
                            n ? a : Object(i.startCase)(a)
                          ),
                          n &&
                            wp.element.createElement("span", null, l, " / ", o),
                          !n &&
                            wp.element.createElement(
                              React.Fragment,
                              null,
                              wp.element.createElement("strong", null, l),
                              wp.element.createElement(
                                "span",
                                { className: "desc" },
                                Object(s.__)("Use", "rank-math"),
                                " ",
                                o,
                                " ",
                                Object(s.__)("to", "rank-math"),
                                " ",
                                p
                              )
                            ),
                          Object(i.isObject)(e) && t.getRecommendations(e, !0)
                        )
                      );
                    }
                  }),
                  n
                    ? wp.element.createElement(
                        "div",
                        { className: "submenu" },
                        r
                      )
                    : r
                );
              },
            },
            {
              key: "getPostStats",
              value: function (e) {
                return Object(i.has)(this.props.postStats, e)
                  ? this.props.postStats[e]
                  : 0;
              },
            },
            {
              key: "getScore",
              value: function (e, t, n, r) {
                var a = t === n ? 100 : (t / n) * 100;
                if ((0 === n && t <= 2 && (a = 100), r))
                  return a > 100 && a <= 125 ? 100 : a;
                var o = a > 80 ? 100 : (t / n) * 80;
                return (
                  a > 125 && "wordCount" !== e && (o = 0),
                  this.props.updateAiScore(e, o),
                  (a > 100 && "wordCount" === e) || (a > 100 && a <= 125)
                    ? 100
                    : a
                );
              },
            },
          ]),
          n && x(t.prototype, n),
          r && x(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(m.Component),
      K = Object(d.compose)(
        Object(f.withSelect)(function (e, t) {
          var n = 1518,
            r = 12,
            a = 2,
            o = 5,
            c = 3,
            s = 0,
            l = 0,
            u = 0,
            m = 8,
            p = 19;
          if (t.hasCredits) {
            var h = t.researcher.getResearch("wordCount"),
              f =
                rankMathEditor.assessor.analyzer.defaultAnalyses
                  .contentHasAssets;
            (n = h(t.content)),
              (r = Object(i.isUndefined)(f)
                ? 0
                : f.getImages(t.researcher.paper, t.content)),
              (a = Object(i.isUndefined)(f) ? 0 : f.getVideos(t.content)),
              (o = (t.content.match(/<h2\b[^>]*>(.*?)<\/h2>/g) || []).length),
              (c = (t.content.match(/<h3\b[^>]*>(.*?)<\/h3>/g) || []).length),
              (s = (t.content.match(/<h4\b[^>]*>(.*?)<\/h4>/g) || []).length),
              (l = (t.content.match(/<h5\b[^>]*>(.*?)<\/h5>/g) || []).length),
              (u = (t.content.match(/<h6\b[^>]*>(.*?)<\/h6>/g) || []).length);
            var d = t.researcher.getResearch("getLinkStats")(t.content);
            (m = d.internalTotal), (p = d.externalTotal);
          }
          return {
            postStats: {
              wordCount: n,
              images: r,
              videos: a,
              mediaCount: r + a,
              h2: o,
              h3: c,
              h4: s,
              h5: l,
              h6: u,
              headingCount: o + c + s + l + u,
              internal: m,
              external: p,
              linkCount: m + p,
            },
          };
        })
      )(B);
    function F(e) {
      return (
        (F =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        F(e)
      );
    }
    var L = ["tabId", "onClick", "children", "selected"];
    function U(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function q(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function W(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function $(e, t) {
      return (
        ($ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        $(e, t)
      );
    }
    function z(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = V(e);
        if (t) {
          var a = V(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return H(this, n);
      };
    }
    function H(e, t) {
      if (t && ("object" === F(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function V(e) {
      return (
        (V = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        V(e)
      );
    }
    function Q() {
      return (
        (Q = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Q.apply(this, arguments)
      );
    }
    function J(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var G = function (e) {
        var t = e.tabId,
          n = e.onClick,
          r = e.children,
          a = e.selected,
          o = J(e, L);
        return wp.element.createElement(
          u.Button,
          Q(
            {
              role: "tab",
              tabIndex: a ? null : -1,
              "aria-selected": a,
              id: t,
              onClick: n,
            },
            o
          ),
          r
        );
      },
      Y = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && $(e, t);
        })(o, e);
        var t,
          n,
          r,
          a = z(o);
        function o() {
          var e;
          q(this, o),
            ((e = a.apply(this, arguments)).handleClick = function (t) {
              var n = e.props.onSelect,
                r = void 0 === n ? i.noop : n;
              e.setState({ selected: t }), r(t);
            }),
            (e.onNavigate = function (e, t) {
              t.click();
            });
          var t = e.props,
            n = t.tabs,
            r = t.initialTabName;
          return (
            (e.state = { selected: r || (n.length > 0 ? n[0].name : null) }), e
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state.selected,
                  n = this.props,
                  r = n.activeClass,
                  a = void 0 === r ? "is-active" : r,
                  o = n.className,
                  s = n.instanceId,
                  l = n.orientation,
                  m = void 0 === l ? "horizontal" : l,
                  p = n.tabs,
                  h = Object(i.find)(p, { name: t }),
                  f = s + "-" + h.name,
                  d = p.slice(4);
                return wp.element.createElement(
                  "div",
                  { className: o },
                  wp.element.createElement(
                    u.NavigableMenu,
                    {
                      role: "tablist",
                      orientation: m,
                      onNavigate: this.onNavigate,
                      className: "components-tab-panel__tabs " + t,
                    },
                    p.slice(0, 4).map(function (n) {
                      return wp.element.createElement(
                        G,
                        {
                          className: c()(
                            "components-tab-panel__tabs-item",
                            n.className,
                            U({}, a, n.name === t)
                          ),
                          tabId: s + "-" + n.name,
                          "aria-controls": s + "-" + n.name + "-view",
                          selected: n.name === t,
                          key: n.name,
                          onClick: Object(i.partial)(e.handleClick, n.name),
                        },
                        n.title
                      );
                    }),
                    d.map(function (n) {
                      return wp.element.createElement(
                        G,
                        {
                          className: c()(
                            "components-tab-panel__tabs-item",
                            n.className,
                            U({}, a, n.name === t)
                          ),
                          tabId: s + "-" + n.name,
                          "aria-controls": s + "-" + n.name + "-view",
                          selected: n.name === t,
                          key: n.name,
                          onClick: Object(i.partial)(e.handleClick, n.name),
                        },
                        n.title
                      );
                    })
                  ),
                  h &&
                    wp.element.createElement(
                      "div",
                      {
                        "aria-labelledby": f,
                        role: "tabpanel",
                        id: f + "-view",
                        className: "components-tab-panel__tab-content",
                      },
                      this.props.children(h)
                    )
                );
              },
            },
          ]) && W(t.prototype, n),
          r && W(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(m.Component),
      X = Object(d.withInstanceId)(Y),
      Z = n(10);
    function ee(e) {
      return (
        (ee =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        ee(e)
      );
    }
    function te(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function ne(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function re(e, t) {
      return (
        (re = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        re(e, t)
      );
    }
    function ae(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = ie(e);
        if (t) {
          var a = ie(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return oe(this, n);
      };
    }
    function oe(e, t) {
      if (t && ("object" === ee(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return ce(e);
    }
    function ce(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function ie(e) {
      return (
        (ie = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        ie(e)
      );
    }
    var se = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && re(e, t);
        })(o, e);
        var t,
          n,
          r,
          a = ae(o);
        function o() {
          var e;
          return (
            te(this, o),
            ((e = a.apply(this, arguments)).state = {
              type: "content",
              selected: "",
            }),
            (e.setState = e.setState.bind(ce(e))),
            e.initializeClipboard(e.setState),
            e
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "initializeClipboard",
              value: function (e) {
                "function" == typeof ClipboardJS &&
                  this.props.hasCredits &&
                  new ClipboardJS(".rank-math-tooltip strong", {
                    text: function (e) {
                      return e.getAttribute("data-key");
                    },
                  }).on("success", function () {
                    setTimeout(function () {
                      e({ selected: "" });
                    }, 3e3);
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return wp.element.createElement(
                  m.Fragment,
                  null,
                  wp.element.createElement(
                    u.PanelBody,
                    { initialOpen: !0 },
                    wp.element.createElement(u.SelectControl, {
                      label: Object(s.__)("Use Keyword in", "rank-math"),
                      value: this.state.type,
                      options: [
                        {
                          value: "content",
                          label: Object(s.__)("Content", "rank-math"),
                        },
                        {
                          value: "heading",
                          label: Object(s.__)("Headings", "rank-math"),
                        },
                        {
                          value: "title",
                          label: Object(s.__)("SEO Title", "rank-math"),
                        },
                        {
                          value: "description",
                          label: Object(s.__)("SEO Description", "rank-math"),
                        },
                      ],
                      onChange: function (t) {
                        e.setState({ type: t });
                      },
                    }),
                    wp.element.createElement(
                      "a",
                      {
                        href: "https://rankmath.com/kb/how-to-use-content-ai/?utm_source=Plugin&utm_medium=Sidebar%20Keywords%20KB%20Icon&utm_campaign=WP#keywords",
                        rel: "noreferrer",
                        target: "_blank",
                        className: "rank-math-help-icon",
                        title: Object(s.__)(
                          "Know more about Keywords.",
                          "rank-math"
                        ),
                      },
                      "﹖"
                    ),
                    wp.element.createElement(
                      React.Fragment,
                      null,
                      wp.element.createElement(
                        "span",
                        { className: "components-form-token-field__help" },
                        Object(s.__)(
                          "Click on any keyword to copy it.",
                          "rank-math"
                        )
                      ),
                      wp.element.createElement("br", null),
                      Object(i.includes)(
                        ["title", "description"],
                        this.state.type
                      ) &&
                        wp.element.createElement(
                          "span",
                          { className: "components-form-token-field__help" },
                          Object(s.__)(
                            "Please use only one or two keywords from here.",
                            "rank-math"
                          )
                        ),
                      wp.element.createElement("ul", null, this.getKeywords())
                    ),
                    this.getRelatedKeywords()
                  )
                );
              },
            },
            {
              key: "getRelatedKeywords",
              value: function () {
                var e = this;
                if (
                  "content" !== this.state.type ||
                  Object(i.isEmpty)(this.props.caData.data.related_keywords)
                )
                  return !1;
                var t = [];
                return (
                  Object(i.forEach)(
                    this.props.caData.data.related_keywords,
                    function (n) {
                      t.push(
                        wp.element.createElement(
                          "li",
                          {
                            className: "rank-math-tooltip show",
                            onClick: function () {
                              return e.setState({ selected: n });
                            },
                            role: "presentation",
                          },
                          wp.element.createElement(
                            "strong",
                            { "data-key": n },
                            n
                          ),
                          e.getTooltipContent({ keyword: n }, !0)
                        )
                      );
                    }
                  ),
                  wp.element.createElement(
                    "div",
                    { className: "rank-math-related-keywords" },
                    wp.element.createElement(
                      "h3",
                      null,
                      Object(s.__)("Related Keywords", "rank-math")
                    ),
                    wp.element.createElement("ul", null, t)
                  )
                );
              },
            },
            {
              key: "getKeywords",
              value: function () {
                var e = this;
                if (Object(i.isEmpty)(this.props.caData.data.keywords))
                  return wp.element.createElement(
                    "h3",
                    { className: "no-data" },
                    Object(s.__)(
                      "There are no recommended Keywords for this researched keyword.",
                      "rank-math"
                    )
                  );
                var t = [];
                return (
                  (this.contentAiScore = {}),
                  Object(i.forEach)(
                    this.props.caData.data.keywords,
                    function (n, r) {
                      Object(i.isEmpty)(n) ||
                        ((e.contentAiScore[r] = {}),
                        Object(i.forEach)(n, function (n) {
                          var a = e.props.hasCredits
                              ? e.getCount(n.keyword, r)
                              : n.count,
                            o = P(e.getScore(n.keyword, a, n.average, r)),
                            i = c()("rank-math-tooltip", {
                              show: e.state.type === r,
                            });
                          t.push(
                            wp.element.createElement(
                              "li",
                              {
                                className: i + " " + o,
                                onClick: function () {
                                  return e.setState({ selected: n.keyword });
                                },
                                role: "presentation",
                              },
                              wp.element.createElement(
                                "strong",
                                { "data-key": n.keyword },
                                n.keyword,
                                wp.element.createElement(
                                  "span",
                                  null,
                                  a,
                                  " / ",
                                  n.average
                                )
                              ),
                              e.getTooltipContent(n)
                            )
                          );
                        }));
                    }
                  ),
                  this.updateContentAiScore(),
                  t
                );
              },
            },
            {
              key: "updateContentAiScore",
              value: function () {
                var e = 0,
                  t = 0;
                Object(i.forEach)(this.contentAiScore, function (n, r) {
                  var a = Object.values(n),
                    o = Object(i.sum)(a);
                  ("title" !== r && "description" !== r) ||
                    100 !== Object(i.max)(a) ||
                    (o = 100 * a.length),
                    (e += o),
                    (t += a.length);
                }),
                  (e /= t),
                  Object(i.isNaN)(e) || this.props.updateAiScore("keywords", e);
              },
            },
            {
              key: "getScore",
              value: function (e, t, n, r) {
                var a = (t / n) * 100;
                return (
                  (this.contentAiScore[r][e] = a > 100 ? 0 : a > 80 ? 100 : a),
                  a
                );
              },
            },
            {
              key: "getTooltipContent",
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if (this.props.hasCredits)
                  return this.state.selected === e.keyword
                    ? wp.element.createElement(
                        "span",
                        { className: "rank-math-tooltip-data" },
                        Object(s.__)("Copied", "rank-math")
                      )
                    : e.competition || e.cpc || e.search_volume
                    ? wp.element.createElement(
                        "span",
                        { className: "rank-math-tooltip-data" },
                        wp.element.createElement(
                          "span",
                          null,
                          Object(s.__)("Ad Competition:", "rank-math"),
                          " ",
                          Object(i.round)(100 * e.competition)
                        ),
                        wp.element.createElement(
                          "span",
                          null,
                          Object(s.__)("CPC:", "rank-math"),
                          " $",
                          Object(i.round)(e.cpc, 2)
                        ),
                        wp.element.createElement(
                          "span",
                          null,
                          Object(s.__)("Volume:", "rank-math"),
                          " ",
                          Object(i.round)(e.search_volume)
                        )
                      )
                    : wp.element.createElement(
                        "span",
                        { className: "rank-math-tooltip-data" },
                        t
                          ? Object(s.__)("Click to copy keyword", "rank-math")
                          : Object(s.__)("No data available", "rank-math")
                      );
              },
            },
            {
              key: "getCount",
              value: function (e, t) {
                var n = this.props.caData.content;
                if (((e = Z.Helpers.removeDiacritics(e)), "heading" === t)) {
                  e = e.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                  var r = new RegExp(
                      "<h[2-6][^>]*>.*?" + e + ".*?</h[2-6]>",
                      "g"
                    ),
                    a = n.match(r);
                  return Object(i.isNull)(a) ? 0 : a.length;
                }
                return (
                  "title" === t && (n = this.props.caData.title),
                  "description" === t && (n = this.props.caData.description),
                  Z.Helpers.cleanTagsOnly(n).split(e).length - 1
                );
              },
            },
          ]),
          n && ne(t.prototype, n),
          r && ne(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(m.Component),
      le = Object(d.compose)(
        Object(f.withDispatch)(function (e) {
          return {
            toggleEditor: function () {
              e("rank-math").toggleSnippetEditor(!0);
            },
          };
        })
      )(se),
      ue = function () {
        return !(
          Object(i.isNil)(window.wp) ||
          Object(i.isNil)(wp.data) ||
          Object(i.isNil)(wp.data.select("core/editor")) ||
          !window.document.body.classList.contains("block-editor-page") ||
          !Object(i.isFunction)(
            wp.data.select("core/editor").getEditedPostAttribute
          )
        );
      };
    function me(e) {
      return (
        (me =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        me(e)
      );
    }
    function pe(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function he(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function fe(e, t) {
      return (
        (fe = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        fe(e, t)
      );
    }
    function de(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = ke(e);
        if (t) {
          var a = ke(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return be(this, n);
      };
    }
    function be(e, t) {
      if (t && ("object" === me(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return ye(e);
    }
    function ye(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function ke(e) {
      return (
        (ke = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        ke(e)
      );
    }
    var we = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && fe(e, t);
        })(o, e);
        var t,
          n,
          r,
          a = de(o);
        function o() {
          var e;
          return (
            pe(this, o),
            ((e = a.apply(this, arguments)).state = {
              iconClass: "rm-icon-copy",
              selected: "",
            }),
            (e.setState = e.setState.bind(ye(e))),
            e.initializeClipboard(e.setState),
            e
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "initializeClipboard",
              value: function (e) {
                var t = this;
                "function" == typeof ClipboardJS &&
                  new ClipboardJS(
                    ".rank-math-copy-questions, .rank-math-questions-item h3",
                    {
                      text: function (e) {
                        if (!Object(i.isNull)(e.getAttribute("data-key")))
                          return e.getAttribute("data-key");
                        if (!ue())
                          return document.getElementById(
                            "rank-math-ca-questions-data"
                          ).innerHTML;
                        var n = [];
                        return (
                          Object(i.forEach)(
                            t.props.caData.data.related_questions,
                            function (e) {
                              n.push({
                                id: Object(i.uniqueId)("faq-question-"),
                                title: e,
                                content: "",
                                visible: !0,
                              });
                            }
                          ),
                          "\x3c!-- wp:rank-math/faq-block " +
                            JSON.stringify({ questions: n }) +
                            ' --\x3e<div class="wp-block-rank-math-faq-block"></div>\x3c!-- /wp:rank-math/faq-block --\x3e'
                        );
                      },
                    }
                  ).on("success", function () {
                    setTimeout(function () {
                      e({ iconClass: "rm-icon-copy" });
                    }, 3e3);
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = [];
                return Object(i.isEmpty)(
                  this.props.caData.data.related_questions
                )
                  ? wp.element.createElement(
                      "h3",
                      { className: "no-data" },
                      Object(s.__)(
                        "There are no recommended Questions for this researched keyword.",
                        "rank-math"
                      )
                    )
                  : (Object(i.forEach)(
                      this.props.caData.data.related_questions,
                      function (n) {
                        t.push(
                          wp.element.createElement(
                            "div",
                            { className: "rank-math-questions-item" },
                            wp.element.createElement(
                              "h3",
                              {
                                className: "rank-math-tooltip",
                                "data-key": n,
                                onClick: function () {
                                  return e.setState({ selected: n });
                                },
                                role: "presentation",
                              },
                              n,
                              e.getTooltipContent(n)
                            )
                          )
                        );
                      }
                    ),
                    wp.element.createElement(
                      m.Fragment,
                      null,
                      wp.element.createElement(
                        u.PanelBody,
                        { initialOpen: !0 },
                        wp.element.createElement(
                          "div",
                          { className: "rank-math-section-heading" },
                          wp.element.createElement(
                            "h2",
                            null,
                            Object(s.__)("Related Questions", "rank-math"),
                            wp.element.createElement(
                              "a",
                              {
                                href: "https://rankmath.com/kb/how-to-use-content-ai/?utm_source=Plugin&utm_medium=Sidebar%20Questions%20KB%20Icon&utm_campaign=WP",
                                rel: "noreferrer",
                                target: "_blank",
                                className: "rank-math-help-icon",
                                title: Object(s.__)(
                                  "Know more about Questions.",
                                  "rank-math"
                                ),
                              },
                              "﹖"
                            )
                          ),
                          wp.element.createElement(
                            u.Button,
                            {
                              onClick: function () {
                                e.setState({ iconClass: "rm-icon-tick" });
                              },
                              className:
                                "rank-math-copy-questions button-secondary rank-math-tooltip left",
                            },
                            wp.element.createElement("i", {
                              className: "rm-icon " + this.state.iconClass,
                            }),
                            wp.element.createElement(
                              "span",
                              null,
                              Object(s.__)(
                                "Copy this data as a FAQ Block.",
                                "rank-math"
                              )
                            )
                          )
                        ),
                        wp.element.createElement(
                          "span",
                          { className: "components-form-token-field__help" },
                          Object(s.__)(
                            "Click on any question to copy it.",
                            "rank-math"
                          )
                        ),
                        wp.element.createElement(
                          "div",
                          { id: "rank-math-ca-questions-data" },
                          t
                        )
                      )
                    ));
              },
            },
            {
              key: "getTooltipContent",
              value: function (e) {
                return (
                  this.state.selected === e &&
                  wp.element.createElement(
                    "span",
                    { className: "rank-math-tooltip-data" },
                    Object(s.__)("Copied", "rank-math")
                  )
                );
              },
            },
          ]) && he(t.prototype, n),
          r && he(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(m.Component),
      ve = we,
      ge = function (e) {
        var t = [];
        return Object(i.isEmpty)(e.caData.data.links)
          ? wp.element.createElement(
              "h3",
              { className: "no-data" },
              Object(s.__)(
                "There are no recommended Links for this researched keyword.",
                "rank-math"
              )
            )
          : (Object(i.forEach)(e.caData.data.links, function (e) {
              return t.push(
                wp.element.createElement(
                  "li",
                  null,
                  wp.element.createElement(
                    "a",
                    { href: e, rel: "noreferrer", target: "_blank" },
                    e
                  )
                )
              );
            }),
            wp.element.createElement(
              m.Fragment,
              null,
              wp.element.createElement(
                u.PanelBody,
                { initialOpen: !0 },
                wp.element.createElement(
                  "div",
                  { className: "rank-math-section-heading" },
                  wp.element.createElement(
                    "h2",
                    null,
                    Object(s.__)("Related External Links", "rank-math"),
                    wp.element.createElement(
                      "a",
                      {
                        href: "https://rankmath.com/kb/how-to-use-content-ai/?utm_source=Plugin&utm_medium=Sidebar%20Links%20KB%20Icon&utm_campaign=WP#links",
                        rel: "noreferrer",
                        target: "_blank",
                        className: "rank-math-help-icon",
                        title: Object(s.__)(
                          "Know more about Links.",
                          "rank-math"
                        ),
                      },
                      "﹖"
                    )
                  ),
                  wp.element.createElement(
                    "p",
                    null,
                    Object(s.__)(
                      "Use some of these external links in the content area. It is recommended to add",
                      "rank-math"
                    ),
                    " ",
                    wp.element.createElement(
                      "a",
                      {
                        href: "https://rankmath.com/kb/about-and-mentions-schema/",
                        rel: "noreferrer",
                        target: "_blank",
                      },
                      Object(s.__)("about or mention Schema.", "rank-math")
                    )
                  )
                ),
                wp.element.createElement("ul", null, t)
              )
            ));
      },
      _e = function (e) {
        "social" === e &&
          Object(f.dispatch)("rank-math").toggleSnippetEditor(!0);
      },
      Oe = function (e) {
        return wp.element.createElement(
          X,
          {
            className: "rank-math-contentai-tabs",
            activeClass: "is-active",
            tabs: [
              {
                name: "keywords",
                title: wp.element.createElement(
                  m.Fragment,
                  null,
                  wp.element.createElement(
                    "span",
                    null,
                    Object(s.__)("Keywords", "rank-math")
                  )
                ),
                view: le,
                className: "rank-math-keywords-tab",
              },
              {
                name: "questions",
                title: wp.element.createElement(
                  m.Fragment,
                  null,
                  wp.element.createElement(
                    "span",
                    null,
                    Object(s.__)("Questions", "rank-math")
                  )
                ),
                view: ve,
                className: "rank-math-questions-tab",
              },
              {
                name: "links",
                title: wp.element.createElement(
                  m.Fragment,
                  null,
                  wp.element.createElement(
                    "span",
                    null,
                    Object(s.__)("Links", "rank-math")
                  )
                ),
                view: ge,
                className: "rank-math-recommended-links-tab",
              },
            ],
            onSelect: _e,
            data: e,
          },
          function (t) {
            return wp.element.createElement(
              "div",
              { className: "rank-math-contentai-tab-content-" + t.name },
              Object(m.createElement)(t.view, e)
            );
          }
        );
      },
      je = n(15),
      Ee = n.n(je),
      Se = function (e) {
        var t = e.tags,
          n = e.components,
          r = e.children;
        return (
          (n = n || {}),
          !1 === Object(i.isUndefined)(t) &&
            (t = t.split(",")).forEach(function (e) {
              var t = e;
              n[e] = wp.element.createElement(t, null);
            }),
          Ee()({ mixedString: r, components: n })
        );
      };
    function Ce(e) {
      return (
        (Ce =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Ce(e)
      );
    }
    function Pe(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ne(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Re(e, t) {
      return (
        (Re = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        Re(e, t)
      );
    }
    function xe(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = Me(e);
        if (t) {
          var a = Me(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return Te(this, n);
      };
    }
    function Te(e, t) {
      if (t && ("object" === Ce(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Ae(e);
    }
    function Ae(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Me(e) {
      return (
        (Me = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Me(e)
      );
    }
    var Ie = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Re(e, t);
        })(l, e);
        var t,
          n,
          r,
          o = xe(l);
        function l() {
          var e;
          return (
            Pe(this, l),
            ((e = o.apply(this, arguments)).state = {
              keyword: e.props.keyword,
              showResearch: e.props.keyword !== rankMath.ca_keyword.keyword,
              country: e.props.country,
              credits: 1,
              creditsValue: rankMath.ca_credits,
              loading: !1,
              loadingCredits: !1,
            }),
            (e.setState = e.setState.bind(Ae(e))),
            e
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                !this.state.creditsValue &&
                  rankMath.isUserRegistered &&
                  this.updateCredits();
              },
            },
            {
              key: "updateCredits",
              value: function () {
                var e = this;
                this.setState({ loadingCredits: !0 }),
                  y()({ method: "POST", path: "/rankmath/v1/ca/getCredits" })
                    .catch(function (t) {
                      e.setState({ loadingCredits: !1 }), alert(t.message);
                    })
                    .then(function (t) {
                      e.setState({ creditsValue: t }),
                        e.setState({ loadingCredits: !1 });
                    });
              },
            },
            {
              key: "render",
              value: function () {
                var e =
                    rankMath.isUserRegistered &&
                    Object(i.isNumber)(this.state.credits),
                  t = c()("rank-math-content-ai-data", {
                    loading: this.state.loading,
                    blurred: !e,
                  }),
                  n = this.props.data;
                return (
                  ((!e && Object(i.isEmpty)(n)) || "show_dummy_data" === n) &&
                    (n = this.getDummyData()),
                  wp.element.createElement(
                    m.Fragment,
                    null,
                    wp.element.createElement(
                      u.PanelBody,
                      {
                        className: "rank-math-content-ai-wrapper",
                        initialOpen: !0,
                      },
                      wp.element.createElement(
                        React.Fragment,
                        null,
                        this.getHeader(),
                        !rankMath.isUserRegistered &&
                          this.connectAccountNotice(),
                        rankMath.isUserRegistered &&
                          !e &&
                          this.creditsNotice(e),
                        e && this.keywordField(),
                        wp.element.createElement(
                          "div",
                          { className: t },
                          wp.element.createElement(
                            "span",
                            { className: "loader-text" },
                            wp.element.createElement(
                              "span",
                              null,
                              Object(s.__)(
                                "Fetching Search Results",
                                "rank-math"
                              )
                            ),
                            wp.element.createElement(
                              "span",
                              null,
                              Object(s.__)(
                                "Analysing Your Competitors",
                                "rank-math"
                              )
                            ),
                            wp.element.createElement(
                              "span",
                              null,
                              Object(s.__)("Crunching the Numbers", "rank-math")
                            ),
                            wp.element.createElement(
                              "span",
                              null,
                              Object(s.__)(
                                "Cooking a Personalized SEO Plan",
                                "rank-math"
                              )
                            ),
                            wp.element.createElement(
                              "span",
                              null,
                              Object(s.__)(
                                "Final Touches to the SEO Recommendations",
                                "rank-math"
                              )
                            )
                          ),
                          Object(i.isString)(n) &&
                            wp.element.createElement(
                              "h3",
                              { className: "no-data" },
                              n
                            ),
                          !Object(i.isEmpty)(n) &&
                            !Object(i.isString)(n) &&
                            wp.element.createElement(
                              "div",
                              null,
                              wp.element.createElement(
                                "h3",
                                { className: "rank-math-ca-section-title" },
                                Object(s.__)("Content AI", "rank-math"),
                                wp.element.createElement(
                                  "span",
                                  null,
                                  Object(s.__)("New!", "rank-math")
                                ),
                                wp.element.createElement(
                                  "a",
                                  {
                                    href: "https://rankmath.com/kb/how-to-use-content-ai/?utm_source=Plugin&utm_medium=Sidebar%20KB%20Icon&utm_campaign=WP",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    className: "rank-math-help-icon",
                                    title: Object(s.__)(
                                      "Content AI Knowledge Base.",
                                      "rank-math"
                                    ),
                                  },
                                  "﹖"
                                )
                              ),
                              wp.element.createElement(C, null),
                              wp.element.createElement(K, {
                                recommendations: n.recommendations,
                                hasCredits: e,
                                content: this.props.content,
                                researcher: this.props.researcher,
                                updateAiScore: this.props.updateAiScore,
                                hasThumbnail: this.props.hasThumbnail,
                              }),
                              wp.element.createElement(Oe, {
                                caData: this.props,
                                updateAiScore: this.props.updateAiScore,
                                hasCredits: e,
                              })
                            )
                        )
                      )
                    )
                  )
                );
              },
            },
            {
              key: "getDummyData",
              value: function () {
                return {
                  keywords: {
                    content: {
                      "rank math": {
                        keyword: "rank math",
                        average: 17,
                        count: 12,
                      },
                      "rank math vs yoast seo": {
                        keyword: "rank math vs yoast seo",
                        average: 1,
                        count: 1,
                      },
                      "what is rank math": {
                        keyword: "what is rank math",
                        average: 1,
                        count: 1,
                      },
                      "rank math schema": {
                        keyword: "rank math schema",
                        average: 1,
                        count: 1,
                      },
                      "rank math configuration": {
                        keyword: "rank math configuration",
                        average: 1,
                        count: 1,
                      },
                      "rank math pro version": {
                        keyword: "rank math pro version",
                        average: 1,
                        count: 2,
                      },
                      "rank math comparison": {
                        keyword: "rank math comparison",
                        average: 1,
                        count: 1,
                      },
                      "rank math for seo": {
                        keyword: "rank math for seo",
                        average: 1,
                        count: 1,
                      },
                      "seo by rank math": {
                        keyword: "seo by rank math",
                        average: 1,
                        count: 0,
                      },
                    },
                  },
                  related_keywords: [
                    "rank math plugin",
                    "rank math pricing",
                    "rank math vs yoast",
                    "rank math review",
                    "rank math premium",
                    "how to use rank math",
                    "rank math training",
                    "rank math woocommerce",
                    "wordpress seo plugin",
                  ],
                  recommendations: {
                    wordCount: 1829,
                    linkCount: { total: 16 },
                    headingCount: { total: 9 },
                    mediaCount: { total: 18 },
                  },
                };
              },
            },
            {
              key: "getHeader",
              value: function () {
                var e = this;
                return wp.element.createElement(
                  "div",
                  { className: "rank-math-ca-top-section" },
                  wp.element.createElement(
                    u.Button,
                    {
                      onClick: function () {
                        return a()(".rank-math-general-tab").trigger("click");
                      },
                    },
                    wp.element.createElement("i", {
                      className: "dashicons dashicons-arrow-left-alt",
                    }),
                    Object(s.__)("Back", "rank-math")
                  ),
                  wp.element.createElement(u.SelectControl, {
                    value: this.state.country,
                    onChange: function (t) {
                      return e.setState({ country: t, showResearch: !0 });
                    },
                    options: rankMath.countries,
                  })
                );
              },
            },
            {
              key: "keywordField",
              value: function () {
                var e = this,
                  t = c()("rank-math-tooltip update-credits", {
                    loading: this.state.loadingCredits,
                  });
                return wp.element.createElement(
                  "div",
                  { className: "rank-math-ca-keywords-wrapper" },
                  wp.element.createElement(
                    "div",
                    { className: "rank-math-ca-credits-wrapper" },
                    wp.element.createElement(u.TextControl, {
                      label: Object(s.__)("Focus Keyword", "rank-math"),
                      value: this.state.keyword,
                      onChange: function (t) {
                        return e.setState({ keyword: t, showResearch: !0 });
                      },
                      onKeyDown: function (e) {
                        "Enter" === e.key && e.preventDefault();
                      },
                      help: wp.element.createElement(
                        React.Fragment,
                        null,
                        Object(s.__)(
                          "Upgrade to buy more credits from ",
                          "rank-math"
                        ),
                        wp.element.createElement(
                          "a",
                          {
                            href: "https://rankmath.com/content-ai/?utm_source=Plugin&utm_medium=Sidebar%20Upgrade%20Text&utm_campaign=WP#pricing-tables",
                            rel: "noreferrer",
                            target: "_blank",
                            title: Object(s.__)(
                              "Content AI Pricing.",
                              "rank-math"
                            ),
                          },
                          Object(s.__)("here.", "rank-math")
                        )
                      ),
                      placeholder: Object(s.__)(
                        "Suggested length 2-3 Words",
                        "rank-math"
                      ),
                    }),
                    wp.element.createElement(
                      "div",
                      { className: "help-text" },
                      Object(s.__)("To learn how to use it", "rank-math"),
                      " ",
                      wp.element.createElement(
                        "a",
                        {
                          href: "https://rankmath.com/kb/how-to-use-content-ai/?utm_source=Plugin&utm_medium=Content%20AI%20Sidebar%20KB%20Link&utm_campaign=WP",
                          target: "_blank",
                          rel: "noreferrer",
                        },
                        Object(s.__)("Click here", "rank-math")
                      )
                    ),
                    !this.state.showResearch &&
                      !this.state.loading &&
                      !Object(i.isEmpty)(this.props.data) &&
                      wp.element.createElement(
                        u.Button,
                        {
                          className:
                            "rank-math-ca-force-update rank-math-tooltip left",
                          onClick: function () {
                            return e.props.researchKeyword(
                              e.state,
                              e.setState,
                              !0
                            );
                          },
                        },
                        wp.element.createElement("i", {
                          className: "dashicons dashicons-image-rotate",
                        }),
                        wp.element.createElement(
                          "span",
                          null,
                          Object(s.__)(
                            "Refresh will use one new credit.",
                            "rank-math"
                          )
                        )
                      ),
                    wp.element.createElement(
                      "div",
                      { className: "rank-math-ca-credits" },
                      wp.element.createElement(
                        u.Button,
                        {
                          className: t,
                          onClick: function () {
                            return e.updateCredits();
                          },
                        },
                        wp.element.createElement("i", {
                          className: "dashicons dashicons-image-rotate",
                        }),
                        wp.element.createElement(
                          "span",
                          null,
                          Object(s.__)(
                            "Click to refresh the available credits.",
                            "rank-math"
                          )
                        )
                      ),
                      wp.element.createElement(
                        "span",
                        null,
                        Object(s.__)("Credits", "rank-math")
                      ),
                      wp.element.createElement(
                        "a",
                        {
                          href: "https://rankmath.com/kb/how-to-use-content-ai/?utm_source=Plugin&utm_medium=Sidebar%20Credits%20Tooltip%20Icon&utm_campaign=WP#credits-usage",
                          rel: "noreferrer",
                          target: "_blank",
                          className: "rank-math-help-icon",
                          title: Object(s.__)(
                            "Know more about credits.",
                            "rank-math"
                          ),
                        },
                        "﹖"
                      ),
                      wp.element.createElement(
                        "strong",
                        null,
                        this.state.creditsValue
                      )
                    )
                  ),
                  this.state.showResearch &&
                    wp.element.createElement(
                      u.Button,
                      {
                        className: "is-primary",
                        onClick: function () {
                          return e.props.researchKeyword(e.state, e.setState);
                        },
                        title: Object(s.__)(
                          "One credit will be used.",
                          "rank-math"
                        ),
                        disabled: !this.state.keyword,
                      },
                      Object(s.__)("Research", "rank-math")
                    )
                );
              },
            },
            {
              key: "connectAccountNotice",
              value: function () {
                return wp.element.createElement(
                  "div",
                  { className: "rank-math-ca-warning" },
                  wp.element.createElement(
                    "h3",
                    null,
                    Object(s.__)("Content AI", "rank-math")
                  ),
                  wp.element.createElement(
                    "p",
                    null,
                    Object(s.__)(
                      "Please connect your account to use this feature.",
                      "rank-math"
                    )
                  ),
                  wp.element.createElement(
                    u.Button,
                    { href: rankMath.connectSiteUrl, className: "is-primary" },
                    Object(s.__)("Connect Now", "rank-math")
                  )
                );
              },
            },
            {
              key: "creditsNotice",
              value: function () {
                return wp.element.createElement(
                  "div",
                  { className: "rank-math-ca-warning" },
                  wp.element.createElement(
                    "h3",
                    null,
                    Object(s.__)("Content AI", "rank-math")
                  ),
                  "site_limit_reached" === this.state.credits &&
                    wp.element.createElement(
                      "p",
                      null,
                      wp.element.createElement(
                        Se,
                        {
                          components: {
                            link1: wp.element.createElement("a", {
                              href: "https://rankmath.com/my-account/?utm_source=Plugin&utm_medium=Sidebar%20No%20Credits&utm_campaign=WP",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }),
                            link2: wp.element.createElement("a", {
                              href: "https://rankmath.com/content-ai/?utm_source=Plugin&utm_medium=Sidebar%20No%20Credits&utm_campaign=WP#pricing-tables",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }),
                          },
                        },
                        Object(s.__)(
                          "All credits assigned to this site are used. Please add more credits from {{link1}}My Account{{/link1}} Page or {{link2}}upgrade your plan{{/link2}}.",
                          "rank-math"
                        )
                      )
                    ),
                  "account_limit_reached" === this.state.credits &&
                    wp.element.createElement(
                      React.Fragment,
                      null,
                      wp.element.createElement(
                        "p",
                        null,
                        Object(s.__)(
                          "You don't have any credits left.",
                          "rank-math"
                        )
                      ),
                      wp.element.createElement(
                        u.Button,
                        {
                          href: "https://rankmath.com/content-ai/?utm_source=Plugin&utm_medium=Sidebar%20No%20Credits&utm_campaign=WP#pricing-tables",
                          target: "_blank",
                          rel: "noreferrer",
                          className: "is-primary",
                        },
                        Object(s.__)("Get More Credits", "rank-math")
                      )
                    )
                );
              },
            },
          ]) && Ne(t.prototype, n),
          r && Ne(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          l
        );
      })(m.Component),
      De = Object(d.compose)(
        Object(f.withSelect)(function (e) {
          var t = rankMathEditor.assessor.analyzer.researcher,
            n = t.paper;
          return {
            data: e("rank-math").getKeywordsData(),
            keyword: Object(i.get)(
              rankMath.ca_keyword,
              "keyword",
              e("rank-math").getKeywords().split(",")[0]
            ),
            country: Object(i.get)(
              rankMath.ca_keyword,
              "country",
              rankMath.contentAiCountry
            ),
            researcher: t,
            content: Object(i.isUndefined)(n) ? "" : n.getTextLower(),
            title: Object(i.isUndefined)(n) ? "" : n.getTitle().toLowerCase(),
            description: Object(i.isUndefined)(n)
              ? ""
              : n.getDescription().toLowerCase(),
            hasThumbnail: Object(i.isUndefined)(n) ? "" : n.hasThumbnail(),
            score: e("rank-math").getContentAIScore(),
          };
        }),
        Object(f.withDispatch)(function (e, t) {
          return {
            researchKeyword: function (t, n) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              (t.force_update = r),
                (t.objectID = rankMath.objectID),
                (t.objectType = rankMath.objectType),
                n({ showResearch: !1, loading: !0 }),
                y()({
                  method: "POST",
                  path: "/rankmath/v1/ca/researchKeyword",
                  data: t,
                })
                  .catch(function (e) {
                    n({ loading: !1, showResearch: !0 }), alert(e.message);
                  })
                  .then(function (t) {
                    n({ loading: !1 }),
                      e("rank-math").updateKeywordsData(t.data),
                      Object(i.isNull)(t.credits) ||
                        Object(i.isUndefined)(t.credits) ||
                        n({
                          credits: t.credits,
                          creditsValue: Object(i.isNumber)(t.credits)
                            ? t.credits
                            : 0,
                        }),
                      Object(l.doAction)(
                        "rank_math_content_ai_changed",
                        t.keyword
                      );
                  });
            },
            updateAiScore: function (n, r) {
              var a = t.score;
              (a[n] = Object(i.round)(r, 2)), e("rank-math").updateAIScore(a);
            },
          };
        })
      )(Ie);
    function Be(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var Ke = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            rankMath.isUserRegistered &&
              ((this.init = this.init.bind(this)),
              (this.contentLength = this.contentLength.bind(this)),
              (this.contentLengthBoundary =
                this.contentLengthBoundary.bind(this)),
              (this.keywordDensity = this.keywordDensity.bind(this)),
              (this.removeTests = this.removeTests.bind(this)),
              (this.researchesTests = rankMath.assessor.researchesTests),
              (this.ca_keyword = rankMath.ca_keyword.keyword),
              Object(l.addAction)("rank_math_loaded", "rank-math", this.init),
              Object(l.addAction)(
                "rank_math_keyword_refresh",
                "rank-math",
                this.init
              ),
              Object(l.addAction)(
                "rank_math_content_ai_changed",
                "rank-math",
                this.init
              ));
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function (e) {
                e && (this.ca_keyword = e),
                  (this.keyword = rankMathEditor.assessor.getPrimaryKeyword()),
                  (this.data = Object(f.select)("rank-math").getKeywordsData()),
                  Object(i.isEmpty)(this.data) ||
                    (this.filters(),
                    this.removeTests(),
                    e && rankMathEditor.refresh("content"));
              },
            },
            {
              key: "removeTests",
              value: function () {
                if (this.ca_keyword === this.keyword) {
                  var e = this.data.recommendations;
                  rankMath.assessor.researchesTests = Object(i.filter)(
                    rankMath.assessor.researchesTests,
                    function (t) {
                      return !(
                        (!e.mediaCount && "contentHasAssets" === t) ||
                        (!e.linkCount.internal && "linksHasInternal" === t) ||
                        !(
                          e.linkCount.external ||
                          ("linksHasExternals" !== t &&
                            "linksNotAllExternals" !== t)
                        )
                      );
                    }
                  );
                } else rankMath.assessor.researchesTests = this.researchesTests;
              },
            },
            {
              key: "filters",
              value: function () {
                Object(l.addFilter)(
                  "rankMath_analysis_contentLength",
                  "rank-math",
                  this.contentLength
                ),
                  Object(l.addFilter)(
                    "rankMath_analysis_contentLength_boundaries",
                    "rank-math",
                    this.contentLengthBoundary
                  ),
                  Object(l.addFilter)(
                    "rankMath_analysis_keywordDensity",
                    "rank-math",
                    this.keywordDensity
                  );
              },
            },
            {
              key: "contentLength",
              value: function (e) {
                if (this.ca_keyword !== this.keyword) return e;
                var t = this.data.recommendations.wordCount,
                  n = Object(i.ceil)((150 * t) / 100);
                return {
                  hasScore: e.hasScore,
                  failed: Object(s.sprintf)(
                    Object(s.__)(
                      "Content is %1$s words long. Consider using at least %2$s words.",
                      "rank-math"
                    ),
                    "%1$d",
                    t
                  ),
                  tooltipText: Object(s.sprintf)(
                    Object(s.__)(
                      "Minimum recommended content length should be %1$d words.",
                      "rank-math"
                    ),
                    t
                  ),
                  emptyContent: Object(s.sprintf)(
                    Object(s.__)("Content should be %1$s long.", "rank-math"),
                    '<a href="https://s.rankmath.com/100contentlength" target="_blank">' +
                      t +
                      " - " +
                      n +
                      Object(s.__)(" words", "rank-math") +
                      "</a>"
                  ),
                };
              },
            },
            {
              key: "contentLengthBoundary",
              value: function (e) {
                if (this.ca_keyword !== this.keyword) return e;
                var t = this.data.recommendations.wordCount,
                  n = Object(i.ceil)((150 * t) / 100);
                return {
                  recommended: { boundary: n, score: 8 },
                  belowRecommended: {
                    boundary: Object(i.ceil)(n / 2),
                    score: 5,
                  },
                  low: { boundary: t, score: 2 },
                };
              },
            },
            {
              key: "keywordDensity",
              value: function (e, t) {
                if (
                  Object(i.isEmpty)(this.data.keywords.content) ||
                  Object(i.isEmpty)(this.data.keywords.content[this.keyword])
                )
                  return e;
                var n =
                  (t / this.data.keywords.content[this.keyword].average) * 100;
                return n > 80
                  ? 1.1
                  : 100 < n
                  ? 2.5
                  : 80 < n
                  ? 1.1
                  : 50 < n
                  ? 0.8
                  : 0.5;
              },
            },
          ]) && Be(t.prototype, n),
          r && Be(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })(),
      Fe = function () {
        var e = c()("button-secondary rank-math-content-ai", {
          "is-new": !rankMath.ca_viewed,
        });
        return wp.element.createElement(
          u.Button,
          {
            className: e,
            onClick: function () {
              return a()(".rank-math-content-ai-tab").trigger("click");
            },
          },
          wp.element.createElement("i", {
            className: "rm-icon rm-icon-target",
          }),
          Object(s.__)("Content AI", "rank-math")
        );
      };
    Object(l.addFilter)(
      "rankMath.analytics.contentAI",
      "rank-math",
      function () {
        return Fe;
      }
    ),
      Object(l.addAction)("rank_math_loaded", "rank-math", function () {
        Object(l.addFilter)(
          "rank_math_sidebar_tabs",
          "rank-math",
          function (e) {
            return (
              e.push({
                name: "contentAI",
                title: wp.element.createElement(
                  m.Fragment,
                  null,
                  wp.element.createElement("i", {
                    className: "rm-icon rm-icon-target",
                  }),
                  wp.element.createElement(
                    "span",
                    null,
                    Object(s.__)("Content AI", "rank-math")
                  )
                ),
                view: De,
                className: "rank-math-content-ai-tab hidden is-active",
              }),
              e
            );
          }
        );
        var e = document.getElementById(
          "cmb2-metabox-rank_math_metabox_content_ai"
        );
        e &&
          setTimeout(function () {
            Object(m.render)(Object(m.createElement)(De), e);
          }, 1e3),
          "gutenberg" === rankMath.currentEditor &&
            Object(p.registerPlugin)("rank-math-content-ai-box", {
              render: function () {
                var e = Object(f.select)("rank-math").getContentAIScore();
                return (
                  !(
                    !Object(i.isEmpty)(e) ||
                    !Object(i.isEmpty)(rankMath.ca_keyword)
                  ) &&
                  wp.element.createElement(
                    h.PluginPrePublishPanel,
                    {
                      title: Object(s.__)("Content AI", "rank-math"),
                      icon: "rm-icon rm-icon-target",
                      initialOpen: "true",
                      className: "rank-math-content-ai-box",
                    },
                    wp.element.createElement(
                      "p",
                      null,
                      Object(s.__)(
                        "Improve your content with a personal Content AI.",
                        "rank-math"
                      )
                    ),
                    wp.element.createElement(
                      u.Button,
                      {
                        className: "button-primary",
                        onClick: function () {
                          a()(
                            ".editor-post-publish-panel__header-cancel-button button"
                          ).trigger("click"),
                            a()(".rank-math-toolbar-score")
                              .parent()
                              .hasClass("is-pressed") ||
                              a()(".rank-math-toolbar-score").trigger("click"),
                            setTimeout(function () {
                              a()(".rank-math-content-ai-tab").trigger("click");
                            }, 100);
                        },
                      },
                      Object(s.__)("Improve Now", "rank-math")
                    )
                  )
                );
              },
            }),
          "classic" !== rankMath.currentEditor &&
            a()(document).on(
              "click",
              ".rank-math-open-contentai",
              function (e) {
                return (
                  e.preventDefault(),
                  a()(".rank-math-content-ai-tab").trigger("click"),
                  !1
                );
              }
            ),
          new Ke();
      });
  },
]);
