// STUFF FOR DARK THEME
function changeTheme() {
    // toggle dark mode and light mode
    var element = document.body;
    element.classList.toggle("dark-mode");
}


// STUFF FOR BUTTONS
function animatePulseOnce(element) {
    console.log("Animating pulse for: ", element);

    // add animation pulse to buttons when clicked
    element.classList.add('animate__pulse');

    // delete class after animation so it can be re-triggered :)
    element.addEventListener('animationend', function handleAnimationEnd() {
        element.classList.remove('animate__pulse');
        element.removeEventListener('animationend', handleAnimationEnd);
    });
}

// get all buttons on the screen
document.querySelectorAll('button').forEach(button => {
    // look for hover
    button.addEventListener('mouseenter', () => {
        animatePulseOnce(button);
    });
});

// stuff for dark mode again
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", changeTheme);
