import React, { useState } from 'react';
import styled from 'styled-components';

import { CgSearch, CgShoppingCart } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';

import TextInput from './TextInput';

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Content = styled.div`
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const MenuListWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const MenuIconsWrapper = styled(MenuListWrapper)`
  max-width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 0px;
`;

const TextInputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function MobileNavbar() {
  const [inputVisible, setInputVisible] = useState(false);
  return (
    <Wrapper>
      <Content>
        <MenuIconsWrapper>
          <CgSearch size={18} onClick={() => setInputVisible(!inputVisible)} />
          <CgShoppingCart size={18} />
          <FaBars size={18} />
        </MenuIconsWrapper>
        {
          inputVisible && (
            <TextInputWrapper>
              <TextInput />
            </TextInputWrapper>
          )
        }
      </Content>
    </Wrapper>
  );
}

export default MobileNavbar;
