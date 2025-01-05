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


let bigRezerv = document.querySelector("#big-rezerv");
let input = document.querySelectorAll("#input");
let bookTbutton = document.querySelector("#book-t-button");
let buttonTdiv = document.querySelector(".button-t-div");
let form = document.querySelector("form");
let bookDiv = document.querySelectorAll(".book-div");
let input1 = document.querySelector("#input1");

let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");
let input5 = document.querySelector("#input5");
let input6 = document.querySelector("#input6");


let inputText1 = document.querySelector("#input-text1");
let inputText2 = document.querySelector("#input-text2");
let inputText3 = document.querySelector("#input-text3");
let inputText4 = document.querySelector("#input-text4");
let inputText5 = document.querySelector("#input-text5");
let inputText6 = document.querySelector("#input-text6");

let inputLab = document.querySelectorAll("#input-lab");
let savedUpdateBtn = document.querySelector(".saved-update-btn");
let saveButton = document.createElement("button");
let updateButton = document.createElement("button");
let cancelledButton = document.createElement("button");
savedUpdateBtn.append(saveButton);
savedUpdateBtn.append(updateButton);
savedUpdateBtn.append(cancelledButton);
saveButton.classList.add("save-button");
updateButton.classList.add("update-button");
cancelledButton.classList.add("cancelled-button");
saveButton.innerHTML = "yaddaşa yazın";
updateButton.innerHTML = "dəyişiklik edin";
cancelledButton.innerHTML = "ləğv edin";
saveButton.style.display = "none";
updateButton.style.display = "none";
cancelledButton.style.display = "none";


let inputValue = document.querySelectorAll("#input-value");

  form.addEventListener("submit", (e)=>{
    
    e.preventDefault();
    let confirmText = "Rezervasiya edilsin?";
    if(confirm(confirmText) == true){
    inputText1.innerHTML = input1.value;
    input1.style.display = "none";
    inputText2.innerHTML = input2.value;
    input2.style.display = "none";
    inputText3.innerHTML = input3.value;
    input3.style.display = "none";
    inputText4.innerHTML = input4.value;
    input4.style.display = "none";
    inputText5.innerHTML = input5.value;
    input5.style.display = "none";
    inputText6.innerHTML = input6.value;
    input6.style.display = "none";
    (input1,input2,input3,input4,input5,input6).style.width = "200px";
    bookDiv.forEach((v)=>{
      v.classList.add("book-div-new");
    })

    bookTbutton.style.display = "none";
    saveButton.style.display = "block";
    updateButton.style.display = "block";
    cancelledButton.style.display = "block";

    saveButton.addEventListener("click", ()=>{
      let confirmSavedText = "Yaddaşa yazılsın?";
      if(confirm(confirmSavedText) == true){
        saveButton.style.display = "none";
        updateButton.style.display = "none";
        cancelledButton.style.display = "none";
        bookDiv.forEach((v)=>{
          v.classList.add("book-div-new");
        })
        inputText1.style.display = "block";
        inputText1.innerHTML = input1.value;
        input1.style.display = "none";
        inputText2.style.display = "block";
        inputText2.innerHTML = input2.value;
        input2.style.display = "none";
        inputText3.style.display = "block";
        inputText3.innerHTML = input3.value;
        input3.style.display = "none";
        inputText4.style.display = "block";
        inputText4.innerHTML = input4.value;
        input4.style.display = "none";
        inputText5.style.display = "block";
        inputText5.innerHTML = input5.value;
        input5.style.display = "none";
        inputText6.style.display = "block";
        inputText6.innerHTML = input6.value;
        input6.style.display = "none";
        bigRezerv.textContent = "Masa rezerv edildi";
      }
      
    })
    
  }
    
 
    
  
//  saveButton.addEventListener("click", ()=>{
//   // confirm() = "none";
//     // confirmText = "Yaddaşa yazılsın?";
//     // if(confirm(confirmText) == true){
//       saveButton.style.display = "none";
//       updateButton.style.display = "none";
//       // let savedText = document.createElement("p");
//       // savedText.style.fontSize = "25px";
//       // savedText.style.textAlign = "center";
//       // savedText.style.fontFamily = "Poppins";
//       // buttonTdiv.append(savedText);
//     // }
    
//     })   



updateButton.addEventListener("click",()=>{
  bookDiv.forEach((f)=>{
    f.classList.remove("book-div-new");
  });
  updateButton.style.display = "none";
    inputText1.style.display = "none";
    input1.style.display = "block";
    inputText2.style.display = "none";
    input2.style.display = "block";
    inputText3.style.display = "none";
    input3.style.display = "block";
    inputText4.style.display = "none";
    input4.style.display = "block";
    inputText5.style.display = "none";
    input5.style.display = "block";
    inputText6.style.display = "none";
    input6.style.display = "block";
    input6.style.width = "266px";
    cancelledButton.style.display = "none";
})








cancelledButton.addEventListener("click",()=>{
  // bookDiv.forEach((f)=>{
  //   f.classList.remove("book-div-new");
  // });
  let cancelledText = "Rezervasiya ləğv edilsin?";
  if(confirm(cancelledText) == true){
  updateButton.style.display = "none";
  saveButton.style.display = "none";
  bookTbutton.style.display = "none";
  cancelledButton.style.display = "none";

    inputText1.style.display = "none";
    input1.style.display = "none";
    // input1.value = "";
    inputText2.style.display = "none";
    input2.style.display = "none";
    // input2.value = "";
    inputText3.style.display = "none";
    input3.style.display = "none";
    // input3.value = "";
    inputText4.style.display = "none";
    input4.style.display = "none";
    // input4.value = "";
    inputText5.style.display = "none";
    input5.style.display = "none";
    // input5.value = "";
    inputText6.style.display = "none";
    input6.style.display = "none";
    // input6.value = "";
    input6.style.width = "266px";
    inputLab.forEach((a)=> {
      a.style.display = "none";
    })
    bigRezerv.textContent = "Rezervasiya ləğv edildi";
  }

    
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





