document.addEventListener("DOMContentLoaded", (e) => {
  const t = () => {
    const e = document.querySelectorAll("form.wpcf7-form .wpcf7-stripe");
    for (let t = 0; t < e.length; t++) {
      let r = e[t];
      r.querySelector("button").disabled = !0;
      let i = document.createElement("span");
      i.setAttribute("class", "wpcf7-not-valid-tip"),
        i.insertAdjacentText(
          "beforeend",
          "This form includes a payment widget that requires a modern browser to work."
        ),
        r.appendChild(i);
    }
  };
  if (void 0 === window.wpcf7_stripe)
    return console.error("window.wpcf7_stripe is not defined."), void t();
  if ("function" != typeof window.Stripe)
    return console.error("window.Stripe is not defined."), void t();
  if ("function" != typeof wpcf7.submit)
    return console.error("wpcf7.submit is not defined."), void t();
  const r = Stripe(wpcf7_stripe.publishable_key),
    i = r.elements();
  document.addEventListener("wpcf7submit", (e) => {
    const t = e.detail.unitTag,
      s = `${t}-ve-stripe-card-element`,
      n = document.querySelector(`#${t} form`),
      o = n.closest(".wpcf7").querySelector(".screen-reader-response"),
      d = n.querySelector(".wpcf7-stripe .wpcf7-form-control-wrap"),
      c = n.querySelector(".wpcf7-stripe button.first"),
      a = n.querySelector(".wpcf7-stripe button.second"),
      l = n.querySelector('[name="_wpcf7_stripe_payment_intent"]');
    if (!l) return;
    l.setAttribute("value", "");
    const u = (e) => {
        const t = o.querySelector("ul"),
          r = t.querySelector(`li#${s}`);
        r && r.remove();
        const i = document.createElement("li");
        i.setAttribute("id", s),
          i.insertAdjacentText("beforeend", e.message),
          t.appendChild(i);
      },
      p = (e) => {
        const t = d.querySelector(".wpcf7-form-control");
        t.classList.add("wpcf7-not-valid"),
          t.setAttribute("aria-describedby", s);
        const r = document.createElement("span");
        r.setAttribute("class", "wpcf7-not-valid-tip"),
          r.setAttribute("aria-hidden", "true"),
          r.insertAdjacentText("beforeend", e.message),
          d.appendChild(r),
          d.querySelectorAll("[aria-invalid]").forEach((e) => {
            e.setAttribute("aria-invalid", "true");
          }),
          t.closest(".use-floating-validation-tip") &&
            (t.addEventListener("focus", (e) => {
              r.setAttribute("style", "display: none");
            }),
            r.addEventListener("mouseover", (e) => {
              r.setAttribute("style", "display: none");
            }));
      },
      f = () => {
        o.querySelectorAll(`ul li#${s}`).forEach((e) => {
          e.remove();
        }),
          d.querySelectorAll(".wpcf7-not-valid-tip").forEach((e) => {
            e.remove();
          }),
          d.querySelectorAll("[aria-invalid]").forEach((e) => {
            e.setAttribute("aria-invalid", "false");
          }),
          d.querySelectorAll(".wpcf7-form-control").forEach((e) => {
            e.removeAttribute("aria-describedby"),
              e.classList.remove("wpcf7-not-valid");
          });
      };
    if ("payment_required" === e.detail.status) {
      const s = e.detail.apiResponse.stripe.payment_intent;
      s.id && l.setAttribute("value", s.id);
      const o = i.getElement("card") || i.create("card");
      o.mount(`#${t} .wpcf7-stripe .card-element`),
        o.clear(),
        d.classList.remove("hidden"),
        c.classList.add("hidden"),
        a.classList.remove("hidden"),
        (a.disabled = !0),
        o.addEventListener("change", (e) => {
          if ((f(), e.error)) {
            const t = { message: e.error.message };
            u(t), p(t), (a.disabled = !0);
          } else a.disabled = !1;
        }),
        a.addEventListener("click", (e) => {
          f(),
            (a.disabled = !0),
            n.classList.add("submitting"),
            wpcf7.blocked ||
              r
                .confirmCardPayment(s.client_secret, {
                  payment_method: { card: o },
                })
                .then((e) => {
                  if (e.error) {
                    e.error.decline_code &&
                      [
                        "fraudulent",
                        "lost_card",
                        "merchant_blacklist",
                        "pickup_card",
                        "restricted_card",
                        "security_violation",
                        "service_not_allowed",
                        "stolen_card",
                        "transaction_not_allowed",
                      ].includes(e.error.decline_code) &&
                      (wpcf7.blocked = !0),
                      n.classList.remove("submitting");
                    const t = { message: e.error.message };
                    u(t), p(t);
                  } else
                    "succeeded" === e.paymentIntent.status && wpcf7.submit(n);
                });
        });
    } else
      d.classList.add("hidden"),
        c.classList.remove("hidden"),
        a.classList.add("hidden"),
        ["mail_sent", "mail_failed"].includes(e.detail.status) &&
          (c.disabled = !0);
  });
});
