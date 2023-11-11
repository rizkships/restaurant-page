import { loadHomePage } from './homepage';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';

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

