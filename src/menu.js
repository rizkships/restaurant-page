// menu.js

const createMenuPage = () => {
const content = document.querySelector('#content');
const pageContent = document.createElement('div');
pageContent.classList.add('page-content');


const heading = document.createElement('h1');
heading.textContent = 'Our Menu';

const menuList = document.createElement('ul');
const menuItem1 = document.createElement('li');
menuItem1.textContent = 'Steak';
menuList.appendChild(menuItem1)

pageContent.appendChild(heading);
pageContent.appendChild(menuList);
content.appendChild(pageContent);

}

export default createMenuPage














//import './styles.css';




// menu.js
/*
export function loadMenuPage() {
    const contentDiv = document.getElementById('content');
  
    // Only create and append header and menu if they don't exist
    if (!headerAndMenu) {
        headerAndMenu = createHeaderAndMenu();
        contentDiv.innerHTML = '';
        contentDiv.appendChild(headerAndMenu);
    }
  
    // Menu Section
    const menuSection = document.createElement('div');
    menuSection.textContent = 'This is the Menu Page';
  
    // Clear existing content and append menu page
    contentDiv.innerHTML = '';
   // contentDiv.appendChild(header);
    contentDiv.appendChild(menuSection);

    
}











 /* old code 
export function loadMenuPage() {
    const contentDiv = document.getElementById('content');
  
    // Create and append elements for the menu page
    const menuSection = document.createElement('div');
    menuSection.textContent = 'This is the Menu Page';
    
    // Navigation Menu
    /*
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('nav-menu', 'px-4', 'py-2');
  
    const menuList = document.createElement('ul');
    menuList.classList.add('flex', 'items-center', 'gap-[4vw]', 'text-black');
  
    const menuItems = ['Home', 'Menu', 'About Us', 'Contact'];
  
    menuItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.classList.add('text-black', 'hover:text-[#16a34a]', 'cursor-pointer');
      const anchor = document.createElement('a');
      anchor.setAttribute('href', `#${item.toLowerCase()}`)
      anchor.textContent = item;
      listItem.appendChild(anchor);
      menuList.appendChild(listItem);
    });
  
    menuDiv.appendChild(menuList);
    nav.appendChild(menuDiv);
    */
/*
    // Clear existing content and append menu page
    contentDiv.innerHTML = '';
    contentDiv.appendChild(menuSection);

   // loadNavigationMenu(); // error 

  }
  
*/
