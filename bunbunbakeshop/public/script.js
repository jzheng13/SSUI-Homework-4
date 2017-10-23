function showCart() {
    document.getElementById("cart-contents").classList.toggle("show");
}

function showModal(id) {
    var name = "modal" + id;
    document.getElementById(name).style.display = "block";
}