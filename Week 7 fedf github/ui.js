import { calculateTotal, removeFromCart, cart } from './cart.js';

export function updateCartUI(cartData) {
    const cartItemsDiv = document.getElementById("cartItems");
    const cartTotalDiv = document.getElementById("cartTotal");

    // Clear existing cart items
    cartItemsDiv.innerHTML = "";

    // Render cart items
    cartData.forEach((book, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <span>${book.title} - ₹${book.price.toLocaleString('en-IN')}</span>
            <button data-index="${index}" style="background:red; color:white; border:none; border-radius:4px; padding:4px 8px; cursor:pointer;">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    // Attach remove button listeners
    cartItemsDiv.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(e.target.getAttribute("data-index")); // Convert to number
            removeFromCart(idx);
            updateCartUI(cart);
        });
    });

    // Update total
    const total = calculateTotal();
    cartTotalDiv.textContent = `Total: ₹${total.toLocaleString('en-IN')}`;
}
