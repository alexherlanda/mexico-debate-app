import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sections from '../../data/sections';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('');

  const handleOnTabClick = (clickedTabName) => {
    setActiveTab(clickedTabName);
  };

  return (
    <nav className="tabs">
      <ul className="tabs__list">
        {sections.map((section) => (
          <li key={section.title}>
            <Link
              className={activeTab === section.title ? 'tabs__list-link active' : 'tabs__list-link'}
              to={section.to}
              onClick={() => handleOnTabClick(section.title)}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
