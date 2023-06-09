!(function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var o = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
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
        for (var o in e)
          n.d(
            a,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
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
    n((n.s = 65));
})({
  0: function (e, t) {
    e.exports = wp.i18n;
  },
  3: function (e, t) {
    e.exports = jQuery;
  },
  65: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(3),
      o = n.n(a),
      r = n(0);
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    var u = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          this.deactivatePlugins(),
          this.updateModules(),
          this.initializeClipBoard(),
          this.modeSelector(),
          this.dashboardWidget();
      }
      var t, n, a;
      return (
        (t = e),
        (n = [
          {
            key: "deactivatePlugins",
            value: function () {
              o()(".dashboard-deactivate-plugin").on("click", function (e) {
                e.preventDefault();
                var t = o()(this);
                return (
                  o.a
                    .ajax({
                      url: window.ajaxurl,
                      type: "POST",
                      data: {
                        action: "rank_math_deactivate_plugins",
                        security: rankMath.security,
                        plugin: "all",
                      },
                    })
                    .always(function (e) {
                      "1" === e && t.parents(".rank-math-notice").remove();
                    }),
                  !1
                );
              });
            },
          },
          {
            key: "updateModules",
            value: function () {
              o()(".rank-math-modules").on("change", function () {
                var e = o()(this),
                  t = e.closest(".rank-math-box"),
                  n = e.is(":checked"),
                  a = e.val();
                t.addClass("saving"),
                  o.a
                    .ajax({
                      url: rankMath.api.root + "rankmath/v1/saveModule",
                      method: "POST",
                      beforeSend: function (e) {
                        e.setRequestHeader("X-WP-Nonce", rankMath.api.nonce);
                      },
                      data: { module: a, state: n ? "on" : "off" },
                    })
                    .done(function (e) {
                      e
                        ? (t.removeClass("saving"),
                          t.toggleClass("active", n),
                          o.a
                            .ajax({
                              url:
                                window.location.pathname +
                                window.location.search,
                              method: "GET",
                            })
                            .done(function (e) {
                              if (e) {
                                var t = o()(e).find("#toplevel_page_rank-math"),
                                  n = o()(
                                    "#toplevel_page_rank-math > .wp-submenu"
                                  );
                                t.length &&
                                  t.find("> .wp-submenu > li").length !==
                                    n.children("li").length &&
                                  n.fadeOut(200, function () {
                                    n.html(
                                      t.find("> .wp-submenu").hide().children()
                                    ).fadeIn(400);
                                  });
                              }
                            }))
                        : window.alert(
                            "Something went wrong! Please try again."
                          );
                    });
              });
            },
          },
          {
            key: "initializeClipBoard",
            value: function () {
              "undefined" != typeof ClipboardJS &&
                (o()(".get-debug-report").on("click", function () {
                  return (
                    o()("#debug-report").slideDown(),
                    o()("#debug-report textarea").focus().select(),
                    o()(this).parent().fadeOut(),
                    !1
                  );
                }),
                new ClipboardJS("#copy-for-support"));
            },
          },
          {
            key: "modeSelector",
            value: function () {
              o()(".rank-math-mode-selector a").on("click", function (e) {
                e.preventDefault();
                var t = o()(this).data("mode");
                return (
                  o.a
                    .ajax({
                      url: rankMath.api.root + "rankmath/v1/updateMode",
                      method: "POST",
                      beforeSend: function (e) {
                        e.setRequestHeader("X-WP-Nonce", rankMath.api.nonce);
                      },
                      data: { mode: t },
                    })
                    .done(function (e) {
                      e
                        ? window.location.reload()
                        : window.alert(
                            "Something went wrong! Please try again."
                          );
                    }),
                  !1
                );
              });
            },
          },
          {
            key: "dashboardWidget",
            value: function () {
              var e = o()("#rank-math-dashboard-widget");
              e.length &&
                o.a
                  .ajax({
                    url: rankMath.api.root + "rankmath/v1/dashboardWidget",
                    method: "GET",
                    beforeSend: function (e) {
                      e.setRequestHeader("X-WP-Nonce", rankMath.api.nonce);
                    },
                  })
                  .done(function (t) {
                    t
                      ? e.removeClass("rank-math-loading").html(t)
                      : e
                          .removeClass("rank-math-loading")
                          .html(
                            Object(r.__)(
                              "Something went wrong! Please try again.",
                              "rank-math"
                            )
                          );
                  });
            },
          },
        ]) && i(t.prototype, n),
        a && i(t, a),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    o()(function () {
      new u();
    });
  },
});
