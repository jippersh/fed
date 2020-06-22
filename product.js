const productsData = [
  {
    name: "Pocophone F2 Pro",
    variant: "8GB RAM 256GB ROM",
    colors: "Cyber Grey",
    releaseDate: "May 2020",
    price: "₱29,990.00",
    photo: "poco.jpg",
    index: "item1",
  },
  {
    name: "Redmi Note 9 Pro",
    variant: "6GB RAM 64GB ROM",
    colors: "Tropical Green",
    releaseDate: "May 2020",
    price: "₱12,490.00",
    photo: "redminote9pro.jpg",
    index: "item2",
  },
  {
    name: "Realme 6 Pro",
    variant: "8GB RAM 128GB ROM",
    colors: "Lightning Red",
    releaseDate: "March 2020",
    price: "₱16,990.00",
    photo: "realme.jpg",
    index: "item3",
  },
  {
    name: "Oneplus 8 Pro",
    variant: "8GB RAM 128GB ROM",
    colors: "Ultramarine Blue",
    releaseDate: "April 2020",
    price: "₱42,300.00",
    photo: "oneplus.jpg",
    index: "item4",
  },
  {
    name: "Xiaomi Mi 10 Pro 5G",
    variant: "12GB RAM 512GB ROM",
    colors: "Solstice Grey",
    releaseDate: "February 2020",
    price: "₱46,700.00",
    photo: "mi10.jpg",
    index: "item5",
  },
  {
    name: "Samsung Galaxy S20 Ultra",
    variant: "12GB RAM 128GB ROM",
    colors: "Cosmic Grey",
    releaseDate: "March 2020",
    price: "₱69,990.00",
    photo: "s20.jpg",
    index: "item6",
  },
];

function productTemplate(product) {
  return `
      <div class="phones-container">
          <img class="phone-photo" src="${product.photo}">
          <p class="info"><br><br>
          ${product.name}<br>
          ${product.variant}<br>
          ${product.colors}<br>
          ${product.releaseDate}<br>
          ${product.price}<br><br>
          <button class="btn-add" id="${product.index}" type="button">Add to cart</button>
          </p>
      </div>
      `;
}

function cartTemplate(product) {
  return `
        <div class="phones-container">
            <img class="phone-photo" src="${product.photo}">
            <p class="info"><br><br>
            ${product.name}<br>
            ${product.variant}<br>
            ${product.colors}<br>
            ${product.releaseDate}<br>
            ${product.price}<br><br>
            </p>
        </div>
        `;
}
var button1 = document.getElementById("item1");
var button2 = document.getElementById("item2");
var button3 = document.getElementById("item3");
var button4 = document.getElementById("item4");
var button5 = document.getElementById("item5");
var button6 = document.getElementById("item6");
var shoppingCart = [];

document.getElementById("app").innerHTML = `
  ${productsData.map(productTemplate).join("")}`;

function addToCartBtn1() {
  shoppingCart.push({
    name: "Pocophone F2 Pro",
    variant: "8GB RAM 256GB ROM",
    colors: "Cyber Grey",
    price: "₱29,990.00",
    photo: "poco.jpg",
  });
  document.getElementById("test").innerHTML = `
  ${shoppingCart.map(cartTemplate).join("")}`;
  alert("Item added to cart");
}

function addToCartBtn2() {
  shoppingCart.push({
    name: "Redmi Note 9 Pro",
    variant: "6GB RAM 64GB ROM",
    colors: "Tropical Green",
    price: "₱12,490.00",
    photo: "redminote9pro.jpg",
  });
  document.getElementById("test").innerHTML = `
  ${shoppingCart.map(cartTemplate).join("")}`;
  alert("Item added to cart");
}

function addToCartBtn3() {
  shoppingCart.push({
    name: "Realme 6 Pro",
    variant: "8GB RAM 128GB ROM",
    colors: "Lightning Red",
    price: "₱16,990.00",
    photo: "realme.jpg",
  });
  document.getElementById("test").innerHTML = `
  ${shoppingCart.map(cartTemplate).join("")}`;
  alert("Item added to cart");
}

function addToCartBtn4() {
  shoppingCart.push({
    name: "Oneplus 8 Pro",
    variant: "8GB RAM 128GB ROM",
    colors: "Ultramarine Blue",
    price: "₱42,300.00",
    photo: "oneplus.jpg",
  });
  document.getElementById("test").innerHTML = `
  ${shoppingCart.map(cartTemplate).join("")}`;
  alert("Item added to cart");
}

function addToCartBtn5() {
  shoppingCart.push({
    name: "Xiaomi Mi 10 Pro 5G",
    variant: "12GB RAM 512GB ROM",
    colors: "Solstice Grey",
    price: "₱46,700.00",
    photo: "mi10.jpg",
  });
  document.getElementById("test").innerHTML = `
  ${shoppingCart.map(cartTemplate).join("")}`;
  alert("Item added to cart");
}

function addToCartBtn6() {
  shoppingCart.push({
    name: "Samsung Galaxy S20 Ultra",
    variant: "12GB RAM 128GB ROM",
    colors: "Cosmic Grey",
    price: "₱69,990.00",
    photo: "s20.jpg",
  });
  document.getElementById("test").innerHTML = `
  ${shoppingCart.map(cartTemplate).join("")}`;
  alert("Item added to cart");
}
document.getElementById("item1").addEventListener("click", addToCartBtn1);
document.getElementById("item2").addEventListener("click", addToCartBtn2);
document.getElementById("item3").addEventListener("click", addToCartBtn3);
document.getElementById("item4").addEventListener("click", addToCartBtn4);
document.getElementById("item5").addEventListener("click", addToCartBtn5);
document.getElementById("item6").addEventListener("click", addToCartBtn6);

//   modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var trigger = document.getElementById("myCart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
myCart.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
