// Function to set a cookie
const setCookie = (name, value, expirationDays) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);
  const expires = `expires=${expirationDate.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to get a cookie
const getCookie = (name) => {
  const cookieName = `${name}=`;
  const cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}

// Function to delete a cookie
const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
}

// Function to update cookie
const updateCookie = (name, itemId) => {
  let cart = getCookie(name)
  cart = JSON.parse(cart)
  let foundItem = -1;
  foundItem = cart.findIndex((item) => item.productId == itemId)
  if (foundItem !== -1) {
    cart[foundItem] = {
      productId: itemId,
      quantity: cart[foundItem].quantity + 1,
    }
  } else {
    cart.push({ productId: itemId, quantity: 1 })
  }
  setCookie('cart', JSON.stringify(cart), 1)
  return cart;
}

const cookieService = {
  getCookie,
  setCookie,
  deleteCookie,
  updateCookie
}

export default cookieService;

