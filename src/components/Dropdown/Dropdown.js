import React from 'react';
import './Dropdown.css';

function Dropdown({ dropdownListData, showDropdown }) {
  return (
    <ul className={showDropdown ? 'dropdown shown' : 'dropdown'}>
      {dropdownListData.map(({ text, link }, index) => {
        return (
          <li key={index} className="dropdown-item">
            <a className="dropdown-link" href={link}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
