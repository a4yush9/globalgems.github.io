// =========================================================
// GLOBAL SUPPLIERS - E-COMMERCE & CART LOGIC
// =========================================================

// Product Inventory Dataset
const products = [
    {
        id: 1,
        name: "Natural Ruby (रूबी/माणिक)",
        category: "Rashi Ratna",
        price: 12000,
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80",
        description: "Certified natural astrological Sun gemstone for leadership and vitality."
    },
    {
        id: 2,
        name: "Freshwater Pearl String (मोती माला)",
        category: "Mala Collections",
        price: 4500,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
        description: "High-luster natural pearl mala, Wholeale and Retail length and quality."
    },
    {
        id: 3,
        name: "Red Coral Necklace (मुगा माला)",
        category: "Mala Collections",
        price: 8500,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
        description: "Authentic Italian red coral mala beads for energy and balance."
    },
    {
        id: 4,
        name: "7 Chakra Energy Bracelet",
        category: "Crystal Bracelets",
        price: 1500,
        image: "https://images.unsplash.com/photo-1611591475824-28784869c3a3?auto=format&fit=crop&w=600&q=80",
        description: "Natural stone beads designed for chakra balancing and daily focus."
    },
    {
        id: 5,
        name: "Emerald Gemstone (पन्ना)",
        category: "Rashi Ratna",
        price: 18000,
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
        description: "Deep green mercury gemstone for intellect, trade, and communication."
    },
    {
        id: 6,
        name: "Black Zet Mala (जेट माला)",
        category: "Mala Collections",
        price: 3200,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
        description: "Polished black jet stone mala for protective grounding energies."
    }
];

let cart = [];

// Render Products to HTML Grid
function renderProducts(itemsToRender = products) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    if (itemsToRender.length === 0) {
        grid.innerHTML = `<p class="text-gray-400 text-sm col-span-full text-center py-8">No products found in this category.</p>`;
        return;
    }

    grid.innerHTML = itemsToRender.map(product => `
        <div class="glass-card rounded-lg overflow-hidden flex flex-col justify-between p-4 group">
            <div class="relative aspect-square rounded-md overflow-hidden bg-zinc-900 mb-4 border border-zinc-800">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2 left-2 bg-black/80 text-gold text-[10px] font-bold px-2 py-0.5 rounded border border-gold/30 uppercase tracking-wider">
                    ${product.category}
                </span>
            </div>
            <div class="space-y-2 flex-grow">
                <h3 class="font-luxury text-base text-white font-semibold">${product.name}</h3>
                <p class="text-xs text-gray-400 font-light line-clamp-2">${product.description}</p>
            </div>
            <div class="pt-4 border-t border-zinc-800 mt-4 flex items-center justify-between">
                <div>
                    <span class="text-[10px] text-zinc-500 block uppercase">Wholeale and Retail Price</span>
                    <span class="text-gold font-mono font-bold text-sm">NPR ${product.price.toLocaleString()}</span>
                </div>
                <button onclick="addToCart(${product.id})" class="px-3 py-1.5 bg-gold/10 border border-gold text-gold text-xs rounded hover:bg-gold hover:text-black transition-all duration-300">
                    <i class="fa-solid fa-cart-plus mr-1"></i> Add
                </button>
            </div>
        </div>
    `).join('');
}

// Category Filtering Function
function filterStorefront(category) {
    // Update Active Button Styling
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        if (btn.innerText.toLowerCase().includes(category.toLowerCase()) || (category === 'All' && btn.innerText === 'All')) {
            btn.classList.add('border-gold', 'text-gold');
            btn.classList.remove('border-zinc-800');
        } else {
            btn.classList.remove('border-gold', 'text-gold');
            btn.classList.add('border-zinc-800');
        }
    });

    if (category === 'All') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
        renderProducts(filtered);
    }
}

// Cart Management Functions
function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    if (!item) return;

    const existing = cart.find(c => c.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
    toggleCartModal(true);
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update Counter Badge
    if (cartCount) {
        cartCount.innerText = totalQty;
        if (totalQty > 0) {
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }

    // Render Drawer List
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `<p class="text-gray-400 text-xs text-center py-10">Your bag is currently empty.</p>`;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="flex items-center justify-between gap-3 p-2 bg-zinc-900/60 rounded border border-zinc-800">
                    <img src="${item.image}" class="w-12 h-12 object-cover rounded border border-zinc-700">
                    <div class="flex-grow text-xs">
                        <h4 class="text-white font-medium">${item.name}</h4>
                        <p class="text-gold font-mono">NPR ${item.price.toLocaleString()} x ${item.quantity}</p>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-300 p-1 text-sm">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }

    if (cartTotal) {
        cartTotal.innerText = `NPR ${totalPrice.toLocaleString()}`;
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function toggleCartModal(show) {
    const drawer = document.getElementById('cart-drawer');
    if (!drawer) return;

    if (show) {
        drawer.classList.remove('hidden');
        setTimeout(() => drawer.classList.remove('translate-x-full'), 10);
    } else {
        drawer.classList.add('translate-x-full');
        setTimeout(() => drawer.classList.add('hidden'), 300);
    }
}

// Dispatch WhatsApp Checkout
function dispatchCartCheckout() {
    if (cart.length === 0) {
        alert("Your shopping bag is empty!");
        return;
    }

    let message = "Namaste Global Suppliers! I would like to place an order:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name} (x${item.quantity}) - NPR ${itemTotal.toLocaleString()}\n`;
    });

    message += `\n*Total Subtotal: NPR ${total.toLocaleString()}*\n`;
    message += "Please let me know about availability and delivery options.";

    const whatsappUrl = `https://wa.me/9779819169972?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Initialize Storefront on Load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});