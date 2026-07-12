/* ==========================================
   ALIGNLOG.COM PREMIUM v3.0
   script.js
========================================== */

// Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }
    }, 700);
});

// Counter Animation
function animateCounter(id, endValue, prefix = "", suffix = "") {
    const el = document.getElementById(id);
    if (!el) return;

    let current = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);

    function update() {
        current += increment;

        if (current >= endValue) {
            current = endValue;
        }

        el.innerHTML = prefix + Math.floor(current) + suffix;

        if (current < endValue) {
            requestAnimationFrame(update);
        }
    }

    update();
}

window.addEventListener("load", () => {

    animateCounter("counter1", 120, "", "+");

    animateCounter("counter2", 8);

    animateCounter("counter3", 1200, "$");

});

// Reveal Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".feature-card,.industry-card,.stat-card,.faq-item,.country")
.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .7s ease";

    observer.observe(card);

});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollBtn.style.display = "flex";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// Particle Background
if (typeof particlesJS !== "undefined") {

particlesJS("particles-js", {

"particles":{

"number":{"value":55},

"color":{"value":"#06B6D4"},

"shape":{"type":"circle"},

"opacity":{"value":0.25},

"size":{"value":3},

"line_linked":{

"enable":true,

"distance":150,

"color":"#4F46E5",

"opacity":0.15,

"width":1

},

"move":{

"enable":true,

"speed":1.5

}

},

"interactivity":{

"events":{

"onhover":{

"enable":true,

"mode":"grab"

}

}

},

"retina_detect":true

});

}
// =====================================
// ALIGNLOG PREMIUM 3D GLOBAL MAP
// =====================================

const globeElement = document.getElementById("globeViz");

if (globeElement) {

const locations = [

{
name:"India",
lat:28.6139,
lng:77.2090
},

{
name:"United States",
lat:38.9072,
lng:-77.0369
},

{
name:"United Kingdom",
lat:51.5072,
lng:-0.1276
},

{
name:"Germany",
lat:52.5200,
lng:13.4050
},

{
name:"Singapore",
lat:1.3521,
lng:103.8198
},

{
name:"Australia",
lat:-33.8688,
lng:151.2093
},

{
name:"Canada",
lat:43.6532,
lng:-79.3832
}

];


// Flight routes

const routes=[

{
startLat:28.6139,
startLng:77.2090,
endLat:38.9072,
endLng:-77.0369
},

{
startLat:28.6139,
startLng:77.2090,
endLat:51.5072,
endLng:-0.1276
},

{
startLat:28.6139,
startLng:77.2090,
endLat:52.5200,
endLng:13.4050
},

{
startLat:28.6139,
startLng:77.2090,
endLat:1.3521,
endLng:103.8198
},

{
startLat:28.6139,
startLng:77.2090,
endLat:-33.8688,
endLng:151.2093
}

];


// Create Globe

const globe = Globe()(globeElement)

.globeImageUrl(
"https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
)

.bumpImageUrl(
"https://unpkg.com/three-globe/example/img/earth-topology.png"
)

.backgroundColor(
"rgba(0,0,0,0)"
)

.pointsData(locations)

.pointLat("lat")

.pointLng("lng")

.pointColor(()=>"#06B6D4")

.pointAltitude(0.12)

.pointRadius(0.45)

.pointLabel("name")

.arcsData(routes)

.arcColor(()=>"#06B6D4")

.arcAltitude(0.25)

.arcStroke(1)

.arcDashLength(0.5)

.arcDashGap(3)

.arcDashAnimateTime(2500);


// Globe size

globe.width(globeElement.clientWidth);

globe.height(globeElement.clientHeight);


// Rotation

globe.controls().autoRotate=true;

globe.controls().autoRotateSpeed=0.5;


// Lighting

const scene = globe.scene();

scene.add(
new THREE.AmbientLight(0xffffff,1.8)
);


// Responsive

window.addEventListener("resize",()=>{

globe.width(globeElement.clientWidth);

globe.height(globeElement.clientHeight);

});

}
