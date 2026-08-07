/*==================================================
    SAMDEV NETWORK PORTFOLIO
    app.js
==================================================*/

/*==============================
INITIALIZE AOS
==============================*/
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/*==============================
PRELOADER
==============================*/
window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 800);

});


/*==============================
TYPING EFFECT
==============================*/

new Typed("#typing", {

    strings: [

        "Software Developer",

        "Hardware Engineer",

        "ICT Instructor",

        "Web Designer",

        "Python Programmer",

        "Laptop Repair Specialist",

        "Graphic Designer",

        "Technology Consultant"

    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1500,

    loop: true

});


/*==============================
ANIMATED COUNTER
==============================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = Number(counter.getAttribute("data-target")) || Number(counter.innerText);

        const finalValue = target === 0
            ? Number(counter.textContent)
            : target;

        const current = Number(counter.innerText);

        const increment = Math.ceil(finalValue / 100);

        if(current < finalValue){

            counter.innerText = current + increment;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = finalValue;

        }

    }

    if(counter.dataset.target){

        updateCounter();

    }

});


/*==============================
STICKY NAVIGATION
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 100){

        header.style.background="rgba(2,6,23,.95)";

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        header.style.background="rgba(10,25,47,.7)";

        header.style.boxShadow="none";

    }

});


/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const body = document.body;

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("show");
        body.classList.toggle("menu-open");

    });

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("show");
            body.classList.remove("menu-open");

        });

    });

}


/*==============================
SMOOTH SCROLL
==============================*/

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


/*==============================
BACK TO TOP BUTTON
==============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="<i class='fas fa-arrow-up'></i>";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("active");

    }

    else{

        topBtn.classList.remove("active");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/*==============================
SCROLL PROGRESS BAR
==============================*/

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    let totalHeight=document.body.scrollHeight-window.innerHeight;

    let progressHeight=(window.pageYOffset/totalHeight)*100;

    progress.style.width=progressHeight+"%";

});


/*==============================
ACTIVE NAV LINK
==============================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*==============================
FLOATING PARTICLES
==============================*/

/* Removed particle background dots */


/*==============================
IMAGE HOVER EFFECT
==============================*/

const profile=document.querySelector(".hero-image img");

if(profile){

profile.addEventListener("mousemove",(e)=>{

profile.style.transform="rotateY(10deg) rotateX(8deg)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="rotateY(0) rotateX(0)";

});

}


/*==============================
BUTTON RIPPLE EFFECT
==============================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.classList.add("ripple");

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});


/*==============================
WELCOME MESSAGE
==============================*/

setTimeout(()=>{

console.log("Welcome to SAMDEV NETWORK Portfolio");

},1000);


/*==============================
CURRENT YEAR
==============================*/

const year=document.querySelector(".year");

if(year){

year.innerHTML=new Date().getFullYear();

}
/* Close Mobile Navigation Menu on Link Click */
navItems.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
        }
    });
});

/*==============================
DARK / LIGHT MODE TOGGLE
==============================*/
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
    });
}

/*==============================
INTERACTIVE CONTACT FORM
==============================*/
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });
}

/*==============================
3D TILT MOUSE PARALLAX EFFECT
==============================*/
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0)`;
    });
});

/*==============================
END
==============================*/
