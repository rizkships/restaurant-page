// contact.js
//import './styles.css';


const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter address';
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text'
    phoneInput.placeholder = 'Enter phone';
    form.appendChild(phoneInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'submit';
    form.appendChild(submitButton);

    pageContent.appendChild(form);
    content.appendChild(pageContent);

}

export default createContactPage;




/*

export function loadContactPage() {
    const contentDiv = document.getElementById('content');
  
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
  
    // Contact Section
    const contactSection = document.createElement('div');
    contactSection.textContent = 'This is the Contact Page';
  
    // Clear existing content and append contact page
    contentDiv.innerHTML = '';
    contentDiv.appendChild(header);
    contentDiv.appendChild(contactSection);

    // Load the navigation menu at the end
    loadNavigationMenu();
}

/* old code 
export function loadContactPage() {
    const contentDiv = document.getElementById('content');
  
    // Create and append elements for the contact page
    const contactSection = document.createElement('div');
    contactSection.textContent = 'This is the Contact Page';
  
    // Clear existing content and append contact page
    contentDiv.innerHTML = '';
    contentDiv.appendChild(contactSection);

   // loadNavigationMenu(); 
  }
  

*/
