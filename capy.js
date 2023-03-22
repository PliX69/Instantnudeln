
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
