const menubtn=document.querySelector(".menu-btn")
const close=document.querySelector(".close-btn")
const nav=document.querySelectorAll(".anchor a")
const btn=document.querySelectorAll(".btn a")

console.log("Select", nav);
menubtn.addEventListener("click", function(){
    document.body.classList.add("drawer-open")
});

function closeDrawer(){
    document.body.classList.remove("drawer-open")
}
close.addEventListener("click", closeDrawer)
nav.forEach((link) =>{
    link.addEventListener("click", closeDrawer)
})
btn.forEach((link) => {
    link.addEventListener("click", closeDrawer);
});




