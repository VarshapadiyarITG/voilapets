// search
const searchIcon = document.querySelector('.header__icon--search a');
const searchOverlay = document.getElementById('searchOverlay');
// Add to cart
const cartDrawer = document.getElementById("cartDrawer");
const cartIcon = document.getElementById("addTocard");
// bars
let menu = document.getElementById("mobileNav");
let slide_bar = document.getElementById("slide_bar")

function show_search_bar() {
    searchOverlay.classList.remove('hidden')
    searchOverlay.classList.add("search-overlay")
    document.body.style.overflow = 'hidden';

}
function closeSearchOverlay() {
    searchOverlay.classList.add('hidden');
    searchOverlay.classList.remove("search-overlay");
    document.body.style.overflow = 'auto';
}


cartIcon.addEventListener("click", function () {
    cartDrawer.classList.add("open");
});

function closeCartDrawer() {
    cartDrawer.classList.remove("open");
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeCartDrawer();
    }
    if (e.key === "Escape") {
        closeSearchOverlay();
    }
});

//toggle menu
function toggleDrawer() {
    const drawer = document.getElementById('drawer');

}

