import { testimonials } from "../data/portfolio";
import "./UI/Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">
          Testimonials from clients and colleagues I've worked with
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">"</div>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                {testimonial.image && (
                  <img src={testimonial.image} alt={testimonial.name} />
                )}
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="client-logos">
          <h3>Trusted By</h3>
          <div className="logos-grid">
            <div className="logo-item">KbCloudtech</div>
            <div className="logo-item">Ixigo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
