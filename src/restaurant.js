const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    // create and append image element 
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('lg:w-1/2', 'mx-5');
    const img = document.createElement('img');
    img.src = '../images/food.jpg';
    imageDiv.appendChild(img);
    pageContent.appendChild(imageDiv)

    const headline = document.createElement('h1');
    headline.textContent = 'Healthy. Delicious. Fast.';
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = "Satisfy your cravings with our app's pure and high-quality food options. Order now for a delicious and healthy meal."
    pageContent.appendChild(pageContent)


}