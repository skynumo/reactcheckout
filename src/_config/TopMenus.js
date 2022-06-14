import CheckoutPage from "../layouts/Checkout";
import Home from "../layouts/home";
import ShopPage from "../layouts/Shop";

// Top Menu Paths
export const TopMenusRoutes = [
  {
    path: "/cart",
    exact: true,
    element: <CheckoutPage />
  },
  {
    path: "/checkout",
    exact: true,
    element: <CheckoutPage />
  },
  {
    path: "/payment",
    exact: true,
    element: <CheckoutPage />
  },
  {
    path: "/shop",
    exact: true,
    element: <ShopPage />
  },
  {
    path: "/",
    exact: true,
    element: <Home />
  },
]

// Top Menu Links 
export const TopMenusLinks = [
  {
    name: 'Home',
    to: '/',
    show: true
  },
  {
    name: 'Checkout',
    to: '/checkout',
    show: true
  },
  {
    name: 'Cart',
    to: '/cart',
    show: true
  },
  {
    name: 'Payment',
    to: '/payment',
    show: true
  },
]