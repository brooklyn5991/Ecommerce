
 // Product data
 const products = [
    {
        id: 0,
        Image: "images/FoldableMobile.jpg",
        title: 'Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        Image: "images/AirPods.jpg",
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        Image: "images/Camera.jpg",
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        Image: "images/HeadPhones.jpg",
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 4,
        Image: "images/FoldableMobile.jpg",
        title: 'Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 5,
        Image: "images/AirPods.jpg",
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 6,
        Image: "images/Camera.jpg",
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 7,
        Image: "images/GamingMouse.jpg",
        title: 'RGB Gaming Mouse',
        price: 45,
    },
    {
        id: 8,
        Image: "images/FoldableMobile.jpg",
        title: 'Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 9,
        Image: "images/AirPods.jpg",
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 10,
        Image: "images/Camera.jpg",
        title: '250D DSLR Camera',
        price: 230,
    }
  ];


    // JavaScript for mobile menu toggle
    const menuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");
  
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
// JavaScript
const productContainer = document.getElementById('product-container');
const cartCountElement = document.getElementById('cart-count');
const cartTotalElement = document.getElementById('cart-total');
const viewCartButton = document.getElementById('view-cart-btn');
const cartPopup = document.getElementById('cart-popup');
const cartItemsContainer = document.getElementById('cart-items');
const clearCartButton = document.getElementById('clear-cart-btn');
const closeCartButton = document.getElementById('close-cart-btn');

let cartItems = [];
let cartTotal = 0;

// Function to add item to cart
function addToCart(item) {
  cartItems.push(item);
  cartTotal += item.price;
  updateCartDisplay();
  updatePopupCartTotal(); // Update total price in the popup
}

// Function to remove item from cart
function removeFromCart(index) {
  if (index !== -1) {
    const removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;
    updateCartDisplay();
    updatePopupCartTotal(); // Update total price in the popup
    renderCartItems();
  }
}

// Function to clear all items from cart
function clearCart() {
  cartItems = [];
  cartTotal = 0;
  updateCartDisplay();
  updatePopupCartTotal(); // Update total price in the popup
  renderCartItems();
}

// Function to update cart display
function updateCartDisplay() {
  cartCountElement.textContent = cartItems.length;
  cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

// Function to update cart popup total price
function updatePopupCartTotal() {
  const popupCartTotalElement = document.getElementById('popup-cart-total');
  popupCartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

// Function to render cart items in the popup
function renderCartItems() {
  cartItemsContainer.innerHTML = '';
  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement('div');
    cartItemElement.innerHTML = `
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img src="${item.Image}" alt="${item.title}" width="50" class="mr-2">
          <p>${item.title}</p>
        </div>
        <div>
          <button onclick="removeFromCart(${index})" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
            Cancel
          </button>
        </div>
      </div>
      <p class="text-gray-600">$${item.price.toFixed(2)}</p>
      <hr class="my-2">
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Function to toggle the cart popup
function toggleCartPopup() {
  cartPopup.classList.toggle('hidden');
}

// Event listener for View Cart button
viewCartButton.addEventListener('click', () => {
  renderCartItems();
  updatePopupCartTotal(); // Update total price in the popup
  toggleCartPopup();
});

// Event listener for Close Cart button
closeCartButton.addEventListener('click', toggleCartPopup);

// Event listener for Clear All button
clearCartButton.addEventListener('click', clearCart);

// Function to render products on the page
function renderProducts() {
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
      <img src="${product.Image}" alt="${product.title}" width="150" class="mb-2">
      <h3 class="text-lg font-bold">${product.title}</h3>
      <p class="mb-4">$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(products[${product.id}])" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    `;
    productElement.classList.add('product-item', 'w-1/4', 'p-4');
    productContainer.appendChild(productElement);
  });
}

renderProducts();
