!(function (t) {
  var e = {};
  function o(r) {
    if (e[r]) return e[r].exports;
    var n = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = t),
    (o.c = e),
    (o.d = function (t, e, r) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            r,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    o((o.s = 0));
})([
  function (t, e, o) {
    "use strict";
    o.r(e);
    const r = window.tadvBlockButtons,
      { wp: n } = window,
      { get: c } = window.lodash,
      { createElement: a } = n.element,
      { InspectorControls: l, PanelColorSettings: i } = n.blockEditor,
      {
        registerFormatType: s,
        applyFormat: u,
        removeFormat: d,
        getActiveFormat: m,
      } = n.richText;
    function p(t) {
      return (t = t.replace(/.*?(background-)?color:\s*/, "")).replace(
        /[; ]+$/,
        ""
      );
    }
    const h = window.tadvBlockButtons || {},
      { wp: v } = window,
      { RichTextToolbarButton: g } = v.blockEditor,
      { registerFormatType: f, removeFormat: b } = v.richText,
      { createElement: y } = v.element,
      { ToolbarButton: k } = v.components,
      w = h.strRemoveFormatting || "Clear formatting";
    let F;
    function T(t) {
      const e = [];
      return (
        F ||
          (F = h.formats_to_remove
            ? h.formats_to_remove.split(",")
            : [
                "core/bold",
                "core/italic",
                "core/code",
                "core/underline",
                "core/strikethrough",
                "core/text-color",
                "tadv/sup",
                "tadv/sub",
                "tadv/mark",
                "tadv/color-panel",
                "tadv/background-color-panel",
              ]),
        t.forEach((t) => {
          t &&
            t.forEach((t) => {
              F.indexOf(t.type) > -1 &&
                -1 === e.indexOf(t.type) &&
                e.push(t.type);
            });
        }),
        e
      );
    }
    function C(t) {
      let e = t.formats;
      if (!e.length) return t;
      let o = 0,
        r = e.length;
      t.end > t.start && ((o = t.start), (r = t.end), (e = e.slice(o, r)));
      const n = T(e);
      return n.length
        ? (n.forEach((e) => {
            t = b(t, e, o, r);
          }),
          t)
        : t;
    }
    const { wp: x } = window,
      { createElement: B, Fragment: A } = (window.tadvBlockButtons, x.element),
      { __: N } = x.i18n,
      { ToolbarButton: E } = x.components,
      { RichTextToolbarButton: S, RichTextShortcut: _ } = x.blockEditor,
      {
        registerFormatType: O,
        getActiveFormat: P,
        toggleFormat: R,
        applyFormat: L,
        removeFormat: M,
      } = x.richText,
      U = N("Strikethrough");
    function j(t, e, o) {
      e(R(t, { type: "core/strikethrough" })), o && o();
    }
    const { wp: z } = window,
      { createElement: I, Fragment: G } = z.element,
      { __: H } = z.i18n,
      { ToolbarButton: V } = z.components,
      { RichTextToolbarButton: $, RichTextShortcut: q } = z.blockEditor,
      {
        registerFormatType: D,
        getActiveFormat: J,
        toggleFormat: K,
        remove: Q,
        applyFormat: W,
      } = z.richText,
      X = H("Inline Code");
    function Y(t, e, o) {
      e(K(t, { type: "core/code" })), o && o();
    }
    const { wp: Z } = window,
      tt = window.tadvBlockButtons || {},
      { createElement: et, Fragment: ot } = Z.element,
      { __: rt } = Z.i18n,
      { ToolbarButton: nt } = Z.components,
      { RichTextToolbarButton: ct, RichTextShortcut: at } = Z.blockEditor,
      { Path: lt, SVG: it } = Z.components,
      {
        registerFormatType: st,
        getActiveFormat: ut,
        toggleFormat: dt,
        applyFormat: mt,
        removeFormat: pt,
      } = Z.richText,
      ht = et(
        it,
        {
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          className: "dashicon tadv-mark-icon",
        },
        et(lt, {
          "aria-hidden": "true",
          role: "img",
          focusable: "false",
          width: "20",
          height: "20",
          d: "M13.23 15h1.9L11 4H9L5 15h1.88l1.07-3h4.18zm-1.53-4.54H8.51L10 5.6z",
        })
      ),
      vt = tt.strMark;
    function gt(t, e, o) {
      e(dt(t, { type: "tadv/mark" })), o && o();
    }
    const { wp: ft } = window,
      bt = window.tadvBlockButtons || {},
      { createElement: yt, Fragment: kt } = ft.element,
      { __: wt } = ft.i18n,
      { ToolbarButton: Ft } = ft.components,
      { RichTextToolbarButton: Tt, RichTextShortcut: Ct } = ft.blockEditor,
      {
        registerFormatType: xt,
        getActiveFormat: Bt,
        applyFormat: At,
        removeFormat: Nt,
      } = ft.richText;
    function Et(t, e, o, r) {
      if (t) o(Nt(e, "core/underline"));
      else {
        o(
          At(e, {
            type: "core/underline",
            attributes: { style: "text-decoration: underline" },
          })
        );
      }
      r && r();
    }
    const { wp: St } = window,
      _t = window.tadvBlockButtons,
      { createElement: Ot, Fragment: Pt } = St.element,
      {
        registerFormatType: Rt,
        getActiveFormat: Lt,
        toggleFormat: Mt,
      } = St.richText,
      { ToolbarButton: Ut } = St.components,
      { RichTextToolbarButton: jt, RichTextShortcut: zt } = St.blockEditor,
      { Path: It, SVG: Gt } = St.components,
      Ht = Ot(
        Gt,
        { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        Ot(It, {
          "aria-hidden": "true",
          role: "img",
          focusable: "false",
          d: "M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z",
        })
      ),
      Vt = Ot(
        Gt,
        { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        Ot(It, {
          "aria-hidden": "true",
          role: "img",
          focusable: "false",
          d: "M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z",
        })
      );
    function $t(t, e, o, r) {
      o(Mt(e, { type: t })), r && r();
    }
    function qt({ type: t, tagName: e, title: o, character: r, icon: n }, c) {
      Rt(t, {
        title: o,
        tagName: e,
        className: null,
        edit({ value: e, onChange: a, onFocus: l, isActive: i }) {
          let s = null;
          return (
            c ||
              (s = Ot(jt, {
                title: o,
                icon: n,
                onClick: () => $t(t, e, a, l),
                isActive: i,
                shortcutType: "primary",
                shortcutCharacter: r,
              })),
            Ot(
              Pt,
              null,
              Ot(zt, {
                type: "primary",
                character: r,
                onUse: () => $t(t, e, a),
              }),
              s
            )
          );
        },
      });
    }
    const { wp: Dt } = window,
      { createElement: Jt } = Dt.element,
      { select: Kt } = Dt.data,
      { addFilter: Qt } = Dt.hooks,
      { PanelBody: Wt, Toolbar: Xt } = Dt.components,
      { InspectorControls: Yt } = Dt.blockEditor,
      { registerFormatType: Zt, unregisterFormatType: te } = Dt.richText,
      ee = window.tadvBlockButtons || {},
      oe = ee.buttons ? ee.buttons.split(",") : [],
      re = ee.panelButtons ? ee.panelButtons.split(",") : [],
      ne = ee.unusedButtons ? ee.unusedButtons.split(",") : [],
      ce = {
        "tadv/mark": function (t) {
          st("tadv/mark", {
            title: vt,
            tagName: "mark",
            className: null,
            edit({ value: e, onChange: o, onFocus: r, isActive: n }) {
              let c = null;
              return (
                t ||
                  (c = et(ct, {
                    title: vt,
                    icon: ht,
                    onClick: () => gt(e, o, r),
                    className: "tadv-icon-button-mark",
                    isActive: n,
                    shortcutType: "access",
                    shortcutCharacter: "m",
                  })),
                et(
                  ot,
                  null,
                  et(at, {
                    type: "access",
                    character: "m",
                    onUse: () => gt(e, o),
                  }),
                  c
                )
              );
            },
          });
        },
        "tadv/removeformat": function (t) {
          f("tadv/removeformat", {
            title: w,
            tagName: "u",
            className: "remove-format",
            edit: ({ value: e, onChange: o, onFocus: r, isActive: n }) =>
              t
                ? null
                : y(g, {
                    icon: "editor-removeformatting",
                    title: w,
                    onClick: () => o(C(e)),
                    isActive: null,
                  }),
          });
        },
        "core/code": function (t) {
          D("core/code", {
            title: X,
            tagName: "code",
            className: null,
            __unstableInputRule(t) {
              const { start: e, text: o } = t;
              if ("`" !== o.slice(e - 1, e)) return t;
              const r = o.slice(0, e - 1).lastIndexOf("`");
              if (-1 === r) return t;
              const n = r,
                c = e - 2;
              return n === c
                ? t
                : ((t = Q(t, n, n + 1)),
                  (t = Q(t, c, c + 1)),
                  (t = W(t, { type: "core/code" }, n, c)));
            },
            edit({ value: e, onChange: o, onFocus: r, isActive: n }) {
              let c = null;
              return (
                t ||
                  (c = I($, {
                    icon: "editor-code",
                    title: X,
                    onClick: () => Y(e, o, r),
                    isActive: n,
                    shortcutType: "access",
                    shortcutCharacter: "x",
                  })),
                I(
                  G,
                  null,
                  I(q, {
                    type: "access",
                    character: "x",
                    onUse: () => Y(e, o),
                  }),
                  c
                )
              );
            },
          });
        },
        "core/strikethrough": function (t) {
          O("core/strikethrough", {
            name: "core/strikethrough",
            title: U,
            tagName: "s",
            className: null,
            edit({ value: e, onChange: o, onFocus: r, isActive: n }) {
              let c = null;
              return (
                t ||
                  (c = B(S, {
                    icon: "editor-strikethrough",
                    title: U,
                    onClick: () => j(e, o, r),
                    isActive: n,
                    shortcutType: "access",
                    shortcutCharacter: "d",
                  })),
                B(
                  A,
                  null,
                  B(_, {
                    type: "access",
                    character: "d",
                    onUse: () => j(e, o),
                  }),
                  c
                )
              );
            },
          });
        },
        "core/underline": function (t) {
          xt("core/underline", {
            title: bt.strUnderline,
            tagName: "span",
            className: "underline",
            attributes: { style: "style" },
            edit({ value: e, onChange: o, onFocus: r, isActive: n }) {
              let c = null;
              return (
                t ||
                  (c = yt(Tt, {
                    title: bt.strUnderline,
                    icon: "editor-underline",
                    onClick: () => Et(n, e, o, r),
                    className: null,
                    isActive: n,
                    shortcutType: "primary",
                    shortcutCharacter: "u",
                  })),
                yt(
                  kt,
                  null,
                  yt(Ct, {
                    type: "primary",
                    character: "u",
                    onUse: () => Et(n, e, o),
                  }),
                  c
                )
              );
            },
          });
        },
        "core/subscript": function (t) {
          qt(
            {
              type: "core/subscript",
              tagName: "sub",
              title: _t.strSubscript,
              character: ",",
              icon: Vt,
            },
            t
          );
        },
        "core/superscript": function (t) {
          qt(
            {
              type: "core/superscript",
              tagName: "sup",
              title: _t.strSuperscript,
              character: ".",
              icon: Ht,
            },
            t
          );
        },
      },
      ae = {
        "tadv/mark": function ({
          value: t,
          onChange: e,
          onFocus: o,
          isActive: r,
        }) {
          return et(nt, {
            key: "tadv/mark",
            icon: "editor-textcolor",
            className: "tadv-icon-button tadv-icon-button-mark",
            isActive: ut(t, "tadv/mark"),
            title: vt,
            onClick: () => gt(t, e, o),
          });
        },
        "tadv/removeformat": function ({
          value: t,
          onChange: e,
          onFocus: o,
          isActive: r,
        }) {
          return y(k, {
            key: "tadv/removeformat",
            icon: "editor-removeformatting",
            className: "tadv-icon-button",
            title: w,
            onClick: () => e(C(t)),
          });
        },
        "core/code": function ({
          value: t,
          onChange: e,
          onFocus: o,
          isActive: r,
        }) {
          return I(V, {
            key: "core/code",
            icon: "editor-code",
            className: "tadv-icon-button",
            isActive: J(t, "core/code"),
            title: X,
            onClick: () => Y(t, e, o),
          });
        },
        "core/strikethrough": function ({
          value: t,
          onChange: e,
          onFocus: o,
          isActive: r,
        }) {
          return B(E, {
            key: "core/strikethrough",
            icon: "editor-strikethrough",
            className: "tadv-icon-button",
            isActive: P(t, "core/strikethrough"),
            title: U,
            onClick: () => j(t, e, o),
          });
        },
        "core/underline": function ({
          value: t,
          onChange: e,
          onFocus: o,
          isActive: r,
        }) {
          const n = !!Bt(t, "core/underline");
          return yt(Ft, {
            key: "core/underline",
            icon: "editor-underline",
            className: "tadv-icon-button",
            isActive: n,
            title: bt.strUnderline,
            onClick: () => Et(n, t, e, o),
          });
        },
        "core/subscript": function ({
          value: t,
          onChange: e,
          onFocus: o,
          isActive: r,
        }) {
          return Ot(Ut, {
            key: "core/subscript",
            icon: Vt,
            className: "tadv-icon-button",
            isActive: Lt(t, "core/subscript"),
            title: _t.strSubscript,
            onClick: () => $t("core/subscript", t, e, o),
          });
        },
        "core/superscript": function ({
          value: t,
          onChange: e,
          onFocus: o,
          isActive: r,
        }) {
          return Ot(Ut, {
            key: "core/superscript",
            icon: Ht,
            className: "tadv-icon-button",
            isActive: Lt(t, "core/superscript"),
            title: _t.strSuperscript,
            onClick: () => $t("core/superscript", t, e, o),
          });
        },
      };
    function le(t) {
      (function (t) {
        const e = Kt("core/rich-text").getFormatTypes();
        let o = !1;
        return (
          e.forEach((e) => {
            e.name === t && (o = !0);
          }),
          o
        );
      })(t) && te(t);
    }
    function ie() {
      ne.length &&
        ne.forEach((t) => {
          le(t);
        }),
        oe.forEach((t) => {
          ce.hasOwnProperty(t) && (le(t), ce[t].call(null));
        }),
        re.length &&
          (re.forEach((t) => {
            -1 === oe.indexOf(t) &&
              ce.hasOwnProperty(t) &&
              (le(t), ce[t].call(null, "panel"));
          }),
          Zt("tadv/tadv-format-panel", {
            title: ee.strFormatting,
            tagName: "span",
            className: "tadv-format-panel",
            edit({ value: t, onChange: e, onFocus: o, isActive: r }) {
              const n = [];
              return (
                re.forEach((c) => {
                  ae.hasOwnProperty(c) &&
                    n.push(
                      ae[c].call(null, {
                        value: t,
                        onChange: e,
                        onFocus: o,
                        isActive: r,
                      })
                    );
                }),
                Jt(
                  Yt,
                  null,
                  Jt(
                    Wt,
                    {
                      title: ee.strFormatting,
                      className: "tadv-buttons-panel",
                    },
                    Jt(Xt, null, n)
                  )
                )
              );
            },
          })),
        (function () {
          if (!r.colorPanel) return;
          const t = r.colorPanel.indexOf("tadv/color-panel") > -1,
            e = r.colorPanel.indexOf("tadv/background-color-panel") > -1;
          t &&
            s("tadv/color-panel", {
              title: r.strTextColor,
              tagName: "span",
              className: "tadv-color",
              attributes: { style: "style" },
              edit({ isActive: t, value: o, onChange: n }) {
                let s, h;
                if (t) {
                  const t = m(o, "tadv/color-panel"),
                    e = c(t, ["attributes", "style"]) || "",
                    r = m(o, "tadv/background-color-panel"),
                    n = c(r, ["attributes", "style"]) || "";
                  (s = p(e)), (h = p(n));
                }
                const v = [
                  {
                    value: s,
                    onChange: (t) => {
                      n(
                        t
                          ? u(o, {
                              type: "tadv/color-panel",
                              attributes: { style: "color:" + t },
                            })
                          : d(o, "tadv/color-panel")
                      );
                    },
                    label: r.strTextColorLabel,
                  },
                ];
                return (
                  e &&
                    v.push({
                      value: h,
                      onChange: (t) => {
                        n(
                          t
                            ? u(o, {
                                type: "tadv/background-color-panel",
                                attributes: { style: "background-color:" + t },
                              })
                            : d(o, "tadv/background-color-panel")
                        );
                      },
                      label: r.strBackgroundColorLabel,
                    }),
                  a(
                    l,
                    null,
                    a(i, {
                      title: r.strTextColor,
                      initialOpen: !1,
                      colorSettings: v,
                    })
                  )
                );
              },
            }),
            s("tadv/background-color-panel", {
              title: r.strBackgroundColor,
              tagName: "span",
              className: "tadv-background-color",
              attributes: { style: "style" },
              edit({ isActive: o, value: n, onChange: s }) {
                if (!e || t) return null;
                let h;
                if (o) {
                  const t = m(n, "tadv/background-color-panel");
                  h = p(c(t, ["attributes", "style"]) || "");
                }
                const v = [
                  {
                    value: h,
                    onChange: (t) => {
                      s(
                        t
                          ? u(n, {
                              type: "tadv/background-color-panel",
                              attributes: { style: "background-color:" + t },
                            })
                          : d(n, "tadv/background-color-panel")
                      );
                    },
                    label: r.strBackgroundColorLabel,
                  },
                ];
                return a(
                  l,
                  null,
                  a(i, {
                    title: r.strTextColor,
                    initialOpen: !1,
                    colorSettings: v,
                  })
                );
              },
            });
        })();
    }
    let se;
    Qt("blocks.registerBlockType", "tadv-register-formats", function (t) {
      return se || (ie(), (se = !0)), t;
    });
  },
]);
