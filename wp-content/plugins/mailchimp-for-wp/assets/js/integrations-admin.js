(() => {
  var n = window.mc4wp_vars.ajaxurl,
    t = window.mc4wp.settings,
    e = document.getElementById("notice-additional-fields");
  function i() {
    var t = [].filter
        .call(document.querySelectorAll(".mc4wp-list-input"), function (n) {
          return n.checked;
        })
        .map(function (n) {
          return n.value;
        })
        .join(","),
      i = ["EMAIL", "FNAME", "NAME", "LNAME"],
      c = !1;
    window
      .fetch("".concat(n, "?action=mc4wp_get_list_details&ids=").concat(t))
      .then(function (n) {
        return n.json();
      })
      .then(function (n) {
        n.forEach(function (n) {
          n.merge_fields.forEach(function (n) {
            n.required && i.indexOf(n.tag) < 0 && (c = !0);
          });
        });
      })
      .finally(function () {
        e.style.display = c ? "" : "none";
      });
  }
  e && (i(), t.on("selectedLists.change", i));
})();
