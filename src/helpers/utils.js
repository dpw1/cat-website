const SESSION_STORAGE_PRODUCTS_CACHE = `products_cache`;

export function isDevEnvironment() {
  try {
    if (window === undefined || !window) {
      return false;
    }

    if (
      /memeowcats/.test(window.location.href) ||
      /:9000/.test(window.location.href)
    ) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}

export function storeProducts(products) {
  sessionStorage.setItem(
    SESSION_STORAGE_PRODUCTS_CACHE,
    JSON.stringify(products)
  );
}

export function getProducts() {
  const _products = sessionStorage.getItem(SESSION_STORAGE_PRODUCTS_CACHE);
  const products = JSON.parse(_products);

  if (!products || products.length <= 0) {
    return null;
  }
  return products;
}
