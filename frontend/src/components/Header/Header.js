import { Link } from "react-router-dom";

const Header = () => {
  return (
    
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <Link>
                  <img src="img/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="nav-menu">
                <ul>
                  <li className="active">
                    <Link to="./index.html">Начало</Link>
                  </li>
                  <li>
                    <Link to="./Linkbout-us.html">За нас</Link>
                  </li>
                  <li>
                    <Link to="./class-details.html">Групи</Link>
                  </li>
                  <li>
                    <Link to="./services.html">Услуги</Link>
                  </li>
                  <li>
                    <Link to="./team.html">Екипът</Link>
                  </li>
                  <li>
                    <Link>Още</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="./Linkbout-us.html">За нас</Link>
                      </li>
                      <li>
                        <Link to="./class-timetable.html">Групи-Календар</Link>
                      </li>
                      <li>
                        <Link to="./bmi-calculator.html">Bmi калкулатор</Link>
                      </li>
                      <li>
                        <Link to="./team.html">Екипът</Link>
                      </li>
                      <li>
                        <Link to="./gallery.html">Галерия</Link>
                      </li>
                      <li>
                        <Link to="./blog.html">Новини</Link>
                      </li>
                      <li>
                        <Link to="./404.html">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="./contact.html">Връзка с нас</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="top-option">
                <div className="to-search search-switch">
                  <i className="fa fa-search" />
                </div>
                <div className="to-social">
                  <Link>
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-youtube-play" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas-open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    
  );
};

export default Header;
