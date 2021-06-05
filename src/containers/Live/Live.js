import React from 'react';
import MotionList from 'components/MotionList';
import NoticeList from 'components/NoticeList';
import Section from 'components/Section';
function Live() {
  return (
    <>
      <Section>
        <MotionList />
      </Section>
      <Section>
        <NoticeList />
      </Section>
    </>
  );
}
export default Live;
