function menuToggleFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    // x.classList.add("menu__mobile");
  }
}

// When the user scrolls the page, execute myFunction
// scrolls header
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Get the modal image
var modalpopper = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("modalImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modalpopper.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalpopper.style.display = "none";
};

// Get the modal image
var modalpopper1 = document.getElementById("imageModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("modalImg1");
var modalImg1 = document.getElementById("img02");
var captionText = document.getElementById("caption1");
img1.onclick = function () {
  modalpopper1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modalpopper1.style.display = "none";
};
