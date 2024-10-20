const Hamburger = document.querySelector(".hamburger");
const Container = document.querySelector(".container");

Hamburger.addEventListener("click", () => { 
    Container.classList.toggle("active")
})