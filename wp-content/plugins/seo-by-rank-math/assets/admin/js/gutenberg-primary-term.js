!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
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
    r((r.s = 78));
})({
  0: function (e, t) {
    e.exports = wp.i18n;
  },
  1: function (e, t) {
    e.exports = lodash;
  },
  13: function (e, t) {
    e.exports = wp.apiFetch;
  },
  2: function (e, t) {
    e.exports = wp.data;
  },
  3: function (e, t) {
    e.exports = jQuery;
  },
  30: function (e, t, r) {
    "use strict";
    var n = r(1),
      o = r(0),
      i = r(13),
      a = r.n(i),
      c = r(9),
      u = r(5),
      s = r(2),
      l = r(4);
    function f(e) {
      return (
        (f =
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
        f(e)
      );
    }
    function p(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function m(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function y(e, t) {
      return (
        (y = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        y(e, t)
      );
    }
    function d(e) {
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
          n = v(e);
        if (t) {
          var o = v(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return h(this, r);
      };
    }
    function h(e, t) {
      if (t && ("object" === f(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return b(e);
    }
    function b(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function v(e) {
      return (
        (v = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        v(e)
      );
    }
    var T = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && y(e, t);
      })(f, e);
      var t,
        r,
        i,
        u = d(f);
      function f() {
        var e;
        return (
          p(this, f),
          ((e = u.apply(this, arguments)).onChange = e.onChange.bind(b(e))),
          (e.state = { loading: !0, availableTerms: [], selectedTerms: [] }),
          e
        );
      }
      return (
        (t = f),
        (r = [
          {
            key: "componentDidMount",
            value: function () {
              this.fetchTerms();
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              Object(n.invoke)(this.fetchRequest, ["abort"]);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e, t) {
              if (
                e.selectedTermIds.length < this.props.selectedTermIds.length
              ) {
                var r = Object(n.difference)(
                  this.props.selectedTermIds,
                  e.selectedTermIds
                )[0];
                if (!this.termIsAvailable(r)) return void this.fetchTerms();
              }
              e.selectedTermIds !== this.props.selectedTermIds &&
                this.updateSelectedTerms(
                  this.state.availableTerms,
                  this.props.selectedTermIds
                ),
                t.selectedTerms !== this.state.selectedTerms &&
                  this.handleSelectedTermsChange();
            },
          },
          {
            key: "termIsAvailable",
            value: function (e) {
              return !!this.state.availableTerms.find(function (t) {
                return t.id === e;
              });
            },
          },
          {
            key: "updateSelectedTerms",
            value: function (e, t) {
              this.setState({ selectedTerms: this.filterSelectedTerms(e, t) });
            },
          },
          {
            key: "handleSelectedTermsChange",
            value: function () {
              var e = this.state.selectedTerms,
                t = this.props.primaryTermID;
              e.find(function (e) {
                return e.id === t;
              }) || this.onChange(e.length ? e[0].id : "");
            },
          },
          {
            key: "fetchTerms",
            value: function () {
              var e = this,
                t = this.props.taxonomy;
              t &&
                ((this.fetchRequest = a()({
                  path: Object(c.addQueryArgs)("/wp/v2/".concat(t.rest_base), {
                    per_page: -1,
                    orderby: "count",
                    order: "desc",
                    _fields: "id,name",
                  }),
                })),
                this.fetchRequest.then(
                  function (t) {
                    (e.fetchRequest = null),
                      e.setState({
                        loading: !1,
                        availableTerms: t,
                        selectedTerms: e.filterSelectedTerms(
                          t,
                          e.props.selectedTermIds
                        ),
                      });
                  },
                  function (t) {
                    "abort" !== t.statusText &&
                      ((e.fetchRequest = null), e.setState({ loading: !1 }));
                  }
                ));
            },
          },
          {
            key: "filterSelectedTerms",
            value: function (e, t) {
              return e.filter(function (e) {
                return t.includes(e.id);
              });
            },
          },
          {
            key: "onChange",
            value: function (e) {
              Object(s.dispatch)("rank-math").updatePrimaryTermID(
                e,
                this.props.taxonomy.slug
              );
            },
          },
          {
            key: "shouldComponentUpdate",
            value: function (e, t) {
              return (
                this.props.selectedTermIds !== e.selectedTermIds ||
                this.props.primaryTermID !== e.primaryTermID ||
                this.state.selectedTerms !== t.selectedTerms
              );
            },
          },
          {
            key: "render",
            value: function () {
              return this.state.selectedTerms.length < 2
                ? null
                : this.state.loading
                ? [
                    wp.element.createElement(l.Spinner, { key: "spinner" }),
                    wp.element.createElement(
                      "p",
                      { key: "spinner-text" },
                      "Loading"
                    ),
                  ]
                : wp.element.createElement(l.SelectControl, {
                    label: Object(o.__)("Select Primary Term", "rank-math"),
                    value: this.props.primaryTermID,
                    options: this.state.selectedTerms.map(function (e) {
                      return { value: e.id, label: Object(n.unescape)(e.name) };
                    }),
                    onChange: this.onChange,
                  });
            },
          },
        ]) && m(t.prototype, r),
        i && m(t, i),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        f
      );
    })(u.Component);
    t.a = T;
  },
  4: function (e, t) {
    e.exports = wp.components;
  },
  5: function (e, t) {
    e.exports = wp.element;
  },
  6: function (e, t) {
    e.exports = wp.hooks;
  },
  78: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(3),
      o = r.n(n),
      i = r(6),
      a = r(5),
      c = r(4),
      u = r(2);
    function s(e) {
      return (
        (s =
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
        s(e)
      );
    }
    function l(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function f(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function p(e, t) {
      return (
        (p = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        p(e, t)
      );
    }
    function m(e) {
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
          n = d(e);
        if (t) {
          var o = d(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return y(this, r);
      };
    }
    function y(e, t) {
      if (t && ("object" === s(t) || "function" == typeof t)) return t;
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
    function d(e) {
      return (
        (d = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        d(e)
      );
    }
    var h = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && p(e, t);
        })(a, e);
        var t,
          r,
          n,
          i = m(a);
        function a() {
          return l(this, a), i.apply(this, arguments);
        }
        return (
          (t = a),
          (r = [
            {
              key: "handleSelectedTermsChange",
              value: function () {
                var e = this.state.selectedTerms,
                  t = parseInt(this.props.primaryTermID);
                e.find(function (e) {
                  return e.id === t;
                }) || this.onChange(e.length ? e[0].id : "");
              },
            },
            {
              key: "onChange",
              value: function (e) {
                (e = parseInt(e)),
                  (rankMath.assessor.serpData.primaryTerm = e),
                  o()("#rank_math_primary_" + this.props.taxonomy.slug).val(e),
                  Object(u.dispatch)("core/editor").editPost({
                    meta: { refreshMe: "refreshUI" },
                  });
              },
            },
          ]) && f(t.prototype, r),
          n && f(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          a
        );
      })(r(30).a),
      b = Object(u.withSelect)(function (e, t) {
        var r = t.slug,
          n = e("core/editor").getEditedPostAttribute,
          i = n("meta"),
          a = e("core").getTaxonomy(r);
        return {
          taxonomy: a,
          meta: i,
          selectedTermIds: a ? n(a.rest_base) : [],
          primaryTermID: o()("#rank_math_primary_" + a.slug).val(),
        };
      })(h),
      v = function (e) {
        var t = e.TermComponent;
        return (function (e) {
          return (
            !1 !== rankMath.assessor.primaryTaxonomy &&
            e.slug === rankMath.assessor.primaryTaxonomy.name
          );
        })(e)
          ? wp.element.createElement(
              a.Fragment,
              null,
              wp.element.createElement(t, e),
              wp.element.createElement(
                c.PanelRow,
                { className: "rank-math-primary-term-picker" },
                wp.element.createElement(b, e)
              )
            )
          : wp.element.createElement(t, e);
      };
    function T() {
      return (
        (T = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        T.apply(this, arguments)
      );
    }
    function g(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function w(e, t, r) {
      return (
        t && g(e.prototype, t),
        r && g(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    var O = w(function e() {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        Object(i.addFilter)(
          "editor.PostTaxonomyType",
          "rank-math",
          function (e) {
            return function (t) {
              return wp.element.createElement(v, T({ TermComponent: e }, t));
            };
          }
        );
    });
    o()(document).ready(function () {
      window.rankMathEditor = new O();
    });
  },
  9: function (e, t) {
    e.exports = wp.url;
  },
});
