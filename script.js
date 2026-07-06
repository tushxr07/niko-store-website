function scrollToProducts(){

document.getElementById("products").scrollIntoView({

behavior:"smooth"

});

}

window.addEventListener("scroll",()=>{

document.querySelectorAll(".feature-card,.product-card,.faq-item").forEach(el=>{

const rect=el.getBoundingClientRect();

if(rect.top<window.innerHeight-100){

el.style.opacity="1";

el.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".feature-card,.product-card,.faq-item").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".6s";

});