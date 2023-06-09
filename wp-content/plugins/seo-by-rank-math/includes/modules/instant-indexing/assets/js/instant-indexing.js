!(function (e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            r,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return r;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 2));
})([
  function (e, n) {
    e.exports = jQuery;
  },
  function (e, n) {
    e.exports = lodash;
  },
  function (e, n, t) {
    "use strict";
    t.r(n);
    var r,
      o = t(0),
      i = t.n(o),
      a = function (e, n, t, r) {
        (n = n || "error"), (r = r || !1);
        var o = i()(
          '<div class="notice notice-' +
            n +
            ' is-dismissible"><p>' +
            e +
            "</p></div>"
        ).hide();
        t.next(".notice").remove(),
          t.after(o),
          o.slideDown(),
          i()(document).trigger("wp-updates-notice-added"),
          r &&
            setTimeout(function () {
              o.fadeOut(function () {
                o.remove();
              });
            }, r);
      },
      s = t(1);
    (r = jQuery)(function () {
      var e = r("#indexnow_urls"),
        n = r("#indexnow_submit"),
        t = r("#indexnow_spinner"),
        o = r("div.cmb2-id-indexnow-urls"),
        i = !1,
        d = "all",
        c = function () {
          i ||
            ((i = !0),
            r.ajax({
              url: rankMath.indexNow.restUrl + "/getLog",
              data: { filter: d },
              type: "GET",
              beforeSend: function (e) {
                e.setRequestHeader("X-WP-Nonce", rankMath.api.nonce);
              },
              success: function (e) {
                if (
                  (r(
                    "#indexnow_clear_history, #indexnow_history_filters"
                  ).removeClass("hidden"),
                  0 === e.total &&
                    r(
                      "#indexnow_clear_history, #indexnow_history_filters"
                    ).addClass("hidden"),
                  r('#indexnow_history_filters a[data-filter="' + d + '"]')
                    .addClass("current")
                    .siblings()
                    .removeClass("current"),
                  !e.data.length)
                )
                  return (
                    (n = r("#indexnow_history").find("thead th").length),
                    void r("#indexnow_history")
                      .find("tbody")
                      .html(
                        '<tr><td colspan="' +
                          n +
                          '">' +
                          rankMath.indexNow.i18n.noHistory +
                          "</td></tr>"
                      )
                  );
                var n,
                  t = "";
                e.data.forEach(function (e) {
                  (t += "<tr>"),
                    (t +=
                      '<td title="' +
                      e.timeFormatted +
                      '">' +
                      e.timeHumanReadable +
                      "</td>"),
                    (t += "<td>" + e.url + "</td>"),
                    (t += "<td>" + e.status + "</td>"),
                    (t += "</tr>");
                }),
                  r("#indexnow_history tbody").html(t);
              },
              error: function (e) {
                a(
                  rankMath.indexNow.i18n.getHistoryError,
                  "error",
                  r("#indexnow_history"),
                  5e3
                );
              },
              complete: function () {
                i = !1;
              },
            }));
        };
      n.on("click", function (i) {
        i.preventDefault();
        var s = e.val();
        n.addClass("disabled"),
          t.addClass("is-active"),
          r.ajax({
            url: rankMath.indexNow.restUrl + "/submitUrls",
            type: "POST",
            beforeSend: function (e) {
              e.setRequestHeader("X-WP-Nonce", rankMath.api.nonce);
            },
            data: { urls: s },
            success: function (n) {
              n.success
                ? (a(n.message, "success", o, 5e3), e.val(""))
                : a(n.message, "error", o, 5e3);
            },
            error: function (e) {
              var n =
                void 0 !== e.responseJSON.message
                  ? e.responseJSON.message
                  : rankMath.indexNow.i18n.submitError;
              a(n, "error", o, 5e3);
            },
            complete: function () {
              n.removeClass("disabled"),
                t.removeClass("is-active"),
                (d = "all"),
                c();
            },
          });
      }),
        r("#indexnow_show_response_codes").on("click", function (e) {
          e.preventDefault(),
            r(this).toggleClass("active"),
            r("#indexnow_response_codes").toggleClass("hidden");
        }),
        (function () {
          r("#indexnow_clear_history").on("click", function (e) {
            e.preventDefault(),
              r.ajax({
                url: rankMath.indexNow.restUrl + "/clearLog",
                type: "POST",
                beforeSend: function (e) {
                  e.setRequestHeader("X-WP-Nonce", rankMath.api.nonce);
                },
                success: function (e) {
                  c();
                },
                error: function (e) {
                  a(rankMath.indexNow.i18n.clearHistoryError, "error", o, 5e3);
                },
              });
          });
          var e = Object(s.toInteger)(rankMath.indexNow.refreshHistoryInterval);
          e > 0 &&
            ((e = Math.max(
              Object(s.toInteger)(rankMath.indexNow.refreshHistoryInterval),
              1e3
            )),
            setInterval(c, e)),
            r("#indexnow_history_filters a").on("click", function (e) {
              e.preventDefault();
              var n = r(this).data("filter");
              n !== d && ((d = n), c());
            }),
            c();
        })(),
        r("#indexnow_reset_key").on("click", function (e) {
          e.preventDefault();
          var n = r("#indexnow_api_key").val();
          r("#indexnow_api_key").val("..."),
            r.ajax({
              url: rankMath.indexNow.restUrl + "/resetKey",
              type: "POST",
              beforeSend: function (e) {
                e.setRequestHeader("X-WP-Nonce", rankMath.api.nonce);
              },
              success: function (e) {
                r("#indexnow_api_key").val(e.key),
                  r("#indexnow_api_key_location").text(e.location),
                  r("#indexnow_check_key").attr("href", e.location);
              },
              error: function (e) {
                r("#indexnow_api_key").val(n);
              },
            });
        });
    });
  },
]);
