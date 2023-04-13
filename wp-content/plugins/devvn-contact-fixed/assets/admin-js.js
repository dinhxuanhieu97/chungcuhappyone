(function ($, wp) {
  $(document).ready(function () {
    $(".color_picker").wpColorPicker();
    $(".devvn_add_contact").on("click", function () {
      var contact_wrap = wp.template("devvn-trcontact");
      var contact_tr = $(".contactfixed_tbody > tr").length;
      $(".contactfixed_tbody").append(
        contact_wrap({
          stt: parseInt(contact_tr),
        })
      );
      $("body .color_picker").wpColorPicker();
      return false;
    });
    function reload_sort_loaisp() {
      $(".contactfixed_tbody > tr").each(function (index, row) {
        $(
          'input[type="text"], input[type="number"], input.text, select',
          row
        ).each(function (i, el) {
          var t = $(el);
          t.attr(
            "name",
            t.attr("name").replace(/\[id_([^[]*)\]/, "[id_" + index + "]")
          );
        });
      });
    }
    $("body").on("click", ".devvn_delete_contact", function () {
      var thisTr = $(this).closest("tr");
      thisTr.fadeOut(400, function () {
        $(this).remove();
        reload_sort_loaisp();
      });
      return false;
    });

    //image upload
    $("body").on("click", ".ireel-upload", function (e) {
      // Prevents the default action from occuring.
      e.preventDefault();
      var thisUpload = $(this).parents(".svl-upload-image");
      // Sets up the media library frame
      meta_image_frame = wp.media.frames.meta_image_frame = wp.media({
        title: "Upload Image",
        button: { text: "Upload Image" },
        library: { type: "image" },
        multiple: false,
      });
      // Runs when an image is selected.
      meta_image_frame.on("select", function () {
        // Grabs the attachment selection and creates a JSON representation of the model.
        var media_attachment = meta_image_frame
          .state()
          .get("selection")
          .first()
          .toJSON();
        // Sends the attachment URL to our custom image input field.

        if (media_attachment.id) {
          var attachment_image =
            media_attachment.sizes && media_attachment.sizes.thumbnail
              ? media_attachment.sizes.thumbnail.url
              : media_attachment.url;

          thisUpload.addClass("has-image");
          thisUpload.find('input[type="hidden"]').val(media_attachment.id);
          thisUpload.find("img.image_view").attr("src", media_attachment.url);
        }
      });
      // Opens the media library frame.
      meta_image_frame.open();
    });

    $("body").on("click", ".svl-delete-image", function () {
      var parentDiv = $(this).parents(".svl-upload-image");
      parentDiv.removeClass("has-image");
      parentDiv.find('input[type="hidden"]').val("");
      return false;
    });

    function trSortable() {
      $(".contactfixed_tbody").sortable({
        items: "tr",
        cursor: "move",
        forcePlaceholderSize: true,
        helper: "clone",
        opacity: 0.45,
        placeholder: "contactfixed-placeholder",
        scrollSensitivity: 40,
        stop: function (event, ui) {
          reload_sort_loaisp();
        },
        update: function (event, ui) {
          reload_sort_loaisp();
        },
      });
      reload_sort_loaisp();
    }
    trSortable();
  });
})(jQuery, wp);
