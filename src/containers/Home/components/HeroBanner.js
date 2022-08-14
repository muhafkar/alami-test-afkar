import React from 'react';
import styled from 'styled-components';
import { CgChevronRight } from 'react-icons/cg';

const Wrapper = styled.div`
  height: 800px;
  max-height: 100vh;
  width: 100%;
  background-image: url('/kitchen.jpeg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin-top: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  padding: 0px 20px 0px 20px;
  color: white;
  max-width: 600px;
  margin-top: -150px;
`;

const Button = styled.button`
  background-color: green;
  padding: 15px 30px;
  border-radius: 25px;
  border-width: 0px;
  color: white;
  margin-top: 30px;
  font-weight: 700;
`;

const ButtonContent = styled.div`
  display: flex;
`;

export default function HeroBanner() {
  return (
    <Wrapper>
      <Content>
        <h2 style={{ fontFamily: 'veganstyle' }}>Catering should be an experience</h2>
        <h1>We use only the finest and freshest ingredients</h1>
        <p>
          At Sway catering we know that food is an important part of life.
          <br />
          If the meal is not perfect, your event cannot be perfect.
        </p>
        <Button>
          <ButtonContent>
            Request a Quote
            <CgChevronRight style={{ marginLeft: 5 }} />
          </ButtonContent>
        </Button>
      </Content>
    </Wrapper>
  );
}
