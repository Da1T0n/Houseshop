document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    let cart = [];

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            addToCart(product);
        });
    });

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = '';
        if (cart.length === 0) {
            cartItems.innerHTML = '<li>Корзина пуста</li>';
        } else {
            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                cartItems.appendChild(li);
            });
        }
    }
});
let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 5000); // Менять слайд каждые 5 секунд

