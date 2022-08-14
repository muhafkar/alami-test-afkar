import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './index.css';

import NavBar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import WaveContentDivider from './components/WaveContentDivider';
import MiddleContent from './components/MiddleContent';
import Portfolio from './components/Portfolio';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Wrapper className="App">
      <Helmet>
        <title>Tech. Assesment Alami - Muhammad Afkar</title>
      </Helmet>
      <NavBar />
      <HeroBanner />
      <WaveContentDivider />
      <MiddleContent />
      <Portfolio />
    </Wrapper>
  );
}
