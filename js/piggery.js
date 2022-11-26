
const icon = document.querySelector(".icon");
const navLinks = document.querySelector(".navLinks");

icon.addEventListener("click", function(){

  if(navLinks.classList.contains("drop")){
    navLinks.classList.remove("drop");
  }else{
    navLinks.classList.add("drop");
  }

});