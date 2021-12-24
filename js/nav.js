window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) 
  {
    let x = document.getElementsByClassName("navbar-brand")[0].childNodes;
    x[1].classList.remove("logo");
    x[1].classList.add("logo-sm");
    document.getElementsByTagName("nav")[0].classList.add("shadow");
  } 
  else 
  {
    let x = document.getElementsByClassName("navbar-brand")[0].childNodes;
    x[1].classList.remove("logo-sm");
    x[1].classList.add("logo");
    document.getElementsByTagName("nav")[0].classList.remove("shadow");
  }
}
