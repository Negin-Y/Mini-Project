document.addEventListener('DOMContentLoaded', async function() {
    const fetchButton = document.getElementById('fetchButton');

    fetchButton.addEventListener('click', async function() {
        try {
            const response = await fetch('/api/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            const data = await response.json();
            displayProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    });
    
    function displayProducts(products) {
        const productContainer = document.getElementById('productContainer');
        productContainer.innerHTML = ''; 
    
        products.forEach(product => {
            console.log(product); 
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
            `;
            productContainer.appendChild(productElement);
        });
    }
});
