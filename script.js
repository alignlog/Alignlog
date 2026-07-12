/* ======================================
   ALIGNLOG PREMIUM JAVASCRIPT
====================================== */

// Hide loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});


// Smooth fade animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section,.card,.sale-box").forEach(el=>{
observer.observe(el);
});


// Navbar background while scrolling

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>100){

nav.style.background="rgba(8,8,8,.85)";
nav.style.backdropFilter="blur(25px)";
nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(255,255,255,.05)";
nav.style.boxShadow="none";

}

});


// Hero Parallax

const hero=document.querySelector("header");

window.addEventListener("scroll",()=>{

const y=window.pageYOffset;

hero.style.backgroundPosition="center "+(y*0.35)+"px";

});


// Floating Particles

const particles=60;

for(let i=0;i<particles;i++){

let p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(6+Math.random()*8)+"s";

p.style.animationDelay=Math.random()*5+"s";

p.style.opacity=Math.random();

document.body.appendChild(p);

}


// Mouse Glow Effect

document.addEventListener("mousemove",(e)=>{

let glow=document.getElementById("cursorGlow");

if(!glow){

glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

}

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
// Button Hover Animation

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px) scale(1.04)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});
