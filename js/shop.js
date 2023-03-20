const cardContainer = document.querySelector('#cardContainer');

function addProducts() {
    products.forEach(individualCard => {
        cardContainer.innerHTML += `
            <div id="cardNumber${individualCard.id}" class="card">
                <img src="${individualCard.image}" alt="Clown Umbrella Thumbnail">
                <div class="cardText">
                    <h4>${individualCard.name}</h4>
                    <p>${individualCard.description}</p>
                    <p>&dollar; ${individualCard.price}</p>
                    <button class="cartButton">Add to Cart</button>
                </div>
            </div>
        `
    });
};

addProducts();