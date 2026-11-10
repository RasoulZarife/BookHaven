
const services = [
  {
    icon: '📚',
    title: 'Wide Book Collection',
    description: 'Explore books across fiction, business, romance, fantasy and more.'
  },
  {
    icon: '🔎',
    title: 'Easy Book Search',
    description: 'Find your favorite books and authors quickly using our search feature.'
  },
  {
    icon: '🏷️',
    title: 'Browse Categories',
    description: 'Discover books organized into different genres and interests.'
  },
  {
    icon: '🛒',
    title: 'Shopping Cart',
    description: 'Add your favorite books to your cart while exploring the collection.'
  },
  {
    icon: '⭐',
    title: 'Book Ratings',
    description: 'Explore book ratings to help you discover interesting reads.'
  },
  {
    icon: '📖',
    title: 'Book Details',
    description: 'Learn more about each book through its individual details page.'
  }
]

function Services() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">WHAT WE OFFER</p>

          <h1>
            Discover Our
            <br />
            <span>Features.</span>
          </h1>

          <p className="hero-description">
            Everything you need to discover,
            explore and enjoy your next favorite book.
          </p>
        </div>
      </section>

      <section className="categories-section">
        <p className="section-label">BOOKHAVEN SERVICES</p>
        <h2>Explore What We Offer</h2>

        <div className="book-grid">
          {services.map((service) => (
            <div className="book-card book-info" key={service.title}>
              <h3 style={{ fontSize: '35px' }}>
                {service.icon}
              </h3>

              <h3>{service.title}</h3>

              <p className="book-author">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
