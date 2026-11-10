
import { useState } from 'react'
import { Link } from 'react-router-dom'
import books from '../data/books'
import { useCart } from '../Context/CartContext'

function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const { addToCart, cartCount } = useCart()

  const categories = [
    'All',
    'Fiction',
    'Business',
    'Self-Development',
    'Fantasy',
    'Romance'
  ]

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || book.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="bookstore">

      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO BOOKHAVEN</p>

          <h1>
            Find Your Next
            <br />
            <span>Great Read.</span>
          </h1>

          <p className="hero-description">
            Explore thousands of stories, ideas and adventures.
            Your next favorite book is waiting for you.
          </p>

          <a href="#books" className="shop-button">
            Explore Books →
          </a>
        </div>

        <div className="hero-decoration">
          <div className="hero-book">
            <span>BOOKHAVEN</span>
            <h2>Stories<br />That Stay<br />With You.</h2>
            <p>DISCOVER • READ • GROW</p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <p className="section-label">EXPLORE OUR COLLECTION</p>
        <h2>Find Your Favorite Genre</h2>

        <div className="category-list">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? 'category-btn active'
                  : 'category-btn'
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="books-section" id="books">
        <div className="books-heading">
          <div>
            <p className="section-label">OUR BOOKSTORE</p>
            <h2>Discover Our Books</h2>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search books or authors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="book-grid">
          {filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <Link
                to={`/books/${book.id}`}
                className="book-cover-link"
              >
                <div className={`book-cover cover-${book.id}`}>
                  <span className="cover-category">
                    {book.category}
                  </span>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
              </Link>

              <div className="book-info">
                <p className="book-category">{book.category}</p>
                <h3>{book.title}</h3>
                <p className="book-author">{book.author}</p>

                <div className="book-bottom">
                  <div>
                    <span className="book-rating">
                      ★ {book.rating}
                    </span>
                    <p className="book-price">
                      ${Number(book.price).toFixed(2)}
                    </p>
                  </div>

                <button
                   className="add-cart-btn"
                   onClick={() => addToCart(book)}
                   >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <p className="no-books">
            No books found. Try another search.
          </p>
        )}

        <Link to="/cart" className="cart-button home-cart">
          🛒 Cart ({cartCount})
        </Link>
      </section>
    </div>
  )
}

export default Home
