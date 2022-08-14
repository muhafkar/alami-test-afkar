import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 150px;
  overflow: hidden;
  margin-top: -150px;
`;

export default function WaveContentDivider() {
  return (
    <Wrapper>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
        <path d="M-17.21,65.63 C262.13,-75.48 323.08,153.46 522.85,72.54 L525.11,151.48 L-20.03,152.47 Z" style={{ stroke: 'none', fill: '#fff', opacity: 0.3 }} />
        <path d="M-15.52,74.51 C262.70,-43.91 323.08,153.46 523.42,93.26 L525.11,151.48 L-20.03,152.47 Z" style={{ stroke: 'none', fill: '#fff', opacity: 0.4 }} />
        <path d="M-21.72,81.42 C151.52,166.30 278.50,-80.41 536.40,102.14 L502.54,152.47 L-40.91,163.33 Z" style={{ stroke: 'none', fill: '#fff', opacity: 0.5 }} />
        <path d="M-11.00,110.04 C151.52,166.30 252.54,-40.94 538.66,117.93 L502.54,152.47 L-40.91,163.33 Z" style={{ stroke: 'none', fill: '#fff' }} />
      </svg>
    </Wrapper>
  );
}
