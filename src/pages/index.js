import React from 'react';
// import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Scroll from '../components/Scroll';

import strip1 from '../assets/images/strip1.svg';
import strip2 from '../assets/images/strip2.svg';
import strip3 from '../assets/images/strip3.svg';
import strip4 from '../assets/images/strip4.svg';
import window from '../assets/images/window.svg';
import icon1 from '../assets/images/icon1.svg';
import icon2 from '../assets/images/icon2.svg';
import icon3 from '../assets/images/icon3.svg';
import icon4 from '../assets/images/icon4.svg';
const IndexPage = () => (
  <Layout>
    <div className="body-wrap boxed-container">
      <Header />
      <main>
        <section className="hero text-center">
          <div className="container-sm">
            <div className="hero-inner">
              <h1 className="hero-title h2-mobile mt-0 is-revealing">
                Landing template
              </h1>
              <p className="hero-paragraph is-revealing">
                Our landing page template works for all the devices, so you only
                have to setup it once, and get beautiful results forever.
              </p>
              <div className="hero-form newsletter-form field field-grouped is-revealing">
                <div className="control control-expanded">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Your best email&hellip;"
                  />
                </div>
                <div className="control">
                  <a
                    className="button button-primary button-block button-shadow"
                    href="/"
                  >
                    Get early access
                  </a>
                </div>
              </div>
              <div className="hero-browser">
                <div className="bubble-3 is-revealing">
                  <img src={strip1} alt="" />
                </div>
                <div className="bubble-4 is-revealing">
                  <img src={strip2} alt="" />
                </div>
                <div className="hero-browser-inner is-revealing">
                  <img src={window} alt="" />
                </div>
                <div className="bubble-1 is-revealing">
                  <img src={strip3} alt="" />
                </div>
                <div className="bubble-2 is-revealing">
                  <img src={strip4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features section text-center">
          <div className="container">
            <div className="features-inner section-inner has-bottom-divider">
              <div className="features-wrap">
                <div className="feature is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={icon1} alt="" />
                    </div>
                    <h3 className="feature-title">Discover</h3>
                    <p className="text-sm">
                      Where text is visible, people tend to focus on the textual
                      content rather than upon overall presentation.
                    </p>
                  </div>
                </div>
                <div className="feature is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={icon2} alt="" />
                    </div>
                    <h3 className="feature-title">Discover</h3>
                    <p className="text-sm">
                      Where text is visible, people tend to focus on the textual
                      content rather than upon overall presentation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-wrap">
                <div className="feature is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={icon3} alt="" />
                    </div>
                    <h3 className="feature-title">Discover</h3>
                    <p className="text-sm">
                      Where text is visible, people tend to focus on the textual
                      content rather than upon overall presentation.
                    </p>
                  </div>
                </div>
                <div className="feature is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={icon4} alt="" />
                    </div>
                    <h3 className="feature-title">Discover</h3>
                    <p className="text-sm">
                      Where text is visible, people tend to focus on the textual
                      content rather than upon overall presentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter section">
          <div className="container-sm">
            <div className="newsletter-inner section-inner">
              <div className="newsletter-header text-center is-revealing">
                <h2 className="section-title mt-0">Stay in the know</h2>
                <p className="section-paragraph">
                  Lorem ipsum is common placeholder text used to demonstrate the
                  graphic elements of a document or visual presentation
                </p>
              </div>
              <div className="footer-form newsletter-form field field-grouped is-revealing">
                <div className="control control-expanded">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Your best email&hellip;"
                  />
                </div>
                <div className="control">
                  <a
                    className="button button-primary button-block button-shadow"
                    href="/#"
                  >
                    Get early access
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
