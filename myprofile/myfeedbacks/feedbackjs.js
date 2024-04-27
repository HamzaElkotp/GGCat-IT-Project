let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");

function openPopup(){
    popup.classList.add("open-popup");
    overlay.classList.add("overlay-active");
}

function cancelPopup(){
    popup.classList.remove("open-popup");
    overlay.classList.remove("overlay-active");
}

function savePopup(){
    cancelPopup();
    alert("Your feedback had succesffuly sumbited.");
}