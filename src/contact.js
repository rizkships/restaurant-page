// contact.js

export function loadContactPage() {
    const contentDiv = document.getElementById('content');
  
    // Create and append elements for the contact page
    const contactSection = document.createElement('div');
    contactSection.textContent = 'This is the Contact Page';
  
    // Clear existing content and append contact page
    contentDiv.innerHTML = '';
    contentDiv.appendChild(contactSection);
  }
  

