!(function (t) {
  var e = {};
  function n(a) {
    if (e[a]) return e[a].exports;
    var r = (e[a] = { i: a, l: !1, exports: {} });
    return t[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, a) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            a,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return a;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 68));
})({
  3: function (t, e) {
    t.exports = jQuery;
  },
  68: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(3),
      r = n.n(a);
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    var l = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          this.addButtons(),
          this.editingEvents(),
          this.saveEvents();
      }
      var e, n, a;
      return (
        (e = t),
        (n = [
          {
            key: "addButtons",
            value: function () {
              var t = r()(
                "#rank_math_seo_details, #rank_math_title, #rank_math_description, #rank_math_image_alt, #rank_math_image_title"
              );
              t.each(function () {
                var t = r()(this);
                t.append(
                  ' <a href=#" class="dashicons dashicons-edit" title="' +
                    rankMath.bulkEditTitle +
                    '"></a>'
                ),
                  t.wrapInner("<span/>"),
                  t.append(
                    ' <span><a href="#" class="button button-primary button-small rank-math-column-save-all">' +
                      rankMath.buttonSaveAll +
                      '</a> <a href="#" class="button-link button-link-delete rank-math-column-cancel-all">' +
                      rankMath.buttonCancel +
                      "</a></span>"
                  );
              }),
                t.on(
                  "click",
                  ".dashicons-edit, .rank-math-column-cancel-all",
                  function (e) {
                    e.preventDefault();
                    var n = r()(this).closest("th");
                    r()(this).hasClass("rank-math-column-cancel-all")
                      ? (t.removeClass("bulk-editing"),
                        r()(
                          ".rank-math-column-cancel",
                          "td.bulk-editing.dirty"
                        ).trigger("click"),
                        r()("td.bulk-editing").removeClass("bulk-editing"))
                      : (n.toggleClass("bulk-editing"),
                        r()("td.column-" + n.attr("id")).toggleClass(
                          "bulk-editing"
                        ));
                  }
                );
            },
          },
          {
            key: "editingEvents",
            value: function () {
              r()(".rank-math-column-value")
                .on("input", function () {
                  var t = r()(this),
                    e = t.closest("td");
                  t.text() !== t.prev().text()
                    ? e.addClass("dirty")
                    : e.removeClass("dirty");
                })
                .on("keypress", function (t) {
                  if (13 === t.keyCode)
                    return (
                      r()(this)
                        .parent()
                        .find(".rank-math-column-save")
                        .trigger("click"),
                      !1
                    );
                }),
                r()(".rank-math-column-cancel").on("click", function (t) {
                  t.preventDefault();
                  var e = r()(this).closest("td");
                  e.removeClass("dirty");
                  var n = e
                    .find(".rank-math-column-value")
                    .prev(".rank-math-column-display");
                  n.find("span").length && (n = n.find("span")),
                    e.find(".rank-math-column-value").text(n.text());
                });
            },
          },
          {
            key: "saveEvents",
            value: function () {
              var t = this;
              r()(".rank-math-column-save-all").on("click", function (e) {
                e.preventDefault();
                var n = r()(this),
                  a = {},
                  i = [];
                if (
                  (r()(".dirty.bulk-editing").each(function () {
                    var t = r()(this),
                      e = parseInt(
                        t.closest("tr").attr("id").replace("post-", "")
                      ),
                      n = t.find(".rank-math-column-value");
                    i.push(t),
                      (a[e] = a[e] || {}),
                      (a[e][n.data("field")] = n.text());
                  }),
                  r.a.isEmptyObject(a))
                )
                  return r()(n.next()).trigger("click"), !0;
                t.save(a).done(function (e) {
                  e.success &&
                    (i.forEach(function (e) {
                      t.setColumn(e);
                    }),
                    r()(n.next()).trigger("click"));
                });
              }),
                r()(".rank-math-column-save").on("click", function (e) {
                  e.preventDefault();
                  var n = r()(this).closest(".dirty"),
                    a = parseInt(
                      n.closest("tr").attr("id").replace("post-", "")
                    ),
                    i = n.find(".rank-math-column-value"),
                    l = {};
                  (l[a] = {}),
                    (l[a][i.data("field")] = i.text()),
                    t.save(l).done(function (e) {
                      e.success && t.setColumn(n);
                    });
                });
            },
          },
          {
            key: "setColumn",
            value: function (t) {
              t.removeClass("dirty bulk-editing");
              var e = t
                .find(".rank-math-column-value")
                .prev(".rank-math-column-display");
              e.find("span").length && (e = e.find("span"));
              var n = document.createElement("div");
              (n.innerHTML = t.find(".rank-math-column-value").text()),
                e.text(n.innerText);
            },
          },
          {
            key: "save",
            value: function (t) {
              return r.a.ajax({
                url: rankMath.endpoint + "/updateMetaBulk",
                method: "POST",
                beforeSend: function (t) {
                  t.setRequestHeader("X-WP-Nonce", rankMath.restNonce);
                },
                data: { rows: t },
              });
            },
          },
        ]) && i(e.prototype, n),
        a && i(e, a),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    r()(function () {
      new l();
    });
  },
});
