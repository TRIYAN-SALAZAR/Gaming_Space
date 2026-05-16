/* ============================================
   FUNCIONALIDAD GLOBAL
   ============================================ */

function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

function updateCartCount() {
    if (typeof cart === 'undefined') return;
    const count = cart.getCount();
    document.querySelectorAll('#cart-count').forEach(el => {
        el.textContent = `(${count})`;
    });

}

function showNotification(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alert.style.position = 'fixed';
    alert.style.top = '80px';
    alert.style.right = '20px';
    alert.style.zIndex = '3000';
    alert.style.maxWidth = '300px';

    document.body.appendChild(alert);

    setTimeout(() => alert.remove(), 3000);
}

function openModal(modal) {
    if (modal) modal.classList.remove('hidden');
}

function closeModal(modal) {
    if (modal) modal.classList.add('hidden');
}

document.addEventListener('cartUpdated', () => {
    updateCartCount();
});

// Inicializar cuando DOM este listo
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    updateCartCount();
    document.dispatchEvent(new CustomEvent('siteReady'));
});