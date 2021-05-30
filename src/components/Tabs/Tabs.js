import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import sections from '../../data/sections';
import './Tabs.css';

const Tabs = () => {
  const { pathname } = useLocation();

  return (
    <nav className="tabs">
      <ul className="tabs__list">
        {sections.map((section) => (
          <li key={section.title}>
            <Link
              className={pathname === section.to ? 'tabs__list-link active' : 'tabs__list-link'}
              to={section.to}
            >
              {section.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
