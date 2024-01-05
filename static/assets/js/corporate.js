const showBtn = document.querySelector(".btn-bars"),
  closeBtn = document.querySelector(".btn-close"),
  navMenu = document.querySelector(".navbar-collapse");
showBtn.addEventListener("click", () => {
  navMenu.classList.add("showMenu");
});
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("showMenu");
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

gsap.from(".navbar", {
  y: -50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
});

gsap.from(".corporate-section, corporate-info", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 50,
});

gsap.from(".footer-section, .footer", {
  duration: 1,
  delay: 1,
  scale: 1,
  y: 100,
  overflow: "hidden",
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".footer-section, .footer",
    scroll: "body",
    start: "top 85%",
    end: " bottom 15%",
    scrub: 5,
  },
});
