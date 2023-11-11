import "./styles.css";

import { createHeader } from './header.js';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';

console.log("JavaScript is running!");
// ... rest of your code


const contentContainer = document.getElementById('content');

function loadContent(module) {
    // Clear existing content
    contentContainer.innerHTML = '';
    // Append new content
    contentContainer.appendChild(module());
}

document.getElementById('homeTab').addEventListener('click')
