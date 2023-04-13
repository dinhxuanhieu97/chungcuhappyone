!(function () {
  "use strict";
  var t,
    e = window.wp.element,
    c = window.wp.i18n,
    l = window.wp.blocks,
    r = (0, e.createElement)(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 242.5 239.46" },
      (0, e.createElement)(
        "defs",
        null,
        (0, e.createElement)(
          "clipPath",
          { id: "clip-path", transform: "translate(1.72)" },
          (0, e.createElement)("circle", {
            className: "cls-1",
            cx: "119.73",
            cy: "119.73",
            r: "116.15",
            fill: "none",
          })
        )
      ),
      (0, e.createElement)(
        "g",
        { id: "Layer_2", "data-name": "Layer 2" },
        (0, e.createElement)(
          "g",
          { id: "Layer_1", "data-name": "Layer 1" },
          (0, e.createElement)(
            "g",
            { className: "cls-2", clipPath: "url(#clip-path)" },
            (0, e.createElement)("circle", {
              className: "cls-3",
              cx: "121.45",
              cy: "119.73",
              r: "116.15",
              fill: "#33c6f4",
            }),
            (0, e.createElement)("path", {
              className: "cls-4",
              d: "M239.32,167.79c-53.41-24-108.37-91.46-113-94.55s-10.84.77-10.84.77c-3.87-6.19-10.06.77-10.06.77C76.77,123.55.14,170.11.14,170.11S36.94,237.79,122,237.79C208.48,237.79,239.32,167.79,239.32,167.79Z",
              transform: "translate(1.72)",
              fill: "#1b447e",
            }),
            (0, e.createElement)("path", {
              className: "cls-5",
              d: "M67.48,116.58s15.48-7,12.38,4.65-15.48,28.64-11.61,29.41S83,140.58,86.06,142.12s5.42.78,3.87,6.2-3.1,9.29,0,9.29,5.42-7,9.29-13.94,10.06-3.87,12.38-1.55,9.29,15.49,14.71,13.94,8.51-8.52,6.19-24,1.55-20.12,1.55-20.12,4.64-2.32,13.16,8.51,24,27.09,26.31,26.32-10.83-17.8-7.74-19.35,15.48,2.32,21.68,7.74c0,0,2.12,8.87,2.12.36L126.31,73.24,115.47,74l-10.06.77S80.64,111.94,67.48,116.58Z",
              transform: "translate(1.72)",
              fill: "#fff",
            }),
            (0, e.createElement)("path", {
              className: "cls-6",
              d: "M239.32,170.11c-53.41-24-108.37-93.78-113-96.87s-10.84.77-10.84.77c-3.87-6.19-10.06.77-10.06.77C76.77,123.55.14,170.11.14,170.11",
              transform: "translate(1.72)",
              fill: "none",
              stroke: "#221e1f",
              strokeMiterlimit: "10",
              strokeWidth: "8px",
            })
          ),
          (0, e.createElement)("circle", {
            className: "cls-6",
            cx: "121.45",
            cy: "119.73",
            r: "116.15",
            fill: "none",
            stroke: "#1b447e",
            strokeMiterlimit: "10",
            strokeWidth: "8px",
          })
        )
      )
    ),
    a = window.wp.compose,
    o = window.wp.components,
    n = {
      from: [
        {
          type: "shortcode",
          tag: "contact-form-7",
          attributes: {
            id: {
              type: "integer",
              shortcode: (t) => {
                let {
                  named: { id: e },
                } = t;
                return parseInt(e);
              },
            },
            title: {
              type: "string",
              shortcode: (t) => {
                let {
                  named: { title: e },
                } = t;
                return e;
              },
            },
          },
        },
      ],
      to: [
        {
          type: "block",
          blocks: ["core/shortcode"],
          transform: (t) =>
            (0, l.createBlock)("core/shortcode", {
              text: `[contact-form-7 id="${t.id}" title="${t.title}"]`,
            }),
        },
      ],
    };
  (window.wpcf7 =
    null !== (t = window.wpcf7) && void 0 !== t ? t : { contactForms: [] }),
    (0, l.registerBlockType)("contact-form-7/contact-form-selector", {
      title: (0, c.__)("Contact Form 7", "contact-form-7"),
      description: (0, c.__)(
        "Insert a contact form you have created with Contact Form 7.",
        "contact-form-7"
      ),
      category: "widgets",
      attributes: { id: { type: "integer" }, title: { type: "string" } },
      icon: r,
      transforms: n,
      edit: function t(l) {
        let { attributes: r, setAttributes: n } = l;
        const i = new Map();
        if (
          (Object.entries(window.wpcf7.contactForms).forEach((t) => {
            let [e, c] = t;
            i.set(c.id, c);
          }),
          !i.size && !r.id)
        )
          return (0, e.createElement)(
            "div",
            { className: "components-placeholder" },
            (0, e.createElement)(
              "p",
              null,
              (0, c.__)(
                "No contact forms were found. Create a contact form first.",
                "contact-form-7"
              )
            )
          );
        const s = Array.from(i.values(), (t) => ({
          value: t.id,
          label: t.title,
        }));
        if (r.id) s.length || s.push({ value: r.id, label: r.title });
        else {
          const t = s[0];
          r = { id: parseInt(t.value), title: t.label };
        }
        const m = `contact-form-7-contact-form-selector-${(0, a.useInstanceId)(
          t
        )}`;
        return (0, e.createElement)(
          "div",
          { className: "components-placeholder" },
          (0, e.createElement)(
            "label",
            { htmlFor: m, className: "components-placeholder__label" },
            (0, c.__)("Select a contact form:", "contact-form-7")
          ),
          (0, e.createElement)(o.SelectControl, {
            id: m,
            options: s,
            value: r.id,
            onChange: (t) =>
              n({ id: parseInt(t), title: i.get(parseInt(t)).title }),
          })
        );
      },
      save: (t) => {
        var c, l, r, a;
        let { attributes: o } = t;
        return (
          (o = {
            id:
              null !== (c = o.id) && void 0 !== c
                ? c
                : null === (l = window.wpcf7.contactForms[0]) || void 0 === l
                ? void 0
                : l.id,
            title:
              null !== (r = o.title) && void 0 !== r
                ? r
                : null === (a = window.wpcf7.contactForms[0]) || void 0 === a
                ? void 0
                : a.title,
          }),
          (0, e.createElement)(
            "div",
            null,
            '[contact-form-7 id="',
            o.id,
            '" title="',
            o.title,
            '"]'
          )
        );
      },
    });
})();
