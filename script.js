// Smooth reveal animation
const revealElements = document.querySelectorAll(
".card,.stat,.about,.offer-box,.contact"
);

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});
},{
threshold:0.15
});

revealElements.forEach(el=>{
el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all 0.8s ease";
observer.observe(el);
});

// Header background on scroll
const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){
header.style.background="rgba(0,0,0,0.80)";
header.style.backdropFilter="blur(20px)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";
}
else{
header.style.background="rgba(0,0,0,.35)";
header.style.boxShadow="none";
}

});

// Button hover glow
document.querySelectorAll(".primary").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{
btn.style.boxShadow="0 15px 35px rgba(62,166,255,.55)";
});

btn.addEventListener("mouseleave",()=>{
btn.style.boxShadow="none";
});

});

// Floating animation for statistics
document.querySelectorAll(".stat").forEach((card,index)=>{

card.style.animation=`float 4s ease-in-out ${index*0.3}s infinite`;

});

const style=document.createElement("style");

style.innerHTML=`
@keyframes float{
0%{transform:translateY(0px);}
50%{transform:translateY(-8px);}
100%{transform:translateY(0px);}
}
`;

document.head.appendChild(style);

// Current year in footer (optional)
const footer=document.querySelector("footer p");

if(footer){
footer.innerHTML=`© ${new Date().getFullYear()} AlignLog.com • Premium Domain Available for Acquisition`;
}
