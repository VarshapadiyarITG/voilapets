const searchIcon = document.querySelector('.header__icon--search a');
const searchOverlay = document.getElementById('searchOverlay');

// searchIcon.addEventListener('click', function (event) {
//     event.preventDefault();
function show_search_bar(){
    searchOverlay.classList.remove('hidden')
    searchOverlay.classList.add("search-overlay")
}


function closeSearchOverlay(){
    searchOverlay.classList.add('hidden');
    searchOverlay.classList.remove("search-overlay")
}


// Add to cart
const cartDrawer = document.getElementById("cartDrawer");
const cartIcon = document.getElementById("addTocard");

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

