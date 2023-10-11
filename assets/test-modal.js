document.addEventListener("DOMContentLoaded", function () {
    const variantSelect = document.getElementById("variant");
    const quantityInput = document.getElementById("quantity");
    const addToCartButton = document.getElementById("add-to-cart");
    const buyNowButton = document.getElementById("buy-now");
  
    // Function to handle the "Add to Cart" button click
    addToCartButton.addEventListener("click", function () {
      const selectedVariantId = variantSelect.value;
      const selectedQuantity = quantityInput.value;
  
      // Use Shopify's AJAX API to add the product to the cart
      Shopify.addItem(selectedVariantId, selectedQuantity);
    });
  
    // Function to handle the "Buy Now" button click
    buyNowButton.addEventListener("click", function () {
      const selectedVariantId = variantSelect.value;
      const selectedQuantity = quantityInput.value;
  
      // Use Shopify's AJAX API to add the product to the cart and redirect to the cart page
      Shopify.addItem(selectedVariantId, selectedQuantity);
      window.location.href = `${routes.cart_url}?section_id=cart-drawer`;
    });
  });