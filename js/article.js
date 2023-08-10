var products = [
  {
    id:1,
    name: "The Complete Gather Collection",
    image: "/img/The Complete Gather Collection.png",
    hover: "/img/The Complete Gather Collection (2).png",
    price: "30$",
  },
  {
    id:2,
    name: "Large Monitor Stand",
    image: "/img/Large Monitor Stand.png",
    hover: "/img/Large Monitor Stand (2).png",
    price: "30$",
  },
  {
    id:3,
    name: "Headphone Stand",
    image: "/img/Headphone Stand.png",
    hover: "/img/Headphone Stand (2).png",
    price: "30$",
  },
  {
    id:4,
    name: "Laptop Stand",
    image: "/img/Laptop Stand.png",
    hover: "/img/Laptop Stand (2).png",
    price: "30$",
  },
  
  {
    id:5,
    name: "MagSafe Phone Stand",
    image: "/img/MagSafe Phone Stand.png",
    hover: "/img/MagSafe Phone Stand (2).png",
    price: "30$",
  },
  {
    id:6,
    name: "Organizer Set",
    image: "/img/Organizer Set.png",
    hover: "/img/Organizer Set (2).png",
    price: "30$",
  },
  {
    id:7,
    name: "Gather Note Tray",
    image: "/img/Gather Note Tray.png",
    hover: "/img/Gather Note Tray (2).png",
    price: "30$",
  },
  {
    id:8,
    name: "Gather Solid Wood Lid",
    image: "/img/Gather Solid Wood Lid.png",
    hover: "/img/Gather Solid Wood Lid (2).png",
    price: "30$",
  },
  {
    id:9,
    name: "Gather Wood Zigzag Tray",
    image: "/img/Gather Wood Zigzag Tray.png",
    hover: "/img/Gather Wood Zigzag Tray (2).png",
    price: "30$",
  },
  {
    id:9,
    name: "Charcoal",
    image: "/img/hmm-charcoal-1.webp",
    hover: "/img/hmm-charcoal-1 (2).webp",
    price: "30$",
  },
  {
    id:10,
    name: "Valet Tray",
    image: "/img/Valet Tray.png",
    hover: "/img/Valet Tray (2).png",
    price: "30$",
  },
  {
    id:11,
    name: "Gather Note Tray",
    image: "/img/Gather Note Tray.png",
    hover: "/img/Gather Note Tray (2).png",
    price: "30$",
  },
  {
    id:12,
    name: "Gather Wood Zigzag Tray",
    image: "/img/Gather Wood Zigzag Tray.png",
    hover: "/img/Gather Wood Zigzag Tray (2).png",
    price: "30$",
  },
  {
    id:13,
    name: "Gather Solid Wood Lid",
    image: "/img/Gather Solid Wood Lid.png",
    hover: "/img/Gather Solid Wood Lid (2).png",
    price: "30$",
  },
];

// function displayProducts(productsToShow) {
//   var productList = document.getElementById("productList");
//   productList.innerHTML = "";

//   for (var i = 0; i < productsToShow.length; i++) {
//     var product = productsToShow[i];
//     var productCard = document.createElement("div");
//     productCard.className = "product-card";

//     // Hiển thị thông tin của sản phẩm
//     var productImage = document.createElement("img");
//     productImage.className = "img-item";
//     productImage.src = product.image;
//     productCard.appendChild(productImage);

//     var productHover = document.createElement("img");
//     productHover.className = "hover-image";
//     productHover.src = product.hover;
//     productCard.appendChild(productHover);

//     var productName = document.createElement("h2");
//     productName.className = "name-item";
//     productName.textContent = product.name;
//     productCard.appendChild(productName);

//     var productPrice = document.createElement("p");
//     productPrice.className = "price-item"
//     productPrice.textContent = product.price;
//     productCard.appendChild(productPrice);

//     // Thêm sản phẩm vào container
//     productList.appendChild(productCard);
//   }
// }

// var searchInput = document.getElementById("searchInput");
// var notFoundMessage = document.getElementById("notFoundMessage");
// var banner = document.getSelection(".banner")


// searchInput.addEventListener("input", function() {
//   var searchTerm = searchInput.value.toLowerCase();
//   var filteredProducts = products.filter(function(product) {
//     return product.name.toLowerCase().includes(searchTerm);
//   });

//   if (filteredProducts.length === 0) {
//     notFoundMessage.style.display = "block";
//     document.getElementById("productList").innerHTML = "";
//     // Xóa các sản phẩm hiện tại khi không tìm thấy kết quả
//   } else {
//     notFoundMessage.style.display = "none";
//     displayProducts(filteredProducts);
//   }
// });

// // Hiển thị tất cả các sản phẩm khi trang được tải lần đầu
// displayProducts(products);




var cartItems = [];

function addToCart(product) {
  var existingItem = cartItems.find(item => item.product.id === product.id);

  if (existingItem) {
    alert("This product is already in your cart.");
    return;
  }

  var cartList = document.getElementById("cart");
  var cartItem = document.createElement("li");
  cartItem.className = "cart-item";
  cartItem.innerHTML = `
    <span>${product.name}</span>
    <button class="decrement">-</button>
    <span class="quantity">1</span>
    <button class="increment">+</button>
    <button class="remove">Remove</button>
  `;

  cartList.appendChild(cartItem);

  var incrementBtn = cartItem.querySelector(".increment");
  var decrementBtn = cartItem.querySelector(".decrement");
  var quantitySpan = cartItem.querySelector(".quantity");
  var removeBtn = cartItem.querySelector(".remove");

  incrementBtn.addEventListener("click", function () {
    var quantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = quantity + 1;
  });

  decrementBtn.addEventListener("click", function () {
    var quantity = parseInt(quantitySpan.textContent);
    if (quantity > 1) {
      quantitySpan.textContent = quantity - 1;
    }
  });

  removeBtn.addEventListener("click", function () {
    cartList.removeChild(cartItem);
    cartItems = cartItems.filter(item => item.product.id !== product.id);
  });

  cartItems.push({ product, cartItem });
}

// ... Your existing code ...

function displayProducts(productsToShow) {
  var productList = document.getElementById("productList");
  productList.innerHTML = "";

  for (var i = 0; i < productsToShow.length; i++) {
    var product = productsToShow[i];
    var productCard = document.createElement("div");
    productCard.className = "product-card";

    var productImage = document.createElement("img");
    productImage.className = "img-item";
    productImage.src = product.image;
    productCard.appendChild(productImage);

    var productHover = document.createElement("img");
    productHover.className = "hover-image";
    productHover.src = product.hover;
    productCard.appendChild(productHover);

    var productName = document.createElement("h2");
    productName.className = "name-item";
    productName.textContent = product.name;
    productCard.appendChild(productName);

    var productPrice = document.createElement("p");
    productPrice.className = "price-item"
    productPrice.textContent = product.price;
    productCard.appendChild(productPrice);

    // Thêm sản phẩm vào container
    productList.appendChild(productCard);

    var addToCartBtn = document.createElement("button");
    addToCartBtn.className = "add-to-cart";
    addToCartBtn.textContent = "Add to Cart";
    productCard.appendChild(addToCartBtn);

    addToCartBtn.addEventListener("click", function () {
      addToCart(product);
    });

    // ... Your existing code ...

    productList.appendChild(productCard);
  }
}

var searchInput = document.getElementById("searchInput");
var notFoundMessage = document.getElementById("notFoundMessage");
var banner = document.getSelection(".banner")


searchInput.addEventListener("input", function() {
  var searchTerm = searchInput.value.toLowerCase();
  var filteredProducts = products.filter(function(product) {
    return product.name.toLowerCase().includes(searchTerm);
  });

  if (filteredProducts.length === 0) {
    notFoundMessage.style.display = "block";
    document.getElementById("productList").innerHTML = "";
    // Xóa các sản phẩm hiện tại khi không tìm thấy kết quả
  } else {
    notFoundMessage.style.display = "none";
    displayProducts(filteredProducts);
  }
});

// Hiển thị tất cả các sản phẩm khi trang được tải lần đầu
displayProducts(products);