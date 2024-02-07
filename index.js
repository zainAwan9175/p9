let navList=document.querySelector("#myId");
let hero=document.querySelector(".hero")
let manu=document.querySelector(".manu");
let ank=document.querySelectorAll(".ank");
let navbar=document.querySelector(".navo");



manu.addEventListener("click",()=>{
    if(navList.style.height=="50vh")
    {
        console.log("i am in if part")
        navList.style.height="0vh";
      
    }
    else{
        console.log("i am in else")
        navList.style.height="50vh";
    

    }
   
    
})
ank.forEach((e)=>{
    e.addEventListener("click",()=>{
        navList.style.height="0vh";

    })

})
let height=60
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>=height)
    {
        navbar.classList.add("coco")
    }
    else{
        navbar.classList.remove("coco")

    }
})
