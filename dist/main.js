(()=>{"use strict";function e(){const e=document.getElementById("content"),t=document.createElement("header");t.classList.add("w-full","mt-5");const n=document.createElement("nav");n.classList.add("flex","items-center","justify-between","mx-auto");const a=document.createElement("div");a.classList.add("ml-5");const d=document.createElement("span");d.classList.add("font-extrabold","text-green"),d.textContent="Nutri",a.appendChild(d),n.appendChild(a);const o=document.createElement("div");o.classList.add("nav-menu","px-4","py-2");const c=document.createElement("ul");c.classList.add("flex","items-center","gap-[4vw]","text-black"),["Home","Menu","About Us","Contact"].forEach((e=>{const t=document.createElement("li");t.classList.add("text-black","hover:text-[#16a34a]","cursor-pointer");const n=document.createElement("a");n.setAttribute("href",`#${e.toLowerCase()}`),n.textContent=e,t.appendChild(n),c.appendChild(t)})),o.appendChild(c),n.appendChild(o);const s=document.createElement("div");s.classList.add("mr-5");const l=document.createElement("button");l.classList.add("bg-[#16a34a]","border","text-white","px-5","py-2","rounded-lg","transform","scale-100","hover:scale-105","transition-transform"),l.textContent="Sign Up",s.appendChild(l),n.appendChild(s),t.appendChild(n);const r=document.createElement("div");r.classList.add("hero","flex","flex-col","lg:flex-row","items-center","justify-center","my-24");const i=document.createElement("div");i.classList.add("hero-content","text-left","lg:w-1/2","lg:pr-5","lg:pl-5","mx-5");const m=document.createElement("h1");m.classList.add("text-4xl","lg:text-5xl","xl:text-6xl","font-bold"),m.textContent="Healthy. Delicious. Fast.";const p=document.createElement("p");p.classList.add("text-base","lg:text-lg","xl:text-xl","mt-4"),p.textContent="Satisfy your cravings with our app's pure and high-quality food options. Order now for a delicious and healthy meal.";const u=document.createElement("button");u.classList.add("my-2","bg-[#16a34a]","border","text-white","px-5","py-2","rounded-lg","transform","scale-100","hover:scale-105","transition-transform"),u.textContent="Order Now";const h=document.createElement("button");h.classList.add("my-2","bg-[#16a34a]","border","text-white","px-5","py-2","rounded-lg","transform","scale-100","hover:scale-105","transition-transform"),h.textContent="Explore More",i.appendChild(m),i.appendChild(p),i.appendChild(u),i.appendChild(h);const x=document.createElement("div");x.classList.add("lg:w-1/2","mx-5");const C=document.createElement("img");C.src="../images/food.jpg",x.appendChild(C),r.appendChild(i),r.appendChild(x),e.appendChild(t),e.appendChild(r)}document.addEventListener("DOMContentLoaded",(()=>{e()}));const t={home:e,menu:function(){const e=document.getElementById("content"),t=document.createElement("div");t.textContent="This is the Menu Page";const n=document.createElement("div");n.classList.add("nav-menu","px-4","py-2");const a=document.createElement("ul");a.classList.add("flex","items-center","gap-[4vw]","text-black"),["Home","Menu","About Us","Contact"].forEach((e=>{const t=document.createElement("li");t.classList.add("text-black","hover:text-[#16a34a]","cursor-pointer");const n=document.createElement("a");n.setAttribute("href",`#${e.toLowerCase()}`),n.textContent=e,t.appendChild(n),a.appendChild(t)})),n.appendChild(a),nav.appendChild(n),e.innerHTML="",e.appendChild(t)},contact:function(){const e=document.getElementById("content"),t=document.createElement("div");t.textContent="This is the Contact Page",e.innerHTML="",e.appendChild(t)}};let n="home";document.addEventListener("click",(e=>{const a=e.target;var d;"A"===a.tagName&&a.getAttribute("href")&&(d=a.getAttribute("href").substring(1),n!==d&&(t[d](),n=d))}))})();