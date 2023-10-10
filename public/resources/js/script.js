const showMenu = (toggleId, navId) => {
  const toggle = document.querySelector(toggleId);
  const nav    = document.querySelector(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("#nav__toggle", "#nav__menu");




const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.querySelector("#nav__menu");

  navMenu.classList.remove("show-menu");
};
navLink.forEach(n => n.addEventListener("click", linkAction));




const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop    = section.offsetTop - 50;

    const sectionId     = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href *= ${sectionId}]`).classList.add("active-link");
    } else {
      document.querySelector(`.nav__menu a[href *= ${sectionId}]`).classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);




const changeThemeBtn = document.querySelector("#change-theme");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme)
  ? "dark"
  : "light";
const getCurrentIcon = () => changeThemeBtn.classList.contains(iconTheme)
  ? "bx-moon"
  : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark"
    ? "add"
    : "remove"](darkTheme);
  changeThemeBtn.classList[selectedIcon === "bx-moon"
    ? "add"
    : "remove"](iconTheme);
}
changeThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  changeThemeBtn.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});




const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: "true"
});
sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .footer__content`,
{
  interval: 150
});