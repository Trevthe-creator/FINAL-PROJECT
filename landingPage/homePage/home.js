// Global State
let cart = [];
let isLoggedIn = false;
let currentUser = null;

// Sample Data
const categories = [
  {
    name: "Fresh Vegetables",
    image: "photo-1566385101042-1a0aa0c1268c",
    count: "45+ items",
  },
  {
    name: "Seasonal Fruits",
    image: "photo-1610832958506-aa56368176cf",
    count: "32+ items",
  },
  {
    name: "Artisan Bakery",
    image: "photo-1509440159596-0249088772ff",
    count: "28+ items",
  },
  {
    name: "Dairy & Eggs",
    image: "photo-1628088062854-d1870b4553da",
    count: "15+ items",
  },
  {
    name: "Pantry Essentials",
    image: "photo-1587049352846-4a222e784d38",
    count: "38+ items",
  },
  {
    name: "Beverages",
    image: "photo-1544145945-f90425340c7e",
    count: "22+ items",
  },
];

const products = [
  {
    id: 1,
    name: "Organic Heirloom Tomatoes",
    price: 8.99,
    originalPrice: 12.99,
    image: "photo-1618160702438-9b02ab6515c9",
    category: "Vegetables",
    producer: "Green Valley Farm",
    isOrganic: true,
  },
  {
    id: 2,
    name: "Fresh Artisan Bread",
    price: 5.5,
    image: "photo-1509440159596-0249088772ff",
    category: "Bakery",
    producer: "Stone Oven Bakery",
  },
  {
    id: 3,
    name: "Local Honey",
    price: 12.0,
    image: "photo-1587049352846-4a222e784d38",
    category: "Pantry",
    producer: "Meadow Bee Farm",
    isOrganic: true,
  },
  {
    id: 4,
    name: "Farm Fresh Eggs",
    price: 6.75,
    image: "photo-1582722872445-44dc5f7e3c8f",
    category: "Dairy & Eggs",
    producer: "Happy Hen Farm",
  },
  {
    id: 5,
    name: "Seasonal Fruit Box",
    price: 24.99,
    originalPrice: 29.99,
    image: "photo-1610832958506-aa56368176cf",
    category: "Fruits",
    producer: "Orchard Fresh Co.",
    isOrganic: true,
  },
  {
    id: 6,
    name: "Handcrafted Cheese",
    price: 15.99,
    image: "photo-1486297678162-eb2a19b0a32d",
    category: "Dairy & Eggs",
    producer: "Artisan Creamery",
  },
];

// Utility Functions
function showToast(title, description) {
  const toastContainer = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast toast-success";
  toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
    `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function updateCartTotal() {
  const cartTotal = document.getElementById("cartTotal");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = total.toFixed(2);
}

// Mobile Menu
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.toggle("active");
}

// Auth Modal
function openAuthModal() {
  const authModal = document.getElementById("authModal");
  authModal.classList.add("active");
}

function closeAuthModal() {
  const authModal = document.getElementById("authModal");
  authModal.classList.remove("active");
}

function switchTab(tab) {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const forms = document.querySelectorAll(".auth-form");

  tabButtons.forEach((btn) => btn.classList.remove("active"));
  forms.forEach((form) => form.classList.remove("active"));

  document
    .querySelector(`[onclick="switchTab('${tab}')"]`)
    .classList.add("active");
  document.getElementById(`${tab}Form`).classList.add("active");
}

// Cart Functions
function toggleCart() {
  const cartOverlay = document.getElementById("cartOverlay");
  cartOverlay.classList.toggle("active");

  if (cartOverlay.classList.contains("active")) {
    renderCart();
  }
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  updateCartCount();
  showToast("Added to cart!", `${product.name} has been added to your cart.`);
}

function renderCart() {
  const cartContent = document.getElementById("cartContent");

  if (cart.length === 0) {
    cartContent.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    updateCartTotal();
    return;
  }

  cartContent.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="https://images.unsplash.com/${item.image}?w=80&h=80&fit=crop" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="cart-item-remove">Remove</button>
        </div>
    `
    )
    .join("");

  updateCartTotal();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  renderCart();
  showToast("Removed from cart", "Item has been removed from your cart.");
}

// Render Functions
function renderCategories() {
  const categoriesGrid = document.getElementById("categoriesGrid");
  categoriesGrid.innerHTML = categories
    .map(
      (category, index) => `
        <div class="category-card" style="animation-delay: ${index * 0.1}s">
            <img src="https://images.unsplash.com/${
              category.image
            }?w=400&h=300&fit=crop" alt="${category.name}">
            <div class="category-overlay">
                <h3 class="category-name">${category.name}</h3>
                <p class="category-count">${category.count}</p>
            </div>
        </div>
    `
    )
    .join("");
}

function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  productsGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/${
                  product.image
                }?w=400&h=300&fit=crop" alt="${product.name}">
                ${
                  product.isOrganic
                    ? '<div class="product-badge badge-organic">Organic</div>'
                    : ""
                }
                ${
                  product.originalPrice
                    ? '<div class="product-badge badge-sale">Sale</div>'
                    : ""
                }
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-producer">by ${product.producer}</p>
                <div class="product-price">
                    <span class="price-current">$${product.price}</span>
                    ${
                      product.originalPrice
                        ? `<span class="price-original">$${product.originalPrice}</span>`
                        : ""
                    }
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Form Handlers
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Simulate login
  setTimeout(() => {
    isLoggedIn = true;
    currentUser = { email };

    // Store login data in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    closeAuthModal();
    showToast("Welcome back!", "You have successfully logged in.");
    updateAuthUI();

    // Redirect to profilePage.html
    window.location.href = "";
  }, 1000);
}

function handleRegister(e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  // Simulate registration
  setTimeout(() => {
    isLoggedIn = true;
    currentUser = { email, firstName, lastName };

    // Store login data in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userFirstName", firstName);
    localStorage.setItem("userLastName", lastName);

    closeAuthModal();
    showToast(
      "Account created!",
      "Your account has been created successfully."
    );
    updateAuthUI();

    // Redirect to profilePage.html
    window.location.href = "profilePage/profile.html";
  }, 1000);
}
function goToPage() {
  window.location.href = "profilePage/profile.html"; // Replace with your actual page
}

function updateAuthUI() {
  const authBtn = document.querySelector(".auth-btn");
  if (isLoggedIn) {
    authBtn.textContent = "Profile";
    authBtn.onclick = () =>
      showToast("Profile", "Profile functionality coming soon!");
  } else {
    authBtn.textContent = "Sign In";
    authBtn.onclick = openAuthModal;
  }
}

// Smooth Scroll
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Render initial content
  renderCategories();
  renderProducts();
  updateCartCount();

  // Form event listeners
  document.getElementById("loginForm").addEventListener("submit", handleLogin);
  document
    .getElementById("registerForm")
    .addEventListener("submit", handleRegister);

  // Close modal when clicking outside
  document.getElementById("authModal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeAuthModal();
    }
  });

  // Close cart when clicking outside
  document
    .getElementById("cartOverlay")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        toggleCart();
      }
    });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target);

      // Close mobile menu if open
      const mobileNav = document.getElementById("mobileNav");
      if (mobileNav.classList.contains("active")) {
        toggleMobileMenu();
      }
    });
  });

  // Hero buttons
  document
    .querySelector(".hero-buttons .btn-primary")
    .addEventListener("click", () => {
      smoothScroll("#products");
    });

  document
    .querySelector(".hero-buttons .btn-outline")
    .addEventListener("click", () => {
      smoothScroll("#categories");
    });
});

// Add CSS for cart items
const cartItemStyles = `
.cart-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--gray-200);
}

.cart-item:last-child {
    border-bottom: none;
}

.cart-item img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: var(--border-radius);
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h4 {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.cart-item-info p {
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.cart-item-remove {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 0.875rem;
    transition: color 0.3s ease;
}

.cart-item-remove:hover {
    color: #dc2626;
}
`;

// Inject cart styles
const style = document.createElement("style");
style.textContent = cartItemStyles;
document.head.appendChild(style);
