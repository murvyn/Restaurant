import { Link } from 'react-router-dom';
import './footer.styles.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-box-container">
        <div className="footer-box">
          <h3>locations</h3>
          <a href="#">india</a>
          <a href="#">japan</a>
          <a href="#">ghana</a>
          <a href="#">USA</a>
          <a href="#">france</a>
        </div>

        <div className="footer-box">
          <h3>quick links</h3>
          <Link to='/'>home</Link>
          <Link to='/dishes'>dishes</Link>
          <Link to='/about-us'>about us</Link>
          <Link to='/menu'>menu</Link>
        </div>

        <div className="footer-box">
          <h3>contact info</h3>
          <a href="#">+233-547-453-142</a>
          <a href="#">+233-504-190-018</a>
          <a href="#" className='email'>marvin.asamoah.123@gmail.com</a>
          <a href="#">sunyani, ghana </a>
        </div>

        <div className="footer-box">
          <h3>follow us</h3>
          <a href="https://www.instagram.com/" target='_blank'>instagram</a>
          <a href="#">facebook</a>
          <a href="#">twitter</a>
          <a href="#">linkedin</a>
        </div>
      </div>
      <div className="credits">
        copyright @ 2021 by <span>marvin</span>
      </div>
    </div>
  );
};

export default Footer;