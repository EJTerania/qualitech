import './Footer.css';

const Footer = () => {
  return (
    <footer className="website-footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Qualitech</h2>
          <p>Signs and Stickers</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <p>Email: qualitechph22@gmail.com</p>
          <p>Phone: (+63) 967-380-3853</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Qualitech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
