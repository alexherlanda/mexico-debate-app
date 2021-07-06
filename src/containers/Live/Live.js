import React from 'react';
import MotionList from 'components/MotionList';
import NoticeList from 'components/NoticeList';
import BroadcastList from 'components/BroadcastList/';
import Section from 'components/Section';
import './Live.css';
function Live() {
  return (
    <div className="live-container">
      <Section title="Transmisiones">
        <BroadcastList />
      </Section>
      <Section title="Mociones">
        <MotionList />
      </Section>
      <Section title="Avisos">
        <NoticeList />
      </Section>
    </div>
  );
}
export default Live;
