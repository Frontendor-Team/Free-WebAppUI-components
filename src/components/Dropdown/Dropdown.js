import React from 'react';
import '../../assets/variables.css';
import './Dropdown.css';

function Dropdown({ dropdownListData, showDropdown, toggleDropdown }) {
  return (
    <ul className={`ui-dropdown ${showDropdown ? 'ui-dropdown--open' : ''}`}>
      {dropdownListData.map(({ text, link }, index) => {
        return (
          <li key={index} className="ui-dropdown-item">
            <a className="ui-dropdown-link" href={link} onClick={toggleDropdown}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
