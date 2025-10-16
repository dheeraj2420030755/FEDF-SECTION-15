import { books } from './data.js';
import { addToCart, cart } from './cart.js';
import { updateCartUI } from './ui.js';

export function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear before rendering

    books.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        // Use disabled button for out-of-stock
        const buttonHTML = book.availability === "in stock"
            ? `<button data-index="${index}">Add to Cart</button>`
            : `<button disabled style="background:#ccc; cursor:not-allowed;">Out of Stock</button>`;

        bookDiv.innerHTML = `
            <div>
                <strong>${book.title}</strong> <br>
                <small>by ${book.author}</small> <br>
                <span>₹${book.price.toLocaleString('en-IN')}</span>
            </div>
            <div>
                ${buttonHTML}
            </div>
        `;

        bookList.appendChild(bookDiv);
    });

    // Attach event listeners to "Add to Cart" buttons
    bookList.querySelectorAll("button").forEach(btn => {
        if (!btn.disabled) { // Only attach listener if button is enabled
            btn.addEventListener("click", (e) => {
                const idx = parseInt(e.target.getAttribute("data-index")); // Convert to number
                addToCart(books[idx]);
                updateCartUI(cart);
            });
        }
    });
}
