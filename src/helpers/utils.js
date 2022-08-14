const SESSION_STORAGE_PRODUCTS_CACHE = `products_cache`;
const SESSION_STORAGE_COLLECTIONS_SCROLL_POSITION = `collection_scroll_position`;

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

export function isCollectionsPage() {
  try {
    if (window === undefined || !window) {
      return false;
    }

    if (/shop\//.test(window.location.href)) {
      return true;
    }
    return false;
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

export function storeCollectionScrollPosition(position) {
  if (!isCollectionsPage()) {
    return;
  }

  sessionStorage.setItem(SESSION_STORAGE_COLLECTIONS_SCROLL_POSITION, position);
}

export function getCollectionScrollPosition() {
  if (!isCollectionsPage()) {
    return;
  }

  const position = sessionStorage.getItem(
    SESSION_STORAGE_COLLECTIONS_SCROLL_POSITION
  );

  if (position) {
    return position;
  }

  return 0;
}
