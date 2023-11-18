(()=>{"use strict";function e(){const e=document.getElementById("content");headerAndMenu||(headerAndMenu=function(){const e=document.createElement("header");e.classList.add("w-full","mt-5");const t=document.createElement("nav");t.classList.add("flex","items-center","justify-between","mx-auto");const n=document.createElement("div");n.classList.add("ml-5");const d=document.createElement("span");d.classList.add("font-extrabold","text-green"),d.textContent="Nutri",n.appendChild(d),t.appendChild(n);const a=document.createElement("div");a.classList.add("nav-menu","px-4","py-2");const c=document.createElement("ul");c.classList.add("flex","items-center","gap-[4vw]","text-black"),["Home","Menu","Contact"].forEach((e=>{const t=document.createElement("li");t.classList.add("text-black","hover:text-[#16a34a]","cursor-pointer");const n=document.createElement("a");n.setAttribute("href",`#${e.toLowerCase()}`),n.textContent=e,t.appendChild(n),c.appendChild(t)})),a.appendChild(c),t.appendChild(a);const o=document.createElement("div");o.classList.add("mr-5");const s=document.createElement("button");return s.classList.add("bg-[#16a34a]","border","text-white","px-5","py-2","rounded-lg","transform","scale-100","hover:scale-105","transition-transform"),s.textContent="Sign Up",o.appendChild(s),t.appendChild(o),e.appendChild(t),e}(),e.innerHTML="",e.appendChild(headerAndMenu));const t=document.createElement("div");t.classList.add("hero","flex","flex-col","lg:flex-row","items-center","justify-center","my-24");const n=document.createElement("div");n.classList.add("hero-content","text-left","lg:w-1/2","lg:pr-5","lg:pl-5","mx-5");const d=document.createElement("h1");d.classList.add("text-4xl","lg:text-5xl","xl:text-6xl","font-bold"),d.textContent="Healthy. Delicious. Fast.";const a=document.createElement("p");a.classList.add("text-base","lg:text-lg","xl:text-xl","mt-4"),a.textContent="Satisfy your cravings with our app's pure and high-quality food options. Order now for a delicious and healthy meal.";const c=document.createElement("button");c.classList.add("my-2","bg-[#16a34a]","border","text-white","px-5","py-2","rounded-lg","transform","scale-100","hover:scale-105","transition-transform"),c.textContent="Order Now";const o=document.createElement("button");o.classList.add("my-2","bg-[#16a34a]","border","text-white","px-5","py-2","rounded-lg","transform","scale-100","hover:scale-105","transition-transform"),o.textContent="Explore More",n.appendChild(d),n.appendChild(a),n.appendChild(c),n.appendChild(o);const s=document.createElement("div");s.classList.add("lg:w-1/2","mx-5");const l=document.createElement("img");l.src="../images/food.jpg",s.appendChild(l),t.appendChild(n),t.appendChild(s),e.appendChild(header),e.appendChild(t)}document.addEventListener("DOMContentLoaded",(()=>{e()}));const t={home:e,menu:function(){const e=document.getElementById("content");headerAndMenu||(headerAndMenu=createHeaderAndMenu(),e.innerHTML="",e.appendChild(headerAndMenu));const t=document.createElement("div");t.textContent="This is the Menu Page",e.innerHTML="",e.appendChild(t)},contact:function(){const e=document.getElementById("content"),t=document.createElement("header");t.classList.add("w-full","mt-5");const n=document.createElement("nav");n.classList.add("flex","items-center","justify-between","mx-auto");const d=document.createElement("div");d.classList.add("ml-5");const a=document.createElement("span");a.classList.add("font-extrabold","text-green"),a.textContent="Nutri",d.appendChild(a),n.appendChild(d);const c=document.createElement("div");c.classList.add("nav-menu","px-4","py-2");const o=document.createElement("ul");o.classList.add("flex","items-center","gap-[4vw]","text-black"),["Home","Menu","Contact"].forEach((e=>{const t=document.createElement("li");t.classList.add("text-black","hover:text-[#16a34a]","cursor-pointer");const n=document.createElement("a");n.setAttribute("href",`#${e.toLowerCase()}`),n.textContent=e,t.appendChild(n),o.appendChild(t)})),c.appendChild(o),n.appendChild(c);const s=document.createElement("div");s.classList.add("mr-5");const l=document.createElement("button");l.classList.add("bg-[#16a34a]","border","text-white","px-5","py-2","rounded-lg","transform","scale-100","hover:scale-105","transition-transform"),l.textContent="Sign Up",s.appendChild(l),n.appendChild(s),t.appendChild(n);const r=document.createElement("div");r.textContent="This is the Contact Page",e.innerHTML="",e.appendChild(t),e.appendChild(r),loadNavigationMenu()}};let n="home";document.addEventListener("click",(e=>{const d=e.target;var a;"A"===d.tagName&&d.getAttribute("href")&&(a=d.getAttribute("href").substring(1),n!==a&&(t[a](),n=a))}))})();