var products = [
  {
    name: "The Complete Gather Collection",
    image: "/img/The Complete Gather Collection.png",
    price: "30$",
  },
  {
    name: "Large Monitor Stand",
    image: "/img/Large Monitor Stand.png",
    price: "30$",
  },
  {
    name: "Headphone Stand",
    image: "/img/Headphone Stand.png",
    price: "30$",
  },
  {
    name: "Laptop Stand",
    image: "/img/Laptop Stand.png",
    price: "30$",
  },
  
  {
    name: "MagSafe Phone Stand",
    image: "/img/MagSafe Phone Stand.png",
    price: "30$",
  },
  {
    name: "Organizer Set",
    image: "/img/Organizer Set.png",
    price: "30$",
  },
  {
    name: "Gather Note Tray",
    image: "/img/Gather Note Tray.png",
    price: "30$",
  },
  {
    name: "Gather Solid Wood Lid",
    image: "/img/Gather Solid Wood Lid.png",
    price: "30$",
  },
  {
    name: "Gather Wood Zigzag Tray",
    image: "/img/Gather Wood Zigzag Tray.png",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },

  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    price: "30$",
  },
  {
    name: "Sản phẩm 3",
    image: "link_anh_san_pham_3.jpg",
    price: "30$",
  }
];

// Lặp qua mảng sản phẩm và hiển thị chúng trong thẻ div có id="productContainer"
function displayProducts(productsToShow) {
  var productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  for (var i = 0; i < productsToShow.length; i++) {
    var product = productsToShow[i];
    var productCard = document.createElement("div");
    productCard.className = "product-card";

    // Hiển thị thông tin của sản phẩm
    var productImage = document.createElement("img");
    productImage.className = "img-item";
    productImage.src = product.image;
    productCard.appendChild(productImage);

    var productName = document.createElement("h2");
    productName.className = "name-item";
    productName.textContent = product.name;
    productCard.appendChild(productName);

    var productPrice = document.createElement("p");
    productPrice.className = "price-item"
    productPrice.textContent = product.price;
    productCard.appendChild(productPrice);

    // Thêm sản phẩm vào container
    productContainer.appendChild(productCard);
  }
}

var searchInput = document.getElementById("searchInput");
var notFoundMessage = document.getElementById("notFoundMessage");

searchInput.addEventListener("input", function() {
  var searchTerm = searchInput.value.toLowerCase();
  var filteredProducts = products.filter(function(product) {
    return product.name.toLowerCase().includes(searchTerm);
  });

  if (filteredProducts.length === 0) {
    notFoundMessage.style.display = "block";
    document.getElementById("productContainer").innerHTML = ""; // Xóa các sản phẩm hiện tại khi không tìm thấy kết quả
  } else {
    notFoundMessage.style.display = "none";
    displayProducts(filteredProducts);
  }
});

// Hiển thị tất cả các sản phẩm khi trang được tải lần đầu
displayProducts(products);