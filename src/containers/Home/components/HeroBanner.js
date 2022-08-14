import React from 'react';
import styled from 'styled-components';
import { CgChevronRight } from 'react-icons/cg';

const Wrapper = styled.div`
  height: 800px;
  width: 100%;
  background-image: url('/kitchen.jpeg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin-top: 70px;
`;

const Content = styled.div`
  text-align: center;
  padding-top: 170px;
  color: white;
`;

const Button = styled.button`
  background-color: green;
  padding: 15px 30px;
  border-radius: 25px;
  border-width: 0px;
  color: white;
  margin-top: 30px;
`;

const ButtonContent = styled.div`
  display: flex;
`;

export default function HeroBanner() {
  return (
    <Wrapper>
      <Content>
        <h2>Catering should be an experience</h2>
        <h1>We use only the finest and freshest ingredients</h1>
        <h4>
          At Sway catering we know that food is an important part of life.
          <br />
          If the meal is not perfect, your event cannot be perfect.
        </h4>
        <Button>
          <ButtonContent>
            Request Demo
            <CgChevronRight />
          </ButtonContent>
        </Button>
      </Content>
    </Wrapper>
  );
}
