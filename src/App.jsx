

import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import BookDetails from './pages/BookDetails'
import Cart from './pages/Cart'
import { useCart } from './Context/CartContext'
import './App.css'


function App() {
  const { cartCount } = useCart()

  return (
    <div className="bookstore">

      <nav className="navbar bookstore-nav">
        <Link to="/" className="brand">
          BookHaven<span>.</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

      <Link to="/cart" className="cart-button">
          🛒 Cart ({cartCount})
       </Link>

      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={
            <section className="categories-section">
              <h2>Page Not Found</h2>
              <Link to="/">Return Home</Link>
            </section>
          } />
        </Routes>
      </main>

      <footer className="footer" id="contact">
        <h2>BookHaven.</h2>
        <p>Your next chapter starts here.</p>
        <p>Contact: hello@bookhaven.com</p>
        <p>© 2026 BookHaven. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App

