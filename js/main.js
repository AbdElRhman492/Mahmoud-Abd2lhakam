// =================================== Navbar ========================================
let navIcon = document.getElementById("navIcon");
let navMenu = document.getElementById("navMenu");
navIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// Add Active Class On Nav Link On Scroll
var sections = document.querySelectorAll("section");
onscroll = () => {
  var scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition < section.offsetTop + section.offsetHeight * 0.25
    ) {
      let currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
  function removeAllActiveClasses() {
    document.querySelectorAll("nav ul li a").forEach((el) => {
      el.classList.remove("active");
    });
  }
  function addActiveClass(id) {
    let selector = `nav ul li a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
  }
};

// ======================================== Portfolio Gallery =======================================
let switchers = document.querySelectorAll(".switches ul li");
let imgs = document.querySelectorAll(".gallery div");
switchers.forEach((li) => {
  li.addEventListener("click", changeActive);
  li.addEventListener("click", manageImgs);
});

function changeActive() {
  switchers.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.content).forEach((el) => {
    console.log(el);
    el.style.display = "block";
  });
}

window.scroll({
  behavior: "smooth",
});

let scrollToTop = document.getElementById("scroll-to-top");

scrollToTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
