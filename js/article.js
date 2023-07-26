const productList = [
    { name: "Sản phẩm A", description: "Mô tả sản phẩm A", price: 100, Image:"img/headphone-black-walnut.webp"},
    { name: "Sản phẩm A", description: "Mô tả sản phẩm A", price: 100, Image:"img/headphone-black-walnut.webp"},
    { name: "Sản phẩm A", description: "Mô tả sản phẩm A", price: 100, Image:"img/headphone-black-walnut.webp"},

  ];




function searchProducts() {
    const searchTerm = document.querySelector("input[type='text']").value;
    const searchResults = document.querySelector(".search-results");
    // Xóa các kết quả cũ trước khi tìm kiếm lại
    searchResults.innerHTML = "";
  
    // Lặp qua danh sách sản phẩm để tìm kiếm các sản phẩm có tên tương ứng
    productList.forEach((product) => {
      if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        // Nếu tìm thấy sản phẩm, thêm thông tin sản phẩm vào kết quả tìm kiếm
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Giá: $${product.price}</p>
          <img>${product.Image}</img>
          <hr>
        `;
        searchResults.appendChild(productElement);
      }
    });
}