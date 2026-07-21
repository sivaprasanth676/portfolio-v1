// =============================
// Scroll Reveal Animation
// =============================

const revealElements = document.querySelectorAll(
".who-i-am,.journey,.education,.expertise,.achievements,.values,.current-focus,.about-cta,.timeline-item,.expertise-card,.value-card,.achievement-card,.focus-item"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

revealElements.forEach(el=>observer.observe(el));