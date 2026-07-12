// ==========================
// ALIGNLOG.COM PREMIUM JS
// Part 1
// ==========================

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 60){

header.style.background="rgba(5,8,22,.92)";
header.style.backdropFilter="blur(20px)";
header.style.boxShadow="0 12px 40px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(5,8,22,.55)";
header.style.boxShadow="none";

}

});


// Fade Up Animation

const fadeElements=document.querySelectorAll(

".feature-card,.industry,.stat-box,.glass-card,.contact-card"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

fadeElements.forEach(item=>{

item.classList.add("fade-up");

observer.observe(item);

});


// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// Hero Mouse Parallax

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

if(hero){

hero.style.transform=`translate(${x}px,${y}px)`;

}

});

  // ==========================
// ALIGNLOG.COM PREMIUM JS
// Part 2 (Final)
// ==========================

// Loading Animation

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s ease";
document.body.style.opacity="1";

},100);

});

// Floating Animation

document.querySelectorAll(".glass-card,.feature-card").forEach((card,index)=>{

card.animate([

{transform:"translateY(0px)"},
{transform:"translateY(-10px)"},
{transform:"translateY(0px)"}

],{

duration:4000+(index*300),

iterations:Infinity,

easing:"ease-in-out"

});

});

// Button Ripple Effect

document.querySelectorAll(".primary,.secondary,.header-btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.35)";
ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";
ripple.style.pointerEvents="none";
ripple.style.transform="scale(0)";
ripple.style.transition="transform .6s ease, opacity .6s ease";

this.style.position="relative";
this.style.overflow="hidden";

this.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(4)";
ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},600);

});

});

// Scroll To Top Button

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.style.position="fixed";
topButton.style.bottom="100px";
topButton.style.right="25px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.cursor="pointer";
topButton.style.fontSize="22px";
topButton.style.background="#4ea8ff";
topButton.style.color="#fff";
topButton.style.display="none";
topButton.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";
topButton.style.zIndex="999";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Footer Year

const footerText=document.querySelector("footer p");

if(footerText){

footerText.innerHTML=`© ${new Date().getFullYear()} AlignLog.com • Premium Domain Available for Acquisition`;

}

console.log("AlignLog Premium Landing Page Loaded Successfully");
const counter=document.getElementById("counter");

let value=0;

const target=250000;

const interval=setInterval(()=>{

value+=5000;

counter.innerHTML="$"+value.toLocaleString();

if(value>=target){

counter.innerHTML="$250,000+";

clearInterval(interval);

}

},30);
const map = L.map('world-map').setView([25, 15], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© OpenStreetMap contributors'
}).addTo(map);

const buyers = [

["United States",37.0902,-95.7129],

["Canada",56.1304,-106.3468],

["United Kingdom",55.3781,-3.4360],

["Germany",51.1657,10.4515],

["Singapore",1.3521,103.8198],

["Australia",-25.2744,133.7751],

["India",20.5937,78.9629]

];

buyers.forEach(country=>{

L.marker([country[1],country[2]])
.addTo(map)
.bindPopup("<b>"+country[0]+"</b><br>Potential Buyer Market");

});
