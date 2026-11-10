

import { Link, useParams } from 'react-router-dom'
import books from '../data/books'
import { useCart } from '../Context/CartContext'

function BookDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  console.log('Cart function:', addToCart)

  const book = books.find(
    (item) => String(item.id) === id
  )

  if (!book) {
    return (
      <section className="categories-section">
        <h2>Book Not Found</h2>
        <Link to="/">Return Home</Link>
      </section>
    )
  }

  return (
    <section className="books-section">
      <p className="section-label">BOOK DETAILS</p>

      <div className="book-grid">
        <div className={`book-cover cover-${book.id}`}>
          <span className="cover-category">
            {book.category}
          </span>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>

        <div className="book-info">
          <p className="book-category">{book.category}</p>
          <h2>{book.title}</h2>

          <p className="book-author">
            Written by {book.author}
          </p>

          <p><strong>ISBN:</strong> {book.isbn}</p>

          <p className="book-rating">
            ★ {book.rating}
          </p>

          <h3 className="book-price">
            ${Number(book.price).toFixed(2)}
          </h3>

          <p style={{ lineHeight: '1.8', margin: '20px 0' }}>
            Discover this book from our BookHaven collection.
            Explore its details and find your next great read.
          </p>

          <button
           className="shop-button"
             onClick={() => {
           console.log('Button clicked:', book)
           addToCart(book)
               }}
          >
            🛒 Add to Cart
           </button>

          <br /><br />

          <Link to="/" className="shop-button">
            ← Back to Books
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BookDetails
