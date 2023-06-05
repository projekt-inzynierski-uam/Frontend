import React from 'react';
import { Group, Button } from '@mantine/core';
import { HeaderMegaMenu } from '../components/header.tsx';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-header" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999 }}>
        <HeaderMegaMenu></HeaderMegaMenu>
      </div>
      {/* Add the rest of your landing page content here */}
    </div>
  );
};

export default LandingPage;