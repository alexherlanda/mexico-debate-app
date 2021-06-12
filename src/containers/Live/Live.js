import React from 'react';
import MotionList from 'components/MotionList';
import NoticeList from 'components/NoticeList';
import Section from 'components/Section';
import './Live.css';
function Live() {
  return (
    <div className="live-container">
      <Section>
        <MotionList />
      </Section>
      <Section>
        <NoticeList />
      </Section>
    </div>
  );
}
export default Live;
