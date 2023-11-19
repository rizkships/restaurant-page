//index.js 

// import pageLoad from './pageLoad';
//pageLoad()

import initialLoad from './pageLoad.js';

initialLoad()






































/*
import { loadHomePage } from '../src/home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';

//import '../src/styles.css';

/* function loadNavigationMenu() {
    const contentDiv = document.getElementById('content');
  
    const navigationDiv = document.createElement('div');
    navigationDiv.classList.add('navigation-menu');
  
    const menuItems = ['Home', 'Menu', 'About Us', 'Contact'];
  
    const menuList = document.createElement('ul');
    menuList.classList.add('flex', 'items-center', 'gap-[4vw]', 'text-black');
  
    menuItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.classList.add('text-black', 'hover:text-[#16a34a]', 'cursor-pointer');
      const anchor = document.createElement('a');
      anchor.setAttribute('href', `#${item.toLowerCase().replace(' ', '-')}`);
      anchor.textContent = item;
      listItem.appendChild(anchor);
      menuList.appendChild(listItem);
    });
  
    navigationDiv.appendChild(menuList);
    
   
    contentDiv.appendChild(navigationDiv);
  } */
/*
// Initial page load
document.addEventListener('DOMContentLoaded', () => {
  loadHomePage(); 
 // loadNavigationMenu(); // not defined
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
      tabs[page](); // error?
      currentPage = page;
    //  loadNavigationMenu();
    }
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A' && target.getAttribute('href')) {
      const page = target.getAttribute('href').substring(1); // Remove the '#' character
      navigateTo(page); // error?
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
