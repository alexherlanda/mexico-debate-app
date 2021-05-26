import React from 'react';
import { Link } from 'react-router-dom';
import sections from '../../data/sections';
import './Tabs.css';

const Tabs = () => {
  return (
    <nav className="tabs">
      <ul className="tabs__list">
        {sections.map((section) => (
          <li key={section.title}>
            <Link to={section.to}> {section.title} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
