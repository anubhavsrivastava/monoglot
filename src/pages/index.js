import React, { Component } from 'react';
// import Scrollspy from 'react-scrollspy';
import orgs from '../data/org.json';
import individual from '../data/individual.json';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Scroll from '../components/Scroll';

import strip1 from '../assets/images/strip11.svg';
import strip2 from '../assets/images/strip12.svg';
import strip3 from '../assets/images/strip13.svg';
import strip4 from '../assets/images/strip14.svg';
// import window from '../assets/images/window.svg';
// import icon1 from '../assets/images/icon1.svg';
// import icon2 from '../assets/images/icon2.svg';
// import icon3 from '../assets/images/icon3.svg';
// import icon4 from '../assets/images/icon4.svg';
import Listing from '../components/Listing';
import Toggle from '../components/Toggle.js';

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: orgs,
      sourceName: 'org',
    };
  }

  onSourceChange = sourceName => {
    this.setState({
      sourceName,
      source: sourceName === 'org' ? orgs : individual,
    });
  };

  render() {
    const { source, sourceName } = this.state;
    return (
      <Layout>
        <div className="body-wrap boxed-container">
          <Header />
          <main>
            <section className="hero text-center full-container">
              <div className="container-sm">
                <div className="hero-inner">
                  <h1 className="hero-title h2-mobile mt-0 is-revealing">
                    Monoglot
                  </h1>
                  <p className="hero-paragraph is-revealing">
                    Speaking only one language - Engineering
                  </p>
                  <div className="search-box ">
                    <div className="search-container">
                      <span className="search-icon">
                        <i className="fa fa-search" />
                      </span>
                      <input
                        type="search"
                        autoComplete="off"
                        id="search"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <Toggle
                    onToggle={name => this.onSourceChange(name)}
                    options={[
                      { name: 'Organisation', value: 'org' },
                      { name: 'Individual', value: 'ind' },
                    ]}
                  />
                  <div className="hero-browser">
                    <div className="bubble-3 is-revealing">
                      <img src={strip1} alt="" />
                    </div>
                    <div className="bubble-4 is-revealing">
                      <img src={strip2} alt="" />
                    </div>
                    <div className="hero-browser-inner is-revealing">
                      <div className="content">
                        <Listing name={sourceName} entries={source.entries} />
                      </div>
                      {/* <img src={window} alt="" /> */}
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

            {/* <section className="features section text-center">
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
        </section> */}

            {/* <section className="newsletter section">
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
        </section> */}
          </main>
          <Footer />
        </div>
      </Layout>
    );
  }
}
