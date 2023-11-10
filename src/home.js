export function createHome() {
    const home = document.createElement('div');
    home.className = 'hero flex flex-col lg:flex-row items-center justify-center my-24 mx-5';
    home.innerHTML = `
        <div class="hero-content text-left lg:w-1/2 lg:pr-16">
            <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold">Healthy. Delicious. Fast.</h1>
            <p class="text-base lg:text-lg xl:text-xl mt-4">Satisfy your cravings with our app's pure and high-quality food options. Order now for a delicious and healthy meal.</p>
            <button class="my-2 bg-[#16a34a] border text-white px-5 py-2 rounded-lg transform scale-100 hover:scale-105 transition-transform">Order Now</button>
            <button class="my-2 bg-[#16a34a] border text-white px-5 py-2 rounded-lg transform scale-100 hover:scale-105 transition-transform">Explore More</button>
        </div>
        <div class="lg:w-1/2">
            <img src="../images/food.jpg" alt="Food Image" class="w-full h-auto">
        </div>
    `;
    return home;
}

