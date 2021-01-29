
const hamburger = document.querySelector(".navigation-hamburger");
const navigation = document.querySelector(".navigation");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", function() {
    navigation.classList.toggle("navigation-mobile");
    hamburger.classList.toggle("fixed")
    logo.classList.toggle("fixed")
})