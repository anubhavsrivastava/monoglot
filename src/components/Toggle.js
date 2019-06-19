import React, { useState } from 'react';

export default function Toggle({ options, onToggle = () => {} }) {
  const [select, toggleSelect] = useState(options[0].name);
  const [toggleClass, changeToggleClass] = useState('rotate-toggle');
  return (
    <div className="toggle-container">
      <div className={`main-toggle ${toggleClass}`}>
        {options.map((o, i) => {
          return (
            <React.Fragment key={o.name}>
              <input
                onClick={e => {
                  onToggle(o.value);
                  toggleSelect(o.name);
                  changeToggleClass(i ? `rotate-toggle` : 'anti-rotate-toggle');
                }}
                defaultChecked={!i}
                type="radio"
                id={`choice${i + 1}`}
                name="choice"
                value={o.value}
              />
              <label htmlFor={`choice${i + 1}`}>
                {select !== o.name ? o.name : ''}
              </label>
            </React.Fragment>
          );
        })}

        {/* <input type="radio" id="choice1" name="choice" value="org" />
        <label htmlFor="choice1">Organisations</label>

        <input type="radio" id="choice2" name="choice" value="ind" />
        <label htmlFor="choice2">Individuals</label> */}

        <div id="flap">
          <span className="content">{select}</span>
        </div>
      </div>
    </div>
  );
}
