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

export default createMenuPage;














