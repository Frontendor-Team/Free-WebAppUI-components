import React from 'react';
import './Dropdown.css';

function Dropdown({ dropdownListData, showDropdown, navVariant }) {
  return (
    <ul className={`dropdown ${showDropdown ? 'shown' : ''} ${navVariant ? navVariant : ''}`}>
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
