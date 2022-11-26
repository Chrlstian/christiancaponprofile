const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

//Fontawesome Icons Menu
let changeIcon = function(icon){
  icon.classList.toggle("fa-xmark");
}
