// menu.js

//import './styles.css';


export function loadMenuPage() {
    const contentDiv = document.getElementById('content');
  
    // Create and append elements for the menu page
    const menuSection = document.createElement('div');
    menuSection.textContent = 'This is the Menu Page';
  
    // Clear existing content and append menu page
    contentDiv.innerHTML = '';
    contentDiv.appendChild(menuSection);
  }
  
