
import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    setSubmitted(true)

    setForm({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">GET IN TOUCH</p>

          <h1>
            Contact
            <br />
            <span>BookHaven.</span>
          </h1>

          <p className="hero-description">
            Have a question or suggestion?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="categories-section">
        <p className="section-label">WE ARE HERE TO HELP</p>
        <h2>Send Us a Message</h2>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: '600px',
            margin: 'auto',
            textAlign: 'left'
          }}
        >
          <label>Your Name</label>
          <input
            required
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            style={inputStyle}
          />

          <label>Email Address</label>
          <input
            required
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            style={inputStyle}
          />

          <label>Your Message</label>
          <textarea
            required
            placeholder="Write your message..."
            rows="6"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            style={inputStyle}
          />

          <button type="submit" className="shop-button">
            Send Message →
          </button>

          {submitted && (
            <p style={{ color: 'green', marginTop: '20px' }}>
              Thank you! Your message has been received.
            </p>
          )}
        </form>

        <p style={{ marginTop: '35px' }}>
          Email: hello@bookhaven.com
        </p>
      </section>
    </div>
  )
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '14px',
  margin: '10px 0 22px',
  border: '1px solid #dfd3c5',
  borderRadius: '5px',
  fontSize: '14px',
  fontFamily: 'Arial'
}

export default Contact
