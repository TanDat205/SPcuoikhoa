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
    id:10,
    name: "Charcoal",
    image: "/img/hmm-charcoal-1.webp",
    hover: "/img/hmm-charcoal-1 (2).webp",
    price: "30$",
  },
  {
    id:11,
    name: "Valet Tray",
    image: "/img/Valet Tray.png",
    hover: "/img/Valet Tray (2).png",
    price: "30$",
  },
  {
    id:12,
    name: "Gather Note Tray",
    image: "/img/Gather Note Tray.png",
    hover: "/img/Gather Note Tray (2).png",
    price: "30$",
  },
  {
    id:14,
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

// add to cart
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
    productPrice.className = "price-item";
    productPrice.textContent = product.price;
    productCard.appendChild(productPrice);

    var addToCartButton = document.createElement("button");
    addToCartButton.className = "add-to-cart-button";
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.setAttribute("data-product-id", product.id); // Lưu trữ ID sản phẩm trong thuộc tính data
    addToCartButton.addEventListener("click", addToCart);
    productCard.appendChild(addToCartButton);

    productList.appendChild(productCard);
  }
}
var cartList = document.getElementById("cart-list");

function addToCart(event) {
  var productId = event.target.getAttribute("data-product-id");
  var productToAdd = products.find(product => product.id === parseInt(productId));

  if (productToAdd) {
    var cartItem = document.createElement("li");
    cartItem.textContent = productToAdd.name;
    cartList.appendChild(cartItem);
  }
}

//tăng giảm
function increaseQuantity(product) {
  var cartItem = cartItems.find(item => item.id === product.id);
  if (cartItem) {
    cartItem.quantity += 1;
    updateCartDisplay();
    updateCartTotal();
    updateCartItemCount();
  }
}

function decreaseQuantity(product) {
  var cartItem = cartItems.find(item => item.id === product.id);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity -= 1;
    updateCartDisplay();
    updateCartTotal();
    updateCartItemCount();
  }
}


function removeFromCart(product) {
  var cartIndex = cartItems.findIndex(item => item.id === product.id);
  if (cartIndex !== -1) {
    cartItems.splice(cartIndex, 1);
    updateCartDisplay();
    updateCartTotal();
    updateCartItemCount();
  }
}



// add price and img
var cartItems = [];
function addToCart(event) {
  var productId = event.target.getAttribute("data-product-id");

  var productToAdd = products.find(product => product.id === parseInt(productId));

  if (productToAdd) {
    var existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if (existingCartItem) {
      alert("This product is already in your cart")
    } else {
      // Sản phẩm chưa có trong giỏ hàng
      productToAdd.quantity = 1;
      cartItems.push(productToAdd);
    }

    updateCartDisplay();
    updateCartTotal();
  }
}


function updateCartDisplay() {
  cartList.innerHTML = "";


  for (var i = 0; i < cartItems.length; i++) {
    var cartItem = document.createElement("li");
    cartItem.className = "product-item"
    var cartProduct = cartItems[i];

    var cartItemImage = document.createElement("img");
    cartItemImage.className = "cart-item-image";
    cartItemImage.src = cartProduct.image;
    cartItem.appendChild(cartItemImage);

    var cartItemName = document.createElement("span");
    cartItemName.className = "cart-item-name";
    cartItemName.textContent = cartProduct.name;
    cartItem.appendChild(cartItemName);

    var cartItemPrice = document.createElement("span");
    cartItemPrice.className = "cart-item-price";
    cartItemPrice.textContent = cartProduct.price;
    cartItem.appendChild(cartItemPrice);

    //tăng giảm
    var increaseButton = document.createElement("button");
    increaseButton.className = "cart-quantity-button";
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", () => increaseQuantity(cartProduct));
    cartItem.appendChild(increaseButton);

    var decreaseButton = document.createElement("button");
    decreaseButton.className = "cart-quantity-button";
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", () => decreaseQuantity(cartProduct));
    cartItem.appendChild(decreaseButton);

    var removeButton = document.createElement("button");
    removeButton.className = "cart-remove-button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeFromCart(cartProduct));
    cartItem.appendChild(removeButton);


    //đếm
    var cartItemQuantity = document.createElement("span");
    cartItemQuantity.className = "cart-item-quantity";
    cartItemQuantity.textContent = "Quantity: " + cartProduct.quantity;
    cartItem.appendChild(cartItemQuantity);

    cartList.appendChild(cartItem);
  }
}


//price
function updateCartTotal() {
  var totalAmountElement = document.getElementById("total-amount");
  var totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0);
  totalAmountElement.textContent = "$" + totalAmount.toFixed(2);
}

// đếm

function updateCartItemCount() {
  var itemCountElement = document.getElementById("cart-item-count");
  var totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  itemCountElement.textContent = totalItemCount;
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