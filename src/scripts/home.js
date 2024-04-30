let slideIndex = 0;
const slides = document.getElementsByClassName("slide");


showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); 
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}



const search = document.getElementById("search");
function doSearch(){
  const text = search.value.toLowerCase();

  const allGames = document.querySelectorAll('[searchItem]');
  for(let i = 0; i < allGames.length; i++) {
    const gamename = allGames[i].textContent.toLowerCase();
    // console.log(allGames[i].textContent);
    let gameID = allGames[i].getAttribute('searchItem');
    let game = document.getElementById(gameID);

    if (gamename.includes(text)) {
      game.classList.remove('hide');
      game.classList.add('show');
    } else {
      game.classList.remove('show');
      game.classList.add('hide');
    };
  }
}

search.addEventListener('keyup', doSearch);