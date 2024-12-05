import "./style.css";
import homepage from "./pages/homepage.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";

(function () {
  // First page load
  homepage();

  // Event listeners for buttons
  const nav = document.querySelector(".nav");
  const content = document.querySelector("#content");

  nav.addEventListener('click', (event) => {
    // Check if single button
    if(event.target.tagName === 'BUTTON') {
      content.textContent = ""
      switch(event.target.textContent) {
        case 'Home':
          homepage()
          break;
        case 'About':
          about();
          break;
        case 'Menu':
          menu();
          break
      }
    }
  });
})();