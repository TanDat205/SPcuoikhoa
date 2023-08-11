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

// ...

var cartList = document.getElementById("cart-list");
var cartItems = [];

function addToCart(product) {
  var existingCartItem = cartItems.find(item => item.product.id === product.id);

  if (existingCartItem) {
    alert("Sản phẩm đã có trong giỏ hàng của bạn.");
    return;
  }

  var cartItem = {
    product: product,
    quantity: 1,
  };

  cartItems.push(cartItem);
  updateCart();
  alert("Sản phẩm đã được thêm vào giỏ hàng.");
}

function updateCart() {
  cartList.innerHTML = "";

  cartItems.forEach(function (cartItem) {
    var li = document.createElement("li");
    li.textContent = cartItem.product.name + " - Quantity: " + cartItem.quantity;

    var increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", function () {
      changeQuantity(cartItem, 1);
    });

    var decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", function () {
      changeQuantity(cartItem, -1);
    });

    var removeButton = document.createElement("button");
    removeButton.textContent = "Xóa";
    removeButton.addEventListener("click", function () {
      removeCartItem(cartItem);
    });

    li.appendChild(increaseButton);
    li.appendChild(decreaseButton);
    li.appendChild(removeButton);

    cartList.appendChild(li);
  });
}

function changeQuantity(cartItem, amount) {
  cartItem.quantity += amount;
  if (cartItem.quantity < 1) {
    removeCartItem(cartItem);
  }
  updateCart();
}

function removeCartItem(cartItem) {
  var index = cartItems.indexOf(cartItem);
  if (index !== -1) {
    cartItems.splice(index, 1);
    updateCart();
  }
}

displayProducts(products);

// ...


function displayProducts(productsToShow) {
  var productList = document.getElementById("productList");
  productList.innerHTML = "";

  for (var i = 0; i < productsToShow.length; i++) {
    var product = productsToShow[i];
    var productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.id = "product-" + product.id;

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

    var addToCartBtn = document.createElement("button");
    addToCartBtn.className = "add-to-cart";
    addToCartBtn.textContent = "Add to Cart";
    productCard.appendChild(addToCartBtn);


    addToCartBtn.addEventListener("click", function () {
      addToCart(product);
    });

    // Thêm sản phẩm vào container
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