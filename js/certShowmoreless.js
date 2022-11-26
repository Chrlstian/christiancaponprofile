const certificateEl = document.getElementById("certificate-box");
const showmorelessEl = document.getElementById("showmoreless-el");

showmorelessEl.addEventListener("click", function(){

    if(certificateEl.className === "open"){
        certificateEl.className = "";
        showmorelessEl.textContent = "Show More..";
    } else{
        certificateEl.className = "open";
        showmorelessEl.textContent = "Show Less";
    }

})