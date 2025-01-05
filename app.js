var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
let body = document.querySelector("body");
let welcomeSec = document.querySelector(".welcome-sec");
let wTextBig = document.querySelector("#w-text-big");
let wTextSmall = document.querySelector("#w-text-small");
let haqqimizda = document.querySelectorAll("#haqqimizda");
let faArrowRight = document.querySelector(".fa-arrow-right");
let restNameDisc = document.querySelector("#rest-name-disc");
let kesfEdinMain = document.querySelector(".kesf-edin-main");
let kesfBigText = document.querySelectorAll("#kesf-big-text");
let kesfSmallText = document.querySelectorAll("#kesf-small-text");
let discoveryMainDiv = document.querySelector(".discovery-main-div");
let menuSec = document.querySelector(".menu-sec");
let bigMenu = document.querySelector("#big-menu");
let reservSec = document.querySelector(".reserv-sec");
let bigRezerv = document.querySelector("#big-rezerv");
let inputLab = document.querySelectorAll("#input-lab");
let firstSec = document.querySelector(".first-sec");
let swiperSlide = document.querySelectorAll(".swiper-slide");
let celebrName = document.querySelectorAll("#celebr-name");
let celebrCom = document.querySelectorAll("#celebr-comment");
let celebrRew = document.querySelector("#celebr-review");
let faMoon = document.querySelector(".fa-moon");

let tStick = document.querySelector("#t-stick");
let bStick = document.querySelector("#b-stick");
let twoStick = document.querySelector(".two-stick");
let twoStickNew = document.querySelector(".two-stick-new");
let header = document.querySelector("header");
let exitSlidebar = document.querySelector(".fa-xmark")
header.append(twoStickNew);
twoStick.addEventListener("click", () => {
  if(twoStickNew.style.width = "0px"){
    twoStickNew.style.width = "370px";
  }
    //twoStickNew.classList.remove("two-stick-new");
    //twoStickNew.classList.remove("two-stick-new");
})
exitSlidebar.addEventListener("click", () => {
  if(twoStickNew.style.width = "370px"){
    twoStickNew.style.width = "0px";
  }
})
let m = true;
let navBar = document.querySelector(".nav-bar-main");
let resIcon = document.querySelector(".res-icon");
let resName = document.querySelector(".rest-name");
window.addEventListener("scroll", () => {
  navBar.classList.toggle("scroll-header", window.scrollY > 0);
  navBar.style.paddingBottom = "30px";
  //resName.classList.toggle("black", window.scrollY > 0);
  resIcon.firstElementChild.classList.toggle("black", window.scrollY > 0)
})
/*let lists = [...document.getElementById("n-bars")];

lists.map(list =>{
  list.addEventListener("click", () => {
    document.getElementsByClassName("active")[0].classList.remove("active");
    list.classList.add("active");
  })
})
*/
let modalBack = document.querySelector(".modal-back");
let gImgMini = document.querySelectorAll("#g-img-mini");
let modal = document.querySelector(".modal");
let faX = document.querySelector(".fa-x");
gImgMini.forEach((a)=>{
  a.addEventListener("click", ()=>{
    modal.style.zIndex = "4";
    modal.style.visibility = "visible";
    modalBack.style.visibility = "visible";
    
  })
})
faX.addEventListener("click", ()=>{
  modal.style.visibility = "hidden";
  modalBack.style.visibility = "hidden";
})

let next = document.querySelector("#next");
let previous = document.querySelector("#previous");
let npImgs = document.querySelectorAll(".modal-imgs > img");
let index = 0;
let imgNumSpan = document.querySelector("#img-num-span");
next.addEventListener("click", ()=>{
  index++;
  if(index > npImgs.length - 1){
    index = 0;
  }
  imgNumSpan.textContent = index + 1;
  document.getElementsByClassName("m-active")[0].classList.remove("m-active");
  npImgs[index].classList.add("m-active");
  console.log(index);
})
previous.addEventListener("click", ()=>{
  index--;
  if(index < 0){
    index = npImgs.length - 1;
  }
  imgNumSpan.textContent = index + 1;
  document.getElementsByClassName("m-active")[0].classList.remove("m-active");
  npImgs[index].classList.add("m-active");
})












let nBars = document.querySelectorAll("#n-bars");
nBars.forEach((a)=>{
  a.addEventListener("click", ()=>{
    document.getElementsByClassName("active")[0].classList.remove("active");
    a.classList.add("active");
  })
})






const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7
};

function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    } else {
      // fade out observed elements that are not in view
      // entry.target.classList.replace('fadeIn', 'fadeOut');
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll('.fade');
fadeElms.forEach(el => observer.observe(el));




