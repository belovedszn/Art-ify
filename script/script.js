import { initSlider } from "./top-rated.js";
import { launchSlider } from "./launch.js";
import { showSidebar } from "./sidebar.js";
import { hideSidebar } from "./sidebar.js";



// import { onLoading } from "./onload.js";

// Shop Now Btn At The Home Page
document.querySelector(".shopsCats").addEventListener("click", () => {
 // window.location.href = "/Art-ify/html/shop-by-category.html";
 window.location.href = "#shopByCategory"
});

const navbar = document.querySelector("#header"),
  searchIcon = document.querySelector("#searchIcon");
/*  mobileIcon = document.querySelector("#bi-search-mobile"),
      mobileInput = document.querySelector("#bi-search-box-mobile");

      mobileInput.addEventListener("click", ()=> {
        if (mobileIcon.classList.contains("bi-search")) {
          return mobileIcon.classList.add("bi-search, bi-x");
        }
      }); */

searchIcon.addEventListener("click", () => {
  navbar.classList.toggle("openSearch");
  if (navbar.classList.contains("openSearch")) {
    return searchIcon.classList.replace("bi-search", "bi-x");
    //  return mobileIcon.classList.replace("bi-search", "bi-x");
  }
  searchIcon.classList.replace("bi-x", "bi-search");
});

/*

document.addEventListener("DOMContentLoaded", ()=> {
  const onLoad = document.querySelector(".onload");
  const mainPage = document.getElementById('mainPage');

  setTimeout(() => {
    onLoad.style.display = 'none';
    mainPage.classList.remove('hidden');
  }, 1000);
}); */

/* let year = document.querySelector('.year');

year.innerHTML = new Date().getFullYear();
*/

// On Load

/* window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('onload');
  const mainPage = document.getElementById('mainPage');
  document.body.classList.add('loading');

  setTimeout(() => {
      loadingScreen.style.opacity = '0';

      loadingScreen.addEventListener('transitionend', () => {
          loadingScreen.style.display = 'none';
          mainPage.classList.remove('hidden');
          mainPage.classList.add('visible');
      });
      document.body.classList.remove('loading');
  }, 2000); 
}); */

