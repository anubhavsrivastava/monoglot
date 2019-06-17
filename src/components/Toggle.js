import React, { PureComponent } from 'react';

export default class Toggle extends PureComponent {
  render() {
    return (
      <div className="toggle-container">
        <form className="main-toggle">
          <input type="radio" id="choice1" name="choice" value="org" />
          <label htmlFor="choice1">Organisations</label>

          <input type="radio" id="choice2" name="choice" value="ind" />
          <label htmlFor="choice2">Individuals</label>

          <div id="flap">
            <span className="content">Organisations</span>
          </div>
        </form>
      </div>
    );
  }
}
