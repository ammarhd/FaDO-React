const popupLayer0 = (a, b, c) => {
  var modal = document.getElementById(a);
  var btn = document.getElementById(b);
  var close = document.getElementById(c);

  btn.onclick = function (event) {
    modal.style.display = "block";
  };
  close.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

export { popupLayer0 };
