!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 1));
})([
  function (t, e) {
    t.exports = jQuery;
  },
  function (t, e, r) {
    "use strict";
    r.r(e);
    var n,
      i = r(0);
    (n = r.n(i).a)(function () {
      ({
        init: function () {
          (this.wrap = n(".rank-math-redirections-wrap")),
            this.addNew(),
            this.importExport(),
            this.showMore(),
            this.columnActions(),
            this.validateForm(),
            this.separateRedirectionTypes(),
            this.explodePastedContent();
        },
        addNew: function () {
          var t = this,
            e = n("html, body");
          this.wrap.on("click", ".rank-math-add-new-redirection", function (r) {
            r.preventDefault();
            var n = t.wrap.find(".rank-math-editcreate-form");
            t.wrap.find(".rank-math-importexport-form").hide(),
              n.is(":visible")
                ? n.hide()
                : (n
                    .find(
                      "#sources_repeat > .cmb-repeatable-grouping:not(:eq(0))"
                    )
                    .remove(),
                  n.find("> form").get(0).reset(),
                  n.show(),
                  e.on(
                    "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",
                    function () {
                      e.stop();
                    }
                  ),
                  e.animate(
                    { scrollTop: n.position().top },
                    "slow",
                    function () {
                      e.off(
                        "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove"
                      );
                    }
                  ));
          }),
            this.wrap.on("click", ".button-link-delete", function (t) {
              t.preventDefault(),
                n(this).closest(".rank-math-editcreate-form").hide();
            });
        },
        importExport: function () {
          var t = this;
          n("html, body"),
            this.wrap.on(
              "click",
              ".rank-math-redirections-import_export",
              function (e) {
                e.preventDefault();
                var r = t.wrap.find(".rank-math-importexport-form");
                t.wrap.find(".rank-math-editcreate-form").hide(),
                  r.slideToggle(200);
              }
            );
        },
        validateForm: function () {
          var t = n(".rank-math-editcreate-form .button-primary");
          n(".rank-math-editcreate-form > .cmb-form").on(
            "submit",
            function (e) {
              var r = n(this),
                i = r.find(".validation-message"),
                a = !1;
              t.prop("disabled", !0),
                r.find(".invalid").removeClass("invalid"),
                i.each(function () {
                  n(this).prev("br").remove(), n(this).remove();
                }),
                r.find('input[type="text"]:not(.exclude)').each(function () {
                  var t = n(this);
                  (t.val() && t.val().trim()) ||
                    ((a = !0),
                    t
                      .addClass("invalid")
                      .after(
                        n(
                          '<br><span class="validation-message">' +
                            rankMath.emptyError +
                            "</span>"
                        )
                      ));
                }),
                a && (e.preventDefault(), t.prop("disabled", !1));
            }
          );
        },
        separateRedirectionTypes: function () {
          var t = this.wrap.find(".cmb2-id-header-code");
          if (t.length) {
            var e = t.clone();
            e.find(".cmb-th label").text(rankMath.maintenanceMode),
              e.find(".cmb2-radio-list li:lt(3)").remove(),
              t.after(e),
              t.addClass("nob nopb"),
              t.find(".cmb2-radio-list li:gt(2)").remove();
            var r = n(".cmb2-id-url-to"),
              i = n("#url_to");
            n("[name=header_code]").on("change", function () {
              var t = parseInt(n(this).val());
              410 === t || 451 === t
                ? (i.addClass("exclude"), r.addClass("hidden"))
                : (i.removeClass("exclude"), r.removeClass("hidden"));
            }),
              n("[name=header_code]:checked").trigger("change");
          }
        },
        explodePastedContent: function () {
          var t = n("#sources_repeat");
          t.on("paste", "input", function (e) {
            var r = e.originalEvent.clipboardData.getData("text");
            if (!/\r|\n/.exec(r)) return !0;
            var i = n(this),
              a = n(".cmb-add-group-row", t),
              o = r.split(/\r?\n/).filter(String),
              s = i.closest(".cmb-field-list").find("select").val();
            return (
              n.each(o, function (e, r) {
                if (
                  (i.val(r),
                  i.closest(".cmb-field-list").find("select").val(s),
                  e < o.length - 1)
                ) {
                  if (rankMath.redirectionPastedContent - 1 <= e) return !1;
                  a.click(),
                    (i = n(".cmb-repeatable-grouping", t).last().find("input"));
                } else i.focus();
              }),
              !1
            );
          });
        },
        showMore: function () {
          this.wrap.on("click", ".rank-math-showmore", function (t) {
            t.preventDefault();
            var e = n(this);
            e.hide(), e.next(".rank-math-more").slideDown();
          }),
            this.wrap.on("click", ".rank-math-hidemore", function (t) {
              t.preventDefault();
              var e = n(this).parent();
              e.hide(), e.prev(".rank-math-showmore").show();
            });
        },
        columnActions: function () {
          var t = this;
          this.wrap.on("click", ".rank-math-redirection-action", function (e) {
            e.preventDefault();
            var r = n(this),
              i = r.data("action"),
              a =
                this.href
                  .replace("admin.php", "admin-ajax.php")
                  .replace("page=rank-math-redirections&", "") +
                "&action=rank_math_redirection_" +
                i;
            n.ajax({
              url: a,
              type: "GET",
              success: function (e) {
                e &&
                  e.success &&
                  (["delete", "trash", "restore"].includes(i)
                    ? r.closest("tr").fadeOut(800, function () {
                        n(this).remove();
                      })
                    : r
                        .closest("tr")
                        .toggleClass(
                          "rank-math-redirection-activated rank-math-redirection-deactivated"
                        ),
                  "activate" === i
                    ? (t.filterCountAdd("active"),
                      t.filterCountSubstract("inactive"))
                    : "deactivate" === i
                    ? (t.filterCountAdd("inactive"),
                      t.filterCountSubstract("active"))
                    : "trash" === i
                    ? (t.filterCountAdd("trashed"),
                      t.filterCountSubstract("all"),
                      r.closest(".rank-math-redirection-deactivated").length
                        ? t.filterCountSubstract("inactive")
                        : t.filterCountSubstract("active"))
                    : "delete" === i
                    ? t.filterCountSubstract("trashed")
                    : "restore" === i &&
                      (t.filterCountAdd("active"),
                      t.filterCountAdd("all"),
                      t.filterCountSubstract("trashed")));
              },
            });
          });
        },
        filterCountAdd: function (t) {
          this.filterCount(t, "add");
        },
        filterCountSubstract: function (t) {
          this.filterCount(t, "sub");
        },
        filterCount: function (t, e) {
          var r = this.wrap.find("form > ul.subsubsub > ." + t + " .count"),
            n = parseInt(r.text().substr(1));
          (n = "add" === e ? n + 1 : n - 1), r.text("(" + n + ")");
        },
      }).init();
    });
  },
]);
