var products = [
  {
    name: "Sản phẩm 1",
    image: "/img/Headphone Stand.png",
    description: "Mô tả sản phẩm 1",
  },
  {
    name: "Sản phẩm 2",
    image: "link_anh_san_pham_2.jpg",
    description: "Mô tả sản phẩm 2",
  },
  {
    name: "Sản phẩm 3",
    image: "link_anh_san_pham_3.jpg",
    description: "Mô tả sản phẩm 3",
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

    var productDescription = document.createElement("p");
    productDescription.className = "description-item"
    productDescription.textContent = product.description;
    productCard.appendChild(productDescription);

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