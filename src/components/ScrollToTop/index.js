import React, { Component } from 'react';
import Scroll from '../Scroll';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityClass: '',
    };
  }

  HandleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'show') {
        this.setState({ visibilityClass: 'show' });
      }
    } else {
      if (visibilityClass === 'show') {
        this.setState({ visibilityClass: 'hide' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.HandleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.HandleScroll);
  }

  render() {
    const { visibilityClass } = this.state;
    return (
      <Scroll type="class" element="main-body" offset={100}>
        <a
          href="#top"
          className={visibilityClass}
          id="scroll-top"
          title="Go to top"
        >
          <i className="fa fa-arrow-up " />
        </a>
      </Scroll>
    );
  }
}
