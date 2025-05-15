// Wait until the DOM content has loaded
document.addEventListener('DOMContentLoaded', function () {
    // Update the copyright year dynamically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      const currentYear = new Date().getFullYear();
      yearSpan.textContent = currentYear;
    }
  
    // Append last modified date to footer
    const footer = document.querySelector('footer');
    if (footer) {
      const lastModifiedParagraph = document.createElement('p');
      lastModifiedParagraph.textContent = 'Last Modified: ' + document.lastModified;
      lastModifiedParagraph.style.fontSize = '0.75rem';
      lastModifiedParagraph.style.color = '#777777';
      lastModifiedParagraph.style.marginTop = '0.25rem';
      footer.appendChild(lastModifiedParagraph);
    }
  
    // Navigation hamburger toggle
    const hamburgerButton = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
  
    if (hamburgerButton && navMenu) {
      hamburgerButton.addEventListener('click', function () {
        // Toggle nav visibility class
        navMenu.classList.toggle('show');
  
        // Check new state of aria-expanded
        const expanded = navMenu.classList.contains('show');
  
        // Toggle aria-expanded attribute for accessibility
        hamburgerButton.setAttribute('aria-expanded', String(expanded));
  
        // Toggle icon between ☰ and ✖
        hamburgerButton.textContent = expanded ? '✖' : '☰';
      });
    }
  });
  