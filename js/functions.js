function fillHeart(id) {
            var image = document.getElementById(id);
            if (image.src.match('photos/icons/dark-fav.svg')) 
                image.src = 'photos/icons/solid-fav.svg';
            else
                image.src = 'photos/icons/dark-fav.svg';
        }

function readMoreFunction() {
  var dots = document.getElementById("dotsCon");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Виж повече >";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Виж по-малко <";
    moreText.style.display = "inline";
  }
}

function menuLanguageActive(){
    var us = document.getElementById("nocurrent");
    
    if(us.style.display === "none")
        us.style.display = "block";
}