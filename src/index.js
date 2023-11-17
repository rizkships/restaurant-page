import { loadHomePage } from '../src/home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';
//import '../src/styles.css';


// Initial page load
document.addEventListener('DOMContentLoaded', () => {
  loadHomePage();
});

// Tab switching logic
const homeTab = document.querySelector('a[href="#home"]');
const menuTab = document.querySelector('a[href="#menu"]');
const contactTab = document.querySelector('a[href="#contact"]');
let currentPage = 'home';


homeTab.addEventListener('click', () => {
    if (currentPage !== 'home') {
      loadHomePage();
      currentPage = 'home';
    }
  });

  menuTab.addEventListener('click', () => {
    if (currentPage !== 'menu') {
      loadMenuPage();
      currentPage = 'menu';
    }
  });
  

  contactTab.addEventListener('click', () => {
    if (currentPage !== 'contact') {
      loadContactPage();
      currentPage = 'contact';
    }
  });

console.log('tiz workin')
