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
let c = true;
let arrowIcon = document.querySelectorAll(".fa-play");
let lunchDiv = document.querySelector(".lunch-div");
arrowIcon.forEach((a) => {
  a.addEventListener("click", () => {
    if(c == true){
      a.style.transform = "rotate(90deg)";
      lunchDiv.classList.toggle("add-div");
      c = false;
    }else if(c == false){
        a.style.transform = "rotate(0deg)";
        lunchDiv.classList.toggle("add-div");
        c = true;
    }
})
})

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

let searchBarBtn = document.querySelectorAll(".search-bar-btn");
let menuSecArrow = document.querySelectorAll(".menu-arrow-hidden")

// searchBarBtn.forEach((a)=>{
//   a.addEventListener("click", () => {
//     document.getElementsByClassName("active-btn")[0].classList.remove("active-btn");
//     a.classList.add("active-btn");
//     // menuSecArrow.forEach((a)=>{
//     //   document.getElementsByClassName("menu-sec-arrow")[0].classList.remove("menu-sec-arrow");
//     //   a.classList.add("menu-sec-arrow");
//     // })
//   })
// })

let searchV;

let mealBigText = document.querySelectorAll("#meal-big-text");
let mealSmallText = document.querySelectorAll("#meal-small-text");
let searchI = document.querySelector("#search-i");
let searchBtn = document.querySelector("#search");
// searchBtn.addEventListener("click", ()=>{
//   searchV = searchI.value;
//   (mealSmallText,mealBigText).forEach((a,b)=>{
//     // mealBigText.forEach((b)=>{
//       if(a.innerHTML.toLowerCase().includes(searchV) && b.innerHTML.toLowerCase().includes(searchV)){
//         // console.log(a.innerHTML.toLowerCase().includes(searchV));
        
//       }
//     // })
//   })
  
    
  
// })











let mealsDiv = document.querySelectorAll(".meals-div"); 
let d = 0;
// let searchBarBtn = document.querySelectorAll(".search-bar-btn");
// searchBarBtn.forEach((a)=>{
//   a.addEventListener("click", () => {
//     document.getElementsByClassName("active-btn")[0].classList.remove("active-btn");
//     a.classList.add("active-btn");
//     mealsDiv.forEach((b)=>{

//         if(a.innerHTML.toLowerCase() == "bütün-təamlar"){
//           console.log(a.innerHTML);
//           b.classList.remove("hidden");
//           b.classList.add("show");
//         }else if(b.classList.contains(a.innerHTML.toLowerCase()) == false){
//           // console.log(a.innerHTML.toLowerCase());
//           b.classList.add("hidden");
//           b.classList.remove("show");
//         }else{
//             b.classList.remove("hidden")
//         }
        
          
            
          
//         })
//     })
//   })
  
  // searchBtn.addEventListener("click", ()=>{
  //   searchV = searchI.value.toLowerCase();
  //   mealBigText.forEach((b)=>{
  //   mealSmallText.forEach((e)=>{
  //       if(((e.innerHTML.toLowerCase().includes(searchV) == false) && (b.innerHTML.toLowerCase().includes(searchV) == false))){
  //         b.parentElement.classList.add("hidden");
  //         // e.parentElement.classList.add("hidden");
  //         b.parentElement.classList.remove("show");
  //         e.parentElement.classList.remove("show");
          
  //       }else if(((e.innerHTML.toLowerCase().includes(searchV) == true) && (b.innerHTML.toLowerCase().includes(searchV) == true))){
  //         b.parentElement.classList.remove("hidden"); 
  //         e.parentElement.classList.remove("hidden"); 
  //         b.parentElement.classList.add("show"); 
  //         e.parentElement.classList.add("show"); 
  //         }
  //      })
  //     })
  //   })
  // // })

  

    

    searchBarBtn.forEach((a)=>{
      a.addEventListener("click", () => {
        document.getElementsByClassName("active-btn")[0].classList.remove("active-btn");
        a.classList.add("active-btn");
        mealsDiv.forEach((b)=>{
    
            if(a.innerHTML.toLowerCase() == "bütün-təamlar"){
              console.log(a.innerHTML);
              b.classList.remove("hidden");
              b.classList.add("show");
            }else if(b.classList.contains(a.innerHTML.toLowerCase()) == false){
              // console.log(a.innerHTML.toLowerCase());
              b.classList.add("hidden");
              b.classList.remove("show");
            }else{
                b.classList.remove("hidden")
            }
            
              
                
              
            })
        })
      })




    searchBtn.addEventListener("click", () => {
      searchV = searchI.value.toLowerCase();
  
      mealBigText.forEach((b, index) => {
          const e = mealSmallText[index]; 
  
          const bigTextMatches = b.innerHTML.toLowerCase().includes(searchV);
          const smallTextMatches = e.innerHTML.toLowerCase().includes(searchV);
  
          if (!bigTextMatches && !smallTextMatches) {
              e.parentElement.classList.add("hidden");
              b.parentElement.classList.add("hidden");
              e.parentElement.classList.remove("show");
              b.parentElement.classList.remove("show");
          } else {
              e.parentElement.classList.remove("hidden");
              b.parentElement.classList.remove("hidden");
              e.parentElement.classList.add("show");
              b.parentElement.classList.add("show");
          }
      });
  });



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












// let mealImg = document.querySelectorAll("#meal-img");

// mealImg.forEach((b)=> {
//   b.addEventListener("click", ()=> {
//     mealsDiv.forEach((a)=> {
//       document.getElementsByClassName("meals-div")[0].classList.remove("meals-div");
//       a.classList.add("meals-div");
//       // a.classList.add("hop");
      
      
      
//     })
//   })
// })











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

