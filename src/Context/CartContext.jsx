import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart((currentCart) => {
      const existingBook = currentCart.find(
        (item) => item.id === book.id
      )

      if (existingBook) {
        return currentCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentCart, { ...book, quantity: 1 }]
    })
  }

  function removeFromCart(bookId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== bookId)
    )
  }

  function updateQuantity(bookId, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === bookId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const cartTotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}