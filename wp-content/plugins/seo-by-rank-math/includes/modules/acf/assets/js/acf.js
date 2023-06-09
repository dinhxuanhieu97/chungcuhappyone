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
    n((n.s = 3));
})([
  function (e, t) {
    e.exports = lodash;
  },
  function (e, t) {
    e.exports = jQuery;
  },
  function (e, t) {
    e.exports = wp.hooks;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1),
      a = n.n(r),
      i = n(0),
      c = function (e) {
        var t = (function (e) {
          var t = Object(i.find)(rankMath.acf.headlines, function (t, n) {
            return e.key === n;
          });
          return t && (t = parseInt(t, 10)), (t < 1 || t > 6) && (t = !1), t;
        })(e);
        return (
          (e.content = t
            ? "<h" + t + ">" + e.content + "</h" + t + ">"
            : "<p>" + e.content + "</p>"),
          e
        );
      },
      o = function (e) {
        var t = e.$el.find("textarea")[0],
          n = t.id,
          r = t.value;
        return (
          (function (e) {
            return (
              "undefined" != typeof tinyMCE &&
              void 0 !== tinyMCE.editors &&
              0 !== tinyMCE.editors.length &&
              null !== tinyMCE.get(e) &&
              !tinyMCE.get(e).isHidden()
            );
          })(n) && (r = (tinyMCE.get(n) && tinyMCE.get(n).getContent()) || ""),
          r
        );
      };
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var l = new ((function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.cache = {});
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "refresh",
            value: function (e) {
              var t = this,
                n = this.getUncached(e);
              0 !== n.length &&
                window.wp.ajax
                  .post("query-attachments", { query: { post__in: n } })
                  .done(function (e) {
                    Object(i.each)(e, function (e) {
                      t.setCache(e.id, e), window.RankMathACFAnalysis.refresh();
                    });
                  });
            },
          },
          {
            key: "get",
            value: function (e) {
              var t = this.getCache(e);
              if (!t) return !1;
              var n = window.wp.media.attachment(e);
              return (
                n.has("alt") && (t.alt = n.get("alt")),
                n.has("title") && (t.title = n.get("title")),
                t
              );
            },
          },
          {
            key: "getAttachmentContent",
            value: function (e) {
              var t = "";
              if (l.get(e, "attachment")) {
                var n = l.get(e, "attachment");
                t +=
                  '<img src="' +
                  n.url +
                  '" alt="' +
                  n.alt +
                  '" title="' +
                  n.title +
                  '">';
              }
              return t;
            },
          },
          {
            key: "setCache",
            value: function (e, t) {
              this.cache[e] = t;
            },
          },
          {
            key: "getCache",
            value: function (e) {
              return e in this.cache && this.cache[e];
            },
          },
          {
            key: "getUncached",
            value: function (e) {
              var t = this;
              return (e = Object(i.uniq)(e)).filter(function (e) {
                return !1 === t.get(e);
              });
            },
          },
        ]) && u(t.prototype, n),
        r && u(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })())();
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var p = {
        text: function (e) {
          return (e = Object(i.map)(e, function (e) {
            return "text" !== e.type
              ? e
              : ((e.content = e.$el.find("input[type=text][id^=acf]").val()),
                (e = c(e)));
          }));
        },
        textarea: function (e) {
          return (e = Object(i.map)(e, function (e) {
            return (
              "textarea" !== e.type ||
                (e.content =
                  "<p>" + e.$el.find("textarea[id^=acf]").val() + "</p>"),
              e
            );
          }));
        },
        email: function (e) {
          return (e = Object(i.map)(e, function (e) {
            return (
              "email" !== e.type ||
                (e.content = e.$el.find("input[type=email][id^=acf]").val()),
              e
            );
          }));
        },
        url: function (e) {
          return (e = Object(i.map)(e, function (e) {
            if ("url" !== e.type) return e;
            var t = e.$el.find("input[type=url][id^=acf]").val();
            return (
              (e.content = t ? '<a href="' + t + '">' + t + "</a>" : ""), e
            );
          }));
        },
        link: function (e) {
          return Object(i.map)(e, function (e) {
            if ("link" !== e.type) return e;
            var t = e.$el.find("input[type=hidden].input-title").val(),
              n = e.$el.find("input[type=hidden].input-url").val(),
              r = e.$el.find("input[type=hidden].input-target").val();
            return (
              (e.content =
                '<a href="' + n + '" target="' + r + '">' + t + "</a>"),
              e
            );
          });
        },
        wysiwyg: function (e) {
          return (e = Object(i.map)(e, function (e) {
            return "wysiwyg" !== e.type || (e.content = o(e)), e;
          }));
        },
        image: function (e) {
          var t = [];
          return (
            (e = Object(i.map)(e, function (e) {
              if ("image" !== e.type) return e;
              e.content = "";
              var n = e.$el.find("input[type=hidden]").val();
              return t.push(n), (e.content += l.getAttachmentContent(n)), e;
            })),
            l.refresh(t),
            e
          );
        },
        gallery: function (e) {
          var t = [];
          return (
            (e = Object(i.map)(e, function (e) {
              return (
                "gallery" !== e.type ||
                  ((e.content = ""),
                  e.$el
                    .find(".acf-gallery-attachment input[type=hidden]")
                    .each(function () {
                      var n = a()(this).val();
                      t.push(n), (e.content += l.getAttachmentContent(n));
                    })),
                e
              );
            })),
            l.refresh(t),
            e
          );
        },
        taxonomy: function (e) {
          return (e = Object(i.map)(e, function (e) {
            if ("taxonomy" !== e.type) return e;
            var t = [];
            if (
              e.$el.find('.acf-taxonomy-field[data-type="multi_select"]')
                .length > 0
            ) {
              var n = acf.select2.version >= 4 ? "select" : "input";
              t = Object(i.map)(
                e.$el
                  .find('.acf-taxonomy-field[data-type="multi_select"] ' + n)
                  .select2("data"),
                "text"
              );
            } else e.$el.find('.acf-taxonomy-field[data-type="checkbox"]').length > 0 ? (t = Object(i.map)(e.$el.find('.acf-taxonomy-field[data-type="checkbox"] input[type="checkbox"]:checked').next(), "textContent")) : e.$el.find("input[type=checkbox]:checked").length > 0 ? (t = Object(i.map)(e.$el.find("input[type=checkbox]:checked").parent(), "textContent")) : e.$el.find("select option:checked").length > 0 && (t = Object(i.map)(e.$el.find("select option:checked"), "textContent"));
            return (
              (t = Object(i.map)(t, function (e) {
                return e.trim();
              })).length > 0 &&
                (e.content =
                  "<ul>\n<li>" + t.join("</li>\n<li>") + "</li>\n</ul>"),
              e
            );
          }));
        },
      },
      h = new ((function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "getFieldContent",
              value: function () {
                var e = this.excludeNames(this.excludeTypes(this.getData())),
                  t = Object(i.uniq)(Object(i.map)(e, "type"));
                return (
                  a.a.each(t, function (t, n) {
                    n in p && (e = p[n](e));
                  }),
                  e
                );
              },
            },
            {
              key: "append",
              value: function (e) {
                var t = this.getFieldContent();
                return (
                  Object(i.each)(t, function (t) {
                    void 0 !== t.content &&
                      "" !== t.content &&
                      (e += "\n" + t.content);
                  }),
                  e
                );
              },
            },
            {
              key: "getData",
              value: function () {
                var e = ["flexible_content", "repeater", "group"],
                  t = [],
                  n = [],
                  r = Object(i.map)(acf.get_fields(), function (r) {
                    var i = a.a.extend(!0, {}, acf.get_data(a()(r)));
                    return (
                      (i.$el = a()(r)),
                      (i.post_meta_key = i.name),
                      -1 === e.indexOf(i.type) ? t.push(i) : n.push(i),
                      i
                    );
                  });
                return (
                  0 === n.length ||
                    Object(i.each)(t, function (e) {
                      Object(i.each)(n, function (t) {
                        a.a.contains(t.$el[0], e.$el[0]) &&
                          (("flexible_content" !== t.type &&
                            "repeater" !== t.type) ||
                            ((t.children = t.children || []),
                            t.children.push(e),
                            (e.parent = t),
                            (e.post_meta_key =
                              t.name +
                              "_" +
                              (t.children.length - 1) +
                              "_" +
                              e.name)),
                          "group" === t.type &&
                            ((t.children = [e]),
                            (e.parent = t),
                            (e.post_meta_key = t.name + "_" + e.name)));
                      });
                    }),
                  r
                );
              },
            },
            {
              key: "excludeTypes",
              value: function (e) {
                return Object(i.filter)(e, function (e) {
                  return !Object(i.includes)(
                    rankMath.acf.blacklistTypes,
                    e.type
                  );
                });
              },
            },
            {
              key: "excludeNames",
              value: function (e) {
                return Object(i.filter)(e, function (e) {
                  return !Object(i.includes)(rankMath.acf.names, e.name);
                });
              },
            },
          ]) && f(t.prototype, n),
          r && f(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })())(),
      d = n(2);
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var y = (function () {
      function e() {
        var t = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.analysisTimeout = 0),
          (this.maybeRefresh = this.maybeRefresh.bind(this)),
          (this.refresh = Object(i.debounce)(
            this.maybeRefresh,
            rankMath.acf.refreshRate
          )),
          Object(d.addFilter)(
            "rank_math_content",
            "rank-math",
            h.append.bind(h),
            11
          ),
          a()(".acf-field").on("change", function () {
            t.refresh();
          });
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "maybeRefresh",
            value: function () {
              rankMathEditor.refresh("content");
            },
          },
        ]) && s(t.prototype, n),
        r && s(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    window.RankMathACFAnalysis = new y();
  },
]);
