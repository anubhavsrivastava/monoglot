import React, { Component } from 'react';
import Scroll from './Scroll';
import Fade from 'react-reveal/Fade';
import copy from 'copy-text-to-clipboard';
const alphabets26 = '#abcdefghijklmnopqrstuvwxyz';
const hash = {};

class ListIndex extends Component {
  render() {
    const { groups } = this.props;
    return (
      <div className="list-index">
        <div className="list-index-inside">
          {groups.map(g => {
            return (
              <Scroll
                key={g}
                type="class"
                element={`#letter-${g.toUpperCase()}`}
              >
                <a href={`#letter-${g.toUpperCase()}`}>{g.toUpperCase()}</a>
              </Scroll>
            );
          })}
        </div>
      </div>
    );
  }
}
export default class Listing extends Component {
  alphabeticalOrgs = (name, entries) => {
    if (hash[name]) {
      return hash[name];
    }
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

    hash[name] = sortedOrgs;
    return sortedOrgs;
  };

  render() {
    const { name, entries } = this.props;
    const listItems = this.alphabeticalOrgs(name, entries);
    const groups = Object.keys(listItems).filter(g => listItems[g].length);

    return (
      <div className="list">
        <ListIndex groups={groups} />
        {groups.map(g => {
          return (
            <div className="content-list" key={g}>
              <div
                className={`#letter-${g.toUpperCase()}`}
                style={{ margin: '1em 0', fontSize: '2em', width: '100%' }}
              >
                {g.toUpperCase()}
              </div>
              <div className="feed">
                {listItems[g].map(o => {
                  return (
                    <Fade duration={1000} top>
                      <a
                        className="feed-item no-link"
                        key={o.title}
                        href={o.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {o.title}
                        <i
                          onClick={_ => copy(o.feed)}
                          class="hovered right fa fa-rss"
                          aria-hidden="true"
                        />
                      </a>
                    </Fade>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
