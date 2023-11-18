// home.js
//import './styles.css'

function createHeaderAndMenu() {
    const header = document.createElement('header');
    header.classList.add('w-full', 'mt-5');
  
    const nav = document.createElement('nav');
    nav.classList.add('flex', 'items-center', 'justify-between', 'mx-auto');
  
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('ml-5');
  
    const logoSpan = document.createElement('span');
    logoSpan.classList.add('font-extrabold', 'text-green');
    logoSpan.textContent = 'Nutri';
  
    logoDiv.appendChild(logoSpan);
    nav.appendChild(logoDiv);
  
    // Navigation Menu
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('nav-menu', 'px-4', 'py-2');
  
    const menuList = document.createElement('ul');
    menuList.classList.add('flex', 'items-center', 'gap-[4vw]', 'text-black');
  
    const menuItems = ['Home', 'Menu', 'Contact'];
  
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
  
    const signUpButton = document.createElement('div');
    signUpButton.classList.add('mr-5');
  
    const signUpBtn = document.createElement('button');
    signUpBtn.classList.add('bg-[#16a34a]', 'border', 'text-white', 'px-5', 'py-2', 'rounded-lg', 'transform', 'scale-100', 'hover:scale-105', 'transition-transform');
    signUpBtn.textContent = 'Sign Up';
  
    signUpButton.appendChild(signUpBtn);
    nav.appendChild(signUpButton);
  
    header.appendChild(nav);

    return header;
}



export function loadHomePage() {
    const contentDiv = document.getElementById('content');
  
    if (!headerAndMenu) {
        headerAndMenu = createHeaderAndMenu();
        contentDiv.innerHTML = '';
        contentDiv.appendChild(headerAndMenu);
    }

  
    // Hero Section
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero', 'flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'my-24');
  
    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content', 'text-left', 'lg:w-1/2', 'lg:pr-5', 'lg:pl-5', 'mx-5');
  
    const h1 = document.createElement('h1');
    h1.classList.add('text-4xl', 'lg:text-5xl', 'xl:text-6xl', 'font-bold');
    h1.textContent = 'Healthy. Delicious. Fast.';
  
    const p = document.createElement('p');
    p.classList.add('text-base', 'lg:text-lg', 'xl:text-xl', 'mt-4');
    p.textContent = "Satisfy your cravings with our app's pure and high-quality food options. Order now for a delicious and healthy meal.";
  
    const orderNowBtn = document.createElement('button');
    orderNowBtn.classList.add('my-2', 'bg-[#16a34a]', 'border', 'text-white', 'px-5', 'py-2', 'rounded-lg', 'transform', 'scale-100', 'hover:scale-105', 'transition-transform');
    orderNowBtn.textContent = 'Order Now';
  
    const exploreMoreBtn = document.createElement('button');
    exploreMoreBtn.classList.add('my-2', 'bg-[#16a34a]', 'border', 'text-white', 'px-5', 'py-2', 'rounded-lg', 'transform', 'scale-100', 'hover:scale-105', 'transition-transform');
    exploreMoreBtn.textContent = 'Explore More';
  
    heroContent.appendChild(h1);
    heroContent.appendChild(p);
    heroContent.appendChild(orderNowBtn);
    heroContent.appendChild(exploreMoreBtn);
  
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('lg:w-1/2', 'mx-5');
  
    const img = document.createElement('img');
    img.src = '../images/food.jpg';
  
    imageDiv.appendChild(img);
  
    heroSection.appendChild(heroContent);
    heroSection.appendChild(imageDiv);
  
    // Append to the content div
    contentDiv.appendChild(header);
    contentDiv.appendChild(heroSection);

      // Load the navigation menu at the end
  //loadNavigationMenu();  // not defined
  }
  
/*
// Header
const header = document.createElement('header');
header.classList.add('w-full', 'mt-5');

const nav = document.createElement('nav');
nav.classList.add('flex', 'items-center', 'justify-between', 'mx-auto');

const logoDiv = document.createElement('div');
logoDiv.classList.add('ml-5');

const logoSpan = document.createElement('span');
logoSpan.classList.add('font-extrabold', 'text-green');
logoSpan.textContent = 'Nutri';

logoDiv.appendChild(logoSpan);
nav.appendChild(logoDiv);

const menuDiv = document.createElement('div');
menuDiv.classList.add('nav-menu', 'px-4', 'py-2');

const menuList = document.createElement('ul');
menuList.classList.add('flex', 'items-center', 'gap-[4vw]', 'text-black');

const menuItems = ['Home', 'Menu', 'Contact'];

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

const signUpButton = document.createElement('div');
signUpButton.classList.add('mr-5');

const signUpBtn = document.createElement('button');
signUpBtn.classList.add('bg-[#16a34a]', 'border', 'text-white', 'px-5', 'py-2', 'rounded-lg', 'transform', 'scale-100', 'hover:scale-105', 'transition-transform');
signUpBtn.textContent = 'Sign Up';

signUpButton.appendChild(signUpBtn);
nav.appendChild(signUpButton);

header.appendChild(nav);

*/