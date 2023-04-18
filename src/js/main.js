import "./../scss/index.scss";

import jquery from "jquery";
window.jQuery = window.$ = jquery;

// Bootstrap Framework
import "@popperjs/core";
import "bootstrap";

import "slick-carousel";
import hcSticky from "hc-sticky";

//#region bootstrap navbar + hamburger + body scroll lock
var navbarMain = document.getElementById("navbarMain");
navbarMain.addEventListener("show.bs.collapse", function () {
  $(".navbar-toggler .hamburger").addClass("is-active");
  let scrollableNav = document.querySelector("#navbarMain");
});
navbarMain.addEventListener("hidden.bs.collapse", function () {
  $(".navbar-toggler .hamburger").removeClass("is-active");
  let scrollableNav = document.querySelector("#navbarMain");
});
//#endregion

//#region stickybar
document.addEventListener("DOMContentLoaded", function () {
  new hcSticky(".stickybar", {
    stickTo: "body",
    stickyClass: "stickybar--sticked",
  });
});
//#endregion

//#region slider
$(function () {
  $(".slider").slick({
    arrows: false,
    centerMode: true,
    variableWidth: true,
  });
});
//#endregion
