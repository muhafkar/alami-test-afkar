import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
`;

export default function MiddleContent() {
  return (
    <Wrapper>
      <Content>
        <h2 style={{ fontFamily: 'veganstyle', color: 'grey' }}>Catering services in New York</h2>
        <h2 style={{ color: 'rgb(24 28 84)' }}>We specialize in corporate and private events</h2>
        <p style={{ color: 'grey' }}>
          <b>
            With 20 years of experience, we promise you the freshest, local ingredients,
            hand-crafted cooking sprinkled with our unique whimsical elegance and exceptional
            service.
          </b>
        </p>
      </Content>
    </Wrapper>
  );
}
