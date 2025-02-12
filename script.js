const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class",
    isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
        navLinks.classList.toggle("open");
        menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    
})

const scrollRevealOption ={
    distance :"50px",
    origin:"bottom",
    duration:1000,
}

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    
});

ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    
    origin:"top",
});
ScrollReveal().reveal(".about_content h2", {
    ...scrollRevealOption,
    delay:500,
    origin:"left",
});
ScrollReveal().reveal(".about_content p", {
    ...scrollRevealOption,
    delay:500,
    origin:"left",
});
ScrollReveal().reveal(".about_content .about_btn", {
    ...scrollRevealOption,
    delay:1000,
    origin:"left",
});



window.addEventListener("scroll", function () {
    const form = document.querySelector(".book_container form");
    const formPosition = form.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (formPosition < screenHeight - 300) {  // Trigger 100px before the form is fully visible
        form.classList.add("active");
    } else {
        form.classList.remove("active"); // Remove when out of view
    }

});

// Scroll Animation for About Section
window.addEventListener("scroll", function () {
    const aboutElements = document.querySelectorAll(".about_content p, .about_content h2, .about_btn"); 
    const screenHeight = window.innerHeight;

    aboutElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < screenHeight - 200) {
            element.classList.add("active");  // Add animation class
        } else {
            element.classList.remove("active");  // Remove when out of view
        }
    });
});

