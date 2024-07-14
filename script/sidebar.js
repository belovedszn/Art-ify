const hid = document.querySelector(".hide-sidebar");
const show = document.querySelector(".show-sidebar");
const main = document.getElementById("main");
const sidebar = document.querySelector(".sidebar");

export function showSidebar() {
  sidebar.classList.add("visible");
  document.body.classList.add("no-scroll");
}

export function hideSidebar() {
  sidebar.classList.remove("visible");
  document.body.classList.remove("no-scroll");
}

export const scrollBar = document.querySelector(".sidebar");

scrollBar.addEventListener("wheel", function (event) {
  const deltaY = event.deltaY;
  const up = deltaY < 0;
  const down = deltaY > 0;

  if (up && scrollBar.scrollTop === 0) {
    event.preventDefault();
  } else if (
    down &&
    scrollBar.scrollTop === scrollBar.scrollHeight - scrollBar.clientHeight
  ) {
    event.preventDefault();
  }
});

show.addEventListener("click", () => {
  showSidebar();
});

hid.addEventListener("click", () => {
  hideSidebar();
});

main.addEventListener("click", () => {
  hideSidebar();
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !show.contains(event.target)) {
    hideSidebar();
  }
});

/* 
const hid = document.querySelector(".hide-sidebar");
const show = document.querySelector(".show-sidebar");
const main = document.getElementById("main");
const sidebar = document.querySelector(".sidebar");

export function showSidebar() {
  sidebar.style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable scrolling on main content
}

export function hideSidebar() {
  sidebar.style.display = "none";
  document.body.style.overflow = ""; // Enable scrolling on main content
}

export const scrollBar = document.querySelector(".sidebar");

scrollBar.addEventListener("wheel", function(event) {
  const deltaY = event.deltaY;
  const up = deltaY < 0;
  const down = deltaY > 0;

  if (up && scrollBar.scrollTop === 0) {
    event.preventDefault();
  } else if (down && scrollBar.scrollTop === scrollBar.scrollHeight - scrollBar.clientHeight) {
    event.preventDefault();
  }
});

show.addEventListener("click", () => {
  showSidebar();
});

hid.addEventListener("click", () => {
  hideSidebar();
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !show.contains(event.target)) {
    hideSidebar();
  }
});

*/
