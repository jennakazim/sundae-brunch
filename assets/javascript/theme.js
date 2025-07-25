function changeTheme() {
    // toggle dark mode and light mode
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", changeTheme);
