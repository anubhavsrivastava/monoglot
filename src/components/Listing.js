import React, { Component } from 'react';
import org from '../data/org.json';

export default class Listing extends Component {
  render() {
    return (
      <div className="list">
        <ul className="feed">
          {org.org.map(o => {
            return <li className="content-list"> {o.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
