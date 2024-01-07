var boxes = document.querySelectorAll(".box"),
  image = document.querySelector(".img");

boxes.forEach(function (box) {
  box.addEventListener("dragover", function (event) {
    event.preventDefault();
    box.classList.add("hovered");
  });
  box.addEventListener("dragleave", function () {
    box.classList.remove("hovered");
  });
  box.addEventListener("drop", function () {
    box.appendChild(image);
    box.classList.remove("hovered");
  });
});
