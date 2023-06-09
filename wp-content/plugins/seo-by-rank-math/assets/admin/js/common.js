!(function (e) {
  var t = {};
  function a(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
  }
  (a.m = e),
    (a.c = t),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 79));
})({
  0: function (e, t) {
    e.exports = wp.i18n;
  },
  1: function (e, t) {
    e.exports = lodash;
  },
  14: function (e, t, a) {
    "use strict";
    var n = a(3),
      i = a.n(n);
    t.a = function (e, t, a) {
      return i.a.ajax({
        url: rankMath.ajaxurl,
        type: a || "POST",
        dataType: "json",
        data: i.a.extend(
          !0,
          { action: "rank_math_" + e, security: rankMath.security },
          t
        ),
      });
    };
  },
  18: function (e, t, a) {
    "use strict";
    var n = a(3),
      i = a.n(n);
    t.a = function (e, t, a, n) {
      (t = t || "error"), (n = n || !1);
      var r = i()(
        '<div class="notice notice-' +
          t +
          ' is-dismissible"><p>' +
          e +
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
  3: function (e, t) {
    e.exports = jQuery;
  },
  33: function (e, t, a) {
    "use strict";
    var n = a(3),
      i = a.n(n);
    t.a = function (e) {
      var t = e || ".rank-math-box-tabs";
      i()(t)
        .children()
        .on("click", function (e) {
          e.preventDefault();
          var t = i()(this),
            a = t.attr("href").substr(1);
          t.addClass("active-tab").siblings().removeClass("active-tab"),
            i()("#" + a)
              .addClass("active-tab")
              .siblings()
              .removeClass("active-tab");
        });
    };
  },
  79: function (e, t, a) {
    "use strict";
    a.r(t);
    var n = a(3),
      i = a.n(n),
      r = a(0),
      o = a(14),
      c = a(18),
      s = a(1);
    function l(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var p,
      d = new ((function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.response = "");
        }
        var t, a, n;
        return (
          (t = e),
          (a = [
            {
              key: "checkAll",
              value: function () {
                var e = this,
                  t = i()(
                    "#setting-panel-analytics .cmb2-id-check-all-services:not(.done), #cmb2-metabox-rank-math-wizard .cmb2-id-check-all-services:not(.done)"
                  );
                t.length > 0 &&
                  "0" === t.val() &&
                  (t.addClass("done"),
                  Object(o.a)("google_check_all_services").done(function (t) {
                    (e.response = t),
                      e.fillSelect(),
                      e.accordions.removeClass("locked");
                  }));
              },
            },
            {
              key: "events",
              value: function () {
                var e = this;
                (this.saveChanges = !1),
                  (this.accountSelect = i()(".site-analytics-account")),
                  (this.profileSelect = i()(".site-console-profile")),
                  (this.propertySelect = i()(".site-analytics-property")),
                  (this.viewSelect = i()(".site-analytics-view")),
                  (this.adsenseSelect = i()(".site-adsense-account")),
                  (this.accordions = i()(".rank-math-accordion")),
                  (this.countryConsole = i()("#site-console-country")),
                  (this.countryAnalytics = i()("#site-analytics-country")),
                  i()(".cmb2_select").on("select2:open", function () {
                    document.querySelector(".select2-search__field").focus();
                  }),
                  this.accountSelect.on("change", function () {
                    var t = parseInt(e.accountSelect.val());
                    0 !== t
                      ? e.fillPropertySelect(t)
                      : e.propertySelect.html(
                          '<option value="0">Select Property</option>'
                        );
                  }),
                  this.profileSelect.on("change", function () {
                    0 !== parseInt(e.profileSelect.val()) &&
                      document
                        .getElementById("enable-index-status")
                        .removeAttribute("disabled");
                  }),
                  i()(
                    [
                      ".rank-math-wizard-body--analytics .form-footer.rank-math-ui .button-primary",
                      ".rank-math_page_rank-math-options-general .form-footer.rank-math-ui .button-primary",
                    ].join(", ")
                  ).on("click", function (t) {
                    e.submitButtonHandler(t);
                  }),
                  this.propertySelect.on("change", function () {
                    "create-ga4-property" !== e.propertySelect.val()
                      ? ((e.response.type = Object(s.get)(
                          e.response.accounts,
                          [
                            e.accountSelect.val(),
                            "properties",
                            e.propertySelect.val(),
                            "type",
                          ],
                          {}
                        )),
                        "GA4" !== e.response.type &&
                          ((e.response.type = "GA3"),
                          (e.response.views = Object(s.get)(
                            e.response.accounts,
                            [
                              e.accountSelect.val(),
                              "properties",
                              e.propertySelect.val(),
                              "profiles",
                            ],
                            {}
                          ))),
                        "GA4" === e.response.type
                          ? e.createNewDataStream()
                          : e.fillViewSelect())
                      : e.createNewProperty();
                  }),
                  this.viewSelect.on("change", function (e) {
                    var t = i()(e.target).find(":selected");
                    t.data("measurement-id") &&
                      (i()("#rank-math-analytics-measurement-id").val(
                        t.data("measurement-id")
                      ),
                      i()("#rank-math-analytics-stream-name").val(t.text()));
                  }),
                  i()(".rank-math-disconnect-google").on("click", function (e) {
                    e.preventDefault(),
                      confirm(rankMath.confirmDisconnect) &&
                        Object(o.a)("disconnect_google").done(function () {
                          window.location.reload();
                        });
                  });
              },
            },
            {
              key: "createNewProperty",
              value: function () {
                var e = this;
                confirm(
                  Object(r.__)(
                    "Are you sure, you want to create a new GA4 Property?",
                    "rank-math"
                  )
                )
                  ? Object(o.a)(
                      "create_ga4_property",
                      { accountID: this.accountSelect.val() },
                      "post"
                    ).done(function (t) {
                      if (t.error)
                        return (
                          e.propertySelect.val(
                            e.propertySelect.find("option:first").val()
                          ),
                          void alert(t.error)
                        );
                      e.propertySelect.append(
                        '<option value="' + t.id + '">' + t.name + "</option>"
                      ),
                        e.propertySelect.val(t.id),
                        e.createNewDataStream(),
                        (e.response.type = "GA4");
                    })
                  : this.propertySelect.val(
                      this.propertySelect.find("option:first").val()
                    );
              },
            },
            {
              key: "createNewDataStream",
              value: function () {
                var e = this;
                this.viewSelect.html(""),
                  this.viewSelect.prop("disabled", !0),
                  Object(o.a)(
                    "get_ga4_data_streams",
                    { propertyID: this.propertySelect.val() },
                    "post"
                  ).done(function (t) {
                    t.error
                      ? console.error(t.error)
                      : ((e.response.views = t.streams),
                        e.fillViewSelect(),
                        e.viewSelect.trigger("change"));
                  });
              },
            },
            {
              key: "submitButtonHandler",
              value: function (e) {
                var t = i()(e.target);
                e.preventDefault(),
                  this.saveConsole(),
                  this.saveAnalytics(),
                  this.saveAdsense(),
                  setTimeout(function () {
                    t.off("click").trigger("click");
                  }, 100);
              },
            },
            {
              key: "saveConsole",
              value: function () {
                if (0 !== parseInt(this.profileSelect.val())) {
                  var e = {
                      profile: this.profileSelect.val(),
                      country: this.countryConsole.val(),
                      enableIndexStatus: i()("#enable-index-status").is(
                        ":checked"
                      ),
                    },
                    t = i()("#console_caching_control");
                  t.length > 0 && (e.days = t.val()),
                    Object(o.a)("save_analytic_profile", e, "post");
                }
              },
            },
            {
              key: "saveAnalytics",
              value: function () {
                var e = {
                  accountID: this.accountSelect.val(),
                  propertyID: this.propertySelect.val(),
                  viewID: this.viewSelect.val(),
                  country: this.countryAnalytics.val(),
                  installCode: i()("#install-code").is(":checked"),
                  anonymizeIP: i()("#anonymize-ip").is(":checked"),
                  localGAJS: i()("#local-ga-js").is(":checked"),
                  excludeLoggedin: i()("#exclude-loggedin").is(":checked"),
                  measurementID: i()(
                    "#rank-math-analytics-measurement-id"
                  ).val(),
                  streamName: i()("#rank-math-analytics-stream-name").val(),
                };
                if (
                  0 !== parseInt(e.accountID) &&
                  0 !== parseInt(e.propertyID)
                ) {
                  var t = i()("#console_caching_control");
                  t.length > 0 && (e.days = t.val()),
                    Object(o.a)("save_analytic_options", e, "post");
                }
              },
            },
            {
              key: "saveAdsense",
              value: function () {
                var e = { accountID: this.adsenseSelect.val() };
                e.accountID && Object(o.a)("save_adsense_account", e, "post");
              },
            },
            {
              key: "fillSelect",
              value: function () {
                var e = this,
                  t = this.response,
                  a = t.inSearchConsole,
                  n = t.isVerified;
                this.fillProfileSelect(),
                  this.fillAccountSelect(),
                  this.fillAdsenseSelect(),
                  a ||
                    Object(o.a)("add_site_console").done(function (t) {
                      (e.response.sites = t.sites), e.fillProfileSelect();
                    }),
                  a && !n && Object(o.a)("verify_site_console"),
                  (this.saveChanges = !1);
              },
            },
            {
              key: "fillAdsenseSelect",
              value: function () {
                var e = this,
                  t = this.response.adsenseAccounts,
                  a = void 0 !== t && t;
                !1 !== a &&
                  (Object(s.map)(a, function (t, a) {
                    e.adsenseSelect.append(
                      '<option value="' + a + '">' + t.name + "</option>"
                    );
                  }),
                  this.adsenseSelect.data("selected") &&
                    this.adsenseSelect.val(this.adsenseSelect.data("selected")),
                  this.adsenseSelect.prop("disabled", !1),
                  this.adsenseSelect.select2());
              },
            },
            {
              key: "fillAccountSelect",
              value: function () {
                var e = this,
                  t = this.response.accounts;
                Object(s.map)(t, function (t, a) {
                  e.accountSelect.append(
                    '<option value="' + a + '">' + t.name + "</option>"
                  );
                }),
                  this.accountSelect.data("selected")
                    ? this.accountSelect.val(
                        this.accountSelect.data("selected")
                      )
                    : (this.accountSelect.prop("disabled", !1),
                      this.countryAnalytics.prop("disabled", !1),
                      this.accountSelect.select2(),
                      this.countryAnalytics.select2()),
                  this.accountSelect.trigger("change");
              },
            },
            {
              key: "fillPropertySelect",
              value: function (e) {
                var t = this,
                  a = this.response,
                  n = a.accounts,
                  i = a.homeUrl,
                  o = n[e].properties;
                this.propertySelect.html(
                  '<option value="0">Select Property</option>'
                ),
                  this.propertySelect.append(
                    '<option value="create-ga4-property">' +
                      Object(r.__)("Create new GA4 Property", "rank-math") +
                      "</option>"
                  ),
                  Object(s.map)(o, function (e) {
                    var a = e.url === i ? ' selected="selected"' : "";
                    t.propertySelect.append(
                      "<option" +
                        a +
                        ' value="' +
                        e.id +
                        '">' +
                        e.name +
                        "</option>"
                    );
                  }),
                  this.propertySelect.data("selected")
                    ? this.propertySelect.val(
                        this.propertySelect.data("selected")
                      )
                    : (this.propertySelect.prop("disabled", !1),
                      this.propertySelect.select2()),
                  this.propertySelect.trigger("change");
              },
            },
            {
              key: "fillProfileSelect",
              value: function () {
                var e = this,
                  t = this.response,
                  a = t.sites,
                  n = t.homeUrl,
                  i = !1;
                Object(s.map)(a, function (t, a) {
                  (i = a === n ? ' selected="selected"' : ""),
                    e.profileSelect.append(
                      "<option" + i + ' value="' + a + '">' + t + "</option>"
                    );
                }),
                  this.profileSelect.data("selected") &&
                    this.profileSelect
                      .closest(".rank-math-accordion")
                      .addClass("connected"),
                  this.profileSelect.prop("disabled", !1),
                  this.countryConsole.prop("disabled", !1),
                  this.profileSelect.select2(),
                  this.countryConsole.select2();
              },
            },
            {
              key: "fillViewSelect",
              value: function () {
                var e = this,
                  t = this.response,
                  a = t.views,
                  n =
                    "GA4" === t.type
                      ? Object(r.__)("Data Stream", "rank-math")
                      : Object(r.__)("View", "rank-math");
                this.viewSelect.prev("label").text(n),
                  Object(s.map)(a, function (t) {
                    var a = Object(s.isUndefined)(t.measurementId)
                      ? ""
                      : t.measurementId;
                    e.viewSelect.append(
                      '<option value="' +
                        t.id +
                        '" data-measurement-id="' +
                        a +
                        '">' +
                        t.name +
                        "</option>"
                    );
                  }),
                  this.viewSelect.data("selected") &&
                    this.viewSelect.val(this.viewSelect.data("selected")),
                  this.viewSelect.prop("disabled", !1),
                  this.viewSelect.select2();
              },
            },
          ]) && l(t.prototype, a),
          n && l(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })())(),
      u = a(33);
    (p = i.a),
      String.prototype.format ||
        (String.prototype.format = function () {
          var e = arguments;
          return this.replace(/{(\d+)}/g, function (t, a) {
            return void 0 !== e[a] ? e[a] : t;
          });
        }),
      (String.prototype.trimRight = function (e) {
        return (
          void 0 === e && (e = "s"),
          this.replace(new RegExp("[" + e + "]+$"), "")
        );
      }),
      p(function () {
        (window.rankMathAdmin = {
          init: function () {
            this.misc(),
              this.tabs(),
              this.dependencyManager(),
              -1 !==
                Object.values(window.rankMath.modules).indexOf("analytics") &&
                (d.events(), d.checkAll());
          },
          misc: function () {
            void 0 !== i.a.fn.select2 && p("[data-s2]").select2(),
              p(".cmb-group-text-only,.cmb-group-fix-me").each(function () {
                var e = p(this),
                  t = e.find(".cmb-repeatable-group"),
                  a = t.find("> .cmb-row:eq(0) > .cmb-th");
                e.prepend(
                  '<div class="cmb-th"><label>' +
                    a.find("h2").text() +
                    "</label></div>"
                ),
                  t
                    .find(".cmb-add-row")
                    .append(
                      '<span class="cmb2-metabox-description">' +
                        a.find("p").text() +
                        "</span>"
                    ),
                  a.parent().remove();
              }),
              p(".rank-math-collapsible-trigger").on("click", function (e) {
                e.preventDefault();
                var t = p(this),
                  a = p("#" + t.data("target"));
                t.toggleClass("open"), a.toggleClass("open");
              });
            var e = p("#rank_math_rich_snippet"),
              t = e.find("option[value=review]"),
              a = e.val();
            t &&
              (t.prop("disabled", !0),
              "review" === a &&
                p(".cmb2-id-rank-math-review-schema-notice").removeClass(
                  "hidden"
                ),
              e.on("change", function () {
                null !== e.val() &&
                  "review" !== e.val() &&
                  p(".cmb2-id-rank-math-review-schema-notice").addClass(
                    "hidden"
                  );
              }));
          },
          searchConsole1: function () {
            var e = p(".cmb2-id-console-authorization-code"),
              t = p("#console_authorization_code"),
              a = p("#gsc-dp-info"),
              n = p("#console_profile"),
              i = n.parent().find(".rank-math-refresh"),
              s = t.parent(),
              l = p("body").hasClass("rank-math-wizard-body--analytics")
                ? p("> p:first-of-type", ".cmb-form")
                : p("h1", ".rank-math-wrap-settings");
            s.on("click", ".rank-math-deauthorize-account", function (a) {
              a.preventDefault();
              var s = p(this);
              if ((s.prop("disabled", !0), t.data("authorized")))
                return (
                  Object(o.a)("search_console_deauthentication")
                    .always(function () {
                      s.prop("disabled", !1);
                    })
                    .done(function () {
                      t.val(""),
                        t.show(),
                        t.data("authorized", !1),
                        e.removeClass("authorized").addClass("unauthorized"),
                        s.html(Object(r.__)("Authorize", "rank-math")),
                        n.prop("disabled", !0),
                        i.prop("disabled", !0);
                    }),
                  !1
                );
              t.addClass("input-loading"),
                Object(o.a)("search_console_authentication", { code: t.val() })
                  .always(function () {
                    s.prop("disabled", !1), t.removeClass("input-loading");
                  })
                  .done(function (a) {
                    a && !a.success && Object(c.a)(a.error, "error", l),
                      a &&
                        a.success &&
                        (t.hide(),
                        t.data("authorized", !0),
                        s.html("De-authorize Account"),
                        i.trigger("click"),
                        n.removeAttr("disabled"),
                        e
                          .removeClass("unauthorized authorizing")
                          .addClass("authorized"));
                  });
            }),
              n
                .on("change", function () {
                  null !== n.val() && 0 === n.val().indexOf("sc-domain:")
                    ? a.removeClass("hidden")
                    : a.addClass("hidden");
                })
                .change(),
              i.on("click", function (e) {
                e.preventDefault(),
                  i.prop("disabled", !0),
                  n.addClass("input-loading"),
                  Object(o.a)("search_console_get_profiles")
                    .always(function () {
                      i.prop("disabled", !1),
                        p(".console-cache-update-manually").prop(
                          "disabled",
                          !1
                        ),
                        n.removeClass("input-loading");
                    })
                    .done(function (e) {
                      if (
                        (e && !e.success && Object(c.a)(e.error, "error", l),
                        e && e.success)
                      ) {
                        var t = e.selected || n.val();
                        n.html(""),
                          p.each(e.profiles, function (e, t) {
                            n.append(
                              '<option value="' + e + '">' + t + "</option>"
                            );
                          }),
                          n.val(t || Object.keys(e.profiles)[0]),
                          i.removeClass("hidden");
                      }
                    });
              });
          },
          dependencyManager: function () {
            var e = this,
              t = p(".cmb-form, .rank-math-metabox-wrap");
            p(".cmb-repeat-group-wrap", t).each(function () {
              var e = p(this),
                t = e.next(".rank-math-cmb-dependency.hidden");
              t.length && e.find("> .cmb-td").append(t);
            }),
              p(".rank-math-cmb-dependency", t).each(function () {
                e.loopDependencies(p(this));
              }),
              p("input, select", t).on("change", function () {
                var t = p(this).attr("name");
                p('span[data-field="' + t + '"]').each(function () {
                  e.loopDependencies(
                    p(this).closest(".rank-math-cmb-dependency")
                  );
                });
              });
          },
          checkDependency: function (e, t, a) {
            return "string" == typeof t && t.includes(",") && "=" === a
              ? t.includes(e)
              : "string" == typeof t && t.includes(",") && "!=" === a
              ? !t.includes(e)
              : ("=" === a && e === t) ||
                ("==" === a && e === t) ||
                (">=" === a && e >= t) ||
                ("<=" === a && e <= t) ||
                (">" === a && e > t) ||
                ("<" === a && e < t) ||
                ("!=" === a && e !== t);
          },
          loopDependencies: function (e) {
            var t = this,
              a = e.data("relation"),
              n = null;
            e.find("span").each(function () {
              var e = p(this),
                i = p("[name='" + e.data("field") + "']"),
                r = i.val();
              i.is(":radio") && (r = i.filter(":checked").val()),
                i.is(":checkbox") && (r = i.filter(":checked").val());
              var o = t.checkDependency(
                r,
                e.data("value"),
                e.data("comparison")
              );
              if ("or" === a && o) return (n = !0), !1;
              "and" === a && (n = (null === n || n) && o);
            });
            var i = e.closest(".rank-math-cmb-group");
            i.length || (i = e.closest(".cmb-row")),
              n ? i.slideDown(300) : i.hide();
          },
          tabs: function () {
            Object(u.a)();
            var e = p(".rank-math-tabs-navigation");
            e.length &&
              e.each(function () {
                var t = p(this),
                  a = t.closest(".rank-math-tabs"),
                  n = p(">a", t),
                  i = p(">.rank-math-tabs-content>.rank-math-tab", a),
                  r = t.data("active-class") || "active",
                  o = t.hasClass("before-header");
                n.on("click", function () {
                  var e = p(this),
                    t = p(e.attr("href"));
                  if ((n.removeClass(r), i.hide(), o)) {
                    var c = t.find(".cmb-type-title.tab-header").clone();
                    c.addClass("before-header-title"),
                      p(".before-header-title").remove(),
                      a.prepend(c);
                  }
                  return e.addClass(r), t.show(), !1;
                });
                var c =
                  window.location.hash ||
                  window.localStorage.getItem(a.attr("id"));
                null === c
                  ? n.eq(0).trigger("click")
                  : (c = p('a[href="' + c + '"]', t)).length
                  ? c.trigger("click")
                  : n.eq(0).trigger("click"),
                  e.next().css("min-height", t.outerHeight());
              });
          },
          variableInserter: function (e) {
            var t = p(
              "input[type=text], textarea",
              ".rank-math-supports-variables"
            );
            if (((e = void 0 === e || e), t.length)) {
              var a,
                n = this,
                i = p("body");
              if (
                (t.attr("autocomplete", "off"),
                t.wrap('<div class="rank-math-variables-wrap"/>'),
                p(".rank-math-variables-wrap").append(
                  '<a href="#" class="rank-math-variables-button button button-secondary"><span class="dashicons dashicons-arrow-down-alt2"></span></a>'
                ),
                e)
              ) {
                var o = rankMath.capitalizeTitle ? "capitalize" : "";
                p(".rank-math-variables-wrap").after(
                  '<div class="rank-math-variables-preview ' +
                    o +
                    '" data-title="' +
                    Object(r.__)("Example", "rank-math") +
                    '"/>'
                ),
                  t.on("rank_math_variable_change input", function (e) {
                    var t = p(e.currentTarget),
                      a = n.replaceVariables(t.val());
                    60 < a.length && 0 <= t.attr("name").indexOf("title")
                      ? (a = a.substring(0, 60) + "...")
                      : 160 < a.length &&
                        0 <= t.attr("name").indexOf("description") &&
                        (a = a.substring(0, 160) + "...");
                    var i = p("<textarea/>").html(a).val();
                    t.parent().next(".rank-math-variables-preview").text(i);
                  }),
                  t.trigger("rank_math_variable_change");
              }
              var c = p("<ul/>"),
                s = p(
                  '<div class="rank-math-variables-dropdown"><input type="text" placeholder="' +
                    Object(r.__)("Search &hellip;", "rank-math") +
                    '"></div>'
                );
              p.each(rankMath.variables, function () {
                c.append(
                  '<li data-var="%' +
                    this.variable +
                    '%" data-example="' +
                    this.example +
                    '"><strong>' +
                    this.name +
                    "</strong><span>" +
                    this.description +
                    "</span></li>"
                );
              }),
                s.append(c),
                p(".rank-math-variables-wrap:eq(0)").append(s);
              var l = p(
                ".rank-math-variables-button, .rank-math-variables-button *, .rank-math-variables-dropdown, .rank-math-variables-dropdown *"
              );
              i.on("click", function (e) {
                p(e.target).is(l) || v();
              });
              var d = s.find("input"),
                u = s.find("li");
              i.on("click", ".rank-math-variables-button", function (e) {
                e.preventDefault();
                var t = p(this);
                t.after(s),
                  u.show(),
                  void 0 !== (a = t.prev().data("exclude-variables")) &&
                    ((a = a.split(",")), h()),
                  s.show(),
                  d.val("").focus();
              }),
                s.on("click", "li", function (e) {
                  e.preventDefault();
                  var t = p(this),
                    a = t
                      .closest(".rank-math-variables-wrap")
                      .find("input,textarea");
                  a.val(p.trim(a.val()) + " " + t.data("var")),
                    a.trigger("rank_math_variable_change").trigger("input"),
                    v();
                }),
                s.on("keyup", "input", function (e) {
                  e.preventDefault();
                  var t = p(this).val().toLowerCase();
                  if (2 > t.length) return u.show(), void h();
                  u.hide().each(function () {
                    var e = p(this);
                    -1 !== e.text().toLowerCase().indexOf(t) && e.show();
                  }),
                    h();
                });
            }
            function h() {
              void 0 !== a &&
                a.forEach(function (e) {
                  s.find('[data-var="%' + e + '%"]').hide();
                });
            }
            function v() {
              (a = void 0), s.hide();
            }
          },
          replaceVariables: function (e) {
            return (
              p.each(rankMath.variables, function (t) {
                if (!this.example) return !0;
                var a = new RegExp("\\([a-z]+\\)", "g");
                (t = t.replace(a, "\\(.*?\\)")),
                  (e = e.replace(
                    new RegExp("%+" + t + "%+", "g"),
                    this.example
                  ));
              }),
              e
            );
          },
        }),
          window.rankMathAdmin.init();
      });
  },
});
