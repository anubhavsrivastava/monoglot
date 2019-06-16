import React, { Component } from 'react';

const alphabets26 = '#abcdefghijklmnopqrstuvwxyz';

export default class Listing extends Component {
  alphabeticalOrgs = entries => {
    const sortedOrgs = alphabets26.split('').reduce((t, alphabet) => {
      t[alphabet] = [];
      return t;
    }, {});
    entries.forEach(entry => {
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
    const listItems = this.alphabeticalOrgs(this.props.entries);
    const groups = Object.keys(listItems);
    return (
      <div className="list">
        {groups.map(g => {
          return listItems[g].length ? (
            <div className="content-list" key={g}>
              <div style={{ width: '100%' }}>{g.toUpperCase()}</div>
              <ul className="feed">
                {listItems[g].map(o => {
                  return (
                    <li key={o.title}>
                      <a
                        className="no-link"
                        href={o.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {o.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null;
        })}
      </div>
    );
  }
}
