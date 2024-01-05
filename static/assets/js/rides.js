const showBtn = document.querySelector(".btn-bars"),
  closeBtn = document.querySelector(".btn-close"),
  navMenu = document.querySelector(".navbar-collapse");
showBtn.addEventListener("click", () => {
  navMenu.classList.add("showMenu");
});
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("showMenu");
});

// gsap Animations

gsap.from(".navbar", {
  y: -50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
})

gsap.from(".video-content", {
  y: 50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.3,
})

gsap.from(".service-item, #service-heading", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 200,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".service-item, #service-heading",
    scroll: "body",
    start: "top auto",
    end: " bottom auto",
    scrub:true,
  },
});