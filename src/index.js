import { loadHomePage } from '../src/home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';
 // import './styles.css';


// Initial page load
document.addEventListener('DOMContentLoaded', () => {
  loadHomePage();
});

// Tab switching logic
const homeTab = document.querySelector('a[href="#home"]');
const menuTab = document.querySelector('a[href="#menu"]');
const contactTab = document.querySelector('a[href="#contact"]');

homeTab.addEventListener('click', () => {
  loadHomePage();
});

menuTab.addEventListener('click', () => {
  loadMenuPage();
});

contactTab.addEventListener('click', () => {
  loadContactPage();
});

console.log('tiz workin')
