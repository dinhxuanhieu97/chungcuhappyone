!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
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
    n((n.s = 67));
})({
  2: function (e, t) {
    e.exports = jQuery;
  },
  5: function (e, t) {
    e.exports = wp.i18n;
  },
  67: function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(2),
      o = n.n(i),
      r = n(5),
      s = n(7),
      a = n(9),
      d = n.n(a),
      l = ["type", "isDismissible", "children"];
    function c() {
      return (
        (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
        c.apply(this, arguments)
      );
    }
    function u(e, t) {
      if (null == e) return {};
      var n,
        i,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            i,
            o = {},
            r = Object.keys(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (i = 0; i < r.length; i++)
          (n = r[i]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    var p = function (e) {
      var t = e.type,
        n = void 0 === t ? "info" : t,
        i = e.isDismissible,
        o = void 0 !== i && i,
        r = e.children,
        s = u(e, l),
        a = d()("notice", "notice-" + n, { "is-dismissible": o });
      return wp.element.createElement("div", c({ className: a }, s), r);
    };
    function _(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var f = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          this.cacheDom(),
          this.renderSeoSettingsNotice(),
          this.disableDiviSeoInputs();
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "cacheDom",
            value: function () {
              (this.$etSeoSettingsArea = o()("#wrap-seo")),
                (this.$etDisabledTextInputs = o()("#divi_seo_home_titletext")
                  .add("#divi_seo_home_descriptiontext")
                  .add("#divi_seo_home_keywordstext")
                  .add("#divi_seo_home_separate")
                  .add("#divi_seo_single_field_title")
                  .add("#divi_seo_single_field_description")
                  .add("#divi_seo_single_field_keywords")
                  .add("#divi_seo_single_separate")
                  .add("#divi_seo_index_separate")),
                (this.$etDisabledSelectInputs = o()("#divi_seo_home_type")
                  .add("#divi_seo_single_type")
                  .add("#divi_seo_index_type")),
                (this.$etDisabledToggleInputs = o()("#divi_seo_home_title")
                  .add("#divi_seo_home_description")
                  .add("#divi_seo_home_keywords")
                  .add("#divi_seo_home_canonical")
                  .add("#divi_seo_single_title")
                  .add("#divi_seo_single_description")
                  .add("#divi_seo_single_keywords")
                  .add("#divi_seo_single_canonical")
                  .add("#divi_seo_index_canonical")
                  .add("#divi_seo_index_description"));
            },
          },
          {
            key: "renderSeoSettingsNotice",
            value: function () {
              var e = "rank-math-divi-seo-admin-notice-container";
              this.$etSeoSettingsArea
                .find(".et-tab-content")
                .prepend(o()('<div id="'.concat(e, '" />'))),
                document.querySelectorAll("#" + e).forEach(function (e) {
                  Object(s.render)(this.getAdminNotice(), e);
                }, this);
            },
          },
          {
            key: "disableDiviSeoInputs",
            value: function () {
              this.$etDisabledTextInputs
                .attr("readonly", !0)
                .css({ cursor: "not-allowed" }),
                this.$etDisabledSelectInputs
                  .css({ cursor: "not-allowed" })
                  .find("option")
                  .attr("disabled", !0),
                this.$etDisabledToggleInputs
                  .attr("disabled", !0)
                  .find("+ .et_pb_yes_no_button")
                  .css({ cursor: "not-allowed" })
                  .on("mousedown keydown", function () {
                    var e = o()(this);
                    e.is(".et_pb_on_state")
                      ? e
                          .removeClass("et_pb_on_state")
                          .addClass("et_pb_off_state")
                      : e.is(".et_pb_off_state") &&
                        e
                          .addClass("et_pb_on_state")
                          .removeClass("et_pb_off_state");
                  });
            },
          },
          {
            key: "getAdminNotice",
            value: function () {
              return wp.element.createElement(
                p,
                {
                  style: {
                    margin: "0",
                    marginBottom: "30px",
                    padding: "12px",
                    borderTopColor: "#e4e4e5",
                    borderRightColor: "#e4e4e5",
                    borderBottomColor: "#e4e4e5",
                  },
                },
                wp.element.createElement(
                  "p",
                  null,
                  Object(s.createInterpolateElement)(
                    Object(r.__)(
                      "The below options are handled via the Rank Math SEO <settings_page_link/>.",
                      "rank-math"
                    ),
                    {
                      settings_page_link: wp.element.createElement(
                        "a",
                        {
                          href: "/wp-admin/admin.php?page=rank-math-options-titles",
                        },
                        Object(r.__)("settings page", "rank-math")
                      ),
                    }
                  )
                )
              );
            },
          },
        ]) && _(t.prototype, n),
        i && _(t, i),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    o()(function () {
      new f();
    });
  },
  7: function (e, t) {
    e.exports = wp.element;
  },
  9: function (e, t, n) {
    var i;
    !(function () {
      "use strict";
      var n = {}.hasOwnProperty;
      function o() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var i = arguments[t];
          if (i) {
            var r = typeof i;
            if ("string" === r || "number" === r) e.push(i);
            else if (Array.isArray(i)) {
              if (i.length) {
                var s = o.apply(null, i);
                s && e.push(s);
              }
            } else if ("object" === r)
              if (i.toString === Object.prototype.toString)
                for (var a in i) n.call(i, a) && i[a] && e.push(a);
              else e.push(i.toString());
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((o.default = o), (e.exports = o))
        : void 0 ===
            (i = function () {
              return o;
            }.apply(t, [])) || (e.exports = i);
    })();
  },
});
