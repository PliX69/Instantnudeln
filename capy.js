// Get the navigation links
const navLinks = document.querySelectorAll("nav a");

// Add event listeners to each link to scroll to the appropriate section
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
