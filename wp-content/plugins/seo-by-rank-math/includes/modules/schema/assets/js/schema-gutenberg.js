!(function (e) {
  var t = {};
  function r(a) {
    if (t[a]) return t[a].exports;
    var i = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            a,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return a;
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
    r((r.s = 32));
})([
  function (e, t) {
    e.exports = wp.i18n;
  },
  function (e, t) {
    e.exports = lodash;
  },
  function (e, t) {
    e.exports = wp.components;
  },
  function (e, t) {
    e.exports = wp.hooks;
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "k", function () {
      return a.b;
    }),
      r.d(t, "h", function () {
        return a.a;
      }),
      r.d(t, "b", function () {
        return s;
      }),
      r.d(t, "c", function () {
        return l;
      }),
      r.d(t, "g", function () {
        return c;
      }),
      r.d(t, "i", function () {
        return d;
      }),
      r.d(t, "a", function () {
        return p;
      }),
      r.d(t, "d", function () {
        return h;
      }),
      r.d(t, "j", function () {
        return _;
      }),
      r.d(t, "f", function () {
        return O;
      }),
      r.d(t, "e", function () {
        return k;
      }),
      r.d(t, "m", function () {
        return w;
      }),
      r.d(t, "l", function () {
        return G;
      }),
      r.d(t, "n", function () {
        return q;
      });
    var a = r(19),
      i = r(1);
    function n(e, t) {
      var r =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!r) {
        if (
          Array.isArray(e) ||
          (r = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return o(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return o(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          r && (e = r);
          var a = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
            },
            e: function (e) {
              throw e;
            },
            f: i,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var n,
        s = !0,
        l = !1;
      return {
        s: function () {
          r = r.call(e);
        },
        n: function () {
          var e = r.next();
          return (s = e.done), e;
        },
        e: function (e) {
          (l = !0), (n = e);
        },
        f: function () {
          try {
            s || null == r.return || r.return();
          } finally {
            if (l) throw n;
          }
        },
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    function s(e, t) {
      if (Object(i.isEmpty)(e) || t.id === e) return t;
      var r,
        a = n(t.properties);
      try {
        for (a.s(); !(r = a.n()).done; ) {
          var o = r.value;
          if (o.id === e) return o;
          if (o.map.isGroup) {
            var l = s(e, o);
            if (l) return l;
          }
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    function l(e, t) {
      if (Object(i.isEmpty)(e)) return t;
      var r,
        a = n(t.properties);
      try {
        for (a.s(); !(r = a.n()).done; ) {
          var o = r.value;
          if (o.property === e)
            return (
              (o.value = Object(i.has)(t.metadata, e)
                ? t.metadata[e]
                : o.value),
              o
            );
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
      return !1;
    }
    var m = r(9);
    function c() {
      return {
        id: "g-".concat(Object(m.v4)()),
        property: "",
        properties: [],
        map: { isGroup: !0, isArray: !1, isRequired: !1, isRecommended: !1 },
      };
    }
    function d() {
      return {
        id: "p-".concat(Object(m.v4)()),
        property: "",
        value: "",
        map: { isGroup: !1, isArray: !1, isRequired: !1, isRecommended: !1 },
      };
    }
    function p(e) {
      return (
        (e.id = "g-".concat(Object(m.v4)())),
        e.properties.forEach(function (e) {
          e.map.isGroup ? p(e) : (e.id = "p-".concat(Object(m.v4)()));
        }),
        e
      );
    }
    var u = function e(t) {
      if (!t) return c();
      var r = t.map.isGroup ? c() : d();
      return (
        Object(i.forEach)(t, function (t, a) {
          if ("map" !== a) {
            var n = d();
            t.map.isGroup && (n = e(t)),
              (n.map = t.map),
              (n.property = a),
              (n.value = Object(i.get)(
                t.map,
                "value",
                Object(i.get)(t.map, "field.default", "")
              )),
              r.properties.push(n);
          } else Object(i.has)(t, "title") && ((r.map.title = t.title), (r.map.defaultEn = t.defaultEn));
        }),
        r
      );
    };
    function h(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = !1;
      r || (n = Object(i.isString)(e) ? Object(a.a)(e) : e);
      var o = u(n);
      return ((o = Object(i.merge)(o, t)).property = e), o;
    }
    var b = r(3);
    function y(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function f(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function _(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return (
        Object(i.isEmpty)(t) ||
          Object(i.forEach)(t, function (t, n) {
            if ("@context" !== n) {
              var o = l(n, e);
              if (o) R(o, n, t, r);
              else {
                var s = !r && Object(a.a)(n);
                Object(i.isArray)(t)
                  ? ((o = c()).map.isArray = !0)
                  : (o =
                      Object(i.isObject)(t) || s
                        ? _(s ? h(s) : c(), t, r)
                        : d()),
                  R(o, n, t, r),
                  (o.property = n),
                  e.properties.push(o);
              }
            }
          }),
        e
      );
    }
    var R = function (e, t, r) {
      var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!t) return e;
      var i = Object(b.applyFilters)(
        "rank_math_schema_convert_value",
        !1,
        e,
        t,
        r,
        a
      );
      return !1 !== i ||
        !1 !==
          (i = Object(b.applyFilters)(
            "rank_math_schema_convert_" + t,
            !1,
            e,
            r
          ))
        ? i
        : ((e.value = r), e);
    };
    function O(e, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = h(t, r, a);
      return _(i, e, a);
    }
    function k(e) {
      var t = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? y(Object(r), !0).forEach(function (t) {
                  f(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : y(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        })({}, e),
        r = Object(b.applyFilters)(
          "rank_math_schema_type",
          Object(i.get)(t, "@type", "")
        ),
        a = Object(i.get)(t, "metadata", { type: "template" });
      delete t.metadata;
      var n = "custom" === a.type ? c() : h(r);
      Object(i.has)(n.map, "title") &&
        !Object(i.has)(a, "title") &&
        (a.title = n.map.title),
        Object(i.has)(a, "title") &&
          a.title === n.map.defaultEn &&
          (a.title = n.map.title),
        (n.property = Object(i.get)(a, "title", r)),
        (n.metadata = a);
      var o = l("@type", n);
      if (
        (!1 !== o && "" !== o.value && (t["@type"] = o.value),
        (n = _(n, t, "custom" === a.type)),
        "custom" !== a.type)
      ) {
        var s = n.properties.pop();
        n.properties.unshift(s);
      }
      return n;
    }
    function j(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function g(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var v = function (e) {
        if (
          !Object(i.isEmpty)(e.value) ||
          (!Object(i.isUndefined)(e.map.field) && "toggle" === e.map.field.type)
        )
          return e.value;
        var t = Object(i.get)(e, "map.field.placeholder");
        return Object(i.isEmpty)(t)
          ? Object(i.get)(e, "map.field.default", !1)
          : t;
      },
      A = function (e) {
        if (Object(i.isEmpty)(e) || Object(i.isUndefined)(e.properties))
          return e;
        var t = {};
        return (
          "metadata" in e &&
            ((t.metadata = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? j(Object(r), !0).forEach(function (t) {
                      g(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : j(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
              }
              return e;
            })({}, e.metadata)),
            (t.metadata.title = e.property)),
          Object(i.map)(e.properties, function (e) {
            var r = Object(i.get)(e, "map.save", !0),
              a = Object(i.get)(e, "map.isHidden", !1);
            if (
              (Object(i.isEmpty)(e.properties) ||
                Object(i.isEmpty)(e.properties[0]) ||
                Object(i.isEmpty)(e.properties[0].properties) ||
                (e.map.isArray = !0),
              !1 !== r && !a)
            )
              if ("metadata" !== r) {
                var n = (function (e) {
                  var t = !1;
                  return (
                    (t = Object(b.applyFilters)(
                      "rank_math_schema_process_value",
                      t,
                      e
                    )),
                    Object(b.applyFilters)(
                      "rank_math_schema_process_" + e.property,
                      t,
                      e
                    )
                  );
                })(e);
                if (!1 === n) {
                  if (e.map.isArray) {
                    var o = [];
                    return (
                      Object(i.map)(e.properties, function (e) {
                        o.push(
                          Object(i.isUndefined)(e.properties) ? e.value : w(e)
                        );
                      }),
                      void (t[e.property] = o)
                    );
                  }
                  if (e.map.isGroup) {
                    var s = w(e),
                      l = Object(i.get)(
                        s,
                        "@type",
                        Object(i.isUndefined)(s["@id"]) ? e.property : ""
                      );
                    return l && (s["@type"] = l), void (t[e.property] = s);
                  }
                  var m = v(e);
                  (!Object(i.isBoolean)(m) && Object(i.isEmpty)(m)) ||
                    !m ||
                    (t[e.property] = m);
                } else t[e.property] = n;
              } else {
                var c = v(e);
                if (Object(i.isEmpty)(c) && "toggle" !== e.map.field.type)
                  return;
                t.metadata[e.property] = c;
              }
          }),
          t
        );
      };
    function w(e) {
      var t = A(e);
      return (
        (t = Object(b.applyFilters)(
          "rank_math_processed_schema_" + t["@type"],
          t
        )),
        Object(b.applyFilters)("rank_math_processed_schema", t)
      );
    }
    function G(e) {
      return (
        "string" != typeof e && (e = JSON.stringify(e, null, 2)),
        (e = e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")).replace(
          /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
          function (e) {
            var t = "number";
            return (
              /^"/.test(e)
                ? (t = /:$/.test(e) ? "key" : "string")
                : /true|false/.test(e)
                ? (t = "boolean")
                : /null/.test(e) && (t = "null"),
              '<span class="' + t + '">' + e + "</span>"
            );
          }
        )
      );
    }
    function q(e, t) {
      if (!Object(i.has)(e, "map.dependency")) return !0;
      var r = null,
        a = e.map.dependency,
        n = Object(i.get)(a, "relation", "or");
      return (
        Object(i.forEach)(a, function (e) {
          var a,
            o,
            s,
            m = l(e.field, t),
            c =
              ((a = m.value),
              (o = Object(i.get)(e, "value", !1)),
              (s = Object(i.get)(e, "comparison", "=")),
              Object(i.isArray)(o) && "=" === s
                ? o.includes(a)
                : Object(i.isArray)(o) && "!=" === s
                ? !o.includes(a)
                : ("=" === s && a === o) ||
                  ("==" === s && a === o) ||
                  (">=" === s && a >= o) ||
                  ("<=" === s && a <= o) ||
                  (">" === s && a > o) ||
                  ("<" === s && a < o) ||
                  ("!=" === s && a !== o));
          if ("or" === n && c) return (r = !0), !1;
          "and" === n && (r = (null === r || r) && c);
        }),
        !!r
      );
    }
  },
  function (e, t) {
    e.exports = wp.data;
  },
  function (e, t) {
    e.exports = wp.element;
  },
  function (e, t) {
    e.exports = wp.compose;
  },
  function (e, t, r) {
    var a;
    !(function () {
      "use strict";
      var r = {}.hasOwnProperty;
      function i() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var a = arguments[t];
          if (a) {
            var n = typeof a;
            if ("string" === n || "number" === n) e.push(a);
            else if (Array.isArray(a)) {
              if (a.length) {
                var o = i.apply(null, a);
                o && e.push(o);
              }
            } else if ("object" === n)
              if (a.toString === Object.prototype.toString)
                for (var s in a) r.call(a, s) && a[s] && e.push(s);
              else e.push(a.toString());
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((i.default = i), (e.exports = i))
        : void 0 ===
            (a = function () {
              return i;
            }.apply(t, [])) || (e.exports = a);
    })();
  },
  function (e, t, r) {
    var a = r(26),
      i = r(27),
      n = i;
    (n.v1 = a), (n.v4 = i), (e.exports = n);
  },
  function (e, t) {
    e.exports = jQuery;
  },
  function (e, t, r) {
    "use strict";
    var a = r(12),
      i = r(0),
      n = r(2);
    function o(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == r) return;
          var a,
            i,
            n = [],
            o = !0,
            s = !1;
          try {
            for (
              r = r.call(e);
              !(o = (a = r.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              o = !0
            );
          } catch (e) {
            (s = !0), (i = e);
          } finally {
            try {
              o || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return s(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return s(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    t.a = function (e) {
      var t = e.onClick,
        r = e.children,
        s = (e.className, Object(a.useRef)()),
        l = o(Object(a.useState)(!1), 2),
        m = l[0],
        c = l[1],
        d = function (e) {
          s.current.contains(e.target) || c(!1);
        };
      return (
        Object(a.useEffect)(
          function () {
            return (
              m
                ? document.addEventListener("mousedown", d)
                : document.removeEventListener("mousedown", d),
              function () {
                document.removeEventListener("mousedown", d);
              }
            );
          },
          [m]
        ),
        wp.element.createElement(
          "div",
          { ref: s, className: "rank-math-inline-confirmation" },
          !m && r(c),
          m &&
            wp.element.createElement(
              "div",
              { className: "rank-math-confirm-delete" },
              wp.element.createElement(
                "span",
                null,
                Object(i.__)("Delete?", "rank-math")
              ),
              wp.element.createElement(
                n.Button,
                {
                  isLink: !0,
                  onClick: function () {
                    c(!1), t();
                  },
                },
                wp.element.createElement(
                  "span",
                  null,
                  Object(i.__)("Yes", "rank-math")
                )
              ),
              wp.element.createElement(
                n.Button,
                {
                  isLink: !0,
                  onClick: function () {
                    return c(!1);
                  },
                },
                wp.element.createElement(
                  "span",
                  null,
                  Object(i.__)("No", "rank-math")
                )
              )
            )
        )
      );
    };
  },
  function (e, t) {
    e.exports = React;
  },
  function (e, t, r) {
    e.exports = r(28)();
  },
  function (e, t) {
    e.exports = rankMathAnalyzer;
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    });
    var a = r(1);
    function i(e) {
      return Object(a.get)(
        {
          off: "rm-icon rm-icon-schema",
          Article: "rm-icon rm-icon-post",
          Book: "rm-icon rm-icon-book",
          Course: "rm-icon rm-icon-course",
          Event: "rm-icon rm-icon-calendar",
          JobPosting: "rm-icon rm-icon-job",
          Local: "rm-icon rm-icon-local-seo",
          Music: "rm-icon rm-icon-music",
          Product: "rm-icon rm-icon-cart",
          Products: "rm-icon rm-icon-cart",
          WooCommerceProduct: "rm-icon rm-icon-cart",
          Recipe: "rm-icon rm-icon-recipe",
          Restaurant: "rm-icon rm-icon-restaurant",
          Video: "rm-icon rm-icon-video",
          Videos: "rm-icon rm-icon-video",
          Person: "rm-icon rm-icon-users",
          Review: "rm-icon rm-icon-star",
          "Review snippets": "rm-icon rm-icon-star",
          Service: "rm-icon rm-icon-service",
          Software: "rm-icon rm-icon-software",
          "Sitelinks searchbox": "rm-icon rm-icon-search",
          FAQ: "rm-icon rm-icon-faq",
          Breadcrumbs: "rm-icon rm-icon-redirection",
        },
        e,
        "rm-icon rm-icon-schema"
      );
    }
  },
  function (e, t) {
    e.exports = wp.keycodes;
  },
  function (e, t) {
    e.exports = wp.apiFetch;
  },
  function (e, t, r) {
    "use strict";
    var a = r(1),
      i = r(0),
      n = r(7),
      o = r(2),
      s = r(5),
      l = r(15),
      m = r(11),
      c = Object(o.withFilters)("rankMath.schema.SchemaList")(function (e) {
        var t = e.schemas,
          r = e.edit,
          n = e.trash,
          s = e.preview,
          c = e.showProNotice;
        return Object(a.isEmpty)(t)
          ? null
          : wp.element.createElement(
              "div",
              { className: "rank-math-schema-in-use" },
              wp.element.createElement(
                "h4",
                { className: "rank-math-schema-section-title" },
                Object(i.__)("Schema in Use", "rank-math")
              ),
              c &&
                wp.element.createElement(
                  "div",
                  {
                    className: "components-notice rank-math-notice is-warning",
                  },
                  wp.element.createElement(
                    "div",
                    { className: "components-notice__content" },
                    Object(i.__)(
                      "Multiple Schemas are allowed in the",
                      "rank-math"
                    ),
                    " ",
                    wp.element.createElement(
                      "a",
                      {
                        href: "https://rankmath.com/pricing/?utm_source=Plugin&utm_medium=Schema%20Tab%20Notice&utm_campaign=WP",
                        rel: "noreferrer noopener",
                        target: "_blank",
                      },
                      wp.element.createElement(
                        "strong",
                        null,
                        Object(i.__)("PRO Version", "rank-math")
                      )
                    )
                  )
                ),
              Object(a.map)(t, function (e, t) {
                return wp.element.createElement(
                  "div",
                  {
                    key: t,
                    id: "rank-math-schema-item",
                    className: "rank-math-schema-item row",
                  },
                  wp.element.createElement(
                    "strong",
                    { className: "rank-math-schema-name" },
                    wp.element.createElement("i", {
                      className: Object(l.a)(e["@type"]),
                    }),
                    Object(a.get)(e, "metadata.title", e["@type"])
                  ),
                  wp.element.createElement(
                    "span",
                    { className: "rank-math-schema-item-actions" },
                    wp.element.createElement(
                      o.Button,
                      {
                        className: "button rank-math-edit-schema",
                        isLink: !0,
                        onClick: function () {
                          return r(t);
                        },
                      },
                      wp.element.createElement("i", {
                        className: "rm-icon rm-icon-edit",
                      }),
                      wp.element.createElement(
                        "span",
                        null,
                        Object(i.__)("Edit", "rank-math")
                      )
                    ),
                    wp.element.createElement(
                      o.Button,
                      {
                        className: "button rank-math-preview-schema",
                        isLink: !0,
                        onClick: function () {
                          return s(t);
                        },
                      },
                      wp.element.createElement("i", {
                        className: "rm-icon rm-icon-eye",
                      }),
                      wp.element.createElement(
                        "span",
                        null,
                        Object(i.__)("Preview", "rank-math")
                      )
                    ),
                    wp.element.createElement(
                      m.a,
                      {
                        key: t,
                        onClick: function () {
                          return n(t);
                        },
                      },
                      function (e) {
                        return wp.element.createElement(
                          o.Button,
                          {
                            isLink: !0,
                            className: "button rank-math-delete-schema",
                            onClick: function () {
                              return e(!0);
                            },
                          },
                          wp.element.createElement("i", {
                            className: "rm-icon rm-icon-trash",
                          }),
                          wp.element.createElement(
                            "span",
                            null,
                            Object(i.__)("Delete", "rank-math")
                          )
                        );
                      }
                    )
                  )
                );
              })
            );
      });
    t.a = Object(n.compose)(
      Object(s.withSelect)(function (e) {
        var t = e("rank-math").getSchemas();
        return { schemas: t, showProNotice: 1 <= Object.keys(t).length };
      }),
      Object(s.withDispatch)(function (e) {
        return {
          trash: function (t) {
            e("rank-math").deleteSchema(t);
          },
          edit: function (t) {
            e("rank-math").setEditingSchemaId(t),
              e("rank-math").toggleSchemaEditor(!0);
          },
          preview: function (t) {
            e("rank-math").setEditingSchemaId(t),
              e("rank-math").setEditorTab("codeValidation"),
              e("rank-math").toggleSchemaEditor(!0);
          },
        };
      })
    )(c);
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return p;
    }),
      r.d(t, "a", function () {
        return u;
      });
    var a = r(1),
      i = r(0),
      n = r(17),
      o = r.n(n),
      s = r(3),
      l = {
        version: "1.0.0",
        properties: {
          author: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "Person",
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Author Name", "rank-math"),
                  placeholder: "%name%",
                },
              },
            },
          },
          image: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "ImageObject",
              },
            },
            url: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: { label: Object(i.__)("Image URL", "rank-math") },
              },
            },
          },
          rating: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "Rating",
              },
            },
            ratingValue: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "number",
                  label: Object(i.__)("Rating", "rank-math"),
                  help: Object(i.__)("Rating score", "rank-math"),
                },
              },
            },
            worstRating: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "number",
                  label: Object(i.__)("Rating Minimum", "rank-math"),
                  help: Object(i.__)("Rating minimum score", "rank-math"),
                  placeholder: 1,
                },
              },
            },
            bestRating: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "number",
                  label: Object(i.__)("Rating Maximum", "rank-math"),
                  help: Object(i.__)("Rating maximum score", "rank-math"),
                  placeholder: 5,
                },
              },
            },
          },
          review: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: { label: Object(i.__)("Review", "rank-math") },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "Review",
              },
            },
            datePublished: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "datetimepicker",
                  label: Object(i.__)("Published Date", "rank-math"),
                  placeholder: "%date(Y-m-d\\TH:i:sP)%",
                  classes: "hide-group",
                },
              },
            },
            dateModified: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "datetimepicker",
                  label: Object(i.__)("Modified Date", "rank-math"),
                  placeholder: "%modified(Y-m-d\\TH:i:sP)%",
                  classes: "hide-group",
                },
              },
            },
            author: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Person",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Author Name", "rank-math"),
                    placeholder: "%name%",
                  },
                },
              },
            },
            reviewRating: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Rating",
                },
              },
              ratingValue: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "number",
                    label: Object(i.__)("Rating", "rank-math"),
                    help: Object(i.__)("Rating score", "rank-math"),
                  },
                },
              },
              worstRating: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "number",
                    label: Object(i.__)("Rating Minimum", "rank-math"),
                    help: Object(i.__)("Rating minimum score", "rank-math"),
                    placeholder: 1,
                  },
                },
              },
              bestRating: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "number",
                    label: Object(i.__)("Rating Maximum", "rank-math"),
                    help: Object(i.__)("Rating maximum score", "rank-math"),
                    placeholder: 5,
                  },
                },
              },
            },
          },
          bookEditions: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: {
                label: Object(i.__)("Edition", "rank-math"),
                help: Object(i.__)(
                  "Either a specific edition of the written work, or the volume of the work",
                  "rank-math"
                ),
              },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "Book",
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Title", "rank-math"),
                  help: Object(i.__)(
                    "The title of the tome. Use for the title of the tome if it differs from the book. *Optional when tome has the same title as the book",
                    "rank-math"
                  ),
                },
              },
            },
            bookEdition: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Edition", "rank-math"),
                  help: Object(i.__)("The edition of the book", "rank-math"),
                },
              },
            },
            isbn: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("ISBN", "rank-math"),
                  help: Object(i.__)("The ISBN of the print book", "rank-math"),
                },
              },
            },
            url: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("URL", "rank-math"),
                  help: Object(i.__)(
                    "URL specific to this edition if one exists",
                    "rank-math"
                  ),
                },
              },
            },
            author: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Person",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Author Name", "rank-math"),
                    placeholder: "%name%",
                  },
                },
              },
            },
            datePublished: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "datepicker",
                  label: Object(i.__)("Date Published", "rank-math"),
                  help: Object(i.__)(
                    "Date of first publication of this tome",
                    "rank-math"
                  ),
                },
              },
            },
            bookFormat: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "radio",
                  label: Object(i.__)("Book Format", "rank-math"),
                  desc: "The format of the book.",
                  options: {
                    "https://schema.org/EBook": "eBook",
                    "https://schema.org/Hardcover": "Hardcover",
                    "https://schema.org/Paperback": "Paperback",
                    "https://schema.org/AudioBook": "Audio Book",
                  },
                  default: "https://schema.org/Hardcover",
                },
              },
            },
          },
          provider: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  type: "radio",
                  label: Object(i.__)("Course Provider", "rank-math"),
                  classes: "show-property",
                  options: { Organization: "Organization", Person: "Person" },
                  default: "Organization",
                },
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Course Provider Name", "rank-math"),
                },
              },
            },
            sameAs: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Course Provider URL", "rank-math"),
                },
              },
            },
          },
          "virtual-location": {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: { value: "VirtualLocation" },
              },
            },
            url: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "text",
                  label: Object(i.__)("Online Event URL", "rank-math"),
                  help: Object(i.__)(
                    "The URL of the online event, where people can join. This property is required if your event is happening online",
                    "rank-math"
                  ),
                },
              },
            },
          },
          address: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: { label: Object(i.__)("Address", "rank-math") },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "PostalAddress",
              },
            },
            streetAddress: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "text",
                  label: Object(i.__)("Street Address", "rank-math"),
                },
              },
            },
            addressLocality: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "text",
                  label: Object(i.__)("Locality", "rank-math"),
                },
              },
            },
            addressRegion: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "text",
                  label: Object(i.__)("Region", "rank-math"),
                },
              },
            },
            postalCode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "text",
                  label: Object(i.__)("Postal Code", "rank-math"),
                },
              },
            },
            addressCountry: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "text",
                  label: Object(i.__)("Country", "rank-math"),
                },
              },
            },
          },
          "physical-location": {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "Place",
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Venue Name", "rank-math"),
                  help: Object(i.__)("The venue name.", "rank-math"),
                },
              },
            },
            url: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Venue URL", "rank-math"),
                  help: Object(i.__)("Website URL of the venue", "rank-math"),
                },
              },
            },
            address: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Address", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "PostalAddress",
                },
              },
              streetAddress: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Street Address", "rank-math"),
                  },
                },
              },
              addressLocality: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Locality", "rank-math"),
                  },
                },
              },
              addressRegion: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Region", "rank-math"),
                  },
                },
              },
              postalCode: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Postal Code", "rank-math"),
                  },
                },
              },
              addressCountry: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Country", "rank-math"),
                  },
                },
              },
            },
          },
          "event-performer": {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: {
                label: Object(i.__)("Performer Information", "rank-math"),
              },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "radio",
                  label: Object(i.__)("Performer", "rank-math"),
                  classes: "show-property",
                  options: { Organization: "Organization", Person: "Person" },
                  default: "Person",
                },
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: { label: Object(i.__)("Name", "rank-math") },
              },
            },
            sameAs: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  label: Object(i.__)("Website or Social Link", "rank-math"),
                },
              },
            },
          },
          offers: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: { label: Object(i.__)("Offers", "rank-math") },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "Offer",
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: { label: Object(i.__)("Name", "rank-math") },
              },
            },
            category: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: { label: Object(i.__)("Category", "rank-math") },
              },
            },
            url: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: { label: Object(i.__)("URL", "rank-math") },
              },
            },
            price: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: { label: Object(i.__)("Price", "rank-math") },
              },
            },
            priceCurrency: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: { label: Object(i.__)("Currency", "rank-math") },
              },
            },
            availability: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "select",
                  label: Object(i.__)("Availability", "rank-math"),
                  help: Object(i.__)("Offer availability", "rank-math"),
                  classes: "col-4",
                  options: {
                    InStock: "In Stock",
                    SoldOut: "Sold Out",
                    PreOrder: "Preorder",
                  },
                  default: "InStock",
                },
              },
            },
            validFrom: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "datepicker",
                  label: Object(i.__)("Price Valid From", "rank-math"),
                  help: Object(i.__)(
                    "The date when the item becomes valid.",
                    "rank-math"
                  ),
                },
              },
            },
            priceValidUntil: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "datepicker",
                  label: Object(i.__)("Price Valid Until", "rank-math"),
                  help: Object(i.__)(
                    "The date after which the price will no longer be available",
                    "rank-math"
                  ),
                },
              },
            },
            inventoryLevel: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Inventory Level", "rank-math") },
              },
            },
          },
          "monetary-amount-unit": {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: { label: Object(i.__)("Salary", "rank-math") },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "QuantitativeValue",
              },
            },
            value: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  label: Object(i.__)("Salary (Recommended)", "rank-math"),
                  help: Object(i.__)(
                    "Insert amount, e.g. 50.00, or a salary range, e.g. 40.00-50.00",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            unitText: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "select",
                  label: Object(i.__)("Payroll (Recommended)", "rank-math"),
                  help: Object(i.__)("Salary amount is for", "rank-math"),
                  options: {
                    "": "None",
                    YEAR: "Yearly",
                    MONTH: "Monthly",
                    WEEK: "Weekly",
                    DAY: "Daily",
                    HOUR: "Hourly",
                  },
                  classes: "col-4",
                },
              },
            },
          },
          "monetary-amount": {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "MonetaryAmount",
              },
            },
            currency: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Salary Currency", "rank-math"),
                  help: Object(i.__)(
                    "ISO 4217 Currency code. Example: EUR",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            value: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Salary", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "QuantitativeValue",
                },
              },
              value: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Salary (Recommended)", "rank-math"),
                    help: Object(i.__)(
                      "Insert amount, e.g. 50.00, or a salary range, e.g. 40.00-50.00",
                      "rank-math"
                    ),
                    classes: "col-4",
                  },
                },
              },
              unitText: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "select",
                    label: Object(i.__)("Payroll (Recommended)", "rank-math"),
                    help: Object(i.__)("Salary amount is for", "rank-math"),
                    options: {
                      "": "None",
                      YEAR: "Yearly",
                      MONTH: "Monthly",
                      WEEK: "Weekly",
                      DAY: "Daily",
                      HOUR: "Hourly",
                    },
                    classes: "col-4",
                  },
                },
              },
            },
          },
          "hiring-organization": {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "Organization",
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Hiring Organization", "rank-math"),
                  placeholder: "%org_name%",
                  help: Object(i.__)(
                    "The name of the company. Leave empty to use your own company information.",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            sameAs: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  label: Object(i.__)(
                    "Organization URL (Recommended)",
                    "rank-math"
                  ),
                  placeholder: "%org_url%",
                  help: Object(i.__)(
                    "The URL of the organization offering the job position. Leave empty to use your own company information",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            logo: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  label: Object(i.__)(
                    "Organization Logo (Recommended)",
                    "rank-math"
                  ),
                  placeholder: "%org_logo%",
                  help: Object(i.__)(
                    "Logo URL of the organization offering the job position. Leave empty to use your own company information",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
          },
          brand: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "Brand",
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: { label: Object(i.__)("Brand Name", "rank-math") },
              },
            },
          },
          calories: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "NutritionInformation",
              },
            },
            calories: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Calories", "rank-math"),
                  help: Object(i.__)(
                    "The number of calories in the recipe. Optional.",
                    "rank-math"
                  ),
                },
              },
            },
          },
          "video-object": {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: { label: Object(i.__)("Video", "rank-math") },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "VideoObject",
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Name", "rank-math"),
                  help: Object(i.__)("A recipe video Name", "rank-math"),
                  classes: "col-6",
                },
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  help: Object(i.__)("A recipe video Description", "rank-math"),
                },
              },
            },
            embedUrl: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Video URL", "rank-math"),
                  help: Object(i.__)("A video URL. Optional.", "rank-math"),
                  classes: "col-6",
                },
              },
            },
            contentUrl: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Content URL", "rank-math"),
                  help: Object(i.__)(
                    "A URL pointing to the actual video media file",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            thumbnailUrl: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Recipe Video Thumbnail", "rank-math"),
                  help: Object(i.__)(
                    "A recipe video thumbnail URL",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            duration: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Duration", "rank-math"),
                  help: Object(i.__)(
                    "ISO 8601 duration format. Example: PT1H30M",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            uploadDate: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "datepicker",
                  label: Object(i.__)("Video Upload Date", "rank-math"),
                  classes: "col-6",
                },
              },
            },
          },
          instructionText: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              classes: "hide-group-header",
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "HowtoStep",
              },
            },
            text: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: { type: "textarea" },
              },
            },
          },
          instructions: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: {
                label: Object(i.__)("Recipe Instructions", "rank-math"),
                help: Object(i.__)(
                  "Either a specific edition of the written work, or the volume of the work",
                  "rank-math"
                ),
              },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "HowToSection",
              },
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Name", "rank-math"),
                  help: Object(i.__)(
                    "Instruction name of the recipe.",
                    "rank-math"
                  ),
                },
              },
            },
            itemListElement: {
              map: {
                isArray: !0,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                arrayMap: "instructionText",
                arrayProps: { map: { classes: "show-delete-property-group" } },
                classes: "show-add-property-group",
                field: {
                  label: Object(i.__)("Instruction Texts", "rank-math"),
                },
              },
            },
          },
          "geo-coordinates": {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: { label: Object(i.__)("Geo Cordinates", "rank-math") },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "GeoCoordinates",
              },
            },
            latitude: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Latitude", "rank-math") },
              },
            },
            longitude: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Longitude", "rank-math") },
              },
            },
          },
          "opening-hours": {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              field: { label: Object(i.__)("Timings", "rank-math") },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                value: "OpeningHoursSpecification",
              },
            },
            dayOfWeek: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "checkbox",
                  label: Object(i.__)("Open Days", "rank-math"),
                  options: {
                    monday: "Monday",
                    tuesday: "Tuesday",
                    wednesday: "Wednesday",
                    thursday: "Thursday",
                    friday: "Friday",
                    saturday: "Saturday",
                    sunday: "Sunday",
                  },
                  default: [],
                },
              },
            },
            opens: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "timepicker",
                  label: Object(i.__)("Opening Time", "rank-math"),
                  classes: "col-6",
                  placeholder: "09:00 AM",
                },
              },
            },
            closes: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "timepicker",
                  label: Object(i.__)("Closing Time", "rank-math"),
                  classes: "col-6",
                  placeholder: "05:00 PM",
                },
              },
            },
          },
          cuisine: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
            },
            cuisine: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Cuisine", "rank-math") },
              },
            },
          },
        },
        schemas: {
          Article: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Article", "rank-math"),
              defaultEn: "Article",
            },
            headline: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            keywords: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Keywords", "rank-math"),
                  placeholder: "%keywords%",
                },
              },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  type: "radio",
                  label: Object(i.__)("Article Type", "rank-math"),
                  classes: "show-property",
                  options: {
                    Article: "Article",
                    BlogPosting: "Blog Post",
                    NewsArticle: "News Article",
                  },
                  notice: {
                    status: "warning",
                    className: "article-notice",
                    content: Object(i.__)(
                      "Google does not allow Person as the Publisher for articles. Organization will be used instead.",
                      "rank-math"
                    ),
                  },
                },
              },
            },
            author: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Person",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Author Name", "rank-math"),
                    placeholder: "%name%",
                  },
                },
              },
            },
            datePublished: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Published Date", "rank-math"),
                  classes: "hide-group",
                  default: "%date(Y-m-d\\TH:i:sP)%",
                },
              },
            },
            dateModified: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  label: Object(i.__)("Modified Date", "rank-math"),
                  classes: "hide-group",
                  default: "%modified(Y-m-d\\TH:i:sP)%",
                },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
          },
          Book: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Book", "rank-math"),
              defaultEn: "Book",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            reviewLocation: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "select",
                  label: Object(i.__)("Review Location", "rank-math"),
                  help: Object(i.__)(
                    "The review or rating must be displayed on the page to comply with Google's Schema guidelines.",
                    "rank-math"
                  ),
                  options: {
                    bottom: "Below Content",
                    top: "Above Content",
                    both: "Above and Below Content",
                    custom: "Custom (use shortcode)",
                  },
                  default: "custom",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
                dependency: [{ field: "reviewLocation", value: "custom" }],
              },
            },
            url: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: { label: Object(i.__)("URL", "rank-math") },
              },
            },
            author: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Person",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Author Name", "rank-math"),
                    placeholder: "%name%",
                  },
                },
              },
            },
            review: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Review", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Review",
                },
              },
              datePublished: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Published Date", "rank-math"),
                    placeholder: "%date(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              dateModified: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Modified Date", "rank-math"),
                    placeholder: "%modified(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              author: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: ["hide-group-header", "hide-group"],
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Person",
                  },
                },
                name: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    field: {
                      label: Object(i.__)("Author Name", "rank-math"),
                      placeholder: "%name%",
                    },
                  },
                },
              },
              reviewRating: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: "hide-group-header",
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Rating",
                  },
                },
                ratingValue: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating", "rank-math"),
                      help: Object(i.__)("Rating score", "rank-math"),
                    },
                  },
                },
                worstRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Minimum", "rank-math"),
                      help: Object(i.__)("Rating minimum score", "rank-math"),
                      placeholder: 1,
                    },
                  },
                },
                bestRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Maximum", "rank-math"),
                      help: Object(i.__)("Rating maximum score", "rank-math"),
                      placeholder: 5,
                    },
                  },
                },
              },
            },
            hasPart: {
              map: {
                isArray: !0,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                arrayMap: "bookEditions",
                arrayProps: { map: { classes: "show-delete-property-group" } },
                field: { label: Object(i.__)("Editions", "rank-math") },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
          },
          Course: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Course", "rank-math"),
              defaultEn: "Course",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            reviewLocation: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "select",
                  label: Object(i.__)("Review Location", "rank-math"),
                  help: Object(i.__)(
                    "The review or rating must be displayed on the page to comply with Google's Schema guidelines.",
                    "rank-math"
                  ),
                  options: {
                    bottom: "Below Content",
                    top: "Above Content",
                    both: "Above and Below Content",
                    custom: "Custom (use shortcode)",
                  },
                  default: "custom",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
                dependency: [{ field: "reviewLocation", value: "custom" }],
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            provider: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    type: "radio",
                    label: Object(i.__)("Course Provider", "rank-math"),
                    classes: "show-property",
                    options: { Organization: "Organization", Person: "Person" },
                    default: "Organization",
                  },
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Course Provider Name", "rank-math"),
                  },
                },
              },
              sameAs: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Course Provider URL", "rank-math"),
                  },
                },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
            review: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Review", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Review",
                },
              },
              datePublished: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Published Date", "rank-math"),
                    placeholder: "%date(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              dateModified: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Modified Date", "rank-math"),
                    placeholder: "%modified(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              author: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: ["hide-group-header", "hide-group"],
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Person",
                  },
                },
                name: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    field: {
                      label: Object(i.__)("Author Name", "rank-math"),
                      placeholder: "%name%",
                    },
                  },
                },
              },
              reviewRating: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: "hide-group-header",
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Rating",
                  },
                },
                ratingValue: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating", "rank-math"),
                      help: Object(i.__)("Rating score", "rank-math"),
                    },
                  },
                },
                worstRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Minimum", "rank-math"),
                      help: Object(i.__)("Rating minimum score", "rank-math"),
                      placeholder: 1,
                    },
                  },
                },
                bestRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Maximum", "rank-math"),
                      help: Object(i.__)("Rating maximum score", "rank-math"),
                      placeholder: 5,
                    },
                  },
                },
              },
            },
          },
          Event: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Event", "rank-math"),
              defaultEn: "Event",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            reviewLocation: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "select",
                  label: Object(i.__)("Review Location", "rank-math"),
                  help: Object(i.__)(
                    "The review or rating must be displayed on the page to comply with Google's Schema guidelines.",
                    "rank-math"
                  ),
                  options: {
                    bottom: "Below Content",
                    top: "Above Content",
                    both: "Above and Below Content",
                    custom: "Custom (use shortcode)",
                  },
                  default: "custom",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
                dependency: [{ field: "reviewLocation", value: "custom" }],
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "select",
                  label: Object(i.__)("Event Type", "rank-math"),
                  help: Object(i.__)("Type of the event", "rank-math"),
                  classes: "show-property col-4",
                  options: {
                    Event: "Event",
                    BusinessEvent: "Business Event",
                    ChildrensEvent: "Childrens Event",
                    ComedyEvent: "Comedy Event",
                    DanceEvent: "Dance Event",
                    DeliveryEvent: "Delivery Event",
                    EducationEvent: "Education Event",
                    ExhibitionEvent: "Exhibition Event",
                    Festival: "Festival",
                    FoodEvent: "Food Event",
                    LiteraryEvent: "Literary Event",
                    MusicEvent: "Music Event",
                    PublicationEvent: "Publication Event",
                    SaleEvent: "Sale Event",
                    ScreeningEvent: "Screening Event",
                    SocialEvent: "Social Event",
                    SportsEvent: "Sports Event",
                    TheaterEvent: "Theater Event",
                    VisualArtsEvent: "Visual Arts Event",
                  },
                },
              },
            },
            eventStatus: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "select",
                  label: Object(i.__)("Event Status", "rank-math"),
                  help: Object(i.__)(
                    "Current status of the event (optional)",
                    "rank-math"
                  ),
                  options: {
                    "": "None",
                    EventScheduled: "Scheduled",
                    EventCancelled: "Cancelled",
                    EventPostponed: "Postponed",
                    EventRescheduled: "Rescheduled",
                    EventMovedOnline: "Moved Online",
                  },
                  classes: "col-4",
                  default: "EventScheduled",
                },
              },
            },
            eventAttendanceMode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "select",
                  label: Object(i.__)("Event Attendance Mode", "rank-math"),
                  help: Object(i.__)(
                    "Indicates whether the event occurs online, offline at a physical location, or a mix of both online and offline.",
                    "rank-math"
                  ),
                  options: {
                    OfflineEventAttendanceMode: "Offline",
                    OnlineEventAttendanceMode: "Online",
                    MixedEventAttendanceMode: "Online + Offline",
                  },
                  default: "OfflineEventAttendanceMode",
                  classes: "col-4",
                },
              },
            },
            VirtualLocation: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
                dependency: [
                  {
                    field: "eventAttendanceMode",
                    value: [
                      "OnlineEventAttendanceMode",
                      "MixedEventAttendanceMode",
                    ],
                  },
                ],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: { value: "VirtualLocation" },
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Online Event URL", "rank-math"),
                    help: Object(i.__)(
                      "The URL of the online event, where people can join. This property is required if your event is happening online",
                      "rank-math"
                    ),
                  },
                },
              },
            },
            location: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
                dependency: [
                  {
                    field: "eventAttendanceMode",
                    value: [
                      "OfflineEventAttendanceMode",
                      "MixedEventAttendanceMode",
                    ],
                  },
                ],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Place",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Venue Name", "rank-math"),
                    help: Object(i.__)("The venue name.", "rank-math"),
                  },
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Venue URL", "rank-math"),
                    help: Object(i.__)("Website URL of the venue", "rank-math"),
                  },
                },
              },
              address: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  field: { label: Object(i.__)("Address", "rank-math") },
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "PostalAddress",
                  },
                },
                streetAddress: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Street Address", "rank-math"),
                    },
                  },
                },
                addressLocality: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Locality", "rank-math"),
                    },
                  },
                },
                addressRegion: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Region", "rank-math"),
                    },
                  },
                },
                postalCode: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Postal Code", "rank-math"),
                    },
                  },
                },
                addressCountry: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Country", "rank-math"),
                    },
                  },
                },
              },
            },
            performer: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Performer Information", "rank-math"),
                },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "radio",
                    label: Object(i.__)("Performer", "rank-math"),
                    classes: "show-property",
                    options: { Organization: "Organization", Person: "Person" },
                    default: "Person",
                  },
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Name", "rank-math") },
                },
              },
              sameAs: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Website or Social Link", "rank-math"),
                  },
                },
              },
            },
            startDate: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  type: "datetimepicker",
                  label: Object(i.__)("Start Date", "rank-math"),
                  help: Object(i.__)("Date and time of the event", "rank-math"),
                  classes: "col-4",
                },
              },
            },
            endDate: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "datetimepicker",
                  label: Object(i.__)("End Date", "rank-math"),
                  help: Object(i.__)(
                    "End date and time of the event",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            offers: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Offers", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Offer",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Name", "rank-math"),
                    classes: "hide-group",
                    placeholder: "General Admission",
                  },
                },
              },
              category: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Category", "rank-math"),
                    classes: "hide-group",
                    placeholder: "primary",
                  },
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("URL", "rank-math") },
                },
              },
              price: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Price", "rank-math") },
                },
              },
              priceCurrency: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Currency", "rank-math") },
                },
              },
              availability: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "select",
                    label: Object(i.__)("Availability", "rank-math"),
                    help: Object(i.__)("Offer availability", "rank-math"),
                    classes: "col-4",
                    options: {
                      InStock: "In Stock",
                      SoldOut: "Sold Out",
                      PreOrder: "Preorder",
                    },
                    default: "InStock",
                  },
                },
              },
              validFrom: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "datepicker",
                    label: Object(i.__)("Price Valid From", "rank-math"),
                    help: Object(i.__)(
                      "The date when the item becomes valid.",
                      "rank-math"
                    ),
                  },
                },
              },
              priceValidUntil: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "datepicker",
                    label: Object(i.__)("Price Valid Until", "rank-math"),
                    help: Object(i.__)(
                      "The date after which the price will no longer be available",
                      "rank-math"
                    ),
                    classes: "hide-group",
                  },
                },
              },
              inventoryLevel: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Inventory Level", "rank-math"),
                  },
                },
              },
            },
            review: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Review", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Review",
                },
              },
              datePublished: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Published Date", "rank-math"),
                    placeholder: "%date(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              dateModified: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Modified Date", "rank-math"),
                    placeholder: "%modified(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              author: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: ["hide-group-header", "hide-group"],
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Person",
                  },
                },
                name: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    field: {
                      label: Object(i.__)("Author Name", "rank-math"),
                      placeholder: "%name%",
                    },
                  },
                },
              },
              reviewRating: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: "hide-group-header",
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Rating",
                  },
                },
                ratingValue: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating", "rank-math"),
                      help: Object(i.__)("Rating score", "rank-math"),
                    },
                  },
                },
                worstRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Minimum", "rank-math"),
                      help: Object(i.__)("Rating minimum score", "rank-math"),
                      placeholder: 1,
                    },
                  },
                },
                bestRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Maximum", "rank-math"),
                      help: Object(i.__)("Rating maximum score", "rank-math"),
                      placeholder: 5,
                    },
                  },
                },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
          },
          JobPosting: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Job Posting", "rank-math"),
              defaultEn: "Job Posting",
            },
            title: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
              },
            },
            baseSalary: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "MonetaryAmount",
                },
              },
              currency: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Salary Currency", "rank-math"),
                    help: Object(i.__)(
                      "ISO 4217 Currency code. Example: EUR",
                      "rank-math"
                    ),
                    classes: "col-4",
                  },
                },
              },
              value: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  field: { label: Object(i.__)("Salary", "rank-math") },
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "QuantitativeValue",
                  },
                },
                value: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !0,
                    field: {
                      label: Object(i.__)("Salary (Recommended)", "rank-math"),
                      help: Object(i.__)(
                        "Insert amount, e.g. 50.00, or a salary range, e.g. 40.00-50.00",
                        "rank-math"
                      ),
                      classes: "col-4",
                    },
                  },
                },
                unitText: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !0,
                    field: {
                      type: "select",
                      label: Object(i.__)("Payroll (Recommended)", "rank-math"),
                      help: Object(i.__)("Salary amount is for", "rank-math"),
                      options: {
                        "": "None",
                        YEAR: "Yearly",
                        MONTH: "Monthly",
                        WEEK: "Weekly",
                        DAY: "Daily",
                        HOUR: "Hourly",
                      },
                      classes: "col-4",
                    },
                  },
                },
              },
            },
            datePosted: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "datepicker",
                  label: Object(i.__)("Date Posted", "rank-math"),
                  placeholder: "%date(Y-m-d)%",
                  help: Object(i.__)(
                    "The original date on which employer posted the job. You can leave it empty to use the post publication date as job posted date",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            validThrough: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "datepicker",
                  label: Object(i.__)("Expiry Posted", "rank-math"),
                  help: Object(i.__)(
                    "The date when the job posting will expire. If a job posting never expires, or you do not know when the job will expire, do not include this property",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            unpublish: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "select",
                  label: Object(i.__)("Unpublish when expired", "rank-math"),
                  options: { on: "Yes", off: "No" },
                  help: Object(i.__)(
                    "If checked, post status will be changed to Draft and its URL will return a 404 error, as required by the Rich Result guidelines",
                    "rank-math"
                  ),
                  classes: "col-4",
                  default: "on",
                },
              },
            },
            employmentType: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "checkbox",
                  multiple: !0,
                  label: Object(i.__)(
                    "Employment Type (Recommended)",
                    "rank-math"
                  ),
                  help: Object(i.__)(
                    "Type of employment. You can choose more than one value",
                    "rank-math"
                  ),
                  options: {
                    "": "None",
                    FULL_TIME: "Full Time",
                    PART_TIME: "Part Time",
                    CONTRACTOR: "Contractor",
                    TEMPORARY: "Temporary",
                    INTERN: "Intern",
                    VOLUNTEER: "Volunteer",
                    PER_DIEM: "Per Diem",
                    OTHER: "Other",
                  },
                  default: [],
                },
              },
            },
            hiringOrganization: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Organization",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Hiring Organization", "rank-math"),
                    placeholder: "%org_name%",
                    help: Object(i.__)(
                      "The name of the company. Leave empty to use your own company information.",
                      "rank-math"
                    ),
                    classes: "col-4",
                  },
                },
              },
              sameAs: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)(
                      "Organization URL (Recommended)",
                      "rank-math"
                    ),
                    placeholder: "%org_url%",
                    help: Object(i.__)(
                      "The URL of the organization offering the job position. Leave empty to use your own company information",
                      "rank-math"
                    ),
                    classes: "col-6",
                  },
                },
              },
              logo: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)(
                      "Organization Logo (Recommended)",
                      "rank-math"
                    ),
                    placeholder: "%org_logo%",
                    help: Object(i.__)(
                      "Logo URL of the organization offering the job position. Leave empty to use your own company information",
                      "rank-math"
                    ),
                    classes: "col-6",
                  },
                },
              },
            },
            id: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  label: Object(i.__)("Posting ID (Recommended)", "rank-math"),
                  help: Object(i.__)(
                    "The hiring organization's unique identifier for the job.",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            jobLocation: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Place",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Venue Name", "rank-math"),
                    help: Object(i.__)("The venue name.", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Venue URL", "rank-math"),
                    help: Object(i.__)("Website URL of the venue", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              address: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  field: { label: Object(i.__)("Address", "rank-math") },
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "PostalAddress",
                  },
                },
                streetAddress: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Street Address", "rank-math"),
                    },
                  },
                },
                addressLocality: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Locality", "rank-math"),
                    },
                  },
                },
                addressRegion: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Region", "rank-math"),
                    },
                  },
                },
                postalCode: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Postal Code", "rank-math"),
                    },
                  },
                },
                addressCountry: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "text",
                      label: Object(i.__)("Country", "rank-math"),
                    },
                  },
                },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
          },
          Music: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Music", "rank-math"),
              defaultEn: "Music",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
              },
            },
            url: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("URL", "rank-math"),
                  placeholder: "%url%",
                },
              },
            },
            "@type": {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "radio",
                  label: Object(i.__)("Music Type", "rank-math"),
                  classes: "show-property",
                  options: {
                    MusicGroup: "MusicGroup",
                    MusicAlbum: "MusicAlbum",
                  },
                  default: "MusicGroup",
                },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
          },
          Person: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Person", "rank-math"),
              defaultEn: "Person",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
              },
            },
            email: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Email", "rank-math") },
              },
            },
            address: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Address", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "PostalAddress",
                },
              },
              streetAddress: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Street Address", "rank-math"),
                  },
                },
              },
              addressLocality: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Locality", "rank-math"),
                  },
                },
              },
              addressRegion: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Region", "rank-math"),
                  },
                },
              },
              postalCode: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Postal Code", "rank-math"),
                  },
                },
              },
              addressCountry: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Country", "rank-math"),
                  },
                },
              },
            },
            gender: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Gender", "rank-math"),
                  classes: "col-6",
                },
              },
            },
            jobTitle: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Job title", "rank-math"),
                  help: Object(i.__)(
                    "The job title of the person (for example, Financial Manager).",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
          },
          Product: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Product", "rank-math"),
              defaultEn: "Product",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Product name", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            reviewLocation: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "select",
                  label: Object(i.__)("Review Location", "rank-math"),
                  help: Object(i.__)(
                    "The review or rating must be displayed on the page to comply with Google's Schema guidelines.",
                    "rank-math"
                  ),
                  options: {
                    bottom: "Below Content",
                    top: "Above Content",
                    both: "Above and Below Content",
                    custom: "Custom (use shortcode)",
                  },
                  default: "custom",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
                dependency: [{ field: "reviewLocation", value: "custom" }],
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            sku: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: { label: Object(i.__)("Product SKU", "rank-math") },
              },
            },
            brand: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Brand",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Brand Name", "rank-math") },
                },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
            gtin8: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  label: Object(i.__)("Gtin", "rank-math"),
                  classes: "hide-group",
                },
              },
            },
            mpn: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  label: Object(i.__)("MPN", "rank-math"),
                  classes: "hide-group",
                },
              },
            },
            isbn: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  label: Object(i.__)("ISBN", "rank-math"),
                  classes: "hide-group",
                },
              },
            },
            offers: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Offers", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Offer",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Name", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              category: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Category", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("URL", "rank-math"),
                    classes: "hide-group",
                    placeholder: "%url%",
                  },
                },
              },
              price: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Price", "rank-math") },
                },
              },
              priceCurrency: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Currency", "rank-math") },
                },
              },
              availability: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "select",
                    label: Object(i.__)("Availability", "rank-math"),
                    help: Object(i.__)("Offer availability", "rank-math"),
                    classes: "col-4",
                    options: {
                      InStock: "In Stock",
                      SoldOut: "Sold Out",
                      PreOrder: "Preorder",
                    },
                    default: "InStock",
                  },
                },
              },
              validFrom: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "datepicker",
                    label: Object(i.__)("Price Valid From", "rank-math"),
                    help: Object(i.__)(
                      "The date when the item becomes valid.",
                      "rank-math"
                    ),
                    classes: "hide-group",
                  },
                },
              },
              priceValidUntil: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "datepicker",
                    label: Object(i.__)("Price Valid Until", "rank-math"),
                    help: Object(i.__)(
                      "The date after which the price will no longer be available",
                      "rank-math"
                    ),
                  },
                },
              },
              inventoryLevel: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Inventory Level", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
            },
            review: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Review", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Review",
                },
              },
              datePublished: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Published Date", "rank-math"),
                    placeholder: "%date(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              dateModified: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Modified Date", "rank-math"),
                    placeholder: "%modified(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              author: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: ["hide-group-header", "hide-group"],
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Person",
                  },
                },
                name: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    field: {
                      label: Object(i.__)("Author Name", "rank-math"),
                      placeholder: "%name%",
                    },
                  },
                },
              },
              reviewRating: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: "hide-group-header",
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Rating",
                  },
                },
                ratingValue: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating", "rank-math"),
                      help: Object(i.__)("Rating score", "rank-math"),
                    },
                  },
                },
                worstRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Minimum", "rank-math"),
                      help: Object(i.__)("Rating minimum score", "rank-math"),
                      placeholder: 1,
                    },
                  },
                },
                bestRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Maximum", "rank-math"),
                      help: Object(i.__)("Rating maximum score", "rank-math"),
                      placeholder: 5,
                    },
                  },
                },
              },
            },
          },
          Recipe: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Recipe", "rank-math"),
              defaultEn: "Recipe",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            reviewLocation: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "select",
                  label: Object(i.__)("Review Location", "rank-math"),
                  help: Object(i.__)(
                    "The review or rating must be displayed on the page to comply with Google's Schema guidelines.",
                    "rank-math"
                  ),
                  options: {
                    bottom: "Below Content",
                    top: "Above Content",
                    both: "Above and Below Content",
                    custom: "Custom (use shortcode)",
                  },
                  default: "custom",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
                dependency: [{ field: "reviewLocation", value: "custom" }],
              },
            },
            datePublished: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Published Date", "rank-math"),
                  classes: "hide-group",
                  default: "%date(Y-m-d\\TH:i:sP)%",
                },
              },
            },
            author: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Person",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Author Name", "rank-math"),
                    placeholder: "%name%",
                  },
                },
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            prepTime: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Preparation Time", "rank-math"),
                  help: Object(i.__)(
                    "ISO 8601 duration format. Example: PT1H30M",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            cookTime: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Cooking Time", "rank-math"),
                  help: Object(i.__)(
                    "ISO 8601 duration format. Example: PT1H30M",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            totalTime: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Total Time", "rank-math"),
                  help: Object(i.__)(
                    "ISO 8601 duration format. Example: PT1H30M",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            recipeCategory: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Type", "rank-math"),
                  help: Object(i.__)(
                    "Type of dish, for example appetizer, or dessert.",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            recipeCuisine: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Cuisine", "rank-math"),
                  help: Object(i.__)(
                    "The cuisine of the recipe (for example, French or Ethiopian).",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            keywords: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Keywords", "rank-math"),
                  help: Object(i.__)(
                    "Other terms for your recipe such as the season, the holiday, or other descriptors. Separate multiple entries with commas.",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            recipeYield: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Recipe Yield", "rank-math"),
                  help: Object(i.__)(
                    "Quantity produced by the recipe, for example 4 servings",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            nutrition: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "hide-group-header",
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "NutritionInformation",
                },
              },
              calories: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Calories", "rank-math"),
                    help: Object(i.__)(
                      "The number of calories in the recipe. Optional.",
                      "rank-math"
                    ),
                  },
                },
              },
            },
            recipeIngredient: {
              map: {
                isArray: !0,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "show-add-property show-delete-property",
                field: {
                  label: Object(i.__)("Recipe Ingredients", "rank-math"),
                  help: Object(i.__)(
                    "Recipe ingredients, add one item per line",
                    "rank-math"
                  ),
                },
              },
            },
            review: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Review", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Review",
                },
              },
              datePublished: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Published Date", "rank-math"),
                    placeholder: "%date(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              dateModified: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Modified Date", "rank-math"),
                    placeholder: "%modified(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              author: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: ["hide-group-header", "hide-group"],
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Person",
                  },
                },
                name: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    field: {
                      label: Object(i.__)("Author Name", "rank-math"),
                      placeholder: "%name%",
                    },
                  },
                },
              },
              reviewRating: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: "hide-group-header",
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Rating",
                  },
                },
                ratingValue: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating", "rank-math"),
                      help: Object(i.__)("Rating score", "rank-math"),
                    },
                  },
                },
                worstRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Minimum", "rank-math"),
                      help: Object(i.__)("Rating minimum score", "rank-math"),
                      placeholder: 1,
                    },
                  },
                },
                bestRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Maximum", "rank-math"),
                      help: Object(i.__)("Rating maximum score", "rank-math"),
                      placeholder: 5,
                    },
                  },
                },
              },
            },
            video: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Video", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "VideoObject",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Name", "rank-math"),
                    help: Object(i.__)("A recipe video Name", "rank-math"),
                    classes: "col-6",
                  },
                },
              },
              description: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "textarea",
                    label: Object(i.__)("Description", "rank-math"),
                    help: Object(i.__)(
                      "A recipe video Description",
                      "rank-math"
                    ),
                  },
                },
              },
              embedUrl: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Video URL", "rank-math"),
                    help: Object(i.__)("A video URL. Optional.", "rank-math"),
                    classes: "col-6",
                  },
                },
              },
              contentUrl: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Content URL", "rank-math"),
                    help: Object(i.__)(
                      "A URL pointing to the actual video media file",
                      "rank-math"
                    ),
                    classes: "col-6",
                  },
                },
              },
              thumbnailUrl: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Recipe Video Thumbnail", "rank-math"),
                    help: Object(i.__)(
                      "A recipe video thumbnail URL",
                      "rank-math"
                    ),
                    classes: "col-6",
                  },
                },
              },
              duration: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Duration", "rank-math"),
                    help: Object(i.__)(
                      "ISO 8601 duration format. Example: PT1H30M",
                      "rank-math"
                    ),
                    classes: "col-6",
                  },
                },
              },
              uploadDate: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datepicker",
                    label: Object(i.__)("Video Upload Date", "rank-math"),
                    classes: "col-6",
                  },
                },
              },
            },
            instructionType: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  type: "radio",
                  label: Object(i.__)("Instruction Type", "rank-math"),
                  options: {
                    SingleField: "Single Field",
                    HowToStep: "How To Step",
                  },
                  default: "SingleField",
                },
              },
            },
            instructionsSingleField: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Recipe Instructions", "rank-math"),
                },
                dependency: [
                  { field: "instructionType", value: "SingleField" },
                ],
              },
            },
            instructionsHowToStep: {
              map: {
                isArray: !0,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                arrayMap: "instructions",
                arrayProps: { map: { classes: "show-delete-property-group" } },
                field: {
                  label: Object(i.__)("Recipe Instructions", "rank-math"),
                },
                dependency: [
                  { field: "instructionType", value: ["HowToStep"] },
                ],
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
          },
          Restaurant: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Restaurant", "rank-math"),
              defaultEn: "Restaurant",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
              },
            },
            telephone: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Phone Number", "rank-math") },
              },
            },
            priceRange: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Price Range", "rank-math"),
                  classes: "col-4",
                },
              },
            },
            address: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Address", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "PostalAddress",
                },
              },
              streetAddress: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Street Address", "rank-math"),
                  },
                },
              },
              addressLocality: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Locality", "rank-math"),
                  },
                },
              },
              addressRegion: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Region", "rank-math"),
                  },
                },
              },
              postalCode: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Postal Code", "rank-math"),
                  },
                },
              },
              addressCountry: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "text",
                    label: Object(i.__)("Country", "rank-math"),
                  },
                },
              },
            },
            geo: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Geo Cordinates", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "GeoCoordinates",
                },
              },
              latitude: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: { label: Object(i.__)("Latitude", "rank-math") },
                },
              },
              longitude: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: { label: Object(i.__)("Longitude", "rank-math") },
                },
              },
            },
            openingHoursSpecification: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Timings", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "OpeningHoursSpecification",
                },
              },
              dayOfWeek: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "checkbox",
                    label: Object(i.__)("Open Days", "rank-math"),
                    options: {
                      monday: "Monday",
                      tuesday: "Tuesday",
                      wednesday: "Wednesday",
                      thursday: "Thursday",
                      friday: "Friday",
                      saturday: "Saturday",
                      sunday: "Sunday",
                    },
                    default: [],
                  },
                },
              },
              opens: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "timepicker",
                    label: Object(i.__)("Opening Time", "rank-math"),
                    classes: "col-6",
                    placeholder: "09:00 AM",
                  },
                },
              },
              closes: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "timepicker",
                    label: Object(i.__)("Closing Time", "rank-math"),
                    classes: "col-6",
                    placeholder: "05:00 PM",
                  },
                },
              },
            },
            servesCuisine: {
              map: {
                isArray: !0,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: "show-add-property show-delete-property",
                field: { label: Object(i.__)("Serves Cuisine", "rank-math") },
              },
            },
            hasMenu: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Menu URL", "rank-math"),
                  help: Object(i.__)(
                    "URL pointing to the menu of the restaurant.",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
          },
          Service: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Service", "rank-math"),
              defaultEn: "Service",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
              },
            },
            serviceType: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Service Type", "rank-math"),
                  help: Object(i.__)(
                    "The type of service being offered, e.g. veterans' benefits, emergency relief, etc.",
                    "rank-math"
                  ),
                  classes: "col-4",
                },
              },
            },
            offers: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Offers", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Offer",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Name", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              category: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Category", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("URL", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              price: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Price", "rank-math") },
                },
              },
              priceCurrency: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Currency", "rank-math") },
                },
              },
              availability: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "select",
                    label: Object(i.__)("Availability", "rank-math"),
                    help: Object(i.__)("Offer availability", "rank-math"),
                    classes: ["col-4", "hide-group"],
                    options: {
                      InStock: "In Stock",
                      SoldOut: "Sold Out",
                      PreOrder: "Preorder",
                    },
                    default: "InStock",
                  },
                },
              },
              validFrom: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "datepicker",
                    label: Object(i.__)("Price Valid From", "rank-math"),
                    help: Object(i.__)(
                      "The date when the item becomes valid.",
                      "rank-math"
                    ),
                    classes: "hide-group",
                  },
                },
              },
              priceValidUntil: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "datepicker",
                    label: Object(i.__)("Price Valid Until", "rank-math"),
                    help: Object(i.__)(
                      "The date after which the price will no longer be available",
                      "rank-math"
                    ),
                    classes: "hide-group",
                  },
                },
              },
              inventoryLevel: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Inventory Level", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
          },
          SoftwareApplication: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Software", "rank-math"),
              defaultEn: "Software",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            reviewLocation: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "select",
                  label: Object(i.__)("Review Location", "rank-math"),
                  help: Object(i.__)(
                    "The review or rating must be displayed on the page to comply with Google's Schema guidelines.",
                    "rank-math"
                  ),
                  options: {
                    bottom: "Below Content",
                    top: "Above Content",
                    both: "Above and Below Content",
                    custom: "Custom (use shortcode)",
                  },
                  default: "custom",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
                dependency: [{ field: "reviewLocation", value: "custom" }],
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            operatingSystem: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Operating System", "rank-math"),
                  help: Object(i.__)(
                    "For example, Windows 7, OSX 10.6, Android 1.6",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            applicationCategory: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Application Category", "rank-math"),
                  help: Object(i.__)(
                    "For example, Game, Multimedia",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            offers: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Offers", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Offer",
                },
              },
              name: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Name", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              category: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("Category", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    label: Object(i.__)("URL", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
              price: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Price", "rank-math") },
                },
              },
              priceCurrency: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: { label: Object(i.__)("Currency", "rank-math") },
                },
              },
              availability: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "select",
                    label: Object(i.__)("Availability", "rank-math"),
                    help: Object(i.__)("Offer availability", "rank-math"),
                    classes: ["col-4", "hide-group"],
                    options: {
                      InStock: "In Stock",
                      SoldOut: "Sold Out",
                      PreOrder: "Preorder",
                    },
                    default: "InStock",
                  },
                },
              },
              validFrom: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "datepicker",
                    label: Object(i.__)("Price Valid From", "rank-math"),
                    help: Object(i.__)(
                      "The date when the item becomes valid.",
                      "rank-math"
                    ),
                    classes: "hide-group",
                  },
                },
              },
              priceValidUntil: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !0,
                  field: {
                    type: "datepicker",
                    label: Object(i.__)("Price Valid Until", "rank-math"),
                    help: Object(i.__)(
                      "The date after which the price will no longer be available",
                      "rank-math"
                    ),
                    classes: "hide-group",
                  },
                },
              },
              inventoryLevel: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Inventory Level", "rank-math"),
                    classes: "hide-group",
                  },
                },
              },
            },
            review: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                field: { label: Object(i.__)("Review", "rank-math") },
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "Review",
                },
              },
              datePublished: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Published Date", "rank-math"),
                    placeholder: "%date(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              dateModified: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !1,
                  isRecommended: !1,
                  field: {
                    type: "datetimepicker",
                    label: Object(i.__)("Modified Date", "rank-math"),
                    placeholder: "%modified(Y-m-d\\TH:i:sP)%",
                    classes: "hide-group",
                  },
                },
              },
              author: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: ["hide-group-header", "hide-group"],
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Person",
                  },
                },
                name: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    field: {
                      label: Object(i.__)("Author Name", "rank-math"),
                      placeholder: "%name%",
                    },
                  },
                },
              },
              reviewRating: {
                map: {
                  isArray: !1,
                  isGroup: !0,
                  isRequired: !1,
                  isRecommended: !1,
                  classes: "hide-group-header",
                },
                "@type": {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !0,
                    isRecommended: !1,
                    value: "Rating",
                  },
                },
                ratingValue: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating", "rank-math"),
                      help: Object(i.__)("Rating score", "rank-math"),
                    },
                  },
                },
                worstRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Minimum", "rank-math"),
                      help: Object(i.__)("Rating minimum score", "rank-math"),
                      placeholder: 1,
                    },
                  },
                },
                bestRating: {
                  map: {
                    isArray: !1,
                    isGroup: !1,
                    isRequired: !1,
                    isRecommended: !1,
                    field: {
                      type: "number",
                      label: Object(i.__)("Rating Maximum", "rank-math"),
                      help: Object(i.__)("Rating maximum score", "rank-math"),
                      placeholder: 5,
                    },
                  },
                },
              },
            },
            image: {
              map: {
                isArray: !1,
                isGroup: !0,
                isRequired: !1,
                isRecommended: !1,
                classes: ["hide-group-header", "hide-group"],
              },
              "@type": {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  value: "ImageObject",
                },
              },
              url: {
                map: {
                  isArray: !1,
                  isGroup: !1,
                  isRequired: !0,
                  isRecommended: !1,
                  field: {
                    label: Object(i.__)("Image URL", "rank-math"),
                    placeholder: "%post_thumbnail%",
                  },
                },
              },
            },
          },
          VideoObject: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("Video", "rank-math"),
              defaultEn: "Video",
            },
            name: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !0,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Headline", "rank-math"),
                  placeholder: "%seo_title%",
                },
              },
            },
            description: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !0,
                field: {
                  type: "textarea",
                  label: Object(i.__)("Description", "rank-math"),
                  placeholder: "%seo_description%",
                },
              },
            },
            reviewLocationShortcode: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                save: "metadata",
                field: {
                  type: "text",
                  label: Object(i.__)("Shortcode", "rank-math"),
                  help: Object(i.__)(
                    "You can either use this shortcode or Schema Block in the block editor to print the schema data in the content in order to meet the Google's guidelines. Read more about it <a href=https://developers.google.com/search/docs/guides/sd-policies#content target=_blank>here</a>.",
                    "rank-math"
                  ),
                  disabled: "disabled",
                },
                value: "[rank_math_rich_snippet]",
              },
            },
            uploadDate: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Upload Date", "rank-math"),
                  classes: "hide-group",
                  placeholder: "%date(Y-m-d\\TH:i:sP)%",
                },
              },
            },
            embedUrl: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Embed URL", "rank-math"),
                  help: Object(i.__)(
                    "A URL pointing to the embeddable player for the video. Example: <code>https://www.youtube.com/embed/VIDEOID</code>",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            contentUrl: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Content URL", "rank-math"),
                  help: Object(i.__)(
                    "A URL pointing to the actual video media file like MP4, MOV, etc. Please leave it empty if you don't know the URL.",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            duration: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Duration", "rank-math"),
                  help: Object(i.__)(
                    "ISO 8601 duration format. Example: 1H30M",
                    "rank-math"
                  ),
                  classes: "col-6",
                },
              },
            },
            thumbnailUrl: {
              map: {
                isArray: !1,
                isGroup: !1,
                isRequired: !1,
                isRecommended: !1,
                field: {
                  label: Object(i.__)("Video Thumbnail", "rank-math"),
                  help: Object(i.__)("A video thumbnail URL", "rank-math"),
                  classes: "hide-group",
                  placeholder: "%post_thumbnail%",
                },
              },
            },
          },
          WooCommerceProduct: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("WooCommerce Product", "rank-math"),
              defaultEn: "WooCommerce Product",
            },
          },
          EDDProduct: {
            map: {
              isArray: !1,
              isGroup: !0,
              isRequired: !1,
              isRecommended: !1,
              title: Object(i.__)("EDD Product", "rank-math"),
              defaultEn: "EDD Product",
            },
          },
        },
      },
      m = {
        set: function (e, t, r) {
          return (
            !!e &&
            (localStorage.setItem(
              e,
              JSON.stringify({ value: t, expires: this.expiry(r) })
            ),
            !0)
          );
        },
        get: function (e) {
          if (!e) return !1;
          var t = localStorage.getItem(e);
          return (
            !!t &&
            ((t = JSON.parse(t)).expires && Date.now() > t.expires
              ? (localStorage.removeItem(e), !1)
              : t.value)
          );
        },
        remove: function (e) {
          return !!e && (localStorage.removeItem(e), !0);
        },
        expiry: function (e) {
          if (!e) return !1;
          if (-1 === e) {
            var t = new Date();
            return t.setYear(1970), t.getTime();
          }
          var r = parseInt(e),
            a = e.replace(r, "");
          return (
            "d" === a && (r = 24 * r * 60 * 60 * 1e3),
            "h" === a && (r = 60 * r * 60 * 1e3),
            "m" === a && (r = 60 * r * 1e3),
            "s" === a && (r *= 1e3),
            Date.now() + r
          );
        },
      };
    function c(e, t) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    var d = "rank_math_schema_templates_store",
      p = new ((function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.cache = null),
            (this.templates = null),
            (this.verion = "1.1.0"),
            "product" !== rankMath.postType &&
              delete l.schemas.WooCommerceProduct,
            "download" !== rankMath.postType && delete l.schemas.EDDProduct,
            (this.cache = Object(s.applyFilters)("rank_math_schema_maps", l)),
            Object(s.doAction)("rank_math_schema_template_loaded");
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: "verifyCache",
              value: function () {
                var e = m.get(d);
                return (
                  !1 !== e &&
                  this.version === e.version &&
                  ((this.cache = e),
                  Object(s.doAction)("rank_math_schema_template_loaded"),
                  !0)
                );
              },
            },
            {
              key: "fetchStore",
              value: function () {
                var e = this;
                o()({
                  method: "GET",
                  url:
                    "//" +
                    window.location.host +
                    "/wp-json/rankmath/v1/getSchemas",
                }).then(function (t) {
                  m.set(d, t, "30d"),
                    (e.cache = t),
                    Object(s.doAction)("rank_math_schema_template_loaded");
                });
              },
            },
            {
              key: "getMap",
              value: function (e) {
                var t = Object(a.get)(this.cache.properties, e, !1);
                return t || Object(a.get)(this.cache.schemas, e, !1);
              },
            },
            {
              key: "getTemplates",
              value: function () {
                var e = this;
                return (
                  null === this.templates &&
                    ((this.templates = []),
                    Object(a.forEach)(this.cache.schemas, function (t, r) {
                      var n = Object(a.get)(t, "map.title", r);
                      e.templates.push({
                        type: r,
                        title:
                          "WooCommerceProduct" !== r
                            ? n
                            : Object(i.__)("WooCommerce Product", "rank-math"),
                      });
                    }),
                    (this.templates = Object(a.orderBy)(
                      this.templates,
                      "type"
                    ))),
                  this.templates
                );
              },
            },
          ]) && c(t.prototype, r),
          n && c(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })())();
    function u(e) {
      return p.getMap(e);
    }
  },
  function (e, t) {
    var r =
      ("undefined" != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ("undefined" != typeof msCrypto &&
        "function" == typeof window.msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto));
    if (r) {
      var a = new Uint8Array(16);
      e.exports = function () {
        return r(a), a;
      };
    } else {
      var i = new Array(16);
      e.exports = function () {
        for (var e, t = 0; t < 16; t++)
          0 == (3 & t) && (e = 4294967296 * Math.random()),
            (i[t] = (e >>> ((3 & t) << 3)) & 255);
        return i;
      };
    }
  },
  function (e, t) {
    for (var r = [], a = 0; a < 256; ++a)
      r[a] = (a + 256).toString(16).substr(1);
    e.exports = function (e, t) {
      var a = t || 0,
        i = r;
      return [
        i[e[a++]],
        i[e[a++]],
        i[e[a++]],
        i[e[a++]],
        "-",
        i[e[a++]],
        i[e[a++]],
        "-",
        i[e[a++]],
        i[e[a++]],
        "-",
        i[e[a++]],
        i[e[a++]],
        "-",
        i[e[a++]],
        i[e[a++]],
        i[e[a++]],
        i[e[a++]],
        i[e[a++]],
        i[e[a++]],
      ].join("");
    };
  },
  function (e, t, r) {
    "use strict";
    var a = r(10),
      i = r.n(a),
      n = r(1),
      o = r(5),
      s = r(3),
      l = r(4);
    function m(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(r), !0).forEach(function (t) {
              d(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : m(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function d(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function p(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return u(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return u(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return u(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    var h = function (e) {
      return Object(n.isObject)(e) ? e : [e];
    };
    t.a = function () {
      i()(function (e) {
        new ClipboardJS(".structured-data-copy").on("success", function (t) {
          var r = e(t.trigger);
          r.addClass("copied"),
            setTimeout(function () {
              r.removeClass("copied");
            }, 2e3);
        });
      }),
        Object(s.addAction)("rank_math_loaded", "rank-math", function () {
          var e = {},
            t = Object(n.get)(rankMath, "schemas", {});
          Object(n.map)(t, function (t, r) {
            var a = Object(n.get)(t, "@type");
            (t = Object(s.applyFilters)("rank_math_pre_schema_" + a, t)),
              (e[r] = Object(l.e)(
                Object(s.applyFilters)("rank_math_pre_schema", t)
              ));
          }),
            Object(o.dispatch)("rank-math").updateEditSchemas(e);
        }),
        Object(s.addFilter)("rank_math_schema_type", "rank-math", function (e) {
          return Object(n.isUndefined)(e)
            ? e
            : "NewsArticle" === e || "BlogPosting" === e
            ? "Article"
            : "MusicGroup" === e || "MusicAlbum" === e
            ? "Music"
            : e.includes("Event") || "Festival" === e
            ? "Event"
            : e;
        }),
        Object(s.addFilter)(
          "rank_math_schema_convert_author",
          "rank-math",
          function (e, t, r) {
            return Object(n.isObject)(r) || Object(n.isUndefined)(t.properties)
              ? e
              : ((t.properties[1].value = r), t);
          }
        ),
        Object(s.addFilter)(
          "rank_math_schema_convert_value",
          "rank-math",
          function (e, t, r, a) {
            var i =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (!t.map.isArray) return e;
            var o = t.map,
              s = o.arrayMap,
              m = void 0 !== s && s,
              c = o.arrayProps,
              d = void 0 === c ? {} : c;
            return m
              ? (Object(n.forEach)(a, function (e) {
                  t.properties.push(Object(l.f)(e, m, d, i));
                }),
                t)
              : ((a = h(a)),
                Object(n.forEach)(a, function (e, r) {
                  var a = Object(n.get)(e, "@type", !1);
                  if (!1 === a) {
                    var o = Object(l.i)();
                    (o.property = r), (o.value = e), t.properties.push(o);
                  } else t.properties.push(Object(l.f)(e, a, d, i));
                }),
                t);
          }
        ),
        Object(s.addFilter)(
          "rank_math_schema_convert_value",
          "rank-math",
          function (e, t, r, a) {
            var i =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return t.map.isArray || !t.map.isGroup || i
              ? e
              : Object(l.j)(t, a, i);
          },
          20
        ),
        Object(s.addFilter)(
          "rank_math_pre_schema_Product",
          "rank-math",
          function (e) {
            return (
              Object(n.has)(e, "brand") &&
                !Object(n.isObject)(e.brand) &&
                (e.brand = { "@type": "Brand", name: e.brand }),
              e
            );
          }
        ),
        Object(s.addFilter)(
          "rank_math_processed_schema_Recipe",
          "rank-math",
          function (e) {
            var t = e.instructionType;
            return (
              delete e.instructionType,
              "SingleField" === t &&
                ((e.recipeInstructions = e.instructionsSingleField),
                delete e.instructionsSingleField),
              "HowToStep" === t &&
                (1 === e.instructionsHowToStep.length &&
                  (e.recipeInstructions = {
                    "@type": "HowToSection",
                    name: e.instructionsHowToStep[0].name,
                    itemListElement: e.instructionsHowToStep[0].itemListElement,
                  }),
                e.instructionsHowToStep.length > 1 &&
                  (e.recipeInstructions = p(e.instructionsHowToStep)),
                delete e.instructionsHowToStep),
              e
            );
          },
          20
        ),
        Object(s.addFilter)(
          "rank_math_pre_schema_Recipe",
          "rank-math",
          function (e) {
            var t = e.recipeInstructions;
            if (
              (Object(n.isString)(t) &&
                ((e.instructionType = "SingleField"),
                (e.instructionsSingleField = t),
                delete e.recipeInstructions),
              Object(n.forEach)(
                ["cookTime", "prepTime", "totalTime"],
                function (t) {
                  Object(n.isUndefined)(e[t]) || "PT" !== e[t] || delete e[t];
                }
              ),
              Object(n.isArray)(t) &&
                ((e.instructionType = "HowToStep"),
                Object(n.forEach)(t, function (e, r) {
                  Object(n.isUndefined)(e.type) ||
                    ((e["@type"] = e.type), delete e.type),
                    Object(n.isUndefined)(e.itemListElement) ||
                      (Object(n.isUndefined)(e.itemListElement.type) ||
                        ((e.itemListElement["@type"] = e.itemListElement.type),
                        delete e.itemListElement.type),
                      Object(n.isArray)(e.itemListElement) ||
                        (e.itemListElement = [e.itemListElement])),
                    (t[r] = e);
                }),
                (e.instructionsHowToStep = t),
                delete e.recipeInstructions),
              !Object(n.isArray)(t) && Object(n.isObject)(t))
            ) {
              var r = c(c({}, t), {}, { "@type": "HowToSection" });
              (e.instructionType = "HowToStep"),
                (e.instructionsHowToStep = []),
                e.instructionsHowToStep.push(r),
                delete e.recipeInstructions;
            }
            return e;
          }
        ),
        Object(s.addFilter)(
          "rank_math_processed_schema",
          "rank-math",
          function (e) {
            var t = e.eventAttendanceMode;
            return (
              Object(n.isUndefined)(t) ||
                ("MixedEventAttendanceMode" === t &&
                  ((e.location = [e.VirtualLocation, e.location]),
                  delete e.VirtualLocation),
                "OnlineEventAttendanceMode" === t &&
                  ((e.location = e.VirtualLocation), delete e.VirtualLocation)),
              e
            );
          },
          20
        ),
        Object(s.addFilter)("rank_math_pre_schema", "rank-math", function (e) {
          var t = e.eventAttendanceMode;
          return (
            Object(n.isUndefined)(t) ||
              ("MixedEventAttendanceMode" === t &&
                ((e.VirtualLocation = Object(n.find)(e.location, [
                  "@type",
                  "VirtualLocation",
                ])),
                (e.location = Object(n.find)(e.location, ["@type", "Place"]))),
              "OnlineEventAttendanceMode" === t &&
                ((e.VirtualLocation = e.location), delete e.location)),
            e
          );
        });
    };
  },
  function (e, t, r) {
    "use strict";
    var a = r(0),
      i = r(6),
      n = r(4),
      o = {
        "@context": "https://schema.org/",
        "@graph": [
          {
            "@type": "Article",
            headline:
              "Power Words: The Art of Writing Headlines That Get Clicked",
            description:
              "Power words are words with strong meaning that smart copywriters (as well as marketers) use to increase CTR and boost conversions.",
            author: { "@type": "Person", name: "Rank Math" },
            datePublished: "2020-09-12GMT+000015:45:32+00:00",
            dateModified: "2020-09-12GMT+000015:45:29+00:00",
            "@id": "https://rankmath.com/blog/power-words/#schema-44838",
            mainEntityOfPage: {
              "@id": "https://rankmath.com/blog/power-words/#webpage",
            },
            isPartOf: {
              "@id": "https://rankmath.com/blog/power-words/#webpage",
            },
            publisher: { "@id": "/#organization" },
            inLanguage: "en-US",
          },
        ],
      };
    t.a = function () {
      var e = JSON.stringify(o, null, 2);
      return wp.element.createElement(
        i.Fragment,
        null,
        wp.element.createElement(
          "div",
          { className: "rank-math-pretty-json free-version" },
          wp.element.createElement(
            "form",
            {
              method: "post",
              target: "_blank",
              action: "https://search.google.com/test/rich-results",
            },
            wp.element.createElement(
              "h4",
              { className: "rank-math-schema-section-title" },
              Object(a.__)("JSON-LD Code", "rank-math")
            ),
            wp.element.createElement(
              "button",
              {
                className: "button structured-data-copy is-small",
                type: "button",
                "data-clipboard-text": e,
              },
              wp.element.createElement("i", {
                className: "rm-icon rm-icon-copy",
              }),
              wp.element.createElement(
                "span",
                { className: "original-text" },
                Object(a.__)("Copy", "rank-math")
              ),
              wp.element.createElement(
                "span",
                { className: "success", "aria-hidden": "true" },
                Object(a.__)("Copied!", "rank-math")
              )
            ),
            wp.element.createElement(
              "button",
              {
                className: "button structured-data-test is-small",
                type: "submit",
              },
              wp.element.createElement("i", {
                className: "rm-icon rm-icon-google",
              }),
              " ",
              wp.element.createElement(
                "span",
                null,
                Object(a.__)("Test with Google", "rank-math")
              )
            ),
            wp.element.createElement("textarea", {
              name: "code_snippet",
              defaultValue: e,
            })
          ),
          wp.element.createElement(
            "pre",
            { className: "code-output" },
            wp.element.createElement("code", {
              className: "language-javascript",
              dangerouslySetInnerHTML: { __html: Object(n.l)(e) },
            })
          ),
          wp.element.createElement(
            "div",
            { id: "rank-math-pro-cta", className: "center" },
            wp.element.createElement(
              "div",
              { className: "rank-math-cta-box blue-ticks width-70" },
              wp.element.createElement(
                "h3",
                null,
                Object(a.__)(
                  "Preview & Validate Your Schema Markup",
                  "rank-math"
                )
              ),
              wp.element.createElement(
                "ul",
                null,
                wp.element.createElement(
                  "li",
                  null,
                  Object(a.__)("Advanced Schema markup viewer", "rank-math")
                ),
                wp.element.createElement(
                  "li",
                  null,
                  Object(a.__)("Live testing with Google", "rank-math")
                ),
                wp.element.createElement(
                  "li",
                  null,
                  Object(a.__)(
                    "No other SEO plugin offers this feature",
                    "rank-math"
                  )
                )
              ),
              wp.element.createElement(
                "a",
                {
                  className: "button button-primary is-green",
                  href: "https://rankmath.com/pricing/?utm_source=Plugin&utm_medium=Code+Validation&utm_campaign=WP",
                  rel: "noreferrer noopener",
                  target: "_blank",
                },
                Object(a.__)("Upgrade", "rank-math")
              )
            )
          )
        )
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var a = r(13),
      i = r.n(a),
      n = r(8),
      o = r.n(n),
      s = r(10),
      l = r.n(s),
      m = r(1),
      c = r(9),
      d = r(0),
      p = r(7),
      u = r(6),
      h = r(2),
      b = r(5),
      y = r(3),
      f = r(4),
      _ = function (e) {
        var t = e.position,
          r = void 0 === t ? "middle right" : t,
          a = e.value,
          i = e.onChange,
          n = e.children;
        return wp.element.createElement(h.Dropdown, {
          position: r,
          className: "rank-math-datepicker",
          contentClassName: "rank-math-datepicker__dialog",
          renderToggle: function (e) {
            var t = e.onToggle,
              r = e.isOpen;
            return wp.element.createElement(
              u.Fragment,
              null,
              n,
              wp.element.createElement(h.Button, {
                icon: "calendar-alt",
                onClick: t,
                "aria-expanded": r,
              })
            );
          },
          renderContent: function () {
            return wp.element.createElement(h.DatePicker, {
              currentDate: a.split("T")[0],
              onMonthPreviewed: m.noop,
              onChange: function (e) {
                i(e.split("T")[0]);
              },
            });
          },
        });
      },
      R = function (e) {
        var t = e.position,
          r = void 0 === t ? "middle right" : t,
          a = e.value,
          i = e.onChange,
          n = e.children;
        return wp.element.createElement(h.Dropdown, {
          position: r,
          className: "rank-math-datepicker",
          contentClassName: "rank-math-datepicker__dialog",
          renderToggle: function (e) {
            var t = e.onToggle,
              r = e.isOpen;
            return wp.element.createElement(
              u.Fragment,
              null,
              n,
              wp.element.createElement(h.Button, {
                icon: "calendar-alt",
                onClick: t,
                "aria-expanded": r,
              })
            );
          },
          renderContent: function () {
            return wp.element.createElement(h.DateTimePicker, {
              is12Hour: !0,
              currentDate: a,
              onChange: i,
            });
          },
        });
      };
    r(14);
    function O(e) {
      return Object(m.map)(e, function (e, t) {
        return { label: e, value: t };
      });
    }
    var k = ["value", "onChange", "type", "options"];
    function j(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return g(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return g(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return g(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function g(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    function v() {
      return (
        (v = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r)
                  Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }),
        v.apply(this, arguments)
      );
    }
    function A(e, t) {
      if (null == e) return {};
      var r,
        a,
        i = (function (e, t) {
          if (null == e) return {};
          var r,
            a,
            i = {},
            n = Object.keys(e);
          for (a = 0; a < n.length; a++)
            (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (a = 0; a < n.length; a++)
          (r = n[a]),
            t.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]));
      }
      return i;
    }
    var w = function (e) {
      var t = e.value,
        r = e.onChange,
        a = e.type,
        i = e.options,
        n = void 0 === i ? {} : i,
        o = A(e, k);
      return (
        Object(m.isUndefined)(o.help) ||
          (o.help = Object(u.RawHTML)({ children: o.help })),
        "radio" === a
          ? wp.element.createElement(
              h.RadioControl,
              v({ selected: t, options: O(n), onChange: r }, o)
            )
          : "select" === a
          ? (!Object(m.has)(o, "multiple") &&
              Object(m.isArray)(t) &&
              (t = t[0]),
            wp.element.createElement(
              h.SelectControl,
              v({ value: t, options: O(n), onChange: r }, o)
            ))
          : "toggle" === a
          ? wp.element.createElement(
              h.ToggleControl,
              v({ checked: t, onChange: r }, o)
            )
          : "number" === a
          ? wp.element.createElement(
              h.TextControl,
              v(
                {
                  type: "number",
                  autoComplete: "off",
                  step: "0.01",
                  value: t,
                  onChange: r,
                },
                o
              )
            )
          : "url" === a
          ? wp.element.createElement(
              h.TextControl,
              v({ type: "url", autoComplete: "off", value: t, onChange: r }, o)
            )
          : "datepicker" === a
          ? wp.element.createElement(
              _,
              { value: t, position: "middle left", onChange: r },
              wp.element.createElement(
                h.TextControl,
                v({ value: t, onChange: r }, o)
              )
            )
          : "datetimepicker" === a
          ? wp.element.createElement(
              R,
              { value: t, position: "middle left", onChange: r },
              wp.element.createElement(
                h.TextControl,
                v({ value: t, onChange: r }, o)
              )
            )
          : "textarea" === a
          ? wp.element.createElement(
              h.TextareaControl,
              v({ rows: 5, value: t, onChange: r }, o)
            )
          : "checkbox" === a
          ? wp.element.createElement(
              "div",
              {
                className:
                  "rank-math-checkbox-component components-base-control schema-property--value",
              },
              wp.element.createElement(
                "label",
                {
                  htmlFor: "checklist-label",
                  className: "components-base-control__label",
                },
                o.label
              ),
              wp.element.createElement(
                "div",
                null,
                O(n).map(function (e) {
                  return wp.element.createElement(h.CheckboxControl, {
                    key: Object(m.uniqueId)("checkbox-"),
                    label: e.label,
                    checked: Object(m.includes)(t, e.value),
                    onChange: function (a) {
                      var i = j(t);
                      a
                        ? i.push(e.value)
                        : Object(m.remove)(i, function (t) {
                            return t === e.value;
                          }),
                        r(i);
                    },
                  });
                })
              )
            )
          : wp.element.createElement(
              h.TextControl,
              v({ value: t, onChange: r }, o)
            )
      );
    };
    (w.defaultProps = { value: "", type: "text", onChange: null }),
      (w.propTypes = { id: i.a.string, onChange: i.a.func.isRequired });
    var G = w,
      q = r(11);
    function E() {
      return (
        (E = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r)
                  Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }),
        E.apply(this, arguments)
      );
    }
    function S(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == r) return;
          var a,
            i,
            n = [],
            o = !0,
            s = !1;
          try {
            for (
              r = r.call(e);
              !(o = (a = r.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              o = !0
            );
          } catch (e) {
            (s = !0), (i = e);
          } finally {
            try {
              o || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return P(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return P(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function P(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    function C(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function T(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? C(Object(r), !0).forEach(function (t) {
              x(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : C(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function x(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var L = Object(p.compose)(
        Object(b.withSelect)(function (e, t) {
          return T(T({}, t), {}, { isPro: e("rank-math").isPro() });
        })
      )(function (e) {
        if (!1 === Object(f.n)(e.data, e.schema))
          return (e.data.map.isHidden = !0), null;
        var t = e.data,
          r = t.property,
          a = t.id,
          i = t.map,
          n = e.actions,
          s = n.removeProperty,
          l = n.propertyChange,
          c = n.duplicateProperty,
          d = Object(m.get)(i, "field", { label: !1 }),
          p = T({}, d),
          b = Object(u.useState)(
            (function (e, t) {
              var r = e.data,
                a = r.property,
                i = r.value,
                n = e.schema.metadata;
              return (
                i === Object(m.get)(t, "placeholder", "") && (i = ""),
                "reviewLocation" === a &&
                  Object(m.has)(n, "reviewLocation") &&
                  (i = n.reviewLocation),
                "unpublish" === a &&
                  Object(m.has)(n, "unpublish") &&
                  (i = n.unpublish),
                e.isPro &&
                  "[rank_math_rich_snippet]" === i &&
                  (i = '[rank_math_rich_snippet id="' + n.shortcode + '"]'),
                Object(y.applyFilters)("rank_math_schema_property_value", i, e)
              );
            })(e, d)
          ),
          _ = S(b, 2),
          R = _[0],
          O = _[1];
        i.isRequired &&
          (d.label &&
            (p.label = wp.element.createElement(
              u.Fragment,
              null,
              d.label,
              " ",
              wp.element.createElement("span", null, "*")
            )),
          d.placeholder || (p.required = "required")),
          e.isCustom && ((p.type = "text"), delete p.label);
        var k = o()(
          "schema-group-or-property-container schema-property-container",
          Object(m.get)(d, "classes", !1),
          { "hide-property": "@type" === r }
        );
        return (
          (e.data.map.isHidden = !1),
          wp.element.createElement(
            "div",
            { className: k },
            wp.element.createElement(
              "div",
              { className: "schema-group-or-property schema-property" },
              wp.element.createElement(
                "div",
                { className: "schema-property--body" },
                !e.isCustom && d.label
                  ? null
                  : wp.element.createElement(
                      "div",
                      { className: "schema-property--field" },
                      wp.element.createElement(h.TextControl, {
                        value: r,
                        onChange: function (e) {
                          l(a, "property", e);
                        },
                      })
                    ),
                wp.element.createElement(
                  "div",
                  { className: "schema-property--value" },
                  wp.element.createElement(
                    G,
                    E({ value: R }, p, {
                      onChange: function (e) {
                        O(e), l(a, "value", e);
                      },
                    })
                  ),
                  Object(m.has)(p, "notice") &&
                    wp.element.createElement(
                      h.Notice,
                      E({ isDismissible: !1 }, p.notice),
                      p.notice.content
                    )
                ),
                !i.isRequired &&
                  wp.element.createElement(
                    "div",
                    { className: "schema-property--header" },
                    wp.element.createElement(
                      h.Button,
                      {
                        isSecondary: !0,
                        className: "button rank-math-duplicate-property",
                        onClick: function () {
                          return c(a, e.parentId, e.data);
                        },
                      },
                      wp.element.createElement("i", {
                        className: "rm-icon rm-icon-copy",
                      })
                    ),
                    wp.element.createElement(
                      q.a,
                      {
                        key: a,
                        onClick: function () {
                          return s(a, e.parentId);
                        },
                      },
                      function (e) {
                        return wp.element.createElement(
                          h.Button,
                          {
                            isSecondary: !0,
                            className: "button rank-math-delete-group",
                            onClick: function () {
                              return e(!0);
                            },
                          },
                          wp.element.createElement("i", {
                            className: "rm-icon rm-icon-trash",
                          })
                        );
                      }
                    )
                  )
              )
            )
          )
        );
      }),
      N = {},
      M = function e(t) {
        if (!1 === Object(f.n)(t.data, t.schema))
          return (t.data.map.isHidden = !0), null;
        var r = t.parentId,
          a = t.isCustom,
          i = t.isPro,
          n = t.isMain,
          s = void 0 !== n && n,
          l = t.data,
          c = l.id,
          p = l.property,
          u = l.properties,
          b = l.map,
          _ = t.actions,
          R = _.addProperty,
          O = _.addGroup,
          k = _.removeGroup,
          j = _.propertyChange,
          g = _.duplicateGroup,
          v = Object(m.get)(b, "field", { label: !1 }),
          A = o()(
            "schema-group-or-property-container schema-group-container",
            Object(m.get)(b, "classes", !1),
            {
              "hide-property": "metadata" === p,
              "is-group": b.isGroup,
              "is-array": b.isArray,
              "no-array-map": Object(m.isUndefined)(b.arrayMap),
            }
          );
        return (
          b.isArray && (N[c] = 0),
          (t.data.map.isHidden = !1),
          wp.element.createElement(
            "div",
            { className: A },
            wp.element.createElement(
              "div",
              { className: "schema-group-or-property schema-group" },
              Object(y.applyFilters)("rank_math_schema_before_fields", "", p),
              wp.element.createElement(
                "div",
                { className: "schema-group-header" },
                (function () {
                  if (t.isArray)
                    return (
                      (N[r] += 1),
                      wp.element.createElement(
                        "div",
                        { className: "schema-property--label" },
                        Object(m.startCase)(p),
                        " ",
                        N[r]
                      )
                    );
                  if (!a && v.label)
                    return wp.element.createElement(
                      "div",
                      { className: "schema-property--label" },
                      v.label
                    );
                  var e =
                    "WooCommerceProduct" !== p ? p : "WooCommerce Product";
                  return wp.element.createElement(
                    "div",
                    { className: "schema-property--field" },
                    wp.element.createElement(h.TextControl, {
                      value: e,
                      disabled: !i,
                      onChange: function (e) {
                        j(c, "property", e);
                      },
                    })
                  );
                })(),
                wp.element.createElement(
                  h.ButtonGroup,
                  {
                    className:
                      "schema-group--actions schema-group--actions--tr",
                  },
                  wp.element.createElement(
                    h.Button,
                    {
                      className: "button rank-math-add-property",
                      isLink: !0,
                      onClick: function () {
                        return R(c);
                      },
                    },
                    wp.element.createElement("i", {
                      className: "rm-icon rm-icon-circle-plus",
                    }),
                    wp.element.createElement(
                      "span",
                      null,
                      Object(d.__)("Add Property", "rank-math")
                    )
                  ),
                  wp.element.createElement(
                    h.Button,
                    {
                      className: "button rank-math-add-property-group",
                      isLink: !0,
                      onClick: function () {
                        return O(c, b);
                      },
                    },
                    wp.element.createElement("i", {
                      className: "rm-icon rm-icon-circle-plus",
                    }),
                    wp.element.createElement(
                      "span",
                      null,
                      Object(d.__)("Add Property Group", "rank-math")
                    )
                  ),
                  !s &&
                    wp.element.createElement(
                      h.Button,
                      {
                        className: "button rank-math-duplicate-property-group",
                        isLink: !0,
                        onClick: function () {
                          return g(c, t.parentId, t.data);
                        },
                      },
                      wp.element.createElement("i", {
                        className: "rm-icon rm-icon-circle-plus",
                      }),
                      wp.element.createElement(
                        "span",
                        null,
                        Object(d.__)("Duplicate Group", "rank-math")
                      )
                    ),
                  wp.element.createElement(
                    q.a,
                    {
                      key: c,
                      onClick: function () {
                        return k(c, t.parentId);
                      },
                    },
                    function (e) {
                      return wp.element.createElement(
                        h.Button,
                        {
                          className: "button rank-math-delete-group",
                          isLink: !0,
                          onClick: function () {
                            return e(!0);
                          },
                        },
                        wp.element.createElement("i", {
                          className: "rm-icon rm-icon-trash",
                        }),
                        wp.element.createElement(
                          "span",
                          null,
                          Object(d.__)("Delete", "rank-math")
                        )
                      );
                    }
                  )
                )
              ),
              wp.element.createElement(
                "div",
                { className: "schema-group--children" },
                Object(m.map)(u, function (r, n) {
                  return r.map.isGroup
                    ? wp.element.createElement(e, {
                        key: n,
                        data: r,
                        parentId: c,
                        isArray: b.isArray,
                        isCustom: a,
                        schema: t.schema,
                        actions: t.actions,
                        isPro: i,
                      })
                    : wp.element.createElement(L, {
                        key: n,
                        data: r,
                        parentId: c,
                        isCustom: a,
                        schema: t.schema,
                        actions: t.actions,
                      });
                })
              ),
              s &&
                wp.element.createElement(
                  "div",
                  { className: "schema-group-footer" },
                  wp.element.createElement(
                    h.ButtonGroup,
                    {
                      className:
                        "schema-group--actions schema-group--actions--tr",
                    },
                    wp.element.createElement(
                      h.Button,
                      {
                        className: "button rank-math-add-property",
                        isLink: !0,
                        onClick: function () {
                          return R(c);
                        },
                      },
                      wp.element.createElement("i", {
                        className: "rm-icon rm-icon-circle-plus",
                      }),
                      wp.element.createElement(
                        "span",
                        null,
                        Object(d.__)("Add Property", "rank-math")
                      )
                    ),
                    wp.element.createElement(
                      h.Button,
                      {
                        className: "button rank-math-add-property-group",
                        isLink: !0,
                        onClick: function () {
                          return O(c, b);
                        },
                      },
                      wp.element.createElement("i", {
                        className: "rm-icon rm-icon-circle-plus",
                      }),
                      wp.element.createElement(
                        "span",
                        null,
                        Object(d.__)("Add Property Group", "rank-math")
                      )
                    ),
                    wp.element.createElement(
                      q.a,
                      {
                        key: c,
                        onClick: function () {
                          return k(c, t.parentId);
                        },
                      },
                      function (e) {
                        return wp.element.createElement(
                          h.Button,
                          {
                            className: "button rank-math-delete-group",
                            isLink: !0,
                            onClick: function () {
                              return e(!0);
                            },
                          },
                          wp.element.createElement("i", {
                            className: "rm-icon rm-icon-trash",
                          }),
                          wp.element.createElement(
                            "span",
                            null,
                            Object(d.__)("Delete", "rank-math")
                          )
                        );
                      }
                    )
                  )
                )
            )
          )
        );
      };
    function I(e) {
      return (
        (I =
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
        I(e)
      );
    }
    function D(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function U(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? D(Object(r), !0).forEach(function (t) {
              H(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : D(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function H(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function B(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function V(e, t) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function F(e, t) {
      return (
        (F = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        F(e, t)
      );
    }
    function Y(e) {
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
        var r,
          a = J(e);
        if (t) {
          var i = J(this).constructor;
          r = Reflect.construct(a, arguments, i);
        } else r = a.apply(this, arguments);
        return z(this, r);
      };
    }
    function z(e, t) {
      if (t && ("object" === I(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return W(e);
    }
    function W(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function J(e) {
      return (
        (J = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        J(e)
      );
    }
    var K = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && F(e, t);
      })(n, e);
      var t,
        r,
        a,
        i = Y(n);
      function n() {
        var e;
        return (
          B(this, n),
          ((e = i.apply(this, arguments)).addGroup = function (t, r) {
            var a = U({}, e.state.data),
              i = Object(f.b)(t, a),
              n = r.isArray,
              o = r.arrayMap,
              s = void 0 !== o && o,
              l = r.arrayProps,
              m = void 0 === l ? {} : l,
              c = n && s ? Object(f.d)(s, m) : Object(f.g)();
            i.properties.push(c), e.setState({ data: a });
          }),
          (e.addProperty = function (t) {
            var r = U({}, e.state.data);
            Object(f.b)(t, r).properties.push(Object(f.i)()),
              e.setState({ data: r });
          }),
          (e.duplicateGroup = function (t, r, a) {
            var i = U({}, e.state.data),
              n = Object(f.b)(r, i),
              o = Object(m.cloneDeep)(a),
              s = n.properties.findIndex(function (e) {
                return e.id === t;
              });
            n.properties.splice(s, 0, Object(f.a)(o)), e.setState({ data: i });
          }),
          (e.duplicateProperty = function (t, r, a) {
            var i = U({}, e.state.data),
              n = Object(f.b)(r, i),
              o = U({}, a),
              s = n.properties.findIndex(function (e) {
                return e.id === t;
              });
            (o.id = "p-".concat(Object(c.v4)())),
              n.properties.splice(s, 0, o),
              e.setState({ data: i });
          }),
          (e.removeGroup = function (t, r) {
            var a = U({}, e.state.data),
              i = Object(f.b)(r, a);
            if (i.id !== t) {
              var n = i.properties.findIndex(function (e) {
                return e.id === t;
              });
              i.properties.splice(n, 1), e.setState({ data: a });
            } else e.setState({ data: Object(f.g)() });
          }),
          (e.removeProperty = function (t, r) {
            var a = U({}, e.state.data),
              i = Object(f.b)(r, a),
              n = i.properties.findIndex(function (e) {
                return e.id === t;
              });
            i.properties.splice(n, 1), e.setState({ data: a });
          }),
          (e.propertyChange = function (t, r, a) {
            var i = U({}, e.state.data),
              n = Object(f.b)(t, i);
            Object.assign(n, H({}, r, a)),
              !Object(m.isEmpty)(i.metadata) &&
                Object(m.has)(i.metadata, n.property) &&
                (i.metadata[n.property] = a),
              e.setState({ data: i }),
              Object(y.doAction)(
                "rank_math_property_changed",
                i,
                n,
                e.setState
              );
          }),
          (e.options = Object(m.get)(e.props.data, "metadata", {})),
          (e.state = {
            data: e.props.data,
            loading: !1,
            showNotice: !1,
            postId: rankMath.objectID,
          }),
          (e.setState = e.setState.bind(W(e))),
          (e.templateSaveCount = 0),
          (e.isEditingTemplate = Object(m.get)(
            rankMath,
            "isTemplateScreen",
            !1
          )),
          e
        );
      }
      return (
        (t = n),
        (r = [
          {
            key: "getWrapperClasses",
            value: function () {
              var e = Object(m.get)(rankMath, "knowledgegraphType", !1);
              e = !1 === e ? "empty" : "local-" + e;
              var t = Object(m.get)(this.props.data, "property", "");
              return (
                Object(m.isArray)(t) && (t = t.join("-")),
                (t = "schema-" + t.toLowerCase()),
                o()(
                  "schema-builder",
                  t,
                  H(
                    {
                      "schema-template-pre-defined":
                        "template" === this.options.type,
                      "schema-template-custom": "custom" === this.options.type,
                    },
                    "".concat(e),
                    "template" === this.options.type
                  )
                )
              );
            },
          },
          {
            key: "render",
            value: function () {
              var e = this;
              return wp.element.createElement(
                "form",
                { className: this.getWrapperClasses() },
                wp.element.createElement(M, {
                  data: this.state.data,
                  schema: this.state.data,
                  isPro: this.props.isPro,
                  parentId: null,
                  isMain: !0,
                  isArray: !1,
                  isCustom: "custom" === this.options.type,
                  actions: {
                    addGroup: this.addGroup,
                    addProperty: this.addProperty,
                    removeGroup: this.removeGroup,
                    removeProperty: this.removeProperty,
                    propertyChange: this.propertyChange,
                    duplicateGroup: this.duplicateGroup,
                    duplicateProperty: this.duplicateProperty,
                  },
                }),
                wp.element.createElement(
                  "div",
                  { className: "schema-builder-save-as" },
                  this.props.isPro &&
                    wp.element.createElement(
                      u.Fragment,
                      null,
                      "custom" !== this.options.type &&
                        wp.element.createElement(
                          h.Button,
                          {
                            isSecondary: !0,
                            onClick: function () {
                              return e.props.toggleMode(
                                e.props.id,
                                e.state.data
                              );
                            },
                          },
                          Object(d.__)("Advanced Editor", "rank-math")
                        ),
                      !this.isEditingTemplate &&
                        wp.element.createElement(
                          h.Button,
                          {
                            isSecondary: !0,
                            className: this.state.loading
                              ? "save-as-template saving"
                              : "save-as-template",
                            onClick: function () {
                              (e.templateSaveCount >= 1 &&
                                !confirm(
                                  Object(d.__)(
                                    "Each save will create a new template.",
                                    "rank-math"
                                  )
                                )) ||
                                ((e.templateSaveCount += 1),
                                e.props.saveTemplate(e.state.data, e.setState));
                            },
                          },
                          this.state.showNotice
                            ? Object(d.__)("Template saved.", "rank-math")
                            : Object(d.__)("Save as Template", "rank-math")
                        ),
                      this.state.showNotice &&
                        wp.element.createElement(
                          "div",
                          { className: "rank-math-save-template-confirmation" },
                          Object(d.__)("Template saved.", "rank-math")
                        )
                    ),
                  this.isEditingTemplate &&
                    wp.element.createElement(
                      h.Button,
                      {
                        isPrimary: !0,
                        className: "button",
                        onClick: function () {
                          return e.props.saveTemplate(
                            e.state.data,
                            e.setState,
                            e.state.postId
                          );
                        },
                      },
                      this.state.loading
                        ? Object(d.__)("Saving", "rank-math")
                        : this.state.showNotice
                        ? Object(d.__)("Saved", "rank-math")
                        : Object(d.__)("Save", "rank-math")
                    ),
                  !this.isEditingTemplate &&
                    wp.element.createElement(
                      h.Button,
                      {
                        isPrimary: !0,
                        className: "button",
                        onClick: function () {
                          return e.props.saveSchema(e.props.id, e.state.data);
                        },
                      },
                      "term" === rankMath.objectType
                        ? Object(d.__)("Save for this Term", "rank-math")
                        : Object(d.__)("Save for this Post", "rank-math")
                    )
                )
              );
            },
          },
        ]) && V(t.prototype, r),
        a && V(t, a),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        n
      );
    })(u.Component);
    (K.defaultProps = { query: null, fields: [], onQueryChange: null }),
      (K.propTypes = {
        query: i.a.object,
        fields: i.a.array.isRequired,
        onQueryChange: i.a.func,
      });
    t.a = Object(p.compose)(
      Object(b.withSelect)(function (e, t) {
        var r = e("rank-math").getEditingSchema(),
          a = e("rank-math").getEditSchemas();
        return U(
          U(U({}, t), r),
          {},
          { schemas: a, isPro: e("rank-math").isPro() }
        );
      }),
      Object(b.withDispatch)(function (e, t) {
        var r = t.onSave,
          a = void 0 !== r && r,
          i = t.isPro,
          n = t.schemas;
        return {
          toggleMode: function (t, r) {
            if (
              confirm(
                Object(d.__)(
                  "Are you sure you want to convert? You can't use simple mode for this edited Schema.",
                  "rank-math"
                )
              )
            ) {
              var a = U({}, r);
              (a.metadata.type = "custom"),
                e("rank-math").updateEditSchema(t, a);
            }
          },
          saveSchema: function (t, r) {
            var o = l()("form.schema-builder").get(0);
            if (o.checkValidity()) {
              i ||
                Object(m.forEach)(n, function (r, a) {
                  t !== a && e("rank-math").deleteSchema(a);
                });
              var s = Object(f.m)(r);
              e("rank-math").updateEditSchema(t, r),
                e("rank-math").saveSchema(t, s),
                a && a(t, s),
                e("rank-math").schemaUpdated(!0),
                e("rank-math").toggleSchemaTemplates(!1),
                e("rank-math").toggleSchemaEditor(!1);
            } else o.reportValidity();
          },
          saveTemplate: function (t, r, a) {
            e("rank-math").saveTemplate(Object(f.m)(t), r, a);
          },
        };
      })
    )(K);
  },
  function (e, t, r) {
    "use strict";
    var a = r(0),
      i = r(3),
      n = r(2),
      o = r(6),
      s = r(12),
      l = r(7),
      m = r(5),
      c = r(4),
      d = r(9),
      p = r(8),
      u = r.n(p),
      h = r(1),
      b = r(15);
    function y(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? y(Object(r), !0).forEach(function (t) {
              _(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : y(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function _(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var R = Object(l.compose)(
        Object(m.withSelect)(function (e, t) {
          var r = e("rank-math").isPro(),
            a = e("rank-math").getSchemas(),
            i = Object(h.findKey)(a, "metadata.isPrimary");
          return (
            (i = Object(h.isEmpty)(i) ? {} : { id: i, type: a[i]["@type"] }),
            f(f({}, t), {}, { primarySchema: i, isPro: r })
          );
        }),
        Object(m.withDispatch)(function (e, t) {
          var r = t.isPro,
            a = t.primarySchema,
            i = void 0 !== a && a,
            n = !(!r || !Object(h.isEmpty)(i));
          return (
            r || (n = !0),
            {
              addSchema: function (t) {
                var r = Object(h.uniqueId)("new-"),
                  a = Object(h.get)(t, "schema", !1);
                !1 === a &&
                  (a = {
                    "@type": t.type,
                    metadata: {
                      type: "template",
                      shortcode: "s-".concat(Object(d.v4)()),
                    },
                  }),
                  (a.metadata.isPrimary = n),
                  e("rank-math").setEditingSchemaId(r),
                  e("rank-math").updateEditSchema(r, Object(c.e)(a)),
                  e("rank-math").toggleSchemaEditor(!0);
              },
              editSchema: function (t) {
                e("rank-math").setEditingSchemaId(t),
                  e("rank-math").toggleSchemaEditor(!0);
              },
            }
          );
        })
      )(function (e) {
        var t = e.search,
          r = e.templates,
          o = e.isPro,
          s = e.addSchema,
          l = e.editSchema,
          m = e.primarySchema;
        "" !== t &&
          (r = r.filter(function (e) {
            return e.title.toLowerCase().includes(t);
          }));
        var c = m
          ? Object(i.applyFilters)("rank_math_schema_type", m.type)
          : "";
        return wp.element.createElement(
          "div",
          { className: "rank-math-schema-catalog" },
          r.map(function (e, t) {
            var r = !o && c === e.type,
              i = u()("rank-math-schema-item rank-math-use-schema row button", {
                "in-use": r,
              });
            return wp.element.createElement(
              "div",
              { id: "rank-math-schema-list-wrapper", key: t },
              wp.element.createElement(
                n.Button,
                {
                  key: t,
                  id: "rank-math-schema-item",
                  className: i,
                  href: "#",
                  isLink: !0,
                  onClick: function () {
                    return r ? l(m.id) : s(e);
                  },
                },
                wp.element.createElement("input", {
                  type: "radio",
                  name: "primarySchema",
                  value: e.type,
                  checked: c === e.type,
                  onChange: function () {
                    return s(e);
                  },
                }),
                wp.element.createElement(
                  "span",
                  { className: "rank-math-schema-name" },
                  wp.element.createElement("i", {
                    className: Object(b.a)(e.type),
                  }),
                  e.title
                ),
                wp.element.createElement(
                  "span",
                  { className: "button rank-math-schema-item-actions" },
                  wp.element.createElement("i", {
                    className: "rm-icon rm-icon-circle-plus",
                  }),
                  wp.element.createElement(
                    "span",
                    null,
                    Object(a.__)("Use", "rank-math")
                  )
                )
              )
            );
          })
        );
      }),
      O = r(18);
    function k(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == r) return;
          var a,
            i,
            n = [],
            o = !0,
            s = !1;
          try {
            for (
              r = r.call(e);
              !(o = (a = r.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              o = !0
            );
          } catch (e) {
            (s = !0), (i = e);
          } finally {
            try {
              o || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          }
          return n;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return j(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return j(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function j(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    var g = Object(l.compose)(
        Object(m.withSelect)(function (e) {
          return { isPro: e("rank-math").isPro() };
        })
      )(function (e) {
        var t,
          r = k(Object(s.useState)("global"), 2),
          l = r[0],
          m = r[1],
          d = k(Object(s.useState)(""), 2),
          p = d[0],
          u = d[1];
        return wp.element.createElement(
          o.Fragment,
          null,
          e.isPro && wp.element.createElement(O.a, null),
          wp.element.createElement(
            "h4",
            { className: "rank-math-schema-section-title" },
            Object(a.__)("Available Schema Types", "rank-math")
          ),
          wp.element.createElement(
            "div",
            { className: "rank-math-schema-filter" },
            wp.element.createElement(n.RadioControl, {
              selected: l,
              options: Object(i.applyFilters)(
                "rank_math_schema_template_sources",
                [
                  {
                    value: "global",
                    label: Object(a.__)("Schema Catalog", "rank-math"),
                  },
                ]
              ),
              onChange: m,
            }),
            wp.element.createElement(
              "div",
              { className: "rank-math-schema-search" },
              wp.element.createElement(n.TextControl, {
                value: p,
                onChange: u,
                placeholder: Object(a.__)("Search…", "rank-math"),
              })
            )
          ),
          wp.element.createElement(R, {
            templates:
              ((t = l),
              "global" === t
                ? c.k.getTemplates()
                : Object(i.applyFilters)(
                    "rank_math_schema_templates_by_source",
                    [],
                    t
                  )),
            search: p.toLowerCase(),
          })
        );
      }),
      v = function () {
        return wp.element.createElement(
          "div",
          {
            className: "components-panel__body rank-math-custom-schema-wrapper",
          },
          wp.element.createElement("img", {
            src: rankMath.customSchemaImage,
            alt: "",
            className: "custom-schema",
          }),
          wp.element.createElement(
            "div",
            { id: "rank-math-pro-cta", className: "center" },
            wp.element.createElement(
              "div",
              { className: "rank-math-cta-box blue-ticks width-60" },
              wp.element.createElement(
                "h3",
                null,
                Object(a.__)("Advanced Schema Builder", "rank-math")
              ),
              wp.element.createElement(
                "ul",
                null,
                wp.element.createElement(
                  "li",
                  null,
                  Object(a.__)(
                    "Possibility to create 700+ Schema Types",
                    "rank-math"
                  )
                ),
                wp.element.createElement(
                  "li",
                  null,
                  Object(a.__)("Import Schema from ANY website", "rank-math")
                ),
                wp.element.createElement(
                  "li",
                  null,
                  Object(a.__)("Create Advanced templates", "rank-math")
                )
              ),
              wp.element.createElement(
                "a",
                {
                  className: "button button-primary is-green",
                  href: "https://rankmath.com/pricing/?utm_source=Plugin&utm_medium=Custom+Builder&utm_campaign=WP",
                  rel: "noreferrer noopener",
                  target: "_blank",
                },
                Object(a.__)("Upgrade", "rank-math")
              )
            )
          )
        );
      };
    t.a = function () {
      return wp.element.createElement(
        n.TabPanel,
        {
          className: "rank-math-tabs rank-math-editor rank-math-schema-tabs",
          activeClass: "is-active",
          tabs: Object.values(
            ((e = {
              templates: {
                name: "templates",
                title: wp.element.createElement(
                  o.Fragment,
                  null,
                  wp.element.createElement("i", {
                    className: "rm-icon rm-icon-schema",
                  }),
                  wp.element.createElement(
                    "span",
                    null,
                    Object(a.__)("Schema Templates", "rank-math")
                  )
                ),
                view: g,
                className: "rank-math-tab-templates",
              },
              newSchema: {
                name: "new-schema",
                title: wp.element.createElement(
                  o.Fragment,
                  null,
                  wp.element.createElement("i", {
                    className: "rm-icon rm-icon-circle-plus",
                  }),
                  wp.element.createElement(
                    "span",
                    null,
                    Object(a.__)("Custom Schema", "rank-math")
                  )
                ),
                view: v,
                className: "rank-math-tab-new-schema",
              },
            }),
            Object(i.applyFilters)("rank_math_schema_templates_tabs", e))
          ),
        },
        function (e) {
          return wp.element.createElement(
            "div",
            {
              className:
                "components-panel__body rank-math-schema-tab-content-" + e.name,
            },
            Object(o.createElement)(e.view)
          );
        }
      );
      var e;
    };
  },
  function (e, t, r) {
    var a,
      i,
      n = r(20),
      o = r(21),
      s = 0,
      l = 0;
    e.exports = function (e, t, r) {
      var m = (t && r) || 0,
        c = t || [],
        d = (e = e || {}).node || a,
        p = void 0 !== e.clockseq ? e.clockseq : i;
      if (null == d || null == p) {
        var u = n();
        null == d && (d = a = [1 | u[0], u[1], u[2], u[3], u[4], u[5]]),
          null == p && (p = i = 16383 & ((u[6] << 8) | u[7]));
      }
      var h = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
        b = void 0 !== e.nsecs ? e.nsecs : l + 1,
        y = h - s + (b - l) / 1e4;
      if (
        (y < 0 && void 0 === e.clockseq && (p = (p + 1) & 16383),
        (y < 0 || h > s) && void 0 === e.nsecs && (b = 0),
        b >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (s = h), (l = b), (i = p);
      var f = (1e4 * (268435455 & (h += 122192928e5)) + b) % 4294967296;
      (c[m++] = (f >>> 24) & 255),
        (c[m++] = (f >>> 16) & 255),
        (c[m++] = (f >>> 8) & 255),
        (c[m++] = 255 & f);
      var _ = ((h / 4294967296) * 1e4) & 268435455;
      (c[m++] = (_ >>> 8) & 255),
        (c[m++] = 255 & _),
        (c[m++] = ((_ >>> 24) & 15) | 16),
        (c[m++] = (_ >>> 16) & 255),
        (c[m++] = (p >>> 8) | 128),
        (c[m++] = 255 & p);
      for (var R = 0; R < 6; ++R) c[m + R] = d[R];
      return t || o(c);
    };
  },
  function (e, t, r) {
    var a = r(20),
      i = r(21);
    e.exports = function (e, t, r) {
      var n = (t && r) || 0;
      "string" == typeof e &&
        ((t = "binary" === e ? new Array(16) : null), (e = null));
      var o = (e = e || {}).random || (e.rng || a)();
      if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t))
        for (var s = 0; s < 16; ++s) t[n + s] = o[s];
      return t || i(o);
    };
  },
  function (e, t, r) {
    "use strict";
    var a = r(29);
    function i() {}
    function n() {}
    (n.resetWarningCache = i),
      (e.exports = function () {
        function e(e, t, r, i, n, o) {
          if (o !== a) {
            var s = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((s.name = "Invariant Violation"), s);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var r = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: n,
          resetWarningCache: i,
        };
        return (r.PropTypes = r), r;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  ,
  ,
  function (e, t, r) {
    "use strict";
    r.r(t);
    var a = r(1),
      i = r(3),
      n = r(0),
      o = r(5),
      s = r(2),
      l = r(4);
    (window.rankMath = window.rankMath || {}),
      (window.rankMath.Helpers = window.rankMath.Helpers || {}),
      (window.rankMath.Helpers = {
        generateValidSchema: l.e,
        prettyJSON: l.l,
        processSchema: l.m,
      });
    r(19);
    var m = r(18),
      c = r(22),
      d = r(8),
      p = r.n(d),
      u = r(7),
      h = r(16),
      b = r(6),
      y = r(24),
      f = r(23),
      _ = function (e) {
        var t,
          r = e.selectedTab;
        return wp.element.createElement(
          s.TabPanel,
          {
            className: "rank-math-tabs rank-math-editor rank-math-schema-tabs",
            activeClass: "is-active",
            initialTabName: r,
            tabs: Object.values(
              ((t = {
                schemaBuilder: {
                  name: "schemaBuilder",
                  title: wp.element.createElement(
                    b.Fragment,
                    null,
                    wp.element.createElement(
                      "span",
                      null,
                      Object(n.__)("Edit", "rank-math")
                    )
                  ),
                  view: y.a,
                  className: "rank-math-tab-templates",
                },
                codeValidation: {
                  name: "codeValidation",
                  title: wp.element.createElement(
                    b.Fragment,
                    null,
                    wp.element.createElement(
                      "span",
                      null,
                      Object(n.__)("Code Validation", "rank-math")
                    )
                  ),
                  view: f.a,
                  className: "rank-math-tab-code-validation",
                },
              }),
              Object(i.applyFilters)("rank_math_schema_editor_tabs", t))
            ),
          },
          function (e) {
            return wp.element.createElement(
              "div",
              {
                className:
                  "components-panel__body rank-math-schema-tab-content-" +
                  e.name,
              },
              Object(b.createElement)(e.view)
            );
          }
        );
      };
    function R(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var O = Object(u.compose)(
        Object(o.withSelect)(function (e) {
          var t = e("rank-math").getEditingSchema();
          return {
            isOpen: e("rank-math").isSchemaEditorOpen(),
            selectedTab: e("rank-math").getEditorTab(),
            isCutomSchema: Object(a.get)(t, "data.metadata.type", !1),
          };
        }),
        Object(o.withDispatch)(function (e, t) {
          return {
            toggleModal: function () {
              e("rank-math").setEditorTab(""),
                e("rank-math").toggleSchemaEditor(!t.isOpen);
            },
          };
        })
      )(function (e) {
        var t,
          r = e.isOpen,
          a = void 0 !== r && r,
          i = e.toggleModal,
          o = e.selectedTab,
          l = e.isCutomSchema;
        if (!a) return null;
        var m = p()(
          "rank-math-modal rank-math-schema-generator rank-math-schema-modal",
          { "rank-math-schema-modal-no-map": "custom" === l }
        );
        return wp.element.createElement(
          s.Modal,
          {
            title: Object(n.__)("Schema Builder", "rank-math"),
            closeButtonLabel: Object(n.__)("Close", "rank-math"),
            shouldCloseOnClickOutside: !1,
            onRequestClose: i,
            className: m,
            overlayClassName: "rank-math-modal-overlay",
          },
          wp.element.createElement(
            s.KeyboardShortcuts,
            {
              shortcuts:
                ((t = {}),
                R(t, h.rawShortcut.ctrl("z"), function (e) {
                  return e.stopImmediatePropagation();
                }),
                R(t, h.rawShortcut.ctrlShift("z"), function (e) {
                  return e.stopImmediatePropagation();
                }),
                R(t, h.rawShortcut.primary("z"), function (e) {
                  return e.stopImmediatePropagation();
                }),
                R(t, h.rawShortcut.primaryShift("z"), function (e) {
                  return e.stopImmediatePropagation();
                }),
                t),
            },
            wp.element.createElement(
              "a",
              {
                href: "https://rankmath.com/kb/rich-snippets/?utm_source=Plugin&utm_medium=Schema%20Builder%20Header&utm_campaign=WP",
                rel: "noopener noreferrer",
                target: "_blank",
                title: Object(n.__)("More Info", "rank-math"),
                className: "rank-math-schema-info",
              },
              wp.element.createElement(s.Dashicon, { icon: "info" })
            ),
            wp.element.createElement(_, { selectedTab: o })
          )
        );
      }),
      k = r(25);
    function j(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var g = Object(u.compose)(
      Object(o.withSelect)(function (e) {
        return { isOpen: e("rank-math").isSchemaTemplatesOpen() };
      }),
      Object(o.withDispatch)(function (e, t) {
        return {
          toggleModal: function () {
            e("rank-math").toggleSchemaTemplates(!t.isOpen);
          },
        };
      })
    )(function (e) {
      var t,
        r = e.isOpen,
        a = void 0 !== r && r,
        i = e.toggleModal;
      return a
        ? wp.element.createElement(
            s.Modal,
            {
              title: Object(n.__)("Schema Generator", "rank-math"),
              closeButtonLabel: Object(n.__)("Close", "rank-math"),
              shouldCloseOnClickOutside: !1,
              onRequestClose: i,
              className:
                "rank-math-modal rank-math-schema-generator rank-math-schema-template-modal",
              overlayClassName: "rank-math-modal-overlay",
            },
            wp.element.createElement(
              s.KeyboardShortcuts,
              {
                shortcuts:
                  ((t = {}),
                  j(t, h.rawShortcut.ctrl("z"), function (e) {
                    return e.stopImmediatePropagation();
                  }),
                  j(t, h.rawShortcut.ctrlShift("z"), function (e) {
                    return e.stopImmediatePropagation();
                  }),
                  j(t, h.rawShortcut.primary("z"), function (e) {
                    return e.stopImmediatePropagation();
                  }),
                  j(t, h.rawShortcut.primaryShift("z"), function (e) {
                    return e.stopImmediatePropagation();
                  }),
                  t),
              },
              wp.element.createElement(
                "a",
                {
                  href: "https://rankmath.com/kb/rich-snippets/?utm_source=Plugin&utm_medium=Schema%20Generator%20Header&utm_campaign=WP",
                  rel: "noopener noreferrer",
                  target: "_blank",
                  title: Object(n.__)("More Info", "rank-math"),
                  className: "rank-math-schema-info",
                },
                wp.element.createElement(s.Dashicon, { icon: "info" })
              ),
              wp.element.createElement(k.a, null)
            )
          )
        : null;
    });
    Object(c.a)();
    var v = function () {
        return wp.element.createElement(
          s.PanelBody,
          { initialOpen: !0, className: "rank-math-schema-in-use" },
          wp.element.createElement(
            "p",
            { className: "cmb2-metabox-description" },
            Object(n.__)(
              "Configure Schema Markup for your pages. Search engines, use structured data to display rich results in SERPs.",
              "rank-math"
            ),
            " ",
            wp.element.createElement(
              "a",
              {
                href: "https://rankmath.com/kb/rich-snippets/?utm_source=Plugin&utm_medium=Schema%20G%20Tab&utm_campaign=WP",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              Object(n.__)("Learn more.", "rank-math")
            )
          ),
          wp.element.createElement(m.a, null),
          wp.element.createElement(
            s.Button,
            {
              isPrimary: !0,
              onClick: function () {
                return Object(o.dispatch)("rank-math").toggleSchemaTemplates(
                  !0
                );
              },
            },
            Object(n.__)("Schema Generator", "rank-math")
          ),
          wp.element.createElement(O, null),
          wp.element.createElement(g, null)
        );
      },
      A = r(15),
      w = Object(o.withSelect)(function (e) {
        var t = e("rank-math").getSchemas();
        return {
          type: (function () {
            if (Object(a.isEmpty)(t)) return "off";
            var e = Object.keys(t);
            return Object(a.get)(t, [e[0], "@type"]);
          })(),
        };
      })(function (e) {
        var t = e.type;
        return wp.element.createElement(
          b.Fragment,
          null,
          wp.element.createElement("i", { className: Object(A.a)(t) }),
          wp.element.createElement(
            "span",
            null,
            Object(n.__)("Schema", "rank-math")
          )
        );
      });
    Object(i.addFilter)("rank_math_sidebar_tabs", "rank-math", function (e) {
      return (
        rankMath.canUser.snippet &&
          !Object(a.isUndefined)(rankMath.schemas) &&
          e.splice(2, 0, {
            name: "schema",
            title: wp.element.createElement(w, null),
            view: v,
            className: "rank-math-schema-tab",
          }),
        e
      );
    });
  },
]);
