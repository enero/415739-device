var buttonWriteUs = document.getElementById("js-write-us");
var buttonMap = document.getElementById("js-map");
var overlay = document.getElementById("js-overlay");
var buttonsClose = document.getElementsByClassName("js-modal-close");

function closeFn() {
  var modal = document.getElementsByClassName("js-modal-active");

  overlay.style.display = "none";
  if (modal && modal[0]) {
    modal[0].style.display = "none";
    modal[0].classList.remove("js-modal-active");
  }
}

buttonWriteUs.addEventListener("click", function (e) {
  e.preventDefault();
  var modal = document.getElementById("js-modal-send-message");

  overlay.style.display = "block";
  modal.style.display = "block";
  modal.classList.add("js-modal-active");
});

buttonMap.addEventListener("click", function (e) {
  e.preventDefault();
  var modal = document.getElementById("js-modal-map");

  overlay.style.display = "block";
  modal.style.display = "block";
  modal.classList.add("js-modal-active");
});

overlay.addEventListener("click", closeFn);
for (var i = 0; i < buttonsClose.length; i++) {
  buttonsClose[i].addEventListener("click", closeFn);
}
