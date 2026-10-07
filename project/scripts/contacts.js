// Contact form
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", () => {
        
    const name = document.querySelector("#name").value;
    
        localStorage.setItem("recycleContactName", name);  
  });
}