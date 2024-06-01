function applyLinkDisabling() {
  const phoneNumber = "+5511999999999";
  const defaultMessage = "Olá, eu gostaria de saber mais sobre esse produto: ";

  const productCards = document.querySelectorAll("li.product");

  productCards.forEach(function (card) {
    const productLink = card.querySelector(".woocommerce-loop-product__link");
    if (productLink) {
      productLink.addEventListener("click", function (event) {
        event.preventDefault();
      });
    }

    card.addEventListener("click", function () {
      const productName = card.querySelector(
        ".eael-product-title h2"
      ).innerText;
      const message = `${defaultMessage} ${productName}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.location.href = url;
    });
  });
}

// Apply link disabling onLoad
document.addEventListener("DOMContentLoaded", function () {
  applyLinkDisabling();

  const loadMoreButton = document.getElementById("eael-load-more-btn-f4895a1");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", function () {
      setTimeout(applyLinkDisabling, 2000);
    });
  }

  const categoryLinks = document.querySelectorAll(".eael-cat-tab a");
  categoryLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setTimeout(applyLinkDisabling, 2000);
    });
  });
});

// Apply link disabling every 500 milliseconds
setInterval(applyLinkDisabling, 500);
