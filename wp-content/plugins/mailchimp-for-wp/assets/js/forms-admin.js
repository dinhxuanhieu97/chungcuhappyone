(() => {
  var e,
    t = {
      8342: (e, t, n) => {
        var r = window.mc4wp_forms_i18n,
          i = n(865),
          o = {
            showType: function (e) {
              var t = e.type;
              return (
                (t = t.charAt(0).toUpperCase() + t.slice(1)),
                i("div", [i("label", r.fieldType), i("span", t)])
              );
            },
            label: function (e) {
              return i("div", [
                i("label", r.fieldLabel),
                i("input.widefat", {
                  type: "text",
                  value: e.label,
                  onchange: function (t) {
                    e.label = t.target.value;
                  },
                  placeholder: e.title,
                }),
              ]);
            },
            value: function (e) {
              var t = "hidden" === e.type;
              return i("div", [
                i("label", [
                  t ? r.value : r.initialValue,
                  " ",
                  t
                    ? ""
                    : i(
                        "small",
                        { style: "float: right; font-weight: normal;" },
                        r.optional
                      ),
                ]),
                i("input.widefat", {
                  type: "text",
                  value: e.value,
                  onchange: function (t) {
                    e.value = t.target.value;
                  },
                }),
                t ? "" : i("p.description", r.valueHelp),
              ]);
            },
            numberMinMax: function (e) {
              return i("div.mc4wp-row", [
                i("div.mc4wp-col.mc4wp-col-3", [
                  i("label", r.min),
                  i("input", {
                    type: "number",
                    onchange: function (t) {
                      e.min = t.target.value;
                    },
                  }),
                ]),
                i("div.mc4wp-col.mc4wp-col-3", [
                  i("label", r.max),
                  i("input", {
                    type: "number",
                    onchange: function (t) {
                      e.max = t.target.value;
                    },
                  }),
                ]),
              ]);
            },
            isRequired: function (e) {
              var t,
                n = {
                  type: "checkbox",
                  checked: e.required,
                  onchange: function (t) {
                    e.required = t.target.checked;
                  },
                };
              return (
                e.forceRequired &&
                  ((n.required = !0),
                  (n.disabled = !0),
                  (t = i("p.description", r.forceRequired))),
                i("div", [
                  i("label.cb-wrap", [i("input", n), r.isFieldRequired]),
                  t,
                ])
              );
            },
            placeholder: function (e) {
              return i("div", [
                i("label", [
                  r.placeholder,
                  " ",
                  i(
                    "small",
                    { style: "float: right; font-weight: normal;" },
                    r.optional
                  ),
                ]),
                i("input.widefat", {
                  type: "text",
                  value: e.placeholder,
                  onchange: function (t) {
                    e.placeholder = t.target.value;
                  },
                  placeholder: "",
                }),
                i("p.description", r.placeholderHelp),
              ]);
            },
            useParagraphs: function (e) {
              return i("div", [
                i("label.cb-wrap", [
                  i("input", {
                    type: "checkbox",
                    checked: e.wrap,
                    onchange: function (t) {
                      e.wrap = t.target.checked;
                    },
                  }),
                  r.wrapInParagraphTags,
                ]),
              ]);
            },
            choiceType: function (e) {
              var t = [
                i(
                  "option",
                  {
                    value: "select",
                    selected: "select" === e.type && "selected",
                  },
                  r.dropdown
                ),
                i(
                  "option",
                  {
                    value: "radio",
                    selected: "radio" === e.type && "selected",
                  },
                  r.radioButtons
                ),
              ];
              return (
                e.acceptsMultipleValues &&
                  t.push(
                    i(
                      "option",
                      {
                        value: "checkbox",
                        selected: "checkbox" === e.type && "selected",
                      },
                      r.checkboxes
                    )
                  ),
                i("div", [
                  i("label", r.choiceType),
                  i(
                    "select",
                    {
                      value: e.type,
                      onchange: function (t) {
                        e.type = t.target.value;
                      },
                    },
                    t
                  ),
                ])
              );
            },
            choices: function (e) {
              var t = [];
              return (
                t.push(
                  i("div", [
                    i("label", r.choices),
                    i("div.limit-height", [
                      i(
                        "table",
                        e.choices.map(function (t, n) {
                          return i("tr", { "data-id": n }, [
                            i(
                              "td.cb",
                              i("input", {
                                name: "selected",
                                type:
                                  "checkbox" === e.type ? "checkbox" : "radio",
                                onchange: function (t) {
                                  e.choices = e.choices.map(function (n) {
                                    return (
                                      n.value === t.target.value
                                        ? (n.selected = !n.selected)
                                        : "checkbox" !== e.type &&
                                          (n.selected = !1),
                                      n
                                    );
                                  });
                                },
                                checked: t.selected,
                                value: t.value,
                                title: r.preselect,
                              })
                            ),
                            i(
                              "td.stretch",
                              i("input.widefat", {
                                type: "text",
                                value: t.label,
                                placeholder: t.title,
                                onchange: function (e) {
                                  t.label = e.target.value;
                                },
                              })
                            ),
                            i(
                              "td",
                              i(
                                "span",
                                {
                                  title: r.remove,
                                  class:
                                    "dashicons dashicons-no-alt hover-activated",
                                  onclick: function (e) {
                                    this.choices.splice(e, 1);
                                  }.bind(e, n),
                                },
                                ""
                              )
                            ),
                          ]);
                        })
                      ),
                    ]),
                  ])
                ),
                t
              );
            },
            linkToTerms: function (e) {
              return i("div", [
                i("label", r.agreeToTermsLink),
                i("input.widefat", {
                  type: "text",
                  value: e.link,
                  onchange: function (t) {
                    e.link = t.target.value;
                  },
                  placeholder: "https://...",
                }),
              ]);
            },
          };
        e.exports = o;
      },
      5425: (e, t, n) => {
        var r = {},
          i = n(8342),
          o = n(865);
        function a(e) {
          return e.map(function (e) {
            return o("div.mc4wp-margin-s", e);
          });
        }
        (r.render = function (e) {
          var t = e.type;
          return "function" == typeof r[t]
            ? a(r[t](e))
            : ["select", "radio", "checkbox"].indexOf(t) > -1
            ? a(r.choice(e))
            : a(r.text(e));
        }),
          (r.text = function (e) {
            return [
              i.label(e),
              i.placeholder(e),
              i.value(e),
              i.isRequired(e),
              i.useParagraphs(e),
            ];
          }),
          (r.choice = function (e) {
            var t = [i.label(e), i.choiceType(e), i.choices(e)];
            return (
              "select" === e.type && t.push(i.placeholder(e)),
              t.push(i.useParagraphs(e)),
              ("select" !== e.type && "radio" !== e.type) ||
                t.push(i.isRequired(e)),
              t
            );
          }),
          (r.hidden = function (e) {
            return (
              (e.placeholder = ""),
              (e.label = ""),
              (e.wrap = !1),
              [i.showType(e), i.value(e)]
            );
          }),
          (r.submit = function (e) {
            return (
              (e.label = ""),
              (e.placeholder = ""),
              [i.value(e), i.useParagraphs(e)]
            );
          }),
          (r["terms-checkbox"] = function (e) {
            return [
              i.label(e),
              i.linkToTerms(e),
              i.isRequired(e),
              i.useParagraphs(e),
            ];
          }),
          (r.number = function (e) {
            return [r.text(e), i.numberMinMax(e)];
          }),
          (e.exports = r);
      },
      5756: (e, t, n) => {
        var r = n(347),
          i = n(865),
          o = function (e) {
            e.dom.checked && e.dom.setAttribute("checked", "true"),
              e.dom.value && e.dom.setAttribute("value", e.dom.value),
              e.dom.selected && e.dom.setAttribute("selected", "true");
          },
          a = {
            select: function (e) {
              var t = { name: e.name, required: e.required },
                n = !1,
                r = e.choices.map(function (e) {
                  return (
                    e.selected && (n = !0),
                    i(
                      "option",
                      {
                        value: e.value !== e.label ? e.value : void 0,
                        selected: e.selected,
                        oncreate: o,
                      },
                      e.label
                    )
                  );
                }),
                a = e.placeholder;
              return (
                a.length > 0 &&
                  r.unshift(
                    i(
                      "option",
                      { disabled: !0, value: "", selected: !n, oncreate: o },
                      a
                    )
                  ),
                i("select", t, r)
              );
            },
            "terms-checkbox": function (e) {
              var t;
              return (
                (t =
                  e.link.length > 0
                    ? i("a", { href: e.link, target: "_blank" }, e.label)
                    : e.label),
                i("label", [
                  i("input", {
                    name: e.name,
                    type: "checkbox",
                    value: e.value,
                    required: e.required,
                  }),
                  " ",
                  t,
                ])
              );
            },
            checkbox: function (e) {
              return e.choices.map(function (t) {
                var n = e.name + ("checkbox" === e.type ? "[]" : ""),
                  r = e.required && "radio" === e.type;
                return i("label", [
                  i("input", {
                    name: n,
                    type: e.type,
                    value: t.value,
                    checked: t.selected,
                    required: r,
                    oncreate: o,
                  }),
                  " ",
                  i("span", t.label),
                ]);
              });
            },
          };
        (a.radio = a.checkbox),
          (a.default = function (e) {
            var t = { type: e.type };
            return (
              e.name && (t.name = e.name),
              e.min && (t.min = e.min),
              e.max && (t.max = e.max),
              e.value.length > 0 && (t.value = e.value),
              e.placeholder.length > 0 && (t.placeholder = e.placeholder),
              (t.required = e.required),
              (t.oncreate = o),
              i("input", t)
            );
          }),
          (e.exports = function (e) {
            var t =
                e.label.length > 0 && e.showLabel
                  ? i("label", {}, e.label)
                  : "",
              n = "function" == typeof a[e.type] ? a[e.type](e) : a.default(e),
              o = e.wrap ? i("p", [t, n]) : [t, n],
              l = document.createElement("div");
            return i.render(l, o), r.prettyPrint(l.innerHTML) + "\n";
          });
      },
      5726: (e, t, n) => {
        var r,
          i = n(865),
          o = n(7462),
          a = n(146),
          l = window.mc4wp_forms_i18n,
          s = n(5756),
          c = n(6883),
          u = n(5425);
        function d(e) {
          (r = null !== e ? a.get(e) : null) &&
            "hidden" === r.type &&
            r.choices.length > 0 &&
            (r.value = r.choices
              .map(function (e) {
                return e.label;
              })
              .join("|")),
            i.redraw();
        }
        function f() {
          var e = s(r);
          o.insert(e), d(null);
        }
        o.on("blur", i.redraw);
        var h = document.getElementById("mc4wp-field-wizard");
        h &&
          i.mount(h, {
            view: function () {
              var e = a.getAll(),
                t = i("div#mc4wp-available-fields.mc4wp-margin-s", [
                  i("h4", { style: { marginTop: 0 } }, l.chooseField),
                  [l.listFields, l.interestCategories, l.formFields].map(
                    function (t) {
                      var n = e.filter(function (e) {
                        return e.category === t;
                      });
                      return 0 === n.length
                        ? ""
                        : i("div.mc4wp-margin-s", [
                            i("h4", t),
                            n.map(function (e) {
                              var t = "button";
                              e.forceRequired && (t += " is-required");
                              var n = e.inFormContent;
                              return (
                                null !== n &&
                                  (t += " " + (n ? "in-form" : "not-in-form")),
                                i(
                                  "button",
                                  {
                                    className: t,
                                    type: "button",
                                    onclick: function (e) {
                                      return d(e.target.value);
                                    },
                                    value: e.name,
                                  },
                                  e.title
                                )
                              );
                            }),
                          ]);
                    }
                  ),
                ]),
                n = null;
              return (
                r &&
                  (n = i(
                    c,
                    {
                      onClose: function () {
                        return d(null);
                      },
                    },
                    i("div#mc4wp-add-form-field", [
                      i("h3", [
                        r.title,
                        r.forceRequired ? i("span.mc4wp-red", "*") : "",
                        r.name.length ? i("code", r.name) : "",
                      ]),
                      r.help.length ? i("p", i.trust(r.help)) : "",
                      u.render(r),
                      i("p", [
                        i(
                          "button",
                          {
                            class: "button-primary",
                            type: "button",
                            onkeydown: function (e) {
                              13 === e.keyCode && f();
                            },
                            onclick: f,
                          },
                          l.addToForm
                        ),
                      ]),
                    ])
                  )),
                [t, n]
              );
            },
          });
      },
      3024: (e, t, n) => {
        var r = n(865),
          i = n(146),
          o = window.mc4wp.settings,
          a = window.mc4wp_vars.ajaxurl,
          l = window.mc4wp_forms_i18n,
          s = window.mc4wp_vars.mailchimp,
          c = window.mc4wp_vars.countries,
          u = [];
        function d(e, t, n) {
          var r = i.register(e, t);
          n || u.push(r);
        }
        function f(e) {
          var t = {
            phone: "tel",
            dropdown: "select",
            checkboxes: "checkbox",
            birthday: "text",
          };
          return void 0 !== t[e] ? t[e] : e;
        }
        function h(e) {
          var t = l.listFields,
            n = f(e.type),
            r = {
              name: e.tag,
              title: e.name,
              required: e.required,
              forceRequired: e.required,
              type: n,
              choices: e.options.choices,
              acceptsMultipleValues: !1,
            };
          return (
            "address" !== r.type
              ? d(t, r, !1)
              : (d(
                  t,
                  {
                    name: r.name + "[addr1]",
                    type: "text",
                    mailchimpType: "address",
                    title: l.streetAddress,
                  },
                  !1
                ),
                d(
                  t,
                  {
                    name: r.name + "[city]",
                    type: "text",
                    mailchimpType: "address",
                    title: l.city,
                  },
                  !1
                ),
                d(
                  t,
                  {
                    name: r.name + "[state]",
                    type: "text",
                    mailchimpType: "address",
                    title: l.state,
                  },
                  !1
                ),
                d(
                  t,
                  {
                    name: r.name + "[zip]",
                    type: "text",
                    mailchimpType: "address",
                    title: l.zip,
                  },
                  !1
                ),
                d(
                  t,
                  {
                    name: r.name + "[country]",
                    type: "select",
                    mailchimpType: "address",
                    title: l.country,
                    choices: c,
                  },
                  !1
                )),
            !0
          );
        }
        function p(e) {
          var t = f(e.type),
            n = {
              title: e.title,
              name: "INTERESTS[" + e.id + "]",
              type: t,
              choices: e.interests,
              acceptsMultipleValues: "checkbox" === t,
            };
          d(l.interestCategories, n, !1);
        }
        function m(e) {
          (e.merge_fields = e.merge_fields.sort(function (e, t) {
            return "EMAIL" === e.tag || (e.public && !t.public)
              ? -1
              : !e.public && t.public
              ? 1
              : 0;
          })),
            e.merge_fields.forEach(h),
            e.interest_categories.forEach(p),
            r.redraw();
        }
        function g(e) {
          var t =
            a +
            "?action=mc4wp_get_list_details&ids=" +
            e
              .map(function (e) {
                return e.id;
              })
              .join(",");
          r.request({ url: t, method: "GET" }).then(function (e) {
            u.forEach(i.deregister), r.redraw(), e.forEach(m);
          });
        }
        o.on("selectedLists.change", g),
          g(o.getSelectedLists()),
          (function (e) {
            var t;
            for (var n in (d(
              l.listFields,
              {
                name: "EMAIL",
                title: l.emailAddress,
                required: !0,
                forceRequired: !0,
                type: "email",
              },
              !0
            ),
            d(
              l.formFields,
              {
                name: "",
                value: l.subscribe,
                type: "submit",
                title: l.submitButton,
              },
              !0
            ),
            (t = {}),
            e))
              t[e[n].id] = e[n].name;
            d(
              l.formFields,
              {
                name: "_mc4wp_lists",
                type: "checkbox",
                title: l.listChoice,
                choices: t,
                help: l.listChoiceDescription,
                acceptsMultipleValues: !0,
              },
              !0
            ),
              (t = { subscribe: "Subscribe", unsubscribe: "Unsubscribe" }),
              d(
                l.formFields,
                {
                  name: "_mc4wp_action",
                  type: "radio",
                  title: l.formAction,
                  choices: t,
                  value: "subscribe",
                  help: l.formActionDescription,
                },
                !0
              ),
              d(
                l.formFields,
                {
                  name: "AGREE_TO_TERMS",
                  value: 1,
                  type: "terms-checkbox",
                  label: l.agreeToTerms,
                  title: l.agreeToTermsShort,
                  showLabel: !1,
                  required: !0,
                },
                !0
              );
          })(s.lists);
      },
      146: (e) => {
        var t = {},
          n = {};
        function r(e) {
          return {
            name: e.name,
            title: e.title || e.name,
            type: e.type,
            mailchimpType: e.mailchimpType || null,
            label: e.label || e.title || "",
            showLabel: "boolean" != typeof e.showLabel || e.showLabel,
            value: e.value || "",
            placeholder: e.placeholder || "",
            required: "boolean" == typeof e.required && e.required,
            forceRequired:
              "boolean" == typeof e.forceRequired && e.forceRequired,
            wrap: "boolean" != typeof e.wrap || e.wrap,
            min: e.min,
            max: e.max,
            help: e.help || "",
            choices: e.choices || [],
            inFormContent: null,
            acceptsMultipleValues: e.acceptsMultipleValues,
            link: e.link || "",
          };
        }
        function i(e) {
          return {
            title: e.title || e.label,
            selected: e.selected || !1,
            value: e.value || e.label,
            label: e.label,
          };
        }
        function o() {
          return Object.values(t);
        }
        e.exports = {
          get: function (e) {
            return t[e];
          },
          getAll: o,
          getAllWhere: function (e, t) {
            return o().filter(function (n) {
              return n[e] === t;
            });
          },
          deregister: function (e) {
            delete t[e.name];
          },
          register: function (e, o) {
            var a = t[o.name];
            if (a)
              return (
                !a.forceRequired && o.forceRequired && (a.forceRequired = !0), a
              );
            o.choices &&
              ((o.choices = (function (e) {
                return "function" == typeof e.map
                  ? e.map(function (e) {
                      return new i({ label: e });
                    })
                  : Object.keys(e).map(function (t) {
                      return new i({ label: e[t], value: t });
                    });
              })(o.choices)),
              o.value &&
                (o.choices = o.choices.map(function (e) {
                  return e.value === o.value && (e.selected = !0), e;
                })));
            var l = new r(o);
            return (
              (l.category = e),
              (t[o.name] = l),
              (n["change"] = n.change || []),
              n.change.forEach(function (e) {
                return e.apply(null, undefined);
              }),
              l
            );
          },
          on: function (e, t) {
            (n[e] = n[e] || []), n[e].push(t);
          },
        };
      },
      7462: (e, t, n) => {
        var r = n(4631);
        n(9589),
          n(6876),
          n(6629),
          n(6531),
          n(4786),
          n(908),
          n(7341),
          n(17),
          n(4328);
        var i,
          o,
          a = {},
          l = document.createElement("form"),
          s = !1,
          c = document.getElementById("mc4wp-form-content"),
          u = document.getElementById("mc4wp-form-preview"),
          d = /\{[^{}]+\}/g;
        function f() {
          var e = u.contentDocument || u.contentWindow.document;
          (o = e.querySelector(".mc4wp-form-fields")) && h();
        }
        function h() {
          if (!o) return f();
          var e = a.getValue();
          (e = e.replace(d, "").replace(d, "")),
            (o.innerHTML = e),
            o.dispatchEvent(new Event("mc4wp-refresh"));
        }
        function p() {
          return s && ((l.innerHTML = a.getValue().toLowerCase()), (s = !1)), l;
        }
        (a.getValue = function () {
          return i ? i.getValue() : c.value;
        }),
          (a.query = function (e) {
            return p().querySelectorAll(e.toLowerCase());
          }),
          (a.containsField = function (e) {
            return null !== p().elements.namedItem(e.toLowerCase());
          }),
          (a.insert = function (e) {
            i ? (i.replaceSelection(e), i.focus()) : (c.value += e);
          }),
          (a.on = function (e, t) {
            return i
              ? ((e = "input" === e ? "changes" : e), i.on(e, t))
              : c.addEventListener(e, t);
          }),
          (a.refresh = function () {
            i && i.refresh();
          }),
          c &&
            (window.addEventListener("load", function () {
              r.signal(i, "change");
            }),
            c.addEventListener("change", function () {
              (s = !0), h();
            }),
            (l.innerHTML = c.value.toLowerCase()),
            r &&
              ((i = r.fromTextArea(c, {
                selectionPointer: !0,
                mode: "htmlmixed",
                htmlMode: !0,
                autoCloseTags: !0,
                autoRefresh: !0,
                styleActiveLine: !0,
                matchBrackets: !0,
                matchTags: { bothTags: !0 },
              })),
              window.dispatchEvent &&
                i.on("change", function () {
                  if ("function" == typeof Event) {
                    var e = new Event("change", { bubbles: !0 });
                    c.dispatchEvent(e);
                  }
                }))),
          u && (u.addEventListener("load", f), f.call()),
          (e.exports = a);
      },
      2906: (e, t, n) => {
        var r = n(865),
          i = n(2458),
          o = n(7462),
          a = n(146),
          l = /\[(\w+)\]/g,
          s = /\[\]$/,
          c = document.getElementById("required-fields");
        function u() {
          var e, t;
          a.getAll().forEach(function (e) {
            if (!(e.name.length <= 0)) {
              var t = e.name;
              if (
                ("checkbox" === e.type && (t += "[]"),
                (e.inFormContent = o.containsField(t)),
                "address" === e.mailchimpType)
              ) {
                void 0 === e.originalRequiredValue &&
                  (e.originalRequiredValue = e.forceRequired);
                var n = e.name.replace(l, "");
                o.query('[name^="' + n + '"]').length > 0
                  ? (e.forceRequired = !0)
                  : (e.forceRequired = e.originalRequiredValue);
              }
            }
          }),
            (e = a.getAllWhere("forceRequired", !0).map(function (e) {
              return e.name.toUpperCase().replace(l, ".$1");
            })),
            (t = o.query("[required]")),
            [].forEach.call(t, function (t) {
              var n = t.name;
              if (n && !(n.length < 0) && "_" !== n[0]) {
                var r = (n = (n = n.replace(l, ".$1")).replace(s, "")).indexOf(
                  "."
                );
                (r = r > 0 ? r : n.length),
                  (n = n.substr(0, r).toUpperCase() + n.substr(r)),
                  -1 === e.indexOf(n) && e.push(n);
              }
            }),
            (c.value = e.join(",")),
            r.redraw();
        }
        o.on("change", i.debounce(u, 600)), a.on("change", i.debounce(u, 600));
      },
      2458: (e) => {
        e.exports = {
          debounce: function (e, t, n) {
            var r;
            return function () {
              var i = this,
                o = arguments,
                a = n && !r;
              clearTimeout(r),
                (r = setTimeout(function () {
                  (r = null), n || e.apply(i, o);
                }, t)),
                a && e.apply(i, o);
            };
          },
        };
      },
      9661: (e, t, n) => {
        var r = n(7462),
          i = n(146),
          o = n(907),
          a = {};
        function l(e, t) {
          (a[e] = t), c();
        }
        function s(e) {
          delete a[e], c();
        }
        function c() {
          var e = "";
          for (var t in a)
            e +=
              '<div class="notice notice-warning inline"><p>' +
              a[t] +
              "</p></div>";
          var n = document.querySelector(".mc4wp-notices");
          if (!n) {
            (n = document.createElement("div")).className = "mc4wp-notices";
            var r = document.querySelector("h1, h2");
            r.parentNode.insertBefore(n, r.nextSibling);
          }
          n.innerHTML = e;
        }
        var u = function () {
            r.getValue().toLowerCase().indexOf('name="groupings') > -1
              ? l(
                  "deprecated_groupings",
                  "Your form contains deprecated <code>GROUPINGS</code> fields. <br /><br />Please remove these fields from your form and then re-add them through the available field buttons to make sure your data is getting through to Mailchimp correctly."
                )
              : s("deprecated_groupings");
          },
          d = function () {
            var e = i.getAllWhere("forceRequired", !0).filter(function (e) {
                return !r.containsField(e.name.toUpperCase());
              }),
              t =
                "<strong>Heads up!</strong> Your form is missing list fields that are required in Mailchimp. Either add these fields to your form or mark them as optional in Mailchimp.";
            (t +=
              '<br /><ul class="ul-square" style="margin-bottom: 0;"><li>' +
              e
                .map(function (e) {
                  return e.title;
                })
                .join("</li><li>") +
              "</li></ul>"),
              e.length > 0
                ? l("required_fields_missing", t)
                : s("required_fields_missing");
          };
        u(),
          r.on("focus", u),
          r.on("blur", u),
          d(),
          r.on("blur", d),
          r.on("focus", d),
          document.body.addEventListener("change", function () {
            o.getSelectedLists().length > 0
              ? s("no_lists_selected")
              : l(
                  "no_lists_selected",
                  '<strong>Heads up!</strong> You have not yet selected a Mailchimp list to subscribe people to. Please select at least one list from the <a href="javascript:void(0)" data-tab="settings" class="tab-link">settings tab</a>.'
                );
          });
      },
      6883: (e, t, n) => {
        var r = n(865),
          i = window.mc4wp_forms_i18n;
        e.exports = function (e) {
          var t,
            n = e.attrs.onClose;
          function o() {
            n.apply(null);
          }
          function a(e) {
            27 === e.keyCode && o(), 13 === e.keyCode && e.preventDefault();
          }
          function l() {
            var e =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
              n =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
              r = (e - t.clientWidth - 40) / 2,
              i = (n - t.clientHeight - 40) / 2;
            (t.style.left = (r > 0 ? r : 0) + "px"),
              (t.style.top = (i > 0 ? i : 0) + "px");
          }
          return {
            oncreate: function () {
              document.addEventListener("keydown", a),
                window.addEventListener("resize", l);
            },
            onremove: function () {
              document.removeEventListener("keydown", a),
                window.removeEventListener("resize", l);
            },
            view: function (e) {
              return [
                r(
                  "div.mc4wp-overlay-wrap",
                  r(
                    "div.mc4wp-overlay",
                    {
                      oncreate: function (e) {
                        (t = e.dom), l();
                      },
                    },
                    [
                      r("span", {
                        class: "close dashicons dashicons-no",
                        title: i.close,
                        onclick: o,
                      }),
                      e.children,
                    ]
                  )
                ),
                r("div.mc4wp-overlay-background", {
                  title: i.close,
                  onclick: o,
                }),
              ];
            },
          };
        };
      },
      907: (e) => {
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var n = document
            .getElementById("mc4wp-admin")
            .querySelectorAll(".mc4wp-list-input"),
          r = window.mc4wp_vars.mailchimp.lists,
          i = [],
          o = {};
        function a() {
          var e, a, l;
          return (
            (i = []),
            [].forEach.call(n, function (e) {
              ("boolean" != typeof e.checked || e.checked) &&
                "object" === t(r[e.value]) &&
                i.push(r[e.value]);
            }),
            (e = document.querySelectorAll(".lists--only-selected > *")),
            [].forEach.call(e, function (e) {
              var t,
                n = e.getAttribute("data-list-id"),
                r =
                  ("id",
                  (t = n),
                  i.filter(function (e) {
                    return e.id === t;
                  })).length > 0;
              e.style.display = r ? "" : "none";
            }),
            (l = [i]),
            (o[(a = "selectedLists.change")] = o[a] || []),
            o[a].forEach(function (e) {
              return e.apply(null, l);
            }),
            i
          );
        }
        [].forEach.call(n, function (e) {
          e.addEventListener("change", a);
        }),
          a(),
          (e.exports = {
            getSelectedLists: function () {
              return i;
            },
            on: function (e, t) {
              (o[e] = o[e] || []), o[e].push(t);
            },
          });
      },
      7341: (e, t, n) => {
        !(function (e) {
          e.defineOption("autoCloseTags", !1, function (a, l, s) {
            if ((s != e.Init && s && a.removeKeyMap("autoCloseTags"), l)) {
              var c = { name: "autoCloseTags" };
              ("object" == typeof l && !1 === l.whenClosing) ||
                (c["'/'"] = function (t) {
                  return (function (t) {
                    return t.getOption("disableInput") ? e.Pass : r(t, !0);
                  })(t);
                }),
                ("object" == typeof l && !1 === l.whenOpening) ||
                  (c["'>'"] = function (r) {
                    return (function (r) {
                      if (r.getOption("disableInput")) return e.Pass;
                      for (
                        var a = r.listSelections(),
                          l = [],
                          s = r.getOption("autoCloseTags"),
                          c = 0;
                        c < a.length;
                        c++
                      ) {
                        if (!a[c].empty()) return e.Pass;
                        var u = a[c].head,
                          d = r.getTokenAt(u),
                          f = e.innerMode(r.getMode(), d.state),
                          h = f.state,
                          p = f.mode.xmlCurrentTag && f.mode.xmlCurrentTag(h),
                          m = p && p.name;
                        if (!m) return e.Pass;
                        var g = "html" == f.mode.configuration,
                          v =
                            ("object" == typeof s && s.dontCloseTags) ||
                            (g && t),
                          y =
                            ("object" == typeof s && s.indentTags) || (g && n);
                        d.end > u.ch &&
                          (m = m.slice(0, m.length - d.end + u.ch));
                        var b = m.toLowerCase();
                        if (
                          !m ||
                          ("string" == d.type &&
                            (d.end != u.ch ||
                              !/[\"\']/.test(
                                d.string.charAt(d.string.length - 1)
                              ) ||
                              1 == d.string.length)) ||
                          ("tag" == d.type && p.close) ||
                          d.string.indexOf("/") == u.ch - d.start - 1 ||
                          (v && i(v, b) > -1) ||
                          o(
                            r,
                            (f.mode.xmlCurrentContext &&
                              f.mode.xmlCurrentContext(h)) ||
                              [],
                            m,
                            u,
                            !0
                          )
                        )
                          return e.Pass;
                        var w = "object" == typeof s && s.emptyTags;
                        if (w && i(w, m) > -1)
                          l[c] = {
                            text: "/>",
                            newPos: e.Pos(u.line, u.ch + 2),
                          };
                        else {
                          var x = y && i(y, b) > -1;
                          l[c] = {
                            indent: x,
                            text: ">" + (x ? "\n\n" : "") + "</" + m + ">",
                            newPos: x
                              ? e.Pos(u.line + 1, 0)
                              : e.Pos(u.line, u.ch + 1),
                          };
                        }
                      }
                      var k = "object" == typeof s && s.dontIndentOnAutoClose;
                      for (c = a.length - 1; c >= 0; c--) {
                        var C = l[c];
                        r.replaceRange(
                          C.text,
                          a[c].head,
                          a[c].anchor,
                          "+insert"
                        );
                        var S = r.listSelections().slice(0);
                        (S[c] = { head: C.newPos, anchor: C.newPos }),
                          r.setSelections(S),
                          !k &&
                            C.indent &&
                            (r.indentLine(C.newPos.line, null, !0),
                            r.indentLine(C.newPos.line + 1, null, !0));
                      }
                    })(r);
                  }),
                a.addKeyMap(c);
            }
          });
          var t = [
              "area",
              "base",
              "br",
              "col",
              "command",
              "embed",
              "hr",
              "img",
              "input",
              "keygen",
              "link",
              "meta",
              "param",
              "source",
              "track",
              "wbr",
            ],
            n = [
              "applet",
              "blockquote",
              "body",
              "button",
              "div",
              "dl",
              "fieldset",
              "form",
              "frameset",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "head",
              "html",
              "iframe",
              "layer",
              "legend",
              "object",
              "ol",
              "p",
              "select",
              "table",
              "ul",
            ];
          function r(t, n) {
            for (
              var r = t.listSelections(),
                i = [],
                a = n ? "/" : "</",
                l = t.getOption("autoCloseTags"),
                s = "object" == typeof l && l.dontIndentOnSlash,
                c = 0;
              c < r.length;
              c++
            ) {
              if (!r[c].empty()) return e.Pass;
              var u = r[c].head,
                d = t.getTokenAt(u),
                f = e.innerMode(t.getMode(), d.state),
                h = f.state;
              if (
                n &&
                ("string" == d.type ||
                  "<" != d.string.charAt(0) ||
                  d.start != u.ch - 1)
              )
                return e.Pass;
              var p,
                m = "xml" != f.mode.name && "htmlmixed" == t.getMode().name;
              if (m && "javascript" == f.mode.name) p = a + "script";
              else if (m && "css" == f.mode.name) p = a + "style";
              else {
                var g = f.mode.xmlCurrentContext && f.mode.xmlCurrentContext(h),
                  v = g.length ? g[g.length - 1] : "";
                if (!g || (g.length && o(t, g, v, u))) return e.Pass;
                p = a + v;
              }
              ">" != t.getLine(u.line).charAt(d.end) && (p += ">"), (i[c] = p);
            }
            if ((t.replaceSelections(i), (r = t.listSelections()), !s))
              for (c = 0; c < r.length; c++)
                (c == r.length - 1 || r[c].head.line < r[c + 1].head.line) &&
                  t.indentLine(r[c].head.line);
          }
          function i(e, t) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = 0, r = e.length; n < r; ++n) if (e[n] == t) return n;
            return -1;
          }
          function o(t, n, r, i, o) {
            if (!e.scanForClosingTag) return !1;
            var a = Math.min(t.lastLine() + 1, i.line + 500),
              l = e.scanForClosingTag(t, i, null, a);
            if (!l || l.tag != r) return !1;
            for (var s = o ? 1 : 0, c = n.length - 1; c >= 0 && n[c] == r; c--)
              ++s;
            for (i = l.to, c = 1; c < s; c++) {
              var u = e.scanForClosingTag(t, i, null, a);
              if (!u || u.tag != r) return !1;
              i = u.to;
            }
            return !0;
          }
          e.commands.closeTag = function (e) {
            return r(e);
          };
        })(n(4631), n(4786));
      },
      4328: (e, t, n) => {
        !(function (e) {
          var t =
              /MSIE \d/.test(navigator.userAgent) &&
              (null == document.documentMode || document.documentMode < 8),
            n = e.Pos,
            r = {
              "(": ")>",
              ")": "(<",
              "[": "]>",
              "]": "[<",
              "{": "}>",
              "}": "{<",
              "<": ">>",
              ">": "<<",
            };
          function i(e) {
            return (e && e.bracketRegex) || /[(){}[\]]/;
          }
          function o(e, t, o) {
            var l = e.getLineHandle(t.line),
              s = t.ch - 1,
              c = o && o.afterCursor;
            null == c &&
              (c = /(^| )cm-fat-cursor($| )/.test(
                e.getWrapperElement().className
              ));
            var u = i(o),
              d =
                (!c &&
                  s >= 0 &&
                  u.test(l.text.charAt(s)) &&
                  r[l.text.charAt(s)]) ||
                (u.test(l.text.charAt(s + 1)) && r[l.text.charAt(++s)]);
            if (!d) return null;
            var f = ">" == d.charAt(1) ? 1 : -1;
            if (o && o.strict && f > 0 != (s == t.ch)) return null;
            var h = e.getTokenTypeAt(n(t.line, s + 1)),
              p = a(e, n(t.line, s + (f > 0 ? 1 : 0)), f, h, o);
            return null == p
              ? null
              : {
                  from: n(t.line, s),
                  to: p && p.pos,
                  match: p && p.ch == d.charAt(0),
                  forward: f > 0,
                };
          }
          function a(e, t, o, a, l) {
            for (
              var s = (l && l.maxScanLineLength) || 1e4,
                c = (l && l.maxScanLines) || 1e3,
                u = [],
                d = i(l),
                f =
                  o > 0
                    ? Math.min(t.line + c, e.lastLine() + 1)
                    : Math.max(e.firstLine() - 1, t.line - c),
                h = t.line;
              h != f;
              h += o
            ) {
              var p = e.getLine(h);
              if (p) {
                var m = o > 0 ? 0 : p.length - 1,
                  g = o > 0 ? p.length : -1;
                if (!(p.length > s))
                  for (
                    h == t.line && (m = t.ch - (o < 0 ? 1 : 0));
                    m != g;
                    m += o
                  ) {
                    var v = p.charAt(m);
                    if (
                      d.test(v) &&
                      (void 0 === a ||
                        (e.getTokenTypeAt(n(h, m + 1)) || "") == (a || ""))
                    ) {
                      var y = r[v];
                      if (y && (">" == y.charAt(1)) == o > 0) u.push(v);
                      else {
                        if (!u.length) return { pos: n(h, m), ch: v };
                        u.pop();
                      }
                    }
                  }
              }
            }
            return h - o != (o > 0 ? e.lastLine() : e.firstLine()) && null;
          }
          function l(e, r, i) {
            for (
              var a = e.state.matchBrackets.maxHighlightLineLength || 1e3,
                l = i && i.highlightNonMatching,
                s = [],
                c = e.listSelections(),
                u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u].empty() && o(e, c[u].head, i);
              if (
                d &&
                (d.match || !1 !== l) &&
                e.getLine(d.from.line).length <= a
              ) {
                var f = d.match
                  ? "CodeMirror-matchingbracket"
                  : "CodeMirror-nonmatchingbracket";
                s.push(
                  e.markText(d.from, n(d.from.line, d.from.ch + 1), {
                    className: f,
                  })
                ),
                  d.to &&
                    e.getLine(d.to.line).length <= a &&
                    s.push(
                      e.markText(d.to, n(d.to.line, d.to.ch + 1), {
                        className: f,
                      })
                    );
              }
            }
            if (s.length) {
              t && e.state.focused && e.focus();
              var h = function () {
                e.operation(function () {
                  for (var e = 0; e < s.length; e++) s[e].clear();
                });
              };
              if (!r) return h;
              setTimeout(h, 800);
            }
          }
          function s(e) {
            e.operation(function () {
              e.state.matchBrackets.currentlyHighlighted &&
                (e.state.matchBrackets.currentlyHighlighted(),
                (e.state.matchBrackets.currentlyHighlighted = null)),
                (e.state.matchBrackets.currentlyHighlighted = l(
                  e,
                  !1,
                  e.state.matchBrackets
                ));
            });
          }
          function c(e) {
            e.state.matchBrackets &&
              e.state.matchBrackets.currentlyHighlighted &&
              (e.state.matchBrackets.currentlyHighlighted(),
              (e.state.matchBrackets.currentlyHighlighted = null));
          }
          e.defineOption("matchBrackets", !1, function (t, n, r) {
            r &&
              r != e.Init &&
              (t.off("cursorActivity", s),
              t.off("focus", s),
              t.off("blur", c),
              c(t)),
              n &&
                ((t.state.matchBrackets = "object" == typeof n ? n : {}),
                t.on("cursorActivity", s),
                t.on("focus", s),
                t.on("blur", c));
          }),
            e.defineExtension("matchBrackets", function () {
              l(this, !0);
            }),
            e.defineExtension("findMatchingBracket", function (e, t, n) {
              return (
                (n || "boolean" == typeof t) &&
                  (n
                    ? ((n.strict = t), (t = n))
                    : (t = t ? { strict: !0 } : null)),
                o(this, e, t)
              );
            }),
            e.defineExtension("scanForBracket", function (e, t, n, r) {
              return a(this, e, t, n, r);
            });
        })(n(4631));
      },
      908: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e) {
            e.state.tagHit && e.state.tagHit.clear(),
              e.state.tagOther && e.state.tagOther.clear(),
              (e.state.tagHit = e.state.tagOther = null);
          }
          function n(n) {
            (n.state.failedTagMatch = !1),
              n.operation(function () {
                if ((t(n), !n.somethingSelected())) {
                  var r = n.getCursor(),
                    i = n.getViewport();
                  (i.from = Math.min(i.from, r.line)),
                    (i.to = Math.max(r.line + 1, i.to));
                  var o = e.findMatchingTag(n, r, i);
                  if (o) {
                    if (n.state.matchBothTags) {
                      var a = "open" == o.at ? o.open : o.close;
                      a &&
                        (n.state.tagHit = n.markText(a.from, a.to, {
                          className: "CodeMirror-matchingtag",
                        }));
                    }
                    var l = "close" == o.at ? o.open : o.close;
                    l
                      ? (n.state.tagOther = n.markText(l.from, l.to, {
                          className: "CodeMirror-matchingtag",
                        }))
                      : (n.state.failedTagMatch = !0);
                  }
                }
              });
          }
          function r(e) {
            e.state.failedTagMatch && n(e);
          }
          e.defineOption("matchTags", !1, function (i, o, a) {
            a &&
              a != e.Init &&
              (i.off("cursorActivity", n), i.off("viewportChange", r), t(i)),
              o &&
                ((i.state.matchBothTags = "object" == typeof o && o.bothTags),
                i.on("cursorActivity", n),
                i.on("viewportChange", r),
                n(i));
          }),
            (e.commands.toMatchingTag = function (t) {
              var n = e.findMatchingTag(t, t.getCursor());
              if (n) {
                var r = "close" == n.at ? n.open : n.close;
                r && t.extendSelection(r.to, r.from);
              }
            });
        })(n(4631), n(4786));
      },
      4786: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t = e.Pos;
          function n(e, t) {
            return e.line - t.line || e.ch - t.ch;
          }
          var r =
              "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            i = new RegExp(
              "<(/?)([" +
                r +
                "][" +
                r +
                "-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*)",
              "g"
            );
          function o(e, t, n, r) {
            (this.line = t),
              (this.ch = n),
              (this.cm = e),
              (this.text = e.getLine(t)),
              (this.min = r ? Math.max(r.from, e.firstLine()) : e.firstLine()),
              (this.max = r ? Math.min(r.to - 1, e.lastLine()) : e.lastLine());
          }
          function a(e, n) {
            var r = e.cm.getTokenTypeAt(t(e.line, n));
            return r && /\btag\b/.test(r);
          }
          function l(e) {
            if (!(e.line >= e.max))
              return (e.ch = 0), (e.text = e.cm.getLine(++e.line)), !0;
          }
          function s(e) {
            if (!(e.line <= e.min))
              return (
                (e.text = e.cm.getLine(--e.line)), (e.ch = e.text.length), !0
              );
          }
          function c(e) {
            for (;;) {
              var t = e.text.indexOf(">", e.ch);
              if (-1 == t) {
                if (l(e)) continue;
                return;
              }
              if (a(e, t + 1)) {
                var n = e.text.lastIndexOf("/", t),
                  r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
                return (e.ch = t + 1), r ? "selfClose" : "regular";
              }
              e.ch = t + 1;
            }
          }
          function u(e) {
            for (;;) {
              var t = e.ch ? e.text.lastIndexOf("<", e.ch - 1) : -1;
              if (-1 == t) {
                if (s(e)) continue;
                return;
              }
              if (a(e, t + 1)) {
                (i.lastIndex = t), (e.ch = t);
                var n = i.exec(e.text);
                if (n && n.index == t) return n;
              } else e.ch = t;
            }
          }
          function d(e) {
            for (;;) {
              i.lastIndex = e.ch;
              var t = i.exec(e.text);
              if (!t) {
                if (l(e)) continue;
                return;
              }
              if (a(e, t.index + 1)) return (e.ch = t.index + t[0].length), t;
              e.ch = t.index + 1;
            }
          }
          function f(e) {
            for (;;) {
              var t = e.ch ? e.text.lastIndexOf(">", e.ch - 1) : -1;
              if (-1 == t) {
                if (s(e)) continue;
                return;
              }
              if (a(e, t + 1)) {
                var n = e.text.lastIndexOf("/", t),
                  r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
                return (e.ch = t + 1), r ? "selfClose" : "regular";
              }
              e.ch = t;
            }
          }
          function h(e, n) {
            for (var r = []; ; ) {
              var i,
                o = d(e),
                a = e.line,
                l = e.ch - (o ? o[0].length : 0);
              if (!o || !(i = c(e))) return;
              if ("selfClose" != i)
                if (o[1]) {
                  for (var s = r.length - 1; s >= 0; --s)
                    if (r[s] == o[2]) {
                      r.length = s;
                      break;
                    }
                  if (s < 0 && (!n || n == o[2]))
                    return { tag: o[2], from: t(a, l), to: t(e.line, e.ch) };
                } else r.push(o[2]);
            }
          }
          function p(e, n) {
            for (var r = []; ; ) {
              var i = f(e);
              if (!i) return;
              if ("selfClose" != i) {
                var o = e.line,
                  a = e.ch,
                  l = u(e);
                if (!l) return;
                if (l[1]) r.push(l[2]);
                else {
                  for (var s = r.length - 1; s >= 0; --s)
                    if (r[s] == l[2]) {
                      r.length = s;
                      break;
                    }
                  if (s < 0 && (!n || n == l[2]))
                    return { tag: l[2], from: t(e.line, e.ch), to: t(o, a) };
                }
              } else u(e);
            }
          }
          e.registerHelper("fold", "xml", function (e, r) {
            for (var i = new o(e, r.line, 0); ; ) {
              var a = d(i);
              if (!a || i.line != r.line) return;
              var l = c(i);
              if (!l) return;
              if (!a[1] && "selfClose" != l) {
                var s = t(i.line, i.ch),
                  u = h(i, a[2]);
                return u && n(u.from, s) > 0 ? { from: s, to: u.from } : null;
              }
            }
          }),
            (e.findMatchingTag = function (e, r, i) {
              var a = new o(e, r.line, r.ch, i);
              if (-1 != a.text.indexOf(">") || -1 != a.text.indexOf("<")) {
                var l = c(a),
                  s = l && t(a.line, a.ch),
                  d = l && u(a);
                if (l && d && !(n(a, r) > 0)) {
                  var f = { from: t(a.line, a.ch), to: s, tag: d[2] };
                  return "selfClose" == l
                    ? { open: f, close: null, at: "open" }
                    : d[1]
                    ? { open: p(a, d[2]), close: f, at: "close" }
                    : {
                        open: f,
                        close: h((a = new o(e, s.line, s.ch, i)), d[2]),
                        at: "open",
                      };
                }
              }
            }),
            (e.findEnclosingTag = function (e, t, n, r) {
              for (var i = new o(e, t.line, t.ch, n); ; ) {
                var a = p(i, r);
                if (!a) break;
                var l = h(new o(e, t.line, t.ch, n), a.tag);
                if (l) return { open: a, close: l };
              }
            }),
            (e.scanForClosingTag = function (e, t, n, r) {
              return h(
                new o(e, t.line, t.ch, r ? { from: 0, to: r } : null),
                n
              );
            });
        })(n(4631));
      },
      17: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t = "CodeMirror-activeline",
            n = "CodeMirror-activeline-background",
            r = "CodeMirror-activeline-gutter";
          function i(e) {
            for (var i = 0; i < e.state.activeLines.length; i++)
              e.removeLineClass(e.state.activeLines[i], "wrap", t),
                e.removeLineClass(e.state.activeLines[i], "background", n),
                e.removeLineClass(e.state.activeLines[i], "gutter", r);
          }
          function o(e, o) {
            for (var a = [], l = 0; l < o.length; l++) {
              var s = o[l],
                c = e.getOption("styleActiveLine");
              if (
                "object" == typeof c && c.nonEmpty
                  ? s.anchor.line == s.head.line
                  : s.empty()
              ) {
                var u = e.getLineHandleVisualStart(s.head.line);
                a[a.length - 1] != u && a.push(u);
              }
            }
            (function (e, t) {
              if (e.length != t.length) return !1;
              for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
              return !0;
            })(e.state.activeLines, a) ||
              e.operation(function () {
                i(e);
                for (var o = 0; o < a.length; o++)
                  e.addLineClass(a[o], "wrap", t),
                    e.addLineClass(a[o], "background", n),
                    e.addLineClass(a[o], "gutter", r);
                e.state.activeLines = a;
              });
          }
          function a(e, t) {
            o(e, t.ranges);
          }
          e.defineOption("styleActiveLine", !1, function (t, n, r) {
            var l = r != e.Init && r;
            n != l &&
              (l &&
                (t.off("beforeSelectionChange", a),
                i(t),
                delete t.state.activeLines),
              n &&
                ((t.state.activeLines = []),
                o(t, t.listSelections()),
                t.on("beforeSelectionChange", a)));
          });
        })(n(4631));
      },
      4631: function (e) {
        e.exports = (function () {
          "use strict";
          var e = navigator.userAgent,
            t = navigator.platform,
            n = /gecko\/\d/i.test(e),
            r = /MSIE \d/.test(e),
            i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
            o = /Edge\/(\d+)/.exec(e),
            a = r || i || o,
            l = a && (r ? document.documentMode || 6 : +(o || i)[1]),
            s = !o && /WebKit\//.test(e),
            c = s && /Qt\/\d+\.\d+/.test(e),
            u = !o && /Chrome\//.test(e),
            d = /Opera\//.test(e),
            f = /Apple Computer/.test(navigator.vendor),
            h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
            p = /PhantomJS/.test(e),
            m = f && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
            g = /Android/.test(e),
            v =
              m ||
              g ||
              /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
            y = m || /Mac/.test(t),
            b = /\bCrOS\b/.test(e),
            w = /win/i.test(t),
            x = d && e.match(/Version\/(\d*\.\d*)/);
          x && (x = Number(x[1])), x && x >= 15 && ((d = !1), (s = !0));
          var k = y && (c || (d && (null == x || x < 12.11))),
            C = n || (a && l >= 9);
          function S(e) {
            return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
          }
          var T,
            L = function (e, t) {
              var n = e.className,
                r = S(t).exec(n);
              if (r) {
                var i = n.slice(r.index + r[0].length);
                e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
              }
            };
          function M(e) {
            for (var t = e.childNodes.length; t > 0; --t)
              e.removeChild(e.firstChild);
            return e;
          }
          function A(e, t) {
            return M(e).appendChild(t);
          }
          function N(e, t, n, r) {
            var i = document.createElement(e);
            if (
              (n && (i.className = n),
              r && (i.style.cssText = r),
              "string" == typeof t)
            )
              i.appendChild(document.createTextNode(t));
            else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
            return i;
          }
          function O(e, t, n, r) {
            var i = N(e, t, n, r);
            return i.setAttribute("role", "presentation"), i;
          }
          function E(e, t) {
            if ((3 == t.nodeType && (t = t.parentNode), e.contains))
              return e.contains(t);
            do {
              if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
            } while ((t = t.parentNode));
          }
          function _() {
            var e;
            try {
              e = document.activeElement;
            } catch (t) {
              e = document.body || null;
            }
            for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
              e = e.shadowRoot.activeElement;
            return e;
          }
          function z(e, t) {
            var n = e.className;
            S(t).test(n) || (e.className += (n ? " " : "") + t);
          }
          function P(e, t) {
            for (var n = e.split(" "), r = 0; r < n.length; r++)
              n[r] && !S(n[r]).test(t) && (t += " " + n[r]);
            return t;
          }
          T = document.createRange
            ? function (e, t, n, r) {
                var i = document.createRange();
                return i.setEnd(r || e, n), i.setStart(e, t), i;
              }
            : function (e, t, n) {
                var r = document.body.createTextRange();
                try {
                  r.moveToElementText(e.parentNode);
                } catch (e) {
                  return r;
                }
                return (
                  r.collapse(!0),
                  r.moveEnd("character", n),
                  r.moveStart("character", t),
                  r
                );
              };
          var D = function (e) {
            e.select();
          };
          function I(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return function () {
              return e.apply(null, t);
            };
          }
          function W(e, t, n) {
            for (var r in (t || (t = {}), e))
              !e.hasOwnProperty(r) ||
                (!1 === n && t.hasOwnProperty(r)) ||
                (t[r] = e[r]);
            return t;
          }
          function F(e, t, n, r, i) {
            null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
            for (var o = r || 0, a = i || 0; ; ) {
              var l = e.indexOf("\t", o);
              if (l < 0 || l >= t) return a + (t - o);
              (a += l - o), (a += n - (a % n)), (o = l + 1);
            }
          }
          m
            ? (D = function (e) {
                (e.selectionStart = 0), (e.selectionEnd = e.value.length);
              })
            : a &&
              (D = function (e) {
                try {
                  e.select();
                } catch (e) {}
              });
          var H = function () {
            (this.id = null),
              (this.f = null),
              (this.time = 0),
              (this.handler = I(this.onTimeout, this));
          };
          function R(e, t) {
            for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
            return -1;
          }
          (H.prototype.onTimeout = function (e) {
            (e.id = 0),
              e.time <= +new Date()
                ? e.f()
                : setTimeout(e.handler, e.time - +new Date());
          }),
            (H.prototype.set = function (e, t) {
              this.f = t;
              var n = +new Date() + e;
              (!this.id || n < this.time) &&
                (clearTimeout(this.id),
                (this.id = setTimeout(this.handler, e)),
                (this.time = n));
            });
          var j = {
              toString: function () {
                return "CodeMirror.Pass";
              },
            },
            B = { scroll: !1 },
            q = { origin: "*mouse" },
            U = { origin: "+move" };
          function K(e, t, n) {
            for (var r = 0, i = 0; ; ) {
              var o = e.indexOf("\t", r);
              -1 == o && (o = e.length);
              var a = o - r;
              if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
              if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t))
                return r;
            }
          }
          var V = [""];
          function G(e) {
            for (; V.length <= e; ) V.push($(V) + " ");
            return V[e];
          }
          function $(e) {
            return e[e.length - 1];
          }
          function Y(e, t) {
            for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
            return n;
          }
          function X() {}
          function Z(e, t) {
            var n;
            return (
              Object.create
                ? (n = Object.create(e))
                : ((X.prototype = e), (n = new X())),
              t && W(t, n),
              n
            );
          }
          var J =
            /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
          function Q(e) {
            return (
              /\w/.test(e) ||
              (e > "" && (e.toUpperCase() != e.toLowerCase() || J.test(e)))
            );
          }
          function ee(e, t) {
            return t
              ? !!(t.source.indexOf("\\w") > -1 && Q(e)) || t.test(e)
              : Q(e);
          }
          function te(e) {
            for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
            return !0;
          }
          var ne =
            /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
          function re(e) {
            return e.charCodeAt(0) >= 768 && ne.test(e);
          }
          function ie(e, t, n) {
            for (; (n < 0 ? t > 0 : t < e.length) && re(e.charAt(t)); ) t += n;
            return t;
          }
          function oe(e, t, n) {
            for (var r = t > n ? -1 : 1; ; ) {
              if (t == n) return t;
              var i = (t + n) / 2,
                o = r < 0 ? Math.ceil(i) : Math.floor(i);
              if (o == t) return e(o) ? t : n;
              e(o) ? (n = o) : (t = o + r);
            }
          }
          var ae = null;
          function le(e, t, n) {
            var r;
            ae = null;
            for (var i = 0; i < e.length; ++i) {
              var o = e[i];
              if (o.from < t && o.to > t) return i;
              o.to == t &&
                (o.from != o.to && "before" == n ? (r = i) : (ae = i)),
                o.from == t &&
                  (o.from != o.to && "before" != n ? (r = i) : (ae = i));
            }
            return null != r ? r : ae;
          }
          var se = (function () {
            var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
              t = /[stwN]/,
              n = /[LRr]/,
              r = /[Lb1n]/,
              i = /[1n]/;
            function o(e, t, n) {
              (this.level = e), (this.from = t), (this.to = n);
            }
            return function (a, l) {
              var s,
                c = "ltr" == l ? "L" : "R";
              if (0 == a.length || ("ltr" == l && !e.test(a))) return !1;
              for (var u = a.length, d = [], f = 0; f < u; ++f)
                d.push(
                  (s = a.charCodeAt(f)) <= 247
                    ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(
                        s
                      )
                    : 1424 <= s && s <= 1524
                    ? "R"
                    : 1536 <= s && s <= 1785
                    ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(
                        s - 1536
                      )
                    : 1774 <= s && s <= 2220
                    ? "r"
                    : 8192 <= s && s <= 8203
                    ? "w"
                    : 8204 == s
                    ? "b"
                    : "L"
                );
              for (var h = 0, p = c; h < u; ++h) {
                var m = d[h];
                "m" == m ? (d[h] = p) : (p = m);
              }
              for (var g = 0, v = c; g < u; ++g) {
                var y = d[g];
                "1" == y && "r" == v
                  ? (d[g] = "n")
                  : n.test(y) && ((v = y), "r" == y && (d[g] = "R"));
              }
              for (var b = 1, w = d[0]; b < u - 1; ++b) {
                var x = d[b];
                "+" == x && "1" == w && "1" == d[b + 1]
                  ? (d[b] = "1")
                  : "," != x ||
                    w != d[b + 1] ||
                    ("1" != w && "n" != w) ||
                    (d[b] = w),
                  (w = x);
              }
              for (var k = 0; k < u; ++k) {
                var C = d[k];
                if ("," == C) d[k] = "N";
                else if ("%" == C) {
                  var S = void 0;
                  for (S = k + 1; S < u && "%" == d[S]; ++S);
                  for (
                    var T =
                        (k && "!" == d[k - 1]) || (S < u && "1" == d[S])
                          ? "1"
                          : "N",
                      L = k;
                    L < S;
                    ++L
                  )
                    d[L] = T;
                  k = S - 1;
                }
              }
              for (var M = 0, A = c; M < u; ++M) {
                var N = d[M];
                "L" == A && "1" == N ? (d[M] = "L") : n.test(N) && (A = N);
              }
              for (var O = 0; O < u; ++O)
                if (t.test(d[O])) {
                  var E = void 0;
                  for (E = O + 1; E < u && t.test(d[E]); ++E);
                  for (
                    var _ = "L" == (O ? d[O - 1] : c),
                      z =
                        _ == ("L" == (E < u ? d[E] : c)) ? (_ ? "L" : "R") : c,
                      P = O;
                    P < E;
                    ++P
                  )
                    d[P] = z;
                  O = E - 1;
                }
              for (var D, I = [], W = 0; W < u; )
                if (r.test(d[W])) {
                  var F = W;
                  for (++W; W < u && r.test(d[W]); ++W);
                  I.push(new o(0, F, W));
                } else {
                  var H = W,
                    R = I.length,
                    j = "rtl" == l ? 1 : 0;
                  for (++W; W < u && "L" != d[W]; ++W);
                  for (var B = H; B < W; )
                    if (i.test(d[B])) {
                      H < B && (I.splice(R, 0, new o(1, H, B)), (R += j));
                      var q = B;
                      for (++B; B < W && i.test(d[B]); ++B);
                      I.splice(R, 0, new o(2, q, B)), (R += j), (H = B);
                    } else ++B;
                  H < W && I.splice(R, 0, new o(1, H, W));
                }
              return (
                "ltr" == l &&
                  (1 == I[0].level &&
                    (D = a.match(/^\s+/)) &&
                    ((I[0].from = D[0].length),
                    I.unshift(new o(0, 0, D[0].length))),
                  1 == $(I).level &&
                    (D = a.match(/\s+$/)) &&
                    (($(I).to -= D[0].length),
                    I.push(new o(0, u - D[0].length, u)))),
                "rtl" == l ? I.reverse() : I
              );
            };
          })();
          function ce(e, t) {
            var n = e.order;
            return null == n && (n = e.order = se(e.text, t)), n;
          }
          var ue = [],
            de = function (e, t, n) {
              if (e.addEventListener) e.addEventListener(t, n, !1);
              else if (e.attachEvent) e.attachEvent("on" + t, n);
              else {
                var r = e._handlers || (e._handlers = {});
                r[t] = (r[t] || ue).concat(n);
              }
            };
          function fe(e, t) {
            return (e._handlers && e._handlers[t]) || ue;
          }
          function he(e, t, n) {
            if (e.removeEventListener) e.removeEventListener(t, n, !1);
            else if (e.detachEvent) e.detachEvent("on" + t, n);
            else {
              var r = e._handlers,
                i = r && r[t];
              if (i) {
                var o = R(i, n);
                o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
              }
            }
          }
          function pe(e, t) {
            var n = fe(e, t);
            if (n.length)
              for (
                var r = Array.prototype.slice.call(arguments, 2), i = 0;
                i < n.length;
                ++i
              )
                n[i].apply(null, r);
          }
          function me(e, t, n) {
            return (
              "string" == typeof t &&
                (t = {
                  type: t,
                  preventDefault: function () {
                    this.defaultPrevented = !0;
                  },
                }),
              pe(e, n || t.type, e, t),
              xe(t) || t.codemirrorIgnore
            );
          }
          function ge(e) {
            var t = e._handlers && e._handlers.cursorActivity;
            if (t)
              for (
                var n =
                    e.curOp.cursorActivityHandlers ||
                    (e.curOp.cursorActivityHandlers = []),
                  r = 0;
                r < t.length;
                ++r
              )
                -1 == R(n, t[r]) && n.push(t[r]);
          }
          function ve(e, t) {
            return fe(e, t).length > 0;
          }
          function ye(e) {
            (e.prototype.on = function (e, t) {
              de(this, e, t);
            }),
              (e.prototype.off = function (e, t) {
                he(this, e, t);
              });
          }
          function be(e) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
          }
          function we(e) {
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
          }
          function xe(e) {
            return null != e.defaultPrevented
              ? e.defaultPrevented
              : 0 == e.returnValue;
          }
          function ke(e) {
            be(e), we(e);
          }
          function Ce(e) {
            return e.target || e.srcElement;
          }
          function Se(e) {
            var t = e.which;
            return (
              null == t &&
                (1 & e.button
                  ? (t = 1)
                  : 2 & e.button
                  ? (t = 3)
                  : 4 & e.button && (t = 2)),
              y && e.ctrlKey && 1 == t && (t = 3),
              t
            );
          }
          var Te,
            Le,
            Me = (function () {
              if (a && l < 9) return !1;
              var e = N("div");
              return "draggable" in e || "dragDrop" in e;
            })();
          function Ae(e) {
            if (null == Te) {
              var t = N("span", "​");
              A(e, N("span", [t, document.createTextNode("x")])),
                0 != e.firstChild.offsetHeight &&
                  (Te =
                    t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8));
            }
            var n = Te
              ? N("span", "​")
              : N(
                  "span",
                  " ",
                  null,
                  "display: inline-block; width: 1px; margin-right: -1px"
                );
            return n.setAttribute("cm-text", ""), n;
          }
          function Ne(e) {
            if (null != Le) return Le;
            var t = A(e, document.createTextNode("AخA")),
              n = T(t, 0, 1).getBoundingClientRect(),
              r = T(t, 1, 2).getBoundingClientRect();
            return (
              M(e), !(!n || n.left == n.right) && (Le = r.right - n.right < 3)
            );
          }
          var Oe,
            Ee =
              3 != "\n\nb".split(/\n/).length
                ? function (e) {
                    for (var t = 0, n = [], r = e.length; t <= r; ) {
                      var i = e.indexOf("\n", t);
                      -1 == i && (i = e.length);
                      var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                        a = o.indexOf("\r");
                      -1 != a
                        ? (n.push(o.slice(0, a)), (t += a + 1))
                        : (n.push(o), (t = i + 1));
                    }
                    return n;
                  }
                : function (e) {
                    return e.split(/\r\n?|\n/);
                  },
            _e = window.getSelection
              ? function (e) {
                  try {
                    return e.selectionStart != e.selectionEnd;
                  } catch (e) {
                    return !1;
                  }
                }
              : function (e) {
                  var t;
                  try {
                    t = e.ownerDocument.selection.createRange();
                  } catch (e) {}
                  return (
                    !(!t || t.parentElement() != e) &&
                    0 != t.compareEndPoints("StartToEnd", t)
                  );
                },
            ze =
              "oncopy" in (Oe = N("div")) ||
              (Oe.setAttribute("oncopy", "return;"),
              "function" == typeof Oe.oncopy),
            Pe = null;
          var De = {},
            Ie = {};
          function We(e, t) {
            arguments.length > 2 &&
              (t.dependencies = Array.prototype.slice.call(arguments, 2)),
              (De[e] = t);
          }
          function Fe(e) {
            if ("string" == typeof e && Ie.hasOwnProperty(e)) e = Ie[e];
            else if (
              e &&
              "string" == typeof e.name &&
              Ie.hasOwnProperty(e.name)
            ) {
              var t = Ie[e.name];
              "string" == typeof t && (t = { name: t }),
                ((e = Z(t, e)).name = t.name);
            } else {
              if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
                return Fe("application/xml");
              if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
                return Fe("application/json");
            }
            return "string" == typeof e ? { name: e } : e || { name: "null" };
          }
          function He(e, t) {
            t = Fe(t);
            var n = De[t.name];
            if (!n) return He(e, "text/plain");
            var r = n(e, t);
            if (Re.hasOwnProperty(t.name)) {
              var i = Re[t.name];
              for (var o in i)
                i.hasOwnProperty(o) &&
                  (r.hasOwnProperty(o) && (r["_" + o] = r[o]), (r[o] = i[o]));
            }
            if (
              ((r.name = t.name),
              t.helperType && (r.helperType = t.helperType),
              t.modeProps)
            )
              for (var a in t.modeProps) r[a] = t.modeProps[a];
            return r;
          }
          var Re = {};
          function je(e, t) {
            W(t, Re.hasOwnProperty(e) ? Re[e] : (Re[e] = {}));
          }
          function Be(e, t) {
            if (!0 === t) return t;
            if (e.copyState) return e.copyState(t);
            var n = {};
            for (var r in t) {
              var i = t[r];
              i instanceof Array && (i = i.concat([])), (n[r] = i);
            }
            return n;
          }
          function qe(e, t) {
            for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; )
              (t = n.state), (e = n.mode);
            return n || { mode: e, state: t };
          }
          function Ue(e, t, n) {
            return !e.startState || e.startState(t, n);
          }
          var Ke = function (e, t, n) {
            (this.pos = this.start = 0),
              (this.string = e),
              (this.tabSize = t || 8),
              (this.lastColumnPos = this.lastColumnValue = 0),
              (this.lineStart = 0),
              (this.lineOracle = n);
          };
          function Ve(e, t) {
            if ((t -= e.first) < 0 || t >= e.size)
              throw new Error(
                "There is no line " + (t + e.first) + " in the document."
              );
            for (var n = e; !n.lines; )
              for (var r = 0; ; ++r) {
                var i = n.children[r],
                  o = i.chunkSize();
                if (t < o) {
                  n = i;
                  break;
                }
                t -= o;
              }
            return n.lines[t];
          }
          function Ge(e, t, n) {
            var r = [],
              i = t.line;
            return (
              e.iter(t.line, n.line + 1, function (e) {
                var o = e.text;
                i == n.line && (o = o.slice(0, n.ch)),
                  i == t.line && (o = o.slice(t.ch)),
                  r.push(o),
                  ++i;
              }),
              r
            );
          }
          function $e(e, t, n) {
            var r = [];
            return (
              e.iter(t, n, function (e) {
                r.push(e.text);
              }),
              r
            );
          }
          function Ye(e, t) {
            var n = t - e.height;
            if (n) for (var r = e; r; r = r.parent) r.height += n;
          }
          function Xe(e) {
            if (null == e.parent) return null;
            for (
              var t = e.parent, n = R(t.lines, e), r = t.parent;
              r;
              t = r, r = r.parent
            )
              for (var i = 0; r.children[i] != t; ++i)
                n += r.children[i].chunkSize();
            return n + t.first;
          }
          function Ze(e, t) {
            var n = e.first;
            e: do {
              for (var r = 0; r < e.children.length; ++r) {
                var i = e.children[r],
                  o = i.height;
                if (t < o) {
                  e = i;
                  continue e;
                }
                (t -= o), (n += i.chunkSize());
              }
              return n;
            } while (!e.lines);
            for (var a = 0; a < e.lines.length; ++a) {
              var l = e.lines[a].height;
              if (t < l) break;
              t -= l;
            }
            return n + a;
          }
          function Je(e, t) {
            return t >= e.first && t < e.first + e.size;
          }
          function Qe(e, t) {
            return String(e.lineNumberFormatter(t + e.firstLineNumber));
          }
          function et(e, t, n) {
            if ((void 0 === n && (n = null), !(this instanceof et)))
              return new et(e, t, n);
            (this.line = e), (this.ch = t), (this.sticky = n);
          }
          function tt(e, t) {
            return e.line - t.line || e.ch - t.ch;
          }
          function nt(e, t) {
            return e.sticky == t.sticky && 0 == tt(e, t);
          }
          function rt(e) {
            return et(e.line, e.ch);
          }
          function it(e, t) {
            return tt(e, t) < 0 ? t : e;
          }
          function ot(e, t) {
            return tt(e, t) < 0 ? e : t;
          }
          function at(e, t) {
            return Math.max(e.first, Math.min(t, e.first + e.size - 1));
          }
          function lt(e, t) {
            if (t.line < e.first) return et(e.first, 0);
            var n = e.first + e.size - 1;
            return t.line > n
              ? et(n, Ve(e, n).text.length)
              : (function (e, t) {
                  var n = e.ch;
                  return null == n || n > t
                    ? et(e.line, t)
                    : n < 0
                    ? et(e.line, 0)
                    : e;
                })(t, Ve(e, t.line).text.length);
          }
          function st(e, t) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = lt(e, t[r]);
            return n;
          }
          (Ke.prototype.eol = function () {
            return this.pos >= this.string.length;
          }),
            (Ke.prototype.sol = function () {
              return this.pos == this.lineStart;
            }),
            (Ke.prototype.peek = function () {
              return this.string.charAt(this.pos) || void 0;
            }),
            (Ke.prototype.next = function () {
              if (this.pos < this.string.length)
                return this.string.charAt(this.pos++);
            }),
            (Ke.prototype.eat = function (e) {
              var t = this.string.charAt(this.pos);
              if (
                "string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))
              )
                return ++this.pos, t;
            }),
            (Ke.prototype.eatWhile = function (e) {
              for (var t = this.pos; this.eat(e); );
              return this.pos > t;
            }),
            (Ke.prototype.eatSpace = function () {
              for (
                var e = this.pos;
                /[\s\u00a0]/.test(this.string.charAt(this.pos));

              )
                ++this.pos;
              return this.pos > e;
            }),
            (Ke.prototype.skipToEnd = function () {
              this.pos = this.string.length;
            }),
            (Ke.prototype.skipTo = function (e) {
              var t = this.string.indexOf(e, this.pos);
              if (t > -1) return (this.pos = t), !0;
            }),
            (Ke.prototype.backUp = function (e) {
              this.pos -= e;
            }),
            (Ke.prototype.column = function () {
              return (
                this.lastColumnPos < this.start &&
                  ((this.lastColumnValue = F(
                    this.string,
                    this.start,
                    this.tabSize,
                    this.lastColumnPos,
                    this.lastColumnValue
                  )),
                  (this.lastColumnPos = this.start)),
                this.lastColumnValue -
                  (this.lineStart
                    ? F(this.string, this.lineStart, this.tabSize)
                    : 0)
              );
            }),
            (Ke.prototype.indentation = function () {
              return (
                F(this.string, null, this.tabSize) -
                (this.lineStart
                  ? F(this.string, this.lineStart, this.tabSize)
                  : 0)
              );
            }),
            (Ke.prototype.match = function (e, t, n) {
              if ("string" != typeof e) {
                var r = this.string.slice(this.pos).match(e);
                return r && r.index > 0
                  ? null
                  : (r && !1 !== t && (this.pos += r[0].length), r);
              }
              var i = function (e) {
                return n ? e.toLowerCase() : e;
              };
              if (i(this.string.substr(this.pos, e.length)) == i(e))
                return !1 !== t && (this.pos += e.length), !0;
            }),
            (Ke.prototype.current = function () {
              return this.string.slice(this.start, this.pos);
            }),
            (Ke.prototype.hideFirstChars = function (e, t) {
              this.lineStart += e;
              try {
                return t();
              } finally {
                this.lineStart -= e;
              }
            }),
            (Ke.prototype.lookAhead = function (e) {
              var t = this.lineOracle;
              return t && t.lookAhead(e);
            }),
            (Ke.prototype.baseToken = function () {
              var e = this.lineOracle;
              return e && e.baseToken(this.pos);
            });
          var ct = function (e, t) {
              (this.state = e), (this.lookAhead = t);
            },
            ut = function (e, t, n, r) {
              (this.state = t),
                (this.doc = e),
                (this.line = n),
                (this.maxLookAhead = r || 0),
                (this.baseTokens = null),
                (this.baseTokenPos = 1);
            };
          function dt(e, t, n, r) {
            var i = [e.state.modeGen],
              o = {};
            wt(
              e,
              t.text,
              e.doc.mode,
              n,
              function (e, t) {
                return i.push(e, t);
              },
              o,
              r
            );
            for (
              var a = n.state,
                l = function (r) {
                  n.baseTokens = i;
                  var l = e.state.overlays[r],
                    s = 1,
                    c = 0;
                  (n.state = !0),
                    wt(
                      e,
                      t.text,
                      l.mode,
                      n,
                      function (e, t) {
                        for (var n = s; c < e; ) {
                          var r = i[s];
                          r > e && i.splice(s, 1, e, i[s + 1], r),
                            (s += 2),
                            (c = Math.min(e, r));
                        }
                        if (t)
                          if (l.opaque)
                            i.splice(n, s - n, e, "overlay " + t), (s = n + 2);
                          else
                            for (; n < s; n += 2) {
                              var o = i[n + 1];
                              i[n + 1] = (o ? o + " " : "") + "overlay " + t;
                            }
                      },
                      o
                    ),
                    (n.state = a),
                    (n.baseTokens = null),
                    (n.baseTokenPos = 1);
                },
                s = 0;
              s < e.state.overlays.length;
              ++s
            )
              l(s);
            return { styles: i, classes: o.bgClass || o.textClass ? o : null };
          }
          function ft(e, t, n) {
            if (!t.styles || t.styles[0] != e.state.modeGen) {
              var r = ht(e, Xe(t)),
                i =
                  t.text.length > e.options.maxHighlightLength &&
                  Be(e.doc.mode, r.state),
                o = dt(e, t, r);
              i && (r.state = i),
                (t.stateAfter = r.save(!i)),
                (t.styles = o.styles),
                o.classes
                  ? (t.styleClasses = o.classes)
                  : t.styleClasses && (t.styleClasses = null),
                n === e.doc.highlightFrontier &&
                  (e.doc.modeFrontier = Math.max(
                    e.doc.modeFrontier,
                    ++e.doc.highlightFrontier
                  ));
            }
            return t.styles;
          }
          function ht(e, t, n) {
            var r = e.doc,
              i = e.display;
            if (!r.mode.startState) return new ut(r, !0, t);
            var o = (function (e, t, n) {
                for (
                  var r,
                    i,
                    o = e.doc,
                    a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                    l = t;
                  l > a;
                  --l
                ) {
                  if (l <= o.first) return o.first;
                  var s = Ve(o, l - 1),
                    c = s.stateAfter;
                  if (
                    c &&
                    (!n ||
                      l + (c instanceof ct ? c.lookAhead : 0) <= o.modeFrontier)
                  )
                    return l;
                  var u = F(s.text, null, e.options.tabSize);
                  (null == i || r > u) && ((i = l - 1), (r = u));
                }
                return i;
              })(e, t, n),
              a = o > r.first && Ve(r, o - 1).stateAfter,
              l = a ? ut.fromSaved(r, a, o) : new ut(r, Ue(r.mode), o);
            return (
              r.iter(o, t, function (n) {
                pt(e, n.text, l);
                var r = l.line;
                (n.stateAfter =
                  r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo)
                    ? l.save()
                    : null),
                  l.nextLine();
              }),
              n && (r.modeFrontier = l.line),
              l
            );
          }
          function pt(e, t, n, r) {
            var i = e.doc.mode,
              o = new Ke(t, e.options.tabSize, n);
            for (
              o.start = o.pos = r || 0, "" == t && mt(i, n.state);
              !o.eol();

            )
              gt(i, o, n.state), (o.start = o.pos);
          }
          function mt(e, t) {
            if (e.blankLine) return e.blankLine(t);
            if (e.innerMode) {
              var n = qe(e, t);
              return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
            }
          }
          function gt(e, t, n, r) {
            for (var i = 0; i < 10; i++) {
              r && (r[0] = qe(e, n).mode);
              var o = e.token(t, n);
              if (t.pos > t.start) return o;
            }
            throw new Error("Mode " + e.name + " failed to advance stream.");
          }
          (ut.prototype.lookAhead = function (e) {
            var t = this.doc.getLine(this.line + e);
            return (
              null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
            );
          }),
            (ut.prototype.baseToken = function (e) {
              if (!this.baseTokens) return null;
              for (; this.baseTokens[this.baseTokenPos] <= e; )
                this.baseTokenPos += 2;
              var t = this.baseTokens[this.baseTokenPos + 1];
              return {
                type: t && t.replace(/( |^)overlay .*/, ""),
                size: this.baseTokens[this.baseTokenPos] - e,
              };
            }),
            (ut.prototype.nextLine = function () {
              this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
            }),
            (ut.fromSaved = function (e, t, n) {
              return t instanceof ct
                ? new ut(e, Be(e.mode, t.state), n, t.lookAhead)
                : new ut(e, Be(e.mode, t), n);
            }),
            (ut.prototype.save = function (e) {
              var t = !1 !== e ? Be(this.doc.mode, this.state) : this.state;
              return this.maxLookAhead > 0 ? new ct(t, this.maxLookAhead) : t;
            });
          var vt = function (e, t, n) {
            (this.start = e.start),
              (this.end = e.pos),
              (this.string = e.current()),
              (this.type = t || null),
              (this.state = n);
          };
          function yt(e, t, n, r) {
            var i,
              o,
              a = e.doc,
              l = a.mode,
              s = Ve(a, (t = lt(a, t)).line),
              c = ht(e, t.line, n),
              u = new Ke(s.text, e.options.tabSize, c);
            for (r && (o = []); (r || u.pos < t.ch) && !u.eol(); )
              (u.start = u.pos),
                (i = gt(l, u, c.state)),
                r && o.push(new vt(u, i, Be(a.mode, c.state)));
            return r ? o : new vt(u, i, c.state);
          }
          function bt(e, t) {
            if (e)
              for (;;) {
                var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n) break;
                e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                var r = n[1] ? "bgClass" : "textClass";
                null == t[r]
                  ? (t[r] = n[2])
                  : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) ||
                    (t[r] += " " + n[2]);
              }
            return e;
          }
          function wt(e, t, n, r, i, o, a) {
            var l = n.flattenSpans;
            null == l && (l = e.options.flattenSpans);
            var s,
              c = 0,
              u = null,
              d = new Ke(t, e.options.tabSize, r),
              f = e.options.addModeClass && [null];
            for ("" == t && bt(mt(n, r.state), o); !d.eol(); ) {
              if (
                (d.pos > e.options.maxHighlightLength
                  ? ((l = !1),
                    a && pt(e, t, r, d.pos),
                    (d.pos = t.length),
                    (s = null))
                  : (s = bt(gt(n, d, r.state, f), o)),
                f)
              ) {
                var h = f[0].name;
                h && (s = "m-" + (s ? h + " " + s : h));
              }
              if (!l || u != s) {
                for (; c < d.start; ) i((c = Math.min(d.start, c + 5e3)), u);
                u = s;
              }
              d.start = d.pos;
            }
            for (; c < d.pos; ) {
              var p = Math.min(d.pos, c + 5e3);
              i(p, u), (c = p);
            }
          }
          var xt = !1,
            kt = !1;
          function Ct(e, t, n) {
            (this.marker = e), (this.from = t), (this.to = n);
          }
          function St(e, t) {
            if (e)
              for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r.marker == t) return r;
              }
          }
          function Tt(e, t) {
            for (var n, r = 0; r < e.length; ++r)
              e[r] != t && (n || (n = [])).push(e[r]);
            return n;
          }
          function Lt(e, t) {
            if (t.full) return null;
            var n = Je(e, t.from.line) && Ve(e, t.from.line).markedSpans,
              r = Je(e, t.to.line) && Ve(e, t.to.line).markedSpans;
            if (!n && !r) return null;
            var i = t.from.ch,
              o = t.to.ch,
              a = 0 == tt(t.from, t.to),
              l = (function (e, t, n) {
                var r;
                if (e)
                  for (var i = 0; i < e.length; ++i) {
                    var o = e[i],
                      a = o.marker;
                    if (
                      null == o.from ||
                      (a.inclusiveLeft ? o.from <= t : o.from < t) ||
                      (o.from == t &&
                        "bookmark" == a.type &&
                        (!n || !o.marker.insertLeft))
                    ) {
                      var l =
                        null == o.to ||
                        (a.inclusiveRight ? o.to >= t : o.to > t);
                      (r || (r = [])).push(new Ct(a, o.from, l ? null : o.to));
                    }
                  }
                return r;
              })(n, i, a),
              s = (function (e, t, n) {
                var r;
                if (e)
                  for (var i = 0; i < e.length; ++i) {
                    var o = e[i],
                      a = o.marker;
                    if (
                      null == o.to ||
                      (a.inclusiveRight ? o.to >= t : o.to > t) ||
                      (o.from == t &&
                        "bookmark" == a.type &&
                        (!n || o.marker.insertLeft))
                    ) {
                      var l =
                        null == o.from ||
                        (a.inclusiveLeft ? o.from <= t : o.from < t);
                      (r || (r = [])).push(
                        new Ct(
                          a,
                          l ? null : o.from - t,
                          null == o.to ? null : o.to - t
                        )
                      );
                    }
                  }
                return r;
              })(r, o, a),
              c = 1 == t.text.length,
              u = $(t.text).length + (c ? i : 0);
            if (l)
              for (var d = 0; d < l.length; ++d) {
                var f = l[d];
                if (null == f.to) {
                  var h = St(s, f.marker);
                  h ? c && (f.to = null == h.to ? null : h.to + u) : (f.to = i);
                }
              }
            if (s)
              for (var p = 0; p < s.length; ++p) {
                var m = s[p];
                null != m.to && (m.to += u),
                  null == m.from
                    ? St(l, m.marker) ||
                      ((m.from = u), c && (l || (l = [])).push(m))
                    : ((m.from += u), c && (l || (l = [])).push(m));
              }
            l && (l = Mt(l)), s && s != l && (s = Mt(s));
            var g = [l];
            if (!c) {
              var v,
                y = t.text.length - 2;
              if (y > 0 && l)
                for (var b = 0; b < l.length; ++b)
                  null == l[b].to &&
                    (v || (v = [])).push(new Ct(l[b].marker, null, null));
              for (var w = 0; w < y; ++w) g.push(v);
              g.push(s);
            }
            return g;
          }
          function Mt(e) {
            for (var t = 0; t < e.length; ++t) {
              var n = e[t];
              null != n.from &&
                n.from == n.to &&
                !1 !== n.marker.clearWhenEmpty &&
                e.splice(t--, 1);
            }
            return e.length ? e : null;
          }
          function At(e) {
            var t = e.markedSpans;
            if (t) {
              for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
              e.markedSpans = null;
            }
          }
          function Nt(e, t) {
            if (t) {
              for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
              e.markedSpans = t;
            }
          }
          function Ot(e) {
            return e.inclusiveLeft ? -1 : 0;
          }
          function Et(e) {
            return e.inclusiveRight ? 1 : 0;
          }
          function _t(e, t) {
            var n = e.lines.length - t.lines.length;
            if (0 != n) return n;
            var r = e.find(),
              i = t.find(),
              o = tt(r.from, i.from) || Ot(e) - Ot(t);
            return o ? -o : tt(r.to, i.to) || Et(e) - Et(t) || t.id - e.id;
          }
          function zt(e, t) {
            var n,
              r = kt && e.markedSpans;
            if (r)
              for (var i = void 0, o = 0; o < r.length; ++o)
                (i = r[o]).marker.collapsed &&
                  null == (t ? i.from : i.to) &&
                  (!n || _t(n, i.marker) < 0) &&
                  (n = i.marker);
            return n;
          }
          function Pt(e) {
            return zt(e, !0);
          }
          function Dt(e) {
            return zt(e, !1);
          }
          function It(e, t) {
            var n,
              r = kt && e.markedSpans;
            if (r)
              for (var i = 0; i < r.length; ++i) {
                var o = r[i];
                o.marker.collapsed &&
                  (null == o.from || o.from < t) &&
                  (null == o.to || o.to > t) &&
                  (!n || _t(n, o.marker) < 0) &&
                  (n = o.marker);
              }
            return n;
          }
          function Wt(e, t, n, r, i) {
            var o = Ve(e, t),
              a = kt && o.markedSpans;
            if (a)
              for (var l = 0; l < a.length; ++l) {
                var s = a[l];
                if (s.marker.collapsed) {
                  var c = s.marker.find(0),
                    u = tt(c.from, n) || Ot(s.marker) - Ot(i),
                    d = tt(c.to, r) || Et(s.marker) - Et(i);
                  if (
                    !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                    ((u <= 0 &&
                      (s.marker.inclusiveRight && i.inclusiveLeft
                        ? tt(c.to, n) >= 0
                        : tt(c.to, n) > 0)) ||
                      (u >= 0 &&
                        (s.marker.inclusiveRight && i.inclusiveLeft
                          ? tt(c.from, r) <= 0
                          : tt(c.from, r) < 0)))
                  )
                    return !0;
                }
              }
          }
          function Ft(e) {
            for (var t; (t = Pt(e)); ) e = t.find(-1, !0).line;
            return e;
          }
          function Ht(e, t) {
            var n = Ve(e, t),
              r = Ft(n);
            return n == r ? t : Xe(r);
          }
          function Rt(e, t) {
            if (t > e.lastLine()) return t;
            var n,
              r = Ve(e, t);
            if (!jt(e, r)) return t;
            for (; (n = Dt(r)); ) r = n.find(1, !0).line;
            return Xe(r) + 1;
          }
          function jt(e, t) {
            var n = kt && t.markedSpans;
            if (n)
              for (var r = void 0, i = 0; i < n.length; ++i)
                if ((r = n[i]).marker.collapsed) {
                  if (null == r.from) return !0;
                  if (
                    !r.marker.widgetNode &&
                    0 == r.from &&
                    r.marker.inclusiveLeft &&
                    Bt(e, t, r)
                  )
                    return !0;
                }
          }
          function Bt(e, t, n) {
            if (null == n.to) {
              var r = n.marker.find(1, !0);
              return Bt(e, r.line, St(r.line.markedSpans, n.marker));
            }
            if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
            for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
              if (
                (i = t.markedSpans[o]).marker.collapsed &&
                !i.marker.widgetNode &&
                i.from == n.to &&
                (null == i.to || i.to != n.from) &&
                (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
                Bt(e, t, i)
              )
                return !0;
          }
          function qt(e) {
            for (
              var t = 0, n = (e = Ft(e)).parent, r = 0;
              r < n.lines.length;
              ++r
            ) {
              var i = n.lines[r];
              if (i == e) break;
              t += i.height;
            }
            for (var o = n.parent; o; o = (n = o).parent)
              for (var a = 0; a < o.children.length; ++a) {
                var l = o.children[a];
                if (l == n) break;
                t += l.height;
              }
            return t;
          }
          function Ut(e) {
            if (0 == e.height) return 0;
            for (var t, n = e.text.length, r = e; (t = Pt(r)); ) {
              var i = t.find(0, !0);
              (r = i.from.line), (n += i.from.ch - i.to.ch);
            }
            for (r = e; (t = Dt(r)); ) {
              var o = t.find(0, !0);
              (n -= r.text.length - o.from.ch),
                (n += (r = o.to.line).text.length - o.to.ch);
            }
            return n;
          }
          function Kt(e) {
            var t = e.display,
              n = e.doc;
            (t.maxLine = Ve(n, n.first)),
              (t.maxLineLength = Ut(t.maxLine)),
              (t.maxLineChanged = !0),
              n.iter(function (e) {
                var n = Ut(e);
                n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
              });
          }
          var Vt = function (e, t, n) {
            (this.text = e), Nt(this, t), (this.height = n ? n(this) : 1);
          };
          function Gt(e) {
            (e.parent = null), At(e);
          }
          (Vt.prototype.lineNo = function () {
            return Xe(this);
          }),
            ye(Vt);
          var $t = {},
            Yt = {};
          function Xt(e, t) {
            if (!e || /^\s*$/.test(e)) return null;
            var n = t.addModeClass ? Yt : $t;
            return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
          }
          function Zt(e, t) {
            var n = O("span", null, null, s ? "padding-right: .1px" : null),
              r = {
                pre: O("pre", [n], "CodeMirror-line"),
                content: n,
                col: 0,
                pos: 0,
                cm: e,
                trailingSpace: !1,
                splitSpaces: e.getOption("lineWrapping"),
              };
            t.measure = {};
            for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
              var o = i ? t.rest[i - 1] : t.line,
                a = void 0;
              (r.pos = 0),
                (r.addToken = Qt),
                Ne(e.display.measure) &&
                  (a = ce(o, e.doc.direction)) &&
                  (r.addToken = en(r.addToken, a)),
                (r.map = []),
                nn(o, r, ft(e, o, t != e.display.externalMeasured && Xe(o))),
                o.styleClasses &&
                  (o.styleClasses.bgClass &&
                    (r.bgClass = P(o.styleClasses.bgClass, r.bgClass || "")),
                  o.styleClasses.textClass &&
                    (r.textClass = P(
                      o.styleClasses.textClass,
                      r.textClass || ""
                    ))),
                0 == r.map.length &&
                  r.map.push(
                    0,
                    0,
                    r.content.appendChild(Ae(e.display.measure))
                  ),
                0 == i
                  ? ((t.measure.map = r.map), (t.measure.cache = {}))
                  : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                    (t.measure.caches || (t.measure.caches = [])).push({}));
            }
            if (s) {
              var l = r.content.lastChild;
              (/\bcm-tab\b/.test(l.className) ||
                (l.querySelector && l.querySelector(".cm-tab"))) &&
                (r.content.className = "cm-tab-wrap-hack");
            }
            return (
              pe(e, "renderLine", e, t.line, r.pre),
              r.pre.className &&
                (r.textClass = P(r.pre.className, r.textClass || "")),
              r
            );
          }
          function Jt(e) {
            var t = N("span", "•", "cm-invalidchar");
            return (
              (t.title = "\\u" + e.charCodeAt(0).toString(16)),
              t.setAttribute("aria-label", t.title),
              t
            );
          }
          function Qt(e, t, n, r, i, o, s) {
            if (t) {
              var c,
                u = e.splitSpaces
                  ? (function (e, t) {
                      if (e.length > 1 && !/  /.test(e)) return e;
                      for (var n = t, r = "", i = 0; i < e.length; i++) {
                        var o = e.charAt(i);
                        " " != o ||
                          !n ||
                          (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                          (o = " "),
                          (r += o),
                          (n = " " == o);
                      }
                      return r;
                    })(t, e.trailingSpace)
                  : t,
                d = e.cm.state.specialChars,
                f = !1;
              if (d.test(t)) {
                c = document.createDocumentFragment();
                for (var h = 0; ; ) {
                  d.lastIndex = h;
                  var p = d.exec(t),
                    m = p ? p.index - h : t.length - h;
                  if (m) {
                    var g = document.createTextNode(u.slice(h, h + m));
                    a && l < 9
                      ? c.appendChild(N("span", [g]))
                      : c.appendChild(g),
                      e.map.push(e.pos, e.pos + m, g),
                      (e.col += m),
                      (e.pos += m);
                  }
                  if (!p) break;
                  h += m + 1;
                  var v = void 0;
                  if ("\t" == p[0]) {
                    var y = e.cm.options.tabSize,
                      b = y - (e.col % y);
                    (v = c.appendChild(N("span", G(b), "cm-tab"))).setAttribute(
                      "role",
                      "presentation"
                    ),
                      v.setAttribute("cm-text", "\t"),
                      (e.col += b);
                  } else
                    "\r" == p[0] || "\n" == p[0]
                      ? ((v = c.appendChild(
                          N("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar")
                        )).setAttribute("cm-text", p[0]),
                        (e.col += 1))
                      : ((v = e.cm.options.specialCharPlaceholder(
                          p[0]
                        )).setAttribute("cm-text", p[0]),
                        a && l < 9
                          ? c.appendChild(N("span", [v]))
                          : c.appendChild(v),
                        (e.col += 1));
                  e.map.push(e.pos, e.pos + 1, v), e.pos++;
                }
              } else
                (e.col += t.length),
                  (c = document.createTextNode(u)),
                  e.map.push(e.pos, e.pos + t.length, c),
                  a && l < 9 && (f = !0),
                  (e.pos += t.length);
              if (
                ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
                n || r || i || f || o || s)
              ) {
                var w = n || "";
                r && (w += r), i && (w += i);
                var x = N("span", [c], w, o);
                if (s)
                  for (var k in s)
                    s.hasOwnProperty(k) &&
                      "style" != k &&
                      "class" != k &&
                      x.setAttribute(k, s[k]);
                return e.content.appendChild(x);
              }
              e.content.appendChild(c);
            }
          }
          function en(e, t) {
            return function (n, r, i, o, a, l, s) {
              i = i ? i + " cm-force-border" : "cm-force-border";
              for (var c = n.pos, u = c + r.length; ; ) {
                for (
                  var d = void 0, f = 0;
                  f < t.length && !((d = t[f]).to > c && d.from <= c);
                  f++
                );
                if (d.to >= u) return e(n, r, i, o, a, l, s);
                e(n, r.slice(0, d.to - c), i, o, null, l, s),
                  (o = null),
                  (r = r.slice(d.to - c)),
                  (c = d.to);
              }
            };
          }
          function tn(e, t, n, r) {
            var i = !r && n.widgetNode;
            i && e.map.push(e.pos, e.pos + t, i),
              !r &&
                e.cm.display.input.needsContentAttribute &&
                (i ||
                  (i = e.content.appendChild(document.createElement("span"))),
                i.setAttribute("cm-marker", n.id)),
              i &&
                (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
              (e.pos += t),
              (e.trailingSpace = !1);
          }
          function nn(e, t, n) {
            var r = e.markedSpans,
              i = e.text,
              o = 0;
            if (r)
              for (
                var a,
                  l,
                  s,
                  c,
                  u,
                  d,
                  f,
                  h = i.length,
                  p = 0,
                  m = 1,
                  g = "",
                  v = 0;
                ;

              ) {
                if (v == p) {
                  (s = c = u = l = ""), (f = null), (d = null), (v = 1 / 0);
                  for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
                    var x = r[w],
                      k = x.marker;
                    if ("bookmark" == k.type && x.from == p && k.widgetNode)
                      y.push(k);
                    else if (
                      x.from <= p &&
                      (null == x.to ||
                        x.to > p ||
                        (k.collapsed && x.to == p && x.from == p))
                    ) {
                      if (
                        (null != x.to &&
                          x.to != p &&
                          v > x.to &&
                          ((v = x.to), (c = "")),
                        k.className && (s += " " + k.className),
                        k.css && (l = (l ? l + ";" : "") + k.css),
                        k.startStyle &&
                          x.from == p &&
                          (u += " " + k.startStyle),
                        k.endStyle &&
                          x.to == v &&
                          (b || (b = [])).push(k.endStyle, x.to),
                        k.title && ((f || (f = {})).title = k.title),
                        k.attributes)
                      )
                        for (var C in k.attributes)
                          (f || (f = {}))[C] = k.attributes[C];
                      k.collapsed && (!d || _t(d.marker, k) < 0) && (d = x);
                    } else x.from > p && v > x.from && (v = x.from);
                  }
                  if (b)
                    for (var S = 0; S < b.length; S += 2)
                      b[S + 1] == v && (c += " " + b[S]);
                  if (!d || d.from == p)
                    for (var T = 0; T < y.length; ++T) tn(t, 0, y[T]);
                  if (d && (d.from || 0) == p) {
                    if (
                      (tn(
                        t,
                        (null == d.to ? h + 1 : d.to) - p,
                        d.marker,
                        null == d.from
                      ),
                      null == d.to)
                    )
                      return;
                    d.to == p && (d = !1);
                  }
                }
                if (p >= h) break;
                for (var L = Math.min(h, v); ; ) {
                  if (g) {
                    var M = p + g.length;
                    if (!d) {
                      var A = M > L ? g.slice(0, L - p) : g;
                      t.addToken(
                        t,
                        A,
                        a ? a + s : s,
                        u,
                        p + A.length == v ? c : "",
                        l,
                        f
                      );
                    }
                    if (M >= L) {
                      (g = g.slice(L - p)), (p = L);
                      break;
                    }
                    (p = M), (u = "");
                  }
                  (g = i.slice(o, (o = n[m++]))),
                    (a = Xt(n[m++], t.cm.options));
                }
              }
            else
              for (var N = 1; N < n.length; N += 2)
                t.addToken(
                  t,
                  i.slice(o, (o = n[N])),
                  Xt(n[N + 1], t.cm.options)
                );
          }
          function rn(e, t, n) {
            (this.line = t),
              (this.rest = (function (e) {
                for (var t, n; (t = Dt(e)); )
                  (e = t.find(1, !0).line), (n || (n = [])).push(e);
                return n;
              })(t)),
              (this.size = this.rest ? Xe($(this.rest)) - n + 1 : 1),
              (this.node = this.text = null),
              (this.hidden = jt(e, t));
          }
          function on(e, t, n) {
            for (var r, i = [], o = t; o < n; o = r) {
              var a = new rn(e.doc, Ve(e.doc, o), o);
              (r = o + a.size), i.push(a);
            }
            return i;
          }
          var an = null;
          var ln = null;
          function sn(e, t) {
            var n = fe(e, t);
            if (n.length) {
              var r,
                i = Array.prototype.slice.call(arguments, 2);
              an
                ? (r = an.delayedCallbacks)
                : ln
                ? (r = ln)
                : ((r = ln = []), setTimeout(cn, 0));
              for (
                var o = function (e) {
                    r.push(function () {
                      return n[e].apply(null, i);
                    });
                  },
                  a = 0;
                a < n.length;
                ++a
              )
                o(a);
            }
          }
          function cn() {
            var e = ln;
            ln = null;
            for (var t = 0; t < e.length; ++t) e[t]();
          }
          function un(e, t, n, r) {
            for (var i = 0; i < t.changes.length; i++) {
              var o = t.changes[i];
              "text" == o
                ? hn(e, t)
                : "gutter" == o
                ? mn(e, t, n, r)
                : "class" == o
                ? pn(e, t)
                : "widget" == o && gn(e, t, r);
            }
            t.changes = null;
          }
          function dn(e) {
            return (
              e.node == e.text &&
                ((e.node = N("div", null, null, "position: relative")),
                e.text.parentNode &&
                  e.text.parentNode.replaceChild(e.node, e.text),
                e.node.appendChild(e.text),
                a && l < 8 && (e.node.style.zIndex = 2)),
              e.node
            );
          }
          function fn(e, t) {
            var n = e.display.externalMeasured;
            return n && n.line == t.line
              ? ((e.display.externalMeasured = null),
                (t.measure = n.measure),
                n.built)
              : Zt(e, t);
          }
          function hn(e, t) {
            var n = t.text.className,
              r = fn(e, t);
            t.text == t.node && (t.node = r.pre),
              t.text.parentNode.replaceChild(r.pre, t.text),
              (t.text = r.pre),
              r.bgClass != t.bgClass || r.textClass != t.textClass
                ? ((t.bgClass = r.bgClass),
                  (t.textClass = r.textClass),
                  pn(e, t))
                : n && (t.text.className = n);
          }
          function pn(e, t) {
            (function (e, t) {
              var n = t.bgClass
                ? t.bgClass + " " + (t.line.bgClass || "")
                : t.line.bgClass;
              if ((n && (n += " CodeMirror-linebackground"), t.background))
                n
                  ? (t.background.className = n)
                  : (t.background.parentNode.removeChild(t.background),
                    (t.background = null));
              else if (n) {
                var r = dn(t);
                (t.background = r.insertBefore(
                  N("div", null, n),
                  r.firstChild
                )),
                  e.display.input.setUneditable(t.background);
              }
            })(e, t),
              t.line.wrapClass
                ? (dn(t).className = t.line.wrapClass)
                : t.node != t.text && (t.node.className = "");
            var n = t.textClass
              ? t.textClass + " " + (t.line.textClass || "")
              : t.line.textClass;
            t.text.className = n || "";
          }
          function mn(e, t, n, r) {
            if (
              (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
              t.gutterBackground &&
                (t.node.removeChild(t.gutterBackground),
                (t.gutterBackground = null)),
              t.line.gutterClass)
            ) {
              var i = dn(t);
              (t.gutterBackground = N(
                "div",
                null,
                "CodeMirror-gutter-background " + t.line.gutterClass,
                "left: " +
                  (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                  "px; width: " +
                  r.gutterTotalWidth +
                  "px"
              )),
                e.display.input.setUneditable(t.gutterBackground),
                i.insertBefore(t.gutterBackground, t.text);
            }
            var o = t.line.gutterMarkers;
            if (e.options.lineNumbers || o) {
              var a = dn(t),
                l = (t.gutter = N(
                  "div",
                  null,
                  "CodeMirror-gutter-wrapper",
                  "left: " +
                    (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                    "px"
                ));
              if (
                (l.setAttribute("aria-hidden", "true"),
                e.display.input.setUneditable(l),
                a.insertBefore(l, t.text),
                t.line.gutterClass && (l.className += " " + t.line.gutterClass),
                !e.options.lineNumbers ||
                  (o && o["CodeMirror-linenumbers"]) ||
                  (t.lineNumber = l.appendChild(
                    N(
                      "div",
                      Qe(e.options, n),
                      "CodeMirror-linenumber CodeMirror-gutter-elt",
                      "left: " +
                        r.gutterLeft["CodeMirror-linenumbers"] +
                        "px; width: " +
                        e.display.lineNumInnerWidth +
                        "px"
                    )
                  )),
                o)
              )
                for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                  var c = e.display.gutterSpecs[s].className,
                    u = o.hasOwnProperty(c) && o[c];
                  u &&
                    l.appendChild(
                      N(
                        "div",
                        [u],
                        "CodeMirror-gutter-elt",
                        "left: " +
                          r.gutterLeft[c] +
                          "px; width: " +
                          r.gutterWidth[c] +
                          "px"
                      )
                    );
                }
            }
          }
          function gn(e, t, n) {
            t.alignable && (t.alignable = null);
            for (
              var r = S("CodeMirror-linewidget"),
                i = t.node.firstChild,
                o = void 0;
              i;
              i = o
            )
              (o = i.nextSibling), r.test(i.className) && t.node.removeChild(i);
            yn(e, t, n);
          }
          function vn(e, t, n, r) {
            var i = fn(e, t);
            return (
              (t.text = t.node = i.pre),
              i.bgClass && (t.bgClass = i.bgClass),
              i.textClass && (t.textClass = i.textClass),
              pn(e, t),
              mn(e, t, n, r),
              yn(e, t, r),
              t.node
            );
          }
          function yn(e, t, n) {
            if ((bn(e, t.line, t, n, !0), t.rest))
              for (var r = 0; r < t.rest.length; r++)
                bn(e, t.rest[r], t, n, !1);
          }
          function bn(e, t, n, r, i) {
            if (t.widgets)
              for (var o = dn(n), a = 0, l = t.widgets; a < l.length; ++a) {
                var s = l[a],
                  c = N(
                    "div",
                    [s.node],
                    "CodeMirror-linewidget" +
                      (s.className ? " " + s.className : "")
                  );
                s.handleMouseEvents ||
                  c.setAttribute("cm-ignore-events", "true"),
                  wn(s, c, n, r),
                  e.display.input.setUneditable(c),
                  i && s.above
                    ? o.insertBefore(c, n.gutter || n.text)
                    : o.appendChild(c),
                  sn(s, "redraw");
              }
          }
          function wn(e, t, n, r) {
            if (e.noHScroll) {
              (n.alignable || (n.alignable = [])).push(t);
              var i = r.wrapperWidth;
              (t.style.left = r.fixedPos + "px"),
                e.coverGutter ||
                  ((i -= r.gutterTotalWidth),
                  (t.style.paddingLeft = r.gutterTotalWidth + "px")),
                (t.style.width = i + "px");
            }
            e.coverGutter &&
              ((t.style.zIndex = 5),
              (t.style.position = "relative"),
              e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
          }
          function xn(e) {
            if (null != e.height) return e.height;
            var t = e.doc.cm;
            if (!t) return 0;
            if (!E(document.body, e.node)) {
              var n = "position: relative;";
              e.coverGutter &&
                (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
                e.noHScroll &&
                  (n += "width: " + t.display.wrapper.clientWidth + "px;"),
                A(t.display.measure, N("div", [e.node], null, n));
            }
            return (e.height = e.node.parentNode.offsetHeight);
          }
          function kn(e, t) {
            for (var n = Ce(t); n != e.wrapper; n = n.parentNode)
              if (
                !n ||
                (1 == n.nodeType &&
                  "true" == n.getAttribute("cm-ignore-events")) ||
                (n.parentNode == e.sizer && n != e.mover)
              )
                return !0;
          }
          function Cn(e) {
            return e.lineSpace.offsetTop;
          }
          function Sn(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight;
          }
          function Tn(e) {
            if (e.cachedPaddingH) return e.cachedPaddingH;
            var t = A(e.measure, N("pre", "x", "CodeMirror-line-like")),
              n = window.getComputedStyle
                ? window.getComputedStyle(t)
                : t.currentStyle,
              r = {
                left: parseInt(n.paddingLeft),
                right: parseInt(n.paddingRight),
              };
            return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
          }
          function Ln(e) {
            return 50 - e.display.nativeBarWidth;
          }
          function Mn(e) {
            return e.display.scroller.clientWidth - Ln(e) - e.display.barWidth;
          }
          function An(e) {
            return (
              e.display.scroller.clientHeight - Ln(e) - e.display.barHeight
            );
          }
          function Nn(e, t, n) {
            if (e.line == t)
              return { map: e.measure.map, cache: e.measure.cache };
            for (var r = 0; r < e.rest.length; r++)
              if (e.rest[r] == t)
                return { map: e.measure.maps[r], cache: e.measure.caches[r] };
            for (var i = 0; i < e.rest.length; i++)
              if (Xe(e.rest[i]) > n)
                return {
                  map: e.measure.maps[i],
                  cache: e.measure.caches[i],
                  before: !0,
                };
          }
          function On(e, t, n, r) {
            return zn(e, _n(e, t), n, r);
          }
          function En(e, t) {
            if (t >= e.display.viewFrom && t < e.display.viewTo)
              return e.display.view[ur(e, t)];
            var n = e.display.externalMeasured;
            return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
          }
          function _n(e, t) {
            var n = Xe(t),
              r = En(e, n);
            r && !r.text
              ? (r = null)
              : r &&
                r.changes &&
                (un(e, r, n, or(e)), (e.curOp.forceUpdate = !0)),
              r ||
                (r = (function (e, t) {
                  var n = Xe((t = Ft(t))),
                    r = (e.display.externalMeasured = new rn(e.doc, t, n));
                  r.lineN = n;
                  var i = (r.built = Zt(e, r));
                  return (r.text = i.pre), A(e.display.lineMeasure, i.pre), r;
                })(e, t));
            var i = Nn(r, t, n);
            return {
              line: t,
              view: r,
              rect: null,
              map: i.map,
              cache: i.cache,
              before: i.before,
              hasHeights: !1,
            };
          }
          function zn(e, t, n, r, i) {
            t.before && (n = -1);
            var o,
              s = n + (r || "");
            return (
              t.cache.hasOwnProperty(s)
                ? (o = t.cache[s])
                : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                  t.hasHeights ||
                    ((function (e, t, n) {
                      var r = e.options.lineWrapping,
                        i = r && Mn(e);
                      if (!t.measure.heights || (r && t.measure.width != i)) {
                        var o = (t.measure.heights = []);
                        if (r) {
                          t.measure.width = i;
                          for (
                            var a = t.text.firstChild.getClientRects(), l = 0;
                            l < a.length - 1;
                            l++
                          ) {
                            var s = a[l],
                              c = a[l + 1];
                            Math.abs(s.bottom - c.bottom) > 2 &&
                              o.push((s.bottom + c.top) / 2 - n.top);
                          }
                        }
                        o.push(n.bottom - n.top);
                      }
                    })(e, t.view, t.rect),
                    (t.hasHeights = !0)),
                  (o = (function (e, t, n, r) {
                    var i,
                      o = In(t.map, n, r),
                      s = o.node,
                      c = o.start,
                      u = o.end,
                      d = o.collapse;
                    if (3 == s.nodeType) {
                      for (var f = 0; f < 4; f++) {
                        for (; c && re(t.line.text.charAt(o.coverStart + c)); )
                          --c;
                        for (
                          ;
                          o.coverStart + u < o.coverEnd &&
                          re(t.line.text.charAt(o.coverStart + u));

                        )
                          ++u;
                        if (
                          (i =
                            a &&
                            l < 9 &&
                            0 == c &&
                            u == o.coverEnd - o.coverStart
                              ? s.parentNode.getBoundingClientRect()
                              : Wn(T(s, c, u).getClientRects(), r)).left ||
                          i.right ||
                          0 == c
                        )
                          break;
                        (u = c), (c -= 1), (d = "right");
                      }
                      a &&
                        l < 11 &&
                        (i = (function (e, t) {
                          if (
                            !window.screen ||
                            null == screen.logicalXDPI ||
                            screen.logicalXDPI == screen.deviceXDPI ||
                            !(function (e) {
                              if (null != Pe) return Pe;
                              var t = A(e, N("span", "x")),
                                n = t.getBoundingClientRect(),
                                r = T(t, 0, 1).getBoundingClientRect();
                              return (Pe = Math.abs(n.left - r.left) > 1);
                            })(e)
                          )
                            return t;
                          var n = screen.logicalXDPI / screen.deviceXDPI,
                            r = screen.logicalYDPI / screen.deviceYDPI;
                          return {
                            left: t.left * n,
                            right: t.right * n,
                            top: t.top * r,
                            bottom: t.bottom * r,
                          };
                        })(e.display.measure, i));
                    } else {
                      var h;
                      c > 0 && (d = r = "right"),
                        (i =
                          e.options.lineWrapping &&
                          (h = s.getClientRects()).length > 1
                            ? h["right" == r ? h.length - 1 : 0]
                            : s.getBoundingClientRect());
                    }
                    if (a && l < 9 && !c && (!i || (!i.left && !i.right))) {
                      var p = s.parentNode.getClientRects()[0];
                      i = p
                        ? {
                            left: p.left,
                            right: p.left + ir(e.display),
                            top: p.top,
                            bottom: p.bottom,
                          }
                        : Dn;
                    }
                    for (
                      var m = i.top - t.rect.top,
                        g = i.bottom - t.rect.top,
                        v = (m + g) / 2,
                        y = t.view.measure.heights,
                        b = 0;
                      b < y.length - 1 && !(v < y[b]);
                      b++
                    );
                    var w = b ? y[b - 1] : 0,
                      x = y[b],
                      k = {
                        left: ("right" == d ? i.right : i.left) - t.rect.left,
                        right: ("left" == d ? i.left : i.right) - t.rect.left,
                        top: w,
                        bottom: x,
                      };
                    return (
                      i.left || i.right || (k.bogus = !0),
                      e.options.singleCursorHeightPerLine ||
                        ((k.rtop = m), (k.rbottom = g)),
                      k
                    );
                  })(e, t, n, r)).bogus || (t.cache[s] = o)),
              {
                left: o.left,
                right: o.right,
                top: i ? o.rtop : o.top,
                bottom: i ? o.rbottom : o.bottom,
              }
            );
          }
          var Pn,
            Dn = { left: 0, right: 0, top: 0, bottom: 0 };
          function In(e, t, n) {
            for (var r, i, o, a, l, s, c = 0; c < e.length; c += 3)
              if (
                ((l = e[c]),
                (s = e[c + 1]),
                t < l
                  ? ((i = 0), (o = 1), (a = "left"))
                  : t < s
                  ? (o = 1 + (i = t - l))
                  : (c == e.length - 3 || (t == s && e[c + 3] > t)) &&
                    ((i = (o = s - l) - 1), t >= s && (a = "right")),
                null != i)
              ) {
                if (
                  ((r = e[c + 2]),
                  l == s && n == (r.insertLeft ? "left" : "right") && (a = n),
                  "left" == n && 0 == i)
                )
                  for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                    (r = e[2 + (c -= 3)]), (a = "left");
                if ("right" == n && i == s - l)
                  for (
                    ;
                    c < e.length - 3 &&
                    e[c + 3] == e[c + 4] &&
                    !e[c + 5].insertLeft;

                  )
                    (r = e[(c += 3) + 2]), (a = "right");
                break;
              }
            return {
              node: r,
              start: i,
              end: o,
              collapse: a,
              coverStart: l,
              coverEnd: s,
            };
          }
          function Wn(e, t) {
            var n = Dn;
            if ("left" == t)
              for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
            else
              for (
                var i = e.length - 1;
                i >= 0 && (n = e[i]).left == n.right;
                i--
              );
            return n;
          }
          function Fn(e) {
            if (
              e.measure &&
              ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
            )
              for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
          }
          function Hn(e) {
            (e.display.externalMeasure = null), M(e.display.lineMeasure);
            for (var t = 0; t < e.display.view.length; t++)
              Fn(e.display.view[t]);
          }
          function Rn(e) {
            Hn(e),
              (e.display.cachedCharWidth =
                e.display.cachedTextHeight =
                e.display.cachedPaddingH =
                  null),
              e.options.lineWrapping || (e.display.maxLineChanged = !0),
              (e.display.lineNumChars = null);
          }
          function jn() {
            return u && g
              ? -(
                  document.body.getBoundingClientRect().left -
                  parseInt(getComputedStyle(document.body).marginLeft)
                )
              : window.pageXOffset ||
                  (document.documentElement || document.body).scrollLeft;
          }
          function Bn() {
            return u && g
              ? -(
                  document.body.getBoundingClientRect().top -
                  parseInt(getComputedStyle(document.body).marginTop)
                )
              : window.pageYOffset ||
                  (document.documentElement || document.body).scrollTop;
          }
          function qn(e) {
            var t = 0;
            if (e.widgets)
              for (var n = 0; n < e.widgets.length; ++n)
                e.widgets[n].above && (t += xn(e.widgets[n]));
            return t;
          }
          function Un(e, t, n, r, i) {
            if (!i) {
              var o = qn(t);
              (n.top += o), (n.bottom += o);
            }
            if ("line" == r) return n;
            r || (r = "local");
            var a = qt(t);
            if (
              ("local" == r
                ? (a += Cn(e.display))
                : (a -= e.display.viewOffset),
              "page" == r || "window" == r)
            ) {
              var l = e.display.lineSpace.getBoundingClientRect();
              a += l.top + ("window" == r ? 0 : Bn());
              var s = l.left + ("window" == r ? 0 : jn());
              (n.left += s), (n.right += s);
            }
            return (n.top += a), (n.bottom += a), n;
          }
          function Kn(e, t, n) {
            if ("div" == n) return t;
            var r = t.left,
              i = t.top;
            if ("page" == n) (r -= jn()), (i -= Bn());
            else if ("local" == n || !n) {
              var o = e.display.sizer.getBoundingClientRect();
              (r += o.left), (i += o.top);
            }
            var a = e.display.lineSpace.getBoundingClientRect();
            return { left: r - a.left, top: i - a.top };
          }
          function Vn(e, t, n, r, i) {
            return r || (r = Ve(e.doc, t.line)), Un(e, r, On(e, r, t.ch, i), n);
          }
          function Gn(e, t, n, r, i, o) {
            function a(t, a) {
              var l = zn(e, i, t, a ? "right" : "left", o);
              return (
                a ? (l.left = l.right) : (l.right = l.left), Un(e, r, l, n)
              );
            }
            (r = r || Ve(e.doc, t.line)), i || (i = _n(e, r));
            var l = ce(r, e.doc.direction),
              s = t.ch,
              c = t.sticky;
            if (
              (s >= r.text.length
                ? ((s = r.text.length), (c = "before"))
                : s <= 0 && ((s = 0), (c = "after")),
              !l)
            )
              return a("before" == c ? s - 1 : s, "before" == c);
            function u(e, t, n) {
              return a(n ? e - 1 : e, (1 == l[t].level) != n);
            }
            var d = le(l, s, c),
              f = ae,
              h = u(s, d, "before" == c);
            return null != f && (h.other = u(s, f, "before" != c)), h;
          }
          function $n(e, t) {
            var n = 0;
            (t = lt(e.doc, t)),
              e.options.lineWrapping || (n = ir(e.display) * t.ch);
            var r = Ve(e.doc, t.line),
              i = qt(r) + Cn(e.display);
            return { left: n, right: n, top: i, bottom: i + r.height };
          }
          function Yn(e, t, n, r, i) {
            var o = et(e, t, n);
            return (o.xRel = i), r && (o.outside = r), o;
          }
          function Xn(e, t, n) {
            var r = e.doc;
            if ((n += e.display.viewOffset) < 0)
              return Yn(r.first, 0, null, -1, -1);
            var i = Ze(r, n),
              o = r.first + r.size - 1;
            if (i > o)
              return Yn(r.first + r.size - 1, Ve(r, o).text.length, null, 1, 1);
            t < 0 && (t = 0);
            for (var a = Ve(r, i); ; ) {
              var l = er(e, a, i, t, n),
                s = It(a, l.ch + (l.xRel > 0 || l.outside > 0 ? 1 : 0));
              if (!s) return l;
              var c = s.find(1);
              if (c.line == i) return c;
              a = Ve(r, (i = c.line));
            }
          }
          function Zn(e, t, n, r) {
            r -= qn(t);
            var i = t.text.length,
              o = oe(
                function (t) {
                  return zn(e, n, t - 1).bottom <= r;
                },
                i,
                0
              );
            return {
              begin: o,
              end: (i = oe(
                function (t) {
                  return zn(e, n, t).top > r;
                },
                o,
                i
              )),
            };
          }
          function Jn(e, t, n, r) {
            return (
              n || (n = _n(e, t)),
              Zn(e, t, n, Un(e, t, zn(e, n, r), "line").top)
            );
          }
          function Qn(e, t, n, r) {
            return (
              !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t)
            );
          }
          function er(e, t, n, r, i) {
            i -= qt(t);
            var o = _n(e, t),
              a = qn(t),
              l = 0,
              s = t.text.length,
              c = !0,
              u = ce(t, e.doc.direction);
            if (u) {
              var d = (e.options.lineWrapping ? nr : tr)(e, t, n, o, u, r, i);
              (l = (c = 1 != d.level) ? d.from : d.to - 1),
                (s = c ? d.to : d.from - 1);
            }
            var f,
              h,
              p = null,
              m = null,
              g = oe(
                function (t) {
                  var n = zn(e, o, t);
                  return (
                    (n.top += a),
                    (n.bottom += a),
                    !!Qn(n, r, i, !1) &&
                      (n.top <= i && n.left <= r && ((p = t), (m = n)), !0)
                  );
                },
                l,
                s
              ),
              v = !1;
            if (m) {
              var y = r - m.left < m.right - r,
                b = y == c;
              (g = p + (b ? 0 : 1)),
                (h = b ? "after" : "before"),
                (f = y ? m.left : m.right);
            } else {
              c || (g != s && g != l) || g++,
                (h =
                  0 == g
                    ? "after"
                    : g == t.text.length
                    ? "before"
                    : zn(e, o, g - (c ? 1 : 0)).bottom + a <= i == c
                    ? "after"
                    : "before");
              var w = Gn(e, et(n, g, h), "line", t, o);
              (f = w.left), (v = i < w.top ? -1 : i >= w.bottom ? 1 : 0);
            }
            return Yn(n, (g = ie(t.text, g, 1)), h, v, r - f);
          }
          function tr(e, t, n, r, i, o, a) {
            var l = oe(
                function (l) {
                  var s = i[l],
                    c = 1 != s.level;
                  return Qn(
                    Gn(
                      e,
                      et(n, c ? s.to : s.from, c ? "before" : "after"),
                      "line",
                      t,
                      r
                    ),
                    o,
                    a,
                    !0
                  );
                },
                0,
                i.length - 1
              ),
              s = i[l];
            if (l > 0) {
              var c = 1 != s.level,
                u = Gn(
                  e,
                  et(n, c ? s.from : s.to, c ? "after" : "before"),
                  "line",
                  t,
                  r
                );
              Qn(u, o, a, !0) && u.top > a && (s = i[l - 1]);
            }
            return s;
          }
          function nr(e, t, n, r, i, o, a) {
            var l = Zn(e, t, r, a),
              s = l.begin,
              c = l.end;
            /\s/.test(t.text.charAt(c - 1)) && c--;
            for (var u = null, d = null, f = 0; f < i.length; f++) {
              var h = i[f];
              if (!(h.from >= c || h.to <= s)) {
                var p = zn(
                    e,
                    r,
                    1 != h.level ? Math.min(c, h.to) - 1 : Math.max(s, h.from)
                  ).right,
                  m = p < o ? o - p + 1e9 : p - o;
                (!u || d > m) && ((u = h), (d = m));
              }
            }
            return (
              u || (u = i[i.length - 1]),
              u.from < s && (u = { from: s, to: u.to, level: u.level }),
              u.to > c && (u = { from: u.from, to: c, level: u.level }),
              u
            );
          }
          function rr(e) {
            if (null != e.cachedTextHeight) return e.cachedTextHeight;
            if (null == Pn) {
              Pn = N("pre", null, "CodeMirror-line-like");
              for (var t = 0; t < 49; ++t)
                Pn.appendChild(document.createTextNode("x")),
                  Pn.appendChild(N("br"));
              Pn.appendChild(document.createTextNode("x"));
            }
            A(e.measure, Pn);
            var n = Pn.offsetHeight / 50;
            return n > 3 && (e.cachedTextHeight = n), M(e.measure), n || 1;
          }
          function ir(e) {
            if (null != e.cachedCharWidth) return e.cachedCharWidth;
            var t = N("span", "xxxxxxxxxx"),
              n = N("pre", [t], "CodeMirror-line-like");
            A(e.measure, n);
            var r = t.getBoundingClientRect(),
              i = (r.right - r.left) / 10;
            return i > 2 && (e.cachedCharWidth = i), i || 10;
          }
          function or(e) {
            for (
              var t = e.display,
                n = {},
                r = {},
                i = t.gutters.clientLeft,
                o = t.gutters.firstChild,
                a = 0;
              o;
              o = o.nextSibling, ++a
            ) {
              var l = e.display.gutterSpecs[a].className;
              (n[l] = o.offsetLeft + o.clientLeft + i), (r[l] = o.clientWidth);
            }
            return {
              fixedPos: ar(t),
              gutterTotalWidth: t.gutters.offsetWidth,
              gutterLeft: n,
              gutterWidth: r,
              wrapperWidth: t.wrapper.clientWidth,
            };
          }
          function ar(e) {
            return (
              e.scroller.getBoundingClientRect().left -
              e.sizer.getBoundingClientRect().left
            );
          }
          function lr(e) {
            var t = rr(e.display),
              n = e.options.lineWrapping,
              r =
                n &&
                Math.max(5, e.display.scroller.clientWidth / ir(e.display) - 3);
            return function (i) {
              if (jt(e.doc, i)) return 0;
              var o = 0;
              if (i.widgets)
                for (var a = 0; a < i.widgets.length; a++)
                  i.widgets[a].height && (o += i.widgets[a].height);
              return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
            };
          }
          function sr(e) {
            var t = e.doc,
              n = lr(e);
            t.iter(function (e) {
              var t = n(e);
              t != e.height && Ye(e, t);
            });
          }
          function cr(e, t, n, r) {
            var i = e.display;
            if (!n && "true" == Ce(t).getAttribute("cm-not-content"))
              return null;
            var o,
              a,
              l = i.lineSpace.getBoundingClientRect();
            try {
              (o = t.clientX - l.left), (a = t.clientY - l.top);
            } catch (e) {
              return null;
            }
            var s,
              c = Xn(e, o, a);
            if (
              r &&
              c.xRel > 0 &&
              (s = Ve(e.doc, c.line).text).length == c.ch
            ) {
              var u = F(s, s.length, e.options.tabSize) - s.length;
              c = et(
                c.line,
                Math.max(
                  0,
                  Math.round((o - Tn(e.display).left) / ir(e.display)) - u
                )
              );
            }
            return c;
          }
          function ur(e, t) {
            if (t >= e.display.viewTo) return null;
            if ((t -= e.display.viewFrom) < 0) return null;
            for (var n = e.display.view, r = 0; r < n.length; r++)
              if ((t -= n[r].size) < 0) return r;
          }
          function dr(e, t, n, r) {
            null == t && (t = e.doc.first),
              null == n && (n = e.doc.first + e.doc.size),
              r || (r = 0);
            var i = e.display;
            if (
              (r &&
                n < i.viewTo &&
                (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
                (i.updateLineNumbers = t),
              (e.curOp.viewChanged = !0),
              t >= i.viewTo)
            )
              kt && Ht(e.doc, t) < i.viewTo && hr(e);
            else if (n <= i.viewFrom)
              kt && Rt(e.doc, n + r) > i.viewFrom
                ? hr(e)
                : ((i.viewFrom += r), (i.viewTo += r));
            else if (t <= i.viewFrom && n >= i.viewTo) hr(e);
            else if (t <= i.viewFrom) {
              var o = pr(e, n, n + r, 1);
              o
                ? ((i.view = i.view.slice(o.index)),
                  (i.viewFrom = o.lineN),
                  (i.viewTo += r))
                : hr(e);
            } else if (n >= i.viewTo) {
              var a = pr(e, t, t, -1);
              a
                ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
                : hr(e);
            } else {
              var l = pr(e, t, t, -1),
                s = pr(e, n, n + r, 1);
              l && s
                ? ((i.view = i.view
                    .slice(0, l.index)
                    .concat(on(e, l.lineN, s.lineN))
                    .concat(i.view.slice(s.index))),
                  (i.viewTo += r))
                : hr(e);
            }
            var c = i.externalMeasured;
            c &&
              (n < c.lineN
                ? (c.lineN += r)
                : t < c.lineN + c.size && (i.externalMeasured = null));
          }
          function fr(e, t, n) {
            e.curOp.viewChanged = !0;
            var r = e.display,
              i = e.display.externalMeasured;
            if (
              (i &&
                t >= i.lineN &&
                t < i.lineN + i.size &&
                (r.externalMeasured = null),
              !(t < r.viewFrom || t >= r.viewTo))
            ) {
              var o = r.view[ur(e, t)];
              if (null != o.node) {
                var a = o.changes || (o.changes = []);
                -1 == R(a, n) && a.push(n);
              }
            }
          }
          function hr(e) {
            (e.display.viewFrom = e.display.viewTo = e.doc.first),
              (e.display.view = []),
              (e.display.viewOffset = 0);
          }
          function pr(e, t, n, r) {
            var i,
              o = ur(e, t),
              a = e.display.view;
            if (!kt || n == e.doc.first + e.doc.size)
              return { index: o, lineN: n };
            for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
            if (l != t) {
              if (r > 0) {
                if (o == a.length - 1) return null;
                (i = l + a[o].size - t), o++;
              } else i = l - t;
              (t += i), (n += i);
            }
            for (; Ht(e.doc, n) != n; ) {
              if (o == (r < 0 ? 0 : a.length - 1)) return null;
              (n += r * a[o - (r < 0 ? 1 : 0)].size), (o += r);
            }
            return { index: o, lineN: n };
          }
          function mr(e) {
            for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
              var i = t[r];
              i.hidden || (i.node && !i.changes) || ++n;
            }
            return n;
          }
          function gr(e) {
            e.display.input.showSelection(e.display.input.prepareSelection());
          }
          function vr(e, t) {
            void 0 === t && (t = !0);
            for (
              var n = e.doc,
                r = {},
                i = (r.cursors = document.createDocumentFragment()),
                o = (r.selection = document.createDocumentFragment()),
                a = 0;
              a < n.sel.ranges.length;
              a++
            )
              if (t || a != n.sel.primIndex) {
                var l = n.sel.ranges[a];
                if (
                  !(
                    l.from().line >= e.display.viewTo ||
                    l.to().line < e.display.viewFrom
                  )
                ) {
                  var s = l.empty();
                  (s || e.options.showCursorWhenSelecting) && yr(e, l.head, i),
                    s || wr(e, l, o);
                }
              }
            return r;
          }
          function yr(e, t, n) {
            var r = Gn(
                e,
                t,
                "div",
                null,
                null,
                !e.options.singleCursorHeightPerLine
              ),
              i = n.appendChild(N("div", " ", "CodeMirror-cursor"));
            if (
              ((i.style.left = r.left + "px"),
              (i.style.top = r.top + "px"),
              (i.style.height =
                Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px"),
              r.other)
            ) {
              var o = n.appendChild(
                N("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor")
              );
              (o.style.display = ""),
                (o.style.left = r.other.left + "px"),
                (o.style.top = r.other.top + "px"),
                (o.style.height = 0.85 * (r.other.bottom - r.other.top) + "px");
            }
          }
          function br(e, t) {
            return e.top - t.top || e.left - t.left;
          }
          function wr(e, t, n) {
            var r = e.display,
              i = e.doc,
              o = document.createDocumentFragment(),
              a = Tn(e.display),
              l = a.left,
              s = Math.max(r.sizerWidth, Mn(e) - r.sizer.offsetLeft) - a.right,
              c = "ltr" == i.direction;
            function u(e, t, n, r) {
              t < 0 && (t = 0),
                (t = Math.round(t)),
                (r = Math.round(r)),
                o.appendChild(
                  N(
                    "div",
                    null,
                    "CodeMirror-selected",
                    "position: absolute; left: " +
                      e +
                      "px;\n                             top: " +
                      t +
                      "px; width: " +
                      (null == n ? s - e : n) +
                      "px;\n                             height: " +
                      (r - t) +
                      "px"
                  )
                );
            }
            function d(t, n, r) {
              var o,
                a,
                d = Ve(i, t),
                f = d.text.length;
              function h(n, r) {
                return Vn(e, et(t, n), "div", d, r);
              }
              function p(t, n, r) {
                var i = Jn(e, d, null, t),
                  o = ("ltr" == n) == ("after" == r) ? "left" : "right";
                return h(
                  "after" == r
                    ? i.begin
                    : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1),
                  o
                )[o];
              }
              var m = ce(d, i.direction);
              return (
                (function (e, t, n, r) {
                  if (!e) return r(t, n, "ltr", 0);
                  for (var i = !1, o = 0; o < e.length; ++o) {
                    var a = e[o];
                    ((a.from < n && a.to > t) || (t == n && a.to == t)) &&
                      (r(
                        Math.max(a.from, t),
                        Math.min(a.to, n),
                        1 == a.level ? "rtl" : "ltr",
                        o
                      ),
                      (i = !0));
                  }
                  i || r(t, n, "ltr");
                })(m, n || 0, null == r ? f : r, function (e, t, i, d) {
                  var g = "ltr" == i,
                    v = h(e, g ? "left" : "right"),
                    y = h(t - 1, g ? "right" : "left"),
                    b = null == n && 0 == e,
                    w = null == r && t == f,
                    x = 0 == d,
                    k = !m || d == m.length - 1;
                  if (y.top - v.top <= 3) {
                    var C = (c ? w : b) && k,
                      S = (c ? b : w) && x ? l : (g ? v : y).left,
                      T = C ? s : (g ? y : v).right;
                    u(S, v.top, T - S, v.bottom);
                  } else {
                    var L, M, A, N;
                    g
                      ? ((L = c && b && x ? l : v.left),
                        (M = c ? s : p(e, i, "before")),
                        (A = c ? l : p(t, i, "after")),
                        (N = c && w && k ? s : y.right))
                      : ((L = c ? p(e, i, "before") : l),
                        (M = !c && b && x ? s : v.right),
                        (A = !c && w && k ? l : y.left),
                        (N = c ? p(t, i, "after") : s)),
                      u(L, v.top, M - L, v.bottom),
                      v.bottom < y.top && u(l, v.bottom, null, y.top),
                      u(A, y.top, N - A, y.bottom);
                  }
                  (!o || br(v, o) < 0) && (o = v),
                    br(y, o) < 0 && (o = y),
                    (!a || br(v, a) < 0) && (a = v),
                    br(y, a) < 0 && (a = y);
                }),
                { start: o, end: a }
              );
            }
            var f = t.from(),
              h = t.to();
            if (f.line == h.line) d(f.line, f.ch, h.ch);
            else {
              var p = Ve(i, f.line),
                m = Ve(i, h.line),
                g = Ft(p) == Ft(m),
                v = d(f.line, f.ch, g ? p.text.length + 1 : null).end,
                y = d(h.line, g ? 0 : null, h.ch).start;
              g &&
                (v.top < y.top - 2
                  ? (u(v.right, v.top, null, v.bottom),
                    u(l, y.top, y.left, y.bottom))
                  : u(v.right, v.top, y.left - v.right, v.bottom)),
                v.bottom < y.top && u(l, v.bottom, null, y.top);
            }
            n.appendChild(o);
          }
          function xr(e) {
            if (e.state.focused) {
              var t = e.display;
              clearInterval(t.blinker);
              var n = !0;
              (t.cursorDiv.style.visibility = ""),
                e.options.cursorBlinkRate > 0
                  ? (t.blinker = setInterval(function () {
                      e.hasFocus() || Tr(e),
                        (t.cursorDiv.style.visibility = (n = !n)
                          ? ""
                          : "hidden");
                    }, e.options.cursorBlinkRate))
                  : e.options.cursorBlinkRate < 0 &&
                    (t.cursorDiv.style.visibility = "hidden");
            }
          }
          function kr(e) {
            e.hasFocus() || (e.display.input.focus(), e.state.focused || Sr(e));
          }
          function Cr(e) {
            (e.state.delayingBlurEvent = !0),
              setTimeout(function () {
                e.state.delayingBlurEvent &&
                  ((e.state.delayingBlurEvent = !1), e.state.focused && Tr(e));
              }, 100);
          }
          function Sr(e, t) {
            e.state.delayingBlurEvent &&
              !e.state.draggingText &&
              (e.state.delayingBlurEvent = !1),
              "nocursor" != e.options.readOnly &&
                (e.state.focused ||
                  (pe(e, "focus", e, t),
                  (e.state.focused = !0),
                  z(e.display.wrapper, "CodeMirror-focused"),
                  e.curOp ||
                    e.display.selForContextMenu == e.doc.sel ||
                    (e.display.input.reset(),
                    s &&
                      setTimeout(function () {
                        return e.display.input.reset(!0);
                      }, 20)),
                  e.display.input.receivedFocus()),
                xr(e));
          }
          function Tr(e, t) {
            e.state.delayingBlurEvent ||
              (e.state.focused &&
                (pe(e, "blur", e, t),
                (e.state.focused = !1),
                L(e.display.wrapper, "CodeMirror-focused")),
              clearInterval(e.display.blinker),
              setTimeout(function () {
                e.state.focused || (e.display.shift = !1);
              }, 150));
          }
          function Lr(e) {
            for (
              var t = e.display, n = t.lineDiv.offsetTop, r = 0;
              r < t.view.length;
              r++
            ) {
              var i = t.view[r],
                o = e.options.lineWrapping,
                s = void 0,
                c = 0;
              if (!i.hidden) {
                if (a && l < 8) {
                  var u = i.node.offsetTop + i.node.offsetHeight;
                  (s = u - n), (n = u);
                } else {
                  var d = i.node.getBoundingClientRect();
                  (s = d.bottom - d.top),
                    !o &&
                      i.text.firstChild &&
                      (c =
                        i.text.firstChild.getBoundingClientRect().right -
                        d.left -
                        1);
                }
                var f = i.line.height - s;
                if (
                  (f > 0.005 || f < -0.005) &&
                  (Ye(i.line, s), Mr(i.line), i.rest)
                )
                  for (var h = 0; h < i.rest.length; h++) Mr(i.rest[h]);
                if (c > e.display.sizerWidth) {
                  var p = Math.ceil(c / ir(e.display));
                  p > e.display.maxLineLength &&
                    ((e.display.maxLineLength = p),
                    (e.display.maxLine = i.line),
                    (e.display.maxLineChanged = !0));
                }
              }
            }
          }
          function Mr(e) {
            if (e.widgets)
              for (var t = 0; t < e.widgets.length; ++t) {
                var n = e.widgets[t],
                  r = n.node.parentNode;
                r && (n.height = r.offsetHeight);
              }
          }
          function Ar(e, t, n) {
            var r =
              n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
            r = Math.floor(r - Cn(e));
            var i =
                n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
              o = Ze(t, r),
              a = Ze(t, i);
            if (n && n.ensure) {
              var l = n.ensure.from.line,
                s = n.ensure.to.line;
              l < o
                ? ((o = l), (a = Ze(t, qt(Ve(t, l)) + e.wrapper.clientHeight)))
                : Math.min(s, t.lastLine()) >= a &&
                  ((o = Ze(t, qt(Ve(t, s)) - e.wrapper.clientHeight)), (a = s));
            }
            return { from: o, to: Math.max(a, o + 1) };
          }
          function Nr(e, t) {
            var n = e.display,
              r = rr(e.display);
            t.top < 0 && (t.top = 0);
            var i =
                e.curOp && null != e.curOp.scrollTop
                  ? e.curOp.scrollTop
                  : n.scroller.scrollTop,
              o = An(e),
              a = {};
            t.bottom - t.top > o && (t.bottom = t.top + o);
            var l = e.doc.height + Sn(n),
              s = t.top < r,
              c = t.bottom > l - r;
            if (t.top < i) a.scrollTop = s ? 0 : t.top;
            else if (t.bottom > i + o) {
              var u = Math.min(t.top, (c ? l : t.bottom) - o);
              u != i && (a.scrollTop = u);
            }
            var d = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
              f =
                e.curOp && null != e.curOp.scrollLeft
                  ? e.curOp.scrollLeft
                  : n.scroller.scrollLeft - d,
              h = Mn(e) - n.gutters.offsetWidth,
              p = t.right - t.left > h;
            return (
              p && (t.right = t.left + h),
              t.left < 10
                ? (a.scrollLeft = 0)
                : t.left < f
                ? (a.scrollLeft = Math.max(0, t.left + d - (p ? 0 : 10)))
                : t.right > h + f - 3 &&
                  (a.scrollLeft = t.right + (p ? 0 : 10) - h),
              a
            );
          }
          function Or(e, t) {
            null != t &&
              (zr(e),
              (e.curOp.scrollTop =
                (null == e.curOp.scrollTop
                  ? e.doc.scrollTop
                  : e.curOp.scrollTop) + t));
          }
          function Er(e) {
            zr(e);
            var t = e.getCursor();
            e.curOp.scrollToPos = {
              from: t,
              to: t,
              margin: e.options.cursorScrollMargin,
            };
          }
          function _r(e, t, n) {
            (null == t && null == n) || zr(e),
              null != t && (e.curOp.scrollLeft = t),
              null != n && (e.curOp.scrollTop = n);
          }
          function zr(e) {
            var t = e.curOp.scrollToPos;
            t &&
              ((e.curOp.scrollToPos = null),
              Pr(e, $n(e, t.from), $n(e, t.to), t.margin));
          }
          function Pr(e, t, n, r) {
            var i = Nr(e, {
              left: Math.min(t.left, n.left),
              top: Math.min(t.top, n.top) - r,
              right: Math.max(t.right, n.right),
              bottom: Math.max(t.bottom, n.bottom) + r,
            });
            _r(e, i.scrollLeft, i.scrollTop);
          }
          function Dr(e, t) {
            Math.abs(e.doc.scrollTop - t) < 2 ||
              (n || si(e, { top: t }), Ir(e, t, !0), n && si(e), ri(e, 100));
          }
          function Ir(e, t, n) {
            (t = Math.max(
              0,
              Math.min(
                e.display.scroller.scrollHeight -
                  e.display.scroller.clientHeight,
                t
              )
            )),
              (e.display.scroller.scrollTop != t || n) &&
                ((e.doc.scrollTop = t),
                e.display.scrollbars.setScrollTop(t),
                e.display.scroller.scrollTop != t &&
                  (e.display.scroller.scrollTop = t));
          }
          function Wr(e, t, n, r) {
            (t = Math.max(
              0,
              Math.min(
                t,
                e.display.scroller.scrollWidth - e.display.scroller.clientWidth
              )
            )),
              ((n
                ? t == e.doc.scrollLeft
                : Math.abs(e.doc.scrollLeft - t) < 2) &&
                !r) ||
                ((e.doc.scrollLeft = t),
                di(e),
                e.display.scroller.scrollLeft != t &&
                  (e.display.scroller.scrollLeft = t),
                e.display.scrollbars.setScrollLeft(t));
          }
          function Fr(e) {
            var t = e.display,
              n = t.gutters.offsetWidth,
              r = Math.round(e.doc.height + Sn(e.display));
            return {
              clientHeight: t.scroller.clientHeight,
              viewHeight: t.wrapper.clientHeight,
              scrollWidth: t.scroller.scrollWidth,
              clientWidth: t.scroller.clientWidth,
              viewWidth: t.wrapper.clientWidth,
              barLeft: e.options.fixedGutter ? n : 0,
              docHeight: r,
              scrollHeight: r + Ln(e) + t.barHeight,
              nativeBarWidth: t.nativeBarWidth,
              gutterWidth: n,
            };
          }
          var Hr = function (e, t, n) {
            this.cm = n;
            var r = (this.vert = N(
                "div",
                [N("div", null, null, "min-width: 1px")],
                "CodeMirror-vscrollbar"
              )),
              i = (this.horiz = N(
                "div",
                [N("div", null, null, "height: 100%; min-height: 1px")],
                "CodeMirror-hscrollbar"
              ));
            (r.tabIndex = i.tabIndex = -1),
              e(r),
              e(i),
              de(r, "scroll", function () {
                r.clientHeight && t(r.scrollTop, "vertical");
              }),
              de(i, "scroll", function () {
                i.clientWidth && t(i.scrollLeft, "horizontal");
              }),
              (this.checkedZeroWidth = !1),
              a &&
                l < 8 &&
                (this.horiz.style.minHeight = this.vert.style.minWidth =
                  "18px");
          };
          (Hr.prototype.update = function (e) {
            var t = e.scrollWidth > e.clientWidth + 1,
              n = e.scrollHeight > e.clientHeight + 1,
              r = e.nativeBarWidth;
            if (n) {
              (this.vert.style.display = "block"),
                (this.vert.style.bottom = t ? r + "px" : "0");
              var i = e.viewHeight - (t ? r : 0);
              this.vert.firstChild.style.height =
                Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
            } else
              (this.vert.style.display = ""),
                (this.vert.firstChild.style.height = "0");
            if (t) {
              (this.horiz.style.display = "block"),
                (this.horiz.style.right = n ? r + "px" : "0"),
                (this.horiz.style.left = e.barLeft + "px");
              var o = e.viewWidth - e.barLeft - (n ? r : 0);
              this.horiz.firstChild.style.width =
                Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
            } else
              (this.horiz.style.display = ""),
                (this.horiz.firstChild.style.width = "0");
            return (
              !this.checkedZeroWidth &&
                e.clientHeight > 0 &&
                (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
              { right: n ? r : 0, bottom: t ? r : 0 }
            );
          }),
            (Hr.prototype.setScrollLeft = function (e) {
              this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                this.disableHoriz &&
                  this.enableZeroWidthBar(
                    this.horiz,
                    this.disableHoriz,
                    "horiz"
                  );
            }),
            (Hr.prototype.setScrollTop = function (e) {
              this.vert.scrollTop != e && (this.vert.scrollTop = e),
                this.disableVert &&
                  this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
            }),
            (Hr.prototype.zeroWidthHack = function () {
              var e = y && !h ? "12px" : "18px";
              (this.horiz.style.height = this.vert.style.width = e),
                (this.horiz.style.pointerEvents =
                  this.vert.style.pointerEvents =
                    "none"),
                (this.disableHoriz = new H()),
                (this.disableVert = new H());
            }),
            (Hr.prototype.enableZeroWidthBar = function (e, t, n) {
              (e.style.pointerEvents = "auto"),
                t.set(1e3, function r() {
                  var i = e.getBoundingClientRect();
                  ("vert" == n
                    ? document.elementFromPoint(
                        i.right - 1,
                        (i.top + i.bottom) / 2
                      )
                    : document.elementFromPoint(
                        (i.right + i.left) / 2,
                        i.bottom - 1
                      )) != e
                    ? (e.style.pointerEvents = "none")
                    : t.set(1e3, r);
                });
            }),
            (Hr.prototype.clear = function () {
              var e = this.horiz.parentNode;
              e.removeChild(this.horiz), e.removeChild(this.vert);
            });
          var Rr = function () {};
          function jr(e, t) {
            t || (t = Fr(e));
            var n = e.display.barWidth,
              r = e.display.barHeight;
            Br(e, t);
            for (
              var i = 0;
              (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
              i++
            )
              n != e.display.barWidth && e.options.lineWrapping && Lr(e),
                Br(e, Fr(e)),
                (n = e.display.barWidth),
                (r = e.display.barHeight);
          }
          function Br(e, t) {
            var n = e.display,
              r = n.scrollbars.update(t);
            (n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
              (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
              (n.heightForcer.style.borderBottom =
                r.bottom + "px solid transparent"),
              r.right && r.bottom
                ? ((n.scrollbarFiller.style.display = "block"),
                  (n.scrollbarFiller.style.height = r.bottom + "px"),
                  (n.scrollbarFiller.style.width = r.right + "px"))
                : (n.scrollbarFiller.style.display = ""),
              r.bottom &&
              e.options.coverGutterNextToScrollbar &&
              e.options.fixedGutter
                ? ((n.gutterFiller.style.display = "block"),
                  (n.gutterFiller.style.height = r.bottom + "px"),
                  (n.gutterFiller.style.width = t.gutterWidth + "px"))
                : (n.gutterFiller.style.display = "");
          }
          (Rr.prototype.update = function () {
            return { bottom: 0, right: 0 };
          }),
            (Rr.prototype.setScrollLeft = function () {}),
            (Rr.prototype.setScrollTop = function () {}),
            (Rr.prototype.clear = function () {});
          var qr = { native: Hr, null: Rr };
          function Ur(e) {
            e.display.scrollbars &&
              (e.display.scrollbars.clear(),
              e.display.scrollbars.addClass &&
                L(e.display.wrapper, e.display.scrollbars.addClass)),
              (e.display.scrollbars = new qr[e.options.scrollbarStyle](
                function (t) {
                  e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                    de(t, "mousedown", function () {
                      e.state.focused &&
                        setTimeout(function () {
                          return e.display.input.focus();
                        }, 0);
                    }),
                    t.setAttribute("cm-not-content", "true");
                },
                function (t, n) {
                  "horizontal" == n ? Wr(e, t) : Dr(e, t);
                },
                e
              )),
              e.display.scrollbars.addClass &&
                z(e.display.wrapper, e.display.scrollbars.addClass);
          }
          var Kr = 0;
          function Vr(e) {
            var t;
            (e.curOp = {
              cm: e,
              viewChanged: !1,
              startHeight: e.doc.height,
              forceUpdate: !1,
              updateInput: 0,
              typing: !1,
              changeObjs: null,
              cursorActivityHandlers: null,
              cursorActivityCalled: 0,
              selectionChanged: !1,
              updateMaxLine: !1,
              scrollLeft: null,
              scrollTop: null,
              scrollToPos: null,
              focus: !1,
              id: ++Kr,
              markArrays: null,
            }),
              (t = e.curOp),
              an
                ? an.ops.push(t)
                : (t.ownsGroup = an = { ops: [t], delayedCallbacks: [] });
          }
          function Gr(e) {
            var t = e.curOp;
            t &&
              (function (e, t) {
                var n = e.ownsGroup;
                if (n)
                  try {
                    !(function (e) {
                      var t = e.delayedCallbacks,
                        n = 0;
                      do {
                        for (; n < t.length; n++) t[n].call(null);
                        for (var r = 0; r < e.ops.length; r++) {
                          var i = e.ops[r];
                          if (i.cursorActivityHandlers)
                            for (
                              ;
                              i.cursorActivityCalled <
                              i.cursorActivityHandlers.length;

                            )
                              i.cursorActivityHandlers[
                                i.cursorActivityCalled++
                              ].call(null, i.cm);
                        }
                      } while (n < t.length);
                    })(n);
                  } finally {
                    (an = null), t(n);
                  }
              })(t, function (e) {
                for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                !(function (e) {
                  for (var t = e.ops, n = 0; n < t.length; n++) $r(t[n]);
                  for (var r = 0; r < t.length; r++) Yr(t[r]);
                  for (var i = 0; i < t.length; i++) Xr(t[i]);
                  for (var o = 0; o < t.length; o++) Zr(t[o]);
                  for (var a = 0; a < t.length; a++) Jr(t[a]);
                })(e);
              });
          }
          function $r(e) {
            var t = e.cm,
              n = t.display;
            (function (e) {
              var t = e.display;
              !t.scrollbarsClipped &&
                t.scroller.offsetWidth &&
                ((t.nativeBarWidth =
                  t.scroller.offsetWidth - t.scroller.clientWidth),
                (t.heightForcer.style.height = Ln(e) + "px"),
                (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
                (t.sizer.style.borderRightWidth = Ln(e) + "px"),
                (t.scrollbarsClipped = !0));
            })(t),
              e.updateMaxLine && Kt(t),
              (e.mustUpdate =
                e.viewChanged ||
                e.forceUpdate ||
                null != e.scrollTop ||
                (e.scrollToPos &&
                  (e.scrollToPos.from.line < n.viewFrom ||
                    e.scrollToPos.to.line >= n.viewTo)) ||
                (n.maxLineChanged && t.options.lineWrapping)),
              (e.update =
                e.mustUpdate &&
                new oi(
                  t,
                  e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                  e.forceUpdate
                ));
          }
          function Yr(e) {
            e.updatedDisplay = e.mustUpdate && ai(e.cm, e.update);
          }
          function Xr(e) {
            var t = e.cm,
              n = t.display;
            e.updatedDisplay && Lr(t),
              (e.barMeasure = Fr(t)),
              n.maxLineChanged &&
                !t.options.lineWrapping &&
                ((e.adjustWidthTo =
                  On(t, n.maxLine, n.maxLine.text.length).left + 3),
                (t.display.sizerWidth = e.adjustWidthTo),
                (e.barMeasure.scrollWidth = Math.max(
                  n.scroller.clientWidth,
                  n.sizer.offsetLeft +
                    e.adjustWidthTo +
                    Ln(t) +
                    t.display.barWidth
                )),
                (e.maxScrollLeft = Math.max(
                  0,
                  n.sizer.offsetLeft + e.adjustWidthTo - Mn(t)
                ))),
              (e.updatedDisplay || e.selectionChanged) &&
                (e.preparedSelection = n.input.prepareSelection());
          }
          function Zr(e) {
            var t = e.cm;
            null != e.adjustWidthTo &&
              ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
              e.maxScrollLeft < t.doc.scrollLeft &&
                Wr(
                  t,
                  Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
                  !0
                ),
              (t.display.maxLineChanged = !1));
            var n = e.focus && e.focus == _();
            e.preparedSelection &&
              t.display.input.showSelection(e.preparedSelection, n),
              (e.updatedDisplay || e.startHeight != t.doc.height) &&
                jr(t, e.barMeasure),
              e.updatedDisplay && ui(t, e.barMeasure),
              e.selectionChanged && xr(t),
              t.state.focused &&
                e.updateInput &&
                t.display.input.reset(e.typing),
              n && kr(e.cm);
          }
          function Jr(e) {
            var t = e.cm,
              n = t.display,
              r = t.doc;
            e.updatedDisplay && li(t, e.update),
              null == n.wheelStartX ||
                (null == e.scrollTop &&
                  null == e.scrollLeft &&
                  !e.scrollToPos) ||
                (n.wheelStartX = n.wheelStartY = null),
              null != e.scrollTop && Ir(t, e.scrollTop, e.forceScroll),
              null != e.scrollLeft && Wr(t, e.scrollLeft, !0, !0),
              e.scrollToPos &&
                (function (e, t) {
                  if (!me(e, "scrollCursorIntoView")) {
                    var n = e.display,
                      r = n.sizer.getBoundingClientRect(),
                      i = null;
                    if (
                      (t.top + r.top < 0
                        ? (i = !0)
                        : t.bottom + r.top >
                            (window.innerHeight ||
                              document.documentElement.clientHeight) &&
                          (i = !1),
                      null != i && !p)
                    ) {
                      var o = N(
                        "div",
                        "​",
                        null,
                        "position: absolute;\n                         top: " +
                          (t.top - n.viewOffset - Cn(e.display)) +
                          "px;\n                         height: " +
                          (t.bottom - t.top + Ln(e) + n.barHeight) +
                          "px;\n                         left: " +
                          t.left +
                          "px; width: " +
                          Math.max(2, t.right - t.left) +
                          "px;"
                      );
                      e.display.lineSpace.appendChild(o),
                        o.scrollIntoView(i),
                        e.display.lineSpace.removeChild(o);
                    }
                  }
                })(
                  t,
                  (function (e, t, n, r) {
                    var i;
                    null == r && (r = 0),
                      e.options.lineWrapping ||
                        t != n ||
                        ((n =
                          "before" == t.sticky
                            ? et(t.line, t.ch + 1, "before")
                            : t),
                        (t = t.ch
                          ? et(
                              t.line,
                              "before" == t.sticky ? t.ch - 1 : t.ch,
                              "after"
                            )
                          : t));
                    for (var o = 0; o < 5; o++) {
                      var a = !1,
                        l = Gn(e, t),
                        s = n && n != t ? Gn(e, n) : l,
                        c = Nr(
                          e,
                          (i = {
                            left: Math.min(l.left, s.left),
                            top: Math.min(l.top, s.top) - r,
                            right: Math.max(l.left, s.left),
                            bottom: Math.max(l.bottom, s.bottom) + r,
                          })
                        ),
                        u = e.doc.scrollTop,
                        d = e.doc.scrollLeft;
                      if (
                        (null != c.scrollTop &&
                          (Dr(e, c.scrollTop),
                          Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)),
                        null != c.scrollLeft &&
                          (Wr(e, c.scrollLeft),
                          Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)),
                        !a)
                      )
                        break;
                    }
                    return i;
                  })(
                    t,
                    lt(r, e.scrollToPos.from),
                    lt(r, e.scrollToPos.to),
                    e.scrollToPos.margin
                  )
                );
            var i = e.maybeHiddenMarkers,
              o = e.maybeUnhiddenMarkers;
            if (i)
              for (var a = 0; a < i.length; ++a)
                i[a].lines.length || pe(i[a], "hide");
            if (o)
              for (var l = 0; l < o.length; ++l)
                o[l].lines.length && pe(o[l], "unhide");
            n.wrapper.offsetHeight &&
              (r.scrollTop = t.display.scroller.scrollTop),
              e.changeObjs && pe(t, "changes", t, e.changeObjs),
              e.update && e.update.finish();
          }
          function Qr(e, t) {
            if (e.curOp) return t();
            Vr(e);
            try {
              return t();
            } finally {
              Gr(e);
            }
          }
          function ei(e, t) {
            return function () {
              if (e.curOp) return t.apply(e, arguments);
              Vr(e);
              try {
                return t.apply(e, arguments);
              } finally {
                Gr(e);
              }
            };
          }
          function ti(e) {
            return function () {
              if (this.curOp) return e.apply(this, arguments);
              Vr(this);
              try {
                return e.apply(this, arguments);
              } finally {
                Gr(this);
              }
            };
          }
          function ni(e) {
            return function () {
              var t = this.cm;
              if (!t || t.curOp) return e.apply(this, arguments);
              Vr(t);
              try {
                return e.apply(this, arguments);
              } finally {
                Gr(t);
              }
            };
          }
          function ri(e, t) {
            e.doc.highlightFrontier < e.display.viewTo &&
              e.state.highlight.set(t, I(ii, e));
          }
          function ii(e) {
            var t = e.doc;
            if (!(t.highlightFrontier >= e.display.viewTo)) {
              var n = +new Date() + e.options.workTime,
                r = ht(e, t.highlightFrontier),
                i = [];
              t.iter(
                r.line,
                Math.min(t.first + t.size, e.display.viewTo + 500),
                function (o) {
                  if (r.line >= e.display.viewFrom) {
                    var a = o.styles,
                      l =
                        o.text.length > e.options.maxHighlightLength
                          ? Be(t.mode, r.state)
                          : null,
                      s = dt(e, o, r, !0);
                    l && (r.state = l), (o.styles = s.styles);
                    var c = o.styleClasses,
                      u = s.classes;
                    u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                    for (
                      var d =
                          !a ||
                          a.length != o.styles.length ||
                          (c != u &&
                            (!c ||
                              !u ||
                              c.bgClass != u.bgClass ||
                              c.textClass != u.textClass)),
                        f = 0;
                      !d && f < a.length;
                      ++f
                    )
                      d = a[f] != o.styles[f];
                    d && i.push(r.line),
                      (o.stateAfter = r.save()),
                      r.nextLine();
                  } else
                    o.text.length <= e.options.maxHighlightLength &&
                      pt(e, o.text, r),
                      (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                      r.nextLine();
                  if (+new Date() > n) return ri(e, e.options.workDelay), !0;
                }
              ),
                (t.highlightFrontier = r.line),
                (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
                i.length &&
                  Qr(e, function () {
                    for (var t = 0; t < i.length; t++) fr(e, i[t], "text");
                  });
            }
          }
          var oi = function (e, t, n) {
            var r = e.display;
            (this.viewport = t),
              (this.visible = Ar(r, e.doc, t)),
              (this.editorIsHidden = !r.wrapper.offsetWidth),
              (this.wrapperHeight = r.wrapper.clientHeight),
              (this.wrapperWidth = r.wrapper.clientWidth),
              (this.oldDisplayWidth = Mn(e)),
              (this.force = n),
              (this.dims = or(e)),
              (this.events = []);
          };
          function ai(e, t) {
            var n = e.display,
              r = e.doc;
            if (t.editorIsHidden) return hr(e), !1;
            if (
              !t.force &&
              t.visible.from >= n.viewFrom &&
              t.visible.to <= n.viewTo &&
              (null == n.updateLineNumbers ||
                n.updateLineNumbers >= n.viewTo) &&
              n.renderedView == n.view &&
              0 == mr(e)
            )
              return !1;
            fi(e) && (hr(e), (t.dims = or(e)));
            var i = r.first + r.size,
              o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
              a = Math.min(i, t.visible.to + e.options.viewportMargin);
            n.viewFrom < o &&
              o - n.viewFrom < 20 &&
              (o = Math.max(r.first, n.viewFrom)),
              n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)),
              kt && ((o = Ht(e.doc, o)), (a = Rt(e.doc, a)));
            var l =
              o != n.viewFrom ||
              a != n.viewTo ||
              n.lastWrapHeight != t.wrapperHeight ||
              n.lastWrapWidth != t.wrapperWidth;
            (function (e, t, n) {
              var r = e.display;
              0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
                ? ((r.view = on(e, t, n)), (r.viewFrom = t))
                : (r.viewFrom > t
                    ? (r.view = on(e, t, r.viewFrom).concat(r.view))
                    : r.viewFrom < t && (r.view = r.view.slice(ur(e, t))),
                  (r.viewFrom = t),
                  r.viewTo < n
                    ? (r.view = r.view.concat(on(e, r.viewTo, n)))
                    : r.viewTo > n && (r.view = r.view.slice(0, ur(e, n)))),
                (r.viewTo = n);
            })(e, o, a),
              (n.viewOffset = qt(Ve(e.doc, n.viewFrom))),
              (e.display.mover.style.top = n.viewOffset + "px");
            var c = mr(e);
            if (
              !l &&
              0 == c &&
              !t.force &&
              n.renderedView == n.view &&
              (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
            )
              return !1;
            var u = (function (e) {
              if (e.hasFocus()) return null;
              var t = _();
              if (!t || !E(e.display.lineDiv, t)) return null;
              var n = { activeElt: t };
              if (window.getSelection) {
                var r = window.getSelection();
                r.anchorNode &&
                  r.extend &&
                  E(e.display.lineDiv, r.anchorNode) &&
                  ((n.anchorNode = r.anchorNode),
                  (n.anchorOffset = r.anchorOffset),
                  (n.focusNode = r.focusNode),
                  (n.focusOffset = r.focusOffset));
              }
              return n;
            })(e);
            return (
              c > 4 && (n.lineDiv.style.display = "none"),
              (function (e, t, n) {
                var r = e.display,
                  i = e.options.lineNumbers,
                  o = r.lineDiv,
                  a = o.firstChild;
                function l(t) {
                  var n = t.nextSibling;
                  return (
                    s && y && e.display.currentWheelTarget == t
                      ? (t.style.display = "none")
                      : t.parentNode.removeChild(t),
                    n
                  );
                }
                for (var c = r.view, u = r.viewFrom, d = 0; d < c.length; d++) {
                  var f = c[d];
                  if (f.hidden);
                  else if (f.node && f.node.parentNode == o) {
                    for (; a != f.node; ) a = l(a);
                    var h = i && null != t && t <= u && f.lineNumber;
                    f.changes &&
                      (R(f.changes, "gutter") > -1 && (h = !1), un(e, f, u, n)),
                      h &&
                        (M(f.lineNumber),
                        f.lineNumber.appendChild(
                          document.createTextNode(Qe(e.options, u))
                        )),
                      (a = f.node.nextSibling);
                  } else {
                    var p = vn(e, f, u, n);
                    o.insertBefore(p, a);
                  }
                  u += f.size;
                }
                for (; a; ) a = l(a);
              })(e, n.updateLineNumbers, t.dims),
              c > 4 && (n.lineDiv.style.display = ""),
              (n.renderedView = n.view),
              (function (e) {
                if (
                  e &&
                  e.activeElt &&
                  e.activeElt != _() &&
                  (e.activeElt.focus(),
                  !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                    e.anchorNode &&
                    E(document.body, e.anchorNode) &&
                    E(document.body, e.focusNode))
                ) {
                  var t = window.getSelection(),
                    n = document.createRange();
                  n.setEnd(e.anchorNode, e.anchorOffset),
                    n.collapse(!1),
                    t.removeAllRanges(),
                    t.addRange(n),
                    t.extend(e.focusNode, e.focusOffset);
                }
              })(u),
              M(n.cursorDiv),
              M(n.selectionDiv),
              (n.gutters.style.height = n.sizer.style.minHeight = 0),
              l &&
                ((n.lastWrapHeight = t.wrapperHeight),
                (n.lastWrapWidth = t.wrapperWidth),
                ri(e, 400)),
              (n.updateLineNumbers = null),
              !0
            );
          }
          function li(e, t) {
            for (var n = t.viewport, r = !0; ; r = !1) {
              if (r && e.options.lineWrapping && t.oldDisplayWidth != Mn(e))
                r && (t.visible = Ar(e.display, e.doc, n));
              else if (
                (n &&
                  null != n.top &&
                  (n = {
                    top: Math.min(e.doc.height + Sn(e.display) - An(e), n.top),
                  }),
                (t.visible = Ar(e.display, e.doc, n)),
                t.visible.from >= e.display.viewFrom &&
                  t.visible.to <= e.display.viewTo)
              )
                break;
              if (!ai(e, t)) break;
              Lr(e);
              var i = Fr(e);
              gr(e), jr(e, i), ui(e, i), (t.force = !1);
            }
            t.signal(e, "update", e),
              (e.display.viewFrom == e.display.reportedViewFrom &&
                e.display.viewTo == e.display.reportedViewTo) ||
                (t.signal(
                  e,
                  "viewportChange",
                  e,
                  e.display.viewFrom,
                  e.display.viewTo
                ),
                (e.display.reportedViewFrom = e.display.viewFrom),
                (e.display.reportedViewTo = e.display.viewTo));
          }
          function si(e, t) {
            var n = new oi(e, t);
            if (ai(e, n)) {
              Lr(e), li(e, n);
              var r = Fr(e);
              gr(e), jr(e, r), ui(e, r), n.finish();
            }
          }
          function ci(e) {
            var t = e.gutters.offsetWidth;
            (e.sizer.style.marginLeft = t + "px"), sn(e, "gutterChanged", e);
          }
          function ui(e, t) {
            (e.display.sizer.style.minHeight = t.docHeight + "px"),
              (e.display.heightForcer.style.top = t.docHeight + "px"),
              (e.display.gutters.style.height =
                t.docHeight + e.display.barHeight + Ln(e) + "px");
          }
          function di(e) {
            var t = e.display,
              n = t.view;
            if (
              t.alignWidgets ||
              (t.gutters.firstChild && e.options.fixedGutter)
            ) {
              for (
                var r = ar(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                  i = t.gutters.offsetWidth,
                  o = r + "px",
                  a = 0;
                a < n.length;
                a++
              )
                if (!n[a].hidden) {
                  e.options.fixedGutter &&
                    (n[a].gutter && (n[a].gutter.style.left = o),
                    n[a].gutterBackground &&
                      (n[a].gutterBackground.style.left = o));
                  var l = n[a].alignable;
                  if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o;
                }
              e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
            }
          }
          function fi(e) {
            if (!e.options.lineNumbers) return !1;
            var t = e.doc,
              n = Qe(e.options, t.first + t.size - 1),
              r = e.display;
            if (n.length != r.lineNumChars) {
              var i = r.measure.appendChild(
                  N(
                    "div",
                    [N("div", n)],
                    "CodeMirror-linenumber CodeMirror-gutter-elt"
                  )
                ),
                o = i.firstChild.offsetWidth,
                a = i.offsetWidth - o;
              return (
                (r.lineGutter.style.width = ""),
                (r.lineNumInnerWidth =
                  Math.max(o, r.lineGutter.offsetWidth - a) + 1),
                (r.lineNumWidth = r.lineNumInnerWidth + a),
                (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
                (r.lineGutter.style.width = r.lineNumWidth + "px"),
                ci(e.display),
                !0
              );
            }
            return !1;
          }
          function hi(e, t) {
            for (var n = [], r = !1, i = 0; i < e.length; i++) {
              var o = e[i],
                a = null;
              if (
                ("string" != typeof o && ((a = o.style), (o = o.className)),
                "CodeMirror-linenumbers" == o)
              ) {
                if (!t) continue;
                r = !0;
              }
              n.push({ className: o, style: a });
            }
            return (
              t &&
                !r &&
                n.push({ className: "CodeMirror-linenumbers", style: null }),
              n
            );
          }
          function pi(e) {
            var t = e.gutters,
              n = e.gutterSpecs;
            M(t), (e.lineGutter = null);
            for (var r = 0; r < n.length; ++r) {
              var i = n[r],
                o = i.className,
                a = i.style,
                l = t.appendChild(N("div", null, "CodeMirror-gutter " + o));
              a && (l.style.cssText = a),
                "CodeMirror-linenumbers" == o &&
                  ((e.lineGutter = l),
                  (l.style.width = (e.lineNumWidth || 1) + "px"));
            }
            (t.style.display = n.length ? "" : "none"), ci(e);
          }
          function mi(e) {
            pi(e.display), dr(e), di(e);
          }
          function gi(e, t, r, i) {
            var o = this;
            (this.input = r),
              (o.scrollbarFiller = N(
                "div",
                null,
                "CodeMirror-scrollbar-filler"
              )),
              o.scrollbarFiller.setAttribute("cm-not-content", "true"),
              (o.gutterFiller = N("div", null, "CodeMirror-gutter-filler")),
              o.gutterFiller.setAttribute("cm-not-content", "true"),
              (o.lineDiv = O("div", null, "CodeMirror-code")),
              (o.selectionDiv = N(
                "div",
                null,
                null,
                "position: relative; z-index: 1"
              )),
              (o.cursorDiv = N("div", null, "CodeMirror-cursors")),
              (o.measure = N("div", null, "CodeMirror-measure")),
              (o.lineMeasure = N("div", null, "CodeMirror-measure")),
              (o.lineSpace = O(
                "div",
                [
                  o.measure,
                  o.lineMeasure,
                  o.selectionDiv,
                  o.cursorDiv,
                  o.lineDiv,
                ],
                null,
                "position: relative; outline: none"
              ));
            var c = O("div", [o.lineSpace], "CodeMirror-lines");
            (o.mover = N("div", [c], null, "position: relative")),
              (o.sizer = N("div", [o.mover], "CodeMirror-sizer")),
              (o.sizerWidth = null),
              (o.heightForcer = N(
                "div",
                null,
                null,
                "position: absolute; height: 50px; width: 1px;"
              )),
              (o.gutters = N("div", null, "CodeMirror-gutters")),
              (o.lineGutter = null),
              (o.scroller = N(
                "div",
                [o.sizer, o.heightForcer, o.gutters],
                "CodeMirror-scroll"
              )),
              o.scroller.setAttribute("tabIndex", "-1"),
              (o.wrapper = N(
                "div",
                [o.scrollbarFiller, o.gutterFiller, o.scroller],
                "CodeMirror"
              )),
              a &&
                l < 8 &&
                ((o.gutters.style.zIndex = -1),
                (o.scroller.style.paddingRight = 0)),
              s || (n && v) || (o.scroller.draggable = !0),
              e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
              (o.viewFrom = o.viewTo = t.first),
              (o.reportedViewFrom = o.reportedViewTo = t.first),
              (o.view = []),
              (o.renderedView = null),
              (o.externalMeasured = null),
              (o.viewOffset = 0),
              (o.lastWrapHeight = o.lastWrapWidth = 0),
              (o.updateLineNumbers = null),
              (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
              (o.scrollbarsClipped = !1),
              (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
              (o.alignWidgets = !1),
              (o.cachedCharWidth =
                o.cachedTextHeight =
                o.cachedPaddingH =
                  null),
              (o.maxLine = null),
              (o.maxLineLength = 0),
              (o.maxLineChanged = !1),
              (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
              (o.shift = !1),
              (o.selForContextMenu = null),
              (o.activeTouch = null),
              (o.gutterSpecs = hi(i.gutters, i.lineNumbers)),
              pi(o),
              r.init(o);
          }
          (oi.prototype.signal = function (e, t) {
            ve(e, t) && this.events.push(arguments);
          }),
            (oi.prototype.finish = function () {
              for (var e = 0; e < this.events.length; e++)
                pe.apply(null, this.events[e]);
            });
          var vi = 0,
            yi = null;
          function bi(e) {
            var t = e.wheelDeltaX,
              n = e.wheelDeltaY;
            return (
              null == t &&
                e.detail &&
                e.axis == e.HORIZONTAL_AXIS &&
                (t = e.detail),
              null == n && e.detail && e.axis == e.VERTICAL_AXIS
                ? (n = e.detail)
                : null == n && (n = e.wheelDelta),
              { x: t, y: n }
            );
          }
          function wi(e) {
            var t = bi(e);
            return (t.x *= yi), (t.y *= yi), t;
          }
          function xi(e, t) {
            var r = bi(t),
              i = r.x,
              o = r.y,
              a = e.display,
              l = a.scroller,
              c = l.scrollWidth > l.clientWidth,
              u = l.scrollHeight > l.clientHeight;
            if ((i && c) || (o && u)) {
              if (o && y && s)
                e: for (var f = t.target, h = a.view; f != l; f = f.parentNode)
                  for (var p = 0; p < h.length; p++)
                    if (h[p].node == f) {
                      e.display.currentWheelTarget = f;
                      break e;
                    }
              if (i && !n && !d && null != yi)
                return (
                  o && u && Dr(e, Math.max(0, l.scrollTop + o * yi)),
                  Wr(e, Math.max(0, l.scrollLeft + i * yi)),
                  (!o || (o && u)) && be(t),
                  void (a.wheelStartX = null)
                );
              if (o && null != yi) {
                var m = o * yi,
                  g = e.doc.scrollTop,
                  v = g + a.wrapper.clientHeight;
                m < 0
                  ? (g = Math.max(0, g + m - 50))
                  : (v = Math.min(e.doc.height, v + m + 50)),
                  si(e, { top: g, bottom: v });
              }
              vi < 20 &&
                (null == a.wheelStartX
                  ? ((a.wheelStartX = l.scrollLeft),
                    (a.wheelStartY = l.scrollTop),
                    (a.wheelDX = i),
                    (a.wheelDY = o),
                    setTimeout(function () {
                      if (null != a.wheelStartX) {
                        var e = l.scrollLeft - a.wheelStartX,
                          t = l.scrollTop - a.wheelStartY,
                          n =
                            (t && a.wheelDY && t / a.wheelDY) ||
                            (e && a.wheelDX && e / a.wheelDX);
                        (a.wheelStartX = a.wheelStartY = null),
                          n && ((yi = (yi * vi + n) / (vi + 1)), ++vi);
                      }
                    }, 200))
                  : ((a.wheelDX += i), (a.wheelDY += o)));
            }
          }
          a
            ? (yi = -0.53)
            : n
            ? (yi = 15)
            : u
            ? (yi = -0.7)
            : f && (yi = -1 / 3);
          var ki = function (e, t) {
            (this.ranges = e), (this.primIndex = t);
          };
          (ki.prototype.primary = function () {
            return this.ranges[this.primIndex];
          }),
            (ki.prototype.equals = function (e) {
              if (e == this) return !0;
              if (
                e.primIndex != this.primIndex ||
                e.ranges.length != this.ranges.length
              )
                return !1;
              for (var t = 0; t < this.ranges.length; t++) {
                var n = this.ranges[t],
                  r = e.ranges[t];
                if (!nt(n.anchor, r.anchor) || !nt(n.head, r.head)) return !1;
              }
              return !0;
            }),
            (ki.prototype.deepCopy = function () {
              for (var e = [], t = 0; t < this.ranges.length; t++)
                e[t] = new Ci(
                  rt(this.ranges[t].anchor),
                  rt(this.ranges[t].head)
                );
              return new ki(e, this.primIndex);
            }),
            (ki.prototype.somethingSelected = function () {
              for (var e = 0; e < this.ranges.length; e++)
                if (!this.ranges[e].empty()) return !0;
              return !1;
            }),
            (ki.prototype.contains = function (e, t) {
              t || (t = e);
              for (var n = 0; n < this.ranges.length; n++) {
                var r = this.ranges[n];
                if (tt(t, r.from()) >= 0 && tt(e, r.to()) <= 0) return n;
              }
              return -1;
            });
          var Ci = function (e, t) {
            (this.anchor = e), (this.head = t);
          };
          function Si(e, t, n) {
            var r = e && e.options.selectionsMayTouch,
              i = t[n];
            t.sort(function (e, t) {
              return tt(e.from(), t.from());
            }),
              (n = R(t, i));
            for (var o = 1; o < t.length; o++) {
              var a = t[o],
                l = t[o - 1],
                s = tt(l.to(), a.from());
              if (r && !a.empty() ? s > 0 : s >= 0) {
                var c = ot(l.from(), a.from()),
                  u = it(l.to(), a.to()),
                  d = l.empty() ? a.from() == a.head : l.from() == l.head;
                o <= n && --n, t.splice(--o, 2, new Ci(d ? u : c, d ? c : u));
              }
            }
            return new ki(t, n);
          }
          function Ti(e, t) {
            return new ki([new Ci(e, t || e)], 0);
          }
          function Li(e) {
            return e.text
              ? et(
                  e.from.line + e.text.length - 1,
                  $(e.text).length + (1 == e.text.length ? e.from.ch : 0)
                )
              : e.to;
          }
          function Mi(e, t) {
            if (tt(e, t.from) < 0) return e;
            if (tt(e, t.to) <= 0) return Li(t);
            var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
              r = e.ch;
            return e.line == t.to.line && (r += Li(t).ch - t.to.ch), et(n, r);
          }
          function Ai(e, t) {
            for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
              var i = e.sel.ranges[r];
              n.push(new Ci(Mi(i.anchor, t), Mi(i.head, t)));
            }
            return Si(e.cm, n, e.sel.primIndex);
          }
          function Ni(e, t, n) {
            return e.line == t.line
              ? et(n.line, e.ch - t.ch + n.ch)
              : et(n.line + (e.line - t.line), e.ch);
          }
          function Oi(e) {
            (e.doc.mode = He(e.options, e.doc.modeOption)), Ei(e);
          }
          function Ei(e) {
            e.doc.iter(function (e) {
              e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null);
            }),
              (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
              ri(e, 100),
              e.state.modeGen++,
              e.curOp && dr(e);
          }
          function _i(e, t) {
            return (
              0 == t.from.ch &&
              0 == t.to.ch &&
              "" == $(t.text) &&
              (!e.cm || e.cm.options.wholeLineUpdateBefore)
            );
          }
          function zi(e, t, n, r) {
            function i(e) {
              return n ? n[e] : null;
            }
            function o(e, n, i) {
              (function (e, t, n, r) {
                (e.text = t),
                  e.stateAfter && (e.stateAfter = null),
                  e.styles && (e.styles = null),
                  null != e.order && (e.order = null),
                  At(e),
                  Nt(e, n);
                var i = r ? r(e) : 1;
                i != e.height && Ye(e, i);
              })(e, n, i, r),
                sn(e, "change", e, t);
            }
            function a(e, t) {
              for (var n = [], o = e; o < t; ++o) n.push(new Vt(c[o], i(o), r));
              return n;
            }
            var l = t.from,
              s = t.to,
              c = t.text,
              u = Ve(e, l.line),
              d = Ve(e, s.line),
              f = $(c),
              h = i(c.length - 1),
              p = s.line - l.line;
            if (t.full)
              e.insert(0, a(0, c.length)),
                e.remove(c.length, e.size - c.length);
            else if (_i(e, t)) {
              var m = a(0, c.length - 1);
              o(d, d.text, h),
                p && e.remove(l.line, p),
                m.length && e.insert(l.line, m);
            } else if (u == d)
              if (1 == c.length)
                o(u, u.text.slice(0, l.ch) + f + u.text.slice(s.ch), h);
              else {
                var g = a(1, c.length - 1);
                g.push(new Vt(f + u.text.slice(s.ch), h, r)),
                  o(u, u.text.slice(0, l.ch) + c[0], i(0)),
                  e.insert(l.line + 1, g);
              }
            else if (1 == c.length)
              o(u, u.text.slice(0, l.ch) + c[0] + d.text.slice(s.ch), i(0)),
                e.remove(l.line + 1, p);
            else {
              o(u, u.text.slice(0, l.ch) + c[0], i(0)),
                o(d, f + d.text.slice(s.ch), h);
              var v = a(1, c.length - 1);
              p > 1 && e.remove(l.line + 1, p - 1), e.insert(l.line + 1, v);
            }
            sn(e, "change", e, t);
          }
          function Pi(e, t, n) {
            !(function e(r, i, o) {
              if (r.linked)
                for (var a = 0; a < r.linked.length; ++a) {
                  var l = r.linked[a];
                  if (l.doc != i) {
                    var s = o && l.sharedHist;
                    (n && !s) || (t(l.doc, s), e(l.doc, r, s));
                  }
                }
            })(e, null, !0);
          }
          function Di(e, t) {
            if (t.cm) throw new Error("This document is already in use.");
            (e.doc = t),
              (t.cm = e),
              sr(e),
              Oi(e),
              Ii(e),
              (e.options.direction = t.direction),
              e.options.lineWrapping || Kt(e),
              (e.options.mode = t.modeOption),
              dr(e);
          }
          function Ii(e) {
            ("rtl" == e.doc.direction ? z : L)(
              e.display.lineDiv,
              "CodeMirror-rtl"
            );
          }
          function Wi(e) {
            (this.done = []),
              (this.undone = []),
              (this.undoDepth = e ? e.undoDepth : 1 / 0),
              (this.lastModTime = this.lastSelTime = 0),
              (this.lastOp = this.lastSelOp = null),
              (this.lastOrigin = this.lastSelOrigin = null),
              (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
          }
          function Fi(e, t) {
            var n = { from: rt(t.from), to: Li(t), text: Ge(e, t.from, t.to) };
            return (
              qi(e, n, t.from.line, t.to.line + 1),
              Pi(
                e,
                function (e) {
                  return qi(e, n, t.from.line, t.to.line + 1);
                },
                !0
              ),
              n
            );
          }
          function Hi(e) {
            for (; e.length && $(e).ranges; ) e.pop();
          }
          function Ri(e, t, n, r) {
            var i = e.history;
            i.undone.length = 0;
            var o,
              a,
              l = +new Date();
            if (
              (i.lastOp == r ||
                (i.lastOrigin == t.origin &&
                  t.origin &&
                  (("+" == t.origin.charAt(0) &&
                    i.lastModTime >
                      l - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                    "*" == t.origin.charAt(0)))) &&
              (o = (function (e, t) {
                return t
                  ? (Hi(e.done), $(e.done))
                  : e.done.length && !$(e.done).ranges
                  ? $(e.done)
                  : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                  ? (e.done.pop(), $(e.done))
                  : void 0;
              })(i, i.lastOp == r))
            )
              (a = $(o.changes)),
                0 == tt(t.from, t.to) && 0 == tt(t.from, a.to)
                  ? (a.to = Li(t))
                  : o.changes.push(Fi(e, t));
            else {
              var s = $(i.done);
              for (
                (s && s.ranges) || Bi(e.sel, i.done),
                  o = { changes: [Fi(e, t)], generation: i.generation },
                  i.done.push(o);
                i.done.length > i.undoDepth;

              )
                i.done.shift(), i.done[0].ranges || i.done.shift();
            }
            i.done.push(n),
              (i.generation = ++i.maxGeneration),
              (i.lastModTime = i.lastSelTime = l),
              (i.lastOp = i.lastSelOp = r),
              (i.lastOrigin = i.lastSelOrigin = t.origin),
              a || pe(e, "historyAdded");
          }
          function ji(e, t, n, r) {
            var i = e.history,
              o = r && r.origin;
            n == i.lastSelOp ||
            (o &&
              i.lastSelOrigin == o &&
              ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
                (function (e, t, n, r) {
                  var i = t.charAt(0);
                  return (
                    "*" == i ||
                    ("+" == i &&
                      n.ranges.length == r.ranges.length &&
                      n.somethingSelected() == r.somethingSelected() &&
                      new Date() - e.history.lastSelTime <=
                        (e.cm ? e.cm.options.historyEventDelay : 500))
                  );
                })(e, o, $(i.done), t)))
              ? (i.done[i.done.length - 1] = t)
              : Bi(t, i.done),
              (i.lastSelTime = +new Date()),
              (i.lastSelOrigin = o),
              (i.lastSelOp = n),
              r && !1 !== r.clearRedo && Hi(i.undone);
          }
          function Bi(e, t) {
            var n = $(t);
            (n && n.ranges && n.equals(e)) || t.push(e);
          }
          function qi(e, t, n, r) {
            var i = t["spans_" + e.id],
              o = 0;
            e.iter(
              Math.max(e.first, n),
              Math.min(e.first + e.size, r),
              function (n) {
                n.markedSpans &&
                  ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans),
                  ++o;
              }
            );
          }
          function Ui(e) {
            if (!e) return null;
            for (var t, n = 0; n < e.length; ++n)
              e[n].marker.explicitlyCleared
                ? t || (t = e.slice(0, n))
                : t && t.push(e[n]);
            return t ? (t.length ? t : null) : e;
          }
          function Ki(e, t) {
            var n = (function (e, t) {
                var n = t["spans_" + e.id];
                if (!n) return null;
                for (var r = [], i = 0; i < t.text.length; ++i)
                  r.push(Ui(n[i]));
                return r;
              })(e, t),
              r = Lt(e, t);
            if (!n) return r;
            if (!r) return n;
            for (var i = 0; i < n.length; ++i) {
              var o = n[i],
                a = r[i];
              if (o && a)
                e: for (var l = 0; l < a.length; ++l) {
                  for (var s = a[l], c = 0; c < o.length; ++c)
                    if (o[c].marker == s.marker) continue e;
                  o.push(s);
                }
              else a && (n[i] = a);
            }
            return n;
          }
          function Vi(e, t, n) {
            for (var r = [], i = 0; i < e.length; ++i) {
              var o = e[i];
              if (o.ranges) r.push(n ? ki.prototype.deepCopy.call(o) : o);
              else {
                var a = o.changes,
                  l = [];
                r.push({ changes: l });
                for (var s = 0; s < a.length; ++s) {
                  var c = a[s],
                    u = void 0;
                  if ((l.push({ from: c.from, to: c.to, text: c.text }), t))
                    for (var d in c)
                      (u = d.match(/^spans_(\d+)$/)) &&
                        R(t, Number(u[1])) > -1 &&
                        (($(l)[d] = c[d]), delete c[d]);
                }
              }
            }
            return r;
          }
          function Gi(e, t, n, r) {
            if (r) {
              var i = e.anchor;
              if (n) {
                var o = tt(t, i) < 0;
                o != tt(n, i) < 0
                  ? ((i = t), (t = n))
                  : o != tt(t, n) < 0 && (t = n);
              }
              return new Ci(i, t);
            }
            return new Ci(n || t, t);
          }
          function $i(e, t, n, r, i) {
            null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
              Qi(e, new ki([Gi(e.sel.primary(), t, n, i)], 0), r);
          }
          function Yi(e, t, n) {
            for (
              var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
              o < e.sel.ranges.length;
              o++
            )
              r[o] = Gi(e.sel.ranges[o], t[o], null, i);
            Qi(e, Si(e.cm, r, e.sel.primIndex), n);
          }
          function Xi(e, t, n, r) {
            var i = e.sel.ranges.slice(0);
            (i[t] = n), Qi(e, Si(e.cm, i, e.sel.primIndex), r);
          }
          function Zi(e, t, n, r) {
            Qi(e, Ti(t, n), r);
          }
          function Ji(e, t, n) {
            var r = e.history.done,
              i = $(r);
            i && i.ranges ? ((r[r.length - 1] = t), eo(e, t, n)) : Qi(e, t, n);
          }
          function Qi(e, t, n) {
            eo(e, t, n), ji(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
          }
          function eo(e, t, n) {
            (ve(e, "beforeSelectionChange") ||
              (e.cm && ve(e.cm, "beforeSelectionChange"))) &&
              (t = (function (e, t, n) {
                var r = {
                  ranges: t.ranges,
                  update: function (t) {
                    this.ranges = [];
                    for (var n = 0; n < t.length; n++)
                      this.ranges[n] = new Ci(
                        lt(e, t[n].anchor),
                        lt(e, t[n].head)
                      );
                  },
                  origin: n && n.origin,
                };
                return (
                  pe(e, "beforeSelectionChange", e, r),
                  e.cm && pe(e.cm, "beforeSelectionChange", e.cm, r),
                  r.ranges != t.ranges
                    ? Si(e.cm, r.ranges, r.ranges.length - 1)
                    : t
                );
              })(e, t, n));
            var r =
              (n && n.bias) ||
              (tt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
            to(e, ro(e, t, r, !0)),
              (n && !1 === n.scroll) ||
                !e.cm ||
                "nocursor" == e.cm.getOption("readOnly") ||
                Er(e.cm);
          }
          function to(e, t) {
            t.equals(e.sel) ||
              ((e.sel = t),
              e.cm &&
                ((e.cm.curOp.updateInput = 1),
                (e.cm.curOp.selectionChanged = !0),
                ge(e.cm)),
              sn(e, "cursorActivity", e));
          }
          function no(e) {
            to(e, ro(e, e.sel, null, !1));
          }
          function ro(e, t, n, r) {
            for (var i, o = 0; o < t.ranges.length; o++) {
              var a = t.ranges[o],
                l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                s = oo(e, a.anchor, l && l.anchor, n, r),
                c = oo(e, a.head, l && l.head, n, r);
              (i || s != a.anchor || c != a.head) &&
                (i || (i = t.ranges.slice(0, o)), (i[o] = new Ci(s, c)));
            }
            return i ? Si(e.cm, i, t.primIndex) : t;
          }
          function io(e, t, n, r, i) {
            var o = Ve(e, t.line);
            if (o.markedSpans)
              for (var a = 0; a < o.markedSpans.length; ++a) {
                var l = o.markedSpans[a],
                  s = l.marker,
                  c = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft,
                  u = "selectRight" in s ? !s.selectRight : s.inclusiveRight;
                if (
                  (null == l.from || (c ? l.from <= t.ch : l.from < t.ch)) &&
                  (null == l.to || (u ? l.to >= t.ch : l.to > t.ch))
                ) {
                  if (i && (pe(s, "beforeCursorEnter"), s.explicitlyCleared)) {
                    if (o.markedSpans) {
                      --a;
                      continue;
                    }
                    break;
                  }
                  if (!s.atomic) continue;
                  if (n) {
                    var d = s.find(r < 0 ? 1 : -1),
                      f = void 0;
                    if (
                      ((r < 0 ? u : c) &&
                        (d = ao(e, d, -r, d && d.line == t.line ? o : null)),
                      d &&
                        d.line == t.line &&
                        (f = tt(d, n)) &&
                        (r < 0 ? f < 0 : f > 0))
                    )
                      return io(e, d, t, r, i);
                  }
                  var h = s.find(r < 0 ? -1 : 1);
                  return (
                    (r < 0 ? c : u) &&
                      (h = ao(e, h, r, h.line == t.line ? o : null)),
                    h ? io(e, h, t, r, i) : null
                  );
                }
              }
            return t;
          }
          function oo(e, t, n, r, i) {
            var o = r || 1;
            return (
              io(e, t, n, o, i) ||
              (!i && io(e, t, n, o, !0)) ||
              io(e, t, n, -o, i) ||
              (!i && io(e, t, n, -o, !0)) ||
              ((e.cantEdit = !0), et(e.first, 0))
            );
          }
          function ao(e, t, n, r) {
            return n < 0 && 0 == t.ch
              ? t.line > e.first
                ? lt(e, et(t.line - 1))
                : null
              : n > 0 && t.ch == (r || Ve(e, t.line)).text.length
              ? t.line < e.first + e.size - 1
                ? et(t.line + 1, 0)
                : null
              : new et(t.line, t.ch + n);
          }
          function lo(e) {
            e.setSelection(et(e.firstLine(), 0), et(e.lastLine()), B);
          }
          function so(e, t, n) {
            var r = {
              canceled: !1,
              from: t.from,
              to: t.to,
              text: t.text,
              origin: t.origin,
              cancel: function () {
                return (r.canceled = !0);
              },
            };
            return (
              n &&
                (r.update = function (t, n, i, o) {
                  t && (r.from = lt(e, t)),
                    n && (r.to = lt(e, n)),
                    i && (r.text = i),
                    void 0 !== o && (r.origin = o);
                }),
              pe(e, "beforeChange", e, r),
              e.cm && pe(e.cm, "beforeChange", e.cm, r),
              r.canceled
                ? (e.cm && (e.cm.curOp.updateInput = 2), null)
                : { from: r.from, to: r.to, text: r.text, origin: r.origin }
            );
          }
          function co(e, t, n) {
            if (e.cm) {
              if (!e.cm.curOp) return ei(e.cm, co)(e, t, n);
              if (e.cm.state.suppressEdits) return;
            }
            if (
              !(ve(e, "beforeChange") || (e.cm && ve(e.cm, "beforeChange"))) ||
              (t = so(e, t, !0))
            ) {
              var r =
                xt &&
                !n &&
                (function (e, t, n) {
                  var r = null;
                  if (
                    (e.iter(t.line, n.line + 1, function (e) {
                      if (e.markedSpans)
                        for (var t = 0; t < e.markedSpans.length; ++t) {
                          var n = e.markedSpans[t].marker;
                          !n.readOnly ||
                            (r && -1 != R(r, n)) ||
                            (r || (r = [])).push(n);
                        }
                    }),
                    !r)
                  )
                    return null;
                  for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                    for (
                      var a = r[o], l = a.find(0), s = 0;
                      s < i.length;
                      ++s
                    ) {
                      var c = i[s];
                      if (!(tt(c.to, l.from) < 0 || tt(c.from, l.to) > 0)) {
                        var u = [s, 1],
                          d = tt(c.from, l.from),
                          f = tt(c.to, l.to);
                        (d < 0 || (!a.inclusiveLeft && !d)) &&
                          u.push({ from: c.from, to: l.from }),
                          (f > 0 || (!a.inclusiveRight && !f)) &&
                            u.push({ from: l.to, to: c.to }),
                          i.splice.apply(i, u),
                          (s += u.length - 3);
                      }
                    }
                  return i;
                })(e, t.from, t.to);
              if (r)
                for (var i = r.length - 1; i >= 0; --i)
                  uo(e, {
                    from: r[i].from,
                    to: r[i].to,
                    text: i ? [""] : t.text,
                    origin: t.origin,
                  });
              else uo(e, t);
            }
          }
          function uo(e, t) {
            if (
              1 != t.text.length ||
              "" != t.text[0] ||
              0 != tt(t.from, t.to)
            ) {
              var n = Ai(e, t);
              Ri(e, t, n, e.cm ? e.cm.curOp.id : NaN), po(e, t, n, Lt(e, t));
              var r = [];
              Pi(e, function (e, n) {
                n ||
                  -1 != R(r, e.history) ||
                  (yo(e.history, t), r.push(e.history)),
                  po(e, t, null, Lt(e, t));
              });
            }
          }
          function fo(e, t, n) {
            var r = e.cm && e.cm.state.suppressEdits;
            if (!r || n) {
              for (
                var i,
                  o = e.history,
                  a = e.sel,
                  l = "undo" == t ? o.done : o.undone,
                  s = "undo" == t ? o.undone : o.done,
                  c = 0;
                c < l.length &&
                ((i = l[c]), n ? !i.ranges || i.equals(e.sel) : i.ranges);
                c++
              );
              if (c != l.length) {
                for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                  if (!(i = l.pop()).ranges) {
                    if (r) return void l.push(i);
                    break;
                  }
                  if ((Bi(i, s), n && !i.equals(e.sel)))
                    return void Qi(e, i, { clearRedo: !1 });
                  a = i;
                }
                var u = [];
                Bi(a, s),
                  s.push({ changes: u, generation: o.generation }),
                  (o.generation = i.generation || ++o.maxGeneration);
                for (
                  var d =
                      ve(e, "beforeChange") ||
                      (e.cm && ve(e.cm, "beforeChange")),
                    f = function (n) {
                      var r = i.changes[n];
                      if (((r.origin = t), d && !so(e, r, !1)))
                        return (l.length = 0), {};
                      u.push(Fi(e, r));
                      var o = n ? Ai(e, r) : $(l);
                      po(e, r, o, Ki(e, r)),
                        !n &&
                          e.cm &&
                          e.cm.scrollIntoView({ from: r.from, to: Li(r) });
                      var a = [];
                      Pi(e, function (e, t) {
                        t ||
                          -1 != R(a, e.history) ||
                          (yo(e.history, r), a.push(e.history)),
                          po(e, r, null, Ki(e, r));
                      });
                    },
                    h = i.changes.length - 1;
                  h >= 0;
                  --h
                ) {
                  var p = f(h);
                  if (p) return p.v;
                }
              }
            }
          }
          function ho(e, t) {
            if (
              0 != t &&
              ((e.first += t),
              (e.sel = new ki(
                Y(e.sel.ranges, function (e) {
                  return new Ci(
                    et(e.anchor.line + t, e.anchor.ch),
                    et(e.head.line + t, e.head.ch)
                  );
                }),
                e.sel.primIndex
              )),
              e.cm)
            ) {
              dr(e.cm, e.first, e.first - t, t);
              for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
                fr(e.cm, r, "gutter");
            }
          }
          function po(e, t, n, r) {
            if (e.cm && !e.cm.curOp) return ei(e.cm, po)(e, t, n, r);
            if (t.to.line < e.first)
              ho(e, t.text.length - 1 - (t.to.line - t.from.line));
            else if (!(t.from.line > e.lastLine())) {
              if (t.from.line < e.first) {
                var i = t.text.length - 1 - (e.first - t.from.line);
                ho(e, i),
                  (t = {
                    from: et(e.first, 0),
                    to: et(t.to.line + i, t.to.ch),
                    text: [$(t.text)],
                    origin: t.origin,
                  });
              }
              var o = e.lastLine();
              t.to.line > o &&
                (t = {
                  from: t.from,
                  to: et(o, Ve(e, o).text.length),
                  text: [t.text[0]],
                  origin: t.origin,
                }),
                (t.removed = Ge(e, t.from, t.to)),
                n || (n = Ai(e, t)),
                e.cm
                  ? (function (e, t, n) {
                      var r = e.doc,
                        i = e.display,
                        o = t.from,
                        a = t.to,
                        l = !1,
                        s = o.line;
                      e.options.lineWrapping ||
                        ((s = Xe(Ft(Ve(r, o.line)))),
                        r.iter(s, a.line + 1, function (e) {
                          if (e == i.maxLine) return (l = !0), !0;
                        })),
                        r.sel.contains(t.from, t.to) > -1 && ge(e),
                        zi(r, t, n, lr(e)),
                        e.options.lineWrapping ||
                          (r.iter(s, o.line + t.text.length, function (e) {
                            var t = Ut(e);
                            t > i.maxLineLength &&
                              ((i.maxLine = e),
                              (i.maxLineLength = t),
                              (i.maxLineChanged = !0),
                              (l = !1));
                          }),
                          l && (e.curOp.updateMaxLine = !0)),
                        (function (e, t) {
                          if (
                            ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                            !(e.highlightFrontier < t - 10))
                          ) {
                            for (var n = e.first, r = t - 1; r > n; r--) {
                              var i = Ve(e, r).stateAfter;
                              if (
                                i &&
                                (!(i instanceof ct) || r + i.lookAhead < t)
                              ) {
                                n = r + 1;
                                break;
                              }
                            }
                            e.highlightFrontier = Math.min(
                              e.highlightFrontier,
                              n
                            );
                          }
                        })(r, o.line),
                        ri(e, 400);
                      var c = t.text.length - (a.line - o.line) - 1;
                      t.full
                        ? dr(e)
                        : o.line != a.line || 1 != t.text.length || _i(e.doc, t)
                        ? dr(e, o.line, a.line + 1, c)
                        : fr(e, o.line, "text");
                      var u = ve(e, "changes"),
                        d = ve(e, "change");
                      if (d || u) {
                        var f = {
                          from: o,
                          to: a,
                          text: t.text,
                          removed: t.removed,
                          origin: t.origin,
                        };
                        d && sn(e, "change", e, f),
                          u &&
                            (
                              e.curOp.changeObjs || (e.curOp.changeObjs = [])
                            ).push(f);
                      }
                      e.display.selForContextMenu = null;
                    })(e.cm, t, r)
                  : zi(e, t, r),
                eo(e, n, B),
                e.cantEdit && oo(e, et(e.firstLine(), 0)) && (e.cantEdit = !1);
            }
          }
          function mo(e, t, n, r, i) {
            var o;
            r || (r = n),
              tt(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
              "string" == typeof t && (t = e.splitLines(t)),
              co(e, { from: n, to: r, text: t, origin: i });
          }
          function go(e, t, n, r) {
            n < e.line
              ? (e.line += r)
              : t < e.line && ((e.line = t), (e.ch = 0));
          }
          function vo(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                a = !0;
              if (o.ranges) {
                o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                for (var l = 0; l < o.ranges.length; l++)
                  go(o.ranges[l].anchor, t, n, r),
                    go(o.ranges[l].head, t, n, r);
              } else {
                for (var s = 0; s < o.changes.length; ++s) {
                  var c = o.changes[s];
                  if (n < c.from.line)
                    (c.from = et(c.from.line + r, c.from.ch)),
                      (c.to = et(c.to.line + r, c.to.ch));
                  else if (t <= c.to.line) {
                    a = !1;
                    break;
                  }
                }
                a || (e.splice(0, i + 1), (i = 0));
              }
            }
          }
          function yo(e, t) {
            var n = t.from.line,
              r = t.to.line,
              i = t.text.length - (r - n) - 1;
            vo(e.done, n, r, i), vo(e.undone, n, r, i);
          }
          function bo(e, t, n, r) {
            var i = t,
              o = t;
            return (
              "number" == typeof t ? (o = Ve(e, at(e, t))) : (i = Xe(t)),
              null == i ? null : (r(o, i) && e.cm && fr(e.cm, i, n), o)
            );
          }
          function wo(e) {
            (this.lines = e), (this.parent = null);
            for (var t = 0, n = 0; n < e.length; ++n)
              (e[n].parent = this), (t += e[n].height);
            this.height = t;
          }
          function xo(e) {
            this.children = e;
            for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
              var i = e[r];
              (t += i.chunkSize()), (n += i.height), (i.parent = this);
            }
            (this.size = t), (this.height = n), (this.parent = null);
          }
          (Ci.prototype.from = function () {
            return ot(this.anchor, this.head);
          }),
            (Ci.prototype.to = function () {
              return it(this.anchor, this.head);
            }),
            (Ci.prototype.empty = function () {
              return (
                this.head.line == this.anchor.line &&
                this.head.ch == this.anchor.ch
              );
            }),
            (wo.prototype = {
              chunkSize: function () {
                return this.lines.length;
              },
              removeInner: function (e, t) {
                for (var n = e, r = e + t; n < r; ++n) {
                  var i = this.lines[n];
                  (this.height -= i.height), Gt(i), sn(i, "delete");
                }
                this.lines.splice(e, t);
              },
              collapse: function (e) {
                e.push.apply(e, this.lines);
              },
              insertInner: function (e, t, n) {
                (this.height += n),
                  (this.lines = this.lines
                    .slice(0, e)
                    .concat(t)
                    .concat(this.lines.slice(e)));
                for (var r = 0; r < t.length; ++r) t[r].parent = this;
              },
              iterN: function (e, t, n) {
                for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
              },
            }),
            (xo.prototype = {
              chunkSize: function () {
                return this.size;
              },
              removeInner: function (e, t) {
                this.size -= t;
                for (var n = 0; n < this.children.length; ++n) {
                  var r = this.children[n],
                    i = r.chunkSize();
                  if (e < i) {
                    var o = Math.min(t, i - e),
                      a = r.height;
                    if (
                      (r.removeInner(e, o),
                      (this.height -= a - r.height),
                      i == o &&
                        (this.children.splice(n--, 1), (r.parent = null)),
                      0 == (t -= o))
                    )
                      break;
                    e = 0;
                  } else e -= i;
                }
                if (
                  this.size - t < 25 &&
                  (this.children.length > 1 ||
                    !(this.children[0] instanceof wo))
                ) {
                  var l = [];
                  this.collapse(l),
                    (this.children = [new wo(l)]),
                    (this.children[0].parent = this);
                }
              },
              collapse: function (e) {
                for (var t = 0; t < this.children.length; ++t)
                  this.children[t].collapse(e);
              },
              insertInner: function (e, t, n) {
                (this.size += t.length), (this.height += n);
                for (var r = 0; r < this.children.length; ++r) {
                  var i = this.children[r],
                    o = i.chunkSize();
                  if (e <= o) {
                    if (
                      (i.insertInner(e, t, n), i.lines && i.lines.length > 50)
                    ) {
                      for (
                        var a = (i.lines.length % 25) + 25, l = a;
                        l < i.lines.length;

                      ) {
                        var s = new wo(i.lines.slice(l, (l += 25)));
                        (i.height -= s.height),
                          this.children.splice(++r, 0, s),
                          (s.parent = this);
                      }
                      (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                    }
                    break;
                  }
                  e -= o;
                }
              },
              maybeSpill: function () {
                if (!(this.children.length <= 10)) {
                  var e = this;
                  do {
                    var t = new xo(e.children.splice(e.children.length - 5, 5));
                    if (e.parent) {
                      (e.size -= t.size), (e.height -= t.height);
                      var n = R(e.parent.children, e);
                      e.parent.children.splice(n + 1, 0, t);
                    } else {
                      var r = new xo(e.children);
                      (r.parent = e), (e.children = [r, t]), (e = r);
                    }
                    t.parent = e.parent;
                  } while (e.children.length > 10);
                  e.parent.maybeSpill();
                }
              },
              iterN: function (e, t, n) {
                for (var r = 0; r < this.children.length; ++r) {
                  var i = this.children[r],
                    o = i.chunkSize();
                  if (e < o) {
                    var a = Math.min(t, o - e);
                    if (i.iterN(e, a, n)) return !0;
                    if (0 == (t -= a)) break;
                    e = 0;
                  } else e -= o;
                }
              },
            });
          var ko = function (e, t, n) {
            if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
            (this.doc = e), (this.node = t);
          };
          function Co(e, t, n) {
            qt(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
              Or(e, n);
          }
          (ko.prototype.clear = function () {
            var e = this.doc.cm,
              t = this.line.widgets,
              n = this.line,
              r = Xe(n);
            if (null != r && t) {
              for (var i = 0; i < t.length; ++i)
                t[i] == this && t.splice(i--, 1);
              t.length || (n.widgets = null);
              var o = xn(this);
              Ye(n, Math.max(0, n.height - o)),
                e &&
                  (Qr(e, function () {
                    Co(e, n, -o), fr(e, r, "widget");
                  }),
                  sn(e, "lineWidgetCleared", e, this, r));
            }
          }),
            (ko.prototype.changed = function () {
              var e = this,
                t = this.height,
                n = this.doc.cm,
                r = this.line;
              this.height = null;
              var i = xn(this) - t;
              i &&
                (jt(this.doc, r) || Ye(r, r.height + i),
                n &&
                  Qr(n, function () {
                    (n.curOp.forceUpdate = !0),
                      Co(n, r, i),
                      sn(n, "lineWidgetChanged", n, e, Xe(r));
                  }));
            }),
            ye(ko);
          var So = 0,
            To = function (e, t) {
              (this.lines = []),
                (this.type = t),
                (this.doc = e),
                (this.id = ++So);
            };
          function Lo(e, t, n, r, i) {
            if (r && r.shared)
              return (function (e, t, n, r, i) {
                (r = W(r)).shared = !1;
                var o = [Lo(e, t, n, r, i)],
                  a = o[0],
                  l = r.widgetNode;
                return (
                  Pi(e, function (e) {
                    l && (r.widgetNode = l.cloneNode(!0)),
                      o.push(Lo(e, lt(e, t), lt(e, n), r, i));
                    for (var s = 0; s < e.linked.length; ++s)
                      if (e.linked[s].isParent) return;
                    a = $(o);
                  }),
                  new Mo(o, a)
                );
              })(e, t, n, r, i);
            if (e.cm && !e.cm.curOp) return ei(e.cm, Lo)(e, t, n, r, i);
            var o = new To(e, i),
              a = tt(t, n);
            if (
              (r && W(r, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty))
            )
              return o;
            if (
              (o.replacedWith &&
                ((o.collapsed = !0),
                (o.widgetNode = O(
                  "span",
                  [o.replacedWith],
                  "CodeMirror-widget"
                )),
                r.handleMouseEvents ||
                  o.widgetNode.setAttribute("cm-ignore-events", "true"),
                r.insertLeft && (o.widgetNode.insertLeft = !0)),
              o.collapsed)
            ) {
              if (
                Wt(e, t.line, t, n, o) ||
                (t.line != n.line && Wt(e, n.line, t, n, o))
              )
                throw new Error(
                  "Inserting collapsed marker partially overlapping an existing one"
                );
              kt = !0;
            }
            o.addToHistory &&
              Ri(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
            var l,
              s = t.line,
              c = e.cm;
            if (
              (e.iter(s, n.line + 1, function (r) {
                c &&
                  o.collapsed &&
                  !c.options.lineWrapping &&
                  Ft(r) == c.display.maxLine &&
                  (l = !0),
                  o.collapsed && s != t.line && Ye(r, 0),
                  (function (e, t, n) {
                    var r =
                      n &&
                      window.WeakSet &&
                      (n.markedSpans || (n.markedSpans = new WeakSet()));
                    r && r.has(e.markedSpans)
                      ? e.markedSpans.push(t)
                      : ((e.markedSpans = e.markedSpans
                          ? e.markedSpans.concat([t])
                          : [t]),
                        r && r.add(e.markedSpans)),
                      t.marker.attachLine(e);
                  })(
                    r,
                    new Ct(
                      o,
                      s == t.line ? t.ch : null,
                      s == n.line ? n.ch : null
                    ),
                    e.cm && e.cm.curOp
                  ),
                  ++s;
              }),
              o.collapsed &&
                e.iter(t.line, n.line + 1, function (t) {
                  jt(e, t) && Ye(t, 0);
                }),
              o.clearOnEnter &&
                de(o, "beforeCursorEnter", function () {
                  return o.clear();
                }),
              o.readOnly &&
                ((xt = !0),
                (e.history.done.length || e.history.undone.length) &&
                  e.clearHistory()),
              o.collapsed && ((o.id = ++So), (o.atomic = !0)),
              c)
            ) {
              if ((l && (c.curOp.updateMaxLine = !0), o.collapsed))
                dr(c, t.line, n.line + 1);
              else if (
                o.className ||
                o.startStyle ||
                o.endStyle ||
                o.css ||
                o.attributes ||
                o.title
              )
                for (var u = t.line; u <= n.line; u++) fr(c, u, "text");
              o.atomic && no(c.doc), sn(c, "markerAdded", c, o);
            }
            return o;
          }
          (To.prototype.clear = function () {
            if (!this.explicitlyCleared) {
              var e = this.doc.cm,
                t = e && !e.curOp;
              if ((t && Vr(e), ve(this, "clear"))) {
                var n = this.find();
                n && sn(this, "clear", n.from, n.to);
              }
              for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                var a = this.lines[o],
                  l = St(a.markedSpans, this);
                e && !this.collapsed
                  ? fr(e, Xe(a), "text")
                  : e &&
                    (null != l.to && (i = Xe(a)),
                    null != l.from && (r = Xe(a))),
                  (a.markedSpans = Tt(a.markedSpans, l)),
                  null == l.from &&
                    this.collapsed &&
                    !jt(this.doc, a) &&
                    e &&
                    Ye(a, rr(e.display));
              }
              if (e && this.collapsed && !e.options.lineWrapping)
                for (var s = 0; s < this.lines.length; ++s) {
                  var c = Ft(this.lines[s]),
                    u = Ut(c);
                  u > e.display.maxLineLength &&
                    ((e.display.maxLine = c),
                    (e.display.maxLineLength = u),
                    (e.display.maxLineChanged = !0));
                }
              null != r && e && this.collapsed && dr(e, r, i + 1),
                (this.lines.length = 0),
                (this.explicitlyCleared = !0),
                this.atomic &&
                  this.doc.cantEdit &&
                  ((this.doc.cantEdit = !1), e && no(e.doc)),
                e && sn(e, "markerCleared", e, this, r, i),
                t && Gr(e),
                this.parent && this.parent.clear();
            }
          }),
            (To.prototype.find = function (e, t) {
              var n, r;
              null == e && "bookmark" == this.type && (e = 1);
              for (var i = 0; i < this.lines.length; ++i) {
                var o = this.lines[i],
                  a = St(o.markedSpans, this);
                if (
                  null != a.from &&
                  ((n = et(t ? o : Xe(o), a.from)), -1 == e)
                )
                  return n;
                if (null != a.to && ((r = et(t ? o : Xe(o), a.to)), 1 == e))
                  return r;
              }
              return n && { from: n, to: r };
            }),
            (To.prototype.changed = function () {
              var e = this,
                t = this.find(-1, !0),
                n = this,
                r = this.doc.cm;
              t &&
                r &&
                Qr(r, function () {
                  var i = t.line,
                    o = Xe(t.line),
                    a = En(r, o);
                  if (
                    (a &&
                      (Fn(a),
                      (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                    (r.curOp.updateMaxLine = !0),
                    !jt(n.doc, i) && null != n.height)
                  ) {
                    var l = n.height;
                    n.height = null;
                    var s = xn(n) - l;
                    s && Ye(i, i.height + s);
                  }
                  sn(r, "markerChanged", r, e);
                });
            }),
            (To.prototype.attachLine = function (e) {
              if (!this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers && -1 != R(t.maybeHiddenMarkers, this)) ||
                  (
                    t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])
                  ).push(this);
              }
              this.lines.push(e);
            }),
            (To.prototype.detachLine = function (e) {
              if (
                (this.lines.splice(R(this.lines, e), 1),
                !this.lines.length && this.doc.cm)
              ) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(
                  this
                );
              }
            }),
            ye(To);
          var Mo = function (e, t) {
            (this.markers = e), (this.primary = t);
            for (var n = 0; n < e.length; ++n) e[n].parent = this;
          };
          function Ao(e) {
            return e.findMarks(
              et(e.first, 0),
              e.clipPos(et(e.lastLine())),
              function (e) {
                return e.parent;
              }
            );
          }
          function No(e) {
            for (
              var t = function (t) {
                  var n = e[t],
                    r = [n.primary.doc];
                  Pi(n.primary.doc, function (e) {
                    return r.push(e);
                  });
                  for (var i = 0; i < n.markers.length; i++) {
                    var o = n.markers[i];
                    -1 == R(r, o.doc) &&
                      ((o.parent = null), n.markers.splice(i--, 1));
                  }
                },
                n = 0;
              n < e.length;
              n++
            )
              t(n);
          }
          (Mo.prototype.clear = function () {
            if (!this.explicitlyCleared) {
              this.explicitlyCleared = !0;
              for (var e = 0; e < this.markers.length; ++e)
                this.markers[e].clear();
              sn(this, "clear");
            }
          }),
            (Mo.prototype.find = function (e, t) {
              return this.primary.find(e, t);
            }),
            ye(Mo);
          var Oo = 0,
            Eo = function (e, t, n, r, i) {
              if (!(this instanceof Eo)) return new Eo(e, t, n, r, i);
              null == n && (n = 0),
                xo.call(this, [new wo([new Vt("", null)])]),
                (this.first = n),
                (this.scrollTop = this.scrollLeft = 0),
                (this.cantEdit = !1),
                (this.cleanGeneration = 1),
                (this.modeFrontier = this.highlightFrontier = n);
              var o = et(n, 0);
              (this.sel = Ti(o)),
                (this.history = new Wi(null)),
                (this.id = ++Oo),
                (this.modeOption = t),
                (this.lineSep = r),
                (this.direction = "rtl" == i ? "rtl" : "ltr"),
                (this.extend = !1),
                "string" == typeof e && (e = this.splitLines(e)),
                zi(this, { from: o, to: o, text: e }),
                Qi(this, Ti(o), B);
            };
          (Eo.prototype = Z(xo.prototype, {
            constructor: Eo,
            iter: function (e, t, n) {
              n
                ? this.iterN(e - this.first, t - e, n)
                : this.iterN(this.first, this.first + this.size, e);
            },
            insert: function (e, t) {
              for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
              this.insertInner(e - this.first, t, n);
            },
            remove: function (e, t) {
              this.removeInner(e - this.first, t);
            },
            getValue: function (e) {
              var t = $e(this, this.first, this.first + this.size);
              return !1 === e ? t : t.join(e || this.lineSeparator());
            },
            setValue: ni(function (e) {
              var t = et(this.first, 0),
                n = this.first + this.size - 1;
              co(
                this,
                {
                  from: t,
                  to: et(n, Ve(this, n).text.length),
                  text: this.splitLines(e),
                  origin: "setValue",
                  full: !0,
                },
                !0
              ),
                this.cm && _r(this.cm, 0, 0),
                Qi(this, Ti(t), B);
            }),
            replaceRange: function (e, t, n, r) {
              mo(this, e, (t = lt(this, t)), (n = n ? lt(this, n) : t), r);
            },
            getRange: function (e, t, n) {
              var r = Ge(this, lt(this, e), lt(this, t));
              return !1 === n ? r : r.join(n || this.lineSeparator());
            },
            getLine: function (e) {
              var t = this.getLineHandle(e);
              return t && t.text;
            },
            getLineHandle: function (e) {
              if (Je(this, e)) return Ve(this, e);
            },
            getLineNumber: function (e) {
              return Xe(e);
            },
            getLineHandleVisualStart: function (e) {
              return "number" == typeof e && (e = Ve(this, e)), Ft(e);
            },
            lineCount: function () {
              return this.size;
            },
            firstLine: function () {
              return this.first;
            },
            lastLine: function () {
              return this.first + this.size - 1;
            },
            clipPos: function (e) {
              return lt(this, e);
            },
            getCursor: function (e) {
              var t = this.sel.primary();
              return null == e || "head" == e
                ? t.head
                : "anchor" == e
                ? t.anchor
                : "end" == e || "to" == e || !1 === e
                ? t.to()
                : t.from();
            },
            listSelections: function () {
              return this.sel.ranges;
            },
            somethingSelected: function () {
              return this.sel.somethingSelected();
            },
            setCursor: ni(function (e, t, n) {
              Zi(
                this,
                lt(this, "number" == typeof e ? et(e, t || 0) : e),
                null,
                n
              );
            }),
            setSelection: ni(function (e, t, n) {
              Zi(this, lt(this, e), lt(this, t || e), n);
            }),
            extendSelection: ni(function (e, t, n) {
              $i(this, lt(this, e), t && lt(this, t), n);
            }),
            extendSelections: ni(function (e, t) {
              Yi(this, st(this, e), t);
            }),
            extendSelectionsBy: ni(function (e, t) {
              Yi(this, st(this, Y(this.sel.ranges, e)), t);
            }),
            setSelections: ni(function (e, t, n) {
              if (e.length) {
                for (var r = [], i = 0; i < e.length; i++)
                  r[i] = new Ci(
                    lt(this, e[i].anchor),
                    lt(this, e[i].head || e[i].anchor)
                  );
                null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                  Qi(this, Si(this.cm, r, t), n);
              }
            }),
            addSelection: ni(function (e, t, n) {
              var r = this.sel.ranges.slice(0);
              r.push(new Ci(lt(this, e), lt(this, t || e))),
                Qi(this, Si(this.cm, r, r.length - 1), n);
            }),
            getSelection: function (e) {
              for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
                var i = Ge(this, n[r].from(), n[r].to());
                t = t ? t.concat(i) : i;
              }
              return !1 === e ? t : t.join(e || this.lineSeparator());
            },
            getSelections: function (e) {
              for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                var i = Ge(this, n[r].from(), n[r].to());
                !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
              }
              return t;
            },
            replaceSelection: function (e, t, n) {
              for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
              this.replaceSelections(r, t, n || "+input");
            },
            replaceSelections: ni(function (e, t, n) {
              for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                var a = i.ranges[o];
                r[o] = {
                  from: a.from(),
                  to: a.to(),
                  text: this.splitLines(e[o]),
                  origin: n,
                };
              }
              for (
                var l =
                    t &&
                    "end" != t &&
                    (function (e, t, n) {
                      for (
                        var r = [], i = et(e.first, 0), o = i, a = 0;
                        a < t.length;
                        a++
                      ) {
                        var l = t[a],
                          s = Ni(l.from, i, o),
                          c = Ni(Li(l), i, o);
                        if (((i = l.to), (o = c), "around" == n)) {
                          var u = e.sel.ranges[a],
                            d = tt(u.head, u.anchor) < 0;
                          r[a] = new Ci(d ? c : s, d ? s : c);
                        } else r[a] = new Ci(s, s);
                      }
                      return new ki(r, e.sel.primIndex);
                    })(this, r, t),
                  s = r.length - 1;
                s >= 0;
                s--
              )
                co(this, r[s]);
              l ? Ji(this, l) : this.cm && Er(this.cm);
            }),
            undo: ni(function () {
              fo(this, "undo");
            }),
            redo: ni(function () {
              fo(this, "redo");
            }),
            undoSelection: ni(function () {
              fo(this, "undo", !0);
            }),
            redoSelection: ni(function () {
              fo(this, "redo", !0);
            }),
            setExtending: function (e) {
              this.extend = e;
            },
            getExtending: function () {
              return this.extend;
            },
            historySize: function () {
              for (
                var e = this.history, t = 0, n = 0, r = 0;
                r < e.done.length;
                r++
              )
                e.done[r].ranges || ++t;
              for (var i = 0; i < e.undone.length; i++)
                e.undone[i].ranges || ++n;
              return { undo: t, redo: n };
            },
            clearHistory: function () {
              var e = this;
              (this.history = new Wi(this.history)),
                Pi(
                  this,
                  function (t) {
                    return (t.history = e.history);
                  },
                  !0
                );
            },
            markClean: function () {
              this.cleanGeneration = this.changeGeneration(!0);
            },
            changeGeneration: function (e) {
              return (
                e &&
                  (this.history.lastOp =
                    this.history.lastSelOp =
                    this.history.lastOrigin =
                      null),
                this.history.generation
              );
            },
            isClean: function (e) {
              return this.history.generation == (e || this.cleanGeneration);
            },
            getHistory: function () {
              return {
                done: Vi(this.history.done),
                undone: Vi(this.history.undone),
              };
            },
            setHistory: function (e) {
              var t = (this.history = new Wi(this.history));
              (t.done = Vi(e.done.slice(0), null, !0)),
                (t.undone = Vi(e.undone.slice(0), null, !0));
            },
            setGutterMarker: ni(function (e, t, n) {
              return bo(this, e, "gutter", function (e) {
                var r = e.gutterMarkers || (e.gutterMarkers = {});
                return (r[t] = n), !n && te(r) && (e.gutterMarkers = null), !0;
              });
            }),
            clearGutter: ni(function (e) {
              var t = this;
              this.iter(function (n) {
                n.gutterMarkers &&
                  n.gutterMarkers[e] &&
                  bo(t, n, "gutter", function () {
                    return (
                      (n.gutterMarkers[e] = null),
                      te(n.gutterMarkers) && (n.gutterMarkers = null),
                      !0
                    );
                  });
              });
            }),
            lineInfo: function (e) {
              var t;
              if ("number" == typeof e) {
                if (!Je(this, e)) return null;
                if (((t = e), !(e = Ve(this, e)))) return null;
              } else if (null == (t = Xe(e))) return null;
              return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets,
              };
            },
            addLineClass: ni(function (e, t, n) {
              return bo(
                this,
                e,
                "gutter" == t ? "gutter" : "class",
                function (e) {
                  var r =
                    "text" == t
                      ? "textClass"
                      : "background" == t
                      ? "bgClass"
                      : "gutter" == t
                      ? "gutterClass"
                      : "wrapClass";
                  if (e[r]) {
                    if (S(n).test(e[r])) return !1;
                    e[r] += " " + n;
                  } else e[r] = n;
                  return !0;
                }
              );
            }),
            removeLineClass: ni(function (e, t, n) {
              return bo(
                this,
                e,
                "gutter" == t ? "gutter" : "class",
                function (e) {
                  var r =
                      "text" == t
                        ? "textClass"
                        : "background" == t
                        ? "bgClass"
                        : "gutter" == t
                        ? "gutterClass"
                        : "wrapClass",
                    i = e[r];
                  if (!i) return !1;
                  if (null == n) e[r] = null;
                  else {
                    var o = i.match(S(n));
                    if (!o) return !1;
                    var a = o.index + o[0].length;
                    e[r] =
                      i.slice(0, o.index) +
                        (o.index && a != i.length ? " " : "") +
                        i.slice(a) || null;
                  }
                  return !0;
                }
              );
            }),
            addLineWidget: ni(function (e, t, n) {
              return (function (e, t, n, r) {
                var i = new ko(e, n, r),
                  o = e.cm;
                return (
                  o && i.noHScroll && (o.display.alignWidgets = !0),
                  bo(e, t, "widget", function (t) {
                    var n = t.widgets || (t.widgets = []);
                    if (
                      (null == i.insertAt
                        ? n.push(i)
                        : n.splice(
                            Math.min(n.length, Math.max(0, i.insertAt)),
                            0,
                            i
                          ),
                      (i.line = t),
                      o && !jt(e, t))
                    ) {
                      var r = qt(t) < e.scrollTop;
                      Ye(t, t.height + xn(i)),
                        r && Or(o, i.height),
                        (o.curOp.forceUpdate = !0);
                    }
                    return !0;
                  }),
                  o &&
                    sn(
                      o,
                      "lineWidgetAdded",
                      o,
                      i,
                      "number" == typeof t ? t : Xe(t)
                    ),
                  i
                );
              })(this, e, t, n);
            }),
            removeLineWidget: function (e) {
              e.clear();
            },
            markText: function (e, t, n) {
              return Lo(
                this,
                lt(this, e),
                lt(this, t),
                n,
                (n && n.type) || "range"
              );
            },
            setBookmark: function (e, t) {
              var n = {
                replacedWith: t && (null == t.nodeType ? t.widget : t),
                insertLeft: t && t.insertLeft,
                clearWhenEmpty: !1,
                shared: t && t.shared,
                handleMouseEvents: t && t.handleMouseEvents,
              };
              return Lo(this, (e = lt(this, e)), e, n, "bookmark");
            },
            findMarksAt: function (e) {
              var t = [],
                n = Ve(this, (e = lt(this, e)).line).markedSpans;
              if (n)
                for (var r = 0; r < n.length; ++r) {
                  var i = n[r];
                  (null == i.from || i.from <= e.ch) &&
                    (null == i.to || i.to >= e.ch) &&
                    t.push(i.marker.parent || i.marker);
                }
              return t;
            },
            findMarks: function (e, t, n) {
              (e = lt(this, e)), (t = lt(this, t));
              var r = [],
                i = e.line;
              return (
                this.iter(e.line, t.line + 1, function (o) {
                  var a = o.markedSpans;
                  if (a)
                    for (var l = 0; l < a.length; l++) {
                      var s = a[l];
                      (null != s.to && i == e.line && e.ch >= s.to) ||
                        (null == s.from && i != e.line) ||
                        (null != s.from && i == t.line && s.from >= t.ch) ||
                        (n && !n(s.marker)) ||
                        r.push(s.marker.parent || s.marker);
                    }
                  ++i;
                }),
                r
              );
            },
            getAllMarks: function () {
              var e = [];
              return (
                this.iter(function (t) {
                  var n = t.markedSpans;
                  if (n)
                    for (var r = 0; r < n.length; ++r)
                      null != n[r].from && e.push(n[r].marker);
                }),
                e
              );
            },
            posFromIndex: function (e) {
              var t,
                n = this.first,
                r = this.lineSeparator().length;
              return (
                this.iter(function (i) {
                  var o = i.text.length + r;
                  if (o > e) return (t = e), !0;
                  (e -= o), ++n;
                }),
                lt(this, et(n, t))
              );
            },
            indexFromPos: function (e) {
              var t = (e = lt(this, e)).ch;
              if (e.line < this.first || e.ch < 0) return 0;
              var n = this.lineSeparator().length;
              return (
                this.iter(this.first, e.line, function (e) {
                  t += e.text.length + n;
                }),
                t
              );
            },
            copy: function (e) {
              var t = new Eo(
                $e(this, this.first, this.first + this.size),
                this.modeOption,
                this.first,
                this.lineSep,
                this.direction
              );
              return (
                (t.scrollTop = this.scrollTop),
                (t.scrollLeft = this.scrollLeft),
                (t.sel = this.sel),
                (t.extend = !1),
                e &&
                  ((t.history.undoDepth = this.history.undoDepth),
                  t.setHistory(this.getHistory())),
                t
              );
            },
            linkedDoc: function (e) {
              e || (e = {});
              var t = this.first,
                n = this.first + this.size;
              null != e.from && e.from > t && (t = e.from),
                null != e.to && e.to < n && (n = e.to);
              var r = new Eo(
                $e(this, t, n),
                e.mode || this.modeOption,
                t,
                this.lineSep,
                this.direction
              );
              return (
                e.sharedHist && (r.history = this.history),
                (this.linked || (this.linked = [])).push({
                  doc: r,
                  sharedHist: e.sharedHist,
                }),
                (r.linked = [
                  { doc: this, isParent: !0, sharedHist: e.sharedHist },
                ]),
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                      i = r.find(),
                      o = e.clipPos(i.from),
                      a = e.clipPos(i.to);
                    if (tt(o, a)) {
                      var l = Lo(e, o, a, r.primary, r.primary.type);
                      r.markers.push(l), (l.parent = r);
                    }
                  }
                })(r, Ao(this)),
                r
              );
            },
            unlinkDoc: function (e) {
              if ((e instanceof Ma && (e = e.doc), this.linked))
                for (var t = 0; t < this.linked.length; ++t)
                  if (this.linked[t].doc == e) {
                    this.linked.splice(t, 1), e.unlinkDoc(this), No(Ao(this));
                    break;
                  }
              if (e.history == this.history) {
                var n = [e.id];
                Pi(
                  e,
                  function (e) {
                    return n.push(e.id);
                  },
                  !0
                ),
                  (e.history = new Wi(null)),
                  (e.history.done = Vi(this.history.done, n)),
                  (e.history.undone = Vi(this.history.undone, n));
              }
            },
            iterLinkedDocs: function (e) {
              Pi(this, e);
            },
            getMode: function () {
              return this.mode;
            },
            getEditor: function () {
              return this.cm;
            },
            splitLines: function (e) {
              return this.lineSep ? e.split(this.lineSep) : Ee(e);
            },
            lineSeparator: function () {
              return this.lineSep || "\n";
            },
            setDirection: ni(function (e) {
              var t;
              "rtl" != e && (e = "ltr"),
                e != this.direction &&
                  ((this.direction = e),
                  this.iter(function (e) {
                    return (e.order = null);
                  }),
                  this.cm &&
                    Qr((t = this.cm), function () {
                      Ii(t), dr(t);
                    }));
            }),
          })),
            (Eo.prototype.eachLine = Eo.prototype.iter);
          var _o = 0;
          function zo(e) {
            var t = this;
            if ((Po(t), !me(t, e) && !kn(t.display, e))) {
              be(e), a && (_o = +new Date());
              var n = cr(t, e, !0),
                r = e.dataTransfer.files;
              if (n && !t.isReadOnly())
                if (r && r.length && window.FileReader && window.File)
                  for (
                    var i = r.length,
                      o = Array(i),
                      l = 0,
                      s = function () {
                        ++l == i &&
                          ei(t, function () {
                            var e = {
                              from: (n = lt(t.doc, n)),
                              to: n,
                              text: t.doc.splitLines(
                                o
                                  .filter(function (e) {
                                    return null != e;
                                  })
                                  .join(t.doc.lineSeparator())
                              ),
                              origin: "paste",
                            };
                            co(t.doc, e),
                              Ji(t.doc, Ti(lt(t.doc, n), lt(t.doc, Li(e))));
                          })();
                      },
                      c = function (e, n) {
                        if (
                          t.options.allowDropFileTypes &&
                          -1 == R(t.options.allowDropFileTypes, e.type)
                        )
                          s();
                        else {
                          var r = new FileReader();
                          (r.onerror = function () {
                            return s();
                          }),
                            (r.onload = function () {
                              var e = r.result;
                              /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[n] = e),
                                s();
                            }),
                            r.readAsText(e);
                        }
                      },
                      u = 0;
                    u < r.length;
                    u++
                  )
                    c(r[u], u);
                else {
                  if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                    return (
                      t.state.draggingText(e),
                      void setTimeout(function () {
                        return t.display.input.focus();
                      }, 20)
                    );
                  try {
                    var d = e.dataTransfer.getData("Text");
                    if (d) {
                      var f;
                      if (
                        (t.state.draggingText &&
                          !t.state.draggingText.copy &&
                          (f = t.listSelections()),
                        eo(t.doc, Ti(n, n)),
                        f)
                      )
                        for (var h = 0; h < f.length; ++h)
                          mo(t.doc, "", f[h].anchor, f[h].head, "drag");
                      t.replaceSelection(d, "around", "paste"),
                        t.display.input.focus();
                    }
                  } catch (e) {}
                }
            }
          }
          function Po(e) {
            e.display.dragCursor &&
              (e.display.lineSpace.removeChild(e.display.dragCursor),
              (e.display.dragCursor = null));
          }
          function Do(e) {
            if (document.getElementsByClassName) {
              for (
                var t = document.getElementsByClassName("CodeMirror"),
                  n = [],
                  r = 0;
                r < t.length;
                r++
              ) {
                var i = t[r].CodeMirror;
                i && n.push(i);
              }
              n.length &&
                n[0].operation(function () {
                  for (var t = 0; t < n.length; t++) e(n[t]);
                });
            }
          }
          var Io = !1;
          function Wo() {
            var e;
            Io ||
              (de(window, "resize", function () {
                null == e &&
                  (e = setTimeout(function () {
                    (e = null), Do(Fo);
                  }, 100));
              }),
              de(window, "blur", function () {
                return Do(Tr);
              }),
              (Io = !0));
          }
          function Fo(e) {
            var t = e.display;
            (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
              (t.scrollbarsClipped = !1),
              e.setSize();
          }
          for (
            var Ho = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert",
              },
              Ro = 0;
            Ro < 10;
            Ro++
          )
            Ho[Ro + 48] = Ho[Ro + 96] = String(Ro);
          for (var jo = 65; jo <= 90; jo++) Ho[jo] = String.fromCharCode(jo);
          for (var Bo = 1; Bo <= 12; Bo++)
            Ho[Bo + 111] = Ho[Bo + 63235] = "F" + Bo;
          var qo = {};
          function Uo(e) {
            var t,
              n,
              r,
              i,
              o = e.split(/-(?!$)/);
            e = o[o.length - 1];
            for (var a = 0; a < o.length - 1; a++) {
              var l = o[a];
              if (/^(cmd|meta|m)$/i.test(l)) i = !0;
              else if (/^a(lt)?$/i.test(l)) t = !0;
              else if (/^(c|ctrl|control)$/i.test(l)) n = !0;
              else {
                if (!/^s(hift)?$/i.test(l))
                  throw new Error("Unrecognized modifier name: " + l);
                r = !0;
              }
            }
            return (
              t && (e = "Alt-" + e),
              n && (e = "Ctrl-" + e),
              i && (e = "Cmd-" + e),
              r && (e = "Shift-" + e),
              e
            );
          }
          function Ko(e) {
            var t = {};
            for (var n in e)
              if (e.hasOwnProperty(n)) {
                var r = e[n];
                if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                if ("..." == r) {
                  delete e[n];
                  continue;
                }
                for (var i = Y(n.split(" "), Uo), o = 0; o < i.length; o++) {
                  var a = void 0,
                    l = void 0;
                  o == i.length - 1
                    ? ((l = i.join(" ")), (a = r))
                    : ((l = i.slice(0, o + 1).join(" ")), (a = "..."));
                  var s = t[l];
                  if (s) {
                    if (s != a)
                      throw new Error("Inconsistent bindings for " + l);
                  } else t[l] = a;
                }
                delete e[n];
              }
            for (var c in t) e[c] = t[c];
            return e;
          }
          function Vo(e, t, n, r) {
            var i = (t = Xo(t)).call ? t.call(e, r) : t[e];
            if (!1 === i) return "nothing";
            if ("..." === i) return "multi";
            if (null != i && n(i)) return "handled";
            if (t.fallthrough) {
              if (
                "[object Array]" !=
                Object.prototype.toString.call(t.fallthrough)
              )
                return Vo(e, t.fallthrough, n, r);
              for (var o = 0; o < t.fallthrough.length; o++) {
                var a = Vo(e, t.fallthrough[o], n, r);
                if (a) return a;
              }
            }
          }
          function Go(e) {
            var t = "string" == typeof e ? e : Ho[e.keyCode];
            return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
          }
          function $o(e, t, n) {
            var r = e;
            return (
              t.altKey && "Alt" != r && (e = "Alt-" + e),
              (k ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
              (k ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e),
              !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e),
              e
            );
          }
          function Yo(e, t) {
            if (d && 34 == e.keyCode && e.char) return !1;
            var n = Ho[e.keyCode];
            return (
              null != n &&
              !e.altGraphKey &&
              (3 == e.keyCode && e.code && (n = e.code), $o(n, e, t))
            );
          }
          function Xo(e) {
            return "string" == typeof e ? qo[e] : e;
          }
          function Zo(e, t) {
            for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
              for (var o = t(n[i]); r.length && tt(o.from, $(r).to) <= 0; ) {
                var a = r.pop();
                if (tt(a.from, o.from) < 0) {
                  o.from = a.from;
                  break;
                }
              }
              r.push(o);
            }
            Qr(e, function () {
              for (var t = r.length - 1; t >= 0; t--)
                mo(e.doc, "", r[t].from, r[t].to, "+delete");
              Er(e);
            });
          }
          function Jo(e, t, n) {
            var r = ie(e.text, t + n, n);
            return r < 0 || r > e.text.length ? null : r;
          }
          function Qo(e, t, n) {
            var r = Jo(e, t.ch, n);
            return null == r
              ? null
              : new et(t.line, r, n < 0 ? "after" : "before");
          }
          function ea(e, t, n, r, i) {
            if (e) {
              "rtl" == t.doc.direction && (i = -i);
              var o = ce(n, t.doc.direction);
              if (o) {
                var a,
                  l = i < 0 ? $(o) : o[0],
                  s = i < 0 == (1 == l.level) ? "after" : "before";
                if (l.level > 0 || "rtl" == t.doc.direction) {
                  var c = _n(t, n);
                  a = i < 0 ? n.text.length - 1 : 0;
                  var u = zn(t, c, a).top;
                  (a = oe(
                    function (e) {
                      return zn(t, c, e).top == u;
                    },
                    i < 0 == (1 == l.level) ? l.from : l.to - 1,
                    a
                  )),
                    "before" == s && (a = Jo(n, a, 1));
                } else a = i < 0 ? l.to : l.from;
                return new et(r, a, s);
              }
            }
            return new et(
              r,
              i < 0 ? n.text.length : 0,
              i < 0 ? "before" : "after"
            );
          }
          (qo.basic = {
            Left: "goCharLeft",
            Right: "goCharRight",
            Up: "goLineUp",
            Down: "goLineDown",
            End: "goLineEnd",
            Home: "goLineStartSmart",
            PageUp: "goPageUp",
            PageDown: "goPageDown",
            Delete: "delCharAfter",
            Backspace: "delCharBefore",
            "Shift-Backspace": "delCharBefore",
            Tab: "defaultTab",
            "Shift-Tab": "indentAuto",
            Enter: "newlineAndIndent",
            Insert: "toggleOverwrite",
            Esc: "singleSelection",
          }),
            (qo.pcDefault = {
              "Ctrl-A": "selectAll",
              "Ctrl-D": "deleteLine",
              "Ctrl-Z": "undo",
              "Shift-Ctrl-Z": "redo",
              "Ctrl-Y": "redo",
              "Ctrl-Home": "goDocStart",
              "Ctrl-End": "goDocEnd",
              "Ctrl-Up": "goLineUp",
              "Ctrl-Down": "goLineDown",
              "Ctrl-Left": "goGroupLeft",
              "Ctrl-Right": "goGroupRight",
              "Alt-Left": "goLineStart",
              "Alt-Right": "goLineEnd",
              "Ctrl-Backspace": "delGroupBefore",
              "Ctrl-Delete": "delGroupAfter",
              "Ctrl-S": "save",
              "Ctrl-F": "find",
              "Ctrl-G": "findNext",
              "Shift-Ctrl-G": "findPrev",
              "Shift-Ctrl-F": "replace",
              "Shift-Ctrl-R": "replaceAll",
              "Ctrl-[": "indentLess",
              "Ctrl-]": "indentMore",
              "Ctrl-U": "undoSelection",
              "Shift-Ctrl-U": "redoSelection",
              "Alt-U": "redoSelection",
              fallthrough: "basic",
            }),
            (qo.emacsy = {
              "Ctrl-F": "goCharRight",
              "Ctrl-B": "goCharLeft",
              "Ctrl-P": "goLineUp",
              "Ctrl-N": "goLineDown",
              "Ctrl-A": "goLineStart",
              "Ctrl-E": "goLineEnd",
              "Ctrl-V": "goPageDown",
              "Shift-Ctrl-V": "goPageUp",
              "Ctrl-D": "delCharAfter",
              "Ctrl-H": "delCharBefore",
              "Alt-Backspace": "delWordBefore",
              "Ctrl-K": "killLine",
              "Ctrl-T": "transposeChars",
              "Ctrl-O": "openLine",
            }),
            (qo.macDefault = {
              "Cmd-A": "selectAll",
              "Cmd-D": "deleteLine",
              "Cmd-Z": "undo",
              "Shift-Cmd-Z": "redo",
              "Cmd-Y": "redo",
              "Cmd-Home": "goDocStart",
              "Cmd-Up": "goDocStart",
              "Cmd-End": "goDocEnd",
              "Cmd-Down": "goDocEnd",
              "Alt-Left": "goGroupLeft",
              "Alt-Right": "goGroupRight",
              "Cmd-Left": "goLineLeft",
              "Cmd-Right": "goLineRight",
              "Alt-Backspace": "delGroupBefore",
              "Ctrl-Alt-Backspace": "delGroupAfter",
              "Alt-Delete": "delGroupAfter",
              "Cmd-S": "save",
              "Cmd-F": "find",
              "Cmd-G": "findNext",
              "Shift-Cmd-G": "findPrev",
              "Cmd-Alt-F": "replace",
              "Shift-Cmd-Alt-F": "replaceAll",
              "Cmd-[": "indentLess",
              "Cmd-]": "indentMore",
              "Cmd-Backspace": "delWrappedLineLeft",
              "Cmd-Delete": "delWrappedLineRight",
              "Cmd-U": "undoSelection",
              "Shift-Cmd-U": "redoSelection",
              "Ctrl-Up": "goDocStart",
              "Ctrl-Down": "goDocEnd",
              fallthrough: ["basic", "emacsy"],
            }),
            (qo.default = y ? qo.macDefault : qo.pcDefault);
          var ta = {
            selectAll: lo,
            singleSelection: function (e) {
              return e.setSelection(
                e.getCursor("anchor"),
                e.getCursor("head"),
                B
              );
            },
            killLine: function (e) {
              return Zo(e, function (t) {
                if (t.empty()) {
                  var n = Ve(e.doc, t.head.line).text.length;
                  return t.head.ch == n && t.head.line < e.lastLine()
                    ? { from: t.head, to: et(t.head.line + 1, 0) }
                    : { from: t.head, to: et(t.head.line, n) };
                }
                return { from: t.from(), to: t.to() };
              });
            },
            deleteLine: function (e) {
              return Zo(e, function (t) {
                return {
                  from: et(t.from().line, 0),
                  to: lt(e.doc, et(t.to().line + 1, 0)),
                };
              });
            },
            delLineLeft: function (e) {
              return Zo(e, function (e) {
                return { from: et(e.from().line, 0), to: e.from() };
              });
            },
            delWrappedLineLeft: function (e) {
              return Zo(e, function (t) {
                var n = e.charCoords(t.head, "div").top + 5;
                return {
                  from: e.coordsChar({ left: 0, top: n }, "div"),
                  to: t.from(),
                };
              });
            },
            delWrappedLineRight: function (e) {
              return Zo(e, function (t) {
                var n = e.charCoords(t.head, "div").top + 5,
                  r = e.coordsChar(
                    { left: e.display.lineDiv.offsetWidth + 100, top: n },
                    "div"
                  );
                return { from: t.from(), to: r };
              });
            },
            undo: function (e) {
              return e.undo();
            },
            redo: function (e) {
              return e.redo();
            },
            undoSelection: function (e) {
              return e.undoSelection();
            },
            redoSelection: function (e) {
              return e.redoSelection();
            },
            goDocStart: function (e) {
              return e.extendSelection(et(e.firstLine(), 0));
            },
            goDocEnd: function (e) {
              return e.extendSelection(et(e.lastLine()));
            },
            goLineStart: function (e) {
              return e.extendSelectionsBy(
                function (t) {
                  return na(e, t.head.line);
                },
                { origin: "+move", bias: 1 }
              );
            },
            goLineStartSmart: function (e) {
              return e.extendSelectionsBy(
                function (t) {
                  return ra(e, t.head);
                },
                { origin: "+move", bias: 1 }
              );
            },
            goLineEnd: function (e) {
              return e.extendSelectionsBy(
                function (t) {
                  return (function (e, t) {
                    var n = Ve(e.doc, t),
                      r = (function (e) {
                        for (var t; (t = Dt(e)); ) e = t.find(1, !0).line;
                        return e;
                      })(n);
                    return r != n && (t = Xe(r)), ea(!0, e, n, t, -1);
                  })(e, t.head.line);
                },
                { origin: "+move", bias: -1 }
              );
            },
            goLineRight: function (e) {
              return e.extendSelectionsBy(function (t) {
                var n = e.cursorCoords(t.head, "div").top + 5;
                return e.coordsChar(
                  { left: e.display.lineDiv.offsetWidth + 100, top: n },
                  "div"
                );
              }, U);
            },
            goLineLeft: function (e) {
              return e.extendSelectionsBy(function (t) {
                var n = e.cursorCoords(t.head, "div").top + 5;
                return e.coordsChar({ left: 0, top: n }, "div");
              }, U);
            },
            goLineLeftSmart: function (e) {
              return e.extendSelectionsBy(function (t) {
                var n = e.cursorCoords(t.head, "div").top + 5,
                  r = e.coordsChar({ left: 0, top: n }, "div");
                return r.ch < e.getLine(r.line).search(/\S/)
                  ? ra(e, t.head)
                  : r;
              }, U);
            },
            goLineUp: function (e) {
              return e.moveV(-1, "line");
            },
            goLineDown: function (e) {
              return e.moveV(1, "line");
            },
            goPageUp: function (e) {
              return e.moveV(-1, "page");
            },
            goPageDown: function (e) {
              return e.moveV(1, "page");
            },
            goCharLeft: function (e) {
              return e.moveH(-1, "char");
            },
            goCharRight: function (e) {
              return e.moveH(1, "char");
            },
            goColumnLeft: function (e) {
              return e.moveH(-1, "column");
            },
            goColumnRight: function (e) {
              return e.moveH(1, "column");
            },
            goWordLeft: function (e) {
              return e.moveH(-1, "word");
            },
            goGroupRight: function (e) {
              return e.moveH(1, "group");
            },
            goGroupLeft: function (e) {
              return e.moveH(-1, "group");
            },
            goWordRight: function (e) {
              return e.moveH(1, "word");
            },
            delCharBefore: function (e) {
              return e.deleteH(-1, "codepoint");
            },
            delCharAfter: function (e) {
              return e.deleteH(1, "char");
            },
            delWordBefore: function (e) {
              return e.deleteH(-1, "word");
            },
            delWordAfter: function (e) {
              return e.deleteH(1, "word");
            },
            delGroupBefore: function (e) {
              return e.deleteH(-1, "group");
            },
            delGroupAfter: function (e) {
              return e.deleteH(1, "group");
            },
            indentAuto: function (e) {
              return e.indentSelection("smart");
            },
            indentMore: function (e) {
              return e.indentSelection("add");
            },
            indentLess: function (e) {
              return e.indentSelection("subtract");
            },
            insertTab: function (e) {
              return e.replaceSelection("\t");
            },
            insertSoftTab: function (e) {
              for (
                var t = [],
                  n = e.listSelections(),
                  r = e.options.tabSize,
                  i = 0;
                i < n.length;
                i++
              ) {
                var o = n[i].from(),
                  a = F(e.getLine(o.line), o.ch, r);
                t.push(G(r - (a % r)));
              }
              e.replaceSelections(t);
            },
            defaultTab: function (e) {
              e.somethingSelected()
                ? e.indentSelection("add")
                : e.execCommand("insertTab");
            },
            transposeChars: function (e) {
              return Qr(e, function () {
                for (
                  var t = e.listSelections(), n = [], r = 0;
                  r < t.length;
                  r++
                )
                  if (t[r].empty()) {
                    var i = t[r].head,
                      o = Ve(e.doc, i.line).text;
                    if (o)
                      if (
                        (i.ch == o.length && (i = new et(i.line, i.ch - 1)),
                        i.ch > 0)
                      )
                        (i = new et(i.line, i.ch + 1)),
                          e.replaceRange(
                            o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                            et(i.line, i.ch - 2),
                            i,
                            "+transpose"
                          );
                      else if (i.line > e.doc.first) {
                        var a = Ve(e.doc, i.line - 1).text;
                        a &&
                          ((i = new et(i.line, 1)),
                          e.replaceRange(
                            o.charAt(0) +
                              e.doc.lineSeparator() +
                              a.charAt(a.length - 1),
                            et(i.line - 1, a.length - 1),
                            i,
                            "+transpose"
                          ));
                      }
                    n.push(new Ci(i, i));
                  }
                e.setSelections(n);
              });
            },
            newlineAndIndent: function (e) {
              return Qr(e, function () {
                for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                  e.replaceRange(
                    e.doc.lineSeparator(),
                    t[n].anchor,
                    t[n].head,
                    "+input"
                  );
                t = e.listSelections();
                for (var r = 0; r < t.length; r++)
                  e.indentLine(t[r].from().line, null, !0);
                Er(e);
              });
            },
            openLine: function (e) {
              return e.replaceSelection("\n", "start");
            },
            toggleOverwrite: function (e) {
              return e.toggleOverwrite();
            },
          };
          function na(e, t) {
            var n = Ve(e.doc, t),
              r = Ft(n);
            return r != n && (t = Xe(r)), ea(!0, e, r, t, 1);
          }
          function ra(e, t) {
            var n = na(e, t.line),
              r = Ve(e.doc, n.line),
              i = ce(r, e.doc.direction);
            if (!i || 0 == i[0].level) {
              var o = Math.max(n.ch, r.text.search(/\S/)),
                a = t.line == n.line && t.ch <= o && t.ch;
              return et(n.line, a ? 0 : o, n.sticky);
            }
            return n;
          }
          function ia(e, t, n) {
            if ("string" == typeof t && !(t = ta[t])) return !1;
            e.display.input.ensurePolled();
            var r = e.display.shift,
              i = !1;
            try {
              e.isReadOnly() && (e.state.suppressEdits = !0),
                n && (e.display.shift = !1),
                (i = t(e) != j);
            } finally {
              (e.display.shift = r), (e.state.suppressEdits = !1);
            }
            return i;
          }
          var oa = new H();
          function aa(e, t, n, r) {
            var i = e.state.keySeq;
            if (i) {
              if (Go(t)) return "handled";
              if (
                (/\'$/.test(t)
                  ? (e.state.keySeq = null)
                  : oa.set(50, function () {
                      e.state.keySeq == i &&
                        ((e.state.keySeq = null), e.display.input.reset());
                    }),
                la(e, i + " " + t, n, r))
              )
                return !0;
            }
            return la(e, t, n, r);
          }
          function la(e, t, n, r) {
            var i = (function (e, t, n) {
              for (var r = 0; r < e.state.keyMaps.length; r++) {
                var i = Vo(t, e.state.keyMaps[r], n, e);
                if (i) return i;
              }
              return (
                (e.options.extraKeys && Vo(t, e.options.extraKeys, n, e)) ||
                Vo(t, e.options.keyMap, n, e)
              );
            })(e, t, r);
            return (
              "multi" == i && (e.state.keySeq = t),
              "handled" == i && sn(e, "keyHandled", e, t, n),
              ("handled" != i && "multi" != i) || (be(n), xr(e)),
              !!i
            );
          }
          function sa(e, t) {
            var n = Yo(t, !0);
            return (
              !!n &&
              (t.shiftKey && !e.state.keySeq
                ? aa(e, "Shift-" + n, t, function (t) {
                    return ia(e, t, !0);
                  }) ||
                  aa(e, n, t, function (t) {
                    if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                      return ia(e, t);
                  })
                : aa(e, n, t, function (t) {
                    return ia(e, t);
                  }))
            );
          }
          var ca = null;
          function ua(e) {
            var t = this;
            if (
              !(
                (e.target && e.target != t.display.input.getField()) ||
                ((t.curOp.focus = _()), me(t, e))
              )
            ) {
              a && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
              var r = e.keyCode;
              t.display.shift = 16 == r || e.shiftKey;
              var i = sa(t, e);
              d &&
                ((ca = i ? r : null),
                i ||
                  88 != r ||
                  ze ||
                  !(y ? e.metaKey : e.ctrlKey) ||
                  t.replaceSelection("", null, "cut")),
                n &&
                  !y &&
                  !i &&
                  46 == r &&
                  e.shiftKey &&
                  !e.ctrlKey &&
                  document.execCommand &&
                  document.execCommand("cut"),
                18 != r ||
                  /\bCodeMirror-crosshair\b/.test(
                    t.display.lineDiv.className
                  ) ||
                  (function (e) {
                    var t = e.display.lineDiv;
                    function n(e) {
                      (18 != e.keyCode && e.altKey) ||
                        (L(t, "CodeMirror-crosshair"),
                        he(document, "keyup", n),
                        he(document, "mouseover", n));
                    }
                    z(t, "CodeMirror-crosshair"),
                      de(document, "keyup", n),
                      de(document, "mouseover", n);
                  })(t);
            }
          }
          function da(e) {
            16 == e.keyCode && (this.doc.sel.shift = !1), me(this, e);
          }
          function fa(e) {
            var t = this;
            if (
              !(
                (e.target && e.target != t.display.input.getField()) ||
                kn(t.display, e) ||
                me(t, e) ||
                (e.ctrlKey && !e.altKey) ||
                (y && e.metaKey)
              )
            ) {
              var n = e.keyCode,
                r = e.charCode;
              if (d && n == ca) return (ca = null), void be(e);
              if (!d || (e.which && !(e.which < 10)) || !sa(t, e)) {
                var i = String.fromCharCode(null == r ? n : r);
                "\b" != i &&
                  ((function (e, t, n) {
                    return aa(e, "'" + n + "'", t, function (t) {
                      return ia(e, t, !0);
                    });
                  })(t, e, i) ||
                    t.display.input.onKeyPress(e));
              }
            }
          }
          var ha,
            pa,
            ma = function (e, t, n) {
              (this.time = e), (this.pos = t), (this.button = n);
            };
          function ga(e) {
            var t = this,
              n = t.display;
            if (!(me(t, e) || (n.activeTouch && n.input.supportsTouch())))
              if ((n.input.ensurePolled(), (n.shift = e.shiftKey), kn(n, e)))
                s ||
                  ((n.scroller.draggable = !1),
                  setTimeout(function () {
                    return (n.scroller.draggable = !0);
                  }, 100));
              else if (!ba(t, e)) {
                var r = cr(t, e),
                  i = Se(e),
                  o = r
                    ? (function (e, t) {
                        var n = +new Date();
                        return pa && pa.compare(n, e, t)
                          ? ((ha = pa = null), "triple")
                          : ha && ha.compare(n, e, t)
                          ? ((pa = new ma(n, e, t)), (ha = null), "double")
                          : ((ha = new ma(n, e, t)), (pa = null), "single");
                      })(r, i)
                    : "single";
                window.focus(),
                  1 == i && t.state.selectingText && t.state.selectingText(e),
                  (r &&
                    (function (e, t, n, r, i) {
                      var o = "Click";
                      return (
                        "double" == r
                          ? (o = "Double" + o)
                          : "triple" == r && (o = "Triple" + o),
                        aa(
                          e,
                          $o(
                            (o =
                              (1 == t ? "Left" : 2 == t ? "Middle" : "Right") +
                              o),
                            i
                          ),
                          i,
                          function (t) {
                            if (("string" == typeof t && (t = ta[t]), !t))
                              return !1;
                            var r = !1;
                            try {
                              e.isReadOnly() && (e.state.suppressEdits = !0),
                                (r = t(e, n) != j);
                            } finally {
                              e.state.suppressEdits = !1;
                            }
                            return r;
                          }
                        )
                      );
                    })(t, i, r, o, e)) ||
                    (1 == i
                      ? r
                        ? (function (e, t, n, r) {
                            a ? setTimeout(I(kr, e), 0) : (e.curOp.focus = _());
                            var i,
                              o = (function (e, t, n) {
                                var r = e.getOption("configureMouse"),
                                  i = r ? r(e, t, n) : {};
                                if (null == i.unit) {
                                  var o = b
                                    ? n.shiftKey && n.metaKey
                                    : n.altKey;
                                  i.unit = o
                                    ? "rectangle"
                                    : "single" == t
                                    ? "char"
                                    : "double" == t
                                    ? "word"
                                    : "line";
                                }
                                return (
                                  (null == i.extend || e.doc.extend) &&
                                    (i.extend = e.doc.extend || n.shiftKey),
                                  null == i.addNew &&
                                    (i.addNew = y ? n.metaKey : n.ctrlKey),
                                  null == i.moveOnDrag &&
                                    (i.moveOnDrag = !(y
                                      ? n.altKey
                                      : n.ctrlKey)),
                                  i
                                );
                              })(e, n, r),
                              c = e.doc.sel;
                            e.options.dragDrop &&
                            Me &&
                            !e.isReadOnly() &&
                            "single" == n &&
                            (i = c.contains(t)) > -1 &&
                            (tt((i = c.ranges[i]).from(), t) < 0 ||
                              t.xRel > 0) &&
                            (tt(i.to(), t) > 0 || t.xRel < 0)
                              ? (function (e, t, n, r) {
                                  var i = e.display,
                                    o = !1,
                                    c = ei(e, function (t) {
                                      s && (i.scroller.draggable = !1),
                                        (e.state.draggingText = !1),
                                        e.state.delayingBlurEvent &&
                                          (e.hasFocus()
                                            ? (e.state.delayingBlurEvent = !1)
                                            : Cr(e)),
                                        he(
                                          i.wrapper.ownerDocument,
                                          "mouseup",
                                          c
                                        ),
                                        he(
                                          i.wrapper.ownerDocument,
                                          "mousemove",
                                          u
                                        ),
                                        he(i.scroller, "dragstart", d),
                                        he(i.scroller, "drop", c),
                                        o ||
                                          (be(t),
                                          r.addNew ||
                                            $i(e.doc, n, null, null, r.extend),
                                          (s && !f) || (a && 9 == l)
                                            ? setTimeout(function () {
                                                i.wrapper.ownerDocument.body.focus(
                                                  { preventScroll: !0 }
                                                ),
                                                  i.input.focus();
                                              }, 20)
                                            : i.input.focus());
                                    }),
                                    u = function (e) {
                                      o =
                                        o ||
                                        Math.abs(t.clientX - e.clientX) +
                                          Math.abs(t.clientY - e.clientY) >=
                                          10;
                                    },
                                    d = function () {
                                      return (o = !0);
                                    };
                                  s && (i.scroller.draggable = !0),
                                    (e.state.draggingText = c),
                                    (c.copy = !r.moveOnDrag),
                                    de(i.wrapper.ownerDocument, "mouseup", c),
                                    de(i.wrapper.ownerDocument, "mousemove", u),
                                    de(i.scroller, "dragstart", d),
                                    de(i.scroller, "drop", c),
                                    (e.state.delayingBlurEvent = !0),
                                    setTimeout(function () {
                                      return i.input.focus();
                                    }, 20),
                                    i.scroller.dragDrop &&
                                      i.scroller.dragDrop();
                                })(e, r, t, o)
                              : (function (e, t, n, r) {
                                  a && Cr(e);
                                  var i = e.display,
                                    o = e.doc;
                                  be(t);
                                  var l,
                                    s,
                                    c = o.sel,
                                    u = c.ranges;
                                  if (
                                    (r.addNew && !r.extend
                                      ? ((s = o.sel.contains(n)),
                                        (l = s > -1 ? u[s] : new Ci(n, n)))
                                      : ((l = o.sel.primary()),
                                        (s = o.sel.primIndex)),
                                    "rectangle" == r.unit)
                                  )
                                    r.addNew || (l = new Ci(n, n)),
                                      (n = cr(e, t, !0, !0)),
                                      (s = -1);
                                  else {
                                    var d = va(e, n, r.unit);
                                    l = r.extend
                                      ? Gi(l, d.anchor, d.head, r.extend)
                                      : d;
                                  }
                                  r.addNew
                                    ? -1 == s
                                      ? ((s = u.length),
                                        Qi(o, Si(e, u.concat([l]), s), {
                                          scroll: !1,
                                          origin: "*mouse",
                                        }))
                                      : u.length > 1 &&
                                        u[s].empty() &&
                                        "char" == r.unit &&
                                        !r.extend
                                      ? (Qi(
                                          o,
                                          Si(
                                            e,
                                            u
                                              .slice(0, s)
                                              .concat(u.slice(s + 1)),
                                            0
                                          ),
                                          { scroll: !1, origin: "*mouse" }
                                        ),
                                        (c = o.sel))
                                      : Xi(o, s, l, q)
                                    : ((s = 0),
                                      Qi(o, new ki([l], 0), q),
                                      (c = o.sel));
                                  var f = n;
                                  function h(t) {
                                    if (0 != tt(f, t))
                                      if (((f = t), "rectangle" == r.unit)) {
                                        for (
                                          var i = [],
                                            a = e.options.tabSize,
                                            u = F(Ve(o, n.line).text, n.ch, a),
                                            d = F(Ve(o, t.line).text, t.ch, a),
                                            h = Math.min(u, d),
                                            p = Math.max(u, d),
                                            m = Math.min(n.line, t.line),
                                            g = Math.min(
                                              e.lastLine(),
                                              Math.max(n.line, t.line)
                                            );
                                          m <= g;
                                          m++
                                        ) {
                                          var v = Ve(o, m).text,
                                            y = K(v, h, a);
                                          h == p
                                            ? i.push(new Ci(et(m, y), et(m, y)))
                                            : v.length > y &&
                                              i.push(
                                                new Ci(
                                                  et(m, y),
                                                  et(m, K(v, p, a))
                                                )
                                              );
                                        }
                                        i.length || i.push(new Ci(n, n)),
                                          Qi(
                                            o,
                                            Si(
                                              e,
                                              c.ranges.slice(0, s).concat(i),
                                              s
                                            ),
                                            { origin: "*mouse", scroll: !1 }
                                          ),
                                          e.scrollIntoView(t);
                                      } else {
                                        var b,
                                          w = l,
                                          x = va(e, t, r.unit),
                                          k = w.anchor;
                                        tt(x.anchor, k) > 0
                                          ? ((b = x.head),
                                            (k = ot(w.from(), x.anchor)))
                                          : ((b = x.anchor),
                                            (k = it(w.to(), x.head)));
                                        var C = c.ranges.slice(0);
                                        (C[s] = (function (e, t) {
                                          var n = t.anchor,
                                            r = t.head,
                                            i = Ve(e.doc, n.line);
                                          if (
                                            0 == tt(n, r) &&
                                            n.sticky == r.sticky
                                          )
                                            return t;
                                          var o = ce(i);
                                          if (!o) return t;
                                          var a = le(o, n.ch, n.sticky),
                                            l = o[a];
                                          if (l.from != n.ch && l.to != n.ch)
                                            return t;
                                          var s,
                                            c =
                                              a +
                                              ((l.from == n.ch) ==
                                              (1 != l.level)
                                                ? 0
                                                : 1);
                                          if (0 == c || c == o.length) return t;
                                          if (r.line != n.line)
                                            s =
                                              (r.line - n.line) *
                                                ("ltr" == e.doc.direction
                                                  ? 1
                                                  : -1) >
                                              0;
                                          else {
                                            var u = le(o, r.ch, r.sticky),
                                              d =
                                                u - a ||
                                                (r.ch - n.ch) *
                                                  (1 == l.level ? -1 : 1);
                                            s =
                                              u == c - 1 || u == c
                                                ? d < 0
                                                : d > 0;
                                          }
                                          var f = o[c + (s ? -1 : 0)],
                                            h = s == (1 == f.level),
                                            p = h ? f.from : f.to,
                                            m = h ? "after" : "before";
                                          return n.ch == p && n.sticky == m
                                            ? t
                                            : new Ci(new et(n.line, p, m), r);
                                        })(e, new Ci(lt(o, k), b))),
                                          Qi(o, Si(e, C, s), q);
                                      }
                                  }
                                  var p = i.wrapper.getBoundingClientRect(),
                                    m = 0;
                                  function g(t) {
                                    var n = ++m,
                                      a = cr(e, t, !0, "rectangle" == r.unit);
                                    if (a)
                                      if (0 != tt(a, f)) {
                                        (e.curOp.focus = _()), h(a);
                                        var l = Ar(i, o);
                                        (a.line >= l.to || a.line < l.from) &&
                                          setTimeout(
                                            ei(e, function () {
                                              m == n && g(t);
                                            }),
                                            150
                                          );
                                      } else {
                                        var s =
                                          t.clientY < p.top
                                            ? -20
                                            : t.clientY > p.bottom
                                            ? 20
                                            : 0;
                                        s &&
                                          setTimeout(
                                            ei(e, function () {
                                              m == n &&
                                                ((i.scroller.scrollTop += s),
                                                g(t));
                                            }),
                                            50
                                          );
                                      }
                                  }
                                  function v(t) {
                                    (e.state.selectingText = !1),
                                      (m = 1 / 0),
                                      t && (be(t), i.input.focus()),
                                      he(
                                        i.wrapper.ownerDocument,
                                        "mousemove",
                                        y
                                      ),
                                      he(i.wrapper.ownerDocument, "mouseup", b),
                                      (o.history.lastSelOrigin = null);
                                  }
                                  var y = ei(e, function (e) {
                                      0 !== e.buttons && Se(e) ? g(e) : v(e);
                                    }),
                                    b = ei(e, v);
                                  (e.state.selectingText = b),
                                    de(i.wrapper.ownerDocument, "mousemove", y),
                                    de(i.wrapper.ownerDocument, "mouseup", b);
                                })(e, r, t, o);
                          })(t, r, o, e)
                        : Ce(e) == n.scroller && be(e)
                      : 2 == i
                      ? (r && $i(t.doc, r),
                        setTimeout(function () {
                          return n.input.focus();
                        }, 20))
                      : 3 == i &&
                        (C ? t.display.input.onContextMenu(e) : Cr(t)));
              }
          }
          function va(e, t, n) {
            if ("char" == n) return new Ci(t, t);
            if ("word" == n) return e.findWordAt(t);
            if ("line" == n)
              return new Ci(et(t.line, 0), lt(e.doc, et(t.line + 1, 0)));
            var r = n(e, t);
            return new Ci(r.from, r.to);
          }
          function ya(e, t, n, r) {
            var i, o;
            if (t.touches)
              (i = t.touches[0].clientX), (o = t.touches[0].clientY);
            else
              try {
                (i = t.clientX), (o = t.clientY);
              } catch (e) {
                return !1;
              }
            if (
              i >= Math.floor(e.display.gutters.getBoundingClientRect().right)
            )
              return !1;
            r && be(t);
            var a = e.display,
              l = a.lineDiv.getBoundingClientRect();
            if (o > l.bottom || !ve(e, n)) return xe(t);
            o -= l.top - a.viewOffset;
            for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
              var c = a.gutters.childNodes[s];
              if (c && c.getBoundingClientRect().right >= i)
                return (
                  pe(
                    e,
                    n,
                    e,
                    Ze(e.doc, o),
                    e.display.gutterSpecs[s].className,
                    t
                  ),
                  xe(t)
                );
            }
          }
          function ba(e, t) {
            return ya(e, t, "gutterClick", !0);
          }
          function wa(e, t) {
            kn(e.display, t) ||
              (function (e, t) {
                return (
                  !!ve(e, "gutterContextMenu") &&
                  ya(e, t, "gutterContextMenu", !1)
                );
              })(e, t) ||
              me(e, t, "contextmenu") ||
              C ||
              e.display.input.onContextMenu(t);
          }
          function xa(e) {
            (e.display.wrapper.className =
              e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
              e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
              Rn(e);
          }
          ma.prototype.compare = function (e, t, n) {
            return (
              this.time + 400 > e && 0 == tt(t, this.pos) && n == this.button
            );
          };
          var ka = {
              toString: function () {
                return "CodeMirror.Init";
              },
            },
            Ca = {},
            Sa = {};
          function Ta(e, t, n) {
            if (!t != !(n && n != ka)) {
              var r = e.display.dragFunctions,
                i = t ? de : he;
              i(e.display.scroller, "dragstart", r.start),
                i(e.display.scroller, "dragenter", r.enter),
                i(e.display.scroller, "dragover", r.over),
                i(e.display.scroller, "dragleave", r.leave),
                i(e.display.scroller, "drop", r.drop);
            }
          }
          function La(e) {
            e.options.lineWrapping
              ? (z(e.display.wrapper, "CodeMirror-wrap"),
                (e.display.sizer.style.minWidth = ""),
                (e.display.sizerWidth = null))
              : (L(e.display.wrapper, "CodeMirror-wrap"), Kt(e)),
              sr(e),
              dr(e),
              Rn(e),
              setTimeout(function () {
                return jr(e);
              }, 100);
          }
          function Ma(e, t) {
            var n = this;
            if (!(this instanceof Ma)) return new Ma(e, t);
            (this.options = t = t ? W(t) : {}), W(Ca, t, !1);
            var r = t.value;
            "string" == typeof r
              ? (r = new Eo(r, t.mode, null, t.lineSeparator, t.direction))
              : t.mode && (r.modeOption = t.mode),
              (this.doc = r);
            var i = new Ma.inputStyles[t.inputStyle](this),
              o = (this.display = new gi(e, r, i, t));
            for (var c in ((o.wrapper.CodeMirror = this),
            xa(this),
            t.lineWrapping &&
              (this.display.wrapper.className += " CodeMirror-wrap"),
            Ur(this),
            (this.state = {
              keyMaps: [],
              overlays: [],
              modeGen: 0,
              overwrite: !1,
              delayingBlurEvent: !1,
              focused: !1,
              suppressEdits: !1,
              pasteIncoming: -1,
              cutIncoming: -1,
              selectingText: !1,
              draggingText: !1,
              highlight: new H(),
              keySeq: null,
              specialChars: null,
            }),
            t.autofocus && !v && o.input.focus(),
            a &&
              l < 11 &&
              setTimeout(function () {
                return n.display.input.reset(!0);
              }, 20),
            (function (e) {
              var t = e.display;
              de(t.scroller, "mousedown", ei(e, ga)),
                de(
                  t.scroller,
                  "dblclick",
                  a && l < 11
                    ? ei(e, function (t) {
                        if (!me(e, t)) {
                          var n = cr(e, t);
                          if (n && !ba(e, t) && !kn(e.display, t)) {
                            be(t);
                            var r = e.findWordAt(n);
                            $i(e.doc, r.anchor, r.head);
                          }
                        }
                      })
                    : function (t) {
                        return me(e, t) || be(t);
                      }
                ),
                de(t.scroller, "contextmenu", function (t) {
                  return wa(e, t);
                }),
                de(t.input.getField(), "contextmenu", function (n) {
                  t.scroller.contains(n.target) || wa(e, n);
                });
              var n,
                r = { end: 0 };
              function i() {
                t.activeTouch &&
                  ((n = setTimeout(function () {
                    return (t.activeTouch = null);
                  }, 1e3)),
                  ((r = t.activeTouch).end = +new Date()));
              }
              function o(e) {
                if (1 != e.touches.length) return !1;
                var t = e.touches[0];
                return t.radiusX <= 1 && t.radiusY <= 1;
              }
              function s(e, t) {
                if (null == t.left) return !0;
                var n = t.left - e.left,
                  r = t.top - e.top;
                return n * n + r * r > 400;
              }
              de(t.scroller, "touchstart", function (i) {
                if (!me(e, i) && !o(i) && !ba(e, i)) {
                  t.input.ensurePolled(), clearTimeout(n);
                  var a = +new Date();
                  (t.activeTouch = {
                    start: a,
                    moved: !1,
                    prev: a - r.end <= 300 ? r : null,
                  }),
                    1 == i.touches.length &&
                      ((t.activeTouch.left = i.touches[0].pageX),
                      (t.activeTouch.top = i.touches[0].pageY));
                }
              }),
                de(t.scroller, "touchmove", function () {
                  t.activeTouch && (t.activeTouch.moved = !0);
                }),
                de(t.scroller, "touchend", function (n) {
                  var r = t.activeTouch;
                  if (
                    r &&
                    !kn(t, n) &&
                    null != r.left &&
                    !r.moved &&
                    new Date() - r.start < 300
                  ) {
                    var o,
                      a = e.coordsChar(t.activeTouch, "page");
                    (o =
                      !r.prev || s(r, r.prev)
                        ? new Ci(a, a)
                        : !r.prev.prev || s(r, r.prev.prev)
                        ? e.findWordAt(a)
                        : new Ci(et(a.line, 0), lt(e.doc, et(a.line + 1, 0)))),
                      e.setSelection(o.anchor, o.head),
                      e.focus(),
                      be(n);
                  }
                  i();
                }),
                de(t.scroller, "touchcancel", i),
                de(t.scroller, "scroll", function () {
                  t.scroller.clientHeight &&
                    (Dr(e, t.scroller.scrollTop),
                    Wr(e, t.scroller.scrollLeft, !0),
                    pe(e, "scroll", e));
                }),
                de(t.scroller, "mousewheel", function (t) {
                  return xi(e, t);
                }),
                de(t.scroller, "DOMMouseScroll", function (t) {
                  return xi(e, t);
                }),
                de(t.wrapper, "scroll", function () {
                  return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
                }),
                (t.dragFunctions = {
                  enter: function (t) {
                    me(e, t) || ke(t);
                  },
                  over: function (t) {
                    me(e, t) ||
                      ((function (e, t) {
                        var n = cr(e, t);
                        if (n) {
                          var r = document.createDocumentFragment();
                          yr(e, n, r),
                            e.display.dragCursor ||
                              ((e.display.dragCursor = N(
                                "div",
                                null,
                                "CodeMirror-cursors CodeMirror-dragcursors"
                              )),
                              e.display.lineSpace.insertBefore(
                                e.display.dragCursor,
                                e.display.cursorDiv
                              )),
                            A(e.display.dragCursor, r);
                        }
                      })(e, t),
                      ke(t));
                  },
                  start: function (t) {
                    return (function (e, t) {
                      if (
                        a &&
                        (!e.state.draggingText || +new Date() - _o < 100)
                      )
                        ke(t);
                      else if (
                        !me(e, t) &&
                        !kn(e.display, t) &&
                        (t.dataTransfer.setData("Text", e.getSelection()),
                        (t.dataTransfer.effectAllowed = "copyMove"),
                        t.dataTransfer.setDragImage && !f)
                      ) {
                        var n = N(
                          "img",
                          null,
                          null,
                          "position: fixed; left: 0; top: 0;"
                        );
                        (n.src =
                          "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                          d &&
                            ((n.width = n.height = 1),
                            e.display.wrapper.appendChild(n),
                            (n._top = n.offsetTop)),
                          t.dataTransfer.setDragImage(n, 0, 0),
                          d && n.parentNode.removeChild(n);
                      }
                    })(e, t);
                  },
                  drop: ei(e, zo),
                  leave: function (t) {
                    me(e, t) || Po(e);
                  },
                });
              var c = t.input.getField();
              de(c, "keyup", function (t) {
                return da.call(e, t);
              }),
                de(c, "keydown", ei(e, ua)),
                de(c, "keypress", ei(e, fa)),
                de(c, "focus", function (t) {
                  return Sr(e, t);
                }),
                de(c, "blur", function (t) {
                  return Tr(e, t);
                });
            })(this),
            Wo(),
            Vr(this),
            (this.curOp.forceUpdate = !0),
            Di(this, r),
            (t.autofocus && !v) || this.hasFocus()
              ? setTimeout(function () {
                  n.hasFocus() && !n.state.focused && Sr(n);
                }, 20)
              : Tr(this),
            Sa))
              Sa.hasOwnProperty(c) && Sa[c](this, t[c], ka);
            fi(this), t.finishInit && t.finishInit(this);
            for (var u = 0; u < Aa.length; ++u) Aa[u](this);
            Gr(this),
              s &&
                t.lineWrapping &&
                "optimizelegibility" ==
                  getComputedStyle(o.lineDiv).textRendering &&
                (o.lineDiv.style.textRendering = "auto");
          }
          (Ma.defaults = Ca), (Ma.optionHandlers = Sa);
          var Aa = [];
          function Na(e, t, n, r) {
            var i,
              o = e.doc;
            null == n && (n = "add"),
              "smart" == n &&
                (o.mode.indent ? (i = ht(e, t).state) : (n = "prev"));
            var a = e.options.tabSize,
              l = Ve(o, t),
              s = F(l.text, null, a);
            l.stateAfter && (l.stateAfter = null);
            var c,
              u = l.text.match(/^\s*/)[0];
            if (r || /\S/.test(l.text)) {
              if (
                "smart" == n &&
                ((c = o.mode.indent(i, l.text.slice(u.length), l.text)) == j ||
                  c > 150)
              ) {
                if (!r) return;
                n = "prev";
              }
            } else (c = 0), (n = "not");
            "prev" == n
              ? (c = t > o.first ? F(Ve(o, t - 1).text, null, a) : 0)
              : "add" == n
              ? (c = s + e.options.indentUnit)
              : "subtract" == n
              ? (c = s - e.options.indentUnit)
              : "number" == typeof n && (c = s + n),
              (c = Math.max(0, c));
            var d = "",
              f = 0;
            if (e.options.indentWithTabs)
              for (var h = Math.floor(c / a); h; --h) (f += a), (d += "\t");
            if ((f < c && (d += G(c - f)), d != u))
              return (
                mo(o, d, et(t, 0), et(t, u.length), "+input"),
                (l.stateAfter = null),
                !0
              );
            for (var p = 0; p < o.sel.ranges.length; p++) {
              var m = o.sel.ranges[p];
              if (m.head.line == t && m.head.ch < u.length) {
                var g = et(t, u.length);
                Xi(o, p, new Ci(g, g));
                break;
              }
            }
          }
          Ma.defineInitHook = function (e) {
            return Aa.push(e);
          };
          var Oa = null;
          function Ea(e) {
            Oa = e;
          }
          function _a(e, t, n, r, i) {
            var o = e.doc;
            (e.display.shift = !1), r || (r = o.sel);
            var a = +new Date() - 200,
              l = "paste" == i || e.state.pasteIncoming > a,
              s = Ee(t),
              c = null;
            if (l && r.ranges.length > 1)
              if (Oa && Oa.text.join("\n") == t) {
                if (r.ranges.length % Oa.text.length == 0) {
                  c = [];
                  for (var u = 0; u < Oa.text.length; u++)
                    c.push(o.splitLines(Oa.text[u]));
                }
              } else
                s.length == r.ranges.length &&
                  e.options.pasteLinesPerSelection &&
                  (c = Y(s, function (e) {
                    return [e];
                  }));
            for (
              var d = e.curOp.updateInput, f = r.ranges.length - 1;
              f >= 0;
              f--
            ) {
              var h = r.ranges[f],
                p = h.from(),
                m = h.to();
              h.empty() &&
                (n && n > 0
                  ? (p = et(p.line, p.ch - n))
                  : e.state.overwrite && !l
                  ? (m = et(
                      m.line,
                      Math.min(Ve(o, m.line).text.length, m.ch + $(s).length)
                    ))
                  : l &&
                    Oa &&
                    Oa.lineWise &&
                    Oa.text.join("\n") == s.join("\n") &&
                    (p = m = et(p.line, 0)));
              var g = {
                from: p,
                to: m,
                text: c ? c[f % c.length] : s,
                origin:
                  i ||
                  (l ? "paste" : e.state.cutIncoming > a ? "cut" : "+input"),
              };
              co(e.doc, g), sn(e, "inputRead", e, g);
            }
            t && !l && Pa(e, t),
              Er(e),
              e.curOp.updateInput < 2 && (e.curOp.updateInput = d),
              (e.curOp.typing = !0),
              (e.state.pasteIncoming = e.state.cutIncoming = -1);
          }
          function za(e, t) {
            var n = e.clipboardData && e.clipboardData.getData("Text");
            if (n)
              return (
                e.preventDefault(),
                t.isReadOnly() ||
                  t.options.disableInput ||
                  Qr(t, function () {
                    return _a(t, n, 0, null, "paste");
                  }),
                !0
              );
          }
          function Pa(e, t) {
            if (e.options.electricChars && e.options.smartIndent)
              for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                var i = n.ranges[r];
                if (
                  !(
                    i.head.ch > 100 ||
                    (r && n.ranges[r - 1].head.line == i.head.line)
                  )
                ) {
                  var o = e.getModeAt(i.head),
                    a = !1;
                  if (o.electricChars) {
                    for (var l = 0; l < o.electricChars.length; l++)
                      if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                        a = Na(e, i.head.line, "smart");
                        break;
                      }
                  } else
                    o.electricInput &&
                      o.electricInput.test(
                        Ve(e.doc, i.head.line).text.slice(0, i.head.ch)
                      ) &&
                      (a = Na(e, i.head.line, "smart"));
                  a && sn(e, "electricInput", e, i.head.line);
                }
              }
          }
          function Da(e) {
            for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
              var i = e.doc.sel.ranges[r].head.line,
                o = { anchor: et(i, 0), head: et(i + 1, 0) };
              n.push(o), t.push(e.getRange(o.anchor, o.head));
            }
            return { text: t, ranges: n };
          }
          function Ia(e, t, n, r) {
            e.setAttribute("autocorrect", n ? "" : "off"),
              e.setAttribute("autocapitalize", r ? "" : "off"),
              e.setAttribute("spellcheck", !!t);
          }
          function Wa() {
            var e = N(
                "textarea",
                null,
                null,
                "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"
              ),
              t = N(
                "div",
                [e],
                null,
                "overflow: hidden; position: relative; width: 3px; height: 0px;"
              );
            return (
              s ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
              m && (e.style.border = "1px solid black"),
              Ia(e),
              t
            );
          }
          function Fa(e, t, n, r, i) {
            var o = t,
              a = n,
              l = Ve(e, t.line),
              s = i && "rtl" == e.direction ? -n : n;
            function c(o) {
              var a, c;
              if ("codepoint" == r) {
                var u = l.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
                if (isNaN(u)) a = null;
                else {
                  var d =
                    n > 0 ? u >= 55296 && u < 56320 : u >= 56320 && u < 57343;
                  a = new et(
                    t.line,
                    Math.max(
                      0,
                      Math.min(l.text.length, t.ch + n * (d ? 2 : 1))
                    ),
                    -n
                  );
                }
              } else
                a = i
                  ? (function (e, t, n, r) {
                      var i = ce(t, e.doc.direction);
                      if (!i) return Qo(t, n, r);
                      n.ch >= t.text.length
                        ? ((n.ch = t.text.length), (n.sticky = "before"))
                        : n.ch <= 0 && ((n.ch = 0), (n.sticky = "after"));
                      var o = le(i, n.ch, n.sticky),
                        a = i[o];
                      if (
                        "ltr" == e.doc.direction &&
                        a.level % 2 == 0 &&
                        (r > 0 ? a.to > n.ch : a.from < n.ch)
                      )
                        return Qo(t, n, r);
                      var l,
                        s = function (e, n) {
                          return Jo(t, e instanceof et ? e.ch : e, n);
                        },
                        c = function (n) {
                          return e.options.lineWrapping
                            ? ((l = l || _n(e, t)), Jn(e, t, l, n))
                            : { begin: 0, end: t.text.length };
                        },
                        u = c("before" == n.sticky ? s(n, -1) : n.ch);
                      if ("rtl" == e.doc.direction || 1 == a.level) {
                        var d = (1 == a.level) == r < 0,
                          f = s(n, d ? 1 : -1);
                        if (
                          null != f &&
                          (d
                            ? f <= a.to && f <= u.end
                            : f >= a.from && f >= u.begin)
                        ) {
                          var h = d ? "before" : "after";
                          return new et(n.line, f, h);
                        }
                      }
                      var p = function (e, t, r) {
                          for (
                            var o = function (e, t) {
                              return t
                                ? new et(n.line, s(e, 1), "before")
                                : new et(n.line, e, "after");
                            };
                            e >= 0 && e < i.length;
                            e += t
                          ) {
                            var a = i[e],
                              l = t > 0 == (1 != a.level),
                              c = l ? r.begin : s(r.end, -1);
                            if (a.from <= c && c < a.to) return o(c, l);
                            if (
                              ((c = l ? a.from : s(a.to, -1)),
                              r.begin <= c && c < r.end)
                            )
                              return o(c, l);
                          }
                        },
                        m = p(o + r, r, u);
                      if (m) return m;
                      var g = r > 0 ? u.end : s(u.begin, -1);
                      return null == g ||
                        (r > 0 && g == t.text.length) ||
                        !(m = p(r > 0 ? 0 : i.length - 1, r, c(g)))
                        ? null
                        : m;
                    })(e.cm, l, t, n)
                  : Qo(l, t, n);
              if (null == a) {
                if (
                  o ||
                  (c = t.line + s) < e.first ||
                  c >= e.first + e.size ||
                  ((t = new et(c, t.ch, t.sticky)), !(l = Ve(e, c)))
                )
                  return !1;
                t = ea(i, e.cm, l, t.line, s);
              } else t = a;
              return !0;
            }
            if ("char" == r || "codepoint" == r) c();
            else if ("column" == r) c(!0);
            else if ("word" == r || "group" == r)
              for (
                var u = null,
                  d = "group" == r,
                  f = e.cm && e.cm.getHelper(t, "wordChars"),
                  h = !0;
                !(n < 0) || c(!h);
                h = !1
              ) {
                var p = l.text.charAt(t.ch) || "\n",
                  m = ee(p, f)
                    ? "w"
                    : d && "\n" == p
                    ? "n"
                    : !d || /\s/.test(p)
                    ? null
                    : "p";
                if ((!d || h || m || (m = "s"), u && u != m)) {
                  n < 0 && ((n = 1), c(), (t.sticky = "after"));
                  break;
                }
                if ((m && (u = m), n > 0 && !c(!h))) break;
              }
            var g = oo(e, t, o, a, !0);
            return nt(o, g) && (g.hitSide = !0), g;
          }
          function Ha(e, t, n, r) {
            var i,
              o,
              a = e.doc,
              l = t.left;
            if ("page" == r) {
              var s = Math.min(
                  e.display.wrapper.clientHeight,
                  window.innerHeight || document.documentElement.clientHeight
                ),
                c = Math.max(s - 0.5 * rr(e.display), 3);
              i = (n > 0 ? t.bottom : t.top) + n * c;
            } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
            for (; (o = Xn(e, l, i)).outside; ) {
              if (n < 0 ? i <= 0 : i >= a.height) {
                o.hitSide = !0;
                break;
              }
              i += 5 * n;
            }
            return o;
          }
          var Ra = function (e) {
            (this.cm = e),
              (this.lastAnchorNode =
                this.lastAnchorOffset =
                this.lastFocusNode =
                this.lastFocusOffset =
                  null),
              (this.polling = new H()),
              (this.composing = null),
              (this.gracePeriod = !1),
              (this.readDOMTimeout = null);
          };
          function ja(e, t) {
            var n = En(e, t.line);
            if (!n || n.hidden) return null;
            var r = Ve(e.doc, t.line),
              i = Nn(n, r, t.line),
              o = ce(r, e.doc.direction),
              a = "left";
            o && (a = le(o, t.ch) % 2 ? "right" : "left");
            var l = In(i.map, t.ch, a);
            return (l.offset = "right" == l.collapse ? l.end : l.start), l;
          }
          function Ba(e, t) {
            return t && (e.bad = !0), e;
          }
          function qa(e, t, n) {
            var r;
            if (t == e.display.lineDiv) {
              if (!(r = e.display.lineDiv.childNodes[n]))
                return Ba(e.clipPos(et(e.display.viewTo - 1)), !0);
              (t = null), (n = 0);
            } else
              for (r = t; ; r = r.parentNode) {
                if (!r || r == e.display.lineDiv) return null;
                if (r.parentNode && r.parentNode == e.display.lineDiv) break;
              }
            for (var i = 0; i < e.display.view.length; i++) {
              var o = e.display.view[i];
              if (o.node == r) return Ua(o, t, n);
            }
          }
          function Ua(e, t, n) {
            var r = e.text.firstChild,
              i = !1;
            if (!t || !E(r, t)) return Ba(et(Xe(e.line), 0), !0);
            if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
              var o = e.rest ? $(e.rest) : e.line;
              return Ba(et(Xe(o), o.text.length), i);
            }
            var a = 3 == t.nodeType ? t : null,
              l = t;
            for (
              a ||
              1 != t.childNodes.length ||
              3 != t.firstChild.nodeType ||
              ((a = t.firstChild), n && (n = a.nodeValue.length));
              l.parentNode != r;

            )
              l = l.parentNode;
            var s = e.measure,
              c = s.maps;
            function u(t, n, r) {
              for (var i = -1; i < (c ? c.length : 0); i++)
                for (
                  var o = i < 0 ? s.map : c[i], a = 0;
                  a < o.length;
                  a += 3
                ) {
                  var l = o[a + 2];
                  if (l == t || l == n) {
                    var u = Xe(i < 0 ? e.line : e.rest[i]),
                      d = o[a] + r;
                    return (
                      (r < 0 || l != t) && (d = o[a + (r ? 1 : 0)]), et(u, d)
                    );
                  }
                }
            }
            var d = u(a, l, n);
            if (d) return Ba(d, i);
            for (
              var f = l.nextSibling, h = a ? a.nodeValue.length - n : 0;
              f;
              f = f.nextSibling
            ) {
              if ((d = u(f, f.firstChild, 0)))
                return Ba(et(d.line, d.ch - h), i);
              h += f.textContent.length;
            }
            for (var p = l.previousSibling, m = n; p; p = p.previousSibling) {
              if ((d = u(p, p.firstChild, -1)))
                return Ba(et(d.line, d.ch + m), i);
              m += p.textContent.length;
            }
          }
          (Ra.prototype.init = function (e) {
            var t = this,
              n = this,
              r = n.cm,
              i = (n.div = e.lineDiv);
            function o(e) {
              for (var t = e.target; t; t = t.parentNode) {
                if (t == i) return !0;
                if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
              }
              return !1;
            }
            function a(e) {
              if (o(e) && !me(r, e)) {
                if (r.somethingSelected())
                  Ea({ lineWise: !1, text: r.getSelections() }),
                    "cut" == e.type && r.replaceSelection("", null, "cut");
                else {
                  if (!r.options.lineWiseCopyCut) return;
                  var t = Da(r);
                  Ea({ lineWise: !0, text: t.text }),
                    "cut" == e.type &&
                      r.operation(function () {
                        r.setSelections(t.ranges, 0, B),
                          r.replaceSelection("", null, "cut");
                      });
                }
                if (e.clipboardData) {
                  e.clipboardData.clearData();
                  var a = Oa.text.join("\n");
                  if (
                    (e.clipboardData.setData("Text", a),
                    e.clipboardData.getData("Text") == a)
                  )
                    return void e.preventDefault();
                }
                var l = Wa(),
                  s = l.firstChild;
                r.display.lineSpace.insertBefore(
                  l,
                  r.display.lineSpace.firstChild
                ),
                  (s.value = Oa.text.join("\n"));
                var c = _();
                D(s),
                  setTimeout(function () {
                    r.display.lineSpace.removeChild(l),
                      c.focus(),
                      c == i && n.showPrimarySelection();
                  }, 50);
              }
            }
            (i.contentEditable = !0),
              Ia(
                i,
                r.options.spellcheck,
                r.options.autocorrect,
                r.options.autocapitalize
              ),
              de(i, "paste", function (e) {
                !o(e) ||
                  me(r, e) ||
                  za(e, r) ||
                  (l <= 11 &&
                    setTimeout(
                      ei(r, function () {
                        return t.updateFromDOM();
                      }),
                      20
                    ));
              }),
              de(i, "compositionstart", function (e) {
                t.composing = { data: e.data, done: !1 };
              }),
              de(i, "compositionupdate", function (e) {
                t.composing || (t.composing = { data: e.data, done: !1 });
              }),
              de(i, "compositionend", function (e) {
                t.composing &&
                  (e.data != t.composing.data && t.readFromDOMSoon(),
                  (t.composing.done = !0));
              }),
              de(i, "touchstart", function () {
                return n.forceCompositionEnd();
              }),
              de(i, "input", function () {
                t.composing || t.readFromDOMSoon();
              }),
              de(i, "copy", a),
              de(i, "cut", a);
          }),
            (Ra.prototype.screenReaderLabelChanged = function (e) {
              e
                ? this.div.setAttribute("aria-label", e)
                : this.div.removeAttribute("aria-label");
            }),
            (Ra.prototype.prepareSelection = function () {
              var e = vr(this.cm, !1);
              return (e.focus = _() == this.div), e;
            }),
            (Ra.prototype.showSelection = function (e, t) {
              e &&
                this.cm.display.view.length &&
                ((e.focus || t) && this.showPrimarySelection(),
                this.showMultipleSelections(e));
            }),
            (Ra.prototype.getSelection = function () {
              return this.cm.display.wrapper.ownerDocument.getSelection();
            }),
            (Ra.prototype.showPrimarySelection = function () {
              var e = this.getSelection(),
                t = this.cm,
                r = t.doc.sel.primary(),
                i = r.from(),
                o = r.to();
              if (
                t.display.viewTo == t.display.viewFrom ||
                i.line >= t.display.viewTo ||
                o.line < t.display.viewFrom
              )
                e.removeAllRanges();
              else {
                var a = qa(t, e.anchorNode, e.anchorOffset),
                  l = qa(t, e.focusNode, e.focusOffset);
                if (
                  !a ||
                  a.bad ||
                  !l ||
                  l.bad ||
                  0 != tt(ot(a, l), i) ||
                  0 != tt(it(a, l), o)
                ) {
                  var s = t.display.view,
                    c = (i.line >= t.display.viewFrom && ja(t, i)) || {
                      node: s[0].measure.map[2],
                      offset: 0,
                    },
                    u = o.line < t.display.viewTo && ja(t, o);
                  if (!u) {
                    var d = s[s.length - 1].measure,
                      f = d.maps ? d.maps[d.maps.length - 1] : d.map;
                    u = {
                      node: f[f.length - 1],
                      offset: f[f.length - 2] - f[f.length - 3],
                    };
                  }
                  if (c && u) {
                    var h,
                      p = e.rangeCount && e.getRangeAt(0);
                    try {
                      h = T(c.node, c.offset, u.offset, u.node);
                    } catch (e) {}
                    h &&
                      (!n && t.state.focused
                        ? (e.collapse(c.node, c.offset),
                          h.collapsed || (e.removeAllRanges(), e.addRange(h)))
                        : (e.removeAllRanges(), e.addRange(h)),
                      p && null == e.anchorNode
                        ? e.addRange(p)
                        : n && this.startGracePeriod()),
                      this.rememberSelection();
                  } else e.removeAllRanges();
                }
              }
            }),
            (Ra.prototype.startGracePeriod = function () {
              var e = this;
              clearTimeout(this.gracePeriod),
                (this.gracePeriod = setTimeout(function () {
                  (e.gracePeriod = !1),
                    e.selectionChanged() &&
                      e.cm.operation(function () {
                        return (e.cm.curOp.selectionChanged = !0);
                      });
                }, 20));
            }),
            (Ra.prototype.showMultipleSelections = function (e) {
              A(this.cm.display.cursorDiv, e.cursors),
                A(this.cm.display.selectionDiv, e.selection);
            }),
            (Ra.prototype.rememberSelection = function () {
              var e = this.getSelection();
              (this.lastAnchorNode = e.anchorNode),
                (this.lastAnchorOffset = e.anchorOffset),
                (this.lastFocusNode = e.focusNode),
                (this.lastFocusOffset = e.focusOffset);
            }),
            (Ra.prototype.selectionInEditor = function () {
              var e = this.getSelection();
              if (!e.rangeCount) return !1;
              var t = e.getRangeAt(0).commonAncestorContainer;
              return E(this.div, t);
            }),
            (Ra.prototype.focus = function () {
              "nocursor" != this.cm.options.readOnly &&
                ((this.selectionInEditor() && _() == this.div) ||
                  this.showSelection(this.prepareSelection(), !0),
                this.div.focus());
            }),
            (Ra.prototype.blur = function () {
              this.div.blur();
            }),
            (Ra.prototype.getField = function () {
              return this.div;
            }),
            (Ra.prototype.supportsTouch = function () {
              return !0;
            }),
            (Ra.prototype.receivedFocus = function () {
              var e = this;
              this.selectionInEditor()
                ? this.pollSelection()
                : Qr(this.cm, function () {
                    return (e.cm.curOp.selectionChanged = !0);
                  }),
                this.polling.set(this.cm.options.pollInterval, function t() {
                  e.cm.state.focused &&
                    (e.pollSelection(),
                    e.polling.set(e.cm.options.pollInterval, t));
                });
            }),
            (Ra.prototype.selectionChanged = function () {
              var e = this.getSelection();
              return (
                e.anchorNode != this.lastAnchorNode ||
                e.anchorOffset != this.lastAnchorOffset ||
                e.focusNode != this.lastFocusNode ||
                e.focusOffset != this.lastFocusOffset
              );
            }),
            (Ra.prototype.pollSelection = function () {
              if (
                null == this.readDOMTimeout &&
                !this.gracePeriod &&
                this.selectionChanged()
              ) {
                var e = this.getSelection(),
                  t = this.cm;
                if (
                  g &&
                  u &&
                  this.cm.display.gutterSpecs.length &&
                  (function (e) {
                    for (var t = e; t; t = t.parentNode)
                      if (/CodeMirror-gutter-wrapper/.test(t.className))
                        return !0;
                    return !1;
                  })(e.anchorNode)
                )
                  return (
                    this.cm.triggerOnKeyDown({
                      type: "keydown",
                      keyCode: 8,
                      preventDefault: Math.abs,
                    }),
                    this.blur(),
                    void this.focus()
                  );
                if (!this.composing) {
                  this.rememberSelection();
                  var n = qa(t, e.anchorNode, e.anchorOffset),
                    r = qa(t, e.focusNode, e.focusOffset);
                  n &&
                    r &&
                    Qr(t, function () {
                      Qi(t.doc, Ti(n, r), B),
                        (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                    });
                }
              }
            }),
            (Ra.prototype.pollContent = function () {
              null != this.readDOMTimeout &&
                (clearTimeout(this.readDOMTimeout),
                (this.readDOMTimeout = null));
              var e,
                t,
                n,
                r = this.cm,
                i = r.display,
                o = r.doc.sel.primary(),
                a = o.from(),
                l = o.to();
              if (
                (0 == a.ch &&
                  a.line > r.firstLine() &&
                  (a = et(a.line - 1, Ve(r.doc, a.line - 1).length)),
                l.ch == Ve(r.doc, l.line).text.length &&
                  l.line < r.lastLine() &&
                  (l = et(l.line + 1, 0)),
                a.line < i.viewFrom || l.line > i.viewTo - 1)
              )
                return !1;
              a.line == i.viewFrom || 0 == (e = ur(r, a.line))
                ? ((t = Xe(i.view[0].line)), (n = i.view[0].node))
                : ((t = Xe(i.view[e].line)),
                  (n = i.view[e - 1].node.nextSibling));
              var s,
                c,
                u = ur(r, l.line);
              if (
                (u == i.view.length - 1
                  ? ((s = i.viewTo - 1), (c = i.lineDiv.lastChild))
                  : ((s = Xe(i.view[u + 1].line) - 1),
                    (c = i.view[u + 1].node.previousSibling)),
                !n)
              )
                return !1;
              for (
                var d = r.doc.splitLines(
                    (function (e, t, n, r, i) {
                      var o = "",
                        a = !1,
                        l = e.doc.lineSeparator(),
                        s = !1;
                      function c() {
                        a && ((o += l), s && (o += l), (a = s = !1));
                      }
                      function u(e) {
                        e && (c(), (o += e));
                      }
                      function d(t) {
                        if (1 == t.nodeType) {
                          var n = t.getAttribute("cm-text");
                          if (n) return void u(n);
                          var o,
                            f = t.getAttribute("cm-marker");
                          if (f) {
                            var h = e.findMarks(
                              et(r, 0),
                              et(i + 1, 0),
                              ((g = +f),
                              function (e) {
                                return e.id == g;
                              })
                            );
                            return void (
                              h.length &&
                              (o = h[0].find(0)) &&
                              u(Ge(e.doc, o.from, o.to).join(l))
                            );
                          }
                          if ("false" == t.getAttribute("contenteditable"))
                            return;
                          var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                          if (
                            !/^br$/i.test(t.nodeName) &&
                            0 == t.textContent.length
                          )
                            return;
                          p && c();
                          for (var m = 0; m < t.childNodes.length; m++)
                            d(t.childNodes[m]);
                          /^(pre|p)$/i.test(t.nodeName) && (s = !0),
                            p && (a = !0);
                        } else
                          3 == t.nodeType &&
                            u(
                              t.nodeValue
                                .replace(/\u200b/g, "")
                                .replace(/\u00a0/g, " ")
                            );
                        var g;
                      }
                      for (; d(t), t != n; ) (t = t.nextSibling), (s = !1);
                      return o;
                    })(r, n, c, t, s)
                  ),
                  f = Ge(r.doc, et(t, 0), et(s, Ve(r.doc, s).text.length));
                d.length > 1 && f.length > 1;

              )
                if ($(d) == $(f)) d.pop(), f.pop(), s--;
                else {
                  if (d[0] != f[0]) break;
                  d.shift(), f.shift(), t++;
                }
              for (
                var h = 0,
                  p = 0,
                  m = d[0],
                  g = f[0],
                  v = Math.min(m.length, g.length);
                h < v && m.charCodeAt(h) == g.charCodeAt(h);

              )
                ++h;
              for (
                var y = $(d),
                  b = $(f),
                  w = Math.min(
                    y.length - (1 == d.length ? h : 0),
                    b.length - (1 == f.length ? h : 0)
                  );
                p < w &&
                y.charCodeAt(y.length - p - 1) ==
                  b.charCodeAt(b.length - p - 1);

              )
                ++p;
              if (1 == d.length && 1 == f.length && t == a.line)
                for (
                  ;
                  h &&
                  h > a.ch &&
                  y.charCodeAt(y.length - p - 1) ==
                    b.charCodeAt(b.length - p - 1);

                )
                  h--, p++;
              (d[d.length - 1] = y
                .slice(0, y.length - p)
                .replace(/^\u200b+/, "")),
                (d[0] = d[0].slice(h).replace(/\u200b+$/, ""));
              var x = et(t, h),
                k = et(s, f.length ? $(f).length - p : 0);
              return d.length > 1 || d[0] || tt(x, k)
                ? (mo(r.doc, d, x, k, "+input"), !0)
                : void 0;
            }),
            (Ra.prototype.ensurePolled = function () {
              this.forceCompositionEnd();
            }),
            (Ra.prototype.reset = function () {
              this.forceCompositionEnd();
            }),
            (Ra.prototype.forceCompositionEnd = function () {
              this.composing &&
                (clearTimeout(this.readDOMTimeout),
                (this.composing = null),
                this.updateFromDOM(),
                this.div.blur(),
                this.div.focus());
            }),
            (Ra.prototype.readFromDOMSoon = function () {
              var e = this;
              null == this.readDOMTimeout &&
                (this.readDOMTimeout = setTimeout(function () {
                  if (((e.readDOMTimeout = null), e.composing)) {
                    if (!e.composing.done) return;
                    e.composing = null;
                  }
                  e.updateFromDOM();
                }, 80));
            }),
            (Ra.prototype.updateFromDOM = function () {
              var e = this;
              (!this.cm.isReadOnly() && this.pollContent()) ||
                Qr(this.cm, function () {
                  return dr(e.cm);
                });
            }),
            (Ra.prototype.setUneditable = function (e) {
              e.contentEditable = "false";
            }),
            (Ra.prototype.onKeyPress = function (e) {
              0 == e.charCode ||
                this.composing ||
                (e.preventDefault(),
                this.cm.isReadOnly() ||
                  ei(this.cm, _a)(
                    this.cm,
                    String.fromCharCode(
                      null == e.charCode ? e.keyCode : e.charCode
                    ),
                    0
                  ));
            }),
            (Ra.prototype.readOnlyChanged = function (e) {
              this.div.contentEditable = String("nocursor" != e);
            }),
            (Ra.prototype.onContextMenu = function () {}),
            (Ra.prototype.resetPosition = function () {}),
            (Ra.prototype.needsContentAttribute = !0);
          var Ka = function (e) {
            (this.cm = e),
              (this.prevInput = ""),
              (this.pollingFast = !1),
              (this.polling = new H()),
              (this.hasSelection = !1),
              (this.composing = null);
          };
          (Ka.prototype.init = function (e) {
            var t = this,
              n = this,
              r = this.cm;
            this.createField(e);
            var i = this.textarea;
            function o(e) {
              if (!me(r, e)) {
                if (r.somethingSelected())
                  Ea({ lineWise: !1, text: r.getSelections() });
                else {
                  if (!r.options.lineWiseCopyCut) return;
                  var t = Da(r);
                  Ea({ lineWise: !0, text: t.text }),
                    "cut" == e.type
                      ? r.setSelections(t.ranges, null, B)
                      : ((n.prevInput = ""),
                        (i.value = t.text.join("\n")),
                        D(i));
                }
                "cut" == e.type && (r.state.cutIncoming = +new Date());
              }
            }
            e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
              m && (i.style.width = "0px"),
              de(i, "input", function () {
                a && l >= 9 && t.hasSelection && (t.hasSelection = null),
                  n.poll();
              }),
              de(i, "paste", function (e) {
                me(r, e) ||
                  za(e, r) ||
                  ((r.state.pasteIncoming = +new Date()), n.fastPoll());
              }),
              de(i, "cut", o),
              de(i, "copy", o),
              de(e.scroller, "paste", function (t) {
                if (!kn(e, t) && !me(r, t)) {
                  if (!i.dispatchEvent)
                    return (
                      (r.state.pasteIncoming = +new Date()), void n.focus()
                    );
                  var o = new Event("paste");
                  (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
                }
              }),
              de(e.lineSpace, "selectstart", function (t) {
                kn(e, t) || be(t);
              }),
              de(i, "compositionstart", function () {
                var e = r.getCursor("from");
                n.composing && n.composing.range.clear(),
                  (n.composing = {
                    start: e,
                    range: r.markText(e, r.getCursor("to"), {
                      className: "CodeMirror-composing",
                    }),
                  });
              }),
              de(i, "compositionend", function () {
                n.composing &&
                  (n.poll(), n.composing.range.clear(), (n.composing = null));
              });
          }),
            (Ka.prototype.createField = function (e) {
              (this.wrapper = Wa()), (this.textarea = this.wrapper.firstChild);
            }),
            (Ka.prototype.screenReaderLabelChanged = function (e) {
              e
                ? this.textarea.setAttribute("aria-label", e)
                : this.textarea.removeAttribute("aria-label");
            }),
            (Ka.prototype.prepareSelection = function () {
              var e = this.cm,
                t = e.display,
                n = e.doc,
                r = vr(e);
              if (e.options.moveInputWithCursor) {
                var i = Gn(e, n.sel.primary().head, "div"),
                  o = t.wrapper.getBoundingClientRect(),
                  a = t.lineDiv.getBoundingClientRect();
                (r.teTop = Math.max(
                  0,
                  Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)
                )),
                  (r.teLeft = Math.max(
                    0,
                    Math.min(
                      t.wrapper.clientWidth - 10,
                      i.left + a.left - o.left
                    )
                  ));
              }
              return r;
            }),
            (Ka.prototype.showSelection = function (e) {
              var t = this.cm.display;
              A(t.cursorDiv, e.cursors),
                A(t.selectionDiv, e.selection),
                null != e.teTop &&
                  ((this.wrapper.style.top = e.teTop + "px"),
                  (this.wrapper.style.left = e.teLeft + "px"));
            }),
            (Ka.prototype.reset = function (e) {
              if (!this.contextMenuPending && !this.composing) {
                var t = this.cm;
                if (t.somethingSelected()) {
                  this.prevInput = "";
                  var n = t.getSelection();
                  (this.textarea.value = n),
                    t.state.focused && D(this.textarea),
                    a && l >= 9 && (this.hasSelection = n);
                } else
                  e ||
                    ((this.prevInput = this.textarea.value = ""),
                    a && l >= 9 && (this.hasSelection = null));
              }
            }),
            (Ka.prototype.getField = function () {
              return this.textarea;
            }),
            (Ka.prototype.supportsTouch = function () {
              return !1;
            }),
            (Ka.prototype.focus = function () {
              if (
                "nocursor" != this.cm.options.readOnly &&
                (!v || _() != this.textarea)
              )
                try {
                  this.textarea.focus();
                } catch (e) {}
            }),
            (Ka.prototype.blur = function () {
              this.textarea.blur();
            }),
            (Ka.prototype.resetPosition = function () {
              this.wrapper.style.top = this.wrapper.style.left = 0;
            }),
            (Ka.prototype.receivedFocus = function () {
              this.slowPoll();
            }),
            (Ka.prototype.slowPoll = function () {
              var e = this;
              this.pollingFast ||
                this.polling.set(this.cm.options.pollInterval, function () {
                  e.poll(), e.cm.state.focused && e.slowPoll();
                });
            }),
            (Ka.prototype.fastPoll = function () {
              var e = !1,
                t = this;
              (t.pollingFast = !0),
                t.polling.set(20, function n() {
                  t.poll() || e
                    ? ((t.pollingFast = !1), t.slowPoll())
                    : ((e = !0), t.polling.set(60, n));
                });
            }),
            (Ka.prototype.poll = function () {
              var e = this,
                t = this.cm,
                n = this.textarea,
                r = this.prevInput;
              if (
                this.contextMenuPending ||
                !t.state.focused ||
                (_e(n) && !r && !this.composing) ||
                t.isReadOnly() ||
                t.options.disableInput ||
                t.state.keySeq
              )
                return !1;
              var i = n.value;
              if (i == r && !t.somethingSelected()) return !1;
              if (
                (a && l >= 9 && this.hasSelection === i) ||
                (y && /[\uf700-\uf7ff]/.test(i))
              )
                return t.display.input.reset(), !1;
              if (t.doc.sel == t.display.selForContextMenu) {
                var o = i.charCodeAt(0);
                if ((8203 != o || r || (r = "​"), 8666 == o))
                  return this.reset(), this.cm.execCommand("undo");
              }
              for (
                var s = 0, c = Math.min(r.length, i.length);
                s < c && r.charCodeAt(s) == i.charCodeAt(s);

              )
                ++s;
              return (
                Qr(t, function () {
                  _a(
                    t,
                    i.slice(s),
                    r.length - s,
                    null,
                    e.composing ? "*compose" : null
                  ),
                    i.length > 1e3 || i.indexOf("\n") > -1
                      ? (n.value = e.prevInput = "")
                      : (e.prevInput = i),
                    e.composing &&
                      (e.composing.range.clear(),
                      (e.composing.range = t.markText(
                        e.composing.start,
                        t.getCursor("to"),
                        { className: "CodeMirror-composing" }
                      )));
                }),
                !0
              );
            }),
            (Ka.prototype.ensurePolled = function () {
              this.pollingFast && this.poll() && (this.pollingFast = !1);
            }),
            (Ka.prototype.onKeyPress = function () {
              a && l >= 9 && (this.hasSelection = null), this.fastPoll();
            }),
            (Ka.prototype.onContextMenu = function (e) {
              var t = this,
                n = t.cm,
                r = n.display,
                i = t.textarea;
              t.contextMenuPending && t.contextMenuPending();
              var o = cr(n, e),
                c = r.scroller.scrollTop;
              if (o && !d) {
                n.options.resetSelectionOnContextMenu &&
                  -1 == n.doc.sel.contains(o) &&
                  ei(n, Qi)(n.doc, Ti(o), B);
                var u,
                  f = i.style.cssText,
                  h = t.wrapper.style.cssText,
                  p = t.wrapper.offsetParent.getBoundingClientRect();
                if (
                  ((t.wrapper.style.cssText = "position: static"),
                  (i.style.cssText =
                    "position: absolute; width: 30px; height: 30px;\n      top: " +
                    (e.clientY - p.top - 5) +
                    "px; left: " +
                    (e.clientX - p.left - 5) +
                    "px;\n      z-index: 1000; background: " +
                    (a ? "rgba(255, 255, 255, .05)" : "transparent") +
                    ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
                  s && (u = window.scrollY),
                  r.input.focus(),
                  s && window.scrollTo(null, u),
                  r.input.reset(),
                  n.somethingSelected() || (i.value = t.prevInput = " "),
                  (t.contextMenuPending = v),
                  (r.selForContextMenu = n.doc.sel),
                  clearTimeout(r.detectingSelectAll),
                  a && l >= 9 && g(),
                  C)
                ) {
                  ke(e);
                  var m = function () {
                    he(window, "mouseup", m), setTimeout(v, 20);
                  };
                  de(window, "mouseup", m);
                } else setTimeout(v, 50);
              }
              function g() {
                if (null != i.selectionStart) {
                  var e = n.somethingSelected(),
                    o = "​" + (e ? i.value : "");
                  (i.value = "⇚"),
                    (i.value = o),
                    (t.prevInput = e ? "" : "​"),
                    (i.selectionStart = 1),
                    (i.selectionEnd = o.length),
                    (r.selForContextMenu = n.doc.sel);
                }
              }
              function v() {
                if (
                  t.contextMenuPending == v &&
                  ((t.contextMenuPending = !1),
                  (t.wrapper.style.cssText = h),
                  (i.style.cssText = f),
                  a &&
                    l < 9 &&
                    r.scrollbars.setScrollTop((r.scroller.scrollTop = c)),
                  null != i.selectionStart)
                ) {
                  (!a || (a && l < 9)) && g();
                  var e = 0,
                    o = function () {
                      r.selForContextMenu == n.doc.sel &&
                      0 == i.selectionStart &&
                      i.selectionEnd > 0 &&
                      "​" == t.prevInput
                        ? ei(n, lo)(n)
                        : e++ < 10
                        ? (r.detectingSelectAll = setTimeout(o, 500))
                        : ((r.selForContextMenu = null), r.input.reset());
                    };
                  r.detectingSelectAll = setTimeout(o, 200);
                }
              }
            }),
            (Ka.prototype.readOnlyChanged = function (e) {
              e || this.reset(),
                (this.textarea.disabled = "nocursor" == e),
                (this.textarea.readOnly = !!e);
            }),
            (Ka.prototype.setUneditable = function () {}),
            (Ka.prototype.needsContentAttribute = !1),
            (function (e) {
              var t = e.optionHandlers;
              function n(n, r, i, o) {
                (e.defaults[n] = r),
                  i &&
                    (t[n] = o
                      ? function (e, t, n) {
                          n != ka && i(e, t, n);
                        }
                      : i);
              }
              (e.defineOption = n),
                (e.Init = ka),
                n(
                  "value",
                  "",
                  function (e, t) {
                    return e.setValue(t);
                  },
                  !0
                ),
                n(
                  "mode",
                  null,
                  function (e, t) {
                    (e.doc.modeOption = t), Oi(e);
                  },
                  !0
                ),
                n("indentUnit", 2, Oi, !0),
                n("indentWithTabs", !1),
                n("smartIndent", !0),
                n(
                  "tabSize",
                  4,
                  function (e) {
                    Ei(e), Rn(e), dr(e);
                  },
                  !0
                ),
                n("lineSeparator", null, function (e, t) {
                  if (((e.doc.lineSep = t), t)) {
                    var n = [],
                      r = e.doc.first;
                    e.doc.iter(function (e) {
                      for (var i = 0; ; ) {
                        var o = e.text.indexOf(t, i);
                        if (-1 == o) break;
                        (i = o + t.length), n.push(et(r, o));
                      }
                      r++;
                    });
                    for (var i = n.length - 1; i >= 0; i--)
                      mo(e.doc, t, n[i], et(n[i].line, n[i].ch + t.length));
                  }
                }),
                n(
                  "specialChars",
                  /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
                  function (e, t, n) {
                    (e.state.specialChars = new RegExp(
                      t.source + (t.test("\t") ? "" : "|\t"),
                      "g"
                    )),
                      n != ka && e.refresh();
                  }
                ),
                n(
                  "specialCharPlaceholder",
                  Jt,
                  function (e) {
                    return e.refresh();
                  },
                  !0
                ),
                n("electricChars", !0),
                n(
                  "inputStyle",
                  v ? "contenteditable" : "textarea",
                  function () {
                    throw new Error(
                      "inputStyle can not (yet) be changed in a running editor"
                    );
                  },
                  !0
                ),
                n(
                  "spellcheck",
                  !1,
                  function (e, t) {
                    return (e.getInputField().spellcheck = t);
                  },
                  !0
                ),
                n(
                  "autocorrect",
                  !1,
                  function (e, t) {
                    return (e.getInputField().autocorrect = t);
                  },
                  !0
                ),
                n(
                  "autocapitalize",
                  !1,
                  function (e, t) {
                    return (e.getInputField().autocapitalize = t);
                  },
                  !0
                ),
                n("rtlMoveVisually", !w),
                n("wholeLineUpdateBefore", !0),
                n(
                  "theme",
                  "default",
                  function (e) {
                    xa(e), mi(e);
                  },
                  !0
                ),
                n("keyMap", "default", function (e, t, n) {
                  var r = Xo(t),
                    i = n != ka && Xo(n);
                  i && i.detach && i.detach(e, r),
                    r.attach && r.attach(e, i || null);
                }),
                n("extraKeys", null),
                n("configureMouse", null),
                n("lineWrapping", !1, La, !0),
                n(
                  "gutters",
                  [],
                  function (e, t) {
                    (e.display.gutterSpecs = hi(t, e.options.lineNumbers)),
                      mi(e);
                  },
                  !0
                ),
                n(
                  "fixedGutter",
                  !0,
                  function (e, t) {
                    (e.display.gutters.style.left = t
                      ? ar(e.display) + "px"
                      : "0"),
                      e.refresh();
                  },
                  !0
                ),
                n(
                  "coverGutterNextToScrollbar",
                  !1,
                  function (e) {
                    return jr(e);
                  },
                  !0
                ),
                n(
                  "scrollbarStyle",
                  "native",
                  function (e) {
                    Ur(e),
                      jr(e),
                      e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                      e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                  },
                  !0
                ),
                n(
                  "lineNumbers",
                  !1,
                  function (e, t) {
                    (e.display.gutterSpecs = hi(e.options.gutters, t)), mi(e);
                  },
                  !0
                ),
                n("firstLineNumber", 1, mi, !0),
                n(
                  "lineNumberFormatter",
                  function (e) {
                    return e;
                  },
                  mi,
                  !0
                ),
                n("showCursorWhenSelecting", !1, gr, !0),
                n("resetSelectionOnContextMenu", !0),
                n("lineWiseCopyCut", !0),
                n("pasteLinesPerSelection", !0),
                n("selectionsMayTouch", !1),
                n("readOnly", !1, function (e, t) {
                  "nocursor" == t && (Tr(e), e.display.input.blur()),
                    e.display.input.readOnlyChanged(t);
                }),
                n("screenReaderLabel", null, function (e, t) {
                  (t = "" === t ? null : t),
                    e.display.input.screenReaderLabelChanged(t);
                }),
                n(
                  "disableInput",
                  !1,
                  function (e, t) {
                    t || e.display.input.reset();
                  },
                  !0
                ),
                n("dragDrop", !0, Ta),
                n("allowDropFileTypes", null),
                n("cursorBlinkRate", 530),
                n("cursorScrollMargin", 0),
                n("cursorHeight", 1, gr, !0),
                n("singleCursorHeightPerLine", !0, gr, !0),
                n("workTime", 100),
                n("workDelay", 100),
                n("flattenSpans", !0, Ei, !0),
                n("addModeClass", !1, Ei, !0),
                n("pollInterval", 100),
                n("undoDepth", 200, function (e, t) {
                  return (e.doc.history.undoDepth = t);
                }),
                n("historyEventDelay", 1250),
                n(
                  "viewportMargin",
                  10,
                  function (e) {
                    return e.refresh();
                  },
                  !0
                ),
                n("maxHighlightLength", 1e4, Ei, !0),
                n("moveInputWithCursor", !0, function (e, t) {
                  t || e.display.input.resetPosition();
                }),
                n("tabindex", null, function (e, t) {
                  return (e.display.input.getField().tabIndex = t || "");
                }),
                n("autofocus", null),
                n(
                  "direction",
                  "ltr",
                  function (e, t) {
                    return e.doc.setDirection(t);
                  },
                  !0
                ),
                n("phrases", null);
            })(Ma),
            (function (e) {
              var t = e.optionHandlers,
                n = (e.helpers = {});
              (e.prototype = {
                constructor: e,
                focus: function () {
                  window.focus(), this.display.input.focus();
                },
                setOption: function (e, n) {
                  var r = this.options,
                    i = r[e];
                  (r[e] == n && "mode" != e) ||
                    ((r[e] = n),
                    t.hasOwnProperty(e) && ei(this, t[e])(this, n, i),
                    pe(this, "optionChange", this, e));
                },
                getOption: function (e) {
                  return this.options[e];
                },
                getDoc: function () {
                  return this.doc;
                },
                addKeyMap: function (e, t) {
                  this.state.keyMaps[t ? "push" : "unshift"](Xo(e));
                },
                removeKeyMap: function (e) {
                  for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                    if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
                },
                addOverlay: ti(function (t, n) {
                  var r = t.token ? t : e.getMode(this.options, t);
                  if (r.startState)
                    throw new Error("Overlays may not be stateful.");
                  (function (e, t, n) {
                    for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; )
                      r++;
                    e.splice(r, 0, t);
                  })(
                    this.state.overlays,
                    {
                      mode: r,
                      modeSpec: t,
                      opaque: n && n.opaque,
                      priority: (n && n.priority) || 0,
                    },
                    function (e) {
                      return e.priority;
                    }
                  ),
                    this.state.modeGen++,
                    dr(this);
                }),
                removeOverlay: ti(function (e) {
                  for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                    var r = t[n].modeSpec;
                    if (r == e || ("string" == typeof e && r.name == e))
                      return (
                        t.splice(n, 1), this.state.modeGen++, void dr(this)
                      );
                  }
                }),
                indentLine: ti(function (e, t, n) {
                  "string" != typeof t &&
                    "number" != typeof t &&
                    (t =
                      null == t
                        ? this.options.smartIndent
                          ? "smart"
                          : "prev"
                        : t
                        ? "add"
                        : "subtract"),
                    Je(this.doc, e) && Na(this, e, t, n);
                }),
                indentSelection: ti(function (e) {
                  for (
                    var t = this.doc.sel.ranges, n = -1, r = 0;
                    r < t.length;
                    r++
                  ) {
                    var i = t[r];
                    if (i.empty())
                      i.head.line > n &&
                        (Na(this, i.head.line, e, !0),
                        (n = i.head.line),
                        r == this.doc.sel.primIndex && Er(this));
                    else {
                      var o = i.from(),
                        a = i.to(),
                        l = Math.max(n, o.line);
                      n =
                        Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                      for (var s = l; s < n; ++s) Na(this, s, e);
                      var c = this.doc.sel.ranges;
                      0 == o.ch &&
                        t.length == c.length &&
                        c[r].from().ch > 0 &&
                        Xi(this.doc, r, new Ci(o, c[r].to()), B);
                    }
                  }
                }),
                getTokenAt: function (e, t) {
                  return yt(this, e, t);
                },
                getLineTokens: function (e, t) {
                  return yt(this, et(e), t, !0);
                },
                getTokenTypeAt: function (e) {
                  e = lt(this.doc, e);
                  var t,
                    n = ft(this, Ve(this.doc, e.line)),
                    r = 0,
                    i = (n.length - 1) / 2,
                    o = e.ch;
                  if (0 == o) t = n[2];
                  else
                    for (;;) {
                      var a = (r + i) >> 1;
                      if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                      else {
                        if (!(n[2 * a + 1] < o)) {
                          t = n[2 * a + 2];
                          break;
                        }
                        r = a + 1;
                      }
                    }
                  var l = t ? t.indexOf("overlay ") : -1;
                  return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1);
                },
                getModeAt: function (t) {
                  var n = this.doc.mode;
                  return n.innerMode
                    ? e.innerMode(n, this.getTokenAt(t).state).mode
                    : n;
                },
                getHelper: function (e, t) {
                  return this.getHelpers(e, t)[0];
                },
                getHelpers: function (e, t) {
                  var r = [];
                  if (!n.hasOwnProperty(t)) return r;
                  var i = n[t],
                    o = this.getModeAt(e);
                  if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
                  else if (o[t])
                    for (var a = 0; a < o[t].length; a++) {
                      var l = i[o[t][a]];
                      l && r.push(l);
                    }
                  else
                    o.helperType && i[o.helperType]
                      ? r.push(i[o.helperType])
                      : i[o.name] && r.push(i[o.name]);
                  for (var s = 0; s < i._global.length; s++) {
                    var c = i._global[s];
                    c.pred(o, this) && -1 == R(r, c.val) && r.push(c.val);
                  }
                  return r;
                },
                getStateAfter: function (e, t) {
                  var n = this.doc;
                  return ht(
                    this,
                    (e = at(n, null == e ? n.first + n.size - 1 : e)) + 1,
                    t
                  ).state;
                },
                cursorCoords: function (e, t) {
                  var n = this.doc.sel.primary();
                  return Gn(
                    this,
                    null == e
                      ? n.head
                      : "object" == typeof e
                      ? lt(this.doc, e)
                      : e
                      ? n.from()
                      : n.to(),
                    t || "page"
                  );
                },
                charCoords: function (e, t) {
                  return Vn(this, lt(this.doc, e), t || "page");
                },
                coordsChar: function (e, t) {
                  return Xn(this, (e = Kn(this, e, t || "page")).left, e.top);
                },
                lineAtHeight: function (e, t) {
                  return (
                    (e = Kn(this, { top: e, left: 0 }, t || "page").top),
                    Ze(this.doc, e + this.display.viewOffset)
                  );
                },
                heightAtLine: function (e, t, n) {
                  var r,
                    i = !1;
                  if ("number" == typeof e) {
                    var o = this.doc.first + this.doc.size - 1;
                    e < this.doc.first
                      ? (e = this.doc.first)
                      : e > o && ((e = o), (i = !0)),
                      (r = Ve(this.doc, e));
                  } else r = e;
                  return (
                    Un(this, r, { top: 0, left: 0 }, t || "page", n || i).top +
                    (i ? this.doc.height - qt(r) : 0)
                  );
                },
                defaultTextHeight: function () {
                  return rr(this.display);
                },
                defaultCharWidth: function () {
                  return ir(this.display);
                },
                getViewport: function () {
                  return {
                    from: this.display.viewFrom,
                    to: this.display.viewTo,
                  };
                },
                addWidget: function (e, t, n, r, i) {
                  var o,
                    a,
                    l,
                    s = this.display,
                    c = (e = Gn(this, lt(this.doc, e))).bottom,
                    u = e.left;
                  if (
                    ((t.style.position = "absolute"),
                    t.setAttribute("cm-ignore-events", "true"),
                    this.display.input.setUneditable(t),
                    s.sizer.appendChild(t),
                    "over" == r)
                  )
                    c = e.top;
                  else if ("above" == r || "near" == r) {
                    var d = Math.max(s.wrapper.clientHeight, this.doc.height),
                      f = Math.max(
                        s.sizer.clientWidth,
                        s.lineSpace.clientWidth
                      );
                    ("above" == r || e.bottom + t.offsetHeight > d) &&
                    e.top > t.offsetHeight
                      ? (c = e.top - t.offsetHeight)
                      : e.bottom + t.offsetHeight <= d && (c = e.bottom),
                      u + t.offsetWidth > f && (u = f - t.offsetWidth);
                  }
                  (t.style.top = c + "px"),
                    (t.style.left = t.style.right = ""),
                    "right" == i
                      ? ((u = s.sizer.clientWidth - t.offsetWidth),
                        (t.style.right = "0px"))
                      : ("left" == i
                          ? (u = 0)
                          : "middle" == i &&
                            (u = (s.sizer.clientWidth - t.offsetWidth) / 2),
                        (t.style.left = u + "px")),
                    n &&
                      ((o = this),
                      (a = {
                        left: u,
                        top: c,
                        right: u + t.offsetWidth,
                        bottom: c + t.offsetHeight,
                      }),
                      null != (l = Nr(o, a)).scrollTop && Dr(o, l.scrollTop),
                      null != l.scrollLeft && Wr(o, l.scrollLeft));
                },
                triggerOnKeyDown: ti(ua),
                triggerOnKeyPress: ti(fa),
                triggerOnKeyUp: da,
                triggerOnMouseDown: ti(ga),
                execCommand: function (e) {
                  if (ta.hasOwnProperty(e)) return ta[e].call(null, this);
                },
                triggerElectric: ti(function (e) {
                  Pa(this, e);
                }),
                findPosH: function (e, t, n, r) {
                  var i = 1;
                  t < 0 && ((i = -1), (t = -t));
                  for (
                    var o = lt(this.doc, e), a = 0;
                    a < t && !(o = Fa(this.doc, o, i, n, r)).hitSide;
                    ++a
                  );
                  return o;
                },
                moveH: ti(function (e, t) {
                  var n = this;
                  this.extendSelectionsBy(function (r) {
                    return n.display.shift || n.doc.extend || r.empty()
                      ? Fa(n.doc, r.head, e, t, n.options.rtlMoveVisually)
                      : e < 0
                      ? r.from()
                      : r.to();
                  }, U);
                }),
                deleteH: ti(function (e, t) {
                  var n = this.doc.sel,
                    r = this.doc;
                  n.somethingSelected()
                    ? r.replaceSelection("", null, "+delete")
                    : Zo(this, function (n) {
                        var i = Fa(r, n.head, e, t, !1);
                        return e < 0
                          ? { from: i, to: n.head }
                          : { from: n.head, to: i };
                      });
                }),
                findPosV: function (e, t, n, r) {
                  var i = 1,
                    o = r;
                  t < 0 && ((i = -1), (t = -t));
                  for (var a = lt(this.doc, e), l = 0; l < t; ++l) {
                    var s = Gn(this, a, "div");
                    if (
                      (null == o ? (o = s.left) : (s.left = o),
                      (a = Ha(this, s, i, n)).hitSide)
                    )
                      break;
                  }
                  return a;
                },
                moveV: ti(function (e, t) {
                  var n = this,
                    r = this.doc,
                    i = [],
                    o =
                      !this.display.shift &&
                      !r.extend &&
                      r.sel.somethingSelected();
                  if (
                    (r.extendSelectionsBy(function (a) {
                      if (o) return e < 0 ? a.from() : a.to();
                      var l = Gn(n, a.head, "div");
                      null != a.goalColumn && (l.left = a.goalColumn),
                        i.push(l.left);
                      var s = Ha(n, l, e, t);
                      return (
                        "page" == t &&
                          a == r.sel.primary() &&
                          Or(n, Vn(n, s, "div").top - l.top),
                        s
                      );
                    }, U),
                    i.length)
                  )
                    for (var a = 0; a < r.sel.ranges.length; a++)
                      r.sel.ranges[a].goalColumn = i[a];
                }),
                findWordAt: function (e) {
                  var t = Ve(this.doc, e.line).text,
                    n = e.ch,
                    r = e.ch;
                  if (t) {
                    var i = this.getHelper(e, "wordChars");
                    ("before" != e.sticky && r != t.length) || !n ? ++r : --n;
                    for (
                      var o = t.charAt(n),
                        a = ee(o, i)
                          ? function (e) {
                              return ee(e, i);
                            }
                          : /\s/.test(o)
                          ? function (e) {
                              return /\s/.test(e);
                            }
                          : function (e) {
                              return !/\s/.test(e) && !ee(e);
                            };
                      n > 0 && a(t.charAt(n - 1));

                    )
                      --n;
                    for (; r < t.length && a(t.charAt(r)); ) ++r;
                  }
                  return new Ci(et(e.line, n), et(e.line, r));
                },
                toggleOverwrite: function (e) {
                  (null != e && e == this.state.overwrite) ||
                    ((this.state.overwrite = !this.state.overwrite)
                      ? z(this.display.cursorDiv, "CodeMirror-overwrite")
                      : L(this.display.cursorDiv, "CodeMirror-overwrite"),
                    pe(this, "overwriteToggle", this, this.state.overwrite));
                },
                hasFocus: function () {
                  return this.display.input.getField() == _();
                },
                isReadOnly: function () {
                  return !(!this.options.readOnly && !this.doc.cantEdit);
                },
                scrollTo: ti(function (e, t) {
                  _r(this, e, t);
                }),
                getScrollInfo: function () {
                  var e = this.display.scroller;
                  return {
                    left: e.scrollLeft,
                    top: e.scrollTop,
                    height: e.scrollHeight - Ln(this) - this.display.barHeight,
                    width: e.scrollWidth - Ln(this) - this.display.barWidth,
                    clientHeight: An(this),
                    clientWidth: Mn(this),
                  };
                },
                scrollIntoView: ti(function (e, t) {
                  null == e
                    ? ((e = { from: this.doc.sel.primary().head, to: null }),
                      null == t && (t = this.options.cursorScrollMargin))
                    : "number" == typeof e
                    ? (e = { from: et(e, 0), to: null })
                    : null == e.from && (e = { from: e, to: null }),
                    e.to || (e.to = e.from),
                    (e.margin = t || 0),
                    null != e.from.line
                      ? (function (e, t) {
                          zr(e), (e.curOp.scrollToPos = t);
                        })(this, e)
                      : Pr(this, e.from, e.to, e.margin);
                }),
                setSize: ti(function (e, t) {
                  var n = this,
                    r = function (e) {
                      return "number" == typeof e || /^\d+$/.test(String(e))
                        ? e + "px"
                        : e;
                    };
                  null != e && (this.display.wrapper.style.width = r(e)),
                    null != t && (this.display.wrapper.style.height = r(t)),
                    this.options.lineWrapping && Hn(this);
                  var i = this.display.viewFrom;
                  this.doc.iter(i, this.display.viewTo, function (e) {
                    if (e.widgets)
                      for (var t = 0; t < e.widgets.length; t++)
                        if (e.widgets[t].noHScroll) {
                          fr(n, i, "widget");
                          break;
                        }
                    ++i;
                  }),
                    (this.curOp.forceUpdate = !0),
                    pe(this, "refresh", this);
                }),
                operation: function (e) {
                  return Qr(this, e);
                },
                startOperation: function () {
                  return Vr(this);
                },
                endOperation: function () {
                  return Gr(this);
                },
                refresh: ti(function () {
                  var e = this.display.cachedTextHeight;
                  dr(this),
                    (this.curOp.forceUpdate = !0),
                    Rn(this),
                    _r(this, this.doc.scrollLeft, this.doc.scrollTop),
                    ci(this.display),
                    (null == e ||
                      Math.abs(e - rr(this.display)) > 0.5 ||
                      this.options.lineWrapping) &&
                      sr(this),
                    pe(this, "refresh", this);
                }),
                swapDoc: ti(function (e) {
                  var t = this.doc;
                  return (
                    (t.cm = null),
                    this.state.selectingText && this.state.selectingText(),
                    Di(this, e),
                    Rn(this),
                    this.display.input.reset(),
                    _r(this, e.scrollLeft, e.scrollTop),
                    (this.curOp.forceScroll = !0),
                    sn(this, "swapDoc", this, t),
                    t
                  );
                }),
                phrase: function (e) {
                  var t = this.options.phrases;
                  return t && Object.prototype.hasOwnProperty.call(t, e)
                    ? t[e]
                    : e;
                },
                getInputField: function () {
                  return this.display.input.getField();
                },
                getWrapperElement: function () {
                  return this.display.wrapper;
                },
                getScrollerElement: function () {
                  return this.display.scroller;
                },
                getGutterElement: function () {
                  return this.display.gutters;
                },
              }),
                ye(e),
                (e.registerHelper = function (t, r, i) {
                  n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }),
                    (n[t][r] = i);
                }),
                (e.registerGlobalHelper = function (t, r, i, o) {
                  e.registerHelper(t, r, o),
                    n[t]._global.push({ pred: i, val: o });
                });
            })(Ma);
          var Va = "iter insert remove copy getEditor constructor".split(" ");
          for (var Ga in Eo.prototype)
            Eo.prototype.hasOwnProperty(Ga) &&
              R(Va, Ga) < 0 &&
              (Ma.prototype[Ga] = (function (e) {
                return function () {
                  return e.apply(this.doc, arguments);
                };
              })(Eo.prototype[Ga]));
          return (
            ye(Eo),
            (Ma.inputStyles = { textarea: Ka, contenteditable: Ra }),
            (Ma.defineMode = function (e) {
              Ma.defaults.mode || "null" == e || (Ma.defaults.mode = e),
                We.apply(this, arguments);
            }),
            (Ma.defineMIME = function (e, t) {
              Ie[e] = t;
            }),
            Ma.defineMode("null", function () {
              return {
                token: function (e) {
                  return e.skipToEnd();
                },
              };
            }),
            Ma.defineMIME("text/plain", "null"),
            (Ma.defineExtension = function (e, t) {
              Ma.prototype[e] = t;
            }),
            (Ma.defineDocExtension = function (e, t) {
              Eo.prototype[e] = t;
            }),
            (Ma.fromTextArea = function (e, t) {
              if (
                (((t = t ? W(t) : {}).value = e.value),
                !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
                !t.placeholder &&
                  e.placeholder &&
                  (t.placeholder = e.placeholder),
                null == t.autofocus)
              ) {
                var n = _();
                t.autofocus =
                  n == e ||
                  (null != e.getAttribute("autofocus") && n == document.body);
              }
              function r() {
                e.value = l.getValue();
              }
              var i;
              if (
                e.form &&
                (de(e.form, "submit", r), !t.leaveSubmitMethodAlone)
              ) {
                var o = e.form;
                i = o.submit;
                try {
                  var a = (o.submit = function () {
                    r(), (o.submit = i), o.submit(), (o.submit = a);
                  });
                } catch (e) {}
              }
              (t.finishInit = function (n) {
                (n.save = r),
                  (n.getTextArea = function () {
                    return e;
                  }),
                  (n.toTextArea = function () {
                    (n.toTextArea = isNaN),
                      r(),
                      e.parentNode.removeChild(n.getWrapperElement()),
                      (e.style.display = ""),
                      e.form &&
                        (he(e.form, "submit", r),
                        t.leaveSubmitMethodAlone ||
                          "function" != typeof e.form.submit ||
                          (e.form.submit = i));
                  });
              }),
                (e.style.display = "none");
              var l = Ma(function (t) {
                return e.parentNode.insertBefore(t, e.nextSibling);
              }, t);
              return l;
            }),
            (function (e) {
              (e.off = he),
                (e.on = de),
                (e.wheelEventPixels = wi),
                (e.Doc = Eo),
                (e.splitLines = Ee),
                (e.countColumn = F),
                (e.findColumn = K),
                (e.isWordChar = Q),
                (e.Pass = j),
                (e.signal = pe),
                (e.Line = Vt),
                (e.changeEnd = Li),
                (e.scrollbarModel = qr),
                (e.Pos = et),
                (e.cmpPos = tt),
                (e.modes = De),
                (e.mimeModes = Ie),
                (e.resolveMode = Fe),
                (e.getMode = He),
                (e.modeExtensions = Re),
                (e.extendMode = je),
                (e.copyState = Be),
                (e.startState = Ue),
                (e.innerMode = qe),
                (e.commands = ta),
                (e.keyMap = qo),
                (e.keyName = Yo),
                (e.isModifierKey = Go),
                (e.lookupKey = Vo),
                (e.normalizeKeyMap = Ko),
                (e.StringStream = Ke),
                (e.SharedTextMarker = Mo),
                (e.TextMarker = To),
                (e.LineWidget = ko),
                (e.e_preventDefault = be),
                (e.e_stopPropagation = we),
                (e.e_stop = ke),
                (e.addClass = z),
                (e.contains = E),
                (e.rmClass = L),
                (e.keyNames = Ho);
            })(Ma),
            (Ma.version = "5.61.1"),
            Ma
          );
        })();
      },
      6629: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e) {
            for (var t = {}, n = 0; n < e.length; ++n)
              t[e[n].toLowerCase()] = !0;
            return t;
          }
          e.defineMode("css", function (t, n) {
            var r = n.inline;
            n.propertyKeywords || (n = e.resolveMode("text/css"));
            var i,
              o,
              a = t.indentUnit,
              l = n.tokenHooks,
              s = n.documentTypes || {},
              c = n.mediaTypes || {},
              u = n.mediaFeatures || {},
              d = n.mediaValueKeywords || {},
              f = n.propertyKeywords || {},
              h = n.nonStandardPropertyKeywords || {},
              p = n.fontProperties || {},
              m = n.counterDescriptors || {},
              g = n.colorKeywords || {},
              v = n.valueKeywords || {},
              y = n.allowNested,
              b = n.lineComment,
              w = !0 === n.supportsAtComponent,
              x = !1 !== t.highlightNonStandardPropertyKeywords;
            function k(e, t) {
              return (i = t), e;
            }
            function C(e, t) {
              var n = e.next();
              if (l[n]) {
                var r = l[n](e, t);
                if (!1 !== r) return r;
              }
              return "@" == n
                ? (e.eatWhile(/[\w\\\-]/), k("def", e.current()))
                : "=" == n || (("~" == n || "|" == n) && e.eat("="))
                ? k(null, "compare")
                : '"' == n || "'" == n
                ? ((t.tokenize = S(n)), t.tokenize(e, t))
                : "#" == n
                ? (e.eatWhile(/[\w\\\-]/), k("atom", "hash"))
                : "!" == n
                ? (e.match(/^\s*\w*/), k("keyword", "important"))
                : /\d/.test(n) || ("." == n && e.eat(/\d/))
                ? (e.eatWhile(/[\w.%]/), k("number", "unit"))
                : "-" !== n
                ? /[,+>*\/]/.test(n)
                  ? k(null, "select-op")
                  : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i)
                  ? k("qualifier", "qualifier")
                  : /[:;{}\[\]\(\)]/.test(n)
                  ? k(null, n)
                  : e.match(/^[\w-.]+(?=\()/)
                  ? (/^(url(-prefix)?|domain|regexp)$/i.test(e.current()) &&
                      (t.tokenize = T),
                    k("variable callee", "variable"))
                  : /[\w\\\-]/.test(n)
                  ? (e.eatWhile(/[\w\\\-]/), k("property", "word"))
                  : k(null, null)
                : /[\d.]/.test(e.peek())
                ? (e.eatWhile(/[\w.%]/), k("number", "unit"))
                : e.match(/^-[\w\\\-]*/)
                ? (e.eatWhile(/[\w\\\-]/),
                  e.match(/^\s*:/, !1)
                    ? k("variable-2", "variable-definition")
                    : k("variable-2", "variable"))
                : e.match(/^\w+-/)
                ? k("meta", "meta")
                : void 0;
            }
            function S(e) {
              return function (t, n) {
                for (var r, i = !1; null != (r = t.next()); ) {
                  if (r == e && !i) {
                    ")" == e && t.backUp(1);
                    break;
                  }
                  i = !i && "\\" == r;
                }
                return (
                  (r == e || (!i && ")" != e)) && (n.tokenize = null),
                  k("string", "string")
                );
              };
            }
            function T(e, t) {
              return (
                e.next(),
                e.match(/^\s*[\"\')]/, !1)
                  ? (t.tokenize = null)
                  : (t.tokenize = S(")")),
                k(null, "(")
              );
            }
            function L(e, t, n) {
              (this.type = e), (this.indent = t), (this.prev = n);
            }
            function M(e, t, n, r) {
              return (
                (e.context = new L(
                  n,
                  t.indentation() + (!1 === r ? 0 : a),
                  e.context
                )),
                n
              );
            }
            function A(e) {
              return (
                e.context.prev && (e.context = e.context.prev), e.context.type
              );
            }
            function N(e, t, n) {
              return _[n.context.type](e, t, n);
            }
            function O(e, t, n, r) {
              for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
              return N(e, t, n);
            }
            function E(e) {
              var t = e.current().toLowerCase();
              o = v.hasOwnProperty(t)
                ? "atom"
                : g.hasOwnProperty(t)
                ? "keyword"
                : "variable";
            }
            var _ = {
              top: function (e, t, n) {
                if ("{" == e) return M(n, t, "block");
                if ("}" == e && n.context.prev) return A(n);
                if (w && /@component/i.test(e))
                  return M(n, t, "atComponentBlock");
                if (/^@(-moz-)?document$/i.test(e))
                  return M(n, t, "documentTypes");
                if (/^@(media|supports|(-moz-)?document|import)$/i.test(e))
                  return M(n, t, "atBlock");
                if (/^@(font-face|counter-style)/i.test(e))
                  return (n.stateArg = e), "restricted_atBlock_before";
                if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))
                  return "keyframes";
                if (e && "@" == e.charAt(0)) return M(n, t, "at");
                if ("hash" == e) o = "builtin";
                else if ("word" == e) o = "tag";
                else {
                  if ("variable-definition" == e) return "maybeprop";
                  if ("interpolation" == e) return M(n, t, "interpolation");
                  if (":" == e) return "pseudo";
                  if (y && "(" == e) return M(n, t, "parens");
                }
                return n.context.type;
              },
              block: function (e, t, n) {
                if ("word" == e) {
                  var r = t.current().toLowerCase();
                  return f.hasOwnProperty(r)
                    ? ((o = "property"), "maybeprop")
                    : h.hasOwnProperty(r)
                    ? ((o = x ? "string-2" : "property"), "maybeprop")
                    : y
                    ? ((o = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag"),
                      "block")
                    : ((o += " error"), "maybeprop");
                }
                return "meta" == e
                  ? "block"
                  : y || ("hash" != e && "qualifier" != e)
                  ? _.top(e, t, n)
                  : ((o = "error"), "block");
              },
              maybeprop: function (e, t, n) {
                return ":" == e ? M(n, t, "prop") : N(e, t, n);
              },
              prop: function (e, t, n) {
                if (";" == e) return A(n);
                if ("{" == e && y) return M(n, t, "propBlock");
                if ("}" == e || "{" == e) return O(e, t, n);
                if ("(" == e) return M(n, t, "parens");
                if (
                  "hash" != e ||
                  /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(
                    t.current()
                  )
                ) {
                  if ("word" == e) E(t);
                  else if ("interpolation" == e)
                    return M(n, t, "interpolation");
                } else o += " error";
                return "prop";
              },
              propBlock: function (e, t, n) {
                return "}" == e
                  ? A(n)
                  : "word" == e
                  ? ((o = "property"), "maybeprop")
                  : n.context.type;
              },
              parens: function (e, t, n) {
                return "{" == e || "}" == e
                  ? O(e, t, n)
                  : ")" == e
                  ? A(n)
                  : "(" == e
                  ? M(n, t, "parens")
                  : "interpolation" == e
                  ? M(n, t, "interpolation")
                  : ("word" == e && E(t), "parens");
              },
              pseudo: function (e, t, n) {
                return "meta" == e
                  ? "pseudo"
                  : "word" == e
                  ? ((o = "variable-3"), n.context.type)
                  : N(e, t, n);
              },
              documentTypes: function (e, t, n) {
                return "word" == e && s.hasOwnProperty(t.current())
                  ? ((o = "tag"), n.context.type)
                  : _.atBlock(e, t, n);
              },
              atBlock: function (e, t, n) {
                if ("(" == e) return M(n, t, "atBlock_parens");
                if ("}" == e || ";" == e) return O(e, t, n);
                if ("{" == e) return A(n) && M(n, t, y ? "block" : "top");
                if ("interpolation" == e) return M(n, t, "interpolation");
                if ("word" == e) {
                  var r = t.current().toLowerCase();
                  o =
                    "only" == r || "not" == r || "and" == r || "or" == r
                      ? "keyword"
                      : c.hasOwnProperty(r)
                      ? "attribute"
                      : u.hasOwnProperty(r)
                      ? "property"
                      : d.hasOwnProperty(r)
                      ? "keyword"
                      : f.hasOwnProperty(r)
                      ? "property"
                      : h.hasOwnProperty(r)
                      ? x
                        ? "string-2"
                        : "property"
                      : v.hasOwnProperty(r)
                      ? "atom"
                      : g.hasOwnProperty(r)
                      ? "keyword"
                      : "error";
                }
                return n.context.type;
              },
              atComponentBlock: function (e, t, n) {
                return "}" == e
                  ? O(e, t, n)
                  : "{" == e
                  ? A(n) && M(n, t, y ? "block" : "top", !1)
                  : ("word" == e && (o = "error"), n.context.type);
              },
              atBlock_parens: function (e, t, n) {
                return ")" == e
                  ? A(n)
                  : "{" == e || "}" == e
                  ? O(e, t, n, 2)
                  : _.atBlock(e, t, n);
              },
              restricted_atBlock_before: function (e, t, n) {
                return "{" == e
                  ? M(n, t, "restricted_atBlock")
                  : "word" == e && "@counter-style" == n.stateArg
                  ? ((o = "variable"), "restricted_atBlock_before")
                  : N(e, t, n);
              },
              restricted_atBlock: function (e, t, n) {
                return "}" == e
                  ? ((n.stateArg = null), A(n))
                  : "word" == e
                  ? ((o =
                      ("@font-face" == n.stateArg &&
                        !p.hasOwnProperty(t.current().toLowerCase())) ||
                      ("@counter-style" == n.stateArg &&
                        !m.hasOwnProperty(t.current().toLowerCase()))
                        ? "error"
                        : "property"),
                    "maybeprop")
                  : "restricted_atBlock";
              },
              keyframes: function (e, t, n) {
                return "word" == e
                  ? ((o = "variable"), "keyframes")
                  : "{" == e
                  ? M(n, t, "top")
                  : N(e, t, n);
              },
              at: function (e, t, n) {
                return ";" == e
                  ? A(n)
                  : "{" == e || "}" == e
                  ? O(e, t, n)
                  : ("word" == e ? (o = "tag") : "hash" == e && (o = "builtin"),
                    "at");
              },
              interpolation: function (e, t, n) {
                return "}" == e
                  ? A(n)
                  : "{" == e || ";" == e
                  ? O(e, t, n)
                  : ("word" == e
                      ? (o = "variable")
                      : "variable" != e &&
                        "(" != e &&
                        ")" != e &&
                        (o = "error"),
                    "interpolation");
              },
            };
            return {
              startState: function (e) {
                return {
                  tokenize: null,
                  state: r ? "block" : "top",
                  stateArg: null,
                  context: new L(r ? "block" : "top", e || 0, null),
                };
              },
              token: function (e, t) {
                if (!t.tokenize && e.eatSpace()) return null;
                var n = (t.tokenize || C)(e, t);
                return (
                  n && "object" == typeof n && ((i = n[1]), (n = n[0])),
                  (o = n),
                  "comment" != i && (t.state = _[t.state](i, e, t)),
                  o
                );
              },
              indent: function (e, t) {
                var n = e.context,
                  r = t && t.charAt(0),
                  i = n.indent;
                return (
                  "prop" != n.type || ("}" != r && ")" != r) || (n = n.prev),
                  n.prev &&
                    ("}" != r ||
                    ("block" != n.type &&
                      "top" != n.type &&
                      "interpolation" != n.type &&
                      "restricted_atBlock" != n.type)
                      ? ((")" != r ||
                          ("parens" != n.type && "atBlock_parens" != n.type)) &&
                          ("{" != r ||
                            ("at" != n.type && "atBlock" != n.type))) ||
                        (i = Math.max(0, n.indent - a))
                      : (i = (n = n.prev).indent)),
                  i
                );
              },
              electricChars: "}",
              blockCommentStart: "/*",
              blockCommentEnd: "*/",
              blockCommentContinue: " * ",
              lineComment: b,
              fold: "brace",
            };
          });
          var n = ["domain", "regexp", "url", "url-prefix"],
            r = t(n),
            i = [
              "all",
              "aural",
              "braille",
              "handheld",
              "print",
              "projection",
              "screen",
              "tty",
              "tv",
              "embossed",
            ],
            o = t(i),
            a = [
              "width",
              "min-width",
              "max-width",
              "height",
              "min-height",
              "max-height",
              "device-width",
              "min-device-width",
              "max-device-width",
              "device-height",
              "min-device-height",
              "max-device-height",
              "aspect-ratio",
              "min-aspect-ratio",
              "max-aspect-ratio",
              "device-aspect-ratio",
              "min-device-aspect-ratio",
              "max-device-aspect-ratio",
              "color",
              "min-color",
              "max-color",
              "color-index",
              "min-color-index",
              "max-color-index",
              "monochrome",
              "min-monochrome",
              "max-monochrome",
              "resolution",
              "min-resolution",
              "max-resolution",
              "scan",
              "grid",
              "orientation",
              "device-pixel-ratio",
              "min-device-pixel-ratio",
              "max-device-pixel-ratio",
              "pointer",
              "any-pointer",
              "hover",
              "any-hover",
              "prefers-color-scheme",
            ],
            l = t(a),
            s = [
              "landscape",
              "portrait",
              "none",
              "coarse",
              "fine",
              "on-demand",
              "hover",
              "interlace",
              "progressive",
              "dark",
              "light",
            ],
            c = t(s),
            u = [
              "align-content",
              "align-items",
              "align-self",
              "alignment-adjust",
              "alignment-baseline",
              "all",
              "anchor-point",
              "animation",
              "animation-delay",
              "animation-direction",
              "animation-duration",
              "animation-fill-mode",
              "animation-iteration-count",
              "animation-name",
              "animation-play-state",
              "animation-timing-function",
              "appearance",
              "azimuth",
              "backdrop-filter",
              "backface-visibility",
              "background",
              "background-attachment",
              "background-blend-mode",
              "background-clip",
              "background-color",
              "background-image",
              "background-origin",
              "background-position",
              "background-position-x",
              "background-position-y",
              "background-repeat",
              "background-size",
              "baseline-shift",
              "binding",
              "bleed",
              "block-size",
              "bookmark-label",
              "bookmark-level",
              "bookmark-state",
              "bookmark-target",
              "border",
              "border-bottom",
              "border-bottom-color",
              "border-bottom-left-radius",
              "border-bottom-right-radius",
              "border-bottom-style",
              "border-bottom-width",
              "border-collapse",
              "border-color",
              "border-image",
              "border-image-outset",
              "border-image-repeat",
              "border-image-slice",
              "border-image-source",
              "border-image-width",
              "border-left",
              "border-left-color",
              "border-left-style",
              "border-left-width",
              "border-radius",
              "border-right",
              "border-right-color",
              "border-right-style",
              "border-right-width",
              "border-spacing",
              "border-style",
              "border-top",
              "border-top-color",
              "border-top-left-radius",
              "border-top-right-radius",
              "border-top-style",
              "border-top-width",
              "border-width",
              "bottom",
              "box-decoration-break",
              "box-shadow",
              "box-sizing",
              "break-after",
              "break-before",
              "break-inside",
              "caption-side",
              "caret-color",
              "clear",
              "clip",
              "color",
              "color-profile",
              "column-count",
              "column-fill",
              "column-gap",
              "column-rule",
              "column-rule-color",
              "column-rule-style",
              "column-rule-width",
              "column-span",
              "column-width",
              "columns",
              "contain",
              "content",
              "counter-increment",
              "counter-reset",
              "crop",
              "cue",
              "cue-after",
              "cue-before",
              "cursor",
              "direction",
              "display",
              "dominant-baseline",
              "drop-initial-after-adjust",
              "drop-initial-after-align",
              "drop-initial-before-adjust",
              "drop-initial-before-align",
              "drop-initial-size",
              "drop-initial-value",
              "elevation",
              "empty-cells",
              "fit",
              "fit-position",
              "flex",
              "flex-basis",
              "flex-direction",
              "flex-flow",
              "flex-grow",
              "flex-shrink",
              "flex-wrap",
              "float",
              "float-offset",
              "flow-from",
              "flow-into",
              "font",
              "font-family",
              "font-feature-settings",
              "font-kerning",
              "font-language-override",
              "font-optical-sizing",
              "font-size",
              "font-size-adjust",
              "font-stretch",
              "font-style",
              "font-synthesis",
              "font-variant",
              "font-variant-alternates",
              "font-variant-caps",
              "font-variant-east-asian",
              "font-variant-ligatures",
              "font-variant-numeric",
              "font-variant-position",
              "font-variation-settings",
              "font-weight",
              "gap",
              "grid",
              "grid-area",
              "grid-auto-columns",
              "grid-auto-flow",
              "grid-auto-rows",
              "grid-column",
              "grid-column-end",
              "grid-column-gap",
              "grid-column-start",
              "grid-gap",
              "grid-row",
              "grid-row-end",
              "grid-row-gap",
              "grid-row-start",
              "grid-template",
              "grid-template-areas",
              "grid-template-columns",
              "grid-template-rows",
              "hanging-punctuation",
              "height",
              "hyphens",
              "icon",
              "image-orientation",
              "image-rendering",
              "image-resolution",
              "inline-box-align",
              "inset",
              "inset-block",
              "inset-block-end",
              "inset-block-start",
              "inset-inline",
              "inset-inline-end",
              "inset-inline-start",
              "isolation",
              "justify-content",
              "justify-items",
              "justify-self",
              "left",
              "letter-spacing",
              "line-break",
              "line-height",
              "line-height-step",
              "line-stacking",
              "line-stacking-ruby",
              "line-stacking-shift",
              "line-stacking-strategy",
              "list-style",
              "list-style-image",
              "list-style-position",
              "list-style-type",
              "margin",
              "margin-bottom",
              "margin-left",
              "margin-right",
              "margin-top",
              "marks",
              "marquee-direction",
              "marquee-loop",
              "marquee-play-count",
              "marquee-speed",
              "marquee-style",
              "mask-clip",
              "mask-composite",
              "mask-image",
              "mask-mode",
              "mask-origin",
              "mask-position",
              "mask-repeat",
              "mask-size",
              "mask-type",
              "max-block-size",
              "max-height",
              "max-inline-size",
              "max-width",
              "min-block-size",
              "min-height",
              "min-inline-size",
              "min-width",
              "mix-blend-mode",
              "move-to",
              "nav-down",
              "nav-index",
              "nav-left",
              "nav-right",
              "nav-up",
              "object-fit",
              "object-position",
              "offset",
              "offset-anchor",
              "offset-distance",
              "offset-path",
              "offset-position",
              "offset-rotate",
              "opacity",
              "order",
              "orphans",
              "outline",
              "outline-color",
              "outline-offset",
              "outline-style",
              "outline-width",
              "overflow",
              "overflow-style",
              "overflow-wrap",
              "overflow-x",
              "overflow-y",
              "padding",
              "padding-bottom",
              "padding-left",
              "padding-right",
              "padding-top",
              "page",
              "page-break-after",
              "page-break-before",
              "page-break-inside",
              "page-policy",
              "pause",
              "pause-after",
              "pause-before",
              "perspective",
              "perspective-origin",
              "pitch",
              "pitch-range",
              "place-content",
              "place-items",
              "place-self",
              "play-during",
              "position",
              "presentation-level",
              "punctuation-trim",
              "quotes",
              "region-break-after",
              "region-break-before",
              "region-break-inside",
              "region-fragment",
              "rendering-intent",
              "resize",
              "rest",
              "rest-after",
              "rest-before",
              "richness",
              "right",
              "rotate",
              "rotation",
              "rotation-point",
              "row-gap",
              "ruby-align",
              "ruby-overhang",
              "ruby-position",
              "ruby-span",
              "scale",
              "scroll-behavior",
              "scroll-margin",
              "scroll-margin-block",
              "scroll-margin-block-end",
              "scroll-margin-block-start",
              "scroll-margin-bottom",
              "scroll-margin-inline",
              "scroll-margin-inline-end",
              "scroll-margin-inline-start",
              "scroll-margin-left",
              "scroll-margin-right",
              "scroll-margin-top",
              "scroll-padding",
              "scroll-padding-block",
              "scroll-padding-block-end",
              "scroll-padding-block-start",
              "scroll-padding-bottom",
              "scroll-padding-inline",
              "scroll-padding-inline-end",
              "scroll-padding-inline-start",
              "scroll-padding-left",
              "scroll-padding-right",
              "scroll-padding-top",
              "scroll-snap-align",
              "scroll-snap-type",
              "shape-image-threshold",
              "shape-inside",
              "shape-margin",
              "shape-outside",
              "size",
              "speak",
              "speak-as",
              "speak-header",
              "speak-numeral",
              "speak-punctuation",
              "speech-rate",
              "stress",
              "string-set",
              "tab-size",
              "table-layout",
              "target",
              "target-name",
              "target-new",
              "target-position",
              "text-align",
              "text-align-last",
              "text-combine-upright",
              "text-decoration",
              "text-decoration-color",
              "text-decoration-line",
              "text-decoration-skip",
              "text-decoration-skip-ink",
              "text-decoration-style",
              "text-emphasis",
              "text-emphasis-color",
              "text-emphasis-position",
              "text-emphasis-style",
              "text-height",
              "text-indent",
              "text-justify",
              "text-orientation",
              "text-outline",
              "text-overflow",
              "text-rendering",
              "text-shadow",
              "text-size-adjust",
              "text-space-collapse",
              "text-transform",
              "text-underline-position",
              "text-wrap",
              "top",
              "touch-action",
              "transform",
              "transform-origin",
              "transform-style",
              "transition",
              "transition-delay",
              "transition-duration",
              "transition-property",
              "transition-timing-function",
              "translate",
              "unicode-bidi",
              "user-select",
              "vertical-align",
              "visibility",
              "voice-balance",
              "voice-duration",
              "voice-family",
              "voice-pitch",
              "voice-range",
              "voice-rate",
              "voice-stress",
              "voice-volume",
              "volume",
              "white-space",
              "widows",
              "width",
              "will-change",
              "word-break",
              "word-spacing",
              "word-wrap",
              "writing-mode",
              "z-index",
              "clip-path",
              "clip-rule",
              "mask",
              "enable-background",
              "filter",
              "flood-color",
              "flood-opacity",
              "lighting-color",
              "stop-color",
              "stop-opacity",
              "pointer-events",
              "color-interpolation",
              "color-interpolation-filters",
              "color-rendering",
              "fill",
              "fill-opacity",
              "fill-rule",
              "image-rendering",
              "marker",
              "marker-end",
              "marker-mid",
              "marker-start",
              "paint-order",
              "shape-rendering",
              "stroke",
              "stroke-dasharray",
              "stroke-dashoffset",
              "stroke-linecap",
              "stroke-linejoin",
              "stroke-miterlimit",
              "stroke-opacity",
              "stroke-width",
              "text-rendering",
              "baseline-shift",
              "dominant-baseline",
              "glyph-orientation-horizontal",
              "glyph-orientation-vertical",
              "text-anchor",
              "writing-mode",
            ],
            d = t(u),
            f = [
              "border-block",
              "border-block-color",
              "border-block-end",
              "border-block-end-color",
              "border-block-end-style",
              "border-block-end-width",
              "border-block-start",
              "border-block-start-color",
              "border-block-start-style",
              "border-block-start-width",
              "border-block-style",
              "border-block-width",
              "border-inline",
              "border-inline-color",
              "border-inline-end",
              "border-inline-end-color",
              "border-inline-end-style",
              "border-inline-end-width",
              "border-inline-start",
              "border-inline-start-color",
              "border-inline-start-style",
              "border-inline-start-width",
              "border-inline-style",
              "border-inline-width",
              "margin-block",
              "margin-block-end",
              "margin-block-start",
              "margin-inline",
              "margin-inline-end",
              "margin-inline-start",
              "padding-block",
              "padding-block-end",
              "padding-block-start",
              "padding-inline",
              "padding-inline-end",
              "padding-inline-start",
              "scroll-snap-stop",
              "scrollbar-3d-light-color",
              "scrollbar-arrow-color",
              "scrollbar-base-color",
              "scrollbar-dark-shadow-color",
              "scrollbar-face-color",
              "scrollbar-highlight-color",
              "scrollbar-shadow-color",
              "scrollbar-track-color",
              "searchfield-cancel-button",
              "searchfield-decoration",
              "searchfield-results-button",
              "searchfield-results-decoration",
              "shape-inside",
              "zoom",
            ],
            h = t(f),
            p = t([
              "font-display",
              "font-family",
              "src",
              "unicode-range",
              "font-variant",
              "font-feature-settings",
              "font-stretch",
              "font-weight",
              "font-style",
            ]),
            m = t([
              "additive-symbols",
              "fallback",
              "negative",
              "pad",
              "prefix",
              "range",
              "speak-as",
              "suffix",
              "symbols",
              "system",
            ]),
            g = [
              "aliceblue",
              "antiquewhite",
              "aqua",
              "aquamarine",
              "azure",
              "beige",
              "bisque",
              "black",
              "blanchedalmond",
              "blue",
              "blueviolet",
              "brown",
              "burlywood",
              "cadetblue",
              "chartreuse",
              "chocolate",
              "coral",
              "cornflowerblue",
              "cornsilk",
              "crimson",
              "cyan",
              "darkblue",
              "darkcyan",
              "darkgoldenrod",
              "darkgray",
              "darkgreen",
              "darkkhaki",
              "darkmagenta",
              "darkolivegreen",
              "darkorange",
              "darkorchid",
              "darkred",
              "darksalmon",
              "darkseagreen",
              "darkslateblue",
              "darkslategray",
              "darkturquoise",
              "darkviolet",
              "deeppink",
              "deepskyblue",
              "dimgray",
              "dodgerblue",
              "firebrick",
              "floralwhite",
              "forestgreen",
              "fuchsia",
              "gainsboro",
              "ghostwhite",
              "gold",
              "goldenrod",
              "gray",
              "grey",
              "green",
              "greenyellow",
              "honeydew",
              "hotpink",
              "indianred",
              "indigo",
              "ivory",
              "khaki",
              "lavender",
              "lavenderblush",
              "lawngreen",
              "lemonchiffon",
              "lightblue",
              "lightcoral",
              "lightcyan",
              "lightgoldenrodyellow",
              "lightgray",
              "lightgreen",
              "lightpink",
              "lightsalmon",
              "lightseagreen",
              "lightskyblue",
              "lightslategray",
              "lightsteelblue",
              "lightyellow",
              "lime",
              "limegreen",
              "linen",
              "magenta",
              "maroon",
              "mediumaquamarine",
              "mediumblue",
              "mediumorchid",
              "mediumpurple",
              "mediumseagreen",
              "mediumslateblue",
              "mediumspringgreen",
              "mediumturquoise",
              "mediumvioletred",
              "midnightblue",
              "mintcream",
              "mistyrose",
              "moccasin",
              "navajowhite",
              "navy",
              "oldlace",
              "olive",
              "olivedrab",
              "orange",
              "orangered",
              "orchid",
              "palegoldenrod",
              "palegreen",
              "paleturquoise",
              "palevioletred",
              "papayawhip",
              "peachpuff",
              "peru",
              "pink",
              "plum",
              "powderblue",
              "purple",
              "rebeccapurple",
              "red",
              "rosybrown",
              "royalblue",
              "saddlebrown",
              "salmon",
              "sandybrown",
              "seagreen",
              "seashell",
              "sienna",
              "silver",
              "skyblue",
              "slateblue",
              "slategray",
              "snow",
              "springgreen",
              "steelblue",
              "tan",
              "teal",
              "thistle",
              "tomato",
              "turquoise",
              "violet",
              "wheat",
              "white",
              "whitesmoke",
              "yellow",
              "yellowgreen",
            ],
            v = t(g),
            y = [
              "above",
              "absolute",
              "activeborder",
              "additive",
              "activecaption",
              "afar",
              "after-white-space",
              "ahead",
              "alias",
              "all",
              "all-scroll",
              "alphabetic",
              "alternate",
              "always",
              "amharic",
              "amharic-abegede",
              "antialiased",
              "appworkspace",
              "arabic-indic",
              "armenian",
              "asterisks",
              "attr",
              "auto",
              "auto-flow",
              "avoid",
              "avoid-column",
              "avoid-page",
              "avoid-region",
              "axis-pan",
              "background",
              "backwards",
              "baseline",
              "below",
              "bidi-override",
              "binary",
              "bengali",
              "blink",
              "block",
              "block-axis",
              "bold",
              "bolder",
              "border",
              "border-box",
              "both",
              "bottom",
              "break",
              "break-all",
              "break-word",
              "bullets",
              "button",
              "button-bevel",
              "buttonface",
              "buttonhighlight",
              "buttonshadow",
              "buttontext",
              "calc",
              "cambodian",
              "capitalize",
              "caps-lock-indicator",
              "caption",
              "captiontext",
              "caret",
              "cell",
              "center",
              "checkbox",
              "circle",
              "cjk-decimal",
              "cjk-earthly-branch",
              "cjk-heavenly-stem",
              "cjk-ideographic",
              "clear",
              "clip",
              "close-quote",
              "col-resize",
              "collapse",
              "color",
              "color-burn",
              "color-dodge",
              "column",
              "column-reverse",
              "compact",
              "condensed",
              "contain",
              "content",
              "contents",
              "content-box",
              "context-menu",
              "continuous",
              "copy",
              "counter",
              "counters",
              "cover",
              "crop",
              "cross",
              "crosshair",
              "currentcolor",
              "cursive",
              "cyclic",
              "darken",
              "dashed",
              "decimal",
              "decimal-leading-zero",
              "default",
              "default-button",
              "dense",
              "destination-atop",
              "destination-in",
              "destination-out",
              "destination-over",
              "devanagari",
              "difference",
              "disc",
              "discard",
              "disclosure-closed",
              "disclosure-open",
              "document",
              "dot-dash",
              "dot-dot-dash",
              "dotted",
              "double",
              "down",
              "e-resize",
              "ease",
              "ease-in",
              "ease-in-out",
              "ease-out",
              "element",
              "ellipse",
              "ellipsis",
              "embed",
              "end",
              "ethiopic",
              "ethiopic-abegede",
              "ethiopic-abegede-am-et",
              "ethiopic-abegede-gez",
              "ethiopic-abegede-ti-er",
              "ethiopic-abegede-ti-et",
              "ethiopic-halehame-aa-er",
              "ethiopic-halehame-aa-et",
              "ethiopic-halehame-am-et",
              "ethiopic-halehame-gez",
              "ethiopic-halehame-om-et",
              "ethiopic-halehame-sid-et",
              "ethiopic-halehame-so-et",
              "ethiopic-halehame-ti-er",
              "ethiopic-halehame-ti-et",
              "ethiopic-halehame-tig",
              "ethiopic-numeric",
              "ew-resize",
              "exclusion",
              "expanded",
              "extends",
              "extra-condensed",
              "extra-expanded",
              "fantasy",
              "fast",
              "fill",
              "fill-box",
              "fixed",
              "flat",
              "flex",
              "flex-end",
              "flex-start",
              "footnotes",
              "forwards",
              "from",
              "geometricPrecision",
              "georgian",
              "graytext",
              "grid",
              "groove",
              "gujarati",
              "gurmukhi",
              "hand",
              "hangul",
              "hangul-consonant",
              "hard-light",
              "hebrew",
              "help",
              "hidden",
              "hide",
              "higher",
              "highlight",
              "highlighttext",
              "hiragana",
              "hiragana-iroha",
              "horizontal",
              "hsl",
              "hsla",
              "hue",
              "icon",
              "ignore",
              "inactiveborder",
              "inactivecaption",
              "inactivecaptiontext",
              "infinite",
              "infobackground",
              "infotext",
              "inherit",
              "initial",
              "inline",
              "inline-axis",
              "inline-block",
              "inline-flex",
              "inline-grid",
              "inline-table",
              "inset",
              "inside",
              "intrinsic",
              "invert",
              "italic",
              "japanese-formal",
              "japanese-informal",
              "justify",
              "kannada",
              "katakana",
              "katakana-iroha",
              "keep-all",
              "khmer",
              "korean-hangul-formal",
              "korean-hanja-formal",
              "korean-hanja-informal",
              "landscape",
              "lao",
              "large",
              "larger",
              "left",
              "level",
              "lighter",
              "lighten",
              "line-through",
              "linear",
              "linear-gradient",
              "lines",
              "list-item",
              "listbox",
              "listitem",
              "local",
              "logical",
              "loud",
              "lower",
              "lower-alpha",
              "lower-armenian",
              "lower-greek",
              "lower-hexadecimal",
              "lower-latin",
              "lower-norwegian",
              "lower-roman",
              "lowercase",
              "ltr",
              "luminosity",
              "malayalam",
              "manipulation",
              "match",
              "matrix",
              "matrix3d",
              "media-controls-background",
              "media-current-time-display",
              "media-fullscreen-button",
              "media-mute-button",
              "media-play-button",
              "media-return-to-realtime-button",
              "media-rewind-button",
              "media-seek-back-button",
              "media-seek-forward-button",
              "media-slider",
              "media-sliderthumb",
              "media-time-remaining-display",
              "media-volume-slider",
              "media-volume-slider-container",
              "media-volume-sliderthumb",
              "medium",
              "menu",
              "menulist",
              "menulist-button",
              "menulist-text",
              "menulist-textfield",
              "menutext",
              "message-box",
              "middle",
              "min-intrinsic",
              "mix",
              "mongolian",
              "monospace",
              "move",
              "multiple",
              "multiple_mask_images",
              "multiply",
              "myanmar",
              "n-resize",
              "narrower",
              "ne-resize",
              "nesw-resize",
              "no-close-quote",
              "no-drop",
              "no-open-quote",
              "no-repeat",
              "none",
              "normal",
              "not-allowed",
              "nowrap",
              "ns-resize",
              "numbers",
              "numeric",
              "nw-resize",
              "nwse-resize",
              "oblique",
              "octal",
              "opacity",
              "open-quote",
              "optimizeLegibility",
              "optimizeSpeed",
              "oriya",
              "oromo",
              "outset",
              "outside",
              "outside-shape",
              "overlay",
              "overline",
              "padding",
              "padding-box",
              "painted",
              "page",
              "paused",
              "persian",
              "perspective",
              "pinch-zoom",
              "plus-darker",
              "plus-lighter",
              "pointer",
              "polygon",
              "portrait",
              "pre",
              "pre-line",
              "pre-wrap",
              "preserve-3d",
              "progress",
              "push-button",
              "radial-gradient",
              "radio",
              "read-only",
              "read-write",
              "read-write-plaintext-only",
              "rectangle",
              "region",
              "relative",
              "repeat",
              "repeating-linear-gradient",
              "repeating-radial-gradient",
              "repeat-x",
              "repeat-y",
              "reset",
              "reverse",
              "rgb",
              "rgba",
              "ridge",
              "right",
              "rotate",
              "rotate3d",
              "rotateX",
              "rotateY",
              "rotateZ",
              "round",
              "row",
              "row-resize",
              "row-reverse",
              "rtl",
              "run-in",
              "running",
              "s-resize",
              "sans-serif",
              "saturation",
              "scale",
              "scale3d",
              "scaleX",
              "scaleY",
              "scaleZ",
              "screen",
              "scroll",
              "scrollbar",
              "scroll-position",
              "se-resize",
              "searchfield",
              "searchfield-cancel-button",
              "searchfield-decoration",
              "searchfield-results-button",
              "searchfield-results-decoration",
              "self-start",
              "self-end",
              "semi-condensed",
              "semi-expanded",
              "separate",
              "serif",
              "show",
              "sidama",
              "simp-chinese-formal",
              "simp-chinese-informal",
              "single",
              "skew",
              "skewX",
              "skewY",
              "skip-white-space",
              "slide",
              "slider-horizontal",
              "slider-vertical",
              "sliderthumb-horizontal",
              "sliderthumb-vertical",
              "slow",
              "small",
              "small-caps",
              "small-caption",
              "smaller",
              "soft-light",
              "solid",
              "somali",
              "source-atop",
              "source-in",
              "source-out",
              "source-over",
              "space",
              "space-around",
              "space-between",
              "space-evenly",
              "spell-out",
              "square",
              "square-button",
              "start",
              "static",
              "status-bar",
              "stretch",
              "stroke",
              "stroke-box",
              "sub",
              "subpixel-antialiased",
              "svg_masks",
              "super",
              "sw-resize",
              "symbolic",
              "symbols",
              "system-ui",
              "table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row",
              "table-row-group",
              "tamil",
              "telugu",
              "text",
              "text-bottom",
              "text-top",
              "textarea",
              "textfield",
              "thai",
              "thick",
              "thin",
              "threeddarkshadow",
              "threedface",
              "threedhighlight",
              "threedlightshadow",
              "threedshadow",
              "tibetan",
              "tigre",
              "tigrinya-er",
              "tigrinya-er-abegede",
              "tigrinya-et",
              "tigrinya-et-abegede",
              "to",
              "top",
              "trad-chinese-formal",
              "trad-chinese-informal",
              "transform",
              "translate",
              "translate3d",
              "translateX",
              "translateY",
              "translateZ",
              "transparent",
              "ultra-condensed",
              "ultra-expanded",
              "underline",
              "unidirectional-pan",
              "unset",
              "up",
              "upper-alpha",
              "upper-armenian",
              "upper-greek",
              "upper-hexadecimal",
              "upper-latin",
              "upper-norwegian",
              "upper-roman",
              "uppercase",
              "urdu",
              "url",
              "var",
              "vertical",
              "vertical-text",
              "view-box",
              "visible",
              "visibleFill",
              "visiblePainted",
              "visibleStroke",
              "visual",
              "w-resize",
              "wait",
              "wave",
              "wider",
              "window",
              "windowframe",
              "windowtext",
              "words",
              "wrap",
              "wrap-reverse",
              "x-large",
              "x-small",
              "xor",
              "xx-large",
              "xx-small",
            ],
            b = t(y),
            w = n
              .concat(i)
              .concat(a)
              .concat(s)
              .concat(u)
              .concat(f)
              .concat(g)
              .concat(y);
          function x(e, t) {
            for (var n, r = !1; null != (n = e.next()); ) {
              if (r && "/" == n) {
                t.tokenize = null;
                break;
              }
              r = "*" == n;
            }
            return ["comment", "comment"];
          }
          e.registerHelper("hintWords", "css", w),
            e.defineMIME("text/css", {
              documentTypes: r,
              mediaTypes: o,
              mediaFeatures: l,
              mediaValueKeywords: c,
              propertyKeywords: d,
              nonStandardPropertyKeywords: h,
              fontProperties: p,
              counterDescriptors: m,
              colorKeywords: v,
              valueKeywords: b,
              tokenHooks: {
                "/": function (e, t) {
                  return !!e.eat("*") && ((t.tokenize = x), x(e, t));
                },
              },
              name: "css",
            }),
            e.defineMIME("text/x-scss", {
              mediaTypes: o,
              mediaFeatures: l,
              mediaValueKeywords: c,
              propertyKeywords: d,
              nonStandardPropertyKeywords: h,
              colorKeywords: v,
              valueKeywords: b,
              fontProperties: p,
              allowNested: !0,
              lineComment: "//",
              tokenHooks: {
                "/": function (e, t) {
                  return e.eat("/")
                    ? (e.skipToEnd(), ["comment", "comment"])
                    : e.eat("*")
                    ? ((t.tokenize = x), x(e, t))
                    : ["operator", "operator"];
                },
                ":": function (e) {
                  return !!e.match(/^\s*\{/, !1) && [null, null];
                },
                $: function (e) {
                  return (
                    e.match(/^[\w-]+/),
                    e.match(/^\s*:/, !1)
                      ? ["variable-2", "variable-definition"]
                      : ["variable-2", "variable"]
                  );
                },
                "#": function (e) {
                  return !!e.eat("{") && [null, "interpolation"];
                },
              },
              name: "css",
              helperType: "scss",
            }),
            e.defineMIME("text/x-less", {
              mediaTypes: o,
              mediaFeatures: l,
              mediaValueKeywords: c,
              propertyKeywords: d,
              nonStandardPropertyKeywords: h,
              colorKeywords: v,
              valueKeywords: b,
              fontProperties: p,
              allowNested: !0,
              lineComment: "//",
              tokenHooks: {
                "/": function (e, t) {
                  return e.eat("/")
                    ? (e.skipToEnd(), ["comment", "comment"])
                    : e.eat("*")
                    ? ((t.tokenize = x), x(e, t))
                    : ["operator", "operator"];
                },
                "@": function (e) {
                  return e.eat("{")
                    ? [null, "interpolation"]
                    : !e.match(
                        /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                        !1
                      ) &&
                        (e.eatWhile(/[\w\\\-]/),
                        e.match(/^\s*:/, !1)
                          ? ["variable-2", "variable-definition"]
                          : ["variable-2", "variable"]);
                },
                "&": function () {
                  return ["atom", "atom"];
                },
              },
              name: "css",
              helperType: "less",
            }),
            e.defineMIME("text/x-gss", {
              documentTypes: r,
              mediaTypes: o,
              mediaFeatures: l,
              propertyKeywords: d,
              nonStandardPropertyKeywords: h,
              fontProperties: p,
              counterDescriptors: m,
              colorKeywords: v,
              valueKeywords: b,
              supportsAtComponent: !0,
              tokenHooks: {
                "/": function (e, t) {
                  return !!e.eat("*") && ((t.tokenize = x), x(e, t));
                },
              },
              name: "css",
              helperType: "gss",
            });
        })(n(4631));
      },
      6531: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t = {
            script: [
              ["lang", /(javascript|babel)/i, "javascript"],
              [
                "type",
                /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,
                "javascript",
              ],
              ["type", /./, "text/plain"],
              [null, null, "javascript"],
            ],
            style: [
              ["lang", /^css$/i, "css"],
              ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
              ["type", /./, "text/plain"],
              [null, null, "css"],
            ],
          };
          var n = {};
          function r(e, t) {
            var r = e.match(
              (function (e) {
                return (
                  n[e] ||
                  (n[e] = new RegExp(
                    "\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"
                  ))
                );
              })(t)
            );
            return r ? /^\s*(.*?)\s*$/.exec(r[2])[1] : "";
          }
          function i(e, t) {
            return new RegExp((t ? "^" : "") + "</s*" + e + "s*>", "i");
          }
          function o(e, t) {
            for (var n in e)
              for (
                var r = t[n] || (t[n] = []), i = e[n], o = i.length - 1;
                o >= 0;
                o--
              )
                r.unshift(i[o]);
          }
          e.defineMode(
            "htmlmixed",
            function (n, a) {
              var l = e.getMode(n, {
                  name: "xml",
                  htmlMode: !0,
                  multilineTagIndentFactor: a.multilineTagIndentFactor,
                  multilineTagIndentPastTag: a.multilineTagIndentPastTag,
                  allowMissingTagName: a.allowMissingTagName,
                }),
                s = {},
                c = a && a.tags,
                u = a && a.scriptTypes;
              if ((o(t, s), c && o(c, s), u))
                for (var d = u.length - 1; d >= 0; d--)
                  s.script.unshift(["type", u[d].matches, u[d].mode]);
              function f(t, o) {
                var a,
                  c = l.token(t, o.htmlState),
                  u = /\btag\b/.test(c);
                if (
                  u &&
                  !/[<>\s\/]/.test(t.current()) &&
                  (a =
                    o.htmlState.tagName && o.htmlState.tagName.toLowerCase()) &&
                  s.hasOwnProperty(a)
                )
                  o.inTag = a + " ";
                else if (o.inTag && u && />$/.test(t.current())) {
                  var d = /^([\S]+) (.*)/.exec(o.inTag);
                  o.inTag = null;
                  var h =
                      ">" == t.current() &&
                      (function (e, t) {
                        for (var n = 0; n < e.length; n++) {
                          var i = e[n];
                          if (!i[0] || i[1].test(r(t, i[0]))) return i[2];
                        }
                      })(s[d[1]], d[2]),
                    p = e.getMode(n, h),
                    m = i(d[1], !0),
                    g = i(d[1], !1);
                  (o.token = function (e, t) {
                    return e.match(m, !1)
                      ? ((t.token = f),
                        (t.localState = t.localMode = null),
                        null)
                      : (function (e, t, n) {
                          var r = e.current(),
                            i = r.search(t);
                          return (
                            i > -1
                              ? e.backUp(r.length - i)
                              : r.match(/<\/?$/) &&
                                (e.backUp(r.length),
                                e.match(t, !1) || e.match(r)),
                            n
                          );
                        })(e, g, t.localMode.token(e, t.localState));
                  }),
                    (o.localMode = p),
                    (o.localState = e.startState(
                      p,
                      l.indent(o.htmlState, "", "")
                    ));
                } else
                  o.inTag &&
                    ((o.inTag += t.current()), t.eol() && (o.inTag += " "));
                return c;
              }
              return {
                startState: function () {
                  return {
                    token: f,
                    inTag: null,
                    localMode: null,
                    localState: null,
                    htmlState: e.startState(l),
                  };
                },
                copyState: function (t) {
                  var n;
                  return (
                    t.localState &&
                      (n = e.copyState(t.localMode, t.localState)),
                    {
                      token: t.token,
                      inTag: t.inTag,
                      localMode: t.localMode,
                      localState: n,
                      htmlState: e.copyState(l, t.htmlState),
                    }
                  );
                },
                token: function (e, t) {
                  return t.token(e, t);
                },
                indent: function (t, n, r) {
                  return !t.localMode || /^\s*<\//.test(n)
                    ? l.indent(t.htmlState, n, r)
                    : t.localMode.indent
                    ? t.localMode.indent(t.localState, n, r)
                    : e.Pass;
                },
                innerMode: function (e) {
                  return {
                    state: e.localState || e.htmlState,
                    mode: e.localMode || l,
                  };
                },
              };
            },
            "xml",
            "javascript",
            "css"
          ),
            e.defineMIME("text/html", "htmlmixed");
        })(n(4631), n(9589), n(6876), n(6629));
      },
      6876: (e, t, n) => {
        !(function (e) {
          "use strict";
          e.defineMode("javascript", function (t, n) {
            var r,
              i,
              o = t.indentUnit,
              a = n.statementIndent,
              l = n.jsonld,
              s = n.json || l,
              c = !1 !== n.trackScope,
              u = n.typescript,
              d = n.wordCharacters || /[\w$\xa1-\uffff]/,
              f = (function () {
                function e(e) {
                  return { type: e, style: "keyword" };
                }
                var t = e("keyword a"),
                  n = e("keyword b"),
                  r = e("keyword c"),
                  i = e("keyword d"),
                  o = e("operator"),
                  a = { type: "atom", style: "atom" };
                return {
                  if: e("if"),
                  while: t,
                  with: t,
                  else: n,
                  do: n,
                  try: n,
                  finally: n,
                  return: i,
                  break: i,
                  continue: i,
                  new: e("new"),
                  delete: r,
                  void: r,
                  throw: r,
                  debugger: e("debugger"),
                  var: e("var"),
                  const: e("var"),
                  let: e("var"),
                  function: e("function"),
                  catch: e("catch"),
                  for: e("for"),
                  switch: e("switch"),
                  case: e("case"),
                  default: e("default"),
                  in: o,
                  typeof: o,
                  instanceof: o,
                  true: a,
                  false: a,
                  null: a,
                  undefined: a,
                  NaN: a,
                  Infinity: a,
                  this: e("this"),
                  class: e("class"),
                  super: e("atom"),
                  yield: r,
                  export: e("export"),
                  import: e("import"),
                  extends: r,
                  await: r,
                };
              })(),
              h = /[+\-*&%=<>!?|~^@]/,
              p =
                /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
            function m(e, t, n) {
              return (r = e), (i = n), t;
            }
            function g(e, t) {
              var n,
                r = e.next();
              if ('"' == r || "'" == r)
                return (
                  (t.tokenize =
                    ((n = r),
                    function (e, t) {
                      var r,
                        i = !1;
                      if (l && "@" == e.peek() && e.match(p))
                        return (t.tokenize = g), m("jsonld-keyword", "meta");
                      for (; null != (r = e.next()) && (r != n || i); )
                        i = !i && "\\" == r;
                      return i || (t.tokenize = g), m("string", "string");
                    })),
                  t.tokenize(e, t)
                );
              if ("." == r && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
                return m("number", "number");
              if ("." == r && e.match("..")) return m("spread", "meta");
              if (/[\[\]{}\(\),;\:\.]/.test(r)) return m(r);
              if ("=" == r && e.eat(">")) return m("=>", "operator");
              if ("0" == r && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
                return m("number", "number");
              if (/\d/.test(r))
                return (
                  e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
                  m("number", "number")
                );
              if ("/" == r)
                return e.eat("*")
                  ? ((t.tokenize = v), v(e, t))
                  : e.eat("/")
                  ? (e.skipToEnd(), m("comment", "comment"))
                  : Qe(e, t, 1)
                  ? ((function (e) {
                      for (var t, n = !1, r = !1; null != (t = e.next()); ) {
                        if (!n) {
                          if ("/" == t && !r) return;
                          "[" == t ? (r = !0) : r && "]" == t && (r = !1);
                        }
                        n = !n && "\\" == t;
                      }
                    })(e),
                    e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                    m("regexp", "string-2"))
                  : (e.eat("="), m("operator", "operator", e.current()));
              if ("`" == r) return (t.tokenize = y), y(e, t);
              if ("#" == r && "!" == e.peek())
                return e.skipToEnd(), m("meta", "meta");
              if ("#" == r && e.eatWhile(d)) return m("variable", "property");
              if (
                ("<" == r && e.match("!--")) ||
                ("-" == r &&
                  e.match("->") &&
                  !/\S/.test(e.string.slice(0, e.start)))
              )
                return e.skipToEnd(), m("comment", "comment");
              if (h.test(r))
                return (
                  (">" == r && t.lexical && ">" == t.lexical.type) ||
                    (e.eat("=")
                      ? ("!" != r && "=" != r) || e.eat("=")
                      : /[<>*+\-|&?]/.test(r) &&
                        (e.eat(r), ">" == r && e.eat(r))),
                  "?" == r && e.eat(".")
                    ? m(".")
                    : m("operator", "operator", e.current())
                );
              if (d.test(r)) {
                e.eatWhile(d);
                var i = e.current();
                if ("." != t.lastType) {
                  if (f.propertyIsEnumerable(i)) {
                    var o = f[i];
                    return m(o.type, o.style, i);
                  }
                  if (
                    "async" == i &&
                    e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
                  )
                    return m("async", "keyword", i);
                }
                return m("variable", "variable", i);
              }
            }
            function v(e, t) {
              for (var n, r = !1; (n = e.next()); ) {
                if ("/" == n && r) {
                  t.tokenize = g;
                  break;
                }
                r = "*" == n;
              }
              return m("comment", "comment");
            }
            function y(e, t) {
              for (var n, r = !1; null != (n = e.next()); ) {
                if (!r && ("`" == n || ("$" == n && e.eat("{")))) {
                  t.tokenize = g;
                  break;
                }
                r = !r && "\\" == n;
              }
              return m("quasi", "string-2", e.current());
            }
            function b(e, t) {
              t.fatArrowAt && (t.fatArrowAt = null);
              var n = e.string.indexOf("=>", e.start);
              if (!(n < 0)) {
                if (u) {
                  var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                    e.string.slice(e.start, n)
                  );
                  r && (n = r.index);
                }
                for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
                  var l = e.string.charAt(a),
                    s = "([{}])".indexOf(l);
                  if (s >= 0 && s < 3) {
                    if (!i) {
                      ++a;
                      break;
                    }
                    if (0 == --i) {
                      "(" == l && (o = !0);
                      break;
                    }
                  } else if (s >= 3 && s < 6) ++i;
                  else if (d.test(l)) o = !0;
                  else if (/["'\/`]/.test(l))
                    for (; ; --a) {
                      if (0 == a) return;
                      if (
                        e.string.charAt(a - 1) == l &&
                        "\\" != e.string.charAt(a - 2)
                      ) {
                        a--;
                        break;
                      }
                    }
                  else if (o && !i) {
                    ++a;
                    break;
                  }
                }
                o && !i && (t.fatArrowAt = a);
              }
            }
            var w = {
              atom: !0,
              number: !0,
              variable: !0,
              string: !0,
              regexp: !0,
              this: !0,
              import: !0,
              "jsonld-keyword": !0,
            };
            function x(e, t, n, r, i, o) {
              (this.indented = e),
                (this.column = t),
                (this.type = n),
                (this.prev = i),
                (this.info = o),
                null != r && (this.align = r);
            }
            function k(e, t) {
              if (!c) return !1;
              for (var n = e.localVars; n; n = n.next)
                if (n.name == t) return !0;
              for (var r = e.context; r; r = r.prev)
                for (n = r.vars; n; n = n.next) if (n.name == t) return !0;
            }
            function C(e, t, n, r, i) {
              var o = e.cc;
              for (
                S.state = e,
                  S.stream = i,
                  S.marked = null,
                  S.cc = o,
                  S.style = t,
                  e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);
                ;

              )
                if ((o.length ? o.pop() : s ? B : R)(n, r)) {
                  for (; o.length && o[o.length - 1].lex; ) o.pop()();
                  return S.marked
                    ? S.marked
                    : "variable" == n && k(e, r)
                    ? "variable-2"
                    : t;
                }
            }
            var S = { state: null, column: null, marked: null, cc: null };
            function T() {
              for (var e = arguments.length - 1; e >= 0; e--)
                S.cc.push(arguments[e]);
            }
            function L() {
              return T.apply(null, arguments), !0;
            }
            function M(e, t) {
              for (var n = t; n; n = n.next) if (n.name == e) return !0;
              return !1;
            }
            function A(e) {
              var t = S.state;
              if (((S.marked = "def"), c)) {
                if (t.context)
                  if ("var" == t.lexical.info && t.context && t.context.block) {
                    var r = N(e, t.context);
                    if (null != r) return void (t.context = r);
                  } else if (!M(e, t.localVars))
                    return void (t.localVars = new _(e, t.localVars));
                n.globalVars &&
                  !M(e, t.globalVars) &&
                  (t.globalVars = new _(e, t.globalVars));
              }
            }
            function N(e, t) {
              if (t) {
                if (t.block) {
                  var n = N(e, t.prev);
                  return n ? (n == t.prev ? t : new E(n, t.vars, !0)) : null;
                }
                return M(e, t.vars) ? t : new E(t.prev, new _(e, t.vars), !1);
              }
              return null;
            }
            function O(e) {
              return (
                "public" == e ||
                "private" == e ||
                "protected" == e ||
                "abstract" == e ||
                "readonly" == e
              );
            }
            function E(e, t, n) {
              (this.prev = e), (this.vars = t), (this.block = n);
            }
            function _(e, t) {
              (this.name = e), (this.next = t);
            }
            var z = new _("this", new _("arguments", null));
            function P() {
              (S.state.context = new E(S.state.context, S.state.localVars, !1)),
                (S.state.localVars = z);
            }
            function D() {
              (S.state.context = new E(S.state.context, S.state.localVars, !0)),
                (S.state.localVars = null);
            }
            function I() {
              (S.state.localVars = S.state.context.vars),
                (S.state.context = S.state.context.prev);
            }
            function W(e, t) {
              var n = function () {
                var n = S.state,
                  r = n.indented;
                if ("stat" == n.lexical.type) r = n.lexical.indented;
                else
                  for (
                    var i = n.lexical;
                    i && ")" == i.type && i.align;
                    i = i.prev
                  )
                    r = i.indented;
                n.lexical = new x(r, S.stream.column(), e, null, n.lexical, t);
              };
              return (n.lex = !0), n;
            }
            function F() {
              var e = S.state;
              e.lexical.prev &&
                (")" == e.lexical.type && (e.indented = e.lexical.indented),
                (e.lexical = e.lexical.prev));
            }
            function H(e) {
              return function t(n) {
                return n == e
                  ? L()
                  : ";" == e || "}" == n || ")" == n || "]" == n
                  ? T()
                  : L(t);
              };
            }
            function R(e, t) {
              return "var" == e
                ? L(W("vardef", t), Se, H(";"), F)
                : "keyword a" == e
                ? L(W("form"), U, R, F)
                : "keyword b" == e
                ? L(W("form"), R, F)
                : "keyword d" == e
                ? S.stream.match(/^\s*$/, !1)
                  ? L()
                  : L(W("stat"), V, H(";"), F)
                : "debugger" == e
                ? L(H(";"))
                : "{" == e
                ? L(W("}"), D, se, F, I)
                : ";" == e
                ? L()
                : "if" == e
                ? ("else" == S.state.lexical.info &&
                    S.state.cc[S.state.cc.length - 1] == F &&
                    S.state.cc.pop()(),
                  L(W("form"), U, R, F, Oe))
                : "function" == e
                ? L(Pe)
                : "for" == e
                ? L(W("form"), D, Ee, R, I, F)
                : "class" == e || (u && "interface" == t)
                ? ((S.marked = "keyword"),
                  L(W("form", "class" == e ? e : t), He, F))
                : "variable" == e
                ? u && "declare" == t
                  ? ((S.marked = "keyword"), L(R))
                  : u &&
                    ("module" == t || "enum" == t || "type" == t) &&
                    S.stream.match(/^\s*\w/, !1)
                  ? ((S.marked = "keyword"),
                    "enum" == t
                      ? L(Ze)
                      : "type" == t
                      ? L(Ie, H("operator"), he, H(";"))
                      : L(W("form"), Te, H("{"), W("}"), se, F, F))
                  : u && "namespace" == t
                  ? ((S.marked = "keyword"), L(W("form"), B, R, F))
                  : u && "abstract" == t
                  ? ((S.marked = "keyword"), L(R))
                  : L(W("stat"), te)
                : "switch" == e
                ? L(W("form"), U, H("{"), W("}", "switch"), D, se, F, F, I)
                : "case" == e
                ? L(B, H(":"))
                : "default" == e
                ? L(H(":"))
                : "catch" == e
                ? L(W("form"), P, j, R, F, I)
                : "export" == e
                ? L(W("stat"), qe, F)
                : "import" == e
                ? L(W("stat"), Ke, F)
                : "async" == e
                ? L(R)
                : "@" == t
                ? L(B, R)
                : T(W("stat"), B, H(";"), F);
            }
            function j(e) {
              if ("(" == e) return L(We, H(")"));
            }
            function B(e, t) {
              return K(e, t, !1);
            }
            function q(e, t) {
              return K(e, t, !0);
            }
            function U(e) {
              return "(" != e ? T() : L(W(")"), V, H(")"), F);
            }
            function K(e, t, n) {
              if (S.state.fatArrowAt == S.stream.start) {
                var r = n ? J : Z;
                if ("(" == e)
                  return L(P, W(")"), ae(We, ")"), F, H("=>"), r, I);
                if ("variable" == e) return T(P, Te, H("=>"), r, I);
              }
              var i = n ? $ : G;
              return w.hasOwnProperty(e)
                ? L(i)
                : "function" == e
                ? L(Pe, i)
                : "class" == e || (u && "interface" == t)
                ? ((S.marked = "keyword"), L(W("form"), Fe, F))
                : "keyword c" == e || "async" == e
                ? L(n ? q : B)
                : "(" == e
                ? L(W(")"), V, H(")"), F, i)
                : "operator" == e || "spread" == e
                ? L(n ? q : B)
                : "[" == e
                ? L(W("]"), Xe, F, i)
                : "{" == e
                ? le(re, "}", null, i)
                : "quasi" == e
                ? T(Y, i)
                : "new" == e
                ? L(
                    (function (e) {
                      return function (t) {
                        return "." == t
                          ? L(e ? ee : Q)
                          : "variable" == t && u
                          ? L(xe, e ? $ : G)
                          : T(e ? q : B);
                      };
                    })(n)
                  )
                : L();
            }
            function V(e) {
              return e.match(/[;\}\)\],]/) ? T() : T(B);
            }
            function G(e, t) {
              return "," == e ? L(V) : $(e, t, !1);
            }
            function $(e, t, n) {
              var r = 0 == n ? G : $,
                i = 0 == n ? B : q;
              return "=>" == e
                ? L(P, n ? J : Z, I)
                : "operator" == e
                ? /\+\+|--/.test(t) || (u && "!" == t)
                  ? L(r)
                  : u &&
                    "<" == t &&
                    S.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                  ? L(W(">"), ae(he, ">"), F, r)
                  : "?" == t
                  ? L(B, H(":"), i)
                  : L(i)
                : "quasi" == e
                ? T(Y, r)
                : ";" != e
                ? "(" == e
                  ? le(q, ")", "call", r)
                  : "." == e
                  ? L(ne, r)
                  : "[" == e
                  ? L(W("]"), V, H("]"), F, r)
                  : u && "as" == t
                  ? ((S.marked = "keyword"), L(he, r))
                  : "regexp" == e
                  ? ((S.state.lastType = S.marked = "operator"),
                    S.stream.backUp(S.stream.pos - S.stream.start - 1),
                    L(i))
                  : void 0
                : void 0;
            }
            function Y(e, t) {
              return "quasi" != e
                ? T()
                : "${" != t.slice(t.length - 2)
                ? L(Y)
                : L(B, X);
            }
            function X(e) {
              if ("}" == e)
                return (S.marked = "string-2"), (S.state.tokenize = y), L(Y);
            }
            function Z(e) {
              return b(S.stream, S.state), T("{" == e ? R : B);
            }
            function J(e) {
              return b(S.stream, S.state), T("{" == e ? R : q);
            }
            function Q(e, t) {
              if ("target" == t) return (S.marked = "keyword"), L(G);
            }
            function ee(e, t) {
              if ("target" == t) return (S.marked = "keyword"), L($);
            }
            function te(e) {
              return ":" == e ? L(F, R) : T(G, H(";"), F);
            }
            function ne(e) {
              if ("variable" == e) return (S.marked = "property"), L();
            }
            function re(e, t) {
              return "async" == e
                ? ((S.marked = "property"), L(re))
                : "variable" == e || "keyword" == S.style
                ? ((S.marked = "property"),
                  "get" == t || "set" == t
                    ? L(ie)
                    : (u &&
                        S.state.fatArrowAt == S.stream.start &&
                        (n = S.stream.match(/^\s*:\s*/, !1)) &&
                        (S.state.fatArrowAt = S.stream.pos + n[0].length),
                      L(oe)))
                : "number" == e || "string" == e
                ? ((S.marked = l ? "property" : S.style + " property"), L(oe))
                : "jsonld-keyword" == e
                ? L(oe)
                : u && O(t)
                ? ((S.marked = "keyword"), L(re))
                : "[" == e
                ? L(B, ce, H("]"), oe)
                : "spread" == e
                ? L(q, oe)
                : "*" == t
                ? ((S.marked = "keyword"), L(re))
                : ":" == e
                ? T(oe)
                : void 0;
              var n;
            }
            function ie(e) {
              return "variable" != e ? T(oe) : ((S.marked = "property"), L(Pe));
            }
            function oe(e) {
              return ":" == e ? L(q) : "(" == e ? T(Pe) : void 0;
            }
            function ae(e, t, n) {
              function r(i, o) {
                if (n ? n.indexOf(i) > -1 : "," == i) {
                  var a = S.state.lexical;
                  return (
                    "call" == a.info && (a.pos = (a.pos || 0) + 1),
                    L(function (n, r) {
                      return n == t || r == t ? T() : T(e);
                    }, r)
                  );
                }
                return i == t || o == t
                  ? L()
                  : n && n.indexOf(";") > -1
                  ? T(e)
                  : L(H(t));
              }
              return function (n, i) {
                return n == t || i == t ? L() : T(e, r);
              };
            }
            function le(e, t, n) {
              for (var r = 3; r < arguments.length; r++)
                S.cc.push(arguments[r]);
              return L(W(t, n), ae(e, t), F);
            }
            function se(e) {
              return "}" == e ? L() : T(R, se);
            }
            function ce(e, t) {
              if (u) {
                if (":" == e) return L(he);
                if ("?" == t) return L(ce);
              }
            }
            function ue(e, t) {
              if (u && (":" == e || "in" == t)) return L(he);
            }
            function de(e) {
              if (u && ":" == e)
                return S.stream.match(/^\s*\w+\s+is\b/, !1)
                  ? L(B, fe, he)
                  : L(he);
            }
            function fe(e, t) {
              if ("is" == t) return (S.marked = "keyword"), L();
            }
            function he(e, t) {
              return "keyof" == t ||
                "typeof" == t ||
                "infer" == t ||
                "readonly" == t
                ? ((S.marked = "keyword"), L("typeof" == t ? q : he))
                : "variable" == e || "void" == t
                ? ((S.marked = "type"), L(we))
                : "|" == t || "&" == t
                ? L(he)
                : "string" == e || "number" == e || "atom" == e
                ? L(we)
                : "[" == e
                ? L(W("]"), ae(he, "]", ","), F, we)
                : "{" == e
                ? L(W("}"), me, F, we)
                : "(" == e
                ? L(ae(be, ")"), pe, we)
                : "<" == e
                ? L(ae(he, ">"), he)
                : "quasi" == e
                ? T(ve, we)
                : void 0;
            }
            function pe(e) {
              if ("=>" == e) return L(he);
            }
            function me(e) {
              return e.match(/[\}\)\]]/)
                ? L()
                : "," == e || ";" == e
                ? L(me)
                : T(ge, me);
            }
            function ge(e, t) {
              return "variable" == e || "keyword" == S.style
                ? ((S.marked = "property"), L(ge))
                : "?" == t || "number" == e || "string" == e
                ? L(ge)
                : ":" == e
                ? L(he)
                : "[" == e
                ? L(H("variable"), ue, H("]"), ge)
                : "(" == e
                ? T(De, ge)
                : e.match(/[;\}\)\],]/)
                ? void 0
                : L();
            }
            function ve(e, t) {
              return "quasi" != e
                ? T()
                : "${" != t.slice(t.length - 2)
                ? L(ve)
                : L(he, ye);
            }
            function ye(e) {
              if ("}" == e)
                return (S.marked = "string-2"), (S.state.tokenize = y), L(ve);
            }
            function be(e, t) {
              return ("variable" == e && S.stream.match(/^\s*[?:]/, !1)) ||
                "?" == t
                ? L(be)
                : ":" == e
                ? L(he)
                : "spread" == e
                ? L(be)
                : T(he);
            }
            function we(e, t) {
              return "<" == t
                ? L(W(">"), ae(he, ">"), F, we)
                : "|" == t || "." == e || "&" == t
                ? L(he)
                : "[" == e
                ? L(he, H("]"), we)
                : "extends" == t || "implements" == t
                ? ((S.marked = "keyword"), L(he))
                : "?" == t
                ? L(he, H(":"), he)
                : void 0;
            }
            function xe(e, t) {
              if ("<" == t) return L(W(">"), ae(he, ">"), F, we);
            }
            function ke() {
              return T(he, Ce);
            }
            function Ce(e, t) {
              if ("=" == t) return L(he);
            }
            function Se(e, t) {
              return "enum" == t
                ? ((S.marked = "keyword"), L(Ze))
                : T(Te, ce, Ae, Ne);
            }
            function Te(e, t) {
              return u && O(t)
                ? ((S.marked = "keyword"), L(Te))
                : "variable" == e
                ? (A(t), L())
                : "spread" == e
                ? L(Te)
                : "[" == e
                ? le(Me, "]")
                : "{" == e
                ? le(Le, "}")
                : void 0;
            }
            function Le(e, t) {
              return "variable" != e || S.stream.match(/^\s*:/, !1)
                ? ("variable" == e && (S.marked = "property"),
                  "spread" == e
                    ? L(Te)
                    : "}" == e
                    ? T()
                    : "[" == e
                    ? L(B, H("]"), H(":"), Le)
                    : L(H(":"), Te, Ae))
                : (A(t), L(Ae));
            }
            function Me() {
              return T(Te, Ae);
            }
            function Ae(e, t) {
              if ("=" == t) return L(q);
            }
            function Ne(e) {
              if ("," == e) return L(Se);
            }
            function Oe(e, t) {
              if ("keyword b" == e && "else" == t)
                return L(W("form", "else"), R, F);
            }
            function Ee(e, t) {
              return "await" == t
                ? L(Ee)
                : "(" == e
                ? L(W(")"), _e, F)
                : void 0;
            }
            function _e(e) {
              return "var" == e ? L(Se, ze) : "variable" == e ? L(ze) : T(ze);
            }
            function ze(e, t) {
              return ")" == e
                ? L()
                : ";" == e
                ? L(ze)
                : "in" == t || "of" == t
                ? ((S.marked = "keyword"), L(B, ze))
                : T(B, ze);
            }
            function Pe(e, t) {
              return "*" == t
                ? ((S.marked = "keyword"), L(Pe))
                : "variable" == e
                ? (A(t), L(Pe))
                : "(" == e
                ? L(P, W(")"), ae(We, ")"), F, de, R, I)
                : u && "<" == t
                ? L(W(">"), ae(ke, ">"), F, Pe)
                : void 0;
            }
            function De(e, t) {
              return "*" == t
                ? ((S.marked = "keyword"), L(De))
                : "variable" == e
                ? (A(t), L(De))
                : "(" == e
                ? L(P, W(")"), ae(We, ")"), F, de, I)
                : u && "<" == t
                ? L(W(">"), ae(ke, ">"), F, De)
                : void 0;
            }
            function Ie(e, t) {
              return "keyword" == e || "variable" == e
                ? ((S.marked = "type"), L(Ie))
                : "<" == t
                ? L(W(">"), ae(ke, ">"), F)
                : void 0;
            }
            function We(e, t) {
              return (
                "@" == t && L(B, We),
                "spread" == e
                  ? L(We)
                  : u && O(t)
                  ? ((S.marked = "keyword"), L(We))
                  : u && "this" == e
                  ? L(ce, Ae)
                  : T(Te, ce, Ae)
              );
            }
            function Fe(e, t) {
              return "variable" == e ? He(e, t) : Re(e, t);
            }
            function He(e, t) {
              if ("variable" == e) return A(t), L(Re);
            }
            function Re(e, t) {
              return "<" == t
                ? L(W(">"), ae(ke, ">"), F, Re)
                : "extends" == t || "implements" == t || (u && "," == e)
                ? ("implements" == t && (S.marked = "keyword"),
                  L(u ? he : B, Re))
                : "{" == e
                ? L(W("}"), je, F)
                : void 0;
            }
            function je(e, t) {
              return "async" == e ||
                ("variable" == e &&
                  ("static" == t || "get" == t || "set" == t || (u && O(t))) &&
                  S.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
                ? ((S.marked = "keyword"), L(je))
                : "variable" == e || "keyword" == S.style
                ? ((S.marked = "property"), L(Be, je))
                : "number" == e || "string" == e
                ? L(Be, je)
                : "[" == e
                ? L(B, ce, H("]"), Be, je)
                : "*" == t
                ? ((S.marked = "keyword"), L(je))
                : u && "(" == e
                ? T(De, je)
                : ";" == e || "," == e
                ? L(je)
                : "}" == e
                ? L()
                : "@" == t
                ? L(B, je)
                : void 0;
            }
            function Be(e, t) {
              if ("!" == t) return L(Be);
              if ("?" == t) return L(Be);
              if (":" == e) return L(he, Ae);
              if ("=" == t) return L(q);
              var n = S.state.lexical.prev;
              return T(n && "interface" == n.info ? De : Pe);
            }
            function qe(e, t) {
              return "*" == t
                ? ((S.marked = "keyword"), L(Ye, H(";")))
                : "default" == t
                ? ((S.marked = "keyword"), L(B, H(";")))
                : "{" == e
                ? L(ae(Ue, "}"), Ye, H(";"))
                : T(R);
            }
            function Ue(e, t) {
              return "as" == t
                ? ((S.marked = "keyword"), L(H("variable")))
                : "variable" == e
                ? T(q, Ue)
                : void 0;
            }
            function Ke(e) {
              return "string" == e
                ? L()
                : "(" == e
                ? T(B)
                : "." == e
                ? T(G)
                : T(Ve, Ge, Ye);
            }
            function Ve(e, t) {
              return "{" == e
                ? le(Ve, "}")
                : ("variable" == e && A(t),
                  "*" == t && (S.marked = "keyword"),
                  L($e));
            }
            function Ge(e) {
              if ("," == e) return L(Ve, Ge);
            }
            function $e(e, t) {
              if ("as" == t) return (S.marked = "keyword"), L(Ve);
            }
            function Ye(e, t) {
              if ("from" == t) return (S.marked = "keyword"), L(B);
            }
            function Xe(e) {
              return "]" == e ? L() : T(ae(q, "]"));
            }
            function Ze() {
              return T(W("form"), Te, H("{"), W("}"), ae(Je, "}"), F, F);
            }
            function Je() {
              return T(Te, Ae);
            }
            function Qe(e, t, n) {
              return (
                (t.tokenize == g &&
                  /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                    t.lastType
                  )) ||
                ("quasi" == t.lastType &&
                  /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
              );
            }
            return (
              (I.lex = !0),
              (F.lex = !0),
              {
                startState: function (e) {
                  var t = {
                    tokenize: g,
                    lastType: "sof",
                    cc: [],
                    lexical: new x((e || 0) - o, 0, "block", !1),
                    localVars: n.localVars,
                    context: n.localVars && new E(null, null, !1),
                    indented: e || 0,
                  };
                  return (
                    n.globalVars &&
                      "object" == typeof n.globalVars &&
                      (t.globalVars = n.globalVars),
                    t
                  );
                },
                token: function (e, t) {
                  if (
                    (e.sol() &&
                      (t.lexical.hasOwnProperty("align") ||
                        (t.lexical.align = !1),
                      (t.indented = e.indentation()),
                      b(e, t)),
                    t.tokenize != v && e.eatSpace())
                  )
                    return null;
                  var n = t.tokenize(e, t);
                  return "comment" == r
                    ? n
                    : ((t.lastType =
                        "operator" != r || ("++" != i && "--" != i)
                          ? r
                          : "incdec"),
                      C(t, n, r, i, e));
                },
                indent: function (t, r) {
                  if (t.tokenize == v || t.tokenize == y) return e.Pass;
                  if (t.tokenize != g) return 0;
                  var i,
                    l = r && r.charAt(0),
                    s = t.lexical;
                  if (!/^\s*else\b/.test(r))
                    for (var c = t.cc.length - 1; c >= 0; --c) {
                      var u = t.cc[c];
                      if (u == F) s = s.prev;
                      else if (u != Oe && u != I) break;
                    }
                  for (
                    ;
                    ("stat" == s.type || "form" == s.type) &&
                    ("}" == l ||
                      ((i = t.cc[t.cc.length - 1]) &&
                        (i == G || i == $) &&
                        !/^[,\.=+\-*:?[\(]/.test(r)));

                  )
                    s = s.prev;
                  a && ")" == s.type && "stat" == s.prev.type && (s = s.prev);
                  var d = s.type,
                    f = l == d;
                  return "vardef" == d
                    ? s.indented +
                        ("operator" == t.lastType || "," == t.lastType
                          ? s.info.length + 1
                          : 0)
                    : "form" == d && "{" == l
                    ? s.indented
                    : "form" == d
                    ? s.indented + o
                    : "stat" == d
                    ? s.indented +
                      ((function (e, t) {
                        return (
                          "operator" == e.lastType ||
                          "," == e.lastType ||
                          h.test(t.charAt(0)) ||
                          /[,.]/.test(t.charAt(0))
                        );
                      })(t, r)
                        ? a || o
                        : 0)
                    : "switch" != s.info || f || 0 == n.doubleIndentSwitch
                    ? s.align
                      ? s.column + (f ? 0 : 1)
                      : s.indented + (f ? 0 : o)
                    : s.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o);
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: s ? null : "/*",
                blockCommentEnd: s ? null : "*/",
                blockCommentContinue: s ? null : " * ",
                lineComment: s ? null : "//",
                fold: "brace",
                closeBrackets: "()[]{}''\"\"``",
                helperType: s ? "json" : "javascript",
                jsonldMode: l,
                jsonMode: s,
                expressionAllowed: Qe,
                skipExpression: function (t) {
                  C(t, "atom", "atom", "true", new e.StringStream("", 2, null));
                },
              }
            );
          }),
            e.registerHelper("wordChars", "javascript", /[\w$]/),
            e.defineMIME("text/javascript", "javascript"),
            e.defineMIME("text/ecmascript", "javascript"),
            e.defineMIME("application/javascript", "javascript"),
            e.defineMIME("application/x-javascript", "javascript"),
            e.defineMIME("application/ecmascript", "javascript"),
            e.defineMIME("application/json", { name: "javascript", json: !0 }),
            e.defineMIME("application/x-json", {
              name: "javascript",
              json: !0,
            }),
            e.defineMIME("application/manifest+json", {
              name: "javascript",
              json: !0,
            }),
            e.defineMIME("application/ld+json", {
              name: "javascript",
              jsonld: !0,
            }),
            e.defineMIME("text/typescript", {
              name: "javascript",
              typescript: !0,
            }),
            e.defineMIME("application/typescript", {
              name: "javascript",
              typescript: !0,
            });
        })(n(4631));
      },
      9589: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t = {
              autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
                menuitem: !0,
              },
              implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0,
              },
              contextGrabbers: {
                dd: { dd: !0, dt: !0 },
                dt: { dd: !0, dt: !0 },
                li: { li: !0 },
                option: { option: !0, optgroup: !0 },
                optgroup: { optgroup: !0 },
                p: {
                  address: !0,
                  article: !0,
                  aside: !0,
                  blockquote: !0,
                  dir: !0,
                  div: !0,
                  dl: !0,
                  fieldset: !0,
                  footer: !0,
                  form: !0,
                  h1: !0,
                  h2: !0,
                  h3: !0,
                  h4: !0,
                  h5: !0,
                  h6: !0,
                  header: !0,
                  hgroup: !0,
                  hr: !0,
                  menu: !0,
                  nav: !0,
                  ol: !0,
                  p: !0,
                  pre: !0,
                  section: !0,
                  table: !0,
                  ul: !0,
                },
                rp: { rp: !0, rt: !0 },
                rt: { rp: !0, rt: !0 },
                tbody: { tbody: !0, tfoot: !0 },
                td: { td: !0, th: !0 },
                tfoot: { tbody: !0 },
                th: { td: !0, th: !0 },
                thead: { tbody: !0, tfoot: !0 },
                tr: { tr: !0 },
              },
              doNotIndent: { pre: !0 },
              allowUnquoted: !0,
              allowMissing: !0,
              caseFold: !0,
            },
            n = {
              autoSelfClosers: {},
              implicitlyClosed: {},
              contextGrabbers: {},
              doNotIndent: {},
              allowUnquoted: !1,
              allowMissing: !1,
              allowMissingTagName: !1,
              caseFold: !1,
            };
          e.defineMode("xml", function (r, i) {
            var o,
              a,
              l = r.indentUnit,
              s = {},
              c = i.htmlMode ? t : n;
            for (var u in c) s[u] = c[u];
            for (var u in i) s[u] = i[u];
            function d(e, t) {
              function n(n) {
                return (t.tokenize = n), n(e, t);
              }
              var r = e.next();
              return "<" == r
                ? e.eat("!")
                  ? e.eat("[")
                    ? e.match("CDATA[")
                      ? n(h("atom", "]]>"))
                      : null
                    : e.match("--")
                    ? n(h("comment", "--\x3e"))
                    : e.match("DOCTYPE", !0, !0)
                    ? (e.eatWhile(/[\w\._\-]/), n(p(1)))
                    : null
                  : e.eat("?")
                  ? (e.eatWhile(/[\w\._\-]/),
                    (t.tokenize = h("meta", "?>")),
                    "meta")
                  : ((o = e.eat("/") ? "closeTag" : "openTag"),
                    (t.tokenize = f),
                    "tag bracket")
                : "&" == r
                ? (
                    e.eat("#")
                      ? e.eat("x")
                        ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";")
                        : e.eatWhile(/[\d]/) && e.eat(";")
                      : e.eatWhile(/[\w\.\-:]/) && e.eat(";")
                  )
                  ? "atom"
                  : "error"
                : (e.eatWhile(/[^&<]/), null);
            }
            function f(e, t) {
              var n,
                r,
                i = e.next();
              if (">" == i || ("/" == i && e.eat(">")))
                return (
                  (t.tokenize = d),
                  (o = ">" == i ? "endTag" : "selfcloseTag"),
                  "tag bracket"
                );
              if ("=" == i) return (o = "equals"), null;
              if ("<" == i) {
                (t.tokenize = d),
                  (t.state = y),
                  (t.tagName = t.tagStart = null);
                var a = t.tokenize(e, t);
                return a ? a + " tag error" : "tag error";
              }
              return /[\'\"]/.test(i)
                ? ((t.tokenize =
                    ((n = i),
                    ((r = function (e, t) {
                      for (; !e.eol(); )
                        if (e.next() == n) {
                          t.tokenize = f;
                          break;
                        }
                      return "string";
                    }).isInAttribute = !0),
                    r)),
                  (t.stringStartCol = e.column()),
                  t.tokenize(e, t))
                : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
            }
            function h(e, t) {
              return function (n, r) {
                for (; !n.eol(); ) {
                  if (n.match(t)) {
                    r.tokenize = d;
                    break;
                  }
                  n.next();
                }
                return e;
              };
            }
            function p(e) {
              return function (t, n) {
                for (var r; null != (r = t.next()); ) {
                  if ("<" == r)
                    return (n.tokenize = p(e + 1)), n.tokenize(t, n);
                  if (">" == r) {
                    if (1 == e) {
                      n.tokenize = d;
                      break;
                    }
                    return (n.tokenize = p(e - 1)), n.tokenize(t, n);
                  }
                }
                return "meta";
              };
            }
            function m(e, t, n) {
              (this.prev = e.context),
                (this.tagName = t || ""),
                (this.indent = e.indented),
                (this.startOfLine = n),
                (s.doNotIndent.hasOwnProperty(t) ||
                  (e.context && e.context.noIndent)) &&
                  (this.noIndent = !0);
            }
            function g(e) {
              e.context && (e.context = e.context.prev);
            }
            function v(e, t) {
              for (var n; ; ) {
                if (!e.context) return;
                if (
                  ((n = e.context.tagName),
                  !s.contextGrabbers.hasOwnProperty(n) ||
                    !s.contextGrabbers[n].hasOwnProperty(t))
                )
                  return;
                g(e);
              }
            }
            function y(e, t, n) {
              return "openTag" == e
                ? ((n.tagStart = t.column()), b)
                : "closeTag" == e
                ? w
                : y;
            }
            function b(e, t, n) {
              return "word" == e
                ? ((n.tagName = t.current()), (a = "tag"), C)
                : s.allowMissingTagName && "endTag" == e
                ? ((a = "tag bracket"), C(e, 0, n))
                : ((a = "error"), b);
            }
            function w(e, t, n) {
              if ("word" == e) {
                var r = t.current();
                return (
                  n.context &&
                    n.context.tagName != r &&
                    s.implicitlyClosed.hasOwnProperty(n.context.tagName) &&
                    g(n),
                  (n.context && n.context.tagName == r) || !1 === s.matchClosing
                    ? ((a = "tag"), x)
                    : ((a = "tag error"), k)
                );
              }
              return s.allowMissingTagName && "endTag" == e
                ? ((a = "tag bracket"), x(e, 0, n))
                : ((a = "error"), k);
            }
            function x(e, t, n) {
              return "endTag" != e ? ((a = "error"), x) : (g(n), y);
            }
            function k(e, t, n) {
              return (a = "error"), x(e, 0, n);
            }
            function C(e, t, n) {
              if ("word" == e) return (a = "attribute"), S;
              if ("endTag" == e || "selfcloseTag" == e) {
                var r = n.tagName,
                  i = n.tagStart;
                return (
                  (n.tagName = n.tagStart = null),
                  "selfcloseTag" == e || s.autoSelfClosers.hasOwnProperty(r)
                    ? v(n, r)
                    : (v(n, r), (n.context = new m(n, r, i == n.indented))),
                  y
                );
              }
              return (a = "error"), C;
            }
            function S(e, t, n) {
              return "equals" == e
                ? T
                : (s.allowMissing || (a = "error"), C(e, 0, n));
            }
            function T(e, t, n) {
              return "string" == e
                ? L
                : "word" == e && s.allowUnquoted
                ? ((a = "string"), C)
                : ((a = "error"), C(e, 0, n));
            }
            function L(e, t, n) {
              return "string" == e ? L : C(e, 0, n);
            }
            return (
              (d.isInText = !0),
              {
                startState: function (e) {
                  var t = {
                    tokenize: d,
                    state: y,
                    indented: e || 0,
                    tagName: null,
                    tagStart: null,
                    context: null,
                  };
                  return null != e && (t.baseIndent = e), t;
                },
                token: function (e, t) {
                  if (
                    (!t.tagName && e.sol() && (t.indented = e.indentation()),
                    e.eatSpace())
                  )
                    return null;
                  o = null;
                  var n = t.tokenize(e, t);
                  return (
                    (n || o) &&
                      "comment" != n &&
                      ((a = null),
                      (t.state = t.state(o || n, e, t)),
                      a && (n = "error" == a ? n + " error" : a)),
                    n
                  );
                },
                indent: function (t, n, r) {
                  var i = t.context;
                  if (t.tokenize.isInAttribute)
                    return t.tagStart == t.indented
                      ? t.stringStartCol + 1
                      : t.indented + l;
                  if (i && i.noIndent) return e.Pass;
                  if (t.tokenize != f && t.tokenize != d)
                    return r ? r.match(/^(\s*)/)[0].length : 0;
                  if (t.tagName)
                    return !1 !== s.multilineTagIndentPastTag
                      ? t.tagStart + t.tagName.length + 2
                      : t.tagStart + l * (s.multilineTagIndentFactor || 1);
                  if (s.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
                  var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                  if (o && o[1])
                    for (; i; ) {
                      if (i.tagName == o[2]) {
                        i = i.prev;
                        break;
                      }
                      if (!s.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                      i = i.prev;
                    }
                  else if (o)
                    for (; i; ) {
                      var a = s.contextGrabbers[i.tagName];
                      if (!a || !a.hasOwnProperty(o[2])) break;
                      i = i.prev;
                    }
                  for (; i && i.prev && !i.startOfLine; ) i = i.prev;
                  return i ? i.indent + l : t.baseIndent || 0;
                },
                electricInput: /<\/[\s\w:]+>$/,
                blockCommentStart: "\x3c!--",
                blockCommentEnd: "--\x3e",
                configuration: s.htmlMode ? "html" : "xml",
                helperType: s.htmlMode ? "html" : "xml",
                skipAttribute: function (e) {
                  e.state == T && (e.state = C);
                },
                xmlCurrentTag: function (e) {
                  return e.tagName
                    ? { name: e.tagName, close: "closeTag" == e.type }
                    : null;
                },
                xmlCurrentContext: function (e) {
                  for (var t = [], n = e.context; n; n = n.prev)
                    t.push(n.tagName);
                  return t.reverse();
                },
              }
            );
          }),
            e.defineMIME("text/xml", "xml"),
            e.defineMIME("application/xml", "xml"),
            e.mimeModes.hasOwnProperty("text/html") ||
              e.defineMIME("text/html", { name: "xml", htmlMode: !0 });
        })(n(4631));
      },
      347: (e) => {
        e.exports = {
          prettyPrint: function (e, t) {
            var n, r, i, o, a, l;
            for (
              r = (t = t || {}).indent_size || 4,
                i = t.indent_char || " ",
                a = t.brace_style || "collapse",
                o = 0 == t.max_char ? 1 / 0 : t.max_char || 70,
                l = t.unformatted || [
                  "a",
                  "span",
                  "bdo",
                  "em",
                  "strong",
                  "dfn",
                  "code",
                  "samp",
                  "kbd",
                  "var",
                  "cite",
                  "abbr",
                  "acronym",
                  "q",
                  "sub",
                  "sup",
                  "tt",
                  "i",
                  "b",
                  "big",
                  "small",
                  "u",
                  "s",
                  "strike",
                  "font",
                  "ins",
                  "del",
                  "pre",
                  "address",
                  "dt",
                  "h1",
                  "h2",
                  "h3",
                  "h4",
                  "h5",
                  "h6",
                ],
                (n = new (function () {
                  return (
                    (this.pos = 0),
                    (this.token = ""),
                    (this.current_mode = "CONTENT"),
                    (this.tags = {
                      parent: "parent1",
                      parentcount: 1,
                      parent1: "",
                    }),
                    (this.tag_type = ""),
                    (this.token_text =
                      this.last_token =
                      this.last_text =
                      this.token_type =
                        ""),
                    (this.Utils = {
                      whitespace: "\n\r\t ".split(""),
                      single_token:
                        "br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?=".split(
                          ","
                        ),
                      extra_liners: "head,body,/html".split(","),
                      in_array: function (e, t) {
                        for (var n = 0; n < t.length; n++)
                          if (e === t[n]) return !0;
                        return !1;
                      },
                    }),
                    (this.get_content = function () {
                      for (
                        var e = "", t = [], n = !1;
                        "<" !== this.input.charAt(this.pos);

                      ) {
                        if (this.pos >= this.input.length)
                          return t.length ? t.join("") : ["", "TK_EOF"];
                        if (
                          ((e = this.input.charAt(this.pos)),
                          this.pos++,
                          this.line_char_count++,
                          this.Utils.in_array(e, this.Utils.whitespace))
                        )
                          t.length && (n = !0), this.line_char_count--;
                        else {
                          if (n) {
                            if (this.line_char_count >= this.max_char) {
                              t.push("\n");
                              for (var r = 0; r < this.indent_level; r++)
                                t.push(this.indent_string);
                              this.line_char_count = 0;
                            } else t.push(" "), this.line_char_count++;
                            n = !1;
                          }
                          t.push(e);
                        }
                      }
                      return t.length ? t.join("") : "";
                    }),
                    (this.get_contents_to = function (e) {
                      if (this.pos == this.input.length) return ["", "TK_EOF"];
                      var t = "",
                        n = new RegExp("</" + e + "\\s*>", "igm");
                      n.lastIndex = this.pos;
                      var r = n.exec(this.input),
                        i = r ? r.index : this.input.length;
                      return (
                        this.pos < i &&
                          ((t = this.input.substring(this.pos, i)),
                          (this.pos = i)),
                        t
                      );
                    }),
                    (this.record_tag = function (e) {
                      this.tags[e + "count"]
                        ? (this.tags[e + "count"]++,
                          (this.tags[e + this.tags[e + "count"]] =
                            this.indent_level))
                        : ((this.tags[e + "count"] = 1),
                          (this.tags[e + this.tags[e + "count"]] =
                            this.indent_level)),
                        (this.tags[e + this.tags[e + "count"] + "parent"] =
                          this.tags.parent),
                        (this.tags.parent = e + this.tags[e + "count"]);
                    }),
                    (this.retrieve_tag = function (e) {
                      if (this.tags[e + "count"]) {
                        for (
                          var t = this.tags.parent;
                          t && e + this.tags[e + "count"] !== t;

                        )
                          t = this.tags[t + "parent"];
                        t &&
                          ((this.indent_level =
                            this.tags[e + this.tags[e + "count"]]),
                          (this.tags.parent = this.tags[t + "parent"])),
                          delete this.tags[
                            e + this.tags[e + "count"] + "parent"
                          ],
                          delete this.tags[e + this.tags[e + "count"]],
                          1 == this.tags[e + "count"]
                            ? delete this.tags[e + "count"]
                            : this.tags[e + "count"]--;
                      }
                    }),
                    (this.get_tag = function () {
                      var e,
                        t,
                        n = "",
                        r = [],
                        i = !1;
                      do {
                        if (this.pos >= this.input.length)
                          return r.length ? r.join("") : ["", "TK_EOF"];
                        (n = this.input.charAt(this.pos)),
                          this.pos++,
                          this.line_char_count++,
                          this.Utils.in_array(n, this.Utils.whitespace)
                            ? ((i = !0), this.line_char_count--)
                            : (("'" !== n && '"' !== n) ||
                                (r[1] && "!" === r[1]) ||
                                ((n += this.get_unformatted(n)), (i = !0)),
                              "=" === n && (i = !1),
                              r.length &&
                                "=" !== r[r.length - 1] &&
                                ">" !== n &&
                                i &&
                                (this.line_char_count >= this.max_char
                                  ? (this.print_newline(!1, r),
                                    (this.line_char_count = 0))
                                  : (r.push(" "), this.line_char_count++),
                                (i = !1)),
                              "<" === n && (e = this.pos - 1),
                              r.push(n));
                      } while (">" !== n);
                      var o,
                        a = r.join("");
                      o =
                        -1 != a.indexOf(" ") ? a.indexOf(" ") : a.indexOf(">");
                      var s = a.substring(1, o).toLowerCase();
                      if (
                        "/" === a.charAt(a.length - 2) ||
                        this.Utils.in_array(s, this.Utils.single_token)
                      )
                        this.tag_type = "SINGLE";
                      else if ("script" === s)
                        this.record_tag(s), (this.tag_type = "SCRIPT");
                      else if ("style" === s)
                        this.record_tag(s), (this.tag_type = "STYLE");
                      else if (this.Utils.in_array(s, l)) {
                        var c = this.get_unformatted("</" + s + ">", a);
                        r.push(c),
                          e > 0 &&
                            this.Utils.in_array(
                              this.input.charAt(e - 1),
                              this.Utils.whitespace
                            ) &&
                            r.splice(0, 0, this.input.charAt(e - 1)),
                          (t = this.pos - 1),
                          this.Utils.in_array(
                            this.input.charAt(t + 1),
                            this.Utils.whitespace
                          ) && r.push(this.input.charAt(t + 1)),
                          (this.tag_type = "SINGLE");
                      } else
                        "!" === s.charAt(0)
                          ? -1 != s.indexOf("[if")
                            ? (-1 != a.indexOf("!IE") &&
                                ((c = this.get_unformatted("--\x3e", a)),
                                r.push(c)),
                              (this.tag_type = "START"))
                            : -1 != s.indexOf("[endif")
                            ? ((this.tag_type = "END"), this.unindent())
                            : -1 != s.indexOf("[cdata[")
                            ? ((c = this.get_unformatted("]]>", a)),
                              r.push(c),
                              (this.tag_type = "SINGLE"))
                            : ((c = this.get_unformatted("--\x3e", a)),
                              r.push(c),
                              (this.tag_type = "SINGLE"))
                          : ("/" === s.charAt(0)
                              ? (this.retrieve_tag(s.substring(1)),
                                (this.tag_type = "END"))
                              : (this.record_tag(s), (this.tag_type = "START")),
                            this.Utils.in_array(s, this.Utils.extra_liners) &&
                              this.print_newline(!0, this.output));
                      return r.join("");
                    }),
                    (this.get_unformatted = function (e, t) {
                      if (t && -1 != t.toLowerCase().indexOf(e)) return "";
                      var n = "",
                        r = "",
                        i = !0;
                      do {
                        if (this.pos >= this.input.length) return r;
                        if (
                          ((n = this.input.charAt(this.pos)),
                          this.pos++,
                          this.Utils.in_array(n, this.Utils.whitespace))
                        ) {
                          if (!i) {
                            this.line_char_count--;
                            continue;
                          }
                          if ("\n" === n || "\r" === n) {
                            (r += "\n"), (this.line_char_count = 0);
                            continue;
                          }
                        }
                        (r += n), this.line_char_count++, (i = !0);
                      } while (-1 == r.toLowerCase().indexOf(e));
                      return r;
                    }),
                    (this.get_token = function () {
                      var e;
                      if (
                        "TK_TAG_SCRIPT" === this.last_token ||
                        "TK_TAG_STYLE" === this.last_token
                      ) {
                        var t = this.last_token.substr(7);
                        return "string" != typeof (e = this.get_contents_to(t))
                          ? e
                          : [e, "TK_" + t];
                      }
                      return "CONTENT" === this.current_mode
                        ? "string" != typeof (e = this.get_content())
                          ? e
                          : [e, "TK_CONTENT"]
                        : "TAG" === this.current_mode
                        ? "string" != typeof (e = this.get_tag())
                          ? e
                          : [e, "TK_TAG_" + this.tag_type]
                        : void 0;
                    }),
                    (this.get_full_indent = function (e) {
                      return (e = this.indent_level + e || 0) < 1
                        ? ""
                        : Array(e + 1).join(this.indent_string);
                    }),
                    (this.printer = function (e, t, n, r, i) {
                      (this.input = e || ""),
                        (this.output = []),
                        (this.indent_character = t),
                        (this.indent_string = ""),
                        (this.indent_size = n),
                        (this.brace_style = i),
                        (this.indent_level = 0),
                        (this.max_char = r),
                        (this.line_char_count = 0);
                      for (var o = 0; o < this.indent_size; o++)
                        this.indent_string += this.indent_character;
                      (this.print_newline = function (e, t) {
                        if (((this.line_char_count = 0), t && t.length)) {
                          if (!e)
                            for (
                              ;
                              this.Utils.in_array(
                                t[t.length - 1],
                                this.Utils.whitespace
                              );

                            )
                              t.pop();
                          t.push("\n");
                          for (var n = 0; n < this.indent_level; n++)
                            t.push(this.indent_string);
                        }
                      }),
                        (this.print_token = function (e) {
                          this.output.push(e);
                        }),
                        (this.indent = function () {
                          this.indent_level++;
                        }),
                        (this.unindent = function () {
                          this.indent_level > 0 && this.indent_level--;
                        });
                    }),
                    this
                  );
                })()).printer(e, i, r, o, a);
              ;

            ) {
              var s = n.get_token();
              if (
                ((n.token_text = s[0]),
                (n.token_type = s[1]),
                "TK_EOF" === n.token_type)
              )
                break;
              switch (n.token_type) {
                case "TK_TAG_START":
                  n.print_newline(!1, n.output),
                    n.print_token(n.token_text),
                    n.indent(),
                    (n.current_mode = "CONTENT");
                  break;
                case "TK_TAG_STYLE":
                case "TK_TAG_SCRIPT":
                  n.print_newline(!1, n.output),
                    n.print_token(n.token_text),
                    (n.current_mode = "CONTENT");
                  break;
                case "TK_TAG_END":
                  if ("TK_CONTENT" === n.last_token && "" === n.last_text) {
                    var c = n.token_text.match(/\w+/)[0],
                      u = n.output[n.output.length - 1].match(/<\s*(\w+)/);
                    (null !== u && u[1] === c) || n.print_newline(!0, n.output);
                  }
                  n.print_token(n.token_text), (n.current_mode = "CONTENT");
                  break;
                case "TK_TAG_SINGLE":
                  var d = n.token_text.match(/^\s*<([a-z]+)/i);
                  (d && n.Utils.in_array(d[1], l)) ||
                    n.print_newline(!1, n.output),
                    n.print_token(n.token_text),
                    (n.current_mode = "CONTENT");
                  break;
                case "TK_CONTENT":
                  "" !== n.token_text && n.print_token(n.token_text),
                    (n.current_mode = "TAG");
                  break;
                case "TK_STYLE":
                case "TK_SCRIPT":
                  if ("" !== n.token_text) {
                    n.output.push("\n");
                    var f = n.token_text;
                    if ("TK_SCRIPT" == n.token_type)
                      var h = "function" == typeof js_beautify && js_beautify;
                    else
                      "TK_STYLE" == n.token_type &&
                        (h = "function" == typeof css_beautify && css_beautify);
                    if ("keep" == t.indent_scripts) var p = 0;
                    else
                      p = "separate" == t.indent_scripts ? -n.indent_level : 1;
                    var m = n.get_full_indent(p);
                    if (h) f = h(f.replace(/^\s*/, m), t);
                    else {
                      var g =
                          f
                            .match(/^\s*/)[0]
                            .match(/[^\n\r]*$/)[0]
                            .split(n.indent_string).length - 1,
                        v = n.get_full_indent(p - g);
                      f = f
                        .replace(/^\s*/, m)
                        .replace(/\r\n|\r|\n/g, "\n" + v)
                        .replace(/\s*$/, "");
                    }
                    f && (n.print_token(f), n.print_newline(!0, n.output));
                  }
                  n.current_mode = "TAG";
              }
              (n.last_token = n.token_type), (n.last_text = n.token_text);
            }
            return n.output.join("");
          },
        };
      },
      8018: (e, t, n) => {
        "use strict";
        var r = n(8178);
        e.exports = function (e, t, n) {
          var i = [],
            o = !1,
            a = !1;
          function l() {
            if (o) throw new Error("Nested m.redraw.sync() call");
            o = !0;
            for (var t = 0; t < i.length; t += 2)
              try {
                e(i[t], r(i[t + 1]), s);
              } catch (e) {
                n.error(e);
              }
            o = !1;
          }
          function s() {
            a ||
              ((a = !0),
              t(function () {
                (a = !1), l();
              }));
          }
          return (
            (s.sync = l),
            {
              mount: function (t, n) {
                if (null != n && null == n.view && "function" != typeof n)
                  throw new TypeError(
                    "m.mount(element, component) expects a component, not a vnode"
                  );
                var o = i.indexOf(t);
                o >= 0 && (i.splice(o, 2), e(t, [], s)),
                  null != n && (i.push(t, n), e(t, r(n), s));
              },
              redraw: s,
            }
          );
        };
      },
      3223: (e, t, n) => {
        "use strict";
        var r = n(8178),
          i = n(373),
          o = n(5164),
          a = n(249),
          l = n(8561),
          s = n(7562),
          c = n(1127),
          u = {};
        e.exports = function (e, t) {
          var n;
          function d(t, r, i) {
            if (((t = a(t, r)), null != n)) {
              n();
              var o = i ? i.state : null,
                l = i ? i.title : null;
              i && i.replace
                ? e.history.replaceState(o, l, y.prefix + t)
                : e.history.pushState(o, l, y.prefix + t);
            } else e.location.href = y.prefix + t;
          }
          var f,
            h,
            p,
            m,
            g = u,
            v = (y.SKIP = {});
          function y(i, a, b) {
            if (null == i)
              throw new Error(
                "Ensure the DOM element that was passed to `m.route` is not undefined"
              );
            var w,
              x = 0,
              k = Object.keys(b).map(function (e) {
                if ("/" !== e[0])
                  throw new SyntaxError("Routes must start with a `/`");
                if (/:([^\/\.-]+)(\.{3})?:/.test(e))
                  throw new SyntaxError(
                    "Route parameter names must be separated with either `/`, `.`, or `-`"
                  );
                return { route: e, component: b[e], check: s(e) };
              }),
              C = "function" == typeof setImmediate ? setImmediate : setTimeout,
              S = o.resolve(),
              T = !1;
            if (((n = null), null != a)) {
              var L = l(a);
              if (
                !k.some(function (e) {
                  return e.check(L);
                })
              )
                throw new ReferenceError(
                  "Default route doesn't match any known routes"
                );
            }
            function M() {
              T = !1;
              var n = e.location.hash;
              "#" !== y.prefix[0] &&
                ((n = e.location.search + n),
                "?" !== y.prefix[0] &&
                  "/" !== (n = e.location.pathname + n)[0] &&
                  (n = "/" + n));
              var r = n
                  .concat()
                  .replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
                  .slice(y.prefix.length),
                i = l(r);
              function o() {
                if (r === a)
                  throw new Error("Could not resolve default route " + a);
                d(a, null, { replace: !0 });
              }
              c(i.params, e.history.state),
                (function e(n) {
                  for (; n < k.length; n++)
                    if (k[n].check(i)) {
                      var a = k[n].component,
                        l = k[n].route,
                        s = a,
                        c = (m = function (o) {
                          if (c === m) {
                            if (o === v) return e(n + 1);
                            (f =
                              null == o ||
                              ("function" != typeof o.view &&
                                "function" != typeof o)
                                ? "div"
                                : o),
                              (h = i.params),
                              (p = r),
                              (m = null),
                              (g = a.render ? a : null),
                              2 === x ? t.redraw() : ((x = 2), t.redraw.sync());
                          }
                        });
                      return void (a.view || "function" == typeof a
                        ? ((a = {}), c(s))
                        : a.onmatch
                        ? S.then(function () {
                            return a.onmatch(i.params, r, l);
                          }).then(c, o)
                        : c("div"));
                    }
                  o();
                })(0);
            }
            return (
              (n = function () {
                T || ((T = !0), C(M));
              }),
              "function" == typeof e.history.pushState
                ? ((w = function () {
                    e.removeEventListener("popstate", n, !1);
                  }),
                  e.addEventListener("popstate", n, !1))
                : "#" === y.prefix[0] &&
                  ((n = null),
                  (w = function () {
                    e.removeEventListener("hashchange", M, !1);
                  }),
                  e.addEventListener("hashchange", M, !1)),
              t.mount(i, {
                onbeforeupdate: function () {
                  return !(!(x = x ? 2 : 1) || u === g);
                },
                oncreate: M,
                onremove: w,
                view: function () {
                  if (x && u !== g) {
                    var e = [r(f, h.key, h)];
                    return g && (e = g.render(e[0])), e;
                  }
                },
              })
            );
          }
          return (
            (y.set = function (e, t, n) {
              null != m && ((n = n || {}).replace = !0), (m = null), d(e, t, n);
            }),
            (y.get = function () {
              return p;
            }),
            (y.prefix = "#!"),
            (y.Link = {
              view: function (e) {
                var t,
                  n,
                  r = e.attrs.options,
                  o = {};
                c(o, e.attrs),
                  (o.selector =
                    o.options =
                    o.key =
                    o.oninit =
                    o.oncreate =
                    o.onbeforeupdate =
                    o.onupdate =
                    o.onbeforeremove =
                    o.onremove =
                      null);
                var a = i(e.attrs.selector || "a", o, e.children);
                return (
                  (a.attrs.disabled = Boolean(a.attrs.disabled))
                    ? ((a.attrs.href = null),
                      (a.attrs["aria-disabled"] = "true"),
                      (a.attrs.onclick = null))
                    : ((t = a.attrs.onclick),
                      (n = a.attrs.href),
                      (a.attrs.href = y.prefix + n),
                      (a.attrs.onclick = function (e) {
                        var i;
                        "function" == typeof t
                          ? (i = t.call(e.currentTarget, e))
                          : null == t ||
                            "object" != typeof t ||
                            ("function" == typeof t.handleEvent &&
                              t.handleEvent(e)),
                          !1 === i ||
                            e.defaultPrevented ||
                            (0 !== e.button &&
                              0 !== e.which &&
                              1 !== e.which) ||
                            (e.currentTarget.target &&
                              "_self" !== e.currentTarget.target) ||
                            e.ctrlKey ||
                            e.metaKey ||
                            e.shiftKey ||
                            e.altKey ||
                            (e.preventDefault(),
                            (e.redraw = !1),
                            y.set(n, null, r));
                      })),
                  a
                );
              },
            }),
            (y.param = function (e) {
              return h && null != e ? h[e] : h;
            }),
            y
          );
        };
      },
      1262: (e, t, n) => {
        "use strict";
        var r = n(373);
        (r.trust = n(4742)), (r.fragment = n(9621)), (e.exports = r);
      },
      865: (e, t, n) => {
        "use strict";
        var r = n(1262),
          i = n(9074),
          o = n(9165),
          a = function () {
            return r.apply(this, arguments);
          };
        (a.m = r),
          (a.trust = r.trust),
          (a.fragment = r.fragment),
          (a.mount = o.mount),
          (a.route = n(843)),
          (a.render = n(5358)),
          (a.redraw = o.redraw),
          (a.request = i.request),
          (a.jsonp = i.jsonp),
          (a.parseQueryString = n(9874)),
          (a.buildQueryString = n(478)),
          (a.parsePathname = n(8561)),
          (a.buildPathname = n(249)),
          (a.vnode = n(8178)),
          (a.PromisePolyfill = n(2803)),
          (e.exports = a);
      },
      9165: (e, t, n) => {
        "use strict";
        var r = n(5358);
        e.exports = n(8018)(r, requestAnimationFrame, console);
      },
      1127: (e) => {
        "use strict";
        e.exports =
          Object.assign ||
          function (e, t) {
            t &&
              Object.keys(t).forEach(function (n) {
                e[n] = t[n];
              });
          };
      },
      249: (e, t, n) => {
        "use strict";
        var r = n(478),
          i = n(1127);
        e.exports = function (e, t) {
          if (/:([^\/\.-]+)(\.{3})?:/.test(e))
            throw new SyntaxError(
              "Template parameter names *must* be separated"
            );
          if (null == t) return e;
          var n = e.indexOf("?"),
            o = e.indexOf("#"),
            a = o < 0 ? e.length : o,
            l = n < 0 ? a : n,
            s = e.slice(0, l),
            c = {};
          i(c, t);
          var u = s.replace(/:([^\/\.-]+)(\.{3})?/g, function (e, n, r) {
              return (
                delete c[n],
                null == t[n] ? e : r ? t[n] : encodeURIComponent(String(t[n]))
              );
            }),
            d = u.indexOf("?"),
            f = u.indexOf("#"),
            h = f < 0 ? u.length : f,
            p = d < 0 ? h : d,
            m = u.slice(0, p);
          n >= 0 && (m += e.slice(n, a)),
            d >= 0 && (m += (n < 0 ? "?" : "&") + u.slice(d, h));
          var g = r(c);
          return (
            g && (m += (n < 0 && d < 0 ? "?" : "&") + g),
            o >= 0 && (m += e.slice(o)),
            f >= 0 && (m += (o < 0 ? "" : "&") + u.slice(f)),
            m
          );
        };
      },
      7562: (e, t, n) => {
        "use strict";
        var r = n(8561);
        e.exports = function (e) {
          var t = r(e),
            n = Object.keys(t.params),
            i = [],
            o = new RegExp(
              "^" +
                t.path.replace(
                  /:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
                  function (e, t, n) {
                    return null == t
                      ? "\\" + e
                      : (i.push({ k: t, r: "..." === n }),
                        "..." === n
                          ? "(.*)"
                          : "." === n
                          ? "([^/]+)\\."
                          : "([^/]+)" + (n || ""));
                  }
                ) +
                "$"
            );
          return function (e) {
            for (var r = 0; r < n.length; r++)
              if (t.params[n[r]] !== e.params[n[r]]) return !1;
            if (!i.length) return o.test(e.path);
            var a = o.exec(e.path);
            if (null == a) return !1;
            for (r = 0; r < i.length; r++)
              e.params[i[r].k] = i[r].r
                ? a[r + 1]
                : decodeURIComponent(a[r + 1]);
            return !0;
          };
        };
      },
      8561: (e, t, n) => {
        "use strict";
        var r = n(9874);
        e.exports = function (e) {
          var t = e.indexOf("?"),
            n = e.indexOf("#"),
            i = n < 0 ? e.length : n,
            o = t < 0 ? i : t,
            a = e.slice(0, o).replace(/\/{2,}/g, "/");
          return (
            a
              ? ("/" !== a[0] && (a = "/" + a),
                a.length > 1 && "/" === a[a.length - 1] && (a = a.slice(0, -1)))
              : (a = "/"),
            { path: a, params: t < 0 ? {} : r(e.slice(t + 1, i)) }
          );
        };
      },
      2803: (e) => {
        "use strict";
        var t = function (e) {
          if (!(this instanceof t))
            throw new Error("Promise must be called with `new`");
          if ("function" != typeof e)
            throw new TypeError("executor must be a function");
          var n = this,
            r = [],
            i = [],
            o = c(r, !0),
            a = c(i, !1),
            l = (n._instance = { resolvers: r, rejectors: i }),
            s = "function" == typeof setImmediate ? setImmediate : setTimeout;
          function c(e, t) {
            return function o(c) {
              var d;
              try {
                if (
                  !t ||
                  null == c ||
                  ("object" != typeof c && "function" != typeof c) ||
                  "function" != typeof (d = c.then)
                )
                  s(function () {
                    t ||
                      0 !== e.length ||
                      console.error("Possible unhandled promise rejection:", c);
                    for (var n = 0; n < e.length; n++) e[n](c);
                    (r.length = 0),
                      (i.length = 0),
                      (l.state = t),
                      (l.retry = function () {
                        o(c);
                      });
                  });
                else {
                  if (c === n)
                    throw new TypeError("Promise can't be resolved w/ itself");
                  u(d.bind(c));
                }
              } catch (e) {
                a(e);
              }
            };
          }
          function u(e) {
            var t = 0;
            function n(e) {
              return function (n) {
                t++ > 0 || e(n);
              };
            }
            var r = n(a);
            try {
              e(n(o), r);
            } catch (e) {
              r(e);
            }
          }
          u(e);
        };
        (t.prototype.then = function (e, n) {
          var r,
            i,
            o = this._instance;
          function a(e, t, n, a) {
            t.push(function (t) {
              if ("function" != typeof e) n(t);
              else
                try {
                  r(e(t));
                } catch (e) {
                  i && i(e);
                }
            }),
              "function" == typeof o.retry && a === o.state && o.retry();
          }
          var l = new t(function (e, t) {
            (r = e), (i = t);
          });
          return a(e, o.resolvers, r, !0), a(n, o.rejectors, i, !1), l;
        }),
          (t.prototype.catch = function (e) {
            return this.then(null, e);
          }),
          (t.prototype.finally = function (e) {
            return this.then(
              function (n) {
                return t.resolve(e()).then(function () {
                  return n;
                });
              },
              function (n) {
                return t.resolve(e()).then(function () {
                  return t.reject(n);
                });
              }
            );
          }),
          (t.resolve = function (e) {
            return e instanceof t
              ? e
              : new t(function (t) {
                  t(e);
                });
          }),
          (t.reject = function (e) {
            return new t(function (t, n) {
              n(e);
            });
          }),
          (t.all = function (e) {
            return new t(function (t, n) {
              var r = e.length,
                i = 0,
                o = [];
              if (0 === e.length) t([]);
              else
                for (var a = 0; a < e.length; a++)
                  !(function (a) {
                    function l(e) {
                      i++, (o[a] = e), i === r && t(o);
                    }
                    null == e[a] ||
                    ("object" != typeof e[a] && "function" != typeof e[a]) ||
                    "function" != typeof e[a].then
                      ? l(e[a])
                      : e[a].then(l, n);
                  })(a);
            });
          }),
          (t.race = function (e) {
            return new t(function (t, n) {
              for (var r = 0; r < e.length; r++) e[r].then(t, n);
            });
          }),
          (e.exports = t);
      },
      5164: (e, t, n) => {
        "use strict";
        var r = n(2803);
        "undefined" != typeof window
          ? (void 0 === window.Promise
              ? (window.Promise = r)
              : window.Promise.prototype.finally ||
                (window.Promise.prototype.finally = r.prototype.finally),
            (e.exports = window.Promise))
          : void 0 !== n.g
          ? (void 0 === n.g.Promise
              ? (n.g.Promise = r)
              : n.g.Promise.prototype.finally ||
                (n.g.Promise.prototype.finally = r.prototype.finally),
            (e.exports = n.g.Promise))
          : (e.exports = r);
      },
      478: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("[object Object]" !== Object.prototype.toString.call(e))
            return "";
          var t = [];
          for (var n in e) r(n, e[n]);
          return t.join("&");
          function r(e, n) {
            if (Array.isArray(n))
              for (var i = 0; i < n.length; i++) r(e + "[" + i + "]", n[i]);
            else if ("[object Object]" === Object.prototype.toString.call(n))
              for (var i in n) r(e + "[" + i + "]", n[i]);
            else
              t.push(
                encodeURIComponent(e) +
                  (null != n && "" !== n ? "=" + encodeURIComponent(n) : "")
              );
          }
        };
      },
      9874: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("" === e || null == e) return {};
          "?" === e.charAt(0) && (e = e.slice(1));
          for (var t = e.split("&"), n = {}, r = {}, i = 0; i < t.length; i++) {
            var o = t[i].split("="),
              a = decodeURIComponent(o[0]),
              l = 2 === o.length ? decodeURIComponent(o[1]) : "";
            "true" === l ? (l = !0) : "false" === l && (l = !1);
            var s = a.split(/\]\[?|\[/),
              c = r;
            a.indexOf("[") > -1 && s.pop();
            for (var u = 0; u < s.length; u++) {
              var d = s[u],
                f = s[u + 1],
                h = "" == f || !isNaN(parseInt(f, 10));
              if ("" === d)
                null == n[(a = s.slice(0, u).join())] &&
                  (n[a] = Array.isArray(c) ? c.length : 0),
                  (d = n[a]++);
              else if ("__proto__" === d) break;
              if (u === s.length - 1) c[d] = l;
              else {
                var p = Object.getOwnPropertyDescriptor(c, d);
                null != p && (p = p.value),
                  null == p && (c[d] = p = h ? [] : {}),
                  (c = p);
              }
            }
          }
          return r;
        };
      },
      5358: (e, t, n) => {
        "use strict";
        e.exports = n(5452)(window);
      },
      9621: (e, t, n) => {
        "use strict";
        var r = n(8178),
          i = n(1359);
        e.exports = function () {
          var e = i.apply(0, arguments);
          return (
            (e.tag = "["), (e.children = r.normalizeChildren(e.children)), e
          );
        };
      },
      373: (e, t, n) => {
        "use strict";
        var r = n(8178),
          i = n(1359),
          o =
            /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
          a = {},
          l = {}.hasOwnProperty;
        function s(e) {
          for (var t in e) if (l.call(e, t)) return !1;
          return !0;
        }
        function c(e) {
          for (var t, n = "div", r = [], i = {}; (t = o.exec(e)); ) {
            var l = t[1],
              s = t[2];
            if ("" === l && "" !== s) n = s;
            else if ("#" === l) i.id = s;
            else if ("." === l) r.push(s);
            else if ("[" === t[3][0]) {
              var c = t[6];
              c && (c = c.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")),
                "class" === t[4]
                  ? r.push(c)
                  : (i[t[4]] = "" === c ? c : c || !0);
            }
          }
          return (
            r.length > 0 && (i.className = r.join(" ")),
            (a[e] = { tag: n, attrs: i })
          );
        }
        function u(e, t) {
          var n = t.attrs,
            i = r.normalizeChildren(t.children),
            o = l.call(n, "class"),
            a = o ? n.class : n.className;
          if (
            ((t.tag = e.tag),
            (t.attrs = null),
            (t.children = void 0),
            !s(e.attrs) && !s(n))
          ) {
            var c = {};
            for (var u in n) l.call(n, u) && (c[u] = n[u]);
            n = c;
          }
          for (var u in e.attrs)
            l.call(e.attrs, u) &&
              "className" !== u &&
              !l.call(n, u) &&
              (n[u] = e.attrs[u]);
          for (var u in ((null == a && null == e.attrs.className) ||
            (n.className =
              null != a
                ? null != e.attrs.className
                  ? String(e.attrs.className) + " " + String(a)
                  : a
                : null != e.attrs.className
                ? e.attrs.className
                : null),
          o && (n.class = null),
          n))
            if (l.call(n, u) && "key" !== u) {
              t.attrs = n;
              break;
            }
          return (
            Array.isArray(i) &&
            1 === i.length &&
            null != i[0] &&
            "#" === i[0].tag
              ? (t.text = i[0].children)
              : (t.children = i),
            t
          );
        }
        e.exports = function (e) {
          if (
            null == e ||
            ("string" != typeof e &&
              "function" != typeof e &&
              "function" != typeof e.view)
          )
            throw Error("The selector must be either a string or a component.");
          var t = i.apply(1, arguments);
          return "string" == typeof e &&
            ((t.children = r.normalizeChildren(t.children)), "[" !== e)
            ? u(a[e] || c(e), t)
            : ((t.tag = e), t);
        };
      },
      1359: (e, t, n) => {
        "use strict";
        var r = n(8178);
        e.exports = function () {
          var e,
            t = arguments[this],
            n = this + 1;
          if (
            (null == t
              ? (t = {})
              : ("object" != typeof t || null != t.tag || Array.isArray(t)) &&
                ((t = {}), (n = this)),
            arguments.length === n + 1)
          )
            (e = arguments[n]), Array.isArray(e) || (e = [e]);
          else for (e = []; n < arguments.length; ) e.push(arguments[n++]);
          return r("", t.key, t, e);
        };
      },
      5452: (e, t, n) => {
        "use strict";
        var r = n(8178);
        e.exports = function (e) {
          var t,
            n = e && e.document,
            i = {
              svg: "http://www.w3.org/2000/svg",
              math: "http://www.w3.org/1998/Math/MathML",
            };
          function o(e) {
            return (e.attrs && e.attrs.xmlns) || i[e.tag];
          }
          function a(e, t) {
            if (e.state !== t)
              throw new Error("`vnode.state` must not be modified");
          }
          function l(e) {
            var t = e.state;
            try {
              return this.apply(t, arguments);
            } finally {
              a(e, t);
            }
          }
          function s() {
            try {
              return n.activeElement;
            } catch (e) {
              return null;
            }
          }
          function c(e, t, n, r, i, o, a) {
            for (var l = n; l < r; l++) {
              var s = t[l];
              null != s && u(e, s, i, a, o);
            }
          }
          function u(e, t, i, a, s) {
            var d = t.tag;
            if ("string" == typeof d)
              switch (
                ((t.state = {}), null != t.attrs && W(t.attrs, t, i), d)
              ) {
                case "#":
                  !(function (e, t, r) {
                    (t.dom = n.createTextNode(t.children)), w(e, t.dom, r);
                  })(e, t, s);
                  break;
                case "<":
                  f(e, t, a, s);
                  break;
                case "[":
                  !(function (e, t, r, i, o) {
                    var a = n.createDocumentFragment();
                    if (null != t.children) {
                      var l = t.children;
                      c(a, l, 0, l.length, r, null, i);
                    }
                    (t.dom = a.firstChild),
                      (t.domSize = a.childNodes.length),
                      w(e, a, o);
                  })(e, t, i, a, s);
                  break;
                default:
                  !(function (e, t, i, a, l) {
                    var s = t.tag,
                      u = t.attrs,
                      d = u && u.is,
                      f = (a = o(t) || a)
                        ? d
                          ? n.createElementNS(a, s, { is: d })
                          : n.createElementNS(a, s)
                        : d
                        ? n.createElement(s, { is: d })
                        : n.createElement(s);
                    if (
                      ((t.dom = f),
                      null != u &&
                        (function (e, t, n) {
                          for (var r in t) M(e, r, null, t[r], n);
                        })(t, u, a),
                      w(e, f, l),
                      !x(t) &&
                        (null != t.text &&
                          ("" !== t.text
                            ? (f.textContent = t.text)
                            : (t.children = [
                                r("#", void 0, void 0, t.text, void 0, void 0),
                              ])),
                        null != t.children))
                    ) {
                      var h = t.children;
                      c(f, h, 0, h.length, i, null, a),
                        "select" === t.tag &&
                          null != u &&
                          (function (e, t) {
                            if ("value" in t)
                              if (null === t.value)
                                -1 !== e.dom.selectedIndex &&
                                  (e.dom.value = null);
                              else {
                                var n = "" + t.value;
                                (e.dom.value === n &&
                                  -1 !== e.dom.selectedIndex) ||
                                  (e.dom.value = n);
                              }
                            "selectedIndex" in t &&
                              M(
                                e,
                                "selectedIndex",
                                null,
                                t.selectedIndex,
                                void 0
                              );
                          })(t, u);
                    }
                  })(e, t, i, a, s);
              }
            else
              !(function (e, t, n, i, o) {
                (function (e, t) {
                  var n;
                  if ("function" == typeof e.tag.view) {
                    if (
                      ((e.state = Object.create(e.tag)),
                      null != (n = e.state.view).$$reentrantLock$$)
                    )
                      return;
                    n.$$reentrantLock$$ = !0;
                  } else {
                    if (
                      ((e.state = void 0),
                      null != (n = e.tag).$$reentrantLock$$)
                    )
                      return;
                    (n.$$reentrantLock$$ = !0),
                      (e.state =
                        null != e.tag.prototype &&
                        "function" == typeof e.tag.prototype.view
                          ? new e.tag(e)
                          : e.tag(e));
                  }
                  if (
                    (W(e.state, e, t),
                    null != e.attrs && W(e.attrs, e, t),
                    (e.instance = r.normalize(l.call(e.state.view, e))),
                    e.instance === e)
                  )
                    throw Error(
                      "A view cannot return the vnode it received as argument"
                    );
                  n.$$reentrantLock$$ = null;
                })(t, n),
                  null != t.instance
                    ? (u(e, t.instance, n, i, o),
                      (t.dom = t.instance.dom),
                      (t.domSize = null != t.dom ? t.instance.domSize : 0))
                    : (t.domSize = 0);
              })(e, t, i, a, s);
          }
          var d = {
            caption: "table",
            thead: "table",
            tbody: "table",
            tfoot: "table",
            tr: "tbody",
            th: "tr",
            td: "tr",
            colgroup: "table",
            col: "colgroup",
          };
          function f(e, t, r, i) {
            var o = t.children.match(/^\s*?<(\w+)/im) || [],
              a = n.createElement(d[o[1]] || "div");
            "http://www.w3.org/2000/svg" === r
              ? ((a.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg">' +
                  t.children +
                  "</svg>"),
                (a = a.firstChild))
              : (a.innerHTML = t.children),
              (t.dom = a.firstChild),
              (t.domSize = a.childNodes.length),
              (t.instance = []);
            for (var l, s = n.createDocumentFragment(); (l = a.firstChild); )
              t.instance.push(l), s.appendChild(l);
            w(e, s, i);
          }
          function h(e, t, n, r, i, o) {
            if (t !== n && (null != t || null != n))
              if (null == t || 0 === t.length) c(e, n, 0, n.length, r, i, o);
              else if (null == n || 0 === n.length) k(e, t, 0, t.length);
              else {
                var a = null != t[0] && null != t[0].key,
                  l = null != n[0] && null != n[0].key,
                  s = 0,
                  d = 0;
                if (!a) for (; d < t.length && null == t[d]; ) d++;
                if (!l) for (; s < n.length && null == n[s]; ) s++;
                if (null === l && null == a) return;
                if (a !== l)
                  k(e, t, d, t.length), c(e, n, s, n.length, r, i, o);
                else if (l) {
                  for (
                    var f, h, b, w, x, S = t.length - 1, T = n.length - 1;
                    S >= d &&
                    T >= s &&
                    ((b = t[S]), (w = n[T]), b.key === w.key);

                  )
                    b !== w && p(e, b, w, r, i, o),
                      null != w.dom && (i = w.dom),
                      S--,
                      T--;
                  for (
                    ;
                    S >= d &&
                    T >= s &&
                    ((f = t[d]), (h = n[s]), f.key === h.key);

                  )
                    d++, s++, f !== h && p(e, f, h, r, v(t, d, i), o);
                  for (
                    ;
                    S >= d &&
                    T >= s &&
                    s !== T &&
                    f.key === w.key &&
                    b.key === h.key;

                  )
                    y(e, b, (x = v(t, d, i))),
                      b !== h && p(e, b, h, r, x, o),
                      ++s <= --T && y(e, f, i),
                      f !== w && p(e, f, w, r, i, o),
                      null != w.dom && (i = w.dom),
                      d++,
                      (b = t[--S]),
                      (w = n[T]),
                      (f = t[d]),
                      (h = n[s]);
                  for (; S >= d && T >= s && b.key === w.key; )
                    b !== w && p(e, b, w, r, i, o),
                      null != w.dom && (i = w.dom),
                      T--,
                      (b = t[--S]),
                      (w = n[T]);
                  if (s > T) k(e, t, d, S + 1);
                  else if (d > S) c(e, n, s, T + 1, r, i, o);
                  else {
                    var L,
                      M,
                      A = i,
                      N = T - s + 1,
                      O = new Array(N),
                      E = 0,
                      _ = 0,
                      z = 2147483647,
                      P = 0;
                    for (_ = 0; _ < N; _++) O[_] = -1;
                    for (_ = T; _ >= s; _--) {
                      null == L && (L = m(t, d, S + 1));
                      var D = L[(w = n[_]).key];
                      null != D &&
                        ((z = D < z ? D : -1),
                        (O[_ - s] = D),
                        (b = t[D]),
                        (t[D] = null),
                        b !== w && p(e, b, w, r, i, o),
                        null != w.dom && (i = w.dom),
                        P++);
                    }
                    if (
                      ((i = A), P !== S - d + 1 && k(e, t, d, S + 1), 0 === P)
                    )
                      c(e, n, s, T + 1, r, i, o);
                    else if (-1 === z)
                      for (
                        E =
                          (M = (function (e) {
                            var t = [0],
                              n = 0,
                              r = 0,
                              i = 0,
                              o = (g.length = e.length);
                            for (i = 0; i < o; i++) g[i] = e[i];
                            for (i = 0; i < o; ++i)
                              if (-1 !== e[i]) {
                                var a = t[t.length - 1];
                                if (e[a] < e[i]) (g[i] = a), t.push(i);
                                else {
                                  for (n = 0, r = t.length - 1; n < r; ) {
                                    var l = (n >>> 1) + (r >>> 1) + (n & r & 1);
                                    e[t[l]] < e[i] ? (n = l + 1) : (r = l);
                                  }
                                  e[i] < e[t[n]] &&
                                    (n > 0 && (g[i] = t[n - 1]), (t[n] = i));
                                }
                              }
                            for (r = t[(n = t.length) - 1]; n-- > 0; )
                              (t[n] = r), (r = g[r]);
                            return (g.length = 0), t;
                          })(O)).length - 1,
                          _ = T;
                        _ >= s;
                        _--
                      )
                        (h = n[_]),
                          -1 === O[_ - s]
                            ? u(e, h, r, o, i)
                            : M[E] === _ - s
                            ? E--
                            : y(e, h, i),
                          null != h.dom && (i = n[_].dom);
                    else
                      for (_ = T; _ >= s; _--)
                        (h = n[_]),
                          -1 === O[_ - s] && u(e, h, r, o, i),
                          null != h.dom && (i = n[_].dom);
                  }
                } else {
                  var I = t.length < n.length ? t.length : n.length;
                  for (s = s < d ? s : d; s < I; s++)
                    (f = t[s]) === (h = n[s]) ||
                      (null == f && null == h) ||
                      (null == f
                        ? u(e, h, r, o, v(t, s + 1, i))
                        : null == h
                        ? C(e, f)
                        : p(e, f, h, r, v(t, s + 1, i), o));
                  t.length > I && k(e, t, s, t.length),
                    n.length > I && c(e, n, s, n.length, r, i, o);
                }
              }
          }
          function p(e, t, n, i, a, s) {
            var c = t.tag;
            if (c === n.tag) {
              if (
                ((n.state = t.state),
                (n.events = t.events),
                (function (e, t) {
                  do {
                    var n;
                    if (
                      null != e.attrs &&
                      "function" == typeof e.attrs.onbeforeupdate &&
                      void 0 !== (n = l.call(e.attrs.onbeforeupdate, e, t)) &&
                      !n
                    )
                      break;
                    if (
                      "string" != typeof e.tag &&
                      "function" == typeof e.state.onbeforeupdate &&
                      void 0 !== (n = l.call(e.state.onbeforeupdate, e, t)) &&
                      !n
                    )
                      break;
                    return !1;
                  } while (0);
                  return (
                    (e.dom = t.dom),
                    (e.domSize = t.domSize),
                    (e.instance = t.instance),
                    (e.attrs = t.attrs),
                    (e.children = t.children),
                    (e.text = t.text),
                    !0
                  );
                })(n, t))
              )
                return;
              if ("string" == typeof c)
                switch ((null != n.attrs && F(n.attrs, n, i), c)) {
                  case "#":
                    !(function (e, t) {
                      e.children.toString() !== t.children.toString() &&
                        (e.dom.nodeValue = t.children),
                        (t.dom = e.dom);
                    })(t, n);
                    break;
                  case "<":
                    !(function (e, t, n, r, i) {
                      t.children !== n.children
                        ? (S(e, t), f(e, n, r, i))
                        : ((n.dom = t.dom),
                          (n.domSize = t.domSize),
                          (n.instance = t.instance));
                    })(e, t, n, s, a);
                    break;
                  case "[":
                    !(function (e, t, n, r, i, o) {
                      h(e, t.children, n.children, r, i, o);
                      var a = 0,
                        l = n.children;
                      if (((n.dom = null), null != l)) {
                        for (var s = 0; s < l.length; s++) {
                          var c = l[s];
                          null != c &&
                            null != c.dom &&
                            (null == n.dom && (n.dom = c.dom),
                            (a += c.domSize || 1));
                        }
                        1 !== a && (n.domSize = a);
                      }
                    })(e, t, n, i, a, s);
                    break;
                  default:
                    !(function (e, t, n, i) {
                      var a = (t.dom = e.dom);
                      (i = o(t) || i),
                        "textarea" === t.tag &&
                          (null == t.attrs && (t.attrs = {}),
                          null != t.text &&
                            ((t.attrs.value = t.text), (t.text = void 0))),
                        (function (e, t, n, r) {
                          if (null != n)
                            for (var i in n) M(e, i, t && t[i], n[i], r);
                          var o;
                          if (null != t)
                            for (var i in t)
                              null == (o = t[i]) ||
                                (null != n && null != n[i]) ||
                                A(e, i, o, r);
                        })(t, e.attrs, t.attrs, i),
                        x(t) ||
                          (null != e.text && null != t.text && "" !== t.text
                            ? e.text.toString() !== t.text.toString() &&
                              (e.dom.firstChild.nodeValue = t.text)
                            : (null != e.text &&
                                (e.children = [
                                  r(
                                    "#",
                                    void 0,
                                    void 0,
                                    e.text,
                                    void 0,
                                    e.dom.firstChild
                                  ),
                                ]),
                              null != t.text &&
                                (t.children = [
                                  r(
                                    "#",
                                    void 0,
                                    void 0,
                                    t.text,
                                    void 0,
                                    void 0
                                  ),
                                ]),
                              h(a, e.children, t.children, n, null, i)));
                    })(t, n, i, s);
                }
              else
                !(function (e, t, n, i, o, a) {
                  if (
                    ((n.instance = r.normalize(l.call(n.state.view, n))),
                    n.instance === n)
                  )
                    throw Error(
                      "A view cannot return the vnode it received as argument"
                    );
                  F(n.state, n, i),
                    null != n.attrs && F(n.attrs, n, i),
                    null != n.instance
                      ? (null == t.instance
                          ? u(e, n.instance, i, a, o)
                          : p(e, t.instance, n.instance, i, o, a),
                        (n.dom = n.instance.dom),
                        (n.domSize = n.instance.domSize))
                      : null != t.instance
                      ? (C(e, t.instance), (n.dom = void 0), (n.domSize = 0))
                      : ((n.dom = t.dom), (n.domSize = t.domSize));
                })(e, t, n, i, a, s);
            } else C(e, t), u(e, n, i, s, a);
          }
          function m(e, t, n) {
            for (var r = Object.create(null); t < n; t++) {
              var i = e[t];
              if (null != i) {
                var o = i.key;
                null != o && (r[o] = t);
              }
            }
            return r;
          }
          var g = [];
          function v(e, t, n) {
            for (; t < e.length; t++)
              if (null != e[t] && null != e[t].dom) return e[t].dom;
            return n;
          }
          function y(e, t, r) {
            var i = n.createDocumentFragment();
            b(e, i, t), w(e, i, r);
          }
          function b(e, t, n) {
            for (; null != n.dom && n.dom.parentNode === e; ) {
              if ("string" != typeof n.tag) {
                if (null != (n = n.instance)) continue;
              } else if ("<" === n.tag)
                for (var r = 0; r < n.instance.length; r++)
                  t.appendChild(n.instance[r]);
              else if ("[" !== n.tag) t.appendChild(n.dom);
              else if (1 === n.children.length) {
                if (null != (n = n.children[0])) continue;
              } else
                for (r = 0; r < n.children.length; r++) {
                  var i = n.children[r];
                  null != i && b(e, t, i);
                }
              break;
            }
          }
          function w(e, t, n) {
            null != n ? e.insertBefore(t, n) : e.appendChild(t);
          }
          function x(e) {
            if (
              null == e.attrs ||
              (null == e.attrs.contenteditable &&
                null == e.attrs.contentEditable)
            )
              return !1;
            var t = e.children;
            if (null != t && 1 === t.length && "<" === t[0].tag) {
              var n = t[0].children;
              e.dom.innerHTML !== n && (e.dom.innerHTML = n);
            } else if (null != e.text || (null != t && 0 !== t.length))
              throw new Error(
                "Child node of a contenteditable must be trusted"
              );
            return !0;
          }
          function k(e, t, n, r) {
            for (var i = n; i < r; i++) {
              var o = t[i];
              null != o && C(e, o);
            }
          }
          function C(e, t) {
            var n,
              r,
              i,
              o = 0,
              s = t.state;
            if (
              ("string" != typeof t.tag &&
                "function" == typeof t.state.onbeforeremove &&
                null != (i = l.call(t.state.onbeforeremove, t)) &&
                "function" == typeof i.then &&
                ((o = 1), (n = i)),
              t.attrs &&
                "function" == typeof t.attrs.onbeforeremove &&
                null != (i = l.call(t.attrs.onbeforeremove, t)) &&
                "function" == typeof i.then &&
                ((o |= 2), (r = i)),
              a(t, s),
              o)
            ) {
              if (null != n) {
                var c = function () {
                  1 & o && ((o &= 2) || u());
                };
                n.then(c, c);
              }
              null != r &&
                ((c = function () {
                  2 & o && ((o &= 1) || u());
                }),
                r.then(c, c));
            } else L(t), T(e, t);
            function u() {
              a(t, s), L(t), T(e, t);
            }
          }
          function S(e, t) {
            for (var n = 0; n < t.instance.length; n++)
              e.removeChild(t.instance[n]);
          }
          function T(e, t) {
            for (; null != t.dom && t.dom.parentNode === e; ) {
              if ("string" != typeof t.tag) {
                if (null != (t = t.instance)) continue;
              } else if ("<" === t.tag) S(e, t);
              else {
                if (
                  "[" !== t.tag &&
                  (e.removeChild(t.dom), !Array.isArray(t.children))
                )
                  break;
                if (1 === t.children.length) {
                  if (null != (t = t.children[0])) continue;
                } else
                  for (var n = 0; n < t.children.length; n++) {
                    var r = t.children[n];
                    null != r && T(e, r);
                  }
              }
              break;
            }
          }
          function L(e) {
            if (
              ("string" != typeof e.tag &&
                "function" == typeof e.state.onremove &&
                l.call(e.state.onremove, e),
              e.attrs &&
                "function" == typeof e.attrs.onremove &&
                l.call(e.attrs.onremove, e),
              "string" != typeof e.tag)
            )
              null != e.instance && L(e.instance);
            else {
              var t = e.children;
              if (Array.isArray(t))
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  null != r && L(r);
                }
            }
          }
          function M(e, t, r, i, o) {
            if (
              "key" !== t &&
              "is" !== t &&
              null != i &&
              !N(t) &&
              (r !== i ||
                (function (e, t) {
                  return (
                    "value" === t ||
                    "checked" === t ||
                    "selectedIndex" === t ||
                    ("selected" === t && e.dom === s()) ||
                    ("option" === e.tag && e.dom.parentNode === n.activeElement)
                  );
                })(e, t) ||
                "object" == typeof i)
            ) {
              if ("o" === t[0] && "n" === t[1]) return I(e, t, i);
              if ("xlink:" === t.slice(0, 6))
                e.dom.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  t.slice(6),
                  i
                );
              else if ("style" === t) P(e.dom, r, i);
              else if (O(e, t, o)) {
                if ("value" === t) {
                  if (
                    ("input" === e.tag || "textarea" === e.tag) &&
                    e.dom.value === "" + i &&
                    e.dom === s()
                  )
                    return;
                  if (
                    "select" === e.tag &&
                    null !== r &&
                    e.dom.value === "" + i
                  )
                    return;
                  if (
                    "option" === e.tag &&
                    null !== r &&
                    e.dom.value === "" + i
                  )
                    return;
                }
                "input" === e.tag && "type" === t
                  ? e.dom.setAttribute(t, i)
                  : (e.dom[t] = i);
              } else
                "boolean" == typeof i
                  ? i
                    ? e.dom.setAttribute(t, "")
                    : e.dom.removeAttribute(t)
                  : e.dom.setAttribute("className" === t ? "class" : t, i);
            }
          }
          function A(e, t, n, r) {
            if ("key" !== t && "is" !== t && null != n && !N(t))
              if ("o" !== t[0] || "n" !== t[1] || N(t))
                if ("style" === t) P(e.dom, n, null);
                else if (
                  !O(e, t, r) ||
                  "className" === t ||
                  ("value" === t &&
                    ("option" === e.tag ||
                      ("select" === e.tag &&
                        -1 === e.dom.selectedIndex &&
                        e.dom === s()))) ||
                  ("input" === e.tag && "type" === t)
                ) {
                  var i = t.indexOf(":");
                  -1 !== i && (t = t.slice(i + 1)),
                    !1 !== n &&
                      e.dom.removeAttribute("className" === t ? "class" : t);
                } else e.dom[t] = null;
              else I(e, t, void 0);
          }
          function N(e) {
            return (
              "oninit" === e ||
              "oncreate" === e ||
              "onupdate" === e ||
              "onremove" === e ||
              "onbeforeremove" === e ||
              "onbeforeupdate" === e
            );
          }
          function O(e, t, n) {
            return (
              void 0 === n &&
              (e.tag.indexOf("-") > -1 ||
                (null != e.attrs && e.attrs.is) ||
                ("href" !== t &&
                  "list" !== t &&
                  "form" !== t &&
                  "width" !== t &&
                  "height" !== t)) &&
              t in e.dom
            );
          }
          var E = /[A-Z]/g;
          function _(e) {
            return "-" + e.toLowerCase();
          }
          function z(e) {
            return "-" === e[0] && "-" === e[1]
              ? e
              : "cssFloat" === e
              ? "float"
              : e.replace(E, _);
          }
          function P(e, t, n) {
            if (t === n);
            else if (null == n) e.style.cssText = "";
            else if ("object" != typeof n) e.style.cssText = n;
            else if (null == t || "object" != typeof t)
              for (var r in ((e.style.cssText = ""), n))
                null != (i = n[r]) && e.style.setProperty(z(r), String(i));
            else {
              for (var r in n) {
                var i;
                null != (i = n[r]) &&
                  (i = String(i)) !== String(t[r]) &&
                  e.style.setProperty(z(r), i);
              }
              for (var r in t)
                null != t[r] && null == n[r] && e.style.removeProperty(z(r));
            }
          }
          function D() {
            this._ = t;
          }
          function I(e, t, n) {
            if (null != e.events) {
              if (e.events[t] === n) return;
              null == n || ("function" != typeof n && "object" != typeof n)
                ? (null != e.events[t] &&
                    e.dom.removeEventListener(t.slice(2), e.events, !1),
                  (e.events[t] = void 0))
                : (null == e.events[t] &&
                    e.dom.addEventListener(t.slice(2), e.events, !1),
                  (e.events[t] = n));
            } else
              null == n ||
                ("function" != typeof n && "object" != typeof n) ||
                ((e.events = new D()),
                e.dom.addEventListener(t.slice(2), e.events, !1),
                (e.events[t] = n));
          }
          function W(e, t, n) {
            "function" == typeof e.oninit && l.call(e.oninit, t),
              "function" == typeof e.oncreate && n.push(l.bind(e.oncreate, t));
          }
          function F(e, t, n) {
            "function" == typeof e.onupdate && n.push(l.bind(e.onupdate, t));
          }
          return (
            (D.prototype = Object.create(null)),
            (D.prototype.handleEvent = function (e) {
              var t,
                n = this["on" + e.type];
              "function" == typeof n
                ? (t = n.call(e.currentTarget, e))
                : "function" == typeof n.handleEvent && n.handleEvent(e),
                this._ && !1 !== e.redraw && (0, this._)(),
                !1 === t && (e.preventDefault(), e.stopPropagation());
            }),
            function (e, n, i) {
              if (!e)
                throw new TypeError(
                  "Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined."
                );
              var o = [],
                a = s(),
                l = e.namespaceURI;
              null == e.vnodes && (e.textContent = ""),
                (n = r.normalizeChildren(Array.isArray(n) ? n : [n]));
              var c = t;
              try {
                (t = "function" == typeof i ? i : void 0),
                  h(
                    e,
                    e.vnodes,
                    n,
                    o,
                    null,
                    "http://www.w3.org/1999/xhtml" === l ? void 0 : l
                  );
              } finally {
                t = c;
              }
              (e.vnodes = n),
                null != a &&
                  s() !== a &&
                  "function" == typeof a.focus &&
                  a.focus();
              for (var u = 0; u < o.length; u++) o[u]();
            }
          );
        };
      },
      4742: (e, t, n) => {
        "use strict";
        var r = n(8178);
        e.exports = function (e) {
          return (
            null == e && (e = ""), r("<", void 0, void 0, e, void 0, void 0)
          );
        };
      },
      8178: (e) => {
        "use strict";
        function t(e, t, n, r, i, o) {
          return {
            tag: e,
            key: t,
            attrs: n,
            children: r,
            text: i,
            dom: o,
            domSize: void 0,
            state: void 0,
            events: void 0,
            instance: void 0,
          };
        }
        (t.normalize = function (e) {
          return Array.isArray(e)
            ? t("[", void 0, void 0, t.normalizeChildren(e), void 0, void 0)
            : null == e || "boolean" == typeof e
            ? null
            : "object" == typeof e
            ? e
            : t("#", void 0, void 0, String(e), void 0, void 0);
        }),
          (t.normalizeChildren = function (e) {
            var n = [];
            if (e.length) {
              for (
                var r = null != e[0] && null != e[0].key, i = 1;
                i < e.length;
                i++
              )
                if ((null != e[i] && null != e[i].key) !== r)
                  throw new TypeError(
                    "Vnodes must either always have keys or never have keys!"
                  );
              for (i = 0; i < e.length; i++) n[i] = t.normalize(e[i]);
            }
            return n;
          }),
          (e.exports = t);
      },
      9074: (e, t, n) => {
        "use strict";
        var r = n(5164),
          i = n(9165);
        e.exports = n(2775)(window, r, i.redraw);
      },
      2775: (e, t, n) => {
        "use strict";
        var r = n(249);
        e.exports = function (e, t, n) {
          var i = 0;
          function o(e) {
            return new t(e);
          }
          function a(e) {
            return function (i, a) {
              "string" != typeof i
                ? ((a = i), (i = i.url))
                : null == a && (a = {});
              var l = new t(function (t, n) {
                e(
                  r(i, a.params),
                  a,
                  function (e) {
                    if ("function" == typeof a.type)
                      if (Array.isArray(e))
                        for (var n = 0; n < e.length; n++)
                          e[n] = new a.type(e[n]);
                      else e = new a.type(e);
                    t(e);
                  },
                  n
                );
              });
              if (!0 === a.background) return l;
              var s = 0;
              function c() {
                0 == --s && "function" == typeof n && n();
              }
              return (function e(t) {
                var n = t.then;
                return (
                  (t.constructor = o),
                  (t.then = function () {
                    s++;
                    var r = n.apply(t, arguments);
                    return (
                      r.then(c, function (e) {
                        if ((c(), 0 === s)) throw e;
                      }),
                      e(r)
                    );
                  }),
                  t
                );
              })(l);
            };
          }
          function l(e, t) {
            for (var n in e.headers)
              if ({}.hasOwnProperty.call(e.headers, n) && t.test(n)) return !0;
            return !1;
          }
          return (
            (o.prototype = t.prototype),
            (o.__proto__ = t),
            {
              request: a(function (t, n, r, i) {
                var o,
                  a = null != n.method ? n.method.toUpperCase() : "GET",
                  s = n.body,
                  c = !(
                    (null != n.serialize && n.serialize !== JSON.serialize) ||
                    s instanceof e.FormData
                  ),
                  u =
                    n.responseType ||
                    ("function" == typeof n.extract ? "" : "json"),
                  d = new e.XMLHttpRequest(),
                  f = !1,
                  h = d,
                  p = d.abort;
                for (var m in ((d.abort = function () {
                  (f = !0), p.call(this);
                }),
                d.open(
                  a,
                  t,
                  !1 !== n.async,
                  "string" == typeof n.user ? n.user : void 0,
                  "string" == typeof n.password ? n.password : void 0
                ),
                c &&
                  null != s &&
                  !l(n, /^content-type$/i) &&
                  d.setRequestHeader(
                    "Content-Type",
                    "application/json; charset=utf-8"
                  ),
                "function" == typeof n.deserialize ||
                  l(n, /^accept$/i) ||
                  d.setRequestHeader("Accept", "application/json, text/*"),
                n.withCredentials && (d.withCredentials = n.withCredentials),
                n.timeout && (d.timeout = n.timeout),
                (d.responseType = u),
                n.headers))
                  ({}).hasOwnProperty.call(n.headers, m) &&
                    d.setRequestHeader(m, n.headers[m]);
                (d.onreadystatechange = function (e) {
                  if (!f && 4 === e.target.readyState)
                    try {
                      var o,
                        a =
                          (e.target.status >= 200 && e.target.status < 300) ||
                          304 === e.target.status ||
                          /^file:\/\//i.test(t),
                        l = e.target.response;
                      if (
                        ("json" === u
                          ? e.target.responseType ||
                            "function" == typeof n.extract ||
                            (l = JSON.parse(e.target.responseText))
                          : (u && "text" !== u) ||
                            (null == l && (l = e.target.responseText)),
                        "function" == typeof n.extract
                          ? ((l = n.extract(e.target, n)), (a = !0))
                          : "function" == typeof n.deserialize &&
                            (l = n.deserialize(l)),
                        a)
                      )
                        r(l);
                      else {
                        try {
                          o = e.target.responseText;
                        } catch (e) {
                          o = l;
                        }
                        var s = new Error(o);
                        (s.code = e.target.status), (s.response = l), i(s);
                      }
                    } catch (e) {
                      i(e);
                    }
                }),
                  "function" == typeof n.config &&
                    (d = n.config(d, n, t) || d) !== h &&
                    ((o = d.abort),
                    (d.abort = function () {
                      (f = !0), o.call(this);
                    })),
                  null == s
                    ? d.send()
                    : "function" == typeof n.serialize
                    ? d.send(n.serialize(s))
                    : s instanceof e.FormData
                    ? d.send(s)
                    : d.send(JSON.stringify(s));
              }),
              jsonp: a(function (t, n, r, o) {
                var a =
                    n.callbackName ||
                    "_mithril_" + Math.round(1e16 * Math.random()) + "_" + i++,
                  l = e.document.createElement("script");
                (e[a] = function (t) {
                  delete e[a], l.parentNode.removeChild(l), r(t);
                }),
                  (l.onerror = function () {
                    delete e[a],
                      l.parentNode.removeChild(l),
                      o(new Error("JSONP request failed"));
                  }),
                  (l.src =
                    t +
                    (t.indexOf("?") < 0 ? "?" : "&") +
                    encodeURIComponent(n.callbackKey || "callback") +
                    "=" +
                    encodeURIComponent(a)),
                  e.document.documentElement.appendChild(l);
              }),
            }
          );
        };
      },
      843: (e, t, n) => {
        "use strict";
        var r = n(9165);
        e.exports = n(3223)(window, r);
      },
    },
    n = {};
  function r(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var o = (n[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, r), o.exports;
  }
  (r.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (e = r(7462)),
    r(2906),
    r(5726),
    r(3024),
    r(9661),
    (window.mc4wp.forms = window.mc4wp.forms || {}),
    (window.mc4wp.forms.editor = e);
})();
