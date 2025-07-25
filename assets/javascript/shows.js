// alert("hello world!");

function displayImage(event) {
    // find the popup div
    var popup = document.querySelector('.pop-up-image');
    // find the image in the popup div
    var popupImg = popup.querySelector('img');
    
    // set the popup image to whatever we clicked on
    popupImg.src = event.target.src;
    popup.style.display = 'flex';
}

function hidePopup() {
    // close popup
    // get popup div and display = none
    var popup = document.querySelector('.pop-up-image');
    popup.style.display = 'none';
}


function handleKeyDown(event) {
  if (event.key === 'Escape') {
    hidePopup();
  }
  if (event.key === 'Enter') {
    displayImage(event);
  }
}

function handleClick(event) {
    if (event.target === popup) {
    hidePopup();
  }
}



// INITIALIZE EVERYTHING
var images = document.querySelectorAll('.gallery-container img');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', displayImage);
  images[i].addEventListener('keydown', handleKeyDown);
}
var popup = document.querySelector('.pop-up-image');
popup.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeyDown);



