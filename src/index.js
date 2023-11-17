import { loadHomePage } from '../src/home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';
//import '../src/styles.css';


// Initial page load
document.addEventListener('DOMContentLoaded', () => {
  loadHomePage();
});

// Tab switching logic
const tabs = {
    home: loadHomePage,
    menu: loadMenuPage,
    contact: loadContactPage,
  };

  let currentPage = 'home';


  function navigateTo(page) {
    if (currentPage !== page) {
      tabs[page]();
      currentPage = page;
    }
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A' && target.getAttribute('href')) {
      const page = target.getAttribute('href').substring(1); // Remove the '#' character
      navigateTo(page);
    }
  });

/*
const homeTab = document.querySelector('a[href="#home"]');
const menuTab = document.querySelector('a[href="#menu"]');
const contactTab = document.querySelector('a[href="#contact"]');
*/






  /*
homeTab.addEventListener('click', () => {
    if (currentPage !== 'home') {
      loadHomePage();
      currentPage = 'home';
    }
  }); */

  /*
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
*/