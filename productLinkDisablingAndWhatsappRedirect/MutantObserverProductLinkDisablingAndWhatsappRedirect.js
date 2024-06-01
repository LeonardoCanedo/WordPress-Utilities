function applyLinkDisabling(card) {
  const phoneNumber = "+5511999999999";
  const defaultMessage = "Olá, eu gostaria de saber mais sobre esse produto: ";

  const productLink = card.querySelector(".woocommerce-loop-product__link");
  if (productLink) {
    productLink.addEventListener("click", function (event) {
      event.preventDefault();
    });
  }

  card.addEventListener("click", function () {
    const productName = card.querySelector(".eael-product-title h2").innerText;
    const message = `${defaultMessage} ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = url;
  });
}

function observeProductList() {
  const productList = document.querySelector("ul.products");
  if (!productList) return;

  const observer = new MutationObserver(function (mutationsList) {
    mutationsList.forEach(function (mutation) {
      if (mutation.type === "childList" && mutation.addedNodes.length) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1 && node.matches("li.product")) {
            applyLinkDisabling(node);
          }
        });
      }
    });
  });

  observer.observe(productList, { childList: true, subtree: true });
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("li.product").forEach(applyLinkDisabling);

  const loadMoreButton = document.getElementById("eael-load-more-btn-f4895a1");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", function () {
      setTimeout(function () {
        document.querySelectorAll("li.product").forEach(applyLinkDisabling);
      }, 2000);
    });
  }

  const categoryLinks = document.querySelectorAll(".eael-cat-tab a");
  categoryLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setTimeout(function () {
        document.querySelectorAll("li.product").forEach(applyLinkDisabling);
      }, 2000);
    });
  });

  observeProductList();
});
