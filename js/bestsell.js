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
    name: "Valet Tray Bundle",
    image: "/img/Valet Tray Bundle.png",
    hover: "/img/Valet Tray Bundle (2).png",
    price: "30$",
  },
  {
    id:4,
    name: "The Analog Complete Kit",
    image: "/img/The Analog Complete Kit.png",
    hover: "/img/The Analog Complete Kit (1).png",
    price: "30$",
  },
  
  {
    id:5,
    name: "Toyo Steel Stackable Storage Box T-190",
    image: "/img/Toyo Steel Stackable Storage Box T-190.png",
    hover: "/",
    price: "30$",
  },
  {
    id:6,
    name: "Round Valet Tray Bundle",
    image: "/img/Round Valet Tray Bundle.png",
    hover: "/img/Round Valet Tray Bundle (2).png",
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
    name: "Lemnos SOSO Clock",
    image: "/img/Lemnos SOSO Clock.png",
    hover: "/img/Lemnos SOSO Clock (2).png",
    price: "30$",
  },
  {
    id:9,
    name: "Kinto Day Off Tumbler",
    image: "/img/Kinto Day Off Tumbler.png",
    hover: "/img/Kinto Day Off Tumbler (2).png",
    price: "30$",
  },
  {
    id:10,
    name: "Double Wall Glasses",
    image: "/img/Double Wall Glasses.png",
    hover: "/img/Double Wall Glasses (2).png",
    price: "30$",
  },
  {
    id:11,
    name: "Leather Chemex Collar",
    image: "/img/Leather Chemex Collar.png",
    hover: "/img/Leather Chemex Collar (2).png",
    price: "30$",
  },
  {
    id:12,
    name: "Analog Travel Case",
    image: "/img/Analog Travel Case.png",
    hover: "/img/Analog Travel Case.png",
    price: "30$",
  },
  {
    id:14,
    name: "Kinto Kids Play Tumbler",
    image: "/img/Kinto Kids Play Tumbler.png",
    hover: "/img/Kinto Kids Play Tumbler (2).png",
    price: "30$",
  },
  {
    id:13,
    name: "Hasami Porcelain Mug",
    image: "/img/Hasami Porcelain Mug.png",
    hover: "/img/Hasami Porcelain Mug (2).png",
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
  }
}

function decreaseQuantity(product) {
  var cartItem = cartItems.find(item => item.id === product.id);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity -= 1;
  } else if (cartItem && cartItem.quantity === 1) {
    removeFromCart(cartItem); 
  }
  updateCartDisplay();
  updateCartTotal();
}

function removeFromCart(product) {
  var cartIndex = cartItems.findIndex(item => item.id === product.id);
  if (cartIndex !== -1) {
    cartItems.splice(cartIndex, 1);
    updateCartDisplay();
    updateCartTotal();
  }
}

function updateCartTotal() {
  var total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
  var totalElement = document.getElementById("cart-total");
  totalElement.textContent = "Total: $" + total.toFixed(2);
}

// add price and img
var cartItems = [];
// function addToCart(event) {
//   var productId = event.target.getAttribute("data-product-id");

//   var productToAdd = products.find(product => product.id === parseInt(productId));

//   if (productToAdd) {
//     var existingCartItem = cartItems.find(item => item.id === productToAdd.id);

//     if (existingCartItem) {
//       alert("This product is already in your cart")
//     } else {
//       // Sản phẩm chưa có trong giỏ hàng
//       productToAdd.quantity = 0 ;
//       productToAdd.checked = true;
//       cartItems.push(productToAdd);

//     }

//     updateCartDisplay();
//     updateCartTotal();
//   }
// }

function addToCart(event) {
  var productId = event.target.getAttribute("data-product-id");

  var productToAdd = products.find(product => product.id === parseInt(productId));

  if (productToAdd) {
    var existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if (existingCartItem) {
      alert("This product is already in your cart")
    } else {
      // Sản phẩm chưa có trong giỏ hàng
      var clonedProduct = Object.assign({}, productToAdd); // Create a copy of the product
      clonedProduct.quantity = 1; // Initialize quantity
      clonedProduct.checked = true;
      cartItems.push(clonedProduct);
    }

    updateCartDisplay();
    updateCartTotal();
  }
}




function updateCartDisplay() {
  cartList.innerHTML = "";

  for (var i = 0; i < cartItems.length; i++) {
    var cartItem = document.createElement("li");
    cartItem.className = "product-item";

    var cartProduct = cartItems[i];

    var cartItemContainer = document.createElement("div"); // Thẻ div chứa các phần tử liên quan
    cartItemContainer.className = "cart-item-container";

    var cartItemImage = document.createElement("img");
    cartItemImage.className = "cart-item-image";
    cartItemImage.src = cartProduct.image;
    cartItemContainer.appendChild(cartItemImage);

    var cartItemName = document.createElement("span");
    cartItemName.className = "cart-item-name";
    cartItemName.textContent = cartProduct.name;
    cartItemContainer.appendChild(cartItemName);

    var cartItemPrice = document.createElement("span"); // Giá sản phẩm
    cartItemPrice.className = "cart-item-price";
    cartItemPrice.textContent = cartProduct.price;
    cartItem.appendChild(cartItemImage);
    
    var cartItemControls = document.createElement("div"); // Thẻ div chứa nút tăng/giảm số lượng và nút xóa
    cartItemControls.className = "cart-item-controls";

    var increaseButton = document.createElement("button");
    increaseButton.className = "cart-quantity-button";
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", () => increaseQuantity(cartProduct));
    cartItemControls.appendChild(increaseButton);

    var decreaseButton = document.createElement("button");
    decreaseButton.className = "cart-quantity-button";
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", () => decreaseQuantity(cartProduct));
    cartItemControls.appendChild(decreaseButton);

    var removeButton = document.createElement("button");
    removeButton.className = "cart-remove-button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeFromCart(cartProduct));
    cartItemControls.appendChild(removeButton);

    var cartItemQuantity = document.createElement("span");
    cartItemQuantity.className = "cart-item-quantity";
    cartItemQuantity.textContent = "Quantity: " + cartProduct.quantity;
    cartItemControls.appendChild(cartItemQuantity);

    cartItemContainer.appendChild(cartItemPrice);
    cartItemContainer.appendChild(cartItemControls);

    cartItem.appendChild(cartItemContainer);
    cartList.appendChild(cartItem);
  }
}
function updateCartItemCount() {
  var totalItemsElement = document.getElementById("cart-item-count");
  totalItemsElement.textContent = getTotalQuantity();
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