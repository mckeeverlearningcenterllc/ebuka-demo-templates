// ============================================================
// CART UTILITIES — shared across all pages
// Cart stored in localStorage as JSON array of cart items
// ============================================================

const CART_KEY = 'eshop_cart';

const PRODUCTS = [
  { id: 1, name: 'Ankara Print Wrap Dress',    price: 15000, category: 'Dresses', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id: 2, name: 'Linen Co-ord Set',            price: 22000, category: 'Co-ords', image: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id: 3, name: 'Tailored Blazer',             price: 28000, category: 'Tops',    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id: 4, name: 'Floral Midi Dress',           price: 18000, category: 'Dresses', image: 'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id: 5, name: 'Wide-Leg Trousers',           price: 16000, category: 'Bottoms', image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id: 6, name: 'Ribbed Knit Top',             price: 9500,  category: 'Tops',    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id: 7, name: 'Satin Slip Dress',            price: 19000, category: 'Dresses', image: 'https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id: 8, name: 'Silk Printed Blouse',         price: 24000, category: 'Tops',    image: 'https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id: 9, name: 'Pleated Mini Skirt',          price: 12000, category: 'Bottoms', image: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id:10, name: 'Printed Kaftan',              price: 20000, category: 'Co-ords', image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id:11, name: 'Cargo Joggers',               price: 14000, category: 'Bottoms', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
  { id:12, name: 'Off-Shoulder Bodysuit',       price: 11000, category: 'Tops',    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop', sizes: ['XS','S','M','L','XL'] },
];

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch(e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, size) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, size, qty: 1 });
  }
  saveCart(cart);
}

function removeFromCart(id, size) {
  saveCart(getCart().filter(i => !(i.id === id && i.size === size)));
}

function updateQty(id, size, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id && i.size === size);
  if (item) { item.qty = parseInt(qty); if (item.qty < 1) item.qty = 1; }
  saveCart(cart);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function formatNaira(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
