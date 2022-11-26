const drops = document.querySelectorAll(".drop");
drops.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("drop--expanded");
  })
);
