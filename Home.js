var currentImageIndex = 1; // Assuming the initial image index is 1

function previous() {
  currentImageIndex = currentImageIndex === 1 ? 5 : currentImageIndex - 1;
  updatebackground();
}

function next() {
  currentImageIndex = currentImageIndex === 5 ? 1 : currentImageIndex + 1;
  updatebackground();
}
function updatebackground() {
  document.getElementById("image").style.backgroundImage =
    "url('images/Img" + currentImageIndex + ".jpg')";
}
function autoslide() {
  setInterval(function () {
    next();
  }, 5000);
}
autoslide();
