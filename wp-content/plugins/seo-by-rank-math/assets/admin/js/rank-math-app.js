!(function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
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
    n((n.s = 72));
})([
  function (e, t) {
    e.exports = wp.i18n;
  },
  function (e, t) {
    e.exports = lodash;
  },
  function (e, t) {
    e.exports = wp.data;
  },
  function (e, t) {
    e.exports = jQuery;
  },
  function (e, t) {
    e.exports = wp.components;
  },
  function (e, t) {
    e.exports = wp.element;
  },
  function (e, t) {
    e.exports = wp.hooks;
  },
  function (e, t) {
    e.exports = rankMathAnalyzer;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var a = n(3),
      r = n.n(a);
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    var o = new ((function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.map = null);
      }
      var t, n, a;
      return (
        (t = e),
        (n = [
          {
            key: "swap",
            value: function (e, t) {
              var n = this;
              if (!(e = e || "")) return "";
              var a = new RegExp(/%(([a-z0-9_-]+)\(([^)]*)\)|[^\s]+)%/, "giu");
              return e
                .replace(" %page%", "")
                .replace("%sep% %sep%", "%sep%")
                .replace(a, function (e) {
                  return n.replace(t, e);
                })
                .trim();
            },
          },
          {
            key: "replace",
            value: function (e, t) {
              var n = t.toLowerCase().slice(1, -1);
              return ["term_description", "user_description"].includes(n)
                ? "undefined" != typeof tinymce &&
                  tinymce.activeEditor &&
                  "rank_math_description_editor" === tinymce.activeEditor.id
                  ? tinymce.activeEditor.getContent()
                  : r()("#description").val()
                : n.includes("customfield(")
                ? (n = n.replace("customfield(", "").replace(")", "")) in
                  rankMath.customFields
                  ? rankMath.customFields[n]
                  : ""
                : ((e = e || this.getMap()),
                  (n =
                    "seo_description" ===
                    (n =
                      "seo_title" ===
                      (n = n.includes("(") ? n.split("(")[0] : n)
                        ? "title"
                        : n)
                      ? "excerpt"
                      : n) in e
                    ? e[n]
                    : "");
            },
          },
          {
            key: "getMap",
            value: function () {
              var e = this;
              return (
                null !== this.map ||
                  ((this.map = {}),
                  r.a.each(rankMath.variables, function (t, n) {
                    (t = t.toLowerCase().replace(/%+/g, "").split("(")[0]),
                      (e.map[t] = n.example);
                  })),
                this.map
              );
            },
          },
          {
            key: "setVariable",
            value: function (e, t) {
              null !== this.map
                ? (this.map[e] = t)
                : void 0 !== rankMath.variables[e] &&
                  (rankMath.variables[e].example = t);
            },
          },
        ]) && i(t.prototype, n),
        a && i(t, a),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })())();
  },
  function (e, t) {
    e.exports = wp.url;
  },
  function (e, t) {
    e.exports = wp.compose;
  },
  ,
  function (e, t, n) {
    var a;
    !(function () {
      "use strict";
      var n = {}.hasOwnProperty;
      function r() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var a = arguments[t];
          if (a) {
            var i = typeof a;
            if ("string" === i || "number" === i) e.push(a);
            else if (Array.isArray(a)) {
              if (a.length) {
                var o = r.apply(null, a);
                o && e.push(o);
              }
            } else if ("object" === i)
              if (a.toString === Object.prototype.toString)
                for (var s in a) n.call(a, s) && a[s] && e.push(s);
              else e.push(a.toString());
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((r.default = r), (e.exports = r))
        : void 0 ===
            (a = function () {
              return r;
            }.apply(t, [])) || (e.exports = a);
    })();
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var a = document.createElement("div");
    t.a = function (e) {
      return (
        e &&
          "string" == typeof e &&
          ((e = e
            .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "")
            .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "")),
          (a.innerHTML = e),
          (e = a.textContent),
          (a.textContent = "")),
        e
      );
    };
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var a = n(4),
      r = Object(a.createSlotFill)("RankMathAfterEditor"),
      i = r.Fill,
      o = r.Slot,
      s = function (e) {
        var t = e.children,
          n = e.className;
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement(a.PanelRow, { className: n }, t)
        );
      };
    (s.Slot = o), (t.a = s);
  },
  function (e, t, n) {
    "use strict";
    var a = n(4),
      r = Object(a.createSlotFill)("RankMathAdvancedTab"),
      i = r.Fill,
      o = r.Slot,
      s = function (e) {
        var t = e.children,
          n = e.className;
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement(a.PanelRow, { className: n }, t)
        );
      };
    (s.Slot = o), (t.a = s);
  },
  function (e, t, n) {
    "use strict";
    var a = n(4),
      r = Object(a.createSlotFill)("RankMathAfterFocusKeyword"),
      i = r.Fill,
      o = r.Slot,
      s = function (e) {
        var t = e.children,
          n = e.className;
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement("div", { className: n }, t)
        );
      };
    (s.Slot = o), (t.a = s);
  },
  function (e, t, n) {
    "use strict";
    t.a = function (e) {
      return 100 < e
        ? "bad-fk dark"
        : 80 < e
        ? "good-fk"
        : 50 < e
        ? "ok-fk"
        : "bad-fk";
    };
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n(24);
    t.a = Object(a.withSelect)(function (e) {
      var t = e("rank-math");
      return { score: t.getAnalysisScore(), isRefreshing: t.isRefreshing() };
    })(function (e) {
      var t = e.score;
      return wp.element.createElement(
        "div",
        { className: "seo-score " + Object(r.a)(t) },
        wp.element.createElement(
          "div",
          { className: "score-text" },
          t,
          " / 100"
        )
      );
    });
  },
  ,
  function (e, t) {
    e.exports = wp.mediaUtils;
  },
  function (e, t) {
    e.exports = wp.htmlEntities;
  },
  ,
  ,
  function (e, t) {
    e.exports = React;
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    function a(e) {
      return function () {
        return e;
      };
    }
    var r = function () {};
    (r.thatReturns = a),
      (r.thatReturnsFalse = a(!1)),
      (r.thatReturnsTrue = a(!0)),
      (r.thatReturnsNull = a(null)),
      (r.thatReturnsThis = function () {
        return this;
      }),
      (r.thatReturnsArgument = function (e) {
        return e;
      }),
      (e.exports = r);
  },
  function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  },
  function (e, t, n) {
    var a = n(53),
      r = "object" == typeof self && self && self.Object === Object && self,
      i = a || r || Function("return this")();
    e.exports = i;
  },
  function (e, t, n) {
    var a = n(40).Symbol;
    e.exports = a;
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a =
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
      r = s(n(35)),
      i = s(n(48)),
      o = s(n(51));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var l = void 0;
    function c(e, t) {
      var n,
        o,
        s,
        p,
        u,
        d,
        m,
        h,
        g = [],
        f = {};
      for (d = 0; d < e.length; d++)
        if ("string" !== (u = e[d]).type) {
          if (!t.hasOwnProperty(u.value) || void 0 === t[u.value])
            throw new Error(
              "Invalid interpolation, missing component node: `" + u.value + "`"
            );
          if ("object" !== a(t[u.value]))
            throw new Error(
              "Invalid interpolation, component node must be a ReactElement or null: `" +
                u.value +
                "`",
              "\n> " + l
            );
          if ("componentClose" === u.type)
            throw new Error(
              "Missing opening component token: `" + u.value + "`"
            );
          if ("componentOpen" === u.type) {
            (n = t[u.value]), (s = d);
            break;
          }
          g.push(t[u.value]);
        } else g.push(u.value);
      return (
        n &&
          ((p = (function (e, t) {
            var n,
              a,
              r = t[e],
              i = 0;
            for (a = e + 1; a < t.length; a++)
              if ((n = t[a]).value === r.value) {
                if ("componentOpen" === n.type) {
                  i++;
                  continue;
                }
                if ("componentClose" === n.type) {
                  if (0 === i) return a;
                  i--;
                }
              }
            throw new Error(
              "Missing closing component token `" + r.value + "`"
            );
          })(s, e)),
          (m = c(e.slice(s + 1, p), t)),
          (o = r.default.cloneElement(n, {}, m)),
          g.push(o),
          p < e.length - 1 && ((h = c(e.slice(p + 1), t)), (g = g.concat(h)))),
        1 === g.length
          ? g[0]
          : (g.forEach(function (e, t) {
              e && (f["interpolation-child-" + t] = e);
            }),
            (0, i.default)(f))
      );
    }
    t.default = function (e) {
      var t = e.mixedString,
        n = e.components,
        r = e.throwErrors;
      if (((l = t), !n)) return t;
      if ("object" !== (void 0 === n ? "undefined" : a(n))) {
        if (r)
          throw new Error(
            "Interpolation Error: unable to process `" +
              t +
              "` because components is not an object"
          );
        return t;
      }
      var i = (0, o.default)(t);
      try {
        return c(i, n);
      } catch (e) {
        if (r)
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
    e.exports = (function () {
      "use strict";
      function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function t(t) {
        for (var a = 1; a < arguments.length; a++) {
          var r = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? e(Object(r), !0).forEach(function (e) {
                n(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : e(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function n(e, t, n) {
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
      const a = (e, t, n, a) => (
          (e = "" + e),
          (t = "" + t),
          a && ((e = e.trim()), (t = t.trim())),
          n ? e == t : e.toLowerCase() == t.toLowerCase()
        ),
        r = (e, t) => e && Array.isArray(e) && e.map((e) => i(e, t));
      function i(e, t) {
        var n,
          a = {};
        for (n in e) t.indexOf(n) < 0 && (a[n] = e[n]);
        return a;
      }
      function o(e) {
        var t = document.createElement("div");
        return e.replace(/\&#?[0-9a-z]+;/gi, function (e) {
          return (t.innerHTML = e), t.innerText;
        });
      }
      function s(e) {
        return new DOMParser().parseFromString(e.trim(), "text/html").body
          .firstElementChild;
      }
      function l(e, t) {
        for (t = t || "previous"; (e = e[t + "Sibling"]); )
          if (3 == e.nodeType) return e;
      }
      function c(e) {
        return "string" == typeof e
          ? e
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/`|'/g, "&#039;")
          : e;
      }
      function p(e) {
        var t = Object.prototype.toString.call(e).split(" ")[1].slice(0, -1);
        return (
          e === Object(e) &&
          "Array" != t &&
          "Function" != t &&
          "RegExp" != t &&
          "HTMLUnknownElement" != t
        );
      }
      function u(e, t, n) {
        function a(e, t) {
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              if (p(t[n])) {
                p(e[n]) ? a(e[n], t[n]) : (e[n] = Object.assign({}, t[n]));
                continue;
              }
              if (Array.isArray(t[n])) {
                e[n] = Object.assign([], t[n]);
                continue;
              }
              e[n] = t[n];
            }
        }
        return e instanceof Object || (e = {}), a(e, t), n && a(e, n), e;
      }
      function d() {
        const e = [],
          t = {};
        for (let n of arguments)
          for (let a of n)
            p(a)
              ? t[a.value] || (e.push(a), (t[a.value] = 1))
              : e.includes(a) || e.push(a);
        return e;
      }
      function m(e) {
        return String.prototype.normalize
          ? "string" == typeof e
            ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            : void 0
          : e;
      }
      var h = () => /(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);
      function g() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) =>
          (
            e ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))
          ).toString(16)
        );
      }
      function f(e) {
        return (
          e && e.classList && e.classList.contains(this.settings.classNames.tag)
        );
      }
      var w = {
        delimiters: ",",
        pattern: null,
        tagTextProp: "value",
        maxTags: 1 / 0,
        callbacks: {},
        addTagOnBlur: !0,
        duplicates: !1,
        whitelist: [],
        blacklist: [],
        enforceWhitelist: !1,
        userInput: !0,
        keepInvalidTags: !1,
        mixTagsAllowedAfter: /,|\.|\:|\s/,
        mixTagsInterpolator: ["[[", "]]"],
        backspace: !0,
        skipInvalid: !1,
        pasteAsTags: !0,
        editTags: { clicks: 2, keepInvalid: !0 },
        transformTag: () => {},
        trim: !0,
        a11y: { focusableTags: !1 },
        mixMode: { insertAfterTag: " " },
        autoComplete: { enabled: !0, rightKey: !1 },
        classNames: {
          namespace: "tagify",
          mixMode: "tagify--mix",
          selectMode: "tagify--select",
          input: "tagify__input",
          focus: "tagify--focus",
          tagNoAnimation: "tagify--noAnim",
          tagInvalid: "tagify--invalid",
          tagNotAllowed: "tagify--notAllowed",
          scopeLoading: "tagify--loading",
          hasMaxTags: "tagify--hasMaxTags",
          hasNoTags: "tagify--noTags",
          empty: "tagify--empty",
          inputInvalid: "tagify__input--invalid",
          dropdown: "tagify__dropdown",
          dropdownWrapper: "tagify__dropdown__wrapper",
          dropdownHeader: "tagify__dropdown__header",
          dropdownFooter: "tagify__dropdown__footer",
          dropdownItem: "tagify__dropdown__item",
          dropdownItemActive: "tagify__dropdown__item--active",
          dropdownInital: "tagify__dropdown--initial",
          tag: "tagify__tag",
          tagText: "tagify__tag-text",
          tagX: "tagify__tag__removeBtn",
          tagLoading: "tagify__tag--loading",
          tagEditing: "tagify__tag--editable",
          tagFlash: "tagify__tag--flash",
          tagHide: "tagify__tag--hide",
        },
        dropdown: {
          classname: "",
          enabled: 2,
          maxItems: 10,
          searchKeys: ["value", "searchBy"],
          fuzzySearch: !0,
          caseSensitive: !1,
          accentedSearch: !0,
          highlightFirst: !1,
          closeOnSelect: !0,
          clearOnSelect: !0,
          position: "all",
          appendTarget: null,
        },
        hooks: {
          beforeRemoveTag: () => Promise.resolve(),
          beforePaste: () => Promise.resolve(),
          suggestionClick: () => Promise.resolve(),
        },
      };
      function b() {
        this.dropdown = {};
        for (let e in this._dropdown)
          this.dropdown[e] =
            "function" == typeof this._dropdown[e]
              ? this._dropdown[e].bind(this)
              : this._dropdown[e];
        this.dropdown.refs();
      }
      var v = {
        refs() {
          (this.DOM.dropdown = this.parseTemplate("dropdown", [this.settings])),
            (this.DOM.dropdown.content = this.DOM.dropdown.querySelector(
              "[data-selector='tagify-dropdown-wrapper']"
            ));
        },
        show(e) {
          var t,
            n,
            r,
            i = this.settings,
            o = "mix" == i.mode && !i.enforceWhitelist,
            s = !i.whitelist || !i.whitelist.length,
            l = "manual" == i.dropdown.position;
          if (
            ((e = void 0 === e ? this.state.inputText : e),
            (!s || o || i.templates.dropdownItemNoMatch) &&
              !1 !== i.dropdown.enable &&
              !this.state.isLoading)
          ) {
            if (
              (clearTimeout(this.dropdownHide__bindEventsTimeout),
              (this.suggestedListItems = this.dropdown.filterListItems(e)),
              e &&
                !this.suggestedListItems.length &&
                (this.trigger("dropdown:noMatch", e),
                i.templates.dropdownItemNoMatch &&
                  (r = i.templates.dropdownItemNoMatch.call(this, {
                    value: e,
                  }))),
              !r)
            ) {
              if (this.suggestedListItems.length)
                e &&
                  o &&
                  !this.state.editing.scope &&
                  !a(this.suggestedListItems[0].value, e) &&
                  this.suggestedListItems.unshift({ value: e });
              else {
                if (!e || !o || this.state.editing.scope)
                  return (
                    this.input.autocomplete.suggest.call(this),
                    void this.dropdown.hide()
                  );
                this.suggestedListItems = [{ value: e }];
              }
              (n = "" + (p((t = this.suggestedListItems[0])) ? t.value : t)),
                i.autoComplete &&
                  n &&
                  0 == n.indexOf(e) &&
                  this.input.autocomplete.suggest.call(this, t);
            }
            this.dropdown.fill(r),
              i.dropdown.highlightFirst &&
                this.dropdown.highlightOption(
                  this.DOM.dropdown.content.children[0]
                ),
              this.state.dropdown.visible ||
                setTimeout(this.dropdown.events.binding.bind(this)),
              (this.state.dropdown.visible = e || !0),
              (this.state.dropdown.query = e),
              this.setStateSelection(),
              l ||
                setTimeout(() => {
                  this.dropdown.position(), this.dropdown.render();
                }),
              setTimeout(() => {
                this.trigger("dropdown:show", this.DOM.dropdown);
              });
          }
        },
        hide(e) {
          var t = this.DOM,
            n = t.scope,
            a = t.dropdown,
            r = "manual" == this.settings.dropdown.position && !e;
          if (a && document.body.contains(a) && !r)
            return (
              window.removeEventListener("resize", this.dropdown.position),
              this.dropdown.events.binding.call(this, !1),
              n.setAttribute("aria-expanded", !1),
              a.parentNode.removeChild(a),
              setTimeout(() => {
                this.state.dropdown.visible = !1;
              }, 100),
              (this.state.dropdown.query =
                this.state.ddItemData =
                this.state.ddItemElm =
                this.state.selection =
                  null),
              this.state.tag &&
                this.state.tag.value.length &&
                (this.state.flaggedTags[this.state.tag.baseOffset] =
                  this.state.tag),
              this.trigger("dropdown:hide", a),
              this
            );
        },
        toggle(e) {
          this.dropdown[this.state.dropdown.visible && !e ? "hide" : "show"]();
        },
        render() {
          var e,
            t,
            n =
              (((t = this.DOM.dropdown.cloneNode(!0)).style.cssText =
                "position:fixed; top:-9999px; opacity:0"),
              document.body.appendChild(t),
              (e = t.clientHeight),
              t.parentNode.removeChild(t),
              e),
            a = this.settings;
          return "number" == typeof a.dropdown.enabled &&
            a.dropdown.enabled >= 0
            ? (this.DOM.scope.setAttribute("aria-expanded", !0),
              document.body.contains(this.DOM.dropdown) ||
                (this.DOM.dropdown.classList.add(a.classNames.dropdownInital),
                this.dropdown.position(n),
                a.dropdown.appendTarget.appendChild(this.DOM.dropdown),
                setTimeout(() =>
                  this.DOM.dropdown.classList.remove(
                    a.classNames.dropdownInital
                  )
                )),
              this)
            : this;
        },
        fill(e) {
          e =
            "string" == typeof e
              ? e
              : this.dropdown.createListHTML(e || this.suggestedListItems);
          var t,
            n = this.settings.templates.dropdownContent.call(this, e);
          this.DOM.dropdown.content.innerHTML = (t = n)
            ? t
                .replace(/\>[\r\n ]+\</g, "><")
                .replace(/(<.*?>)|\s+/g, (e, t) => t || " ")
            : "";
        },
        refilter(e) {
          (e = e || this.state.dropdown.query || ""),
            (this.suggestedListItems = this.dropdown.filterListItems(e)),
            this.dropdown.fill(),
            this.suggestedListItems.length || this.dropdown.hide(),
            this.trigger("dropdown:updated", this.DOM.dropdown);
        },
        position(e) {
          var t = this.settings.dropdown;
          if ("manual" != t.position) {
            var n,
              a,
              r,
              i,
              o,
              s,
              l = this.DOM.dropdown,
              c = t.placeAbove,
              p = document.documentElement.clientHeight,
              u =
                Math.max(
                  document.documentElement.clientWidth || 0,
                  window.innerWidth || 0
                ) > 480
                  ? t.position
                  : "all",
              d = this.DOM["input" == u ? "input" : "scope"];
            (e = e || l.clientHeight),
              this.state.dropdown.visible &&
                ("text" == u
                  ? ((r = (n = this.getCaretGlobalPosition()).bottom),
                    (a = n.top),
                    (i = n.left),
                    (o = "auto"))
                  : ((s = (function (e) {
                      for (var t = 0, n = 0; e; )
                        (t += e.offsetLeft || 0),
                          (n += e.offsetTop || 0),
                          (e = e.parentNode);
                      return { left: t, top: n };
                    })(this.settings.dropdown.appendTarget)),
                    (a = (n = d.getBoundingClientRect()).top - s.top),
                    (r = n.bottom - 1 - s.top),
                    (i = n.left - s.left),
                    (o = n.width + "px")),
                (a = Math.floor(a)),
                (r = Math.ceil(r)),
                (c = void 0 === c ? p - n.bottom < e : c),
                (l.style.cssText =
                  "left:" +
                  (i + window.pageXOffset) +
                  "px; width:" +
                  o +
                  ";" +
                  (c
                    ? "top: " + (a + window.pageYOffset) + "px"
                    : "top: " + (r + window.pageYOffset) + "px")),
                l.setAttribute("placement", c ? "top" : "bottom"),
                l.setAttribute("position", u));
          }
        },
        events: {
          binding(e = !0) {
            var t = this.dropdown.events.callbacks,
              n = (this.listeners.dropdown = this.listeners.dropdown || {
                position: this.dropdown.position.bind(this),
                onKeyDown: t.onKeyDown.bind(this),
                onMouseOver: t.onMouseOver.bind(this),
                onMouseLeave: t.onMouseLeave.bind(this),
                onClick: t.onClick.bind(this),
                onScroll: t.onScroll.bind(this),
              }),
              a = e ? "addEventListener" : "removeEventListener";
            "manual" != this.settings.dropdown.position &&
              (window[a]("resize", n.position),
              window[a]("keydown", n.onKeyDown)),
              this.DOM.dropdown[a]("mouseover", n.onMouseOver),
              this.DOM.dropdown[a]("mouseleave", n.onMouseLeave),
              this.DOM.dropdown[a]("mousedown", n.onClick),
              this.DOM.dropdown.content[a]("scroll", n.onScroll);
          },
          callbacks: {
            onKeyDown(e) {
              var t = this.DOM.dropdown.querySelector(
                  this.settings.classNames.dropdownItemActiveSelector
                ),
                n = this.dropdown.getSuggestionDataByNode(t);
              switch (e.key) {
                case "ArrowDown":
                case "ArrowUp":
                case "Down":
                case "Up":
                  var a;
                  e.preventDefault(),
                    t &&
                      (t =
                        t[
                          ("ArrowUp" == e.key || "Up" == e.key
                            ? "previous"
                            : "next") + "ElementSibling"
                        ]),
                    t ||
                      ((a = this.DOM.dropdown.content.children),
                      (t =
                        a[
                          "ArrowUp" == e.key || "Up" == e.key ? a.length - 1 : 0
                        ])),
                    (n = this.dropdown.getSuggestionDataByNode(t)),
                    this.dropdown.highlightOption(t, !0);
                  break;
                case "Escape":
                case "Esc":
                  this.dropdown.hide();
                  break;
                case "ArrowRight":
                  if (this.state.actions.ArrowLeft) return;
                case "Tab":
                  if (
                    "mix" != this.settings.mode &&
                    t &&
                    !this.settings.autoComplete.rightKey &&
                    !this.state.editing
                  ) {
                    e.preventDefault();
                    var r = this.dropdown.getMappedValue(n);
                    return this.input.autocomplete.set.call(this, r), !1;
                  }
                  return !0;
                case "Enter":
                  e.preventDefault(),
                    this.settings.hooks
                      .suggestionClick(e, {
                        tagify: this,
                        tagData: n,
                        suggestionElm: t,
                      })
                      .then(() => {
                        if (t) return this.dropdown.selectOption(t);
                        this.dropdown.hide(),
                          "mix" != this.settings.mode &&
                            this.addTags(this.state.inputText.trim(), !0);
                      })
                      .catch((e) => e);
                  break;
                case "Backspace": {
                  if ("mix" == this.settings.mode || this.state.editing.scope)
                    return;
                  const e = this.input.raw.call(this);
                  ("" != e && 8203 != e.charCodeAt(0)) ||
                    (!0 === this.settings.backspace
                      ? this.removeTags()
                      : "edit" == this.settings.backspace &&
                        setTimeout(this.editTag.bind(this), 0));
                }
              }
            },
            onMouseOver(e) {
              var t = e.target.closest(
                this.settings.classNames.dropdownItemSelector
              );
              t && this.dropdown.highlightOption(t);
            },
            onMouseLeave(e) {
              this.dropdown.highlightOption();
            },
            onClick(e) {
              if (
                0 == e.button &&
                e.target != this.DOM.dropdown &&
                e.target != this.DOM.dropdown.content
              ) {
                var t = e.target.closest(
                    this.settings.classNames.dropdownItemSelector
                  ),
                  n = this.dropdown.getSuggestionDataByNode(t);
                (this.state.actions.selectOption = !0),
                  setTimeout(() => (this.state.actions.selectOption = !1), 50),
                  this.settings.hooks
                    .suggestionClick(e, {
                      tagify: this,
                      tagData: n,
                      suggestionElm: t,
                    })
                    .then(() => {
                      t ? this.dropdown.selectOption(t) : this.dropdown.hide();
                    })
                    .catch((e) => console.warn(e));
              }
            },
            onScroll(e) {
              var t = e.target,
                n =
                  (t.scrollTop / (t.scrollHeight - t.parentNode.clientHeight)) *
                  100;
              this.trigger("dropdown:scroll", { percentage: Math.round(n) });
            },
          },
        },
        getSuggestionDataByNode(e) {
          var t = e ? +e.getAttribute("tagifySuggestionIdx") : -1;
          return this.suggestedListItems[t] || null;
        },
        highlightOption(e, t) {
          var n,
            a = this.settings.classNames.dropdownItemActive;
          if (
            (this.state.ddItemElm &&
              (this.state.ddItemElm.classList.remove(a),
              this.state.ddItemElm.removeAttribute("aria-selected")),
            !e)
          )
            return (
              (this.state.ddItemData = null),
              (this.state.ddItemElm = null),
              void this.input.autocomplete.suggest.call(this)
            );
          (n = this.suggestedListItems[this.getNodeIndex(e)]),
            (this.state.ddItemData = n),
            (this.state.ddItemElm = e),
            e.classList.add(a),
            e.setAttribute("aria-selected", !0),
            t &&
              (e.parentNode.scrollTop =
                e.clientHeight + e.offsetTop - e.parentNode.clientHeight),
            this.settings.autoComplete &&
              (this.input.autocomplete.suggest.call(this, n),
              this.dropdown.position());
        },
        selectOption(e) {
          var t = this.settings.dropdown,
            n = t.clearOnSelect,
            a = t.closeOnSelect;
          if (!e)
            return (
              this.addTags(this.state.inputText, !0),
              void (a && this.dropdown.hide())
            );
          var r = e.getAttribute("tagifySuggestionIdx"),
            i = this.suggestedListItems[+r];
          this.trigger("dropdown:select", { data: i, elm: e }),
            r && i
              ? (this.state.editing
                  ? this.onEditTagDone(
                      null,
                      u({ __isValid: !0 }, this.normalizeTags([i])[0])
                    )
                  : this[
                      "mix" == this.settings.mode ? "addMixTags" : "addTags"
                    ]([i], n),
                this.DOM.input.parentNode &&
                  (setTimeout(() => {
                    this.DOM.input.focus(), this.toggleFocusClass(!0);
                  }),
                  a
                    ? setTimeout(this.dropdown.hide.bind(this))
                    : this.dropdown.refilter()))
              : this.dropdown.hide();
        },
        selectAll(e) {
          (this.suggestedListItems.length = 0),
            this.dropdown.hide(),
            this.dropdown.filterListItems("");
          var t = this.dropdown.filterListItems("");
          return (
            e || (t = this.state.dropdown.suggestions),
            this.addTags(t, !0),
            this
          );
        },
        filterListItems(e, t) {
          var n,
            a,
            r,
            i,
            o,
            s = this.settings,
            l = s.dropdown,
            c =
              ((t = t || {}),
              (e =
                "select" == s.mode &&
                this.value.length &&
                this.value[0][s.tagTextProp] == e
                  ? ""
                  : e),
              []),
            u = [],
            d = s.whitelist,
            h = l.maxItems >= 0 ? l.maxItems : 1 / 0,
            g = l.searchKeys,
            f = 0;
          if (!e || !g.length)
            return (
              (c = s.duplicates
                ? d
                : d.filter((e) => !this.isTagDuplicate(p(e) ? e.value : e))),
              (this.state.dropdown.suggestions = c),
              c.slice(0, h)
            );
          function w(e, t) {
            return t
              .toLowerCase()
              .split(" ")
              .every((t) => e.includes(t.toLowerCase()));
          }
          for (
            o = l.caseSensitive ? "" + e : ("" + e).toLowerCase();
            f < d.length;
            f++
          ) {
            let e, h;
            n = d[f] instanceof Object ? d[f] : { value: d[f] };
            let b = Object.keys(n).some((e) => g.includes(e)) ? g : ["value"];
            l.fuzzySearch && !t.exact
              ? ((r = b
                  .reduce((e, t) => e + " " + (n[t] || ""), "")
                  .toLowerCase()
                  .trim()),
                l.accentedSearch && ((r = m(r)), (o = m(o))),
                (e = 0 == r.indexOf(o)),
                (h = r === o),
                (a = w(r, o)))
              : ((e = !0),
                (a = b.some((e) => {
                  var a = "" + (n[e] || "");
                  return (
                    l.accentedSearch && ((a = m(a)), (o = m(o))),
                    l.caseSensitive || (a = a.toLowerCase()),
                    (h = a === o),
                    t.exact ? a === o : 0 == a.indexOf(o)
                  );
                }))),
              (i = !s.duplicates && this.isTagDuplicate(p(n) ? n.value : n)),
              a &&
                !i &&
                (h && e
                  ? u.push(n)
                  : "startsWith" == l.sortby && e
                  ? c.unshift(n)
                  : c.push(n));
          }
          return (
            (this.state.dropdown.suggestions = u.concat(c)),
            "function" == typeof l.sortby
              ? l.sortby(u.concat(c), o)
              : u.concat(c).slice(0, h)
          );
        },
        getMappedValue(e) {
          var t = this.settings.dropdown.mapValueTo;
          return t
            ? "function" == typeof t
              ? t(e)
              : e[t] || e.value
            : e.value;
        },
        createListHTML(e) {
          return u([], e)
            .map((e, t) => {
              ("string" != typeof e && "number" != typeof e) ||
                (e = { value: e });
              var n = this.dropdown.getMappedValue(e);
              e.value = "string" == typeof n ? c(n) : n;
              var a = this.settings.templates.dropdownItem.apply(this, [
                e,
                this,
              ]);
              return a
                .replace(/\s*tagifySuggestionIdx=(["'])(.*?)\1/gim, "")
                .replace(">", ` tagifySuggestionIdx="${t}">`);
            })
            .join("");
        },
      };
      const y = "@yaireo/tagify/";
      var k,
        O = {
          empty: "empty",
          exceed: "number of tags exceeded",
          pattern: "pattern mismatch",
          duplicate: "already exists",
          notAllowed: "not allowed",
        },
        E = {
          wrapper: (e, t) =>
            `<tags class="${t.classNames.namespace} ${
              t.mode ? `${t.classNames[t.mode + "Mode"]}` : ""
            } ${e.className}"\n                    ${
              t.readonly ? "readonly" : ""
            }\n                    ${
              t.disabled ? "disabled" : ""
            }\n                    ${
              t.required ? "required" : ""
            }\n                    ${
              "select" === t.mode ? "spellcheck='false'" : ""
            }\n                    tabIndex="-1">\n            <span ${
              !t.readonly && t.userInput ? "contenteditable" : ""
            } tabIndex="0" data-placeholder="${
              t.placeholder || "&#8203;"
            }" aria-placeholder="${
              t.placeholder || ""
            }"\n                class="${
              t.classNames.input
            }"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="${
              "mix" == t.mode
            }"></span>\n                &#8203;\n        </tags>`,
          tag(e, t) {
            var n = this.settings;
            return `<tag title="${
              e.title || e.value
            }"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex="${
              n.a11y.focusableTags ? 0 : -1
            }"\n                    class="${n.classNames.tag} ${
              e.class || ""
            }"\n                    ${this.getAttributes(
              e
            )}>\n            <x title='' class="${
              n.classNames.tagX
            }" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class="${
              n.classNames.tagText
            }">${
              e[n.tagTextProp] || e.value
            }</span>\n            </div>\n        </tag>`;
          },
          dropdown(e) {
            var t = e.dropdown,
              n = "manual" == t.position,
              a = `${e.classNames.dropdown}`;
            return `<div class="${n ? "" : a} ${
              t.classname
            }" role="listbox" aria-labelledby="dropdown">\n                    <div data-selector='tagify-dropdown-wrapper' class="${
              e.classNames.dropdownWrapper
            }"></div>\n                </div>`;
          },
          dropdownContent(e) {
            var t = this.settings,
              n = this.state.dropdown.suggestions;
            return `\n            ${t.templates.dropdownHeader.call(
              this,
              n
            )}\n            ${e}\n            ${t.templates.dropdownFooter.call(
              this,
              n
            )}\n        `;
          },
          dropdownItem(e, t) {
            return `<div ${this.getAttributes(e)}\n                    class='${
              this.settings.classNames.dropdownItem
            } ${
              e.class ? e.class : ""
            }'\n                    tabindex="0"\n                    role="option">${
              e.value
            }</div>`;
          },
          dropdownHeader: (e) => "",
          dropdownFooter(e) {
            var t = e.length - this.settings.dropdown.maxItems;
            return t > 0
              ? `<footer data-selector='tagify-suggestions-footer' class="${this.settings.classNames.dropdownFooter}">\n                ${t} more items. Refine your search.\n            </footer>`
              : "";
          },
          dropdownItemNoMatch: null,
        },
        T = {
          customBinding() {
            this.customEventsList.forEach((e) => {
              this.on(e, this.settings.callbacks[e]);
            });
          },
          binding(e = !0) {
            var t,
              n = this.events.callbacks,
              a = e ? "addEventListener" : "removeEventListener";
            if (!this.state.mainEvents || !e) {
              for (var r in ((this.state.mainEvents = e),
              e &&
                !this.listeners.main &&
                (this.events.bindGlobal.call(this),
                this.settings.isJQueryPlugin &&
                  jQuery(this.DOM.originalInput).on(
                    "tagify.removeAllTags",
                    this.removeAllTags.bind(this)
                  )),
              (t = this.listeners.main =
                this.listeners.main || {
                  focus: ["input", n.onFocusBlur.bind(this)],
                  keydown: ["input", n.onKeydown.bind(this)],
                  click: ["scope", n.onClickScope.bind(this)],
                  dblclick: ["scope", n.onDoubleClickScope.bind(this)],
                  paste: ["input", n.onPaste.bind(this)],
                  drop: ["input", n.onDrop.bind(this)],
                })))
                this.DOM[t[r][0]][a](r, t[r][1]);
              clearInterval(
                this.listeners.main.originalInputValueObserverInterval
              ),
                (this.listeners.main.originalInputValueObserverInterval =
                  setInterval(n.observeOriginalInputValue.bind(this), 500));
              var i =
                this.listeners.main.inputMutationObserver ||
                new MutationObserver(n.onInputDOMChange.bind(this));
              i && i.disconnect(),
                "mix" == this.settings.mode &&
                  i.observe(this.DOM.input, { childList: !0 });
            }
          },
          bindGlobal(e) {
            var t,
              n = this.events.callbacks,
              a = e ? "removeEventListener" : "addEventListener";
            if (e || !this.listeners.global)
              for (t of ((this.listeners.global = (this.listeners &&
                this.listeners.global) || [
                {
                  type: this.isIE ? "keydown" : "input",
                  target: this.DOM.input,
                  cb: n[this.isIE ? "onInputIE" : "onInput"].bind(this),
                },
                {
                  type: "keydown",
                  target: window,
                  cb: n.onWindowKeyDown.bind(this),
                },
                {
                  type: "blur",
                  target: this.DOM.input,
                  cb: n.onFocusBlur.bind(this),
                },
              ]),
              this.listeners.global))
                t.target[a](t.type, t.cb);
          },
          unbindGlobal() {
            this.events.bindGlobal.call(this, !0);
          },
          callbacks: {
            onFocusBlur(e) {
              var t = e.target ? this.trim(e.target.textContent) : "",
                n = this.settings,
                a = e.type,
                r = n.dropdown.enabled >= 0,
                i = { relatedTarget: e.relatedTarget },
                o =
                  this.state.actions.selectOption &&
                  (r || !n.dropdown.closeOnSelect),
                s = this.state.actions.addNew && r,
                l =
                  e.relatedTarget &&
                  f.call(this, e.relatedTarget) &&
                  this.DOM.scope.contains(e.relatedTarget);
              if ("blur" == a) {
                if (e.relatedTarget === this.DOM.scope)
                  return this.dropdown.hide(), void this.DOM.input.focus();
                this.postUpdate(), this.triggerChangeEvent();
              }
              if (!o && !s)
                if (
                  ((this.state.hasFocus = "focus" == a && +new Date()),
                  this.toggleFocusClass(this.state.hasFocus),
                  "mix" != n.mode)
                ) {
                  if ("focus" == a)
                    return (
                      this.trigger("focus", i),
                      void (
                        (0 !== n.dropdown.enabled && n.userInput) ||
                        this.dropdown.show(this.value.length ? "" : void 0)
                      )
                    );
                  if ("blur" == a) {
                    var c, p;
                    this.trigger("blur", i), this.loading(!1);
                    let e = n.enforceWhitelist
                      ? !!this.getWhitelistItem(
                          null === (c = this.value) ||
                            void 0 === c ||
                            null === (p = c[0]) ||
                            void 0 === p
                            ? void 0
                            : p.value
                        )
                      : n.keepInvalidTags;
                    "select" == this.settings.mode && l && (t = ""),
                      "select" !== this.settings.mode &&
                        t &&
                        !this.state.actions.selectOption &&
                        n.addTagOnBlur &&
                        this.addTags(t, !0),
                      "select" != this.settings.mode ||
                        (t && e) ||
                        this.removeTags();
                  }
                  this.DOM.input.removeAttribute("style"), this.dropdown.hide();
                } else
                  "focus" == a
                    ? this.trigger("focus", i)
                    : "blur" == e.type &&
                      (this.trigger("blur", i),
                      this.loading(!1),
                      this.dropdown.hide(),
                      (this.state.dropdown.visible = void 0),
                      this.setStateSelection());
            },
            onWindowKeyDown(e) {
              var t,
                n = document.activeElement;
              if (
                f.call(this, n) &&
                this.DOM.scope.contains(document.activeElement)
              )
                switch (((t = n.nextElementSibling), e.key)) {
                  case "Backspace":
                    this.settings.readonly ||
                      (this.removeTags(n), (t || this.DOM.input).focus());
                    break;
                  case "Enter":
                    setTimeout(this.editTag.bind(this), 0, n);
                }
            },
            onKeydown(e) {
              var t = this.settings;
              "select" == t.mode &&
                t.enforceWhitelist &&
                this.value.length &&
                "Tab" != e.key &&
                e.preventDefault();
              var n = this.trim(e.target.textContent);
              if (
                (this.trigger("keydown", { originalEvent: this.cloneEvent(e) }),
                "mix" == t.mode)
              ) {
                switch (e.key) {
                  case "Left":
                  case "ArrowLeft":
                    this.state.actions.ArrowLeft = !0;
                    break;
                  case "Delete":
                  case "Backspace":
                    if (this.state.editing) return;
                    var a,
                      r,
                      i,
                      s = document.getSelection(),
                      c =
                        "Delete" == e.key &&
                        s.anchorOffset == (s.anchorNode.length || 0),
                      p = s.anchorNode.previousSibling,
                      u =
                        1 == s.anchorNode.nodeType ||
                        (!s.anchorOffset &&
                          p &&
                          1 == p.nodeType &&
                          s.anchorNode.previousSibling),
                      d = o(this.DOM.input.innerHTML),
                      m = this.getTagElms();
                    if ("edit" == t.backspace && u)
                      return (
                        (a =
                          1 == s.anchorNode.nodeType
                            ? null
                            : s.anchorNode.previousElementSibling),
                        setTimeout(this.editTag.bind(this), 0, a),
                        void e.preventDefault()
                      );
                    if (h() && u)
                      return (
                        (i = l(u)),
                        u.hasAttribute("readonly") || u.remove(),
                        this.DOM.input.focus(),
                        void setTimeout(() => {
                          this.placeCaretAfterNode(i), this.DOM.input.click();
                        })
                      );
                    if ("BR" == s.anchorNode.nodeName) return;
                    if (
                      ((c || u) && 1 == s.anchorNode.nodeType
                        ? (r =
                            0 == s.anchorOffset
                              ? c
                                ? m[0]
                                : null
                              : m[s.anchorOffset - 1])
                        : c
                        ? (r = s.anchorNode.nextElementSibling)
                        : u && (r = u),
                      3 == s.anchorNode.nodeType &&
                        !s.anchorNode.nodeValue &&
                        s.anchorNode.previousElementSibling &&
                        e.preventDefault(),
                      (u || c) && !t.backspace)
                    )
                      return void e.preventDefault();
                    if (
                      "Range" != s.type &&
                      !s.anchorOffset &&
                      s.anchorNode == this.DOM.input &&
                      "Delete" != e.key
                    )
                      return void e.preventDefault();
                    if ("Range" != s.type && r && r.hasAttribute("readonly"))
                      return void this.placeCaretAfterNode(l(r));
                    clearTimeout(k),
                      (k = setTimeout(() => {
                        var e = document.getSelection(),
                          t = o(this.DOM.input.innerHTML),
                          n = !c && e.anchorNode.previousSibling;
                        if (t.length >= d.length && n)
                          if (f.call(this, n) && !n.hasAttribute("readonly")) {
                            if (
                              (this.removeTags(n),
                              this.fixFirefoxLastTagNoCaret(),
                              2 == this.DOM.input.children.length &&
                                "BR" == this.DOM.input.children[1].tagName)
                            )
                              return (
                                (this.DOM.input.innerHTML = ""),
                                (this.value.length = 0),
                                !0
                              );
                          } else n.remove();
                        this.value = [].map
                          .call(m, (e, t) => {
                            var n = this.tagData(e);
                            if (e.parentNode || n.readonly) return n;
                            this.trigger("remove", {
                              tag: e,
                              index: t,
                              data: n,
                            });
                          })
                          .filter((e) => e);
                      }, 20));
                }
                return !0;
              }
              switch (e.key) {
                case "Backspace":
                  "select" == t.mode && t.enforceWhitelist && this.value.length
                    ? this.removeTags()
                    : (this.state.dropdown.visible &&
                        "manual" != t.dropdown.position) ||
                      ("" != e.target.textContent && 8203 != n.charCodeAt(0)) ||
                      (!0 === t.backspace
                        ? this.removeTags()
                        : "edit" == t.backspace &&
                          setTimeout(this.editTag.bind(this), 0));
                  break;
                case "Esc":
                case "Escape":
                  if (this.state.dropdown.visible) return;
                  e.target.blur();
                  break;
                case "Down":
                case "ArrowDown":
                  this.state.dropdown.visible || this.dropdown.show();
                  break;
                case "ArrowRight": {
                  let e = this.state.inputSuggestion || this.state.ddItemData;
                  if (e && t.autoComplete.rightKey)
                    return void this.addTags([e], !0);
                  break;
                }
                case "Tab": {
                  let a = "select" == t.mode;
                  if (!n || a) return !0;
                  e.preventDefault();
                }
                case "Enter":
                  if (this.state.dropdown.visible || 229 == e.keyCode) return;
                  e.preventDefault(),
                    setTimeout(() => {
                      this.state.actions.selectOption || this.addTags(n, !0);
                    });
              }
            },
            onInput(e) {
              if ((this.postUpdate(), "mix" == this.settings.mode))
                return this.events.callbacks.onMixTagsInput.call(this, e);
              var t = this.input.normalize.call(this),
                n = t.length >= this.settings.dropdown.enabled,
                a = { value: t, inputElm: this.DOM.input };
              (a.isValid = this.validateTag({ value: t })),
                this.state.inputText != t &&
                  (this.input.set.call(this, t, !1),
                  -1 != t.search(this.settings.delimiters)
                    ? this.addTags(t) && this.input.set.call(this)
                    : this.settings.dropdown.enabled >= 0 &&
                      this.dropdown[n ? "show" : "hide"](t),
                  this.trigger("input", a));
            },
            onMixTagsInput(e) {
              var t,
                n,
                a,
                r,
                i,
                o,
                s,
                l,
                c = this.settings,
                p = this.value.length,
                d = this.getTagElms(),
                m = document.createDocumentFragment(),
                g = window.getSelection().getRangeAt(0),
                f = [].map.call(d, (e) => this.tagData(e).value);
              if (
                ("deleteContentBackward" == e.inputType &&
                  h() &&
                  this.events.callbacks.onKeydown.call(this, {
                    target: e.target,
                    key: "Backspace",
                  }),
                this.value.slice().forEach((e) => {
                  e.readonly &&
                    !f.includes(e.value) &&
                    m.appendChild(this.createTagElem(e));
                }),
                m.childNodes.length &&
                  (g.insertNode(m), this.setRangeAtStartEnd(!1, m.lastChild)),
                d.length != p)
              )
                return (
                  (this.value = [].map.call(this.getTagElms(), (e) =>
                    this.tagData(e)
                  )),
                  void this.update({ withoutChangeEvent: !0 })
                );
              if (this.hasMaxTags()) return !0;
              if (
                window.getSelection &&
                (o = window.getSelection()).rangeCount > 0 &&
                3 == o.anchorNode.nodeType
              ) {
                if (
                  ((g = o.getRangeAt(0).cloneRange()).collapse(!0),
                  g.setStart(o.focusNode, 0),
                  (a =
                    (t = g.toString().slice(0, g.endOffset)).split(c.pattern)
                      .length - 1),
                  (n = t.match(c.pattern)) &&
                    (r = t.slice(t.lastIndexOf(n[n.length - 1]))),
                  r)
                ) {
                  if (
                    ((this.state.actions.ArrowLeft = !1),
                    (this.state.tag = {
                      prefix: r.match(c.pattern)[0],
                      value: r.replace(c.pattern, ""),
                    }),
                    (this.state.tag.baseOffset =
                      o.baseOffset - this.state.tag.value.length),
                    (l = this.state.tag.value.match(c.delimiters)))
                  )
                    return (
                      (this.state.tag.value = this.state.tag.value.replace(
                        c.delimiters,
                        ""
                      )),
                      (this.state.tag.delimiters = l[0]),
                      this.addTags(
                        this.state.tag.value,
                        c.dropdown.clearOnSelect
                      ),
                      void this.dropdown.hide()
                    );
                  i = this.state.tag.value.length >= c.dropdown.enabled;
                  try {
                    (s =
                      (s = this.state.flaggedTags[this.state.tag.baseOffset])
                        .prefix == this.state.tag.prefix &&
                      s.value[0] == this.state.tag.value[0]),
                      this.state.flaggedTags[this.state.tag.baseOffset] &&
                        !this.state.tag.value &&
                        delete this.state.flaggedTags[
                          this.state.tag.baseOffset
                        ];
                  } catch (e) {}
                  (s || a < this.state.mixMode.matchedPatternCount) && (i = !1);
                } else this.state.flaggedTags = {};
                this.state.mixMode.matchedPatternCount = a;
              }
              setTimeout(() => {
                this.update({ withoutChangeEvent: !0 }),
                  this.trigger(
                    "input",
                    u({}, this.state.tag, {
                      textContent: this.DOM.input.textContent,
                    })
                  ),
                  this.state.tag &&
                    this.dropdown[i ? "show" : "hide"](this.state.tag.value);
              }, 10);
            },
            onInputIE(e) {
              var t = this;
              setTimeout(function () {
                t.events.callbacks.onInput.call(t, e);
              });
            },
            observeOriginalInputValue() {
              this.DOM.originalInput.value !=
                this.DOM.originalInput.tagifyValue && this.loadOriginalValues();
            },
            onClickScope(e) {
              var t = this.settings,
                n = e.target.closest("." + t.classNames.tag),
                a = +new Date() - this.state.hasFocus;
              if (e.target != this.DOM.scope) {
                if (!e.target.classList.contains(t.classNames.tagX))
                  return n
                    ? (this.trigger("click", {
                        tag: n,
                        index: this.getNodeIndex(n),
                        data: this.tagData(n),
                        originalEvent: this.cloneEvent(e),
                      }),
                      void (
                        (1 !== t.editTags && 1 !== t.editTags.clicks) ||
                        this.events.callbacks.onDoubleClickScope.call(this, e)
                      ))
                    : void (e.target == this.DOM.input &&
                      ("mix" == t.mode && this.fixFirefoxLastTagNoCaret(),
                      a > 500)
                        ? this.state.dropdown.visible
                          ? this.dropdown.hide()
                          : 0 === t.dropdown.enabled &&
                            "mix" != t.mode &&
                            this.dropdown.show(this.value.length ? "" : void 0)
                        : "select" == t.mode &&
                          !this.state.dropdown.visible &&
                          this.dropdown.show());
                this.removeTags(e.target.parentNode);
              } else this.state.hasFocus || this.DOM.input.focus();
            },
            onPaste(e) {
              e.preventDefault();
              var t,
                n,
                a = this.settings;
              if (("select" == a.mode && a.enforceWhitelist) || !a.userInput)
                return !1;
              a.readonly ||
                ((t = e.clipboardData || window.clipboardData),
                (n = t.getData("Text")),
                a.hooks
                  .beforePaste(e, {
                    tagify: this,
                    pastedText: n,
                    clipboardData: t,
                  })
                  .then((t) => {
                    void 0 === t && (t = n),
                      t &&
                        (this.injectAtCaret(
                          t,
                          window.getSelection().getRangeAt(0)
                        ),
                        "mix" == this.settings.mode
                          ? this.events.callbacks.onMixTagsInput.call(this, e)
                          : this.settings.pasteAsTags
                          ? this.addTags(this.state.inputText + t, !0)
                          : (this.state.inputText = t));
                  })
                  .catch((e) => e));
            },
            onDrop(e) {
              e.preventDefault();
            },
            onEditTagInput(e, t) {
              var n = e.closest("." + this.settings.classNames.tag),
                a = this.getNodeIndex(n),
                r = this.tagData(n),
                i = this.input.normalize.call(this, e),
                o = n.innerHTML != n.__tagifyTagData.__originalHTML,
                s = this.validateTag(
                  u(n.__tagifyTagData, { [this.settings.tagTextProp]: i })
                );
              o || !0 !== e.originalIsValid || (s = !0),
                n.classList.toggle(
                  this.settings.classNames.tagInvalid,
                  !0 !== s
                ),
                (r.__isValid = s),
                (n.title = !0 === s ? r.title || r.value : s),
                i.length >= this.settings.dropdown.enabled &&
                  (this.state.editing && (this.state.editing.value = i),
                  this.dropdown.show(i)),
                this.trigger("edit:input", {
                  tag: n,
                  index: a,
                  data: u({}, this.value[a], { newValue: i }),
                  originalEvent: this.cloneEvent(t),
                });
            },
            onEditTagFocus(e) {
              this.state.editing = {
                scope: e,
                input: e.querySelector("[contenteditable]"),
              };
            },
            onEditTagBlur(e) {
              if (
                (this.state.hasFocus || this.toggleFocusClass(),
                this.DOM.scope.contains(e))
              ) {
                var t,
                  n,
                  a = this.settings,
                  r = e.closest("." + a.classNames.tag),
                  i = this.input.normalize.call(this, e),
                  o = this.tagData(r).__originalData,
                  s = r.innerHTML != r.__tagifyTagData.__originalHTML,
                  l = this.validateTag({ [a.tagTextProp]: i });
                if (i)
                  if (s) {
                    if (
                      ((t = this.hasMaxTags()),
                      (n = u({}, o, {
                        [a.tagTextProp]: this.trim(i),
                        value: i,
                        __isValid: l,
                      })),
                      a.transformTag.call(this, n, o),
                      !0 !==
                        (l = (!t || !0 === o.__isValid) && this.validateTag(n)))
                    ) {
                      if (
                        (this.trigger("invalid", {
                          data: n,
                          tag: r,
                          message: l,
                        }),
                        a.editTags.keepInvalid)
                      )
                        return;
                      a.keepInvalidTags ? (n.__isValid = l) : (n = o);
                    } else
                      a.keepInvalidTags &&
                        (delete n.title,
                        delete n["aria-invalid"],
                        delete n.class);
                    this.onEditTagDone(r, n);
                  } else this.onEditTagDone(r, o);
                else this.onEditTagDone(r);
              }
            },
            onEditTagkeydown(e, t) {
              switch (
                (this.trigger("edit:keydown", {
                  originalEvent: this.cloneEvent(e),
                }),
                e.key)
              ) {
                case "Esc":
                case "Escape":
                  t.innerHTML = t.__tagifyTagData.__originalHTML;
                case "Enter":
                case "Tab":
                  e.preventDefault(), e.target.blur();
              }
            },
            onDoubleClickScope(e) {
              var t,
                n,
                a = e.target.closest("." + this.settings.classNames.tag),
                r = this.settings;
              a &&
                r.userInput &&
                ((t = a.classList.contains(
                  this.settings.classNames.tagEditing
                )),
                (n = a.hasAttribute("readonly")),
                "select" == r.mode ||
                  r.readonly ||
                  t ||
                  n ||
                  !this.settings.editTags ||
                  this.editTag(a),
                this.toggleFocusClass(!0),
                this.trigger("dblclick", {
                  tag: a,
                  index: this.getNodeIndex(a),
                  data: this.tagData(a),
                }));
            },
            onInputDOMChange(e) {
              e.forEach((e) => {
                e.addedNodes.forEach((e) => {
                  if (e)
                    if ("<div><br></div>" == e.outerHTML)
                      e.replaceWith(document.createElement("br"));
                    else if (
                      1 == e.nodeType &&
                      e.querySelector(this.settings.classNames.tagSelector)
                    ) {
                      let t = document.createTextNode("");
                      3 == e.childNodes[0].nodeType &&
                        "BR" != e.previousSibling.nodeName &&
                        (t = document.createTextNode("\n")),
                        e.replaceWith(t, ...[...e.childNodes].slice(0, -1)),
                        this.placeCaretAfterNode(t.previousSibling);
                    } else
                      f.call(this, e) &&
                        e.previousSibling &&
                        "BR" == e.previousSibling.nodeName &&
                        (e.previousSibling.replaceWith("\n​"),
                        this.placeCaretAfterNode(
                          e.previousSibling.previousSibling
                        ));
                }),
                  e.removedNodes.forEach((e) => {
                    e &&
                      "BR" == e.nodeName &&
                      f.call(this, t) &&
                      (this.removeTags(t), this.fixFirefoxLastTagNoCaret());
                  });
              });
              var t = this.DOM.input.lastChild;
              t && "" == t.nodeValue && t.remove(),
                (t && "BR" == t.nodeName) ||
                  this.DOM.input.appendChild(document.createElement("br"));
            },
          },
        };
      function _(e, t) {
        if (!e) {
          console.warn("Tagify:", "input element not found", e);
          const t = new Proxy(this, { get: () => () => t });
          return t;
        }
        if (
          e.previousElementSibling &&
          e.previousElementSibling.classList.contains("tagify")
        )
          return (
            console.warn("Tagify: ", "input element is already Tagified", e),
            this
          );
        var n;
        u(
          this,
          (function (e) {
            var t = document.createTextNode("");
            function n(e, n, a) {
              a &&
                n
                  .split(/\s+/g)
                  .forEach((n) => t[e + "EventListener"].call(t, n, a));
            }
            return {
              off(e, t) {
                return n("remove", e, t), this;
              },
              on(e, t) {
                return t && "function" == typeof t && n("add", e, t), this;
              },
              trigger(n, a, r) {
                var i;
                if (((r = r || { cloneData: !0 }), n))
                  if (e.settings.isJQueryPlugin)
                    "remove" == n && (n = "removeTag"),
                      jQuery(e.DOM.originalInput).triggerHandler(n, [a]);
                  else {
                    try {
                      var o = "object" == typeof a ? a : { value: a };
                      if (
                        (((o = r.cloneData ? u({}, o) : o).tagify = this),
                        a instanceof Object)
                      )
                        for (var s in a)
                          a[s] instanceof HTMLElement && (o[s] = a[s]);
                      i = new CustomEvent(n, { detail: o });
                    } catch (e) {
                      console.warn(e);
                    }
                    t.dispatchEvent(i);
                  }
              },
            };
          })(this)
        ),
          (this.isFirefox = "undefined" != typeof InstallTrigger),
          (this.isIE = window.document.documentMode),
          (t = t || {}),
          (this.getPersistedData =
            ((n = t.id),
            (e) => {
              let t,
                a = "/" + e;
              if (1 == localStorage.getItem(y + n + "/v", 1))
                try {
                  t = JSON.parse(localStorage[y + n + a]);
                } catch (e) {}
              return t;
            })),
          (this.setPersistedData = ((e) =>
            e
              ? (localStorage.setItem(y + e + "/v", 1),
                (t, n) => {
                  let a = "/" + n,
                    r = JSON.stringify(t);
                  t &&
                    n &&
                    (localStorage.setItem(y + e + a, r),
                    dispatchEvent(new Event("storage")));
                })
              : () => {})(t.id)),
          (this.clearPersistedData = ((e) => (t) => {
            const n = y + "/" + e + "/";
            if (t) localStorage.removeItem(n + t);
            else
              for (let e in localStorage)
                e.includes(n) && localStorage.removeItem(e);
          })(t.id)),
          this.applySettings(e, t),
          (this.state = {
            inputText: "",
            editing: !1,
            actions: {},
            mixMode: {},
            dropdown: {},
            flaggedTags: {},
          }),
          (this.value = []),
          (this.listeners = {}),
          (this.DOM = {}),
          this.build(e),
          b.call(this),
          this.getCSSVars(),
          this.loadOriginalValues(),
          this.events.customBinding.call(this),
          this.events.binding.call(this),
          e.autofocus && this.DOM.input.focus();
      }
      return (
        (_.prototype = {
          _dropdown: v,
          helpers: {
            sameStr: a,
            removeCollectionProp: r,
            omit: i,
            isObject: p,
            parseHTML: s,
            escapeHTML: c,
            extend: u,
            concatWithoutDups: d,
            getUID: g,
            isNodeTag: f,
          },
          customEventsList: [
            "change",
            "add",
            "remove",
            "invalid",
            "input",
            "click",
            "keydown",
            "focus",
            "blur",
            "edit:input",
            "edit:beforeUpdate",
            "edit:updated",
            "edit:start",
            "edit:keydown",
            "dropdown:show",
            "dropdown:hide",
            "dropdown:select",
            "dropdown:updated",
            "dropdown:noMatch",
            "dropdown:scroll",
          ],
          dataProps: [
            "__isValid",
            "__removed",
            "__originalData",
            "__originalHTML",
            "__tagId",
          ],
          trim(e) {
            return this.settings.trim && e && "string" == typeof e
              ? e.trim()
              : e;
          },
          parseHTML: s,
          templates: E,
          parseTemplate(e, t) {
            return (
              (e = this.settings.templates[e] || e),
              this.parseHTML(e.apply(this, t))
            );
          },
          set whitelist(e) {
            const t = e && Array.isArray(e);
            (this.settings.whitelist = t ? e : []),
              this.setPersistedData(t ? e : [], "whitelist");
          },
          get whitelist() {
            return this.settings.whitelist;
          },
          applySettings(e, n) {
            w.templates = this.templates;
            var a = (this.settings = u({}, w, n));
            (a.disabled = e.hasAttribute("disabled")),
              (a.readonly = a.readonly || e.hasAttribute("readonly")),
              (a.placeholder = c(
                e.getAttribute("placeholder") || a.placeholder || ""
              )),
              (a.required = e.hasAttribute("required"));
            for (let e in a.classNames)
              Object.defineProperty(a.classNames, e + "Selector", {
                get() {
                  return "." + this[e].split(" ")[0];
                },
              });
            if (
              (this.isIE && (a.autoComplete = !1),
              ["whitelist", "blacklist"].forEach((t) => {
                var n = e.getAttribute("data-" + t);
                n && (n = n.split(a.delimiters)) instanceof Array && (a[t] = n);
              }),
              "autoComplete" in n &&
                !p(n.autoComplete) &&
                ((a.autoComplete = w.autoComplete),
                (a.autoComplete.enabled = n.autoComplete)),
              "mix" == a.mode &&
                ((a.autoComplete.rightKey = !0),
                (a.delimiters = n.delimiters || null),
                a.tagTextProp &&
                  !a.dropdown.searchKeys.includes(a.tagTextProp) &&
                  a.dropdown.searchKeys.push(a.tagTextProp)),
              e.pattern)
            )
              try {
                a.pattern = new RegExp(e.pattern);
              } catch (e) {}
            if (this.settings.delimiters)
              try {
                a.delimiters = new RegExp(this.settings.delimiters, "g");
              } catch (e) {}
            a.disabled && (a.userInput = !1),
              (this.TEXTS = t(t({}, O), a.texts || {})),
              ("select" != a.mode && a.userInput) || (a.dropdown.enabled = 0),
              (a.dropdown.appendTarget =
                n.dropdown && n.dropdown.appendTarget
                  ? n.dropdown.appendTarget
                  : document.body);
            let r = this.getPersistedData("whitelist");
            Array.isArray(r) &&
              (this.whitelist = Array.isArray(a.whitelist)
                ? d(a.whitelist, r)
                : r);
          },
          getAttributes(e) {
            var t,
              n = this.getCustomAttributes(e),
              a = "";
            for (t in n) a += " " + t + (void 0 !== e[t] ? `="${n[t]}"` : "");
            return a;
          },
          getCustomAttributes(e) {
            if (!p(e)) return "";
            var t,
              n = {};
            for (t in e)
              "__" != t.slice(0, 2) &&
                "class" != t &&
                e.hasOwnProperty(t) &&
                void 0 !== e[t] &&
                (n[t] = c(e[t]));
            return n;
          },
          setStateSelection() {
            var e = window.getSelection(),
              t = {
                anchorOffset: e.anchorOffset,
                anchorNode: e.anchorNode,
                range: e.getRangeAt && e.rangeCount && e.getRangeAt(0),
              };
            return (this.state.selection = t), t;
          },
          getCaretGlobalPosition() {
            const e = document.getSelection();
            if (e.rangeCount) {
              const t = e.getRangeAt(0),
                n = t.startContainer,
                a = t.startOffset;
              let r, i;
              if (a > 0)
                return (
                  (i = document.createRange()),
                  i.setStart(n, a - 1),
                  i.setEnd(n, a),
                  (r = i.getBoundingClientRect()),
                  { left: r.right, top: r.top, bottom: r.bottom }
                );
              if (n.getBoundingClientRect) return n.getBoundingClientRect();
            }
            return { left: -9999, top: -9999 };
          },
          getCSSVars() {
            var e,
              t = getComputedStyle(this.DOM.scope, null);
            this.CSSVars = {
              tagHideTransition: (({ value: e, unit: t }) =>
                "s" == t ? 1e3 * e : e)(
                (function (e) {
                  if (!e) return {};
                  var t = (e = e.trim().split(" ")[0])
                    .split(/\d+/g)
                    .filter((e) => e)
                    .pop()
                    .trim();
                  return {
                    value: +e
                      .split(t)
                      .filter((e) => e)[0]
                      .trim(),
                    unit: t,
                  };
                })(((e = "tag-hide-transition"), t.getPropertyValue("--" + e)))
              ),
            };
          },
          build(e) {
            var t = this.DOM;
            this.settings.mixMode.integrated
              ? ((t.originalInput = null), (t.scope = e), (t.input = e))
              : ((t.originalInput = e),
                (t.originalInput_tabIndex = e.tabIndex),
                (t.scope = this.parseTemplate("wrapper", [e, this.settings])),
                (t.input = t.scope.querySelector(
                  this.settings.classNames.inputSelector
                )),
                e.parentNode.insertBefore(t.scope, e),
                (e.tabIndex = -1));
          },
          destroy() {
            this.events.unbindGlobal.call(this),
              this.DOM.scope.parentNode.removeChild(this.DOM.scope),
              (this.DOM.originalInput.tabIndex =
                this.DOM.originalInput_tabIndex),
              this.dropdown.hide(!0),
              clearTimeout(this.dropdownHide__bindEventsTimeout);
          },
          loadOriginalValues(e) {
            var t,
              n = this.settings;
            if (((this.state.blockChangeEvent = !0), void 0 === e)) {
              const t = this.getPersistedData("value");
              e =
                t && !this.DOM.originalInput.value
                  ? t
                  : n.mixMode.integrated
                  ? this.DOM.input.textContent
                  : this.DOM.originalInput.value;
            }
            if ((this.removeAllTags(), e))
              if ("mix" == n.mode)
                this.parseMixTags(this.trim(e)),
                  ((t = this.DOM.input.lastChild) && "BR" == t.tagName) ||
                    this.DOM.input.insertAdjacentHTML("beforeend", "<br>");
              else {
                try {
                  JSON.parse(e) instanceof Array && (e = JSON.parse(e));
                } catch (e) {}
                this.addTags(e).forEach(
                  (e) => e && e.classList.add(n.classNames.tagNoAnimation)
                );
              }
            else this.postUpdate();
            (this.state.lastOriginalValueReported = n.mixMode.integrated
              ? ""
              : this.DOM.originalInput.value),
              (this.state.blockChangeEvent = !1);
          },
          cloneEvent(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t;
          },
          loading(e) {
            return (
              (this.state.isLoading = e),
              this.DOM.scope.classList[e ? "add" : "remove"](
                this.settings.classNames.scopeLoading
              ),
              this
            );
          },
          tagLoading(e, t) {
            return (
              e &&
                e.classList[t ? "add" : "remove"](
                  this.settings.classNames.tagLoading
                ),
              this
            );
          },
          toggleClass(e, t) {
            "string" == typeof e && this.DOM.scope.classList.toggle(e, t);
          },
          toggleFocusClass(e) {
            this.toggleClass(this.settings.classNames.focus, !!e);
          },
          triggerChangeEvent: function () {
            if (!this.settings.mixMode.integrated) {
              var e = this.DOM.originalInput,
                t = this.state.lastOriginalValueReported !== e.value,
                n = new CustomEvent("change", { bubbles: !0 });
              t &&
                ((this.state.lastOriginalValueReported = e.value),
                (n.simulated = !0),
                e._valueTracker && e._valueTracker.setValue(Math.random()),
                e.dispatchEvent(n),
                this.trigger("change", this.state.lastOriginalValueReported),
                (e.value = this.state.lastOriginalValueReported));
            }
          },
          events: T,
          fixFirefoxLastTagNoCaret() {},
          placeCaretAfterNode(e) {
            if (e && e.parentNode) {
              var t = e.nextSibling,
                n = window.getSelection(),
                a = n.getRangeAt(0);
              n.rangeCount &&
                (a.setStartAfter(t || e),
                a.collapse(!0),
                n.removeAllRanges(),
                n.addRange(a));
            }
          },
          insertAfterTag(e, t) {
            if (
              ((t = t || this.settings.mixMode.insertAfterTag),
              e && e.parentNode && t)
            )
              return (
                (t = "string" == typeof t ? document.createTextNode(t) : t),
                e.parentNode.insertBefore(t, e.nextSibling),
                t
              );
          },
          editTag(e, t) {
            (e = e || this.getLastTag()), (t = t || {}), this.dropdown.hide();
            var n = this.settings;
            function a() {
              return e.querySelector(n.classNames.tagTextSelector);
            }
            var r = a(),
              i = this.getNodeIndex(e),
              o = this.tagData(e),
              s = this.events.callbacks,
              l = this,
              c = !0;
            if (r) {
              if (!(o instanceof Object && "editable" in o) || o.editable)
                return (
                  r.setAttribute("contenteditable", !0),
                  e.classList.add(n.classNames.tagEditing),
                  this.tagData(e, {
                    __originalData: u({}, o),
                    __originalHTML: e.innerHTML,
                  }),
                  r.addEventListener("focus", s.onEditTagFocus.bind(this, e)),
                  r.addEventListener("blur", function () {
                    setTimeout(() => s.onEditTagBlur.call(l, a()));
                  }),
                  r.addEventListener("input", s.onEditTagInput.bind(this, r)),
                  r.addEventListener("keydown", (t) =>
                    s.onEditTagkeydown.call(this, t, e)
                  ),
                  r.focus(),
                  this.setRangeAtStartEnd(!1, r),
                  t.skipValidation || (c = this.editTagToggleValidity(e)),
                  (r.originalIsValid = c),
                  this.trigger("edit:start", {
                    tag: e,
                    index: i,
                    data: o,
                    isValid: c,
                  }),
                  this
                );
            } else
              console.warn(
                "Cannot find element in Tag template: .",
                n.classNames.tagTextSelector
              );
          },
          editTagToggleValidity(e, t) {
            var n;
            if ((t = t || this.tagData(e)))
              return (
                (n = !("__isValid" in t) || !0 === t.__isValid) ||
                  this.removeTagsFromValue(e),
                this.update(),
                e.classList.toggle(this.settings.classNames.tagNotAllowed, !n),
                t.__isValid
              );
            console.warn("tag has no data: ", e, t);
          },
          onEditTagDone(e, t) {
            t = t || {};
            var n = {
              tag: (e = e || this.state.editing.scope),
              index: this.getNodeIndex(e),
              previousData: this.tagData(e),
              data: t,
            };
            this.trigger("edit:beforeUpdate", n, { cloneData: !1 }),
              (this.state.editing = !1),
              delete t.__originalData,
              delete t.__originalHTML,
              e && t[this.settings.tagTextProp]
                ? ((e = this.replaceTag(e, t)),
                  this.editTagToggleValidity(e, t),
                  this.settings.a11y.focusableTags
                    ? e.focus()
                    : this.placeCaretAfterNode(e.previousSibling))
                : e && this.removeTags(e),
              this.trigger("edit:updated", n),
              this.dropdown.hide(),
              this.settings.keepInvalidTags && this.reCheckInvalidTags();
          },
          replaceTag(e, t) {
            (t && t.value) || (t = e.__tagifyTagData),
              t.__isValid &&
                1 != t.__isValid &&
                u(t, this.getInvalidTagAttrs(t, t.__isValid));
            var n = this.createTagElem(t);
            return (
              e.parentNode.replaceChild(n, e), this.updateValueByDOMTags(), n
            );
          },
          updateValueByDOMTags() {
            (this.value.length = 0),
              [].forEach.call(this.getTagElms(), (e) => {
                e.classList.contains(
                  this.settings.classNames.tagNotAllowed.split(" ")[0]
                ) || this.value.push(this.tagData(e));
              }),
              this.update();
          },
          setRangeAtStartEnd(e, t) {
            (e = "number" == typeof e ? e : !!e),
              (t = (t = t || this.DOM.input).lastChild || t);
            var n = document.getSelection();
            try {
              n.rangeCount >= 1 &&
                ["Start", "End"].forEach((a) =>
                  n.getRangeAt(0)["set" + a](t, e || t.length)
                );
            } catch (e) {}
          },
          injectAtCaret(e, t) {
            if ((t = t || this.state.selection.range))
              return (
                "string" == typeof e && (e = document.createTextNode(e)),
                t.deleteContents(),
                t.insertNode(e),
                this.setRangeAtStartEnd(!1, e),
                this.updateValueByDOMTags(),
                this.update(),
                this
              );
          },
          input: {
            set(e = "", t = !0) {
              var n = this.settings.dropdown.closeOnSelect;
              (this.state.inputText = e),
                t && (this.DOM.input.innerHTML = c("" + e)),
                !e && n && this.dropdown.hide.bind(this),
                this.input.autocomplete.suggest.call(this),
                this.input.validate.call(this);
            },
            raw() {
              return this.DOM.input.textContent;
            },
            validate() {
              var e =
                !this.state.inputText ||
                !0 === this.validateTag({ value: this.state.inputText });
              return (
                this.DOM.input.classList.toggle(
                  this.settings.classNames.inputInvalid,
                  !e
                ),
                e
              );
            },
            normalize(e) {
              var t = e || this.DOM.input,
                n = [];
              t.childNodes.forEach(
                (e) => 3 == e.nodeType && n.push(e.nodeValue)
              ),
                (n = n.join("\n"));
              try {
                n = n.replace(
                  /(?:\r\n|\r|\n)/g,
                  this.settings.delimiters.source.charAt(0)
                );
              } catch (e) {}
              return (
                (n = n.replace(/\s/g, " ")),
                this.settings.trim && (n = n.replace(/^\s+/, "")),
                this.trim(n)
              );
            },
            autocomplete: {
              suggest(e) {
                if (this.settings.autoComplete.enabled) {
                  "string" == typeof (e = e || {}) && (e = { value: e });
                  var t = e.value ? "" + e.value : "",
                    n = t.substr(0, this.state.inputText.length).toLowerCase(),
                    a = t.substring(this.state.inputText.length);
                  t &&
                  this.state.inputText &&
                  n == this.state.inputText.toLowerCase()
                    ? (this.DOM.input.setAttribute("data-suggest", a),
                      (this.state.inputSuggestion = e))
                    : (this.DOM.input.removeAttribute("data-suggest"),
                      delete this.state.inputSuggestion);
                }
              },
              set(e) {
                var t = this.DOM.input.getAttribute("data-suggest"),
                  n = e || (t ? this.state.inputText + t : null);
                return (
                  !!n &&
                  ("mix" == this.settings.mode
                    ? this.replaceTextWithNode(
                        document.createTextNode(this.state.tag.prefix + n)
                      )
                    : (this.input.set.call(this, n), this.setRangeAtStartEnd()),
                  this.input.autocomplete.suggest.call(this),
                  this.dropdown.hide(),
                  !0)
                );
              },
            },
          },
          getTagIdx(e) {
            return this.value.findIndex((t) => t.__tagId == (e || {}).__tagId);
          },
          getNodeIndex(e) {
            var t = 0;
            if (e) for (; (e = e.previousElementSibling); ) t++;
            return t;
          },
          getTagElms(...e) {
            var t =
              "." +
              [...this.settings.classNames.tag.split(" "), ...e].join(".");
            return [].slice.call(this.DOM.scope.querySelectorAll(t));
          },
          getLastTag() {
            var e = this.DOM.scope.querySelectorAll(
              `${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`
            );
            return e[e.length - 1];
          },
          tagData: (e, t, n) =>
            e
              ? (t &&
                  (e.__tagifyTagData = n
                    ? t
                    : u({}, e.__tagifyTagData || {}, t)),
                e.__tagifyTagData)
              : (console.warn("tag element doesn't exist", e, t), t),
          isTagDuplicate(e, t, n) {
            var r = this.settings;
            return (
              "select" != r.mode &&
              this.value.reduce(
                (i, o) =>
                  a(
                    this.trim("" + e),
                    o.value,
                    t || r.dropdown.caseSensitive
                  ) && n != o.__tagId
                    ? i + 1
                    : i,
                0
              )
            );
          },
          getTagIndexByValue(e) {
            var t = [];
            return (
              this.getTagElms().forEach((n, r) => {
                a(
                  this.trim(n.textContent),
                  e,
                  this.settings.dropdown.caseSensitive
                ) && t.push(r);
              }),
              t
            );
          },
          getTagElmByValue(e) {
            var t = this.getTagIndexByValue(e)[0];
            return this.getTagElms()[t];
          },
          flashTag(e) {
            e &&
              (e.classList.add(this.settings.classNames.tagFlash),
              setTimeout(() => {
                e.classList.remove(this.settings.classNames.tagFlash);
              }, 100));
          },
          isTagBlacklisted(e) {
            return (
              (e = this.trim(e.toLowerCase())),
              this.settings.blacklist.filter((t) => ("" + t).toLowerCase() == e)
                .length
            );
          },
          isTagWhitelisted(e) {
            return !!this.getWhitelistItem(e);
          },
          getWhitelistItem(e, t, n) {
            t = t || "value";
            var r,
              i = this.settings;
            return (
              (n = n || i.whitelist).some((n) => {
                var o = "string" == typeof n ? n : n[t] || n.value;
                if (a(o, e, i.dropdown.caseSensitive, i.trim))
                  return (r = "string" == typeof n ? { value: n } : n), !0;
              }),
              r ||
                "value" != t ||
                "value" == i.tagTextProp ||
                (r = this.getWhitelistItem(e, i.tagTextProp, n)),
              r
            );
          },
          validateTag(e) {
            var t = this.settings,
              n = "value" in e ? "value" : t.tagTextProp,
              a = this.trim(e[n] + "");
            return (e[n] + "").trim()
              ? t.pattern && t.pattern instanceof RegExp && !t.pattern.test(a)
                ? this.TEXTS.pattern
                : !t.duplicates &&
                  this.isTagDuplicate(a, this.state.editing, e.__tagId)
                ? this.TEXTS.duplicate
                : this.isTagBlacklisted(a) ||
                  (t.enforceWhitelist && !this.isTagWhitelisted(a))
                ? this.TEXTS.notAllowed
                : !t.validate || t.validate(e)
              : this.TEXTS.empty;
          },
          getInvalidTagAttrs(e, t) {
            return {
              "aria-invalid": !0,
              class: `${e.class || ""} ${
                this.settings.classNames.tagNotAllowed
              }`.trim(),
              title: t,
            };
          },
          hasMaxTags() {
            return (
              this.value.length >= this.settings.maxTags && this.TEXTS.exceed
            );
          },
          setReadonly(e, t) {
            var n = this.settings;
            document.activeElement.blur(),
              (n[t || "readonly"] = e),
              this.DOM.scope[(e ? "set" : "remove") + "Attribute"](
                t || "readonly",
                !0
              ),
              this.setContentEditable(!e);
          },
          setContentEditable(e) {
            !this.settings.readonly &&
              this.settings.userInput &&
              ((this.DOM.input.contentEditable = e),
              (this.DOM.input.tabIndex = e ? 0 : -1));
          },
          setDisabled(e) {
            this.setReadonly(e, "disabled");
          },
          normalizeTags(e) {
            var t = this.settings,
              n = t.whitelist,
              a = t.delimiters,
              r = t.mode,
              i = t.tagTextProp;
            t.enforceWhitelist;
            var o = [],
              s = !!n && n[0] instanceof Object,
              l = e instanceof Array,
              c = (e) =>
                (e + "")
                  .split(a)
                  .filter((e) => e)
                  .map((e) => ({ [i]: this.trim(e), value: this.trim(e) }));
            if (
              ("number" == typeof e && (e = e.toString()), "string" == typeof e)
            ) {
              if (!e.trim()) return [];
              e = c(e);
            } else l && (e = [].concat(...e.map((e) => (e.value ? e : c(e)))));
            return (
              s &&
                (e.forEach((e) => {
                  var t = o.map((e) => e.value),
                    n = this.dropdown.filterListItems.call(this, e[i], {
                      exact: !0,
                    });
                  this.settings.duplicates ||
                    (n = n.filter((e) => !t.includes(e.value)));
                  var a =
                    n.length > 1 ? this.getWhitelistItem(e[i], i, n) : n[0];
                  a && a instanceof Object
                    ? o.push(a)
                    : "mix" != r &&
                      (null == e.value && (e.value = e[i]), o.push(e));
                }),
                o.length && (e = o)),
              e
            );
          },
          parseMixTags(e) {
            var t = this.settings,
              n = t.mixTagsInterpolator,
              a = t.duplicates,
              r = t.transformTag,
              i = t.enforceWhitelist,
              o = t.maxTags,
              s = t.tagTextProp,
              l = [];
            return (
              (e = e
                .split(n[0])
                .map((e, t) => {
                  var c,
                    p,
                    u,
                    d = e.split(n[1]),
                    m = d[0],
                    h = l.length == o;
                  try {
                    if (m == +m) throw Error;
                    p = JSON.parse(m);
                  } catch (e) {
                    p = this.normalizeTags(m)[0] || { value: m };
                  }
                  if (
                    (r.call(this, p),
                    h ||
                      !(d.length > 1) ||
                      (i && !this.isTagWhitelisted(p.value)) ||
                      (!a && this.isTagDuplicate(p.value)))
                  ) {
                    if (e) return t ? n[0] + e : e;
                  } else
                    (p[(c = p[s] ? s : "value")] = this.trim(p[c])),
                      (u = this.createTagElem(p)),
                      l.push(p),
                      u.classList.add(this.settings.classNames.tagNoAnimation),
                      (d[0] = u.outerHTML),
                      this.value.push(p);
                  return d.join("");
                })
                .join("")),
              (this.DOM.input.innerHTML = e),
              this.DOM.input.appendChild(document.createTextNode("")),
              this.DOM.input.normalize(),
              this.getTagElms().forEach((e, t) => this.tagData(e, l[t])),
              this.update({ withoutChangeEvent: !0 }),
              e
            );
          },
          replaceTextWithNode(e, t) {
            if (this.state.tag || t) {
              t = t || this.state.tag.prefix + this.state.tag.value;
              var n,
                a,
                r = window.getSelection(),
                i = r.anchorNode,
                o = this.state.tag.delimiters
                  ? this.state.tag.delimiters.length
                  : 0;
              return (
                i.splitText(r.anchorOffset - o),
                -1 == (n = i.nodeValue.lastIndexOf(t)) ||
                  ((a = i.splitText(n)), e && i.parentNode.replaceChild(e, a)),
                !0
              );
            }
          },
          selectTag(e, t) {
            var n = this.settings;
            if (!n.enforceWhitelist || this.isTagWhitelisted(t.value)) {
              this.input.set.call(this, t[n.tagTextProp] || t.value, !0),
                this.state.actions.selectOption &&
                  setTimeout(this.setRangeAtStartEnd.bind(this));
              var a = this.getLastTag();
              return (
                a ? this.replaceTag(a, t) : this.appendTag(e),
                (this.value[0] = t),
                this.update(),
                this.trigger("add", { tag: e, data: t }),
                [e]
              );
            }
          },
          addEmptyTag(e) {
            var t = u({ value: "" }, e || {}),
              n = this.createTagElem(t);
            this.tagData(n, t),
              this.appendTag(n),
              this.editTag(n, { skipValidation: !0 });
          },
          addTags(e, t, n) {
            var a = [],
              r = this.settings,
              i = document.createDocumentFragment();
            return (
              (n = n || r.skipInvalid),
              e && 0 != e.length
                ? ((e = this.normalizeTags(e)),
                  "mix" == r.mode
                    ? this.addMixTags(e)
                    : ("select" == r.mode && (t = !1),
                      this.DOM.input.removeAttribute("style"),
                      e.forEach((e) => {
                        var t,
                          o = {},
                          s = Object.assign({}, e, { value: e.value + "" });
                        if (
                          ((e = Object.assign({}, s)),
                          r.transformTag.call(this, e),
                          (e.__isValid =
                            this.hasMaxTags() || this.validateTag(e)),
                          !0 !== e.__isValid)
                        ) {
                          if (n) return;
                          u(o, this.getInvalidTagAttrs(e, e.__isValid), {
                            __preInvalidData: s,
                          }),
                            e.__isValid == this.TEXTS.duplicate &&
                              this.flashTag(this.getTagElmByValue(e.value));
                        }
                        if (
                          ("readonly" in e &&
                            (e.readonly
                              ? (o["aria-readonly"] = !0)
                              : delete e.readonly),
                          (t = this.createTagElem(e, o)),
                          a.push(t),
                          "select" == r.mode)
                        )
                          return this.selectTag(t, e);
                        i.appendChild(t),
                          e.__isValid && !0 === e.__isValid
                            ? (this.value.push(e),
                              this.trigger("add", {
                                tag: t,
                                index: this.value.length - 1,
                                data: e,
                              }))
                            : (this.trigger("invalid", {
                                data: e,
                                index: this.value.length,
                                tag: t,
                                message: e.__isValid,
                              }),
                              r.keepInvalidTags ||
                                setTimeout(() => this.removeTags(t, !0), 1e3)),
                          this.dropdown.position();
                      }),
                      this.appendTag(i),
                      this.update(),
                      e.length && t && this.input.set.call(this),
                      this.dropdown.refilter(),
                      a))
                : ("select" == r.mode && this.removeAllTags(), a)
            );
          },
          addMixTags(e) {
            if ((e = this.normalizeTags(e))[0].prefix || this.state.tag)
              return this.prefixedTextToTag(e[0]);
            "string" == typeof e && (e = [{ value: e }]);
            var t = !!this.state.selection,
              n = document.createDocumentFragment();
            return (
              e.forEach((e) => {
                var t = this.createTagElem(e);
                n.appendChild(t), this.insertAfterTag(t);
              }),
              t
                ? this.injectAtCaret(n)
                : (this.DOM.input.focus(),
                  (t = this.setStateSelection()).range.setStart(
                    this.DOM.input,
                    t.range.endOffset
                  ),
                  t.range.setEnd(this.DOM.input, t.range.endOffset),
                  this.DOM.input.appendChild(n),
                  this.updateValueByDOMTags(),
                  this.update()),
              n
            );
          },
          prefixedTextToTag(e) {
            var t,
              n = this.settings,
              a = this.state.tag.delimiters;
            if (
              (n.transformTag.call(this, e),
              (e.prefix =
                e.prefix || this.state.tag
                  ? this.state.tag.prefix
                  : (n.pattern.source || n.pattern)[0]),
              (t = this.createTagElem(e)),
              this.replaceTextWithNode(t) || this.DOM.input.appendChild(t),
              setTimeout(
                () => t.classList.add(this.settings.classNames.tagNoAnimation),
                300
              ),
              this.value.push(e),
              this.update(),
              !a)
            ) {
              var r = this.insertAfterTag(t) || t;
              this.placeCaretAfterNode(r);
            }
            return (
              (this.state.tag = null),
              this.trigger("add", u({}, { tag: t }, { data: e })),
              t
            );
          },
          appendTag(e) {
            var t = this.DOM,
              n = t.input;
            n === t.input ? t.scope.insertBefore(e, n) : t.scope.appendChild(e);
          },
          createTagElem(e, n) {
            e.__tagId = g();
            var a,
              r = u({}, e, t({ value: c(e.value + "") }, n));
            return (
              (function (e) {
                for (
                  var t,
                    n = document.createNodeIterator(
                      e,
                      NodeFilter.SHOW_TEXT,
                      null,
                      !1
                    );
                  (t = n.nextNode());

                )
                  t.textContent.trim() || t.parentNode.removeChild(t);
              })((a = this.parseTemplate("tag", [r]))),
              this.tagData(a, e),
              a
            );
          },
          reCheckInvalidTags() {
            var e = this.settings;
            this.getTagElms(e.classNames.tagNotAllowed).forEach((e, t) => {
              var n = this.tagData(e),
                a = this.hasMaxTags(),
                r = this.validateTag(n);
              if (!0 === r && !a)
                return (
                  (n = n.__preInvalidData
                    ? n.__preInvalidData
                    : { value: n.value }),
                  this.replaceTag(e, n)
                );
              e.title = a || r;
            });
          },
          removeTags(e, t, n) {
            var a;
            if (
              ((e =
                e && e instanceof HTMLElement
                  ? [e]
                  : e instanceof Array
                  ? e
                  : e
                  ? [e]
                  : [this.getLastTag()]),
              (a = e.reduce((e, t) => {
                t && "string" == typeof t && (t = this.getTagElmByValue(t));
                var n = this.tagData(t);
                return (
                  t &&
                    n &&
                    !n.readonly &&
                    e.push({
                      node: t,
                      idx: this.getTagIdx(n),
                      data: this.tagData(t, { __removed: !0 }),
                    }),
                  e
                );
              }, [])),
              (n = "number" == typeof n ? n : this.CSSVars.tagHideTransition),
              "select" == this.settings.mode &&
                ((n = 0), this.input.set.call(this)),
              1 == a.length &&
                a[0].node.classList.contains(
                  this.settings.classNames.tagNotAllowed
                ) &&
                (t = !0),
              a.length)
            )
              return this.settings.hooks
                .beforeRemoveTag(a, { tagify: this })
                .then(() => {
                  function e(e) {
                    e.node.parentNode &&
                      (e.node.parentNode.removeChild(e.node),
                      t
                        ? this.settings.keepInvalidTags &&
                          this.trigger("remove", { tag: e.node, index: e.idx })
                        : (this.trigger("remove", {
                            tag: e.node,
                            index: e.idx,
                            data: e.data,
                          }),
                          this.dropdown.refilter(),
                          this.dropdown.position(),
                          this.DOM.input.normalize(),
                          this.settings.keepInvalidTags &&
                            this.reCheckInvalidTags()));
                  }
                  n && n > 10 && 1 == a.length
                    ? function (t) {
                        (t.node.style.width =
                          parseFloat(window.getComputedStyle(t.node).width) +
                          "px"),
                          document.body.clientTop,
                          t.node.classList.add(
                            this.settings.classNames.tagHide
                          ),
                          setTimeout(e.bind(this), n, t);
                      }.call(this, a[0])
                    : a.forEach(e.bind(this)),
                    t ||
                      (this.removeTagsFromValue(a.map((e) => e.node)),
                      this.update(),
                      "select" == this.settings.mode &&
                        this.setContentEditable(!0));
                })
                .catch((e) => {});
          },
          removeTagsFromDOM() {
            [].slice
              .call(this.getTagElms())
              .forEach((e) => e.parentNode.removeChild(e));
          },
          removeTagsFromValue(e) {
            (e = Array.isArray(e) ? e : [e]).forEach((e) => {
              var t = this.tagData(e),
                n = this.getTagIdx(t);
              n > -1 && this.value.splice(n, 1);
            });
          },
          removeAllTags(e) {
            (e = e || {}),
              (this.value = []),
              "mix" == this.settings.mode
                ? (this.DOM.input.innerHTML = "")
                : this.removeTagsFromDOM(),
              this.dropdown.position(),
              "select" == this.settings.mode &&
                (this.input.set.call(this), this.setContentEditable(!0)),
              this.update(e);
          },
          postUpdate() {
            var e = this.settings.classNames,
              t =
                "mix" == this.settings.mode
                  ? this.settings.mixMode.integrated
                    ? this.DOM.input.textContent
                    : this.DOM.originalInput.value.trim()
                  : this.value.length + this.input.raw.call(this).length;
            this.toggleClass(
              e.hasMaxTags,
              this.value.length >= this.settings.maxTags
            ),
              this.toggleClass(e.hasNoTags, !this.value.length),
              this.toggleClass(e.empty, !t);
          },
          setOriginalInputValue(e) {
            var t = this.DOM.originalInput;
            this.settings.mixMode.integrated ||
              ((t.value = e),
              (t.tagifyValue = t.value),
              this.setPersistedData(e, "value"));
          },
          update(e) {
            var t = this.getInputValue();
            this.setOriginalInputValue(t),
              this.postUpdate(),
              (e || {}).withoutChangeEvent ||
                this.state.blockChangeEvent ||
                this.triggerChangeEvent();
          },
          getInputValue() {
            var e = this.getCleanValue();
            return "mix" == this.settings.mode
              ? this.getMixedTagsAsString(e)
              : e.length
              ? this.settings.originalInputValueFormat
                ? this.settings.originalInputValueFormat(e)
                : JSON.stringify(e)
              : "";
          },
          getCleanValue(e) {
            return r(e || this.value, this.dataProps);
          },
          getMixedTagsAsString() {
            var e = "",
              t = this,
              n = this.settings.mixTagsInterpolator;
            return (
              (function a(r) {
                r.childNodes.forEach((r) => {
                  if (1 == r.nodeType) {
                    const o = t.tagData(r);
                    if (
                      ("BR" == r.tagName && (e += "\r\n"),
                      r.getAttribute("style") ||
                        ["B", "I", "U"].includes(r.tagName))
                    )
                      e += r.textContent;
                    else if ("DIV" == r.tagName || "P" == r.tagName)
                      (e += "\r\n"), a(r);
                    else if (f.call(t, r) && o) {
                      if (o.__removed) return;
                      e += n[0] + JSON.stringify(i(o, t.dataProps)) + n[1];
                    }
                  } else e += r.textContent;
                });
              })(this.DOM.input),
              e
            );
          },
        }),
        (_.prototype.removeTag = _.prototype.removeTags),
        _
      );
    })();
  },
  function (e, t, n) {
    var a = n(39),
      r = n(52),
      i = n(55),
      o = Math.max,
      s = Math.min;
    e.exports = function (e, t, n) {
      var l,
        c,
        p,
        u,
        d,
        m,
        h = 0,
        g = !1,
        f = !1,
        w = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function b(t) {
        var n = l,
          a = c;
        return (l = c = void 0), (h = t), (u = e.apply(a, n));
      }
      function v(e) {
        return (h = e), (d = setTimeout(k, t)), g ? b(e) : u;
      }
      function y(e) {
        var n = e - m;
        return void 0 === m || n >= t || n < 0 || (f && e - h >= p);
      }
      function k() {
        var e = r();
        if (y(e)) return O(e);
        d = setTimeout(
          k,
          (function (e) {
            var n = t - (e - m);
            return f ? s(n, p - (e - h)) : n;
          })(e)
        );
      }
      function O(e) {
        return (d = void 0), w && l ? b(e) : ((l = c = void 0), u);
      }
      function E() {
        var e = r(),
          n = y(e);
        if (((l = arguments), (c = this), (m = e), n)) {
          if (void 0 === d) return v(m);
          if (f) return clearTimeout(d), (d = setTimeout(k, t)), b(m);
        }
        return void 0 === d && (d = setTimeout(k, t)), u;
      }
      return (
        (t = i(t) || 0),
        a(n) &&
          ((g = !!n.leading),
          (p = (f = "maxWait" in n) ? o(i(n.maxWait) || 0, t) : p),
          (w = "trailing" in n ? !!n.trailing : w)),
        (E.cancel = function () {
          void 0 !== d && clearTimeout(d), (h = 0), (l = m = c = d = void 0);
        }),
        (E.flush = function () {
          return void 0 === d ? u : O(r());
        }),
        E
      );
    };
  },
  ,
  function (e, t, n) {
    "use strict";
    var a = n(35),
      r =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103,
      i = n(38),
      o = n(49),
      s = n(50),
      l = "function" == typeof Symbol && Symbol.iterator;
    function c(e, t) {
      return e && "object" == typeof e && null != e.key
        ? ((n = e.key),
          (a = { "=": "=0", ":": "=2" }),
          "$" +
            ("" + n).replace(/[=:]/g, function (e) {
              return a[e];
            }))
        : t.toString(36);
      var n, a;
    }
    function p(e, t, n, a) {
      var i,
        s = typeof e;
      if (
        (("undefined" !== s && "boolean" !== s) || (e = null),
        null === e ||
          "string" === s ||
          "number" === s ||
          ("object" === s && e.$$typeof === r))
      )
        return n(a, e, "" === t ? "." + c(e, 0) : t), 1;
      var u = 0,
        d = "" === t ? "." : t + ":";
      if (Array.isArray(e))
        for (var m = 0; m < e.length; m++)
          u += p((i = e[m]), d + c(i, m), n, a);
      else {
        var h = (function (e) {
          var t = e && ((l && e[l]) || e["@@iterator"]);
          if ("function" == typeof t) return t;
        })(e);
        if (h) {
          0;
          for (var g, f = h.call(e), w = 0; !(g = f.next()).done; )
            u += p((i = g.value), d + c(i, w++), n, a);
        } else if ("object" === s) {
          0;
          var b = "" + e;
          o(
            !1,
            "Objects are not valid as a React child (found: %s).%s",
            "[object Object]" === b
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : b,
            ""
          );
        }
      }
      return u;
    }
    var u = /\/+/g;
    function d(e) {
      return ("" + e).replace(u, "$&/");
    }
    var m,
      h,
      g = f,
      f = function (e) {
        var t = this;
        if (t.instancePool.length) {
          var n = t.instancePool.pop();
          return t.call(n, e), n;
        }
        return new t(e);
      },
      w = function (e) {
        var t = this;
        o(
          e instanceof t,
          "Trying to release an instance into a pool of a different type."
        ),
          e.destructor(),
          t.instancePool.length < t.poolSize && t.instancePool.push(e);
      };
    function b(e, t, n, a) {
      (this.result = e),
        (this.keyPrefix = t),
        (this.func = n),
        (this.context = a),
        (this.count = 0);
    }
    function v(e, t, n) {
      var r,
        o,
        s = e.result,
        l = e.keyPrefix,
        c = e.func,
        p = e.context,
        u = c.call(p, t, e.count++);
      Array.isArray(u)
        ? y(u, s, n, i.thatReturnsArgument)
        : null != u &&
          (a.isValidElement(u) &&
            ((r = u),
            (o =
              l + (!u.key || (t && t.key === u.key) ? "" : d(u.key) + "/") + n),
            (u = a.cloneElement(
              r,
              { key: o },
              void 0 !== r.props ? r.props.children : void 0
            ))),
          s.push(u));
    }
    function y(e, t, n, a, r) {
      var i = "";
      null != n && (i = d(n) + "/");
      var o = b.getPooled(t, i, a, r);
      !(function (e, t, n) {
        null == e || p(e, "", t, n);
      })(e, v, o),
        b.release(o);
    }
    (b.prototype.destructor = function () {
      (this.result = null),
        (this.keyPrefix = null),
        (this.func = null),
        (this.context = null),
        (this.count = 0);
    }),
      (m = function (e, t, n, a) {
        var r = this;
        if (r.instancePool.length) {
          var i = r.instancePool.pop();
          return r.call(i, e, t, n, a), i;
        }
        return new r(e, t, n, a);
      }),
      ((h = b).instancePool = []),
      (h.getPooled = m || g),
      h.poolSize || (h.poolSize = 10),
      (h.release = w);
    e.exports = function (e) {
      if ("object" != typeof e || !e || Array.isArray(e))
        return (
          s(
            !1,
            "React.addons.createFragment only accepts a single object. Got: %s",
            e
          ),
          e
        );
      if (a.isValidElement(e))
        return (
          s(
            !1,
            "React.addons.createFragment does not accept a ReactElement without a wrapper object."
          ),
          e
        );
      o(
        1 !== e.nodeType,
        "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components."
      );
      var t = [];
      for (var n in e) y(e[n], t, n, i.thatReturnsArgument);
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, a, r, i, o, s) {
      if (!e) {
        var l;
        if (void 0 === t)
          l = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var c = [n, a, r, i, o, s],
            p = 0;
          (l = new Error(
            t.replace(/%s/g, function () {
              return c[p++];
            })
          )).name = "Invariant Violation";
        }
        throw ((l.framesToPop = 1), l);
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(38);
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    function a(e) {
      return e.match(/^\{\{\//)
        ? { type: "componentClose", value: e.replace(/\W/g, "") }
        : e.match(/\/\}\}$/)
        ? { type: "componentSelfClosing", value: e.replace(/\W/g, "") }
        : e.match(/^\{\{/)
        ? { type: "componentOpen", value: e.replace(/\W/g, "") }
        : { type: "string", value: e };
    }
    e.exports = function (e) {
      return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(a);
    };
  },
  function (e, t, n) {
    var a = n(40);
    e.exports = function () {
      return a.Date.now();
    };
  },
  function (e, t, n) {
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.exports = n;
    }).call(this, n(54));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var a = n(56),
      r = n(39),
      i = n(58),
      o = /^[-+]0x[0-9a-f]+$/i,
      s = /^0b[01]+$/i,
      l = /^0o[0-7]+$/i,
      c = parseInt;
    e.exports = function (e) {
      if ("number" == typeof e) return e;
      if (i(e)) return NaN;
      if (r(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = r(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = a(e);
      var n = s.test(e);
      return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e;
    };
  },
  function (e, t, n) {
    var a = n(57),
      r = /^\s+/;
    e.exports = function (e) {
      return e ? e.slice(0, a(e) + 1).replace(r, "") : e;
    };
  },
  function (e, t) {
    var n = /\s/;
    e.exports = function (e) {
      for (var t = e.length; t-- && n.test(e.charAt(t)); );
      return t;
    };
  },
  function (e, t, n) {
    var a = n(59),
      r = n(62);
    e.exports = function (e) {
      return "symbol" == typeof e || (r(e) && "[object Symbol]" == a(e));
    };
  },
  function (e, t, n) {
    var a = n(41),
      r = n(60),
      i = n(61),
      o = a ? a.toStringTag : void 0;
    e.exports = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : o && o in Object(e)
        ? r(e)
        : i(e);
    };
  },
  function (e, t, n) {
    var a = n(41),
      r = Object.prototype,
      i = r.hasOwnProperty,
      o = r.toString,
      s = a ? a.toStringTag : void 0;
    e.exports = function (e) {
      var t = i.call(e, s),
        n = e[s];
      try {
        e[s] = void 0;
        var a = !0;
      } catch (e) {}
      var r = o.call(e);
      return a && (t ? (e[s] = n) : delete e[s]), r;
    };
  },
  function (e, t) {
    var n = Object.prototype.toString;
    e.exports = function (e) {
      return n.call(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e;
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(0),
      r = n(2),
      i = n(6),
      o = n(5),
      s = n(12),
      l = n.n(s),
      c = n(1),
      p = n(10),
      u = n(4);
    function d(e) {
      return (
        (d =
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
        d(e)
      );
    }
    var m = ["tabId", "onClick", "children", "selected"];
    function h(e, t, n) {
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
    function g(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function w(e, t) {
      return (
        (w = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        w(e, t)
      );
    }
    function b(e) {
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
          a = y(e);
        if (t) {
          var r = y(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else n = a.apply(this, arguments);
        return v(this, n);
      };
    }
    function v(e, t) {
      if (t && ("object" === d(t) || "function" == typeof t)) return t;
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
    function y(e) {
      return (
        (y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        y(e)
      );
    }
    function k() {
      return (
        (k = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
        k.apply(this, arguments)
      );
    }
    function O(e, t) {
      if (null == e) return {};
      var n,
        a,
        r = (function (e, t) {
          if (null == e) return {};
          var n,
            a,
            r = {},
            i = Object.keys(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++)
          (n = i[a]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (r[n] = e[n]));
      }
      return r;
    }
    var E = function (e) {
        var t = e.tabId,
          n = e.onClick,
          a = e.children,
          r = e.selected,
          i = O(e, m);
        return wp.element.createElement(
          u.Button,
          k(
            {
              role: "tab",
              tabIndex: r ? null : -1,
              "aria-selected": r,
              id: t,
              onClick: n,
            },
            i
          ),
          a
        );
      },
      T = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && w(e, t);
        })(i, e);
        var t,
          n,
          a,
          r = b(i);
        function i() {
          var e;
          g(this, i),
            ((e = r.apply(this, arguments)).handleClick = function (t) {
              var n = e.props.onSelect,
                a = void 0 === n ? c.noop : n;
              e.setState({ selected: t }), a(t);
            }),
            (e.onNavigate = function (e, t) {
              t.click();
            });
          var t = e.props,
            n = t.tabs,
            a = t.initialTabName;
          return (
            (e.state = { selected: a || (n.length > 0 ? n[0].name : null) }), e
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state.selected,
                  n = this.props,
                  a = n.activeClass,
                  r = void 0 === a ? "is-active" : a,
                  i = n.className,
                  o = n.instanceId,
                  s = n.orientation,
                  p = void 0 === s ? "horizontal" : s,
                  d = n.tabs,
                  m = Object(c.find)(d, { name: t }),
                  g = o + "-" + m.name,
                  f = d.slice(4);
                return wp.element.createElement(
                  "div",
                  { className: i },
                  wp.element.createElement(
                    u.NavigableMenu,
                    {
                      role: "tablist",
                      orientation: p,
                      onNavigate: this.onNavigate,
                      className: "components-tab-panel__tabs " + t,
                    },
                    d.slice(0, 4).map(function (n) {
                      return wp.element.createElement(
                        E,
                        {
                          className: l()(
                            "components-tab-panel__tabs-item",
                            n.className,
                            h({}, r, n.name === t)
                          ),
                          tabId: o + "-" + n.name,
                          "aria-controls": o + "-" + n.name + "-view",
                          selected: n.name === t,
                          key: n.name,
                          onClick: Object(c.partial)(e.handleClick, n.name),
                        },
                        n.title
                      );
                    }),
                    f.map(function (n) {
                      return wp.element.createElement(
                        E,
                        {
                          className: l()(
                            "components-tab-panel__tabs-item",
                            n.className,
                            h({}, r, n.name === t)
                          ),
                          tabId: o + "-" + n.name,
                          "aria-controls": o + "-" + n.name + "-view",
                          selected: n.name === t,
                          key: n.name,
                          onClick: Object(c.partial)(e.handleClick, n.name),
                        },
                        n.title
                      );
                    })
                  ),
                  m &&
                    wp.element.createElement(
                      "div",
                      {
                        "aria-labelledby": g,
                        role: "tabpanel",
                        id: g + "-view",
                        className: "components-tab-panel__tab-content",
                      },
                      this.props.children(m)
                    )
                );
              },
            },
          ]) && f(t.prototype, n),
          a && f(t, a),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          i
        );
      })(o.Component),
      _ = Object(p.withInstanceId)(T),
      x = n(16);
    function j(e, t, n) {
      var a = 0;
      return (
        !1 !== Object(c.get)(n, "pixelWidth", !1) &&
          (a = Math.min(100, Math.floor((t / n.pixelWidth) * 100))),
        Math.max(Math.min(100, Math.floor((e / n.max) * 100)), a) + "%"
      );
    }
    function C(e, t) {
      return e <= t.min || e > t.max;
    }
    function N(e, t) {
      return e <= t.minWidth || e > t.pixelWidth;
    }
    var S = function (e) {
        var t = (function (e, t) {
            var n = Object(x.a)(e).length,
              a = 0,
              r = !1;
            if (!1 !== Object(c.get)(t, "pixelWidth", !1)) {
              r = !0;
              var i = document.createTextNode(e),
                o = document.createElement("span");
              o.appendChild(i),
                (o.id = "rank-math-width-tester"),
                (o.className = t.widthCheckerClass);
              var s = document.body.appendChild(o);
              (a = document.getElementById(
                "rank-math-width-tester"
              ).offsetWidth),
                (s.outerHTML = "");
            }
            return {
              left: j(n, a, t),
              isInvalid: C(n, t),
              isInvalidWidth: !!r && N(a, t),
              count: n + " / " + t.max,
              pixelWidth: r ? a + "px / " + t.pixelWidth + "px" : "",
            };
          })(e.source, e),
          n = t.pixelWidth ? " (".concat(t.pixelWidth, ")") : "";
        return wp.element.createElement(
          "span",
          {
            className: l()("length-indicator-wrapper", {
              invalid: t.isInvalid || t.isInvalidWidth,
            }),
          },
          wp.element.createElement(
            "span",
            { className: "length-count" },
            t.count,
            n
          ),
          wp.element.createElement(
            "span",
            { className: "length-indicator" },
            wp.element.createElement("span", { style: { left: t.left } })
          )
        );
      },
      I = n(32),
      D = n(44),
      M = n.n(D),
      A = function (e) {
        var t = e.tags,
          n = e.components,
          a = e.children;
        return (
          (n = n || {}),
          !1 === Object(c.isUndefined)(t) &&
            (t = t.split(",")).forEach(function (e) {
              var t = e;
              n[e] = wp.element.createElement(t, null);
            }),
          M()({ mixedString: a, components: n })
        );
      };
    function P(e) {
      return (
        (P =
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
        P(e)
      );
    }
    function R(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function L(e, t) {
      return (
        (L = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        L(e, t)
      );
    }
    function F(e) {
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
          a = B(e);
        if (t) {
          var r = B(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else n = a.apply(this, arguments);
        return U(this, n);
      };
    }
    function U(e, t) {
      if (t && ("object" === P(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return H(e);
    }
    function H(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function B(e) {
      return (
        (B = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        B(e)
      );
    }
    var V = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && L(e, t);
        })(s, e);
        var t,
          n,
          r,
          i = F(s);
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            ((t = i.call(this, e)).state = {}),
            (t.state.variables = t.getFiltered()),
            (t.state.filtered = t.state.variables),
            (t.state.display = "none"),
            (t.state.isOpen = !1),
            (t.handleOutsideClick = t.handleOutsideClick.bind(H(t))),
            t
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "getFiltered",
              value: function () {
                var e = this.props.exclude,
                  t = Object.values(rankMath.variables);
                return Object(c.isUndefined)(e)
                  ? t
                  : t.filter(function (t) {
                      return !e.includes(t.variable);
                    });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return wp.element.createElement(
                  o.Fragment,
                  null,
                  wp.element.createElement(
                    "div",
                    {
                      className: "rank-math-variables-dropdown",
                      style: { display: this.state.display },
                      ref: function (t) {
                        e.node = t;
                      },
                    },
                    wp.element.createElement(u.TextControl, {
                      autoComplete: "off",
                      placeholder: Object(I.decodeEntities)(
                        Object(a.__)("Search &hellip;", "rank-math")
                      ),
                      onChange: function (t) {
                        e.handleSearch(t);
                      },
                    }),
                    wp.element.createElement(
                      "ul",
                      null,
                      this.state.filtered.map(function (t, n) {
                        return wp.element.createElement(
                          "li",
                          {
                            key: n,
                            "data-var": t.variable,
                            role: "presentation",
                            onClick: function () {
                              e.props.onClick(t);
                            },
                          },
                          wp.element.createElement("strong", null, t.name),
                          wp.element.createElement(
                            "span",
                            null,
                            wp.element.createElement(
                              A,
                              { tags: "strong" },
                              t.description
                                .replace("<strong>", "{{strong}}")
                                .replace("</strong>", "{{/strong}}")
                            )
                          )
                        );
                      }, this)
                    )
                  ),
                  wp.element.createElement(u.Button, {
                    icon: "arrow-down-alt2",
                    onClick: function () {
                      e.toggle();
                    },
                  })
                );
              },
            },
            {
              key: "toggle",
              value: function () {
                this.state.isOpen
                  ? document.removeEventListener(
                      "click",
                      this.handleOutsideClick,
                      !0
                    )
                  : document.addEventListener(
                      "click",
                      this.handleOutsideClick,
                      !0
                    ),
                  this.setState({
                    display: this.state.isOpen ? "none" : "block",
                    isOpen: !this.state.isOpen,
                  });
              },
            },
            {
              key: "handleOutsideClick",
              value: function (e) {
                this.node.contains(e.target) || this.toggle();
              },
            },
            {
              key: "handleSearch",
              value: function (e) {
                var t = e.toLowerCase();
                2 > t.length
                  ? this.setState({ filtered: this.state.variables })
                  : this.setState({
                      filtered: this.state.variables.filter(function (e) {
                        return (
                          -1 !==
                          Object.values(e).join(" ").toLowerCase().indexOf(t)
                        );
                      }),
                    });
              },
            },
          ]) && R(t.prototype, n),
          r && R(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          s
        );
      })(o.Component),
      z = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math");
          return { title: t.getTitle(), serpTitle: t.getSerpTitle() };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            updateTitle: function (t) {
              e("rank-math").updateSerpTitle(t), e("rank-math").updateTitle(t);
            },
          };
        })
      )(function (e) {
        var t = e.title,
          n = e.serpTitle,
          r = e.updateTitle;
        return wp.element.createElement(
          "div",
          { className: "field-group" },
          wp.element.createElement(
            "label",
            { htmlFor: "rank-math-editor-title" },
            Object(a.__)("Title", "rank-math")
          ),
          wp.element.createElement(S, {
            source: n,
            min: 15,
            max: 60,
            pixelWidth: 580,
            widthCheckerClass: "title",
          }),
          wp.element.createElement(
            "div",
            { className: "variable-group" },
            wp.element.createElement(u.TextControl, {
              id: "rank-math-editor-title",
              value: t,
              placeholder: rankMath.assessor.serpData.titleTemplate,
              help: Object(a.__)(
                "This is what will appear in the first line when this post shows up in the search results.",
                "rank-math"
              ),
              onChange: r,
            }),
            wp.element.createElement(V, {
              exclude: ["seo_title", "seo_description"],
              onClick: function (e) {
                return r(t + " %" + e.variable + "%");
              },
            })
          )
        );
      }),
      W = n(7),
      G = n(9);
    var K = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = rankMathEditor.assessor.dataCollector,
            n = e("rank-math").getSerpSlug();
          return {
            permalink: n || t.getSlug(),
            serpPermalink: t.getPermalink(),
          };
        }),
        Object(r.withDispatch)(function () {
          return {
            updatePermalink: function (e) {
              rankMathEditor.updatePermalink(W.Helpers.sanitizeText(e), !0);
            },
            updatePermalinkSanitize: function (e) {
              rankMathEditor.updatePermalinkSanitize(
                (function (e) {
                  return (
                    (e = e.replace(/,/g, "")),
                    (e = W.Helpers.removeDiacritics(e)),
                    W.Helpers.sanitizeText(e)
                  );
                })(e)
              );
            },
          };
        })
      )(function (e) {
        var t = e.permalink,
          n = e.serpPermalink,
          r = e.updatePermalink,
          i = e.updatePermalinkSanitize;
        return wp.element.createElement(
          "div",
          { className: "field-group" },
          wp.element.createElement(
            "label",
            { htmlFor: "rank-math-editor-permalink" },
            Object(a.__)("Permalink", "rank-math")
          ),
          wp.element.createElement(S, {
            source: Object(G.safeDecodeURIComponent)(n),
            min: 5,
            max: 75,
          }),
          wp.element.createElement(u.TextControl, {
            id: "rank-math-editor-permalink",
            value: rankMath.is_front_page
              ? "/"
              : Object(G.safeDecodeURIComponent)(t),
            onChange: r,
            help: rankMath.is_front_page
              ? Object(a.__)(
                  "Editing Homepage permalink is not possible.",
                  "rank-math"
                )
              : Object(a.__)(
                  "This is the unique URL of this page, displayed below the post title in the search results.",
                  "rank-math"
                ),
            disabled: rankMath.is_front_page ? "disabled" : "",
            onBlur: function (e) {
              i(e.target.value);
            },
          })
        );
      }),
      $ = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math");
          return {
            description: t.getDescription(),
            serpDescription: t.getSerpDescription(),
          };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            updateDescription: function (t) {
              e("rank-math").updateSerpDescription(t),
                e("rank-math").updateDescription(t);
            },
          };
        })
      )(function (e) {
        var t = e.description,
          n = e.serpDescription,
          r = e.updateDescription;
        return wp.element.createElement(
          "div",
          { className: "field-group" },
          wp.element.createElement(
            "label",
            { htmlFor: "rank-math-editor-description" },
            Object(a.__)("Description", "rank-math")
          ),
          wp.element.createElement(S, {
            source: n,
            min: 80,
            max: 160,
            pixelWidth: 920,
            widthCheckerClass: "description",
          }),
          wp.element.createElement(
            "div",
            { className: "variable-group rank-math-description-variables" },
            wp.element.createElement(u.TextareaControl, {
              id: "rank-math-editor-description",
              value: Object(x.a)(t),
              placeholder:
                n ||
                Object(c.unescape)(
                  rankMath.assessor.serpData.descriptionTemplate
                ),
              help: Object(a.__)(
                "This is what will appear as the description when this post shows up in the search results.",
                "rank-math"
              ),
              onChange: r,
            }),
            wp.element.createElement(V, {
              exclude: ["seo_title", "seo_description"],
              onClick: function (e) {
                return r(t + " %" + e.variable + "%");
              },
            })
          )
        );
      }),
      q = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          return { type: e("rank-math").getSnippetPreviewType() };
        }),
        Object(r.withDispatch)(function (e, t) {
          return {
            updatePreviewType: function (n) {
              e("rank-math").updateSnippetPreviewType(n === t.type ? "" : n);
            },
          };
        })
      )(function (e) {
        var t = e.type,
          n = e.updatePreviewType,
          a = l()("button button-secondary button-small", {
            active: "desktop" === t,
          }),
          r = l()("button button-secondary button-small", {
            active: "mobile" === t,
          });
        return wp.element.createElement(
          "div",
          { className: "rank-math-button-devices alignright" },
          wp.element.createElement(
            "div",
            {
              onClick: function () {
                return n("desktop");
              },
              className: a,
            },
            wp.element.createElement("i", {
              className: "rm-icon rm-icon-desktop",
            })
          ),
          wp.element.createElement(
            "div",
            {
              onClick: function () {
                return n("mobile");
              },
              className: r,
            },
            wp.element.createElement("i", {
              className: "rm-icon rm-icon-mobile",
            })
          )
        );
      }),
      Y = n(29),
      J = function (e, t, n, a) {
        return Object(c.isUndefined)(t)
          ? t
          : ((t = Object(c.truncate)(t, { length: n, separator: a || " " })),
            "" === e
              ? t
              : t.replace(
                  new RegExp(
                    (function (e) {
                      return e.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                    })(e),
                    "gi"
                  ),
                  function (e) {
                    return '<mark className="highlight">' + e + "</mark>";
                  }
                ));
      },
      X = function (e, t) {
        for (var n = [], a = 1; a <= e; a++)
          n.push(
            wp.element.createElement(u.Dashicon, {
              key: Math.random(),
              size: "13",
              icon: "star-" + t,
            })
          );
        return n;
      },
      Z = Object(r.withSelect)(function (e) {
        var t = e("rank-math").getSchemas();
        return {
          schema: Object(c.find)(t, function (e) {
            return !Object(c.isEmpty)(e.metadata.isPrimary);
          }),
        };
      })(function (e) {
        var t = e.schema;
        if (Object(c.isEmpty)(t)) return null;
        var n = Object(c.get)(t, "review.reviewRating", {}),
          r = n.ratingValue;
        if (Object(c.isEmpty)(r)) return null;
        Object(c.get)(n, "worstRating", 1);
        var i = Object(c.get)(n, "bestRating", 5);
        return wp.element.createElement(
          "div",
          { className: "rank-math-rating-preview" },
          wp.element.createElement(
            "div",
            { className: "serp-ratings" },
            X(i, "filled"),
            (function (e, t, n) {
              return (
                (e *= 100 / n),
                wp.element.createElement(
                  "div",
                  { className: "serp-result", style: { width: e + "%" } },
                  X(n, "filled")
                )
              );
            })(r, 0, i)
          ),
          wp.element.createElement(
            "span",
            { className: "serp-rating-label" },
            Object(a.__)("Rating: ", "rank-math")
          ),
          wp.element.createElement(
            "span",
            { className: "serp-rating-value" },
            r
          )
        );
      });
    function Q(e, t, n) {
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
    var ee = Object(r.withSelect)(function (e) {
        var t = e("rank-math"),
          n = t.getRobots();
        return {
          title: t.getSerpTitle(),
          permalink: rankMathEditor.assessor.dataCollector.getPermalink(),
          description: t.getSerpDescription(),
          previewType: t.getSnippetPreviewType(),
          isNoIndex: "noindex" in n,
          keyword: t.getSelectedKeyword().data.value,
        };
      })(function (e) {
        var t,
          n = e.title,
          r = e.permalink,
          i = e.description,
          o = e.previewType,
          s = void 0 === o ? "desktop" : o,
          c = e.isNoIndex,
          p = e.keyword,
          u = e.onClick,
          d = e.showScore,
          m = void 0 === d || d,
          h = e.showDevices,
          g = void 0 !== h && h,
          f = l()(
            "serp-preview",
            (Q(
              (t = { "expanded-preview": "" !== s }),
              "".concat(s, "-preview"),
              "" !== s && g
            ),
            Q(t, "noindex-preview", c),
            t)
          ),
          w = l()("serp-title", { capitalize: rankMath.capitalizeTitle }),
          b = rankMathEditor.assessor.getResearch("slugify")(p);
        return wp.element.createElement(
          "div",
          { className: f },
          wp.element.createElement(
            "div",
            {
              className: "serp-preview-title",
              "data-title": Object(a.__)("Preview", "rank-math"),
              "data-desktop": Object(a.__)("Desktop Preview", "rank-math"),
              "data-mobile": Object(a.__)("Mobile Preview", "rank-math"),
            },
            m && wp.element.createElement(Y.a, null),
            " ",
            g && wp.element.createElement(q, null)
          ),
          wp.element.createElement(
            "div",
            { className: "serp-preview-wrapper" },
            wp.element.createElement(
              "div",
              { className: "serp-preview-bg" },
              wp.element.createElement(
                "div",
                { className: "serp-preview-input" },
                wp.element.createElement("input", {
                  type: "text",
                  value: p || Object(a.__)("Rank Math", "rank-math"),
                  disabled: !0,
                }),
                wp.element.createElement(
                  "span",
                  { className: "serp-icon-search" },
                  wp.element.createElement(
                    "svg",
                    {
                      focusable: "false",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                    },
                    wp.element.createElement("path", {
                      d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
                    })
                  )
                ),
                wp.element.createElement("span", { className: "serp-icon-mic" })
              ),
              wp.element.createElement(
                "div",
                { className: "serp-preview-menus" },
                wp.element.createElement(
                  "ul",
                  null,
                  wp.element.createElement(
                    "li",
                    { className: "current" },
                    wp.element.createElement("img", {
                      src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGZpbGw9IiMzNEE4NTMiIGQ9Ik0xMCAydjJhNiA2IDAgMCAxIDYgNmgyYTggOCAwIDAgMC04LTh6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTEwIDRWMmE4IDggMCAwIDAtOCA4aDJjMC0zLjMgMi43LTYgNi02eiIvPjxwYXRoIGZpbGw9IiNGQkJDMDQiIGQ9Ik00IDEwSDJhOCA4IDAgMCAwIDggOHYtMmMtMy4zIDAtNi0yLjY5LTYtNnoiLz48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNMjIgMjAuNTlsLTUuNjktNS42OUE3Ljk2IDcuOTYgMCAwIDAgMTggMTBoLTJhNiA2IDAgMCAxLTYgNnYyYzEuODUgMCAzLjUyLS42NCA0Ljg4LTEuNjhsNS42OSA1LjY5TDIyIDIwLjU5eiIvPjwvc3ZnPgo=",
                      alt: "",
                      "data-atf": "1",
                    }),
                    Object(a.__)("All", "rank-math")
                  ),
                  wp.element.createElement(
                    "li",
                    null,
                    wp.element.createElement(
                      "svg",
                      {
                        focusable: "false",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      wp.element.createElement("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none",
                      }),
                      wp.element.createElement("path", {
                        d: "M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5z",
                      })
                    ),
                    " ",
                    Object(a.__)("Images", "rank-math")
                  ),
                  wp.element.createElement(
                    "li",
                    null,
                    wp.element.createElement(
                      "svg",
                      {
                        focusable: "false",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      wp.element.createElement("path", {
                        clipRule: "evenodd",
                        d: "M0 0h24v24H0z",
                        fill: "none",
                      }),
                      wp.element.createElement("path", {
                        clipRule: "evenodd",
                        d: "M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5z",
                        fillRule: "evenodd",
                      })
                    ),
                    " ",
                    Object(a.__)("Videos", "rank-math")
                  ),
                  wp.element.createElement(
                    "li",
                    null,
                    wp.element.createElement(
                      "svg",
                      {
                        focusable: "false",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      wp.element.createElement("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none",
                      }),
                      wp.element.createElement("path", {
                        d: "M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2z",
                      })
                    ),
                    " ",
                    Object(a.__)("News", "rank-math")
                  ),
                  wp.element.createElement(
                    "li",
                    null,
                    wp.element.createElement(
                      "svg",
                      {
                        focusable: "false",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                      },
                      wp.element.createElement("path", {
                        d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
                      })
                    ),
                    " ",
                    "More"
                  )
                ),
                wp.element.createElement(
                  "ul",
                  { className: "menus-right" },
                  wp.element.createElement(
                    "li",
                    null,
                    Object(a.__)("Settings", "rank-math")
                  ),
                  wp.element.createElement(
                    "li",
                    null,
                    Object(a.__)("Tools", "rank-math")
                  )
                )
              ),
              wp.element.createElement(
                "div",
                { className: "serp-preview-result-stats" },
                Object(a.__)(
                  "About 43,700,000 results (0.32 seconds) ",
                  "rank-math"
                )
              )
            ),
            wp.element.createElement(
              "div",
              {
                className: "serp-preview-body",
                role: "button",
                tabIndex: 0,
                onClick: function () {
                  u && u();
                },
              },
              wp.element.createElement(
                "div",
                { className: "group" },
                wp.element.createElement("img", {
                  src: rankMath.siteFavIcon,
                  width: "16",
                  height: "16",
                  className: "serp-preview-favicon",
                  alt: "",
                }),
                wp.element.createElement("div", {
                  className: "serp-url",
                  dangerouslySetInnerHTML: {
                    __html: J(
                      b,
                      W.Helpers.sanitizeText(
                        Object(G.safeDecodeURIComponent)(r)
                      ),
                      75,
                      /-? +/
                    ),
                  },
                })
              ),
              wp.element.createElement(
                "div",
                { className: "group" },
                wp.element.createElement("h5", {
                  className: w,
                  dangerouslySetInnerHTML: {
                    __html: J(p, W.Helpers.sanitizeText(n), 60),
                  },
                })
              ),
              wp.element.createElement(Z, null),
              wp.element.createElement(
                "div",
                { className: "group" },
                wp.element.createElement("div", {
                  className: "serp-description",
                  dangerouslySetInnerHTML: {
                    __html: J(p, W.Helpers.sanitizeText(i), 160),
                  },
                })
              )
            ),
            wp.element.createElement(
              "div",
              { className: "serp-preview-noindex" },
              wp.element.createElement(
                "h3",
                null,
                Object(a.__)("Noindex robots meta is enabled", "rank-math")
              ),
              wp.element.createElement(
                "p",
                null,
                Object(a.__)(
                  "This page will not appear in search results. You can disable noindex in the Advanced tab.",
                  "rank-math"
                )
              )
            )
          )
        );
      }),
      te = Object(r.withSelect)(function (e) {
        return { isNoIndex: "noindex" in e("rank-math").getRobots() };
      })(function () {
        return wp.element.createElement(
          "div",
          { className: "rank-math-editor-general" },
          wp.element.createElement(ee, { showScore: !1, showDevices: !0 }),
          wp.element.createElement(z, null),
          wp.element.createElement(K, null),
          wp.element.createElement($, null)
        );
      }),
      ne = n(8);
    function ae(e) {
      return (
        (ae =
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
        ae(e)
      );
    }
    var re = function (e) {
        var t = l()(
            "rank-math-social-preview",
            "rank-math-social-preview-" + e.network,
            e.cardType
          ),
          n = l()("rank-math-social-preview-title", {
            capitalize: rankMath.capitalizeTitle,
          });
        return wp.element.createElement(
          "div",
          { className: t },
          wp.element.createElement(
            "div",
            { className: "rank-math-social-preview-item" },
            wp.element.createElement(
              "div",
              { className: "rank-math-social-preview-meta" },
              wp.element.createElement("div", {
                className: "social-profile-image",
              }),
              e.children
            ),
            wp.element.createElement(
              "div",
              { className: "rank-math-social-preview-item-wrapper" },
              wp.element.createElement(
                "div",
                { className: "rank-math-social-preview-image" },
                wp.element.createElement("img", {
                  className: "rank-math-social-image-thumbnail",
                  src: e.image,
                  alt: "",
                }),
                e.hasOverlay &&
                  e.imageOverlay &&
                  "object" === ae(rankMath.overlayImages[e.imageOverlay]) &&
                  wp.element.createElement("img", {
                    src: rankMath.overlayImages[e.imageOverlay].url,
                    className:
                      "rank-math-social-preview-image-overlay overlay-position-" +
                      rankMath.overlayImages[e.imageOverlay].position,
                    alt: "",
                  })
              ),
              wp.element.createElement(
                "div",
                { className: "rank-math-social-preview-caption" },
                "facebook" === e.network &&
                  wp.element.createElement(
                    "h4",
                    { className: "rank-math-social-preview-publisher" },
                    e.siteurl
                  ),
                wp.element.createElement(
                  "h3",
                  { className: n },
                  e.title ? ne.a.swap(e.title) : e.serpTitle
                ),
                wp.element.createElement(
                  "p",
                  { className: "rank-math-social-preview-description" },
                  e.description ? ne.a.swap(e.description) : e.serpDescription
                ),
                "twitter" === e.network &&
                  wp.element.createElement(
                    o.Fragment,
                    null,
                    wp.element.createElement(
                      "h4",
                      { className: "rank-math-social-preview-publisher" },
                      wp.element.createElement(u.Dashicon, {
                        icon: "admin-links",
                      }),
                      e.siteurl
                    )
                  )
              )
            )
          )
        );
      },
      ie = n(31),
      oe = function (e) {
        return wp.element.createElement(
          "div",
          { className: "components-base-control field-group" },
          wp.element.createElement(ie.MediaUpload, {
            allowedTypes: ["image"],
            multiple: !1,
            value: e.imageID,
            render: function (t) {
              var n = t.open;
              return wp.element.createElement(
                o.Fragment,
                null,
                wp.element.createElement(
                  u.Button,
                  { onClick: n, className: "button", isPrimary: !0 },
                  e.imageID > 0
                    ? Object(a.__)("Replace Image", "rank-math")
                    : Object(a.__)("Add Image", "rank-math")
                ),
                e.imageID > 0 &&
                  wp.element.createElement(
                    u.Button,
                    {
                      className: "button",
                      isDestructive: !0,
                      isLink: !0,
                      onClick: e.removeImage,
                    },
                    Object(a.__)("Remove Image", "rank-math")
                  )
              );
            },
            onSelect: e.updateImage,
          }),
          wp.element.createElement(
            "p",
            { className: "components-base-control__help" },
            Object(a.__)(
              "Upload at least 600x315px image. Recommended size is 1200x630px.",
              "rank-math"
            )
          ),
          wp.element.createElement(
            "div",
            { className: "notice notice-warning inline hidden" },
            wp.element.createElement(
              "p",
              null,
              Object(a.__)(
                "Image is smaller than the minimum size, please select a different image.",
                "rank-math"
              )
            )
          )
        );
      };
    function se() {
      var e = rankMath.overlayImages,
        t = [];
      return (
        Object.keys(e).forEach(function (n) {
          t.push({ label: e[n].name, value: n });
        }),
        t
      );
    }
    function le() {
      return (
        (le = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
        le.apply(this, arguments)
      );
    }
    var ce = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math"),
            n = (function () {
              if (t.getFacebookImage()) return t.getFacebookImage();
              var e = t.getFeaturedImage();
              return Object(c.isUndefined)(e) || "" === e
                ? rankMath.defautOgImage
                : t.getFeaturedImage().source_url;
            })();
          return {
            title: t.getFacebookTitle(),
            description: t.getFacebookDescription(),
            serpTitle: t.getSerpTitle(),
            serpDescription: t.getSerpDescription(),
            author: t.getFacebookAuthor(),
            image: n,
            imageID: t.getFacebookImageID(),
            hasOverlay: t.getFacebookHasOverlay(),
            imageOverlay: t.getFacebookImageOverlay(),
          };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            removeImage: function () {
              e("rank-math").updateFacebookImage(""),
                e("rank-math").updateFacebookImageID(0),
                e("rank-math").updateFacebookHasOverlay(!1);
            },
            updateImage: function (t) {
              e("rank-math").updateFacebookImage(t.url),
                e("rank-math").updateFacebookImageID(t.id);
            },
            updateTitle: function (t) {
              e("rank-math").updateFacebookTitle(t);
            },
            updateDescription: function (t) {
              e("rank-math").updateFacebookDescription(t);
            },
            updateImageOverlay: function (t) {
              e("rank-math").updateFacebookImageOverlay(t);
            },
            toggleOverlay: function (t) {
              e("rank-math").updateFacebookHasOverlay(t);
            },
          };
        })
      )(function (e) {
        return wp.element.createElement(
          o.Fragment,
          null,
          wp.element.createElement(
            re,
            le({}, e, { network: "facebook", siteurl: rankMath.parentDomain }),
            wp.element.createElement(
              "div",
              { className: "social-name" },
              rankMath.assessor.serpData.authorName
            ),
            wp.element.createElement(
              "div",
              { className: "social-time" },
              wp.element.createElement(
                "span",
                null,
                Object(a.__)("2 hrs", "rank-math")
              ),
              wp.element.createElement(
                "span",
                null,
                wp.element.createElement(u.Dashicon, {
                  icon: "admin-site",
                  size: "12",
                })
              )
            )
          ),
          wp.element.createElement(
            "div",
            {
              className:
                "notice notice-alt notice-info components-base-control",
            },
            wp.element.createElement(
              "p",
              null,
              Object(a.__)(
                "Customize the title, description and images of your post used while sharing on Facebook and Twitter.",
                "rank-math"
              ),
              " ",
              wp.element.createElement(
                "a",
                {
                  href: "https://rankmath.com/kb/meta-box-social-tab/?utm_source=Plugin&utm_medium=Gutenberg%20Social%20Tab&utm_campaign=WP",
                  target: "_blank",
                  rel: "noreferrer noopener",
                },
                Object(a.__)("Read more", "rank-math")
              )
            )
          ),
          wp.element.createElement(oe, e),
          wp.element.createElement(
            "div",
            { className: "field-group" },
            wp.element.createElement(
              "label",
              { htmlFor: "rank-math-facebook-title" },
              Object(a.__)("Title", "rank-math")
            ),
            wp.element.createElement(
              "div",
              { className: "variable-group" },
              wp.element.createElement(u.TextControl, {
                id: "rank-math-facebook-title",
                value: e.title,
                placeholder: e.serpTitle,
                onChange: e.updateTitle,
              }),
              wp.element.createElement(V, {
                onClick: function (t) {
                  return e.updateTitle(e.title + " %" + t.variable + "%");
                },
              })
            )
          ),
          wp.element.createElement(
            "div",
            { className: "field-group" },
            wp.element.createElement(
              "label",
              { htmlFor: "rank-math-facebook-description" },
              Object(a.__)("Description", "rank-math")
            ),
            wp.element.createElement(
              "div",
              { className: "variable-group" },
              wp.element.createElement(u.TextareaControl, {
                id: "rank-math-facebook-description",
                value: e.description,
                placeholder: e.serpDescription,
                onChange: e.updateDescription,
              }),
              wp.element.createElement(V, {
                onClick: function (t) {
                  return e.updateDescription(
                    e.description + " %" + t.variable + "%"
                  );
                },
              })
            )
          ),
          wp.element.createElement(
            "div",
            { className: "field-group" },
            wp.element.createElement(u.ToggleControl, {
              label: Object(a.__)("Add icon overlay to thumbnail", "rank-math"),
              checked: e.hasOverlay,
              onChange: e.toggleOverlay,
            }),
            wp.element.createElement(
              "div",
              {
                className: e.hasOverlay ? "components-base-control" : "hidden",
              },
              wp.element.createElement(u.SelectControl, {
                value: e.imageOverlay,
                label: Object(a.__)("Icon overlay", "rank-math"),
                options: se(),
                onChange: e.updateImageOverlay,
              }),
              !rankMath.isPro &&
                wp.element.createElement(
                  "div",
                  { className: "notice notice-alt notice-warning" },
                  wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                      A,
                      {
                        components: {
                          link: wp.element.createElement("a", {
                            href: "https://rankmath.com/pricing/?utm_source=Plugin&utm_medium=Gutenberg%20Social%20Tab&utm_campaign=WP",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }),
                        },
                      },
                      Object(a.__)(
                        "You can add custom thumbnail overlays with {{link}}Rank Math Pro{{/link}}.",
                        "rank-math"
                      )
                    )
                  )
                )
            )
          )
        );
      }),
      pe = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math");
          return {
            country: t.getTwitterAppCountry(),
            description: t.getTwitterAppDescription(),
            iphoneName: t.getTwitterAppIphoneName(),
            iphoneID: t.getTwitterAppIphoneID(),
            iphoneUrl: t.getTwitterAppIphoneUrl(),
            ipadName: t.getTwitterAppIpadName(),
            ipadID: t.getTwitterAppIpadID(),
            ipadUrl: t.getTwitterAppIpadUrl(),
            googleplayName: t.getTwitterAppGoogleplayName(),
            googleplayID: t.getTwitterAppGoogleplayID(),
            googleplayUrl: t.getTwitterAppGoogleplayUrl(),
          };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            updateAppIphoneName: function (t) {
              e("rank-math").updateTwitterAppIphoneName(t);
            },
            updateAppIphoneID: function (t) {
              e("rank-math").updateTwitterAppIphoneID(t);
            },
            updateAppIphoneUrl: function (t) {
              e("rank-math").updateTwitterAppIphoneUrl(t);
            },
            updateAppIpadName: function (t) {
              e("rank-math").updateTwitterAppIpadName(t);
            },
            updateAppIpadID: function (t) {
              e("rank-math").updateTwitterAppIpadID(t);
            },
            updateAppIpadUrl: function (t) {
              e("rank-math").updateTwitterAppIpadUrl(t);
            },
            updateAppGoogleplayName: function (t) {
              e("rank-math").updateTwitterAppGoogleplayName(t);
            },
            updateAppGoogleplayID: function (t) {
              e("rank-math").updateTwitterAppGoogleplayID(t);
            },
            updateAppGoogleplayUrl: function (t) {
              e("rank-math").updateTwitterAppGoogleplayUrl(t);
            },
            updateAppDescription: function (t) {
              e("rank-math").updateTwitterAppDescription(t);
            },
            updateAppCountry: function (t) {
              e("rank-math").updateTwitterAppCountry(t);
            },
          };
        })
      )(function (e) {
        return wp.element.createElement(
          o.Fragment,
          null,
          wp.element.createElement(u.TextControl, {
            value: e.description,
            label: Object(a.__)("App Description", "rank-math"),
            help: Object(a.__)(
              "You can use this as a more concise description than what you may have on the app store. This field has a maximum of 200 characters. (optional)",
              "rank-math"
            ),
            onChange: e.updateAppDescription,
          }),
          (function (e) {
            return wp.element.createElement(
              o.Fragment,
              null,
              wp.element.createElement(u.TextControl, {
                value: e.iphoneName,
                label: Object(a.__)("iPhone App Name", "rank-math"),
                help: Object(a.__)(
                  "The name of your app to show.",
                  "rank-math"
                ),
                onChange: e.updateAppIphoneName,
              }),
              wp.element.createElement(u.TextControl, {
                value: e.iphoneID,
                label: Object(a.__)("iPhone App ID", "rank-math"),
                help: Object(a.__)(
                  "The numeric representation of your app ID in the App Store.",
                  "rank-math"
                ),
                onChange: e.updateAppIphoneID,
              }),
              wp.element.createElement(u.TextControl, {
                value: e.iphoneUrl,
                label: Object(a.__)("iPhone App URL", "rank-math"),
                help: Object(a.__)(
                  "Your app's custom URL scheme (must include ://).",
                  "rank-math"
                ),
                onChange: e.updateAppIphoneUrl,
              })
            );
          })(e),
          (function (e) {
            return wp.element.createElement(
              o.Fragment,
              null,
              wp.element.createElement(u.TextControl, {
                value: e.ipadName,
                label: Object(a.__)("iPad App Name", "rank-math"),
                help: Object(a.__)(
                  "The name of your app to show.",
                  "rank-math"
                ),
                onChange: e.updateAppIpadName,
              }),
              wp.element.createElement(u.TextControl, {
                value: e.ipadID,
                label: Object(a.__)("iPad App ID", "rank-math"),
                help: Object(a.__)(
                  "The numeric representation of your app ID in the App Store.",
                  "rank-math"
                ),
                onChange: e.updateAppIpadID,
              }),
              wp.element.createElement(u.TextControl, {
                value: e.ipadUrl,
                label: Object(a.__)("iPad App URL", "rank-math"),
                help: Object(a.__)(
                  "Your app's custom URL scheme (must include ://).",
                  "rank-math"
                ),
                onChange: e.updateAppIpadUrl,
              })
            );
          })(e),
          (function (e) {
            return wp.element.createElement(
              o.Fragment,
              null,
              wp.element.createElement(u.TextControl, {
                value: e.googleplayName,
                label: Object(a.__)("Google Play App Name", "rank-math"),
                help: Object(a.__)(
                  "The name of your app to show.",
                  "rank-math"
                ),
                onChange: e.updateAppGoogleplayName,
              }),
              wp.element.createElement(u.TextControl, {
                value: e.googleplayID,
                label: Object(a.__)("Google Play App ID", "rank-math"),
                help: Object(a.__)(
                  "Your app ID in the Google Play (.i.e. com.android.app)",
                  "rank-math"
                ),
                onChange: e.updateAppGoogleplayID,
              }),
              wp.element.createElement(u.TextControl, {
                value: e.googleplayUrl,
                label: Object(a.__)("Google Play App URL", "rank-math"),
                help: Object(a.__)(
                  "Your app's custom URL scheme (must include ://).",
                  "rank-math"
                ),
                onChange: e.updateAppGoogleplayUrl,
              })
            );
          })(e),
          wp.element.createElement(u.TextControl, {
            value: e.country,
            label: Object(a.__)("App Country", "rank-math"),
            help: Object(a.__)(
              "If your application is not available in the US App Store, you must set this value to the two-letter country code for the App Store that contains your application.",
              "rank-math"
            ),
            onChange: e.updateAppCountry,
          })
        );
      }),
      ue = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math");
          return {
            url: t.getTwitterPlayerUrl(),
            size: t.getTwitterPlayerSize(),
            stream: t.getTwitterPlayerStream(),
            ctype: t.getTwitterPlayerStreamCtype(),
          };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            updatePlayerUrl: function (t) {
              e("rank-math").updateTwitterPlayerUrl(t);
            },
            updatePlayerSize: function (t) {
              e("rank-math").updateTwitterPlayerSize(t);
            },
            updatePlayerStreamUrl: function (t) {
              e("rank-math").updateTwitterPlayerStreamUrl(t);
            },
            updatePlayerStreamCtype: function (t) {
              e("rank-math").updateTwitterPlayerStreamCtype(t);
            },
          };
        })
      )(function (e) {
        return wp.element.createElement(
          o.Fragment,
          null,
          wp.element.createElement(u.TextControl, {
            value: e.url,
            label: Object(a.__)("Player URL", "rank-math"),
            help: Object(a.__)(
              "HTTPS URL to iFrame player. This must be a HTTPS URL which does not generate active mixed content warnings in a web browser. The audio or video player must not require plugins such as Adobe Flash.",
              "rank-math"
            ),
            onChange: e.updatePlayerUrl,
          }),
          wp.element.createElement(u.TextControl, {
            value: e.size,
            label: Object(a.__)("Player Size", "rank-math"),
            help: Object(a.__)(
              "iFrame width and height, specified in pixels in the following format: 600x400.",
              "rank-math"
            ),
            onChange: e.updatePlayerSize,
          }),
          wp.element.createElement(u.TextControl, {
            value: e.stream,
            label: Object(a.__)("Stream URL", "rank-math"),
            help: Object(a.__)(
              "Optional URL to raw stream that will be rendered in Twitter’s mobile applications directly. If provided, the stream must be delivered in the MPEG-4 container format (the .mp4 extension). The container can store a mix of audio and video with the following codecs: Video: H.264, Baseline Profile (BP), Level 3.0, up to 640 x 480 at 30 fps. Audio: AAC, Low Complexity Profile (LC).",
              "rank-math"
            ),
            onChange: e.updatePlayerStreamUrl,
          }),
          wp.element.createElement(u.TextControl, {
            value: e.ctype,
            label: Object(a.__)("Stream Content Type", "rank-math"),
            help: Object(a.__)(
              "The MIME type/subtype combination that describes the content contained in twitter:player:stream. Takes the form specified in RFC 6381. Currently supported content_type values are those defined in RFC 4337 (MIME Type Registration for MP4).",
              "rank-math"
            ),
            onChange: e.updatePlayerStreamCtype,
          })
        );
      });
    function de() {
      return (
        (de = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
        de.apply(this, arguments)
      );
    }
    var me = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math"),
            n = t.getTwitterUseFacebook(),
            a = (function () {
              if (n && t.getFacebookImage()) return t.getFacebookImage();
              if (t.getTwitterImage()) return t.getTwitterImage();
              var e = t.getFeaturedImage();
              return Object(c.isUndefined)(e) || "" === e
                ? rankMath.defautOgImage
                : t.getFeaturedImage().source_url;
            })();
          return {
            useFacebook: n,
            cardType: t.getTwitterCardType(),
            title: n ? t.getFacebookTitle() : t.getTwitterTitle(),
            description: n
              ? t.getFacebookDescription()
              : t.getTwitterDescription(),
            serpTitle: t.getSerpTitle(),
            serpDescription: t.getSerpDescription(),
            author: t.getTwitterAuthor(),
            image: a,
            imageID: n ? t.getFacebookImageID() : t.getTwitterImageID(),
            hasOverlay: n
              ? t.getFacebookHasOverlay()
              : t.getTwitterHasOverlay(),
            imageOverlay: n
              ? t.getFacebookImageOverlay()
              : t.getTwitterImageOverlay(),
          };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            removeImage: function () {
              e("rank-math").updateTwitterImage(""),
                e("rank-math").updateTwitterImageID(0),
                e("rank-math").updateTwitterHasOverlay(!1);
            },
            updateImage: function (t) {
              e("rank-math").updateTwitterImage(t.url),
                e("rank-math").updateTwitterImageID(t.id);
            },
            updateTitle: function (t) {
              e("rank-math").updateTwitterTitle(t);
            },
            updateDescription: function (t) {
              e("rank-math").updateTwitterDescription(t);
            },
            updateImageOverlay: function (t) {
              e("rank-math").updateTwitterImageOverlay(t);
            },
            toggleUseFacebook: function (t) {
              e("rank-math").updateTwitterUseFacebook(t);
            },
            updateCardType: function (t) {
              e("rank-math").updateTwitterCardType(t);
            },
            toggleOverlay: function (t) {
              e("rank-math").updateTwitterHasOverlay(t);
            },
          };
        })
      )(function (e) {
        return wp.element.createElement(
          o.Fragment,
          null,
          wp.element.createElement(
            re,
            de({}, e, {
              network: "twitter",
              siteurl: rankMath.parentDomain,
              classes: e.cardType,
              description: Object(c.truncate)(
                e.description ? e.description : e.serpDescription,
                { length: 240, separator: " " }
              ),
            }),
            wp.element.createElement(
              "div",
              { className: "social-name" },
              rankMath.assessor.serpData.authorName,
              wp.element.createElement(
                "span",
                { className: "social-username" },
                "@",
                e.author
              ),
              wp.element.createElement(
                "span",
                { className: "social-time" },
                Object(a.__)("2h", "rank-math")
              )
            ),
            wp.element.createElement(
              "div",
              { className: "social-text" },
              Object(a.__)(
                "The card for your website will look little something like this!",
                "rank-math"
              )
            )
          ),
          wp.element.createElement(
            "div",
            { className: "field-group" },
            wp.element.createElement(u.ToggleControl, {
              label: Object(a.__)("Use Data from Facebook Tab", "rank-math"),
              checked: e.useFacebook,
              onChange: e.toggleUseFacebook,
            })
          ),
          wp.element.createElement(
            "div",
            { className: "field-group" },
            wp.element.createElement(u.SelectControl, {
              value: e.cardType,
              label: Object(a.__)("Card Type", "rank-math"),
              options: [
                {
                  value: "summary_large_image",
                  label: Object(a.__)(
                    "Summary Card with Large Image",
                    "rank-math"
                  ),
                },
                {
                  value: "summary_card",
                  label: Object(a.__)("Summary Card", "rank-math"),
                },
                { value: "app", label: Object(a.__)("App Card", "rank-math") },
                {
                  value: "player",
                  label: Object(a.__)("Player Card", "rank-math"),
                },
              ],
              onChange: e.updateCardType,
            })
          ),
          "player" === e.cardType &&
            wp.element.createElement(
              "div",
              { className: "notice notice-alt notice-info" },
              wp.element.createElement(
                "p",
                null,
                Object(a.__)(
                  "Video clips and audio streams have a special place on the Twitter platform thanks to the Player Card. Player Cards must be submitted for approval before they can be used. More information: ",
                  "rank-math"
                ),
                wp.element.createElement(
                  "a",
                  {
                    href: "https://dev.twitter.com/cards/types/player",
                    target: "blank",
                  },
                  "https://dev.twitter.com/cards/types/player"
                )
              )
            ),
          "app" === e.cardType &&
            wp.element.createElement(
              "div",
              { className: "notice notice-alt notice-info" },
              wp.element.createElement(
                "p",
                null,
                Object(a.__)(
                  "The App Card is a great way to represent mobile applications on Twitter and to drive installs. More information: ",
                  "rank-math"
                ),
                wp.element.createElement(
                  "a",
                  {
                    href: "https://dev.twitter.com/cards/types/app",
                    target: "blank",
                  },
                  " https://dev.twitter.com/cards/types/app"
                )
              )
            ),
          !e.useFacebook &&
            "app" !== e.cardType &&
            wp.element.createElement(oe, e),
          !e.useFacebook &&
            "app" !== e.cardType &&
            wp.element.createElement(
              "div",
              { className: "field-group" },
              wp.element.createElement(
                "label",
                { htmlFor: "rank-math-twitter-title" },
                Object(a.__)("Title", "rank-math")
              ),
              wp.element.createElement(
                "div",
                { className: "variable-group" },
                wp.element.createElement(u.TextControl, {
                  id: "rank-math-twitter-title",
                  value: e.title,
                  placeholder: e.serpTitle,
                  onChange: e.updateTitle,
                }),
                wp.element.createElement(V, {
                  onClick: function (t) {
                    return e.updateTitle(e.title + " %" + t.variable + "%");
                  },
                })
              )
            ),
          !e.useFacebook &&
            "app" !== e.cardType &&
            wp.element.createElement(
              "div",
              { className: "field-group" },
              wp.element.createElement(
                "label",
                { htmlFor: "rank-math-twitter-description" },
                Object(a.__)("Description", "rank-math")
              ),
              wp.element.createElement(
                "div",
                { className: "variable-group" },
                wp.element.createElement(u.TextareaControl, {
                  id: "rank-math-twitter-description",
                  value: e.description,
                  placeholder: e.serpDescription,
                  onChange: e.updateDescription,
                }),
                wp.element.createElement(V, {
                  onClick: function (t) {
                    return e.updateDescription(
                      e.description + " %" + t.variable + "%"
                    );
                  },
                })
              )
            ),
          !e.useFacebook &&
            "app" !== e.cardType &&
            wp.element.createElement(
              "div",
              { className: "field-group" },
              wp.element.createElement(u.ToggleControl, {
                label: Object(a.__)(
                  "Add icon overlay to thumbnail",
                  "rank-math"
                ),
                checked: e.hasOverlay,
                onChange: e.toggleOverlay,
              }),
              wp.element.createElement(
                "div",
                {
                  className: e.hasOverlay
                    ? "components-base-control"
                    : "hidden",
                },
                wp.element.createElement(u.SelectControl, {
                  value: e.imageOverlay,
                  label: Object(a.__)("Icon overlay", "rank-math"),
                  options: se(),
                  onChange: e.updateImageOverlay,
                }),
                !rankMath.isPro &&
                  wp.element.createElement(
                    "div",
                    { className: "notice notice-alt notice-warning" },
                    wp.element.createElement(
                      "p",
                      null,
                      wp.element.createElement(
                        A,
                        {
                          components: {
                            link: wp.element.createElement("a", {
                              href: "https://rankmath.com/pricing/?utm_source=Plugin&utm_medium=Gutenberg%20Social%20Tab&utm_campaign=WP",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }),
                          },
                        },
                        Object(a.__)(
                          "You can add custom thumbnail overlays with {{link}}Rank Math Pro{{/link}}.",
                          "rank-math"
                        )
                      )
                    )
                  )
              )
            ),
          "player" === e.cardType && wp.element.createElement(ue, null),
          "app" === e.cardType && wp.element.createElement(pe, null)
        );
      }),
      he = function () {
        return wp.element.createElement(
          o.Fragment,
          null,
          wp.element.createElement(
            u.TabPanel,
            {
              className: "rank-math-editor-social",
              activeClass: "is-active",
              tabs: [
                {
                  name: "facebook",
                  title: wp.element.createElement(
                    o.Fragment,
                    null,
                    wp.element.createElement(u.Dashicon, {
                      icon: "facebook-alt",
                    }),
                    Object(a.__)("Facebook", "rank-math")
                  ),
                  view: ce,
                  className: "button-facebook",
                },
                {
                  name: "twitter",
                  title: wp.element.createElement(
                    o.Fragment,
                    null,
                    wp.element.createElement(u.Dashicon, { icon: "twitter" }),
                    Object(a.__)("Twitter", "rank-math")
                  ),
                  view: me,
                  className: "button-twitter",
                },
              ],
            },
            function (e) {
              return Object(o.createElement)(e.view);
            }
          )
        );
      },
      ge = n(3),
      fe = n.n(ge);
    function we(e) {
      return (
        (we =
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
        we(e)
      );
    }
    function be(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function ve(e, t) {
      return (
        (ve = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        ve(e, t)
      );
    }
    function ye(e) {
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
          a = Ee(e);
        if (t) {
          var r = Ee(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else n = a.apply(this, arguments);
        return ke(this, n);
      };
    }
    function ke(e, t) {
      if (t && ("object" === we(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Oe(e);
    }
    function Oe(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Ee(e) {
      return (
        (Ee = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Ee(e)
      );
    }
    var Te = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && ve(e, t);
        })(s, e);
        var t,
          n,
          r,
          i = ye(s);
        function s() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            ((e = i.call(this))._handleRef = e._handleRef.bind(Oe(e))),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                var e = fe()(this.component),
                  t = e.find(".stars a"),
                  n = e.find(".smiley");
                t.on("mouseenter", function () {
                  var e = fe()(this).index();
                  t.removeClass("highlighted"),
                    t.slice(0, e + 1).addClass("highlighted"),
                    e < 2
                      ? n.removeClass("normal happy").addClass("angry")
                      : e > 3
                      ? n.removeClass("normal angry").addClass("happy")
                      : n.removeClass("happy angry").addClass("normal");
                });
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function () {
                return !1;
              },
            },
            {
              key: "_handleRef",
              value: function (e) {
                this.component = e;
              },
            },
            {
              key: "render",
              value: function () {
                for (var e = this, t = [], n = 1; n <= 5; n++)
                  t.push(
                    wp.element.createElement(
                      "a",
                      {
                        key: n,
                        href: "https://s.rankmath.com/wpreview",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      wp.element.createElement("span", {
                        className: "dashicons dashicons-star-filled",
                      })
                    )
                  );
                return wp.element.createElement(
                  "div",
                  { className: "ask-review", ref: this._handleRef },
                  wp.element.createElement(
                    "h3",
                    null,
                    Object(a.__)("Rate Rank Math SEO", "rank-math")
                  ),
                  wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                      A,
                      { tags: "em" },
                      Object(a.__)(
                        "Hey, we noticed you are using Rank Math SEO plugin for more than a week now –{{em}}that's awesome!{{/em}} Could you please do us a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?",
                        "rank-math"
                      )
                    )
                  ),
                  wp.element.createElement(
                    "div",
                    { className: "stars-wrapper" },
                    wp.element.createElement(
                      "div",
                      { className: "face" },
                      wp.element.createElement(
                        "div",
                        { className: "smiley happy" },
                        wp.element.createElement(
                          "div",
                          { className: "eyes" },
                          wp.element.createElement("div", { className: "eye" }),
                          wp.element.createElement("div", { className: "eye" })
                        ),
                        wp.element.createElement("div", { className: "mouth" })
                      )
                    ),
                    wp.element.createElement("div", { className: "stars" }, t)
                  ),
                  wp.element.createElement(u.CheckboxControl, {
                    label: wp.element.createElement(
                      o.Fragment,
                      null,
                      wp.element.createElement(
                        "span",
                        null,
                        Object(a.__)(
                          "I already did. Please don't show this message again.",
                          "rank-math"
                        )
                      )
                    ),
                    onChange: function () {
                      return e.alreadyReviewed();
                    },
                  })
                );
              },
            },
            {
              key: "alreadyReviewed",
              value: function () {
                fe.a.ajax({
                  url: rankMath.ajaxurl,
                  data: {
                    action: "rank_math_already_reviewed",
                    security: rankMath.security,
                  },
                }),
                  (rankMath.pluginReviewed = !0);
                var e = fe()(this.component);
                e.animate({ opacity: 0.01 }, 1500, function () {
                  var t = fe()(
                    ".rank-math-editor > .components-tab-panel__tabs > button"
                  );
                  t.first().click(), t.last().remove(), e.remove();
                });
              },
            },
          ]) && be(t.prototype, n),
          r && be(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          s
        );
      })(o.Component),
      _e = Object(u.withFilters)("rankMath.analytics.reportButton")(
        function () {
          return null;
        }
      ),
      xe = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          return { isOpen: e("rank-math").isSnippetEditorOpen() };
        }),
        Object(r.withDispatch)(function (e, t) {
          return {
            toggleEditor: function () {
              e("rank-math").toggleSnippetEditor(!t.isOpen);
            },
          };
        })
      )(function (e) {
        var t = e.isOpen,
          n = e.initialTab,
          r = void 0 === n ? "" : n,
          i = e.toggleEditor,
          s = [
            {
              name: "general",
              title: wp.element.createElement(
                o.Fragment,
                null,
                wp.element.createElement("i", {
                  className: "rm-icon rm-icon-settings",
                }),
                wp.element.createElement(
                  "span",
                  null,
                  Object(a.__)("General", "rank-math")
                )
              ),
              view: te,
            },
          ];
        return (
          rankMath.canUser.social &&
            s.push({
              name: "social",
              title: wp.element.createElement(
                o.Fragment,
                null,
                wp.element.createElement("i", {
                  className: "rm-icon rm-icon-social",
                }),
                wp.element.createElement(
                  "span",
                  null,
                  Object(a.__)("Social", "rank-math")
                )
              ),
              view: he,
            }),
          rankMath.showReviewTab &&
            !1 === rankMath.pluginReviewed &&
            s.push({
              name: "review",
              className: "review-tab",
              title: wp.element.createElement(
                o.Fragment,
                null,
                wp.element.createElement("i", {
                  className: "rm-icon rm-icon-heart-filled",
                })
              ),
              view: Te,
            }),
          wp.element.createElement(
            o.Fragment,
            null,
            wp.element.createElement(
              u.Button,
              {
                isPrimary: !0,
                className: "rank-math-edit-snippet",
                onClick: i,
              },
              Object(a.__)("Edit Snippet", "rank-math")
            ),
            "" === r && wp.element.createElement(_e, null),
            t &&
              wp.element.createElement(
                u.Modal,
                {
                  title: Object(a.__)("Preview Snippet Editor", "rank-math"),
                  closeButtonLabel: Object(a.__)("Close", "rank-math"),
                  shouldCloseOnClickOutside: !1,
                  onRequestClose: i,
                  className: "rank-math-modal",
                  overlayClassName: "rank-math-modal-overlay",
                },
                wp.element.createElement(
                  u.TabPanel,
                  {
                    className: "rank-math-tabs rank-math-editor",
                    activeClass: "is-active",
                    initialTabName: r,
                    tabs: s,
                  },
                  function (e) {
                    return Object(o.createElement)(e.view);
                  }
                )
              )
          )
        );
      }),
      je = function () {
        return wp.element.createElement(
          u.PanelBody,
          { initialOpen: !0 },
          wp.element.createElement(
            u.BaseControl,
            { className: "rank-math-social" },
            wp.element.createElement(
              "span",
              { className: "components-base-control__label" },
              Object(a.__)("Social Media Preview", "rank-math")
            ),
            wp.element.createElement(
              "p",
              { className: "cmb2-metabox-description" },
              Object(a.__)(
                "Here you can view and edit the thumbnail, title and description that will be displayed when your site is shared on social media.",
                "rank-math"
              )
            ),
            wp.element.createElement(
              "p",
              { className: "cmb2-metabox-description" },
              Object(a.__)(
                "Click on the button below to view and edit the preview.",
                "rank-math"
              )
            ),
            wp.element.createElement(xe, {
              buttonLabel: Object(a.__)(
                "Preview & Edit Social Media",
                "rank-math"
              ),
              initialTab: "social",
            })
          )
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
    function Ne(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Se(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function Ie(e, t) {
      return (
        (Ie = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        Ie(e, t)
      );
    }
    function De(e) {
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
          a = Ae(e);
        if (t) {
          var r = Ae(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else n = a.apply(this, arguments);
        return Me(this, n);
      };
    }
    function Me(e, t) {
      if (t && ("object" === Ce(t) || "function" == typeof t)) return t;
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
    function Ae(e) {
      return (
        (Ae = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Ae(e)
      );
    }
    var Pe = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Ie(e, t);
        })(s, e);
        var t,
          n,
          r,
          i = De(s);
        function s() {
          return Ne(this, s), i.apply(this, arguments);
        }
        return (
          (t = s),
          (n = [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (
                  e.isLoaded !== this.props.isLoaded ||
                  e.selectedKeyword.index !==
                    this.props.selectedKeyword.index ||
                  e.isRefreshing !== this.props.isRefreshing
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = rankMathEditor.getSelectedKeyword();
                return (
                  (this.results = rankMathEditor.resultManager.getResult(t)),
                  (this.isPrimary = 0 === this.props.selectedKeyword.index),
                  Object(c.isUndefined)(this.results)
                    ? null
                    : Object.keys(this.getGroups()).map(function (t) {
                        return e.renderGroup(t);
                      })
                );
              },
            },
            {
              key: "renderGroup",
              value: function (e) {
                this.errors = 0;
                var t = this.renderGroupItems(e);
                return wp.element.createElement(
                  u.PanelBody,
                  {
                    key: "panel-" + e,
                    title: wp.element.createElement(
                      o.Fragment,
                      null,
                      this.getGroupTitle(e),
                      0 === this.errors
                        ? wp.element.createElement(
                            "span",
                            { className: "rank-math-group-score test-ok" },
                            Object(a.__)("All Good", "rank-math")
                          )
                        : wp.element.createElement(
                            "span",
                            { className: "rank-math-group-score test-fail" },
                            this.errors,
                            " ",
                            Object(a.__)("Errors", "rank-math")
                          )
                    ),
                    initialOpen: "basic" === e,
                    className: "rank-math-checklist",
                  },
                  wp.element.createElement("ul", null, t)
                );
              },
            },
            {
              key: "renderGroupItems",
              value: function (e) {
                var t = this,
                  n = this.results.results,
                  a = this.getGroupItems(e);
                return Object.keys(a).map(function (e) {
                  if (Object(c.isUndefined)(n[e]) || (!t.isPrimary && a[e]))
                    return !1;
                  var r = n[e],
                    i = l()("seo-check-" + e, {
                      "test-ok": r.hasScore(),
                      "test-fail": !r.hasScore(),
                    });
                  r.hasScore() &&
                    [
                      "contentHasAssets",
                      "lengthContent",
                      "keywordDensity",
                    ].includes(e) &&
                    (i +=
                      " " +
                      (function (e, t) {
                        var n = Object(c.round)((e / t) * 100);
                        if (!(100 <= n))
                          return 49 < n
                            ? "test-check-good"
                            : 30 < n
                            ? "test-check-ok"
                            : "test-check-bad";
                      })(r.getScore(), r.getMaxScore())),
                    !1 === r.hasScore() && (t.errors += 1);
                  var o = t.getLink(e);
                  return wp.element.createElement(
                    "li",
                    { key: e, className: i },
                    wp.element.createElement("span", {
                      dangerouslySetInnerHTML: { __html: r.getText() },
                    }),
                    o &&
                      wp.element.createElement("a", {
                        href:
                          "https://rankmath.com/kb/score-100-in-tests/?utm_source=Plugin&utm_medium=Content%20Analysis%20Single%20Test%20KB&utm_campaign=WP" +
                          o,
                        rel: "noreferrer",
                        target: "_blank",
                        className:
                          "dashicons-before dashicons-editor-help rank-math-help-icon",
                      })
                  );
                });
              },
            },
            {
              key: "getGroupItems",
              value: function (e) {
                return (
                  "post" === rankMath.objectType
                    ? {
                        basic: {
                          keywordInTitle: !0,
                          keywordInMetaDescription: !0,
                          keywordInPermalink: !0,
                          keywordIn10Percent: !0,
                          keywordInContent: !1,
                          lengthContent: !1,
                          hasProductSchema: !0,
                        },
                        advanced: {
                          keywordInSubheadings: !1,
                          keywordInImageAlt: !0,
                          keywordDensity: !1,
                          lengthPermalink: !1,
                          linksHasExternals: !1,
                          linksNotAllExternals: !1,
                          linksHasInternal: !1,
                          keywordNotUsed: !0,
                          hasContentAI: !0,
                          isReviewEnabled: !0,
                        },
                        "title-readability": {
                          titleStartWithKeyword: !0,
                          titleSentiment: !1,
                          titleHasPowerWords: !1,
                          titleHasNumber: !1,
                        },
                        "content-readability": {
                          contentHasTOC: !1,
                          contentHasShortParagraphs: !1,
                          contentHasAssets: !1,
                        },
                      }
                    : {
                        basic: {
                          keywordInTitle: !0,
                          keywordInMetaDescription: !0,
                          keywordInPermalink: !0,
                        },
                        advanced: {
                          titleStartWithKeyword: !0,
                          keywordNotUsed: !0,
                        },
                      }
                )[e];
              },
            },
            {
              key: "getGroupTitle",
              value: function (e) {
                return this.getGroups()[e];
              },
            },
            {
              key: "getGroups",
              value: function () {
                return "post" === rankMath.objectType
                  ? {
                      basic: Object(a.__)("Basic SEO", "rank-math"),
                      advanced: Object(a.__)("Additional", "rank-math"),
                      "title-readability": Object(a.__)(
                        "Title Readability",
                        "rank-math"
                      ),
                      "content-readability": Object(a.__)(
                        "Content Readability",
                        "rank-math"
                      ),
                    }
                  : {
                      basic: Object(a.__)("Basic SEO", "rank-math"),
                      advanced: Object(a.__)("Additional", "rank-math"),
                    };
              },
            },
            {
              key: "getLink",
              value: function (e) {
                var t = {
                  keywordInTitle:
                    "#focus-keyword-in-the-seo-title-primary-focus-keyword-only",
                  keywordInMetaDescription:
                    "#focus-keyword-in-the-meta-description-primary-focus-keyword-only",
                  keywordInPermalink:
                    "#focus-keyword-in-the-url-primary-focus-keyword-only",
                  keywordIn10Percent:
                    "#focus-keyword-at-the-beginning-of-the-content",
                  keywordInContent:
                    "#focus-keyword-in-the-content-runs-of-all-focus-keywords",
                  lengthContent: "#overall-content-length",
                  keywordInSubheadings:
                    "#focus-keyword-in-subheading-primary-and-secondary-focus-keywords",
                  keywordInImageAlt:
                    "#focus-keyword-in-image-alt-attributes-primary-focus-keyword-only",
                  keywordDensity:
                    "#keyword-density-primary-and-secondary-focus-keywords",
                  lengthPermalink: "#url-length",
                  linksHasExternals: "#linking-to-external-sources",
                  linksNotAllExternals:
                    "#linking-to-external-content-with-a-followed-link",
                  linksHasInternal: "#linking-to-internal-resources",
                  keywordNotUsed:
                    "#focus-keyword-uniqueness-primary-focus-keyword-only",
                  titleStartWithKeyword:
                    "#focus-keyword-at-the-beginning-of-the-seo-title-only-for-primary-keyword",
                  titleSentiment: "#sentiment-in-a-title",
                  titleHasPowerWords: "#use-of-power-word-in-title",
                  titleHasNumber: "#number-in-title",
                  contentHasTOC: "#table-of-contents",
                  contentHasShortParagraphs: "#use-of-short-paragraphs",
                  contentHasAssets: "#use-of-media-in-your-posts",
                  hasContentAI: "#used-content-ai",
                  hasProductSchema: "#has-product-schema",
                  isReviewEnabled: "#is-review-enabled",
                };
                return Object(c.has)(t, e) ? t[e] : "";
              },
            },
          ]) && Se(t.prototype, n),
          r && Se(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          s
        );
      })(o.Component),
      Re = Object(r.withSelect)(function (e) {
        var t = e("rank-math");
        return {
          isLoaded: t.isLoaded(),
          isRefreshing: t.isRefreshing(),
          selectedKeyword: t.getSelectedKeyword(),
        };
      })(Pe),
      Le = n(23),
      Fe = Object(r.withSelect)(function (e) {
        return { isPro: e("rank-math").isPro() };
      })(function (e) {
        return e.isPro
          ? rankMath.isUserRegistered
            ? wp.element.createElement(
                u.Notice,
                { status: "warning", isDismissible: !1 },
                wp.element.createElement(
                  A,
                  {
                    components: {
                      link: wp.element.createElement("a", {
                        href: "https://rankmath.com/kb/score-100-in-tests/?utm_source=Plugin&utm_medium=Gutenberg%20General%20Tab%20Score%20Notice&utm_campaign=WP",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }),
                    },
                  },
                  Object(a.__)(
                    "Read here to {{link}}Score 100/100{{/link}} ",
                    "rank-math"
                  )
                )
              )
            : wp.element.createElement(
                u.Notice,
                { status: "warning", isDismissible: !1 },
                wp.element.createElement(
                  A,
                  {
                    components: {
                      link: wp.element.createElement("a", {
                        href: rankMath.adminurl + "?page=rank-math&view=help",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }),
                    },
                  },
                  Object(a.__)(
                    "Activate your account by {{link}}connecting to Rank Math!{{/link}} ",
                    "rank-math"
                  )
                )
              )
          : wp.element.createElement(
              u.Notice,
              { status: "warning", isDismissible: !1 },
              wp.element.createElement(
                A,
                {
                  components: {
                    link: wp.element.createElement("a", {
                      href: rankMath.assessor.futureSeo,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }),
                    strong: wp.element.createElement("strong", null),
                  },
                },
                Object(a.__)(
                  "Want more? {{link}}{{strong}}Upgrade today to the PRO{{/strong}}{{/link}} version.",
                  "rank-math"
                )
              )
            );
      }),
      Ue = Object(p.withInstanceId)(function (e) {
        var t = e.className,
          n = e.instanceId,
          a = e.children,
          r = "rank-math-tooltip-" + n,
          i = l()("rank-math-tooltip", t);
        return wp.element.createElement(
          "span",
          { className: i },
          wp.element.createElement("input", { id: r, type: "checkbox" }),
          wp.element.createElement("label", {
            htmlFor: r,
            className: "dashicons-before dashicons-editor-help",
          }),
          wp.element.createElement(
            "div",
            { className: "rank-math-tooltip-content" },
            a
          )
        );
      }),
      He = n(45),
      Be = n.n(He);
    function Ve(e) {
      return (
        (Ve =
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
        Ve(e)
      );
    }
    function ze() {
      return (
        (ze = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
        ze.apply(this, arguments)
      );
    }
    function We(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function Ge(e, t) {
      return (
        (Ge = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        Ge(e, t)
      );
    }
    function Ke(e) {
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
          a = Ye(e);
        if (t) {
          var r = Ye(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else n = a.apply(this, arguments);
        return $e(this, n);
      };
    }
    function $e(e, t) {
      if (t && ("object" === Ve(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return qe(e);
    }
    function qe(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Ye(e) {
      return (
        (Ye = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Ye(e)
      );
    }
    var Je = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Ge(e, t);
        })(o, e);
        var t,
          n,
          a,
          r = Ke(o);
        function o(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
            ((t = r.call(this, e))._handleRef = t._handleRef.bind(qe(t))),
            t
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                (this.tagify = new Be.a(
                  this.component,
                  this.props.settings || {}
                )),
                  this.props.settings.callbacks.setup &&
                    setTimeout(function () {
                      e.props.settings.callbacks.setup.call(e.tagify),
                        e.tagify.DOM.input.setAttribute("contenteditable", !0),
                        e.tagify.DOM.input.addEventListener(
                          "blur",
                          e.props.settings.callbacks.blur
                        );
                    }, 100),
                  this.props.settings.callbacks.dragEnd &&
                    this.tagify.DOM.scope.addEventListener(
                      "dragend",
                      this.props.settings.callbacks.dragEnd
                    ),
                  Object(i.doAction)("rank_math_tagify_init", this);
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (
                  (this.tagify.settings.whitelist = e.settings.whitelist),
                  e.showDropdown &&
                    this.tagify.dropdown.show.call(this.tagify, e.showDropdown),
                  !1 === e.showDropdown &&
                    this.tagify.dropdown.hide.call(this.tagify, !0),
                  !1
                );
              },
            },
            {
              key: "_handleRef",
              value: function (e) {
                this.component = e;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  ref: this._handleRef,
                  name: this.props.name,
                  className: this.props.className,
                  placeholder: this.props.placeholder,
                };
                return "textarea" === this.props.mode
                  ? wp.element.createElement(
                      "textarea",
                      ze({}, e, { defaultValue: this.props.initialValue })
                    )
                  : wp.element.createElement(
                      "input",
                      ze({}, e, { defaultValue: this.props.initialValue })
                    );
              },
            },
            {
              key: "toArray",
              value: function () {
                return this.tagify.value.map(function (e) {
                  return e.value;
                });
              },
            },
            {
              key: "toString",
              value: function () {
                return this.toArray().join(",");
              },
            },
            {
              key: "queryTags",
              value: function () {
                return this.tagify.DOM.scope.querySelectorAll("tag");
              },
            },
          ]) && We(t.prototype, n),
          a && We(t, a),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(o.Component),
      Xe = function (e) {
        var t = e.onClick;
        return wp.element.createElement(
          u.Modal,
          {
            title: Object(a.__)(
              "Upgrade to re-order Focus Keywords",
              "rank-math"
            ),
            closeButtonLabel: Object(a.__)("Close", "rank-math"),
            shouldCloseOnClickOutside: !0,
            onRequestClose: function () {
              return t();
            },
            className: "rank-math-modal rank-math-focus-keywords-cta-modal",
            overlayClassName: "rank-math-modal-overlay",
          },
          wp.element.createElement(
            "div",
            {
              className:
                "components-panel__body rank-math-focus-keywords-cta-wrapper",
            },
            wp.element.createElement(
              "div",
              { id: "rank-math-pro-cta", className: "center" },
              wp.element.createElement(
                "div",
                { className: "rank-math-cta-box blue-ticks" },
                wp.element.createElement(
                  "ul",
                  null,
                  wp.element.createElement(
                    "li",
                    null,
                    Object(a.__)("Improve the SEO workflow", "rank-math")
                  ),
                  wp.element.createElement(
                    "li",
                    null,
                    Object(a.__)(
                      "Set different Primary Focus Keyword",
                      "rank-math"
                    )
                  ),
                  wp.element.createElement(
                    "li",
                    null,
                    Object(a.__)(
                      "and many other premium SEO features",
                      "rank-math"
                    )
                  )
                ),
                wp.element.createElement(
                  "a",
                  {
                    className: "button button-primary is-green",
                    href: rankMath.trendsUpgradeLink,
                    rel: "noreferrer noopener",
                    target: "_blank",
                  },
                  rankMath.trendsUpgradeLabel
                )
              )
            )
          )
        );
      };
    function Ze(e) {
      return (
        (Ze =
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
        Ze(e)
      );
    }
    function Qe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function et(e, t) {
      return (
        (et = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        et(e, t)
      );
    }
    function tt(e) {
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
          a = rt(e);
        if (t) {
          var r = rt(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else n = a.apply(this, arguments);
        return nt(this, n);
      };
    }
    function nt(e, t) {
      if (t && ("object" === Ze(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return at(e);
    }
    function at(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function rt(e) {
      return (
        (rt = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        rt(e)
      );
    }
    var it = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && et(e, t);
        })(l, e);
        var t,
          n,
          r,
          s = tt(l);
        function l(e) {
          var t,
            n = e.keywords;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            ((t = s.call(this)).state = {}),
            (t.request = null),
            (t.hasAdded = !1),
            (t.clickCount = 0),
            (t.singleClickTimer = null),
            (t.state = { showCTA: !1 }),
            (t.tagifyField = Object(o.createRef)()),
            (t.keywords = n),
            (t.hideDropdown = t.hideDropdown.bind(at(t))),
            (t.callbacks = {
              add: t.onAdd.bind(at(t)),
              remove: Object(c.debounce)(t.onRemove.bind(at(t)), 300),
              "edit:updated": t.onEditUpdated.bind(at(t)),
              click: t.onClick.bind(at(t)),
              dragEnd: t.onDragEnd.bind(at(t)),
              setup: t.onSetup.bind(at(t)),
              blur: t.hideDropdown,
            }),
            rankMath.isUserRegistered &&
              (t.callbacks.input = Object(c.debounce)(
                t.onInput.bind(at(t)),
                300
              )),
            (window.rankMathEditor.focusKeywordField = at(t)),
            t
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = Object(i.applyFilters)(
                    "rank_math_focus_keyword_settings",
                    {
                      addTagOnBlur: !0,
                      maxTags:
                        "post" === rankMath.objectType ? rankMath.maxTags : 1,
                      whitelist: this.state.whitelist || [],
                      focusableTags: !0,
                      transformTag: function (t) {
                        t.value = e.stripTags(t.value.replaceAll(",", ""));
                      },
                      templates: {
                        tag: function (t) {
                          var n = t.title || t.value,
                            a = "";
                          if (!t.class) {
                            var r = rankMathEditor.resultManager.getScore(
                              W.Helpers.removeDiacritics(n)
                            );
                            a += e.getScoreClass(r);
                          }
                          return "<tag draggable='true' title='"
                            .concat(
                              e.stripTags(n),
                              "'\n tabIndex='0'\n contenteditable='false'\n spellcheck='false'\n class='tagify__tag "
                            )
                            .concat(t.class ? t.class : a, "'\n ")
                            .concat(
                              e.getAttributesEsc(t),
                              ">\n <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>\n <div>\n <span class='tagify__tag-text'>"
                            )
                            .concat(
                              e.stripTags(n),
                              "</span>\n </div>\n </tag>"
                            );
                        },
                      },
                      callbacks: this.callbacks,
                    },
                    this
                  );
                return (
                  this.setKeywordsClasses(),
                  wp.element.createElement(
                    React.Fragment,
                    null,
                    wp.element.createElement(Je, {
                      ref: this.tagifyField,
                      mode: "input",
                      settings: t,
                      showDropdown: this.state.showDropdown,
                      initialValue: this.keywords,
                      placeholder: Object(a.__)(
                        "Example: Rank Math SEO",
                        "rank-math"
                      ),
                    }),
                    this.state.showCTA &&
                      wp.element.createElement(Xe, {
                        onClick: function () {
                          return e.setState({ showCTA: !1 });
                        },
                      })
                  )
                );
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (e, t) {
                return (
                  this.state.showCTA !== t.showCTA ||
                  this.state.showDropdown !== t.showDropdown ||
                  e.isRefreshing !== this.props.isRefreshing ||
                  e.keywords !== this.props.keywords
                );
              },
            },
            {
              key: "getScoreClass",
              value: function (e) {
                return 80 < e ? "good-fk" : 50 < e ? "ok-fk" : "bad-fk";
              },
            },
            {
              key: "setKeywordsClasses",
              value: function () {
                var e = this;
                if (null !== this.tagifyField.current) {
                  var t = this.tagifyField.current,
                    n = t.tagify.value;
                  if (n.length > 0) {
                    var a = t.queryTags();
                    n.map(function (t, n) {
                      if (!Object(c.isUndefined)(a[n])) {
                        var r = rankMathEditor.resultManager.getScore(
                          W.Helpers.removeDiacritics(t.value)
                        );
                        a[n].classList.remove("ok-fk", "good-fk", "bad-fk"),
                          a[n].classList.add(e.getScoreClass(r));
                      }
                    });
                  }
                }
              },
            },
            {
              key: "onSetup",
              value: function () {
                this.selectFirstKeyword(), this.setKeywordsClasses();
              },
            },
            {
              key: "onInput",
              value: function (e) {
                var t = this;
                (e = Object(c.has)(e.detail, "value")
                  ? e.detail.value
                  : e.detail.data.value).length < 2 ||
                  (this.hideDropdown(),
                  this.hasAdded
                    ? (this.hasAdded = !1)
                    : (this.request = fe.a.ajax({
                        url: rankMath.keywordsApi.url,
                        data: { keyword: e, locale: rankMath.locale },
                        success: function (n) {
                          if (t.hasAdded) t.hasAdded = !1;
                          else {
                            var a = fe.a.map(n, function (e) {
                              return e;
                            });
                            t.setState({ whitelist: a, showDropdown: e });
                          }
                        },
                      })));
              },
            },
            {
              key: "onAdd",
              value: function (e) {
                (this.hasAdded = !0),
                  0 === e.detail.index &&
                    this.props.updateSelectedKeyword(
                      e.detail,
                      this.tagifyField.current
                    ),
                  this.updateKeywords();
              },
            },
            {
              key: "onRemove",
              value: function (e) {
                this.hideDropdown(),
                  0 === e.detail.index && this.onSetup(),
                  rankMathEditor.resultManager.deleteResult(
                    e.detail.data.value
                  ),
                  this.selectFirstKeyword(),
                  this.updateKeywords();
              },
            },
            {
              key: "onClick",
              value: function (e) {
                var t = this;
                this.clickCount++,
                  1 === this.clickCount
                    ? (this.singleClickTimer = setTimeout(function () {
                        (t.clickCount = 0),
                          t.props.updateSelectedKeyword(
                            e.detail,
                            t.tagifyField.current
                          );
                      }, 400))
                    : 2 === this.clickCount &&
                      (clearTimeout(this.singleClickTimer),
                      (this.clickCount = 0));
              },
            },
            {
              key: "onEditUpdated",
              value: function (e) {
                (this.hasAdded = !0),
                  0 === e.detail.index &&
                    this.props.updateSelectedKeyword(
                      e.detail,
                      this.tagifyField.current
                    ),
                  this.updateKeywords();
              },
            },
            {
              key: "selectFirstKeyword",
              value: function () {
                var e = this.tagifyField.current,
                  t = e.tagify.value,
                  n = { tag: "", index: 0, data: { value: "" } };
                t.length > 0 &&
                  (n = {
                    tag: e.queryTags()[0],
                    index: 0,
                    data: { value: t[0].value },
                  }),
                  this.props.updateSelectedKeyword(n, e);
              },
            },
            {
              key: "updateKeywords",
              value: function () {
                var e = this.tagifyField.current,
                  t = this.stripTags(e.toString());
                this.props.updateKeywords(t);
              },
            },
            {
              key: "onDragEnd",
              value: function () {
                1 !== this.tagifyField.current.queryTags().length &&
                  this.setState({ showCTA: !0 });
              },
            },
            {
              key: "hideDropdown",
              value: function () {
                null !== this.request &&
                  (this.request.abort(), (this.request = null)),
                  this.setState({ whitelist: [], showDropdown: !1 });
              },
            },
            {
              key: "getAttributesEsc",
              value: function (e) {
                if ("[object Object]" !== Object.prototype.toString.call(e))
                  return "";
                var t,
                  n,
                  a = "",
                  r = Object.keys(e);
                for (n = r.length; n--; )
                  "class" !== (t = r[n]) &&
                    e.hasOwnProperty(t) &&
                    e[t] &&
                    (a +=
                      "" +
                      t +
                      (e[t] ? '="'.concat(this.stripTags(e[t]), '"') : ""));
                return a;
              },
            },
            {
              key: "stripTags",
              value: function (e) {
                return (
                  (e = fe()("<textarea />").html(e).text()),
                  (
                    new DOMParser().parseFromString(e, "text/html").body
                      .textContent || ""
                  ).replace(/["<>]/g, "") || ""
                );
              },
            },
          ]) && Qe(t.prototype, n),
          r && Qe(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          l
        );
      })(o.Component),
      ot = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math");
          return { keywords: t.getKeywords(), isRefreshing: t.isRefreshing() };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            updateKeywords: function (t) {
              e("rank-math").updateKeywords(t);
            },
            updateSelectedKeyword: function (t, n) {
              n.queryTags().forEach(function (e) {
                e.classList.remove("selected");
              }),
                Object(c.isUndefined)(t.tag) ||
                  "" === t.tag ||
                  t.tag.classList.add("selected"),
                e("rank-math").updateSelectedKeyword(t);
            },
          };
        })
      )(it),
      st = Object(u.withFilters)("rankMath.focusKeywords.Trends")(
        Object(p.compose)(
          Object(r.withSelect)(function (e) {
            return { isTrendsCtaOpen: e("rank-math").isTrendsCtaOpen() };
          }),
          Object(r.withDispatch)(function (e, t) {
            return {
              toggleTrendsCta: function () {
                e("rank-math").toggleTrendsCta(!t.isTrendsCtaOpen);
              },
            };
          })
        )(function (e) {
          var t = e.isTrendsCtaOpen,
            n = e.toggleTrendsCta;
          return wp.element.createElement(
            o.Fragment,
            null,
            wp.element.createElement("a", {
              href: "#",
              title: Object(a.__)("Trends", "rank-math"),
              rel: "noreferrer noopener",
              id: "rank-math-compare-keywords-trigger",
              className:
                "button button-icon rank-math-compare-keywords-trigger",
              dangerouslySetInnerHTML: { __html: rankMath.trendsIcon },
              onClick: n,
            }),
            t &&
              wp.element.createElement(
                u.Modal,
                {
                  title: Object(a.__)("Google Trends", "rank-math"),
                  closeButtonLabel: Object(a.__)("Close", "rank-math"),
                  shouldCloseOnClickOutside: !0,
                  onRequestClose: n,
                  className: "rank-math-modal rank-math-trends-cta-modal",
                  overlayClassName: "rank-math-modal-overlay",
                },
                wp.element.createElement(
                  "div",
                  {
                    className:
                      "components-panel__body rank-math-trends-cta-wrapper",
                  },
                  wp.element.createElement("img", {
                    src: rankMath.trendsPreviewImage,
                    alt: "",
                    className: "trends-cta blurred",
                  }),
                  wp.element.createElement(
                    "div",
                    { id: "rank-math-pro-cta", className: "center" },
                    wp.element.createElement(
                      "div",
                      { className: "rank-math-cta-box blue-ticks width-50" },
                      wp.element.createElement(
                        "h3",
                        null,
                        Object(a.__)("Track Keyword Trends", "rank-math")
                      ),
                      wp.element.createElement(
                        "ul",
                        null,
                        wp.element.createElement(
                          "li",
                          null,
                          Object(a.__)(
                            "Data fetched directly from Google",
                            "rank-math"
                          )
                        ),
                        wp.element.createElement(
                          "li",
                          null,
                          Object(a.__)(
                            "Analyze search trends and compare keywords",
                            "rank-math"
                          )
                        ),
                        wp.element.createElement(
                          "li",
                          null,
                          Object(a.__)(
                            "See data from a particular Country or timeframe",
                            "rank-math"
                          )
                        )
                      ),
                      wp.element.createElement(
                        "a",
                        {
                          className: "button button-primary is-green",
                          href: rankMath.trendsUpgradeLink,
                          rel: "noreferrer noopener",
                          target: "_blank",
                        },
                        rankMath.trendsUpgradeLabel
                      )
                    )
                  )
                )
              )
          );
        })
      ),
      lt = Object(u.withFilters)("rankMath.analytics.contentAI")(function () {
        return !1;
      }),
      ct = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math");
          return {
            isLoaded: t.isLoaded(),
            isPillarContent: t.getPillarContent(),
          };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            togglePillarContent: function (t) {
              e("rank-math").updatePillarContent(t);
            },
          };
        })
      )(function (e) {
        var t = e.isLoaded,
          n = e.isPillarContent,
          r = e.togglePillarContent;
        return t
          ? wp.element.createElement(
              u.PanelBody,
              { initialOpen: !0, className: "rank-math-focus-keyword" },
              wp.element.createElement(
                "h2",
                { className: "components-panel__body-title" },
                Object(a.__)("Focus Keyword", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  wp.element.createElement(
                    A,
                    {
                      components: {
                        link: wp.element.createElement("a", {
                          href: rankMath.assessor.hundredScoreLink,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }),
                      },
                    },
                    Object(a.__)(
                      "Insert keywords you want to rank for. Try to {{link}}attain 100/100 points{{/link}} for better chances of ranking.",
                      "rank-math"
                    )
                  )
                )
              ),
              wp.element.createElement(st, null),
              rankMath.currentEditor &&
                "classic" !== rankMath.currentEditor &&
                wp.element.createElement(lt, null),
              wp.element.createElement(Le.a.Slot, null, function (e) {
                return e.length > 0 ? e : [];
              }),
              wp.element.createElement(
                "div",
                null,
                wp.element.createElement(ot, null)
              ),
              wp.element.createElement(Fe, null),
              "post" === rankMath.objectType &&
                wp.element.createElement(u.CheckboxControl, {
                  className: "pillar-content",
                  label: wp.element.createElement(
                    o.Fragment,
                    null,
                    wp.element.createElement(
                      "strong",
                      null,
                      Object(a.__)("This post is Pillar Content", "rank-math")
                    ),
                    wp.element.createElement("a", {
                      href: "https://rankmath.com/kb/pillar-content-internal-linking/",
                      rel: "noreferrer",
                      target: "_blank",
                      className:
                        "dashicons-before dashicons-editor-help rank-math-help-icon",
                    })
                  ),
                  checked: n,
                  onChange: r,
                })
            )
          : null;
      }),
      pt = n(21),
      ut = Object(r.withDispatch)(function (e) {
        return {
          toggleEditor: function () {
            e("rank-math").toggleSnippetEditor(!0);
          },
        };
      })(function (e) {
        var t = e.toggleEditor;
        return wp.element.createElement(
          o.Fragment,
          null,
          wp.element.createElement(
            u.PanelBody,
            { initialOpen: !0 },
            wp.element.createElement(ee, { onClick: t }),
            wp.element.createElement(xe, null),
            wp.element.createElement(pt.a.Slot, null, function (e) {
              return e.length > 0 ? e : [];
            })
          ),
          wp.element.createElement(ct, null),
          rankMath.canUser.analysis && wp.element.createElement(Re, null)
        );
      }),
      dt = function (e, t, n) {
        return !1 === n ? delete e[t] : (e[t] = !0), e;
      },
      mt = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math").getRobots();
          return {
            robots: t,
            isRobotIndex: "index" in t,
            isRobotNoIndex: "noindex" in t,
            isRobotNoFollow: "nofollow" in t,
            isRobotNoArchive: "noarchive" in t,
            isRobotNoImageIndex: "noimageindex" in t,
            isRobotNoSnippet: "nosnippet" in t,
          };
        }),
        Object(r.withDispatch)(function (e, t) {
          var n = t.robots;
          return {
            updateRobots: function (t, a) {
              (n = dt(n, t, a)),
                "index" === t && (n = dt(n, "noindex", !a)),
                "noindex" === t && (n = dt(n, "index", !a)),
                e("rank-math").updateRobots(n);
            },
          };
        })
      )(function (e) {
        return wp.element.createElement(
          u.BaseControl,
          {
            className: "rank-math-robots",
            id: "rank-math-robots",
            label: Object(a.__)("Robots Meta", "rank-math"),
          },
          wp.element.createElement(
            "div",
            { className: "rank-math-robots-list" },
            wp.element.createElement(u.CheckboxControl, {
              className: "robot-choice-index",
              label: wp.element.createElement(
                o.Fragment,
                null,
                Object(a.__)("Index", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  Object(a.__)(
                    "Instructs search engines to index and show these pages in the search results",
                    "rank-math"
                  )
                )
              ),
              checked: e.isRobotIndex,
              onChange: function (t) {
                return e.updateRobots("index", t);
              },
            }),
            wp.element.createElement(u.CheckboxControl, {
              className: "robot-choice-noindex",
              label: wp.element.createElement(
                o.Fragment,
                null,
                Object(a.__)("No Index", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  Object(a.__)(
                    "Prevents pages from being indexed and displayed in search engine result pages",
                    "rank-math"
                  )
                )
              ),
              checked: e.isRobotNoIndex,
              onChange: function (t) {
                return e.updateRobots("noindex", t);
              },
            }),
            wp.element.createElement(u.CheckboxControl, {
              className: "robot-choice-nofollow",
              label: wp.element.createElement(
                o.Fragment,
                null,
                Object(a.__)("Nofollow", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  Object(a.__)(
                    "Prevents search engines from following links on the pages",
                    "rank-math"
                  )
                )
              ),
              checked: e.isRobotNoFollow,
              onChange: function (t) {
                return e.updateRobots("nofollow", t);
              },
            }),
            wp.element.createElement(u.CheckboxControl, {
              className: "robot-choice-noarchive",
              label: wp.element.createElement(
                o.Fragment,
                null,
                Object(a.__)("No Archive", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  Object(a.__)(
                    "Prevents search engines from showing Cached links for pages",
                    "rank-math"
                  )
                )
              ),
              checked: e.isRobotNoArchive,
              onChange: function (t) {
                return e.updateRobots("noarchive", t);
              },
            }),
            wp.element.createElement(u.CheckboxControl, {
              className: "robot-choice-noimageindex",
              label: wp.element.createElement(
                o.Fragment,
                null,
                Object(a.__)("No Image Index", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  Object(a.__)(
                    "This option prevents images on a page from being indexed by Google and other search engines",
                    "rank-math"
                  )
                )
              ),
              checked: e.isRobotNoImageIndex,
              onChange: function (t) {
                return e.updateRobots("noimageindex", t);
              },
            }),
            wp.element.createElement(u.CheckboxControl, {
              className: "robot-choice-nosnippet",
              label: wp.element.createElement(
                o.Fragment,
                null,
                Object(a.__)("No Snippet", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  Object(a.__)(
                    "Prevents a snippet from being shown in the search results",
                    "rank-math"
                  )
                )
              ),
              checked: e.isRobotNoSnippet,
              onChange: function (t) {
                return e.updateRobots("nosnippet", t);
              },
            })
          )
        );
      });
    function ht(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function gt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ht(Object(n), !0).forEach(function (t) {
              ft(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ht(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function ft(e, t, n) {
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
    var wt = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math");
          return {
            redirectionID: t.getRedirectionID(),
            redirectionUrl: t.getRedirectionUrl(),
            redirectionType: t.getRedirectionType(),
            hasRedirect: t.hasRedirect(),
          };
        }),
        Object(r.withDispatch)(function (e, t) {
          return {
            toggle: function () {
              e("rank-math").updateHasRedirect(!t.hasRedirect),
                e("rank-math").updateRedirectionItem(
                  gt(gt({}, t), {}, { hasRedirect: !t.hasRedirect })
                );
            },
            updateRedirection: function (n, a) {
              e("rank-math").updateRedirection(n, a),
                e("rank-math").updateRedirectionItem(
                  gt(gt({}, t), {}, ft({}, n, a))
                );
            },
          };
        })
      )(function (e) {
        return wp.element.createElement(
          o.Fragment,
          null,
          wp.element.createElement(u.ToggleControl, {
            className: e.hasRedirect ? "is-open" : "is-close",
            label: Object(a.__)("Redirect", "rank-math"),
            checked: e.hasRedirect,
            onChange: function () {
              return e.toggle();
            },
          }),
          e.hasRedirect &&
            wp.element.createElement(u.SelectControl, {
              label: Object(a.__)("Redirection Type", "rank-math"),
              className: e.hasRedirect ? "" : "hidden",
              value: e.redirectionType,
              onChange: function (t) {
                return e.updateRedirection("redirectionType", t);
              },
              options: [
                {
                  value: "301",
                  label: Object(a.__)("301 Permanent Move", "rank-math"),
                },
                {
                  value: "302",
                  label: Object(a.__)("302 Temporary Move", "rank-math"),
                },
                {
                  value: "307",
                  label: Object(a.__)("307 Temporary Redirect", "rank-math"),
                },
                {
                  value: "410",
                  label: Object(a.__)("410 Content Deleted", "rank-math"),
                },
                {
                  value: "451",
                  label: Object(a.__)(
                    "451 Content Unavailable for Legal Reasons",
                    "rank-math"
                  ),
                },
              ],
            }),
          !1 === ["410", "451"].includes(e.redirectionType) &&
            wp.element.createElement(u.TextControl, {
              type: "url",
              autoComplete: "off",
              label: Object(a.__)("Destination URL", "rank-math"),
              value: e.redirectionUrl,
              placeholder: "https://rankmath.com/",
              className: e.hasRedirect ? "" : "hidden",
              onChange: function (t) {
                return e.updateRedirection("redirectionUrl", t);
              },
            }),
          wp.element.createElement(u.TextControl, {
            type: "hidden",
            value: e.redirectionID,
            className: "hidden",
          })
        );
      }),
      bt = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math"),
            n = rankMathEditor.assessor.dataCollector;
          return {
            placeholder: t.getCanonicalUrl()
              ? t.getCanonicalUrl()
              : n.getPermalink()
              ? n.getPermalink()
              : "https://rankmath.com/",
            canonicalUrl: t.getCanonicalUrl(),
          };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            onUrlChange: function (t) {
              e("rank-math").updateCanonicalUrl(t);
            },
          };
        })
      )(function (e) {
        var t = e.canonicalUrl,
          n = e.placeholder,
          r = e.onUrlChange;
        return wp.element.createElement(
          u.BaseControl,
          { className: "rank-math-canonical" },
          wp.element.createElement(
            "span",
            { className: "components-base-control__label" },
            Object(a.__)("Canonical URL", "rank-math"),
            wp.element.createElement(
              Ue,
              null,
              Object(a.__)(
                "The canonical URL informs search crawlers which page is the main page if you have double content",
                "rank-math"
              )
            )
          ),
          wp.element.createElement(u.TextControl, {
            type: "url",
            autoComplete: "off",
            value: t,
            placeholder: n,
            onChange: function (e) {
              return r(e);
            },
          })
        );
      }),
      vt = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          return { title: e("rank-math").getBreadcrumbTitle() };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            onTitleChange: function (t) {
              e("rank-math").updateBreadcrumbTitle(t);
            },
          };
        })
      )(function (e) {
        var t = e.title,
          n = e.onTitleChange;
        return wp.element.createElement(
          u.BaseControl,
          { className: "rank-math-breadcrumb-title" },
          wp.element.createElement(
            "span",
            { className: "components-base-control__label" },
            Object(a.__)("Breadcrumb Title", "rank-math"),
            wp.element.createElement(
              Ue,
              null,
              Object(a.__)("Breadcrumb Title to use for this post", "rank-math")
            )
          ),
          wp.element.createElement(u.TextControl, {
            value: t,
            onChange: function (e) {
              return n(e);
            },
          })
        );
      });
    function yt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, a);
      }
      return n;
    }
    function kt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yt(Object(n), !0).forEach(function (t) {
              Ot(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : yt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Ot(e, t, n) {
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
    var Et = {
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
      },
      Tt = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          var t = e("rank-math").getAdvancedRobots(),
            n = kt({}, t);
          Object(c.defaults)(n, Et);
          var a = null,
            r = null,
            i = null;
          return (
            "max-snippet" in t && (a = n["max-snippet"]),
            "max-image-preview" in t && (r = n["max-image-preview"]),
            "max-video-preview" in t && (i = n["max-video-preview"]),
            {
              meta: t,
              isSnippet: a,
              isImage: r,
              isVideo: i,
              maxSnippet: a ? n["max-snippet"] : -1,
              maxImage: n["max-image-preview"],
              maxVideo: i ? n["max-video-preview"] : -1,
            }
          );
        }),
        Object(r.withDispatch)(function (e, t) {
          var n = kt({}, t.meta);
          return {
            updateRobots: function (t, a) {
              Object(c.isBoolean)(a)
                ? !1 === a
                  ? delete n[t]
                  : (n[t] = Et[t])
                : (n[t] = a),
                e("rank-math").updateAdvancedRobots(n);
            },
          };
        })
      )(function (e) {
        return wp.element.createElement(
          u.BaseControl,
          {
            className: "rank-math-robots",
            id: "rank-math-robots",
            label: Object(a.__)("Advanced Robots Meta", "rank-math"),
          },
          wp.element.createElement(
            "div",
            { className: "rank-math-robots-list advanced-robots" },
            wp.element.createElement(u.CheckboxControl, {
              label: wp.element.createElement(
                o.Fragment,
                null,
                Object(a.__)("Max Snippet", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  Object(a.__)(
                    "Specify a maximum text-length, in characters, of a snippet for your page",
                    "rank-math"
                  )
                )
              ),
              checked: e.isSnippet,
              onChange: function (t) {
                return e.updateRobots("max-snippet", t);
              },
            }),
            wp.element.createElement(u.TextControl, {
              type: "number",
              value: e.maxSnippet,
              onChange: function (t) {
                return e.updateRobots("max-snippet", t);
              },
            }),
            wp.element.createElement(u.CheckboxControl, {
              label: wp.element.createElement(
                o.Fragment,
                null,
                Object(a.__)("Max Video Preview", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  Object(a.__)(
                    "Specify a maximum duration in seconds of an animated video preview",
                    "rank-math"
                  )
                )
              ),
              checked: e.isVideo,
              onChange: function (t) {
                return e.updateRobots("max-video-preview", t);
              },
            }),
            wp.element.createElement(u.TextControl, {
              type: "number",
              value: e.maxVideo,
              onChange: function (t) {
                return e.updateRobots("max-video-preview", t);
              },
            }),
            wp.element.createElement(u.CheckboxControl, {
              label: wp.element.createElement(
                o.Fragment,
                null,
                Object(a.__)("Max Image Preview", "rank-math"),
                wp.element.createElement(
                  Ue,
                  null,
                  Object(a.__)(
                    "Specify a maximum size of image preview to be shown for images on this page",
                    "rank-math"
                  )
                )
              ),
              checked: e.isImage,
              onChange: function (t) {
                return e.updateRobots("max-image-preview", t);
              },
            }),
            wp.element.createElement(u.SelectControl, {
              value: e.maxImage,
              onChange: function (t) {
                return e.updateRobots("max-image-preview", t);
              },
              options: [
                { value: "large", label: Object(a.__)("Large", "rank-math") },
                {
                  value: "standard",
                  label: Object(a.__)("Standard", "rank-math"),
                },
                { value: "none", label: Object(a.__)("None", "rank-math") },
              ],
            })
          )
        );
      }),
      _t = Object(p.compose)(
        Object(r.withSelect)(function (e) {
          return { showScore: e("rank-math").getShowScoreFrontend() };
        }),
        Object(r.withDispatch)(function (e) {
          return {
            toggleScore: function (t) {
              e("rank-math").toggleFrontendScore(t);
            },
          };
        })
      )(function (e) {
        var t = e.showScore,
          n = e.toggleScore;
        return wp.element.createElement(
          u.BaseControl,
          { className: "rank-math-frontend-score" },
          wp.element.createElement(u.ToggleControl, {
            label: Object(a.__)("Show SEO Score on Front-end", "rank-math"),
            checked: t,
            onChange: n,
          })
        );
      }),
      xt = n(22),
      jt = Object(u.withFilters)("rankMath.advanced.newsSitemap")(function () {
        return null;
      }),
      Ct = function () {
        return wp.element.createElement(
          o.Fragment,
          null,
          wp.element.createElement(
            u.PanelBody,
            { initialOpen: !0 },
            wp.element.createElement(mt, null)
          ),
          wp.element.createElement(
            u.PanelBody,
            { initialOpen: !0 },
            wp.element.createElement(Tt, null)
          ),
          wp.element.createElement(jt, null),
          wp.element.createElement(
            u.PanelBody,
            { initialOpen: !0 },
            wp.element.createElement(bt, null)
          ),
          rankMath.assessor.hasBreadcrumb &&
            wp.element.createElement(
              u.PanelBody,
              { initialOpen: !0 },
              wp.element.createElement(vt, null)
            ),
          rankMath.assessor.hasRedirection &&
            wp.element.createElement(
              u.PanelBody,
              { initialOpen: !0, className: "rank-math-redirect" },
              wp.element.createElement(wt, null)
            ),
          rankMath.frontEndScore &&
            wp.element.createElement(
              u.PanelBody,
              { initialOpen: !0 },
              wp.element.createElement(_t, null)
            ),
          wp.element.createElement(xt.a.Slot, null, function (e) {
            return e.length > 0 ? e : [];
          })
        );
      },
      Nt = n(46),
      St = n.n(Nt),
      It = {
        init: function () {
          this.cacheProps(), this.initVars(), this.bindEvents();
        },
        cacheProps: function () {
          (this.root = document.documentElement),
            (this.$wpAdminbar = fe()("#wpadminbar"));
        },
        initVars: function () {
          this.$wpAdminbar.length && this.setWpAdminbarHeight.call(this);
        },
        bindEvents: function () {
          window.addEventListener(
            "resize",
            St()(this.onWindowResize.bind(this))
          );
        },
        onWindowResize: function () {
          this.$wpAdminbar.length && this.setWpAdminbarHeight.call(this);
        },
        setWpAdminbarHeight: function () {
          this.root.style.setProperty(
            "--rankmath-wp-adminbar-height",
            this.$wpAdminbar.outerHeight() + "px"
          );
        },
      };
    fe()(function () {
      It.init();
    });
    var Dt = function (e) {
        "social" === e &&
          Object(r.dispatch)("rank-math").toggleSnippetEditor(!0);
      },
      Mt = function () {
        return wp.element.createElement(
          _,
          {
            className: "rank-math-tabs",
            activeClass: "is-active",
            tabs:
              ((e = []),
              rankMath.canUser.general &&
                e.push({
                  name: "general",
                  title: wp.element.createElement(
                    o.Fragment,
                    null,
                    wp.element.createElement("i", {
                      className: "rm-icon rm-icon-settings",
                      title: Object(a.__)("General", "rank-math"),
                    }),
                    wp.element.createElement(
                      "span",
                      null,
                      Object(a.__)("General", "rank-math")
                    )
                  ),
                  view: ut,
                  className: "rank-math-general-tab",
                }),
              rankMath.canUser.advanced &&
                e.push({
                  name: "advanced",
                  title: wp.element.createElement(
                    o.Fragment,
                    null,
                    wp.element.createElement("i", {
                      className: "rm-icon rm-icon-toolbox",
                      title: Object(a.__)("Advanced", "rank-math"),
                    }),
                    wp.element.createElement(
                      "span",
                      null,
                      Object(a.__)("Advanced", "rank-math")
                    )
                  ),
                  view: Ct,
                  className: "rank-math-advanced-tab",
                }),
              rankMath.canUser.social &&
                e.push({
                  name: "social",
                  title: wp.element.createElement(
                    o.Fragment,
                    null,
                    wp.element.createElement("i", {
                      className: "rm-icon rm-icon-social",
                      title: Object(a.__)("Social", "rank-math"),
                    }),
                    wp.element.createElement(
                      "span",
                      null,
                      Object(a.__)("Social", "rank-math")
                    )
                  ),
                  view: je,
                  className: "rank-math-social-tab",
                }),
              Object(i.applyFilters)("rank_math_sidebar_tabs", e)),
            onSelect: Dt,
          },
          function (e) {
            return wp.element.createElement(
              "div",
              { className: "rank-math-tab-content-" + e.name },
              Object(o.createElement)(e.view)
            );
          }
        );
        var e;
      };
    Object(i.addAction)("rank_math_loaded", "rank-math", function () {
      Object(i.addFilter)("rank_math_app", "rank-math", function () {
        return Mt;
      });
    });
  },
]);
