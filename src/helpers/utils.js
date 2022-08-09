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
