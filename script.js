document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click", e=>{
e.preventDefault()
document.querySelector(link.getAttribute("href"))
.scrollIntoView({behavior:"smooth"})
})
})

/* SLIDESHOW AUTOMÁTICO */
let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(()=>{
slides[i].classList.remove("active");
i = (i + 1) % slides.length;
slides[i].classList.add("active");
},4000);