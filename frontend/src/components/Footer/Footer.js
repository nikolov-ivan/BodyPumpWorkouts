import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fs-about">
                <div className="fa-logo">
                  <link to="#" />
                  <img src="img/logo.png" alt="logo" />
                  <link />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua
                  endisse ultrices gravida lorem.
                </p>
                <div className="fa-social">
                  <Link>
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link>
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link>
                    <i className="fa fa-youtube-play" />
                  </Link>
                  <Link>
                    <i className="fa fa-instagram" />
                  </Link>
                  <Link>
                    <i className="fa  fa-envelope-o" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Useful links</h4>
                <ul>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                  <li>
                    <Link>classNamees</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Support</h4>
                <ul>
                  <li>
                    <Link>Login</Link>
                  </li>
                  <li>
                    <Link>My account</Link>
                  </li>
                  <li>
                    <Link>Subscribe</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="fs-widget">
                <h4>Tips &amp; Guides</h4>
                <div className="fw-recent">
                  <h6>
                    <Link>
                      Physical fitness may help prevent depression, anxiety
                    </Link>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
                <div className="fw-recent">
                  <h6>
                    <Link>
                      Fitness: The best exercise to lose belly fat and tone
                      up...
                    </Link>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="copyright-text">
                <p> All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
