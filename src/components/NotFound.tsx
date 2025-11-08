import { useEffect } from "react";
import "./UI/NotFound.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">
          <span className="four">4</span>
          <span className="zero">0</span>
          <span className="four">4</span>
        </div>
        <h1>Oops! Page Not Found</h1>
        <p>
          The page you're looking for seems to have wandered off into the
          digital void. Don't worry, even the best developers get lost
          sometimes!
        </p>
        <div className="not-found-actions">
          <button onClick={goHome} className="btn btn-primary">
            Take Me Home
          </button>
          <button
            onClick={() => window.history.back()}
            className="btn btn-secondary"
          >
            Go Back
          </button>
        </div>
        <div className="not-found-links">
          <h3>Quick Links:</h3>
          <div className="quick-links">
            <a href="/#hero">Home</a>
            <a href="/#about">About</a>
            <a href="/#portfolio">Portfolio</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
        <div className="not-found-animation">
          <div className="floating-element">🚀</div>
          <div className="floating-element">💻</div>
          <div className="floating-element">⚡</div>
          <div className="floating-element">🎨</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
