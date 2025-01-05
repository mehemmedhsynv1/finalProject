let body = document.querySelector("body");

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
  navBar.style.backgroundColor = "rgba(0, 0, 0, 0.2);";
  navBar.classList.toggle("scroll-header", window.scrollY > 0);
  navBar.style.paddingBottom = "30px";
  //resName.classList.toggle("black", window.scrollY > 0);
  resIcon.firstElementChild.classList.toggle("black", window.scrollY > 0)
})

let modalBack = document.querySelector(".modal-back");
let gImgMini = document.querySelectorAll("#g-img-mini");
let modal = document.querySelector(".modal");
let faX = document.querySelector(".fa-x");
gImgMini.forEach((a)=>{
  a.addEventListener("click", ()=>{
    modal.style.zIndex = "2";
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




// let form = document.querySelector("form");
// form.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   let myForm = new FormData(e.target);
// })

let input = document.querySelectorAll("#input");
let textarea = document.querySelector("#send-mess-area");
let btn = document.querySelector("#send-button");
let sendMes = document.createElement("p");
let sendDiv = document.querySelector(".send-div");
let inputLab = document.querySelectorAll("#input-lab");




let form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  //let myForm = new FormData(e.target)

  // btn.addEventListener("click", ()=>{
  let text = "Mesajınız göndərilsin?";
  if(confirm(text) == true){
    input.forEach((a)=>{
    a.style.display = "none";
    })
    inputLab.forEach((a)=>{
      a.style.display = "none";
    })
    btn.style.display = "none";
    sendMes.style.fontSize = "30px";
    //sendMes.style.position = "absolute";
    //sendMes.style.left = "450px";
    sendDiv.style.paddingTop = "40px";
    sendDiv.style.gap = "10px";  
    sendMes.style.fontFamily = "Poppins"
    sendMes.innerHTML = "Mesajınız göndərildi!";
    sendDiv.append(sendMes);
    textarea.style.display = "none";
   }//else{
//       input.forEach((a)=>{
//         a.style.display = "block";
//       })
//       inputLab.forEach((a)=>{
//         a.style.display = "block";
//       })
//  }
// })
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








// btn.addEventListener("click", ()=>{
//     // input.forEach((a)=>{
//     //   if(input.target.value == ""){
//     //     a.style.display = "block";
//     //     inputLab.forEach((a)=>{
//     //       a.style.display = "block";
//     //     })
//     //   }
//     // })
    
//   //console.log(input.target.value);
//   let text = "Mesajınız göndərilsin?";
//   if(confirm(text) == true){
//     input.forEach((a)=>{
//     a.style.display = "none";
//     })
//     inputLab.forEach((a)=>{
//       a.style.display = "none";
//     })
//     btn.style.display = "none";
//     sendMes.style.fontSize = "30px";
//     //sendMes.style.position = "absolute";
//     //sendMes.style.left = "450px";
//     sendDiv.style.paddingTop = "40px";
//     sendDiv.style.gap = "10px";  
//     sendMes.style.fontFamily = "Poppins"
//     sendMes.innerHTML = "Mesajınız göndərildi!";
//     sendDiv.append(sendMes);
//     textarea.style.display = "none";
//   }else{
//       input.forEach((a)=>{
//         a.style.display = "block";
//       })
//       inputLab.forEach((a)=>{
//         a.style.display = "block";
//       })
//  }
// })









