const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))





                            // SEARCH BTN //
const searchInputWrapper = document.querySelector(".search-input-wrapper");
// const closeIcon = document.querySelector(".search-input i");
const searchIcon = document.querySelector("search-icon i");
const display = document.querySelector(".search-input input");

function openClose(){
    count++
    if(count % 2 !== 0){
        display.style.display="none"
    }else{display.style.display="block";}
    return count

}


searchIcon.addEventListener("click", ()=> {
        searchIcon.parentElement.classList.add("change");
        searchInputWrapper.classList.add("change");

        setTimeout(() => {
        searchInput.focus();
        }, 1000)
});

// closeIcon.addEventListener("click", () => {
//     searchIcon.parentElement.classList.remove("change");
//         searchInputWrapper.classList.remove("change");
// })



