!(function (t) {
  var e = {};
  function a(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
  }
  (a.m = t),
    (a.c = e),
    (a.d = function (t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          a.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = ""),
    a((a.s = 67));
})({
  1: function (t, e) {
    t.exports = lodash;
  },
  14: function (t, e, a) {
    "use strict";
    var n = a(3),
      i = a.n(n);
    e.a = function (t, e, a) {
      return i.a.ajax({
        url: rankMath.ajaxurl,
        type: a || "POST",
        dataType: "json",
        data: i.a.extend(
          !0,
          { action: "rank_math_" + t, security: rankMath.security },
          e
        ),
      });
    };
  },
  18: function (t, e, a) {
    "use strict";
    var n = a(3),
      i = a.n(n);
    e.a = function (t, e, a, n) {
      (e = e || "error"), (n = n || !1);
      var r = i()(
        '<div class="notice notice-' +
          e +
          ' is-dismissible"><p>' +
          t +
          "</p></div>"
      ).hide();
      a.next(".notice").remove(),
        a.after(r),
        r.slideDown(),
        i()(document).trigger("wp-updates-notice-added"),
        n &&
          setTimeout(function () {
            r.fadeOut(function () {
              r.remove();
            });
          }, n);
    };
  },
  3: function (t, e) {
    t.exports = jQuery;
  },
  67: function (t, e, a) {
    "use strict";
    a.r(e);
    var n,
      i = a(3),
      r = a.n(i),
      o = a(1),
      s = a(14),
      c = a(18);
    (n = r.a)(function () {
      (window.rankMathOptions = {
        init: function () {
          this.preview(),
            this.misc(),
            this.scCache(),
            rankMathAdmin.variableInserter(),
            this.searchEngine.init(),
            this.addressFormat(),
            this.siteMap(),
            this.robotsEvents(),
            this.proRedirect(),
            this.contentAI();
        },
        searchEngine: {
          init: function () {
            n("#setting-panel-analytics").addClass("exclude"),
              (this.form = n(".rank-math-search-options")),
              (this.wrap = this.form.closest(".rank-math-wrap-settings")),
              (this.input = this.form.find("input")),
              (this.tabs = this.wrap.find(".rank-math-tabs")),
              (this.panels = this.wrap.find(".rank-math-tab:not(.exclude)")),
              (this.ids = ["general", "titles", "sitemap"]),
              (this.indexes = {}),
              this.buildIndex(),
              this.events();
          },
          events: function () {
            var t = this,
              e = t.tabs.find(">.rank-math-tabs-navigation"),
              a = n('<div class="rank-math-search-dropdown"></div>');
            t.tabs
              .find(">.rank-math-tabs-content")
              .prepend(
                '<div class="rank-math-setting-search-empty hidden">No results found.</div>'
              ),
              t.form.append(a),
              a.hide().empty();
            var i = Object(o.debounce)(function (e) {
              t.wrap.addClass("searching"), t.searchIndexes(e, a);
            }, 300);
            t.form.on("click", ".clear-search", function (a) {
              a.preventDefault(), t.input.val(""), t.clearSearch(e);
            }),
              this.ids.forEach(function (e) {
                a.append(t.indexes[e]);
              }),
              t.input.on("input", function () {
                if ("" === t.input.val()) return t.clearSearch(e, a), !1;
                i(t.input.val().toLowerCase());
              }),
              a.on("click", ".cmb-row", function () {
                var t = n(this),
                  e =
                    window.location.origin +
                    window.location.pathname +
                    "?page=rank-math-options-" +
                    t.data("settings-id") +
                    "#" +
                    t.closest(".dropdown-tab").data("id");
                e === window.location.href
                  ? window.location.reload()
                  : (window.location = e);
              });
            var r = n(
              ".rank-math-search-options, .rank-math-search-options *, .rank-math-search-dropdown, .rank-math-search-dropdown *"
            );
            n("body").on("click", function (t) {
              n(t.target).is(r) || a.hide();
            });
          },
          searchIndexes: function (t, e) {
            if (!(1 > t.trim().length)) {
              e.find(".dropdown-tab").each(function () {
                var t = n(this);
                "setting-panel-analytics" === t.attr("data-id") &&
                  t.css("display", "none");
              });
              var a = e.find(".cmb-row"),
                i = 0;
              a.hide().each(function () {
                var e = n(this);
                e.text().trim().toLowerCase().includes(t) && (e.show(), ++i);
              }),
                e.show(),
                e.toggleClass("empty", 0 === i);
            }
          },
          clearSearch: function (t, e) {
            (e = e || !1),
              this.wrap.removeClass("searching search-no-results"),
              n(">a.active", t).trigger("click"),
              e
                ? e.hide()
                : (n(".cmb-row").show(),
                  n(
                    ".rank-math-cmb-dependency",
                    ".cmb-form, .rank-math-metabox-wrap"
                  ).each(function () {
                    rankMathAdmin.loopDependencies(n(this));
                  }));
          },
          buildIndex: function () {
            var t = window.localStorage.getItem(
                "rank-math-option-search-index"
              ),
              e = void 0 === t || t !== rankMath.version;
            this.ids.forEach(function (t) {
              this.getIndex(t, e),
                (this.indexes[t] = n(
                  window.localStorage.getItem(
                    "rank-math-option-" + t + "-index"
                  )
                ));
            }, this),
              e &&
                window.localStorage.setItem(
                  "rank-math-option-search-index",
                  rankMath.version
                );
          },
          getIndex: function (t, e) {
            e &&
              n("<div/>").load(
                rankMath.adminurl + "?page=rank-math-options-" + t,
                function (e, a) {
                  if ("error" !== a) {
                    var i = n(e).find(".rank-math-tabs-content");
                    i.find(".rank-math-tab").each(function () {
                      var t = n(this);
                      t.removeClass().addClass("dropdown-tab"),
                        t.attr("data-id", t.attr("id")),
                        t.removeAttr("id"),
                        t.find(".rank-math-notice").remove(),
                        t.find(".rank-math-desc").remove();
                    }),
                      i
                        .find(".rank-math-tab")
                        .removeClass()
                        .addClass("dropdown-tab")
                        .removeAttr("id"),
                      i.find(".cmb-row").each(function () {
                        var e = n(this);
                        e.attr("data-settings-id", t),
                          (e.hasClass("cmb-type-title") ||
                            e.hasClass("cmb-type-notice") ||
                            e.hasClass("rank-math-notice") ||
                            e.hasClass("rank-math-desc") ||
                            e.hasClass("rank-math-exclude-from-search")) &&
                            e.remove(),
                          e
                            .find(".cmb-td")
                            .children(":not(.cmb2-metabox-description)")
                            .remove(),
                          e.find("label,.cmb2-metabox-description").unwrap(),
                          e.removeAttr("data-fieldtype");
                      }),
                      (i = i.html().replace(/(\r\n\t|\n|\r\t)/gm, "")),
                      window.localStorage.setItem(
                        "rank-math-option-" + t + "-index",
                        i
                      );
                  }
                }
              );
          },
        },
        scCache: function () {
          n(".console-cache-delete").on("click", function (t) {
            t.preventDefault();
            var e = n(this),
              a = e.data("days"),
              i =
                -1 === a
                  ? rankMath.confirmClearImportedData
                  : rankMath.confirmClear90DaysCache;
            window.confirm(i + " " + rankMath.confirmAction) &&
              (e.prop("disabled", !0),
              Object(s.a)("analytics_delete_cache", { days: a }, "GET")
                .always(function () {
                  e.prop("disabled", !1);
                })
                .done(function (t) {
                  t &&
                    t.success &&
                    (Object(c.a)(
                      rankMath.feedbackCacheDeleted,
                      "success",
                      n("h1", ".rank-math-wrap-settings")
                    ),
                    n(".rank-math-console-db-info").remove(),
                    e.closest(".cmb-td").append(t.message));
                }));
          });
          var t = n("#console_caching_control");
          n(".console-cache-update-manually").on("click", function (e) {
            e.preventDefault();
            var a = n(this),
              i = t.val();
            a.prop("disabled", !0),
              Object(s.a)("analytic_start_fetching", { days: i }, "GET").done(
                function (t) {
                  t && t.success
                    ? (Object(c.a)(t.message, "success", n("h1.page-title")),
                      a.text("Fetching in Progress"),
                      n(".cancel-fetch").prop("disabled", !1))
                    : Object(c.a)(
                        "Unable to update cache due to: " + t.error,
                        "error",
                        n("h1.page-title")
                      );
                }
              );
          }),
            n(".cancel-fetch").on("click", function (t) {
              t.preventDefault(),
                n(this).prop("disabled", !0),
                Object(s.a)("analytic_cancel_fetching", {}, "GET").done(
                  function (t) {
                    t && t.success && window.location.reload();
                  }
                );
            });
        },
        addressFormat: function () {
          var t = n("input[type=text], textarea", ".rank-math-address-format");
          if (t.length) {
            t.attr("autocomplete", "off"),
              t.wrap('<div class="rank-math-variables-wrap"/>');
            var e = n("body"),
              a = t.parent(".rank-math-variables-wrap");
            a.append(
              '<a href="#" class="rank-math-variables-button button button-secondary button-address"><span class="dashicons dashicons-arrow-down-alt2"></span></a>'
            );
            var i = n("<ul/>"),
              r = n('<div class="rank-math-variables-dropdown"></div>');
            n.each(
              {
                "{address} {locality}, {region} {postalcode}":
                  "(New York, NY 12345)",
                "{address} {postalcode}, {locality} {region}":
                  "(New York 12345, NY)",
                "{address} {locality} {postalcode}": "(New York NY 12345)",
                "{postalcode} {region} {locality} {address}":
                  "(12345 NY New York)",
                "{address} {locality}": "(New York NY)",
              },
              function (t, e) {
                i.append(
                  '<li data-var="' + e + '"><strong>' + t + "</strong></li>"
                );
              }
            ),
              r.append(i),
              n("rank-math-variables-wrap:eq(0)").append(r);
            var o = n(
              ".rank-math-variables-button, .rank-math-variables-button *, .rank-math-variables-dropdown, .rank-math-variables-dropdown *"
            );
            e.on("click", function (t) {
              n(t.target).is(o) || r.hide();
            });
            var s = r.find("input"),
              c = r.find("li");
            n(a).on("click", ".rank-math-variables-button", function (t) {
              t.preventDefault(),
                n(this).after(r),
                c.show(),
                r.show(),
                s.val("").focus();
            }),
              r.on("click", "li", function (t) {
                t.preventDefault();
                var e = n(this);
                e.closest(".rank-math-variables-wrap")
                  .find("textarea")
                  .val(e.find("strong").text());
              });
          }
        },
        misc: function () {
          void 0 !== r.a.fn.select2 &&
            n("[data-s2-pages]").select2({
              ajax: {
                url: rankMath.ajaxurl + "?action=rank_math_search_pages",
                data: function (t) {
                  return { term: t.term, security: rankMath.security };
                },
                dataType: "json",
                delay: 250,
              },
              width: "100%",
              minimumInputLength: 2,
            }),
            n("#htaccess_accept_changes").on("change", function () {
              n("#htaccess_content").prop("readonly", !this.checked);
            }),
            n(".reset-options").on("click", function () {
              return (
                !!window.confirm("Are you sure? You want to reset settings.") &&
                (n(window).off("beforeunload"), !0)
              );
            });
          var t = n(".rank-math-tabs");
          setTimeout(function () {
            window.localStorage.removeItem(t.attr("id"));
          }, 1e3),
            n(".save-options").on("click", function () {
              var e = n("> .rank-math-tabs-navigation > a.active", t);
              return (
                window.localStorage.setItem(t.attr("id"), e.attr("href")),
                n(window).off("beforeunload"),
                !0
              );
            });
          var e = !1;
          n(".cmb-form").on(
            "change",
            "input:not(.notrack), textarea:not(.notrack), select:not(.notrack)",
            function () {
              e = !0;
            }
          ),
            n(window).on("beforeunload", function () {
              if (e) return "Are you sure? You didn't finish the form!";
            }),
            n(".custom-sep").on("keyup", function () {
              var t = n(this);
              t.closest("li")
                .find("input.cmb2-option")
                .val(t.text())
                .trigger("change");
            }),
            n(".cmb-form").on("keydown", "input", function (t) {
              "Enter" === t.key && t.preventDefault();
            });
        },
        preview: function () {
          n("[data-preview]")
            .on("change", function () {
              var t = n(this),
                e = null,
                a = "";
              if ((t.is(":radio") && (e = t.closest(".cmb-td")), null !== e))
                if (e.hasClass("done"))
                  t.is(":checked") &&
                    (a = e.find("h5")).text(a.data("title").format(t.val()));
                else if ((e.addClass("done"), "title" === t.data("preview"))) {
                  var i = "";
                  (i +=
                    '<div class="rank-math-preview-title" data-title="Preview"><div>'),
                    (i +=
                      '<h5 data-title="' +
                      rankMath.postTitle +
                      " {0} " +
                      rankMath.blogName +
                      '"></h5>'),
                    (i += "<span>" + rankMath.postUri + "</span>"),
                    (i += "</div></div>"),
                    e.append(i),
                    (a = e.find("h5")).text(a.data("title").format(t.val()));
                }
            })
            .trigger("change");
        },
        siteMap: function () {
          var t = n(".sitemap-nginx-notice");
          t.length &&
            (t.on("click", "a span", function (e) {
              return e.preventDefault(), t.toggleClass("active"), !1;
            }),
            t.on("click", "a.sitemap-close-notice", function (e) {
              return (
                e.preventDefault(),
                Object(s.a)("remove_nginx_notice", {}, "GET").done(function () {
                  t.remove();
                }),
                !1
              );
            }));
        },
        robotsEvents: function () {
          n(".rank-math-robots-data").each(function () {
            var t = n(this).find("ul li:first-child input"),
              e = n(this).find("ul li:nth-child(2) input");
            t.on("change", function () {
              t.is(":checked") && e.prop("checked", !1).trigger("change");
            }),
              e.on("change", function () {
                e.is(":checked") && t.prop("checked", !1);
              });
          });
        },
        proRedirect: function () {
          n(".cmb-redirector-element").on("click", function (t) {
            var e = n(t.target);
            if (e.is("a") || e.closest("a").length) return !0;
            var a = n(this),
              i = a.data("url");
            if (!i) return !0;
            t.preventDefault(), a.css("cursor", "pointer"), window.open(i);
          });
        },
        contentAI: function () {
          var t = n(".buy-more-credits .update-credit");
          t.length &&
            t.on("click", function (e) {
              return (
                e.preventDefault(),
                t.addClass("loading"),
                Object(s.a)("get_content_ai_credits").done(function (e) {
                  e.error
                    ? alert(e.error)
                    : t.removeClass("loading").next("strong").text(e.credits);
                }),
                !1
              );
            });
        },
      }),
        window.rankMathOptions.init();
    });
  },
});
