import React from 'react';
import styled from 'styled-components';

import { BiCube, BiCommand } from 'react-icons/bi';
import { FiFeather, FiThumbsUp } from 'react-icons/fi';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(64 64 64);
  padding: 20px 0px;

  @media (min-width: 992px) {
    width: 20%;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: rgb(48 39 42);
  padding: 0px 20px 20px 20px;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

const SkillItem = styled.div`
  background-color: rgb(54 42 46);
  padding: 20px;
  margin: 20px 20px 0px 0px;

  @media (min-width: 992px) {
    width: 40%;
  }
`;

const SkillTitle = styled.div`
  color: rgb(245 124 132);
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
`;

const SkillDescription = styled.p`
  color: rgb(127 98 101);
`;

const ServicesWrapper = styled.div`
  background-color: rgb(48 39 42);
  padding: 20px;

  @media (min-width: 992px) {
    width: 30%;
  }
`;

const ServicesTitle = styled.h2`
  color: rgb(245 124 132);
  margin-bottom: 40px;
`;

export default function Portfolio() {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1 style={{ color: 'white' }}>
          My Portfolio
        </h1>
      </TitleWrapper>
      <SkillsWrapper>
        <SkillItem>
          <BiCube size={60} color="rgb(127 98 101)" />
          <SkillTitle>Design</SkillTitle>
          <SkillDescription>
            A full stack allaraound designer that may or may not include
            a guide for spesific creative people
          </SkillDescription>
        </SkillItem>
        <SkillItem>
          <BiCommand size={60} color="rgb(127 98 101)" />
          <SkillTitle>Develop</SkillTitle>
          <SkillDescription>
            Tellus pharetra erat tristique erat donec dignissim etiam sed malesik
            enim sodales lorem ipsum
          </SkillDescription>
        </SkillItem>
        <SkillItem>
          <FiFeather size={60} color="rgb(127 98 101)" />
          <SkillTitle>Write</SkillTitle>
          <SkillDescription>
            Vestibulum consequat, dignissim tellus sollicitudin vulputate elit aliquet
            ullamcorper feugiat nisi
          </SkillDescription>
        </SkillItem>
        <SkillItem>
          <FiThumbsUp size={60} color="rgb(127 98 101)" />
          <SkillTitle>Promote</SkillTitle>
          <SkillDescription>
            Qyan facukusu bybc faycuvys at oirttutir vestibuluim consequat dignissim tellus
            sollicitudin
          </SkillDescription>
        </SkillItem>
      </SkillsWrapper>
      <ServicesWrapper>
        <ServicesTitle>
          Services
        </ServicesTitle>
        <p style={{ fontSize: 20, color: 'rgb(127 98 101)' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Viverra tristique placerat in massa consectetur quisque nunc fames.
        </p>
        <p style={{ color: 'rgb(127 98 101)' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat
          in massa consectetur quisque. Nunc ac fames lectus in libero aliquet.
          <br />
          <br />
          Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus
          diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet
          tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus
        </p>
      </ServicesWrapper>
    </Wrapper>
  );
}
