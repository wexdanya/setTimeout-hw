"use strict";

let isSubsrcibed = false;

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const nonSubscribed = document.getElementById("nonSubscribed");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  isSubsrcibed = true;
});
btn2.addEventListener("click", () => showPage());
function showPage() {
  document.body.style.overflow = "visible ";
  nonSubscribed.style.display = "none";
  btn.style.display = "none";
}
function showButton() {
  if (isSubsrcibed === false) {
    document.body.style.overflow = "hidden";
    nonSubscribed.style.display = "flex";
    window.scrollTo(0, 0);
  }
}
const nonSubTimeout = setTimeout(() => showButton(), 3000);

console.log();
