import React from 'react';
import './Dropdown.css';

function Dropdown({ dropdownListData, showDropdown, toggleDropdown }) {
  return (
    <ul className={`dropdown ${showDropdown ? 'dropdown--open' : ''}`}>
      {dropdownListData.map(({ text, link }, index) => {
        return (
          <li key={index} className="dropdown-item">
            <a className="dropdown-link" href={link} onClick={toggleDropdown}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
