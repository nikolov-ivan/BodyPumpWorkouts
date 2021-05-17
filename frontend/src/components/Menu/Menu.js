import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div class="offcanvas-menu-overlay"></div>
      <div class="offcanvas-menu-wrapper">
        <div class="canvas-close">
          <i class="fa fa-close"></i>
        </div>
        <div class="canvas-search search-switch">
          <i class="fa fa-search"></i>
        </div>
        <nav class="canvas-menu mobile-menu">
          <ul>
            <li>
              <Link to="./index.html">Home</Link>
            </li>
            <li>
              <Link to="./Linkbout-us.html">About Us</Link>
            </li>
            <li>
              <Link to="./classes.html">Classes</Link>
            </li>
            <li>
              <Link to="./services.html">Services</Link>
            </li>
            <li>
              <Link to="./team.html">Our Team</Link>
            </li>
            <li>
              <Link to="#">Pages</Link>
              <ul class="dropdown">
                <li>
                  <Link to="./Linkbout-us.html">About us</Link>
                </li>
                <li>
                  <Link to="./class-timetable.html">Classes timetable</Link>
                </li>
                <li>
                  <Link to="./bmi-calculator.html">Bmi calculate</Link>
                </li>
                <li>
                  <Link to="./team.html">Our team</Link>
                </li>
                <li>
                  <Link to="./gallery.html">Gallery</Link>
                </li>
                <li>
                  <Link to="./blog.html">Our blog</Link>
                </li>
                <li>
                  <Link to="./404.html">404</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="./contact.html">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="canvas-social">
          <Link to="#">
            <i class="fa fa-facebook"></i>
          </Link>
          <Link to="#">
            <i class="fa fa-twitter"></i>
          </Link>
          <Link to="#">
            <i class="fa fa-youtube-play"></i>
          </Link>
          <Link to="#">
            <i class="fa fa-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
