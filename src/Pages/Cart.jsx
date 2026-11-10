
import { useCart } from '../Context/CartContext'

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart()

  return (
    <section className="cart-section">
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Start adding some books!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((book) => (
              <div className="cart-item" key={book.id}>

                <div className="cart-book-info">
                  <h3>{book.title}</h3>
                  <p>${Number(book.price).toFixed(2)}</p>
                </div>

                <div className="cart-quantity">
                  <button onClick={() => updateQuantity(book.id, -1)}>
                    -
                  </button>

                  <span>{book.quantity}</span>

                  <button onClick={() => updateQuantity(book.id, 1)}>
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(book.id)}
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ${cartTotal.toFixed(2)}</h2>
            <button className="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default Cart
