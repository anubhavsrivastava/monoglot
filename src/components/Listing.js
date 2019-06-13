import React, { Component } from 'react';
import orgs from '../data/org.json';

const alphabets26 = '#abcdefghijklmnopqrstuvwxyz';

export default class Listing extends Component {
  alphabeticalOrgs = () => {
    const sortedOrgs = alphabets26.split('').reduce((t, alphabet) => {
      t[alphabet] = [];
      return t;
    }, {});
    orgs.org.forEach(entry => {
      const candidate = entry.title.toLowerCase()[0];
      if (sortedOrgs[candidate]) {
        sortedOrgs[candidate].push(entry);
      } else {
        sortedOrgs['#'].push(entry);
      }
    });

    return sortedOrgs;
  };

  render() {
    const listItems = this.alphabeticalOrgs();
    const groups = Object.keys(listItems);
    return (
      <div className="list">
        <ul className="feed">
          {groups.map(g => {
            return listItems[g].length ? (
              <div className="content-list" key={g}>
                <div style={{ width: '100%' }}>{g.toUpperCase()}</div>
                {listItems[g].map(o => {
                  return <li key={o.title}>{o.title}</li>;
                })}
              </div>
            ) : null;
          })}
        </ul>
      </div>
    );
  }
}
