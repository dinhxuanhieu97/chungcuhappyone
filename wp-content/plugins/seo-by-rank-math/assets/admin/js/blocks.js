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
    n((n.s = 73));
})({
  0: function (e, t) {
    e.exports = wp.i18n;
  },
  1: function (e, t) {
    e.exports = lodash;
  },
  11: function (e, t) {
    e.exports = wp.blockEditor;
  },
  12: function (e, t, n) {
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
                var i = a.apply(null, r);
                i && e.push(i);
              }
            } else if ("object" === o)
              if (r.toString === Object.prototype.toString)
                for (var l in r) n.call(r, l) && r[l] && e.push(l);
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
  19: function (e, t) {
    e.exports = wp.blocks;
  },
  2: function (e, t) {
    e.exports = wp.data;
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
  73: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1),
      a = n(19),
      o = wp.element.createElement(
        "svg",
        {
          viewBox: "0 0 462.03 462.03",
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
        },
        wp.element.createElement(
          "g",
          null,
          wp.element.createElement("path", {
            d: "m462 234.84-76.17 3.43 13.43 21-127 81.18-126-52.93-146.26 60.97 10.14 24.34 136.1-56.71 128.57 54 138.69-88.61 13.43 21z",
          }),
          wp.element.createElement("path", {
            d: "m54.1 312.78 92.18-38.41 4.49 1.89v-54.58h-96.67zm210.9-223.57v235.05l7.26 3 89.43-57.05v-181zm-105.44 190.79 96.67 40.62v-165.19h-96.67z",
          })
        )
      ),
      i = n(0),
      l = {
        attributes: {
          questions: [
            {
              visible: !0,
              titleWrapper: "div",
              title: "Question",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ],
        },
      },
      s = n(5),
      c = n(4),
      u = n(11),
      p = n(2);
    function m(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(n), !0).forEach(function (t) {
              b(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function b(e, t, n) {
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
    var h = Object(p.withSelect)(function (e, t) {
        var n = (0, e("core/block-editor").getSettings)().imageSizes;
        return f(f({}, t), {}, { imageSizes: n });
      })(function (e) {
        var t = e.imageSizes,
          n = e.attributes,
          a = e.setAttributes,
          o = (function (e) {
            return Object(r.map)(e, function (e) {
              var t = e.name;
              return { value: e.slug, label: t };
            });
          })(t);
        return wp.element.createElement(
          u.InspectorControls,
          { key: "inspector" },
          wp.element.createElement(
            c.PanelBody,
            { title: Object(i.__)("FAQ Options", "rank-math") },
            wp.element.createElement(c.SelectControl, {
              label: Object(i.__)("List Style", "rank-math"),
              value: n.listStyle,
              options: [
                { value: "", label: Object(i.__)("None", "rank-math") },
                {
                  value: "numbered",
                  label: Object(i.__)("Numbered", "rank-math"),
                },
                {
                  value: "unordered",
                  label: Object(i.__)("Unordered", "rank-math"),
                },
              ],
              onChange: function (e) {
                a({ listStyle: e });
              },
            }),
            wp.element.createElement(c.SelectControl, {
              label: Object(i.__)("Title Wrapper", "rank-math"),
              value: n.titleWrapper,
              options: [
                { value: "h2", label: Object(i.__)("H2", "rank-math") },
                { value: "h3", label: Object(i.__)("H3", "rank-math") },
                { value: "h4", label: Object(i.__)("H4", "rank-math") },
                { value: "h5", label: Object(i.__)("H5", "rank-math") },
                { value: "h6", label: Object(i.__)("H6", "rank-math") },
                { value: "p", label: Object(i.__)("P", "rank-math") },
                { value: "div", label: Object(i.__)("DIV", "rank-math") },
              ],
              onChange: function (e) {
                a({ titleWrapper: e });
              },
            }),
            wp.element.createElement(c.SelectControl, {
              label: Object(i.__)("Image Size", "rank-math"),
              value: n.sizeSlug,
              options: o,
              onChange: function (e) {
                a({ sizeSlug: e });
              },
            })
          ),
          wp.element.createElement(
            c.PanelBody,
            { title: Object(i.__)("Styling Options", "rank-math") },
            wp.element.createElement(c.TextControl, {
              label: Object(i.__)("Title Wrapper CSS Class(es)", "rank-math"),
              value: n.titleCssClasses,
              onChange: function (e) {
                a({ titleCssClasses: e });
              },
            }),
            wp.element.createElement(c.TextControl, {
              label: Object(i.__)("Content Wrapper CSS Class(es)", "rank-math"),
              value: n.contentCssClasses,
              onChange: function (e) {
                a({ contentCssClasses: e });
              },
            }),
            wp.element.createElement(c.TextControl, {
              label: Object(i.__)("List CSS Class(es)", "rank-math"),
              value: n.listCssClasses,
              onChange: function (e) {
                a({ listCssClasses: e });
              },
            })
          )
        );
      }),
      y = n(12),
      d = n.n(y);
    function v(e, t) {
      var n = Object(p.select)("core").getMedia,
        a = e ? n(e) : null;
      return null === a
        ? null
        : t
        ? (function (e, t) {
            return (
              Object(r.get)(e, ["media_details", "sizes", t, "source_url"]) ||
              Object(r.get)(e, ["media_details", "sizes", "full", "source_url"])
            );
          })(a, t)
        : a;
    }
    var g = Object(p.withSelect)(function (e, t) {
        var n = t.imageID,
          r = t.sizeSlug;
        return { imageUrl: n ? v(n, r) : null };
      })(function (e) {
        var t = e.imageUrl;
        return t ? wp.element.createElement("img", { src: t, alt: "" }) : null;
      }),
      O = function (e) {
        var t = e.imageID,
          n = e.sizeSlug,
          r = e.open,
          a = e.removeImage,
          o = e.addButtonLabel,
          l = void 0 === o ? Object(i.__)("Add Image", "rank-math") : o;
        return wp.element.createElement(
          "div",
          { className: "rank-math-media-placeholder" },
          t > 0 && wp.element.createElement(g, { imageID: t, sizeSlug: n }),
          t > 0
            ? wp.element.createElement(c.Button, {
                icon: "edit",
                className: "rank-math-replace-image",
                onClick: r,
              })
            : wp.element.createElement(
                c.Button,
                { onClick: r, className: "rank-math-add-image", isPrimary: !0 },
                l
              ),
          t > 0 &&
            wp.element.createElement(c.Button, {
              icon: "no-alt",
              className: "rank-math-delete-image",
              onClick: a,
            })
        );
      },
      k = n(6);
    function _(e) {
      return (
        (_ =
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
        _(e)
      );
    }
    function w(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return j(e);
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
          if ("string" == typeof e) return j(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return j(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function j(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function S(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function C(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function E(e, t) {
      return (
        (E = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        E(e, t)
      );
    }
    function P(e) {
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
          r = x(e);
        if (t) {
          var a = x(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return A(this, n);
      };
    }
    function A(e, t) {
      if (t && ("object" === _(t) || "function" == typeof t)) return t;
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
    function x(e) {
      return (
        (x = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        x(e)
      );
    }
    var N = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && E(e, t);
        })(o, e);
        var t,
          n,
          r,
          a = P(o);
        function o() {
          var e;
          S(this, o);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            ((e = a.call.apply(a, [this].concat(n))).toggleVisibility =
              function () {
                var t = e.props,
                  n = t.setAttributes,
                  r = t.index,
                  a = w(e.props.questions);
                (a[r].visible = !e.props.visible), n({ questions: a });
              }),
            (e.deleteQuestion = function () {
              var t = e.props,
                n = t.setAttributes,
                r = t.index,
                a = w(e.props.questions);
              a.splice(r, 1), n({ questions: a });
            }),
            e
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.title,
                  r = t.content,
                  a = t.visible,
                  o = t.imageID,
                  l = t.sizeSlug,
                  s = t.titleWrapper,
                  p = t.titleCssClasses,
                  m = t.contentCssClasses,
                  f = d()("rank-math-question-wrapper", {
                    "question-not-visible": !a,
                  });
                return wp.element.createElement(
                  "div",
                  { className: f },
                  wp.element.createElement(
                    "div",
                    { className: "rank-math-item-header" },
                    wp.element.createElement(u.RichText, {
                      tagName: s,
                      className:
                        "rank-math-faq-question rank-math-block-title" + p,
                      value: n,
                      onChange: function (t) {
                        e.setQuestionProp("title", t);
                      },
                      placeholder: Object(i.__)("Question…", "rank-math"),
                    }),
                    wp.element.createElement(
                      "div",
                      { className: "rank-math-block-actions" },
                      Object(k.applyFilters)(
                        "rank_math_block_faq_actions",
                        "",
                        this.props
                      ),
                      wp.element.createElement(c.Button, {
                        className: "rank-math-item-visbility",
                        icon: a ? "visibility" : "hidden",
                        onClick: this.toggleVisibility,
                        title: Object(i.__)("Hide Question", "rank-math"),
                      }),
                      wp.element.createElement(c.Button, {
                        icon: "trash",
                        className: "rank-math-item-delete",
                        onClick: this.deleteQuestion,
                        title: Object(i.__)("Delete Question", "rank-math"),
                      })
                    )
                  ),
                  wp.element.createElement(
                    "div",
                    { className: "rank-math-item-content" },
                    wp.element.createElement(u.RichText, {
                      tagName: "div",
                      className: "rank-math-faq-answer " + m,
                      value: r,
                      onChange: function (t) {
                        e.setQuestionProp("content", t);
                      },
                      placeholder: Object(i.__)(
                        "Enter the answer to the question",
                        "rank-math"
                      ),
                    }),
                    wp.element.createElement(u.MediaUpload, {
                      allowedTypes: ["image"],
                      multiple: !1,
                      value: o,
                      render: function (t) {
                        var n = t.open;
                        return wp.element.createElement(O, {
                          imageID: o,
                          sizeSlug: l,
                          open: n,
                          removeImage: function () {
                            e.setQuestionProp("imageID", 0);
                          },
                        });
                      },
                      onSelect: function (t) {
                        e.setQuestionProp("imageID", t.id);
                      },
                    })
                  )
                );
              },
            },
            {
              key: "setQuestionProp",
              value: function (e, t) {
                var n = this.props,
                  r = n.setAttributes,
                  a = n.index,
                  o = w(this.props.questions);
                (o[a][e] = t), r({ questions: o });
              },
            },
          ]) && C(t.prototype, n),
          r && C(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(s.Component),
      T = N,
      D = function (e) {
        return "".concat(e, "-").concat(new Date().getTime());
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
    function R() {
      return (
        (R = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        R.apply(this, arguments)
      );
    }
    function q(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return z(e);
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
          if ("string" == typeof e) return z(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return z(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function z(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function B(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function M(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function W(e, t) {
      return (
        (W = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        W(e, t)
      );
    }
    function Q(e) {
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
          r = U(e);
        if (t) {
          var a = U(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return H(this, n);
      };
    }
    function H(e, t) {
      if (t && ("object" === I(t) || "function" == typeof t)) return t;
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
    function U(e) {
      return (
        (U = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        U(e)
      );
    }
    var F = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && W(e, t);
        })(l, e);
        var t,
          n,
          a,
          o = Q(l);
        function l() {
          var e;
          B(this, l);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            ((e = o.call.apply(o, [this].concat(n))).addNew = function () {
              var t = q(e.props.attributes.questions);
              t.push({
                id: D("faq-question"),
                title: "",
                content: "",
                visible: !0,
              }),
                e.props.setAttributes({ questions: t });
            }),
            e
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.className,
                  r = t.isSelected,
                  a = this.props.attributes.textAlign;
                return wp.element.createElement(
                  "div",
                  { id: "rank-math-faq", className: "rank-math-block " + n },
                  r && wp.element.createElement(h, this.props),
                  r &&
                    wp.element.createElement(
                      s.Fragment,
                      null,
                      wp.element.createElement(
                        u.BlockControls,
                        null,
                        wp.element.createElement(u.AlignmentToolbar, {
                          value: a,
                          onChange: function (t) {
                            return e.props.setAttributes({ textAlign: t });
                          },
                        })
                      )
                    ),
                  wp.element.createElement(
                    "ul",
                    { style: { textAlign: a } },
                    this.renderQuestions()
                  ),
                  wp.element.createElement(
                    c.Button,
                    { isPrimary: !0, onClick: this.addNew },
                    Object(i.__)("Add New FAQ", "rank-math")
                  ),
                  wp.element.createElement(
                    "a",
                    {
                      href: "https://rankmath.com/kb/faq-schema-block/",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      title: Object(i.__)("More Info", "rank-math"),
                      className: "rank-math-block-info",
                    },
                    wp.element.createElement(c.Dashicon, { icon: "info" })
                  )
                );
              },
            },
            {
              key: "renderQuestions",
              value: function () {
                var e = this,
                  t = this.props.attributes,
                  n = t.sizeSlug,
                  a = t.titleWrapper,
                  o = t.titleCssClasses,
                  i = t.contentCssClasses,
                  l = this.props.attributes.questions;
                return (
                  Object(r.isEmpty)(l) &&
                    (l = [
                      {
                        id: D("faq-question"),
                        title: "",
                        content: "",
                        visible: !0,
                      },
                    ]),
                  l.map(function (t, r) {
                    return wp.element.createElement(
                      "li",
                      { key: t.id },
                      wp.element.createElement(
                        T,
                        R({}, t, {
                          index: r,
                          key: t.id + "-question",
                          questions: l,
                          setAttributes: e.props.setAttributes,
                          sizeSlug: n,
                          titleWrapper: a,
                          titleCssClasses: o,
                          contentCssClasses: i,
                        })
                      )
                    );
                  })
                );
              },
            },
          ]) && M(t.prototype, n),
          a && M(t, a),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          l
        );
      })(s.Component),
      L = F,
      V = {
        from: [
          {
            type: "block",
            blocks: ["yoast/faq-block"],
            transform: function (e) {
              var t = {
                titleWrapper: "h3",
                questions: e.questions.map(function (e) {
                  return {
                    title: e.jsonQuestion,
                    content: e.jsonAnswer,
                    visible: !0,
                  };
                }),
                className: e.className,
              };
              return Object(a.createBlock)("rank-math/faq-block", t);
            },
          },
        ],
      },
      $ = function (e) {
        var t = e.attributes,
          n = t.questions,
          a = t.titleWrapper;
        return Object(r.isEmpty)(n)
          ? null
          : wp.element.createElement(
              "div",
              null,
              n.map(function (e, t) {
                return Object(r.isEmpty)(e.title) ||
                  Object(r.isEmpty)(e.content) ||
                  !1 === e.visible
                  ? null
                  : wp.element.createElement(
                      "div",
                      { className: "rank-math-faq-item", key: t },
                      wp.element.createElement(u.RichText.Content, {
                        tagName: a,
                        value: e.title,
                        className: "rank-math-question",
                      }),
                      wp.element.createElement(u.RichText.Content, {
                        tagName: "div",
                        value: e.content,
                        className: "rank-math-answer",
                      })
                    );
              })
            );
      },
      Y = {
        attributes: {
          steps: [
            {
              visible: !0,
              titleWrapper: "div",
              title: "Step # 1",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ],
        },
      };
    function G(e) {
      return (
        (G =
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
        G(e)
      );
    }
    function J(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return K(e);
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
          if ("string" == typeof e) return K(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return K(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function K(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function X(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Z(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function ee(e, t) {
      return (
        (ee = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        ee(e, t)
      );
    }
    function te(e) {
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
          r = re(e);
        if (t) {
          var a = re(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return ne(this, n);
      };
    }
    function ne(e, t) {
      if (t && ("object" === G(t) || "function" == typeof t)) return t;
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
    function re(e) {
      return (
        (re = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        re(e)
      );
    }
    var ae = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && ee(e, t);
        })(o, e);
        var t,
          n,
          r,
          a = te(o);
        function o() {
          var e;
          X(this, o);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            ((e = a.call.apply(a, [this].concat(n))).toggleVisibility =
              function () {
                var t = e.props,
                  n = t.setAttributes,
                  r = t.index,
                  a = J(e.props.steps);
                (a[r].visible = !e.props.visible), n({ steps: a });
              }),
            (e.deleteStep = function () {
              var t = e.props,
                n = t.setAttributes,
                r = t.index,
                a = J(e.props.steps);
              a.splice(r, 1), n({ steps: a });
            }),
            e
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.title,
                  r = t.content,
                  a = t.visible,
                  o = t.imageID,
                  l = t.sizeSlug,
                  s = t.titleWrapper,
                  p = t.titleCssClasses,
                  m = t.contentCssClasses,
                  f = d()("rank-math-step-wrapper", { "step-not-visible": !a });
                return wp.element.createElement(
                  "div",
                  { className: f },
                  wp.element.createElement(
                    "div",
                    { className: "rank-math-item-header" },
                    wp.element.createElement(u.RichText, {
                      tagName: s,
                      className:
                        "rank-math-howto-step-title rank-math-block-title" + p,
                      value: n,
                      onChange: function (t) {
                        e.setStepProp("title", t);
                      },
                      placeholder: Object(i.__)(
                        "Enter a step title",
                        "rank-math"
                      ),
                    }),
                    wp.element.createElement(
                      "div",
                      { className: "rank-math-block-actions" },
                      wp.element.createElement(c.Button, {
                        className: "rank-math-item-visbility",
                        icon: a ? "visibility" : "hidden",
                        onClick: this.toggleVisibility,
                        title: Object(i.__)("Hide Step", "rank-math"),
                      }),
                      wp.element.createElement(c.Button, {
                        icon: "trash",
                        className: "rank-math-item-delete",
                        onClick: this.deleteStep,
                        title: Object(i.__)("Delete Step", "rank-math"),
                      })
                    )
                  ),
                  wp.element.createElement(u.MediaUpload, {
                    allowedTypes: ["image"],
                    multiple: !1,
                    value: o,
                    render: function (t) {
                      var n = t.open;
                      return wp.element.createElement(O, {
                        imageID: o,
                        sizeSlug: l,
                        open: n,
                        addButtonLabel: Object(i.__)(
                          "Add Step Image",
                          "rank-math"
                        ),
                        removeImage: function () {
                          e.setStepProp("imageID", 0);
                        },
                      });
                    },
                    onSelect: function (t) {
                      e.setStepProp("imageID", t.id);
                    },
                  }),
                  wp.element.createElement(u.RichText, {
                    tagName: "div",
                    className: "rank-math-howto-step-content" + m,
                    value: r,
                    onChange: function (t) {
                      e.setStepProp("content", t);
                    },
                    placeholder: Object(i.__)(
                      "Enter a step description",
                      "rank-math"
                    ),
                  })
                );
              },
            },
            {
              key: "setStepProp",
              value: function (e, t) {
                var n = this.props,
                  r = n.setAttributes,
                  a = n.index,
                  o = J(this.props.steps);
                (o[a][e] = t), r({ steps: o });
              },
            },
          ]) && Z(t.prototype, n),
          r && Z(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(s.Component),
      oe = ae;
    function ie(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function le(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ie(Object(n), !0).forEach(function (t) {
              se(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ie(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function se(e, t, n) {
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
    var ce = Object(p.withSelect)(function (e, t) {
      var n = (0, e("core/block-editor").getSettings)().imageSizes;
      return le(le({}, t), {}, { imageSizes: n });
    })(function (e) {
      var t = e.imageSizes,
        n = e.attributes,
        a = e.setAttributes,
        o = (function (e) {
          return Object(r.map)(e, function (e) {
            var t = e.name;
            return { value: e.slug, label: t };
          });
        })(t);
      return wp.element.createElement(
        u.InspectorControls,
        { key: "inspector" },
        wp.element.createElement(
          c.PanelBody,
          { title: Object(i.__)("HowTo Options", "rank-math") },
          wp.element.createElement(c.SelectControl, {
            label: Object(i.__)("List Style", "rank-math"),
            value: n.listStyle,
            options: [
              { value: "", label: Object(i.__)("None", "rank-math") },
              {
                value: "numbered",
                label: Object(i.__)("Numbered", "rank-math"),
              },
              {
                value: "unordered",
                label: Object(i.__)("Unordered", "rank-math"),
              },
            ],
            onChange: function (e) {
              a({ listStyle: e });
            },
          }),
          wp.element.createElement(c.SelectControl, {
            label: Object(i.__)("Title Wrapper", "rank-math"),
            value: n.titleWrapper,
            options: [
              { value: "h2", label: Object(i.__)("H2", "rank-math") },
              { value: "h3", label: Object(i.__)("H3", "rank-math") },
              { value: "h4", label: Object(i.__)("H4", "rank-math") },
              { value: "h5", label: Object(i.__)("H5", "rank-math") },
              { value: "h6", label: Object(i.__)("H6", "rank-math") },
              { value: "p", label: Object(i.__)("P", "rank-math") },
              { value: "div", label: Object(i.__)("DIV", "rank-math") },
            ],
            onChange: function (e) {
              a({ titleWrapper: e });
            },
          }),
          wp.element.createElement(c.SelectControl, {
            label: Object(i.__)("Main Image Size", "rank-math"),
            value: n.mainSizeSlug,
            options: o,
            onChange: function (e) {
              a({ mainSizeSlug: e });
            },
          }),
          wp.element.createElement(c.SelectControl, {
            label: Object(i.__)("Image Size", "rank-math"),
            value: n.sizeSlug,
            options: o,
            onChange: function (e) {
              a({ sizeSlug: e });
            },
          })
        ),
        wp.element.createElement(
          c.PanelBody,
          { title: Object(i.__)("Styling Options", "rank-math") },
          wp.element.createElement(c.TextControl, {
            label: Object(i.__)(
              "Step Title Wrapper CSS Class(es)",
              "rank-math"
            ),
            value: n.titleCssClasses,
            onChange: function (e) {
              a({ titleCssClasses: e });
            },
          }),
          wp.element.createElement(c.TextControl, {
            label: Object(i.__)(
              "Step Content Wrapper CSS Class(es)",
              "rank-math"
            ),
            value: n.contentCssClasses,
            onChange: function (e) {
              a({ contentCssClasses: e });
            },
          }),
          wp.element.createElement(c.TextControl, {
            label: Object(i.__)("Step List CSS Class(es)", "rank-math"),
            value: n.listCssClasses,
            onChange: function (e) {
              a({ listCssClasses: e });
            },
          })
        )
      );
    });
    function ue(e) {
      return (
        (ue =
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
        ue(e)
      );
    }
    function pe() {
      return (
        (pe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        pe.apply(this, arguments)
      );
    }
    function me(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return fe(e);
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
          if ("string" == typeof e) return fe(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return fe(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function fe(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function be(e, t) {
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
    function ye(e, t) {
      return (
        (ye = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        ye(e, t)
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
          r = ge(e);
        if (t) {
          var a = ge(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return ve(this, n);
      };
    }
    function ve(e, t) {
      if (t && ("object" === ue(t) || "function" == typeof t)) return t;
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
    function ge(e) {
      return (
        (ge = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        ge(e)
      );
    }
    var Oe,
      ke = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && ye(e, t);
        })(l, e);
        var t,
          n,
          a,
          o = de(l);
        function l() {
          var e;
          be(this, l),
            ((e = o.apply(this, arguments)).addNew = function () {
              var t = e.props.attributes.steps,
                n = Object(r.isEmpty)(t) ? [] : me(t);
              n.push({
                id: D("howto-step"),
                title: "",
                content: "",
                visible: !0,
              }),
                e.props.setAttributes({ steps: n });
            }),
            (e.toggleDuration = function () {
              e.props.setAttributes({
                hasDuration: !e.props.attributes.hasDuration,
              });
            }),
            (e.onSelectImage = function (t) {
              (0, e.props.setAttributes)({ imageID: t.id });
            }),
            (e.removeImage = function () {
              (0, e.props.setAttributes)({ imageID: 0 });
            });
          var t = e.props.attributes.steps;
          return Object(r.isEmpty)(t) && e.addNew(), e;
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.className,
                  r = t.isSelected,
                  a = t.attributes,
                  o = t.setAttributes,
                  l = a.imageID,
                  p = a.mainSizeSlug,
                  m = a.textAlign;
                return wp.element.createElement(
                  "div",
                  { id: "rank-math-howto", className: "rank-math-block " + n },
                  r && wp.element.createElement(ce, this.props),
                  r &&
                    wp.element.createElement(
                      s.Fragment,
                      null,
                      wp.element.createElement(
                        u.BlockControls,
                        null,
                        wp.element.createElement(u.AlignmentToolbar, {
                          value: m,
                          onChange: function (t) {
                            return e.props.setAttributes({ textAlign: t });
                          },
                        })
                      )
                    ),
                  wp.element.createElement(u.MediaUpload, {
                    allowedTypes: ["image"],
                    multiple: !1,
                    value: l,
                    render: function (t) {
                      var n = t.open;
                      return wp.element.createElement(
                        "div",
                        { className: "rank-math-howto-final-image" },
                        wp.element.createElement(O, {
                          imageID: l,
                          sizeSlug: p,
                          open: n,
                          addButtonLabel: Object(i.__)(
                            "Add Final Image",
                            "rank-math"
                          ),
                          removeImage: e.removeImage,
                        })
                      );
                    },
                    onSelect: this.onSelectImage,
                  }),
                  wp.element.createElement(u.RichText, {
                    style: { textAlign: m },
                    tagName: "div",
                    className: "rank-math-howto-description",
                    value: a.description,
                    onChange: function (e) {
                      o({ description: e });
                    },
                    placeholder: Object(i.__)(
                      "Enter a main description",
                      "rank-math"
                    ),
                  }),
                  wp.element.createElement(
                    "div",
                    { className: "rank-math-howto-duration" },
                    wp.element.createElement(
                      "div",
                      {
                        className:
                          "components-base-control rank-math-howto-duration-label",
                      },
                      wp.element.createElement(
                        "span",
                        null,
                        Object(i.__)("Duration", "rank-math")
                      ),
                      wp.element.createElement(c.ToggleControl, {
                        checked: a.hasDuration,
                        onChange: this.toggleDuration,
                      })
                    ),
                    wp.element.createElement(
                      "div",
                      {
                        className:
                          "rank-math-howto-duration-fields" +
                          (a.hasDuration ? "" : " hidden"),
                      },
                      wp.element.createElement(c.TextControl, {
                        value: a.timeLabel,
                        placeholder: Object(i.__)("Total time:", "rank-math"),
                        onChange: function (e) {
                          o({ timeLabel: e });
                        },
                      }),
                      wp.element.createElement(c.TextControl, {
                        type: "number",
                        value: a.days,
                        placeholder: Object(i.__)("DD", "rank-math"),
                        onChange: function (e) {
                          o({ days: e });
                        },
                      }),
                      wp.element.createElement(c.TextControl, {
                        type: "number",
                        value: a.hours,
                        placeholder: Object(i.__)("HH", "rank-math"),
                        onChange: function (e) {
                          o({ hours: e });
                        },
                      }),
                      wp.element.createElement(c.TextControl, {
                        type: "number",
                        value: a.minutes,
                        placeholder: Object(i.__)("MM", "rank-math"),
                        onChange: function (e) {
                          o({ minutes: e });
                        },
                      })
                    ),
                    wp.element.createElement(
                      "div",
                      {
                        className:
                          "rank-math-howto-duration-instructions" +
                          (a.hasDuration ? "" : " hidden"),
                      },
                      Object(i.__)(
                        "Optional, use first field to describe the duration.",
                        "rank-math"
                      )
                    )
                  ),
                  Object(k.applyFilters)(
                    "rank_math_block_howto_data",
                    "",
                    this.props
                  ),
                  wp.element.createElement(
                    "ul",
                    { style: { textAlign: m } },
                    this.renderSteps()
                  ),
                  wp.element.createElement(
                    c.Button,
                    { isPrimary: !0, onClick: this.addNew },
                    Object(i.__)("Add New Step", "rank-math")
                  ),
                  wp.element.createElement(
                    "a",
                    {
                      href: "http://rankmath.com/blog/howto-schema/",
                      title: Object(i.__)("More Info", "rank-math"),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "rank-math-block-info",
                    },
                    wp.element.createElement(c.Dashicon, { icon: "info" })
                  )
                );
              },
            },
            {
              key: "renderSteps",
              value: function () {
                var e = this,
                  t = this.props.attributes,
                  n = t.steps,
                  a = t.sizeSlug,
                  o = t.titleWrapper,
                  i = t.titleCssClasses,
                  l = t.contentCssClasses;
                return Object(r.isEmpty)(n)
                  ? null
                  : n.map(function (t, r) {
                      return wp.element.createElement(
                        "li",
                        { key: t.id },
                        wp.element.createElement(
                          oe,
                          pe({}, t, {
                            index: r,
                            key: t.id + "-step",
                            steps: n,
                            setAttributes: e.props.setAttributes,
                            sizeSlug: a,
                            titleWrapper: o,
                            titleCssClasses: i,
                            contentCssClasses: l,
                          })
                        )
                      );
                    });
              },
            },
          ]) && he(t.prototype, n),
          a && he(t, a),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          l
        );
      })(s.Component),
      _e = ke,
      we = function (e) {
        var t = e.attributes,
          n = t.steps,
          a = t.titleWrapper;
        return Object(r.isEmpty)(n)
          ? null
          : wp.element.createElement(
              "div",
              null,
              n.map(function (e, t) {
                return !1 === e.visible
                  ? null
                  : wp.element.createElement(
                      "div",
                      { className: "rank-math-howto-step", key: t },
                      e.title &&
                        wp.element.createElement(u.RichText.Content, {
                          tagName: a,
                          value: e.title,
                          className: "rank-math-howto-title",
                        }),
                      e.content &&
                        wp.element.createElement(u.RichText.Content, {
                          tagName: "div",
                          value: e.content,
                          className: "rank-math-howto-content",
                        })
                    );
              })
            );
      },
      je = {
        from: [
          {
            type: "block",
            blocks: ["yoast/how-to-block"],
            transform: function (e) {
              var t = {
                steps: e.steps.map(function (e) {
                  return {
                    visible: !0,
                    id: D("howto-step"),
                    title: e.jsonName,
                    content: e.jsonText,
                  };
                }),
                titleWrapper: "h3",
                hasDuration: e.hasDuration,
                days: e.days,
                hours: e.hours,
                minutes: e.minutes,
                description: e.jsonDescription,
                className: e.className,
                listStyle: e.unorderedList ? "unordered" : "",
              };
              return Object(a.createBlock)("rank-math/howto-block", t);
            },
          },
        ],
      };
    Object(a.updateCategory)("rank-math-blocks", { icon: o }),
      (Oe = [
        Object(i.__)("FAQ", "rank-math"),
        Object(i.__)("Frequently Asked Questions", "rank-math"),
        Object(i.__)("Schema", "rank-math"),
        Object(i.__)("SEO", "rank-math"),
        Object(i.__)("Structured Data", "rank-math"),
        Object(i.__)("Yoast", "rank-math"),
        Object(i.__)("Rank Math", "rank-math"),
        Object(i.__)("Block", "rank-math"),
        Object(i.__)("Markup", "rank-math"),
        Object(i.__)("Rich Snippet", "rank-math"),
      ]),
      Object(a.registerBlockType)("rank-math/faq-block", {
        title: Object(i.__)("FAQ by Rank Math", "rank-math"),
        description: Object(i.__)(
          "Easily add Schema-ready, SEO-friendly, Frequently Asked Questions to your content.",
          "rank-math"
        ),
        category: "rank-math-blocks",
        icon: "editor-ul",
        keywords: Oe,
        attributes: {
          listStyle: { type: "string" },
          sizeSlug: { type: "string", default: "thumbnail" },
          titleWrapper: { type: "string", default: "h3" },
          questions: { type: "array" },
          textAlign: { type: "string", default: "" },
          listCssClasses: { type: "string", default: "" },
          titleCssClasses: { type: "string", default: "" },
          contentCssClasses: { type: "string", default: "" },
        },
        example: l,
        edit: L,
        save: $,
        transforms: V,
      }),
      (function () {
        var e = [
            Object(i.__)("HowTo", "rank-math"),
            Object(i.__)("Schema", "rank-math"),
            Object(i.__)("SEO", "rank-math"),
            Object(i.__)("Structured Data", "rank-math"),
            Object(i.__)("Yoast", "rank-math"),
            Object(i.__)("Rank Math", "rank-math"),
            Object(i.__)("Block", "rank-math"),
            Object(i.__)("Markup", "rank-math"),
            Object(i.__)("Rich Snippet", "rank-math"),
          ],
          t = Object(k.applyFilters)("rank_math_block_howto_attributes", {
            hasDuration: { type: "boolean" },
            days: { type: "string" },
            hours: { type: "string" },
            minutes: { type: "string" },
            description: { type: "string" },
            steps: { type: "array" },
            sizeSlug: { type: "string", default: "full" },
            imageID: { type: "integer" },
            mainSizeSlug: { type: "string", default: "full" },
            titleWrapper: { type: "string", default: "h3" },
            textAlign: { type: "string", default: "" },
            timeLabel: { type: "string" },
            listStyle: { type: "string" },
            listCssClasses: { type: "string", default: "" },
            titleCssClasses: { type: "string", default: "" },
            contentCssClasses: { type: "string", default: "" },
          });
        Object(a.registerBlockType)("rank-math/howto-block", {
          title: Object(i.__)("HowTo by Rank Math", "rank-math"),
          description: Object(i.__)(
            "Easily add Schema-ready, SEO-friendly, HowTo block to your content.",
            "rank-math"
          ),
          category: "rank-math-blocks",
          icon: "editor-ol",
          supports: { multiple: !1 },
          keywords: e,
          attributes: t,
          example: Y,
          edit: _e,
          save: we,
          transforms: je,
        });
      })(),
      "undefined" == typeof rankMath ||
        Object(r.isUndefined)(rankMath.canUser) ||
        !rankMath.canUser.snippet ||
        Object(r.isUndefined)(rankMath.schemas) ||
        (function () {
          var e = [
            Object(i.__)("Schema", "rank-math"),
            Object(i.__)("Markup", "rank-math"),
            Object(i.__)("Structured Data", "rank-math"),
            Object(i.__)("Rich Snippet", "rank-math"),
            Object(i.__)("SEO", "rank-math"),
            Object(i.__)("Rank Math", "rank-math"),
            Object(i.__)("Yoast", "rank-math"),
          ];
          Object(a.registerBlockType)("rank-math/rich-snippet", {
            title: Object(i.__)("Schema by Rank Math", "rank-math"),
            description: Object(i.__)(
              "Add the Schema generated by Rank Math anywhere on your page using this Block.",
              "rank-math"
            ),
            category: "rank-math-blocks",
            icon: o,
            keywords: e,
            attributes: Object(k.applyFilters)(
              "rank_math_block_schema_attributes",
              { post_id: { default: rankMath.objectID } }
            ),
            edit: function (e) {
              var t = e.setAttributes,
                n = e.attributes,
                a = [];
              return (
                Object(r.forEach)(n, function (e, o) {
                  "post_id" !== o
                    ? "className" !== o &&
                      a.push(
                        wp.element.createElement(c.TextControl, {
                          key: o,
                          label: Object(i.__)(
                            Object(r.startCase)(o),
                            "rank-math"
                          ),
                          value: n[o],
                          type: "string",
                          onChange: function (e) {
                            var n = {};
                            (n[o] = e), t(n);
                          },
                        })
                      )
                    : a.push(
                        wp.element.createElement(c.TextControl, {
                          key: o,
                          label: Object(i.__)(
                            Object(r.startCase)(o),
                            "rank-math"
                          ),
                          value: n[o],
                          type: "number",
                          min: 1,
                          step: 1,
                          onChange: function (e) {
                            var n = {};
                            (n[o] = e || rankMath.objectID), t(n);
                          },
                        })
                      );
                }),
                wp.element.createElement(
                  "div",
                  null,
                  wp.element.createElement(
                    u.InspectorControls,
                    { key: "inspector" },
                    a
                  ),
                  wp.element.createElement(c.ServerSideRender, {
                    block: "rank-math/rich-snippet",
                    attributes: n,
                  })
                )
              );
            },
          });
        })();
  },
});
