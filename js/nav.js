window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("logo").style.width = "130px";
    document.getElementById("logo").style.height = "52px";
    document.getElementById("scroll").classList.add("shadow");
  } else {
    document.getElementById("logo").style.width = "175px";
    document.getElementById("logo").style.height = "70px";
    document.getElementById("scroll").classList.remove("shadow");
  }
}
