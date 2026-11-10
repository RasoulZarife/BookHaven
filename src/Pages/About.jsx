
function About() {
  return (
    <div className="about-page">

      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">GET TO KNOW US</p>

          <h1>
            About
            <br />
            <span>BookHaven.</span>
          </h1>

          <p className="hero-description">
            We believe every book opens a new world.
            Our mission is to make discovering your next
            favorite story simple and enjoyable.
          </p>
        </div>

        <div className="hero-decoration">
          <div className="hero-book">
            <span>BOOKHAVEN</span>
            <h2>Read.<br />Dream.<br />Discover.</h2>
            <p>OUR STORY</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <p className="section-label">OUR STORY</p>

        <h2>A World of Stories, One Book at a Time.</h2>

        <p>
          BookHaven was created for people who love reading,
          learning and discovering new ideas. We bring together
          books from different genres so every reader can find
          something special.
        </p>
      </section>

      <section className="categories-section">
        <p className="section-label">WHAT WE BELIEVE</p>
        <h2>Our Mission & Vision</h2>

        <div className="book-grid">
          <div className="book-card book-info">
            <h3>Our Mission</h3>
            <p>
              To make books accessible and help readers
              discover knowledge, inspiration and adventure.
            </p>
          </div>

          <div className="book-card book-info">
            <h3>Our Vision</h3>
            <p>
              To become a welcoming online destination
              for readers everywhere.
            </p>
          </div>

          <div className="book-card book-info">
            <h3>Our Values</h3>
            <p>
              Creativity, curiosity, learning and a passion
              for sharing great stories.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
