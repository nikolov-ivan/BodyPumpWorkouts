import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hs-slider owl-carousel">
        <div className="hs-item set-bg" data-setbg="img/hero/hero-1.jpg">
           
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="hi-text">
                  <span>Оформи тялото си</span>
                  <h1>
                    Бъди <strong>силен</strong> тренирай здраво
                  </h1>
                  <Link className="primary-btn">Повече</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hs-item set-bg" data-setbg="img/hero/hero-2.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="hi-text">
                  <span>Shape your body</span>
                  <h1>
                    Be <strong>strong</strong> traning hard
                  </h1>
                  <Link className="primary-btn">Get info</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
