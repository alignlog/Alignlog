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
