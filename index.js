const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
nav.setAttribute("data-visible", false);

navToggle.addEventListener("click", () =>{
    const visibility = nav.getAttribute("data-visible");
    
    if(visibility === "false") {
        nav.setAttribute("data-visible", true);
        nav.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        nav.setAttribute("aria-expanded", false);
    }

    console.log(nav.getAttribute('aria-expanded'));
})