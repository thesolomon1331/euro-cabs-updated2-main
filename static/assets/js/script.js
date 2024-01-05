const showBtn = document.querySelector(".btn-bars"),
  closeBtn = document.querySelector(".btn-close"),
  navMenu = document.querySelector(".navbar-collapse");
navbar = document.querySelector(".navbar");

showBtn.addEventListener("click", () => {
  navMenu.classList.add("showMenu");
});
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("showMenu");
});

navMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navMenu.classList.remove("showMenu");
  }
});

// modal code

// var setupModal = () => {
//   document.addEventListener("DOMContentLoaded", function () {
//     var modal = document.getElementById("myModal");
//     var btns = document.querySelectorAll(".openModalBtn"); // Select multiple buttons

//     var span = document.getElementsByClassName("close-btn")[0];

//     btns.forEach(function (btn) {
//       btn.onclick = function () {
//         modal.style.display = "block";
//       };
//     });

//     span.onclick = function () {
//       modal.style.display = "none";
//     };

//     window.onclick = function (event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     };

//     var cityItems = document.querySelectorAll("#cityList li");
//     cityItems.forEach(function (item) {
//       item.addEventListener("click", function () {
//         var link = item.getAttribute("data-link");
//         window.location.href = link;
//       });
//     });
//   });
// };

// setupModal();

// var button1 = document.getElementById("openModalBtn-1");
// var button2 = document.getElementById("openModalBtn-responsive");
// var button3 = document.getElementById("openModalBtn-nav");

// button1.addEventListener("click", setupModal);
// button2.addEventListener("click", setupModal);

// city information

// document.addEventListener("DOMContentLoaded", function () {
//   const icons = document.querySelectorAll(".rotate-icon");
//   icons.forEach((icon) => {
//     icon.addEventListener("click", function () {
//       this.classList.toggle("rotated");

//       // Reset the rotation after a delay (e.g., 1 second)
//       setTimeout(() => {
//         this.classList.remove("rotated");
//       }, 1000);
//     });
//   });
// });

function displayInfo(city) {
  var cityInfo = {
    LHR: {
      Baldock: { DayCharges: "105", NightCharges: "115" },
      Letchworth: { DayCharges: "105", NightCharges: "115" },
      Hitchin: { DayCharges: "105", NightCharges: "115" },
      Henlow: { DayCharges: "115", NightCharges: "120" },
      LangfordHanxworth: { DayCharges: "115", NightCharges: "120" },
      Ashwell: { DayCharges: "105", NightCharges: "115" },
      StotfoldArlserFairfeild: { DayCharges: "105", NightCharges: "115" },
      Biggleswade: { DayCharges: "120", NightCharges: "125" },
      Shefford: { DayCharges: "115", NightCharges: "120" },
      Royston: { DayCharges: "120", NightCharges: "130" },
      LowerStondon: { DayCharges: "110", NightCharges: "115" },
    },
    LTN: {
      Baldock: { DayCharges: "42", NightCharges: "52" },
      Letchworth: { DayCharges: "40", NightCharges: "50" },
      Hitchin: { DayCharges: "40", NightCharges: "50" },
      Henlow: { DayCharges: "50", NightCharges: "55" },
      Langford: { DayCharges: "50", NightCharges: "55" },
      Ashwell: { DayCharges: "50", NightCharges: "55" },
      StotfoldArlserFairfeild: { DayCharges: "42", NightCharges: "52" },
      Biggleswade: { DayCharges: "59", NightCharges: "59" },
      Shefford: { DayCharges: "50", NightCharges: "55" },
      Royston: { DayCharges: "59", NightCharges: "65" },
      LowerStondon: { DayCharges: "45", NightCharges: "52" },
    },
    LGW: {
      Baldock: { DayCharges: "160", NightCharges: "160" },
      Letchworth: { DayCharges: "160", NightCharges: "160" },
      Hitchin: { DayCharges: "160", NightCharges: "160" },
      Henlow: { DayCharges: "160", NightCharges: "170" },
      LangfordHanxworth: { DayCharges: "160", NightCharges: "170" },
      Ashwell: { DayCharges: "160", NightCharges: "170" },
      StotfoldArlserFairfeild: { DayCharges: "160", NightCharges: "160" },
      Biggleswade: { DayCharges: "160", NightCharges: "170" },
      Shefford: { DayCharges: "160", NightCharges: "170" },
      Royston: { DayCharges: "160", NightCharges: "170" },
      LowerStondon: { DayCharges: "160", NightCharges: "170" },
    },
    STD: {
      Baldock: { DayCharges: "77", NightCharges: "87" },
      Letchworth: { DayCharges: "77", NightCharges: "87" },
      Hitchin: { DayCharges: "77", NightCharges: "87" },
      Henlow: { DayCharges: "87", NightCharges: "92" },
      LangfordHanxworth: { DayCharges: "87", NightCharges: "87" },
      Ashwell: { DayCharges: "77", NightCharges: "87" },
      StotfoldArlserFairfeild: { DayCharges: "77", NightCharges: "87" },
      Biggleswade: { DayCharges: "97", NightCharges: "97" },
      Shefford: { DayCharges: "87", NightCharges: "92" },
      Royston: { DayCharges: "97", NightCharges: "97" },
      LowerStondon: { DayCharges: "87", NightCharges: "87" },
    },
    LCY: {
      Baldock: { DayCharges: "120", NightCharges: "125" },
      Letchworth: { DayCharges: "120", NightCharges: "125" },
      Hitchin: { DayCharges: "120", NightCharges: "125" },
      Henlow: { DayCharges: "120", NightCharges: "125" },
      LangfordHanxworth: { DayCharges: "120", NightCharges: "125" },
      Ashwell: { DayCharges: "120", NightCharges: "125" },
      StotfoldArlserFairfeild: { DayCharges: "120", NightCharges: "125" },
      Biggleswade: { DayCharges: "120", NightCharges: "125" },
      Shefford: { DayCharges: "120", NightCharges: "125" },
      Royston: { DayCharges: "120", NightCharges: "125" },
      LowerStondon: { DayCharges: "120", NightCharges: "125" },
    },
  };

  var cityData = cityInfo[city];
  var table =
    "<table style='border-collapse: collapse; width: 100%; box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;'>";
  table +=
    "<tr><th style='border: 1px solid #000; padding: 8px;'>Cities</th><th style='border: 1px solid #000; padding: 8px;'>Day Charges Time : (6am-11:59pm)</th><th style='border: 1px solid #000; padding: 8px;'>Night Charges Time : (12am-5:59am)</th></tr>";
  for (var key in cityData) {
    table +=
      "<tr><td style='border: 1px solid #000; padding: 8px;'>" +
      key +
      "</td><td style='border: 1px solid #000; padding: 8px;'>" +
      cityData[key].DayCharges +
      "</td><td style='border: 1px solid #000; padding: 8px;'>" +
      cityData[key].NightCharges +
      "</td></tr>";
  }
  table += "</table>";

  var screenWidth = window.screen.width;
  var popupWidth = 900;
  var popupHeight = 550;
  var left = (screenWidth - popupWidth) / 2;

  var popup = window.open(
    "",
    "City Charges",
    "width=" +
      popupWidth +
      ", height=" +
      popupHeight +
      ", left=" +
      left +
      ", top=0"
  );
  popup.document.write(
    "<html><head><title>" +
      city +
      " Charges</title></head><body style='font-family: Montserrat, sans-serif; padding: 20px;'>"
  );
  popup.document.write("<h2>" + city + " Charges</h2>");
  popup.document.write(table);
  popup.document.write("</body></html>");
  popup.document.close();
}

// form js

function showOther() {
  var select = document.getElementById("complaintRegarding");
  var otherDiv = document.getElementById("com");

  if (select.value === "other") {
    otherDiv.style.display = "block";
  } else {
    otherDiv.style.display = "none";
  }
}

// faq section
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// form js

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// back to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// GSAP Animations

gsap.from("#nav-logo, #nav-elements a", {
  y: -50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.4,
  scrub: 5,
});

gsap.from(
  ".left h3, .left p, .left span, #booking-btn, #download-btn, .openModalBtn",
  {
    y: 50,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrub: 5,
  }
);

gsap.from("#btn", {
  delay: 0.1,
  opacity: -100,
});

gsap.from(".right img", {
  x: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5,
  scrub: 5,
});

// gsap.from(".site-name, .nav-item", {
//   opacity: 0,
//   duration: 2,
//   delay: 2,
//   y: -200,
//   stagger: 0.2,
// });

// second-section animation
gsap.from(".input-field, .airport-booking",  {
  opacity: 0,
  duration: 2,
  delay: 2,
  overflow: "hidden",
  y: 150,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#table-container",
    scroll: "body",
    start: "top 60%",
    end: "top bottom",
    scrub: 5,
  },
});

// Third section animation
gsap.from(".service-item", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 100,
  // stagger: 0.5,
  scrollTrigger: {
    trigger: ".service-item",
    scroll: "body",
    start: "top 70%",
    end: " bottom 30%",
    scrub: 5,
  },
});

// about section
gsap.from(".para, #map", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 200,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#about-container",
    scroll: "body",
    start: "top 85%",
    end: " bottom 15%",
    scrub: 5,
  },
});

gsap.from("#deals-section", {
  opacity: 0,
  duration: 2,
  delay: 2,
  y: 200,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#deals-section",
    scroll: "body",
    start: "top 85%",
    end: " bottom 15%",
    scrub: 5,
  },
});

gsap.from(".accordion-item", {
  opacity: 0,
  duration: 2,
  delay: 2,
  y: 150,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".accordion-item", // .accordion
    scroll: "body",
    start: "top 90%",
    end: " bottom 15%",
    scrub: 5,
  },
});

// gsap.from('.accordion, accordion-content, .accordion-item', {
//   opacity: 0,
//   duration: 2,
//   delay: 2,
//   y: 300,
//   stagger:0.2,
//   scrollTrigger: {
//     trigger:".accordion, accordion-content, .accordion-item",
//     scroll:"body",
// 		start: "top 85%",
// 		end: " bottom 15%",
//     scrub:5,
//   }
// })

// gsap.from("#price-section, .pricing-table", {
//   opacity: 0,
//   duration: 2,
//   delay: 2,
//   y: 200,
//   stagger: 0.5,
//   scrollTrigger: {
//     trigger: "#price-section",
//     scroll: "body",
//     start: "top 85%",
//     end: " bottom 15%",
//     scrub: 5,
//   },
// });

gsap.from(".complaints-form, .form-group, .Complaint-heading", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 100,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".complaints-form, .form-group, .Complaint-heading",
    scroll: "body",
    start: "top 85%",
    end: " bottom 15%",
    scrub: 5,
  },
});

gsap.from(".footer-section, .footer", {
  duration: 2,
  delay: 3,
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

// gsap.from('.navbar .nav_item', {opacity: 0, duration: 1, delay: 2.1, y:30, stagger: 0.2})

// gsap.from('.title', {opacity: 0, duration: 1, delay: 1.6, y:30})
// gsap.from('.description', {opacity: 0, duration: 1, delay: 1.8, y:30})
// gsap.from('.btn', {opacity: 0, duration: 1, delay: 2.1, y:30})
// gsap.from('.image', {opacity: 0, duration: 1, delay: 2.6, y:30})
