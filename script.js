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
// ======================
// 3D GLOBE
// ======================

const globeContainer = document.getElementById("globeViz");

if (globeContainer && typeof Globe === "function") {

const cities = [
  { lat:38.9072, lng:-77.0369, size:0.35, color:"#06B6D4" },   // USA
  { lat:43.6532, lng:-79.3832, size:0.35, color:"#06B6D4" },   // Canada
  { lat:51.5072, lng:-0.1276, size:0.35, color:"#06B6D4" },    // UK
  { lat:52.5200, lng:13.4050, size:0.35, color:"#06B6D4" },    // Germany
  { lat:1.3521, lng:103.8198, size:0.35, color:"#06B6D4" },    // Singapore
  { lat:-33.8688, lng:151.2093, size:0.35, color:"#06B6D4" },  // Australia
  { lat:28.6139, lng:77.2090, size:0.35, color:"#06B6D4" }     // India
];

const arcs = [
  { startLat:28.6139, startLng:77.2090, endLat:38.9072, endLng:-77.0369 },
  { startLat:28.6139, startLng:77.2090, endLat:51.5072, endLng:-0.1276 },
  { startLat:28.6139, startLng:77.2090, endLat:52.5200, endLng:13.4050 },
  { startLat:28.6139, startLng:77.2090, endLat:43.6532, endLng:-79.3832 },
  { startLat:28.6139, startLng:77.2090, endLat:1.3521, endLng:103.8198 },
  { startLat:28.6139, startLng:77.2090, endLat:-33.8688, endLng:151.2093 }
];

const globe = Globe()(globeContainer)

.globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")

.bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")

.backgroundColor("rgba(0,0,0,0)")

.pointsData(cities)

.pointAltitude("size")

.pointRadius(0.35)

.pointColor("color")

.arcsData(arcs)

.arcColor(() => "#06B6D4")

.arcAltitude(0.25)

.arcStroke(0.8)

.arcDashLength(0.4)

.arcDashGap(2)

.arcDashAnimateTime(3000);

globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.6;

}
