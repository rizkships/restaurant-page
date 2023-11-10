export function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav class="flex items-center justify-between mx-auto">
            <div class="ml-5">
                <span class="font-extrabold text-black">Nutri</span>
            </div>
            <div class="nav-menu px-4 py-2">
                <ul class="flex items-center gap-[4vw] text-black">
                    <li class="text-black hover:text-[#16a34a] cursor-pointer" id="homeTab">
                        <a>Home</a>
                    </li>
                    <li class="text-black hover:text-[#16a34a] cursor-pointer" id="menuTab">
                        <a>Menu</a>
                    </li>
                    <li class="text-black hover:text-[#16a34a] cursor-pointer" id="aboutTab">
                        <a>About Us</a>
                    </li>
                    <li class="text-black hover:text-[#16a34a] cursor-pointer" id="contactTab">
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div class="mr-5">
                <button class="bg-[#16a34a] border text-white px-5 py-2 rounded-lg transform scale-100 hover:scale-105 transition-transform">Sign Up</button>
            </div>
        </nav>
    `;
    return header;
}
