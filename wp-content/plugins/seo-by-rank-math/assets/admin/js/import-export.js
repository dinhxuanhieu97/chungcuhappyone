!(function (e) {
  var t = {};
  function a(r) {
    if (t[r]) return t[r].exports;
    var n = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = t),
    (a.d = function (e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          a.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
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
    a((a.s = 66));
})({
  14: function (e, t, a) {
    "use strict";
    var r = a(3),
      n = a.n(r);
    t.a = function (e, t, a) {
      return n.a.ajax({
        url: rankMath.ajaxurl,
        type: a || "POST",
        dataType: "json",
        data: n.a.extend(
          !0,
          { action: "rank_math_" + e, security: rankMath.security },
          t
        ),
      });
    };
  },
  18: function (e, t, a) {
    "use strict";
    var r = a(3),
      n = a.n(r);
    t.a = function (e, t, a, r) {
      (t = t || "error"), (r = r || !1);
      var i = n()(
        '<div class="notice notice-' +
          t +
          ' is-dismissible"><p>' +
          e +
          "</p></div>"
      ).hide();
      a.next(".notice").remove(),
        a.after(i),
        i.slideDown(),
        n()(document).trigger("wp-updates-notice-added"),
        r &&
          setTimeout(function () {
            i.fadeOut(function () {
              i.remove();
            });
          }, r);
    };
  },
  3: function (e, t) {
    e.exports = jQuery;
  },
  33: function (e, t, a) {
    "use strict";
    var r = a(3),
      n = a.n(r);
    t.a = function (e) {
      var t = e || ".rank-math-box-tabs";
      n()(t)
        .children()
        .on("click", function (e) {
          e.preventDefault();
          var t = n()(this),
            a = t.attr("href").substr(1);
          t.addClass("active-tab").siblings().removeClass("active-tab"),
            n()("#" + a)
              .addClass("active-tab")
              .siblings()
              .removeClass("active-tab");
        });
    };
  },
  66: function (e, t, a) {
    "use strict";
    a.r(t);
    var r,
      n = a(3),
      i = a.n(n),
      o = a(14),
      s = a(18),
      c = a(33);
    (r = i.a)(function () {
      ({
        init: function () {
          var e = this;
          Object(c.a)(),
            r(document.body).on("click", ".rank-math-action", function (t) {
              var a = r(t.currentTarget).data("action");
              a in e && e[a](t);
            }),
            this.importConfirm();
        },
        importConfirm: function () {
          var e = r("#import-me");
          e.on("change", function () {
            e.removeClass("invalid");
          }),
            r("#rank-math-import-form").on("submit", function (t) {
              if (!e.get(0).files.length)
                return e.addClass("invalid"), void t.preventDefault();
              window.confirm(rankMath.importSettingsConfirm) ||
                t.preventDefault();
            });
        },
        createBackup: function (e) {
          var t = r(e.currentTarget);
          t.prop("disabled", !0),
            Object(o.a)("create_backup")
              .always(function () {
                t.prop("disabled", !1);
              })
              .done(function (e) {
                if (e.success) {
                  var a = t.parent().find("tbody"),
                    n = a.find("tr:first").clone();
                  n.removeClass("hidden").find("th").html(e.backup),
                    n.find("[data-action]").attr("data-key", e.key),
                    a.prepend(n),
                    r("#rank-math-no-backup-message").addClass("hidden"),
                    Object(s.a)(e.message, "success", r(".wp-header-end"), 2e3);
                } else Object(s.a)(e.error, "error", r(".wp-header-end"), 2e3);
              });
        },
        restoreBackup: function (e) {
          if (window.confirm(rankMath.restoreConfirm)) {
            var t = r(e.currentTarget);
            t.prop("disabled", !0),
              Object(o.a)("restore_backup", { key: t.attr("data-key") })
                .always(function () {
                  t.prop("disabled", !1);
                })
                .done(function (e) {
                  e.success
                    ? Object(s.a)(
                        e.message,
                        "success",
                        r(".wp-header-end"),
                        2e3
                      )
                    : Object(s.a)(e.error, "error", r(".wp-header-end"), 2e3);
                });
          }
        },
        deleteBackup: function (e) {
          if (window.confirm(rankMath.deleteBackupConfirm)) {
            var t = r(e.currentTarget);
            t.prop("disabled", !0),
              Object(o.a)("delete_backup", { key: t.data("key") })
                .always(function () {
                  t.prop("disabled", !1);
                })
                .done(function (e) {
                  if (e.success) {
                    var a = t.closest("table");
                    t.closest("tr").fadeOut(function () {
                      r(this).remove(),
                        1 > a.find("tr").length &&
                          r("#rank-math-no-backup-message").show();
                    }),
                      Object(s.a)(
                        e.message,
                        "success",
                        r(".wp-header-end"),
                        2e3
                      );
                  } else Object(s.a)(e.error, "error", r(".wp-header-end"), 2e3);
                });
          }
        },
        importPlugin: function (e) {
          var t = r(e.currentTarget),
            a = t
              .closest("form")
              .find(".rank-math-box-tabs > .active-tab")
              .text()
              .trim();
          if (window.confirm(rankMath.importPluginConfirm.replace("%s", a))) {
            var n = r.map(
              t
                .parents(".active-tab")
                .find(".choices")
                .find("input:checkbox:checked"),
              function (e) {
                return e.value;
              }
            );
            if (1 > n.length)
              Object(s.a)(
                rankMath.importPluginSelectAction,
                "error",
                r(".wp-header-end"),
                5e3
              );
            else {
              t.prop("disabled", !0), t.data("active") && n.push("deactivate");
              var i = r(
                '<textarea id="import-progress-area" class="import-progress-area large-text" disabled="disabled" rows="8" style="margin: 20px 0;background: #eee;"></textarea>'
              );
              r("#import-progress-area").remove(),
                t.parents(".active-tab").find("table").after(i),
                this.addLog("Import started...", i),
                this.ajaxImport(t.data("slug"), n, i, null, function () {
                  t.prop("disabled", !1),
                    setTimeout(function () {
                      i.fadeOut(function () {
                        i.remove();
                      });
                    }, 3e3);
                });
            }
          }
        },
        ajaxImport: function (e, t, a, r, n) {
          var i = this;
          if (0 === t.length)
            return this.addLog("Import finished.", a), void n();
          var s = t.shift(),
            c = "deactivate" === s ? "Deactivating plugin" : "Importing " + s;
          (r = r || 1),
            this.addLog(c, a),
            Object(o.a)("import_plugin", {
              perform: s,
              pluginSlug: e,
              paged: r,
            })
              .done(function (o) {
                (r = 1),
                  o &&
                    o.page &&
                    o.page < o.total_pages &&
                    ((r = o.page + 1), t.unshift(s)),
                  i.addLog(o.success ? o.message : o.error, a),
                  i.ajaxImport(e, t, a, r, n);
              })
              .fail(function (r) {
                this.addLog(r.statusText, a), this.ajaxImport(e, t, a, null, n);
              });
        },
        addLog: function (e, t) {
          var a = new Date(),
            r =
              t.val() +
              "[" +
              (10 > a.getHours() ? "0" : "") +
              a.getHours() +
              ":" +
              (10 > a.getMinutes() ? "0" : "") +
              a.getMinutes() +
              ":" +
              (10 > a.getSeconds() ? "0" : "") +
              a.getSeconds() +
              "] " +
              e +
              "\n";
          t.text(r).scrollTop(t[0].scrollHeight - t.height() - 20);
        },
        cleanPlugin: function (e) {
          var t = r(e.currentTarget),
            a = t
              .closest("form")
              .find(".rank-math-box-tabs > .active-tab")
              .text()
              .trim();
          window.confirm(rankMath.cleanPluginConfirm.replace("%s", a)) &&
            (t.prop("disabled", !0),
            Object(o.a)("clean_plugin", { pluginSlug: t.data("slug") })
              .always(function () {
                t.prop("disabled", !1),
                  r("html, body").animate({ scrollTop: 0 }, "fast");
              })
              .done(function (e) {
                e.success &&
                  t.closest("tr").fadeOut(function () {
                    r(this).remove();
                  }),
                  Object(s.a)(
                    e.success ? e.message : e.error,
                    e.success ? "success" : "error",
                    r(".wp-header-end"),
                    5e3
                  );
              }));
        },
      }).init();
    });
  },
});
