export let cart = [];

// Add book to cart
export function addToCart(book) {
    cart.push(book); // Allow duplicates, or check with !cart.includes(book)
}

// Remove book by index
export function removeFromCart(index) {
    const i = Number(index);
    if (i >= 0 && i < cart.length) {
        cart.splice(i, 1);
    }
}

// Calculate total price
export function calculateTotal() {
    return cart.reduce((sum, book) => sum + book.price, 0);
}
