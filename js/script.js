// =====================================
// ONE LAST CHANCE V4
// Clean Script
// PART 1
// =====================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },1500);

});

const envelope = document.getElementById("envelope");

const hero = document.getElementById("hero");

const letter = document.getElementById("letter");

const paper = document.getElementById("paperFull");

let opened = false;

envelope.addEventListener("click",()=>{

    if(opened) return;

    opened=true;

    document.body.classList.add("letter-mode");

    hero.classList.add("fade-away");

    envelope.classList.add("open");

    gsap.timeline()

    .to("#envelope",{

        scale:1.08,

        y:-20,

        duration:.4,

        ease:"power2.out"

    })

    .to("#envelope",{

        opacity:0,

        scale:.8,

        duration:.6

    })

    .call(()=>{

        letter.scrollIntoView({

            behavior:"smooth"

        });

    })

    .to("#paperFull",{

        opacity:1,

        scale:1,

        duration:1

    });

});
// =====================================
// Letter Animation
// =====================================

const paragraphs = document.querySelectorAll(".fade-item");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.25
});

paragraphs.forEach((p)=>{

    observer.observe(p);

});

// =====================================
// Mouse Glow
// =====================================

const glow = document.querySelector(".mouse-glow");

window.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});