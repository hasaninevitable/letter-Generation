document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".animation-container").addEventListener("click", function() {
        showHomePage();
    });
});

function showHomePage() {
    document.getElementById("homePage").style.display = "block";
    document.querySelector(".animation-container").style.display = "none";
}
