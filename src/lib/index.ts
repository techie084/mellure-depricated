// place files you want to import through the `$lib` alias in this folder.
<<<<<<< HEAD
=======
// Types
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: CartItem[];
  shippingAddress: ShippingAddress;
}

interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface User {
  email: string;
  name: string;
  orders: Order[];
}

// Mock Products Data
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Aviator Sunglasses",
    price: 149.99,
    category: "Sunglasses",
    image: "https://images.unsplash.com/photo-1760446032732-c042b0d43580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwbW9kZXJuJTIwc3R5bGV8ZW58MXx8fHwxNzYwNTA5NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Timeless aviator design with premium polarized lenses. Perfect for any occasion.",
    inStock: true,
  },
  {
    id: 2,
    name: "Modern Reading Glasses",
    price: 89.99,
    category: "Reading",
    image: "https://images.unsplash.com/photo-1669858871612-68d2db085a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwZ2xhc3NlcyUyMGNsb3NldXB8ZW58MXx8fHwxNzYwNTA5NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Comfortable reading glasses with anti-reflective coating and blue light protection.",
    inStock: true,
  },
  {
    id: 3,
    name: "Designer Eyeglasses Collection",
    price: 199.99,
    category: "Eyeglasses",
    image: "https://images.unsplash.com/photo-1760446031723-e03702a3386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGV5ZXdlYXJ8ZW58MXx8fHwxNzYwNTA5NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium designer frames with exceptional clarity and style.",
    inStock: true,
  },
  {
    id: 4,
    name: "Vintage Round Frames",
    price: 129.99,
    category: "Vintage",
    image: "https://images.unsplash.com/photo-1685363393661-4553cdea0a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZ2xhc3Nlc3xlbnwxfHx8fDE3NjA1MDk3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Retro-inspired round frames that combine vintage charm with modern comfort.",
    inStock: true,
  },
  {
    id: 5,
    name: "Performance Sports Sunglasses",
    price: 179.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1620138996011-943081eb5a10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdW5nbGFzc2VzfGVufDF8fHx8MTc2MDUwODkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "High-performance sunglasses designed for athletes with superior grip and clarity.",
    inStock: true,
  },
  {
    id: 6,
    name: "Square Frame Clear Lens Glasses",
    price: 99.99,
    category: "Eyeglasses",
    image: "https://images.unsplash.com/photo-1759910546772-73e4bb7fdadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZmFzaGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzYwNTA5NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Clean, minimalist design perfect for everyday wear and professional settings.",
    inStock: false,
  },
  {
    id: 7,
    name: "Polarized Wayfarer Sunglasses",
    price: 159.99,
    category: "Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdW5nbGFzc2VzfGVufDF8fHx8MTc2MDUwODkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic wayfarer style with modern polarized lens technology.",
    inStock: true,
  },
  {
    id: 8,
    name: "Lightweight Titanium Frames",
    price: 219.99,
    category: "Eyeglasses",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxleWVnbGFzc2VzfGVufDF8fHx8MTc2MDUwODkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Ultra-lightweight titanium construction for all-day comfort.",
    inStock: true,
  },
];

// Application State
let currentPage: 'home' | 'login' | 'account' | 'checkout' | 'product' = 'home';
let selectedCategory = 'All';
let cartItems: CartItem[] = [];
let currentUser: User | null = null;
let selectedProduct: Product | null = null;
let isAuthLogin = true;

// Utility Functions
function showLoading() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.remove('hidden');
    loadingScreen.classList.add('flex');
  }
}

function hideLoading() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    loadingScreen.classList.remove('flex');
  }
}

function showToast(message: string, type: 'success' | 'error' | 'info' = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `px-4 py-3 rounded-lg shadow-lg border transform transition-all duration-300 translate-y-0 opacity-100 ${
    type === 'success' ? 'bg-background border-green-500/50 text-foreground' :
    type === 'error' ? 'bg-background border-red-500/50 text-foreground' :
    'bg-background border-border text-foreground'
  }`;
  toast.innerHTML = `
    <div class="flex items-center gap-2">
      ${type === 'success' ? '<svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' : ''}
      ${type === 'error' ? '<svg class="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>' : ''}
      ${type === 'info' ? '<svg class="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' : ''}
      <span class="text-sm">${message}</span>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transform = 'translateY(-1rem)';
    toast.style.opacity = '0';
    setTimeout(() => {
      container.removeChild(toast);
    }, 300);
  }, 3000);
}

function navigateTo(page: typeof currentPage) {
  showLoading();
  
  setTimeout(() => {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.classList.add('hidden'));

    // Show header on most pages
    const header = document.getElementById('main-header');
    if (header) {
      if (page === 'login' || page === 'checkout' || page === 'product' || page === 'account') {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    }

    // Show selected page
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
      pageElement.classList.remove('hidden');
    }

    currentPage = page;
    window.scrollTo(0, 0);
    hideLoading();
  }, 300);
}

// Cart Functions
function updateCartUI() {
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update cart badges
  const cartBadge = document.getElementById('cart-badge');
  const mobileCartBadge = document.getElementById('mobile-cart-badge');
  
  if (cartBadge) {
    if (cartCount > 0) {
      cartBadge.textContent = cartCount.toString();
      cartBadge.classList.remove('hidden');
    } else {
      cartBadge.classList.add('hidden');
    }
  }

  if (mobileCartBadge) {
    if (cartCount > 0) {
      mobileCartBadge.textContent = cartCount.toString();
      mobileCartBadge.classList.remove('hidden');
    } else {
      mobileCartBadge.classList.add('hidden');
    }
  }

  // Update cart count text
  const cartCountText = document.getElementById('cart-count-text');
  if (cartCountText) {
    cartCountText.textContent = `${cartItems.length} ${cartItems.length === 1 ? 'item' : 'items'}`;
  }

  // Show/hide empty cart vs items
  const emptyCart = document.getElementById('empty-cart');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartFooter = document.getElementById('cart-footer');

  if (cartItems.length === 0) {
    emptyCart?.classList.remove('hidden');
    cartItemsContainer?.classList.add('hidden');
    cartFooter?.classList.add('hidden');
  } else {
    emptyCart?.classList.add('hidden');
    cartItemsContainer?.classList.remove('hidden');
    cartFooter?.classList.remove('hidden');
    renderCartItems();
    updateCartTotals();
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  container.innerHTML = cartItems.map(item => `
    <div class="group">
      <div class="flex gap-4">
        <div class="w-20 h-20 rounded-lg bg-secondary overflow-hidden flex-shrink-0">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 min-w-0 space-y-2">
          <div class="flex items-start justify-between gap-2">
            <div class="flex-1 min-w-0">
              <h3 class="text-sm truncate">${item.name}</h3>
              <p class="text-xs text-muted-foreground">${item.category}</p>
            </div>
            <button class="remove-item h-8 w-8 flex items-center justify-center rounded-md hover:bg-accent opacity-0 group-hover:opacity-100 transition-opacity" data-id="${item.id}">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <button class="update-quantity h-7 w-7 flex items-center justify-center border border-input rounded-md hover:bg-accent" data-id="${item.id}" data-action="decrease">
                <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                </svg>
              </button>
              <span class="text-sm w-8 text-center">${item.quantity}</span>
              <button class="update-quantity h-7 w-7 flex items-center justify-center border border-input rounded-md hover:bg-accent" data-id="${item.id}" data-action="increase">
                <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
            <p class="text-sm">$${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div class="border-t mt-4"></div>
    </div>
  `).join('');

  // Attach event listeners
  container.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt((e.currentTarget as HTMLElement).dataset.id || '0');
      removeFromCart(id);
    });
  });

  container.querySelectorAll('.update-quantity').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const id = parseInt(target.dataset.id || '0');
      const action = target.dataset.action;
      const item = cartItems.find(i => i.id === id);
      if (item) {
        if (action === 'increase') {
          updateQuantity(id, item.quantity + 1);
        } else {
          updateQuantity(id, item.quantity - 1);
        }
      }
    });
  });
}

function updateCartTotals() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  const subtotalEl = document.getElementById('cart-subtotal');
  const shippingEl = document.getElementById('cart-shipping');
  const totalEl = document.getElementById('cart-total');
  const freeShippingMsg = document.getElementById('free-shipping-msg');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

  if (freeShippingMsg) {
    if (shipping === 0) {
      freeShippingMsg.classList.remove('hidden');
    } else {
      freeShippingMsg.classList.add('hidden');
    }
  }
}

function addToCart(product: Product) {
  if (!product.inStock) return;

  const existingItem = cartItems.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      category: product.category,
    });
  }

  updateCartUI();
  showToast(`${product.name} added to cart`, 'success');
}

function updateQuantity(id: number, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }

  const item = cartItems.find(i => i.id === id);
  if (item) {
    item.quantity = quantity;
    updateCartUI();
  }
}

function removeFromCart(id: number) {
  cartItems = cartItems.filter(item => item.id !== id);
  updateCartUI();
  showToast('Item removed from cart', 'info');
}

function openCartSheet() {
  const cartSheet = document.getElementById('cart-sheet');
  const cartSheetContent = document.getElementById('cart-sheet-content');
  
  if (cartSheet && cartSheetContent) {
    cartSheet.classList.remove('hidden');
    setTimeout(() => {
      cartSheetContent.classList.remove('translate-x-full');
    }, 10);
  }
}

function closeCartSheet() {
  const cartSheetContent = document.getElementById('cart-sheet-content');
  const cartSheet = document.getElementById('cart-sheet');
  
  if (cartSheetContent && cartSheet) {
    cartSheetContent.classList.add('translate-x-full');
    setTimeout(() => {
      cartSheet.classList.add('hidden');
    }, 300);
  }
}

// Mobile Menu Functions
function openMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuContent = document.getElementById('mobile-menu-content');
  
  if (mobileMenu && mobileMenuContent) {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
      mobileMenuContent.classList.remove('translate-x-full');
    }, 10);
  }
}

function closeMobileMenu() {
  const mobileMenuContent = document.getElementById('mobile-menu-content');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuContent && mobileMenu) {
    mobileMenuContent.classList.add('translate-x-full');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
  }
}

// Product Functions
function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="group">
      <div class="relative aspect-square bg-secondary rounded-lg overflow-hidden mb-3">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        
        ${!product.inStock ? '<span class="absolute top-3 right-3 px-2.5 py-0.5 text-xs rounded-full bg-destructive text-destructive-foreground">Sold Out</span>' : ''}

        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <button class="view-product w-10 h-10 flex items-center justify-center rounded-md bg-secondary hover:bg-secondary/80 shadow-lg transition-colors" data-id="${product.id}">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </button>
          ${product.inStock ? `
            <button class="add-to-cart w-10 h-10 flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-colors" data-id="${product.id}">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </button>
          ` : ''}
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex items-start justify-between gap-2">
          <h3 class="text-sm line-clamp-1">${product.name}</h3>
          <span class="text-xs px-2.5 py-0.5 border border-input rounded-full flex-shrink-0">${product.category}</span>
        </div>
        <p class="text-sm">$${product.price.toFixed(2)}</p>
      </div>
    </div>
  `).join('');

  // Attach event listeners
  productsGrid.querySelectorAll('.view-product').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt((e.currentTarget as HTMLElement).dataset.id || '0');
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        viewProduct(product);
      }
    });
  });

  productsGrid.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt((e.currentTarget as HTMLElement).dataset.id || '0');
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        addToCart(product);
      }
    });
  });
}

function viewProduct(product: Product) {
  selectedProduct = product;
  
  // Update product detail page
  const detailImage = document.getElementById('product-detail-image') as HTMLImageElement;
  const detailName = document.getElementById('product-detail-name');
  const detailPrice = document.getElementById('product-detail-price');
  const detailCategory = document.getElementById('product-detail-category');
  const detailDescription = document.getElementById('product-detail-description');
  const detailStock = document.getElementById('product-detail-stock');
  const addToCartBtn = document.getElementById('product-add-to-cart') as HTMLButtonElement;
  const addToCartText = document.getElementById('product-add-to-cart-text');

  if (detailImage) detailImage.src = product.image;
  if (detailImage) detailImage.alt = product.name;
  if (detailName) detailName.textContent = product.name;
  if (detailPrice) detailPrice.textContent = `$${product.price.toFixed(2)}`;
  if (detailCategory) detailCategory.textContent = product.category;
  if (detailDescription) detailDescription.textContent = product.description;

  if (detailStock) {
    if (!product.inStock) {
      detailStock.classList.remove('hidden');
    } else {
      detailStock.classList.add('hidden');
    }
  }

  if (addToCartBtn) {
    addToCartBtn.disabled = !product.inStock;
    if (!product.inStock) {
      addToCartBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
      addToCartBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  }

  if (addToCartText) {
    addToCartText.textContent = product.inStock ? 'Add to Cart' : 'Out of Stock';
  }

  navigateTo('product');
}

// Auth Functions
function updateAuthUI() {
  const mobileAccountText = document.getElementById('mobile-account-text');
  if (mobileAccountText) {
    mobileAccountText.textContent = currentUser ? 'Account' : 'Sign in';
  }
}

function handleLogin(email: string, password: string) {
  showLoading();
  
  setTimeout(() => {
    currentUser = {
      email,
      name: email.split('@')[0],
      orders: [],
    };
    showToast('Welcome back!', 'success');
    updateAuthUI();
    navigateTo('home');
  }, 500);
}

function handleLogout() {
  currentUser = null;
  updateAuthUI();
  showToast('Signed out successfully', 'info');
  navigateTo('home');
}

function toggleAuthMode() {
  isAuthLogin = !isAuthLogin;
  
  const loginTitle = document.getElementById('login-title');
  const loginDescription = document.getElementById('login-description');
  const nameField = document.getElementById('name-field');
  const authSubmitText = document.getElementById('auth-submit-text');
  const toggleAuthModeBtn = document.getElementById('toggle-auth-mode');

  if (loginTitle) {
    loginTitle.textContent = isAuthLogin ? 'Welcome back' : 'Create account';
  }
  if (loginDescription) {
    loginDescription.textContent = isAuthLogin 
      ? 'Sign in to your account to continue' 
      : 'Sign up to start shopping';
  }
  if (nameField) {
    if (isAuthLogin) {
      nameField.classList.add('hidden');
    } else {
      nameField.classList.remove('hidden');
    }
  }
  if (authSubmitText) {
    authSubmitText.textContent = isAuthLogin ? 'Sign in' : 'Create account';
  }
  if (toggleAuthModeBtn) {
    toggleAuthModeBtn.textContent = isAuthLogin 
      ? "Don't have an account? Sign up" 
      : 'Already have an account? Sign in';
  }
}

// Account Page Functions
function updateAccountPage() {
  if (!currentUser) return;

  const accountEmail = document.getElementById('account-email');
  const accountEmail2 = document.getElementById('account-email-2');
  const accountName = document.getElementById('account-name');
  const ordersCount = document.getElementById('orders-count');
  const ordersContainer = document.getElementById('orders-container');

  if (accountEmail) accountEmail.textContent = currentUser.email;
  if (accountEmail2) accountEmail2.textContent = currentUser.email;
  if (accountName) accountName.textContent = currentUser.name;
  if (ordersCount) {
    ordersCount.textContent = `${currentUser.orders.length} ${currentUser.orders.length === 1 ? 'order' : 'orders'} placed`;
  }

  if (ordersContainer) {
    if (currentUser.orders.length === 0) {
      ordersContainer.innerHTML = `
        <div class="text-center py-8">
          <svg class="h-12 w-12 mx-auto text-muted-foreground mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          </svg>
          <p class="text-muted-foreground mb-4">No orders yet</p>
          <button class="start-shopping px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">Start shopping</button>
        </div>
      `;
      ordersContainer.querySelector('.start-shopping')?.addEventListener('click', () => {
        navigateTo('home');
      });
    } else {
      ordersContainer.innerHTML = currentUser.orders.map(order => {
        const statusColors = {
          delivered: 'bg-green-500/10 text-green-700 dark:text-green-400',
          shipped: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
          processing: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
          cancelled: 'bg-red-500/10 text-red-700 dark:text-red-400',
        };

        return `
          <div class="border rounded-lg p-4 space-y-3 mb-4">
            <div class="flex items-start justify-between">
              <div>
                <p class="text-sm">Order #${order.id}</p>
                <p class="text-xs text-muted-foreground mt-1">${new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <span class="px-2.5 py-0.5 text-xs rounded-full ${statusColors[order.status]}">${order.status}</span>
            </div>
            <div class="border-t pt-3"></div>
            <div class="space-y-2">
              ${order.items.map(item => `
                <div class="flex gap-3">
                  <div class="w-16 h-16 bg-secondary rounded overflow-hidden flex-shrink-0">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm truncate">${item.name}</p>
                    <p class="text-xs text-muted-foreground">Qty: ${item.quantity} × $${item.price.toFixed(2)}</p>
                  </div>
                  <p class="text-sm">$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              `).join('')}
            </div>
            <div class="border-t pt-3"></div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-muted-foreground">Total</span>
              <span>$${order.total.toFixed(2)}</span>
            </div>
            <div class="border-t pt-3"></div>
            <div class="text-xs text-muted-foreground">
              <p>Shipping to:</p>
              <p class="mt-1">${order.shippingAddress.fullName}</p>
              <p>${order.shippingAddress.address}</p>
              <p>${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zipCode}</p>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

// Checkout Functions
function updateCheckoutPage() {
  const checkoutItemsCount = document.getElementById('checkout-items-count');
  const checkoutItems = document.getElementById('checkout-items');
  const checkoutSubtotal = document.getElementById('checkout-subtotal');
  const checkoutShipping = document.getElementById('checkout-shipping');
  const checkoutTax = document.getElementById('checkout-tax');
  const checkoutTotal = document.getElementById('checkout-total');
  const checkoutFreeShipping = document.getElementById('checkout-free-shipping');
  const placeOrderText = document.getElementById('place-order-text');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (checkoutItemsCount) {
    checkoutItemsCount.textContent = `${cartItems.length} ${cartItems.length === 1 ? 'item' : 'items'}`;
  }

  if (checkoutItems) {
    checkoutItems.innerHTML = cartItems.map(item => `
      <div class="flex gap-3">
        <div class="w-16 h-16 bg-secondary rounded overflow-hidden flex-shrink-0">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm truncate">${item.name}</p>
          <p class="text-xs text-muted-foreground">Qty: ${item.quantity}</p>
        </div>
        <p class="text-sm">$${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    `).join('');
  }

  if (checkoutSubtotal) checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (checkoutShipping) checkoutShipping.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
  if (checkoutTax) checkoutTax.textContent = `$${tax.toFixed(2)}`;
  if (checkoutTotal) checkoutTotal.textContent = `$${total.toFixed(2)}`;
  if (placeOrderText) placeOrderText.textContent = `Place Order - $${total.toFixed(2)}`;

  if (checkoutFreeShipping) {
    if (shipping === 0) {
      checkoutFreeShipping.classList.remove('hidden');
    } else {
      checkoutFreeShipping.classList.add('hidden');
    }
  }
}

function handleCheckout() {
  if (cartItems.length === 0) {
    showToast('Your cart is empty', 'error');
    return;
  }
  closeCartSheet();
  updateCheckoutPage();
  navigateTo('checkout');
}

function handlePlaceOrder(formData: ShippingAddress) {
  showLoading();

  setTimeout(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      date: new Date().toISOString(),
      status: 'processing',
      total,
      items: [...cartItems],
      shippingAddress: formData,
    };

    if (currentUser) {
      currentUser.orders.unshift(newOrder);
    }

    cartItems = [];
    updateCartUI();
    showToast('Order placed successfully!', 'success');
    navigateTo(currentUser ? 'account' : 'home');
  }, 1000);
}

// Dark Mode
function initDarkMode() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  function updateDarkMode(e: MediaQueryList | MediaQueryListEvent) {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  updateDarkMode(prefersDark);
  prefersDark.addEventListener('change', updateDarkMode);
}

// Initialize App
function init() {
  initDarkMode();
  renderProducts();
  updateCartUI();

  // Logo/Home navigation
  document.getElementById('logo-btn')?.addEventListener('click', () => navigateTo('home'));
  document.getElementById('login-logo-btn')?.addEventListener('click', () => navigateTo('home'));
  document.querySelectorAll('#nav-shop, .mobile-nav-shop').forEach(btn => {
    btn.addEventListener('click', () => {
      closeMobileMenu();
      navigateTo('home');
    });
  });

  // Account button
  const handleAccountClick = () => {
    closeMobileMenu();
    if (currentUser) {
      updateAccountPage();
      navigateTo('account');
    } else {
      navigateTo('login');
    }
  };
  document.getElementById('account-btn')?.addEventListener('click', handleAccountClick);
  document.getElementById('mobile-account-btn')?.addEventListener('click', handleAccountClick);

  // Cart buttons
  document.getElementById('cart-btn')?.addEventListener('click', openCartSheet);
  document.getElementById('mobile-cart-btn')?.addEventListener('click', () => {
    closeMobileMenu();
    openCartSheet();
  });
  document.getElementById('cart-overlay')?.addEventListener('click', closeCartSheet);
  document.getElementById('cart-sheet-close')?.addEventListener('click', closeCartSheet);
  document.getElementById('continue-shopping-btn')?.addEventListener('click', closeCartSheet);
  document.getElementById('checkout-btn')?.addEventListener('click', handleCheckout);

  // Mobile menu
  document.getElementById('mobile-menu-btn')?.addEventListener('click', openMobileMenu);
  document.getElementById('mobile-menu-overlay')?.addEventListener('click', closeMobileMenu);
  document.getElementById('mobile-menu-close')?.addEventListener('click', closeMobileMenu);

  // Category filters
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = (e.currentTarget as HTMLElement).dataset.category || 'All';
      selectedCategory = category;
      
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      (e.currentTarget as HTMLElement).classList.add('active');
      
      renderProducts();
    });
  });

  // Auth form
  document.getElementById('auth-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = (document.getElementById('email-input') as HTMLInputElement).value;
    const password = (document.getElementById('password-input') as HTMLInputElement).value;
    handleLogin(email, password);
  });

  document.getElementById('toggle-auth-mode')?.addEventListener('click', toggleAuthMode);
  document.getElementById('guest-continue-btn')?.addEventListener('click', () => navigateTo('home'));

  // Account page
  document.getElementById('account-back-btn')?.addEventListener('click', () => navigateTo('home'));
  document.getElementById('logout-btn')?.addEventListener('click', handleLogout);

  // Checkout page
  document.getElementById('checkout-back-btn')?.addEventListener('click', () => navigateTo('home'));
  document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const shippingAddress: ShippingAddress = {
      fullName: formData.get('fullName') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      zipCode: formData.get('zipCode') as string,
      country: formData.get('country') as string,
    };
    handlePlaceOrder(shippingAddress);
  });

  // Product detail page
  document.getElementById('product-back-btn')?.addEventListener('click', () => navigateTo('home'));
  document.getElementById('product-add-to-cart')?.addEventListener('click', () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
    }
  });
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
>>>>>>> 798a6ed (redesign)
