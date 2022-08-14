import React from 'react';
import styled from 'styled-components';

import { FaChevronDown } from 'react-icons/fa';
import { CgSearch, CgShoppingCart } from 'react-icons/cg';

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
  display: flex;
`;

const MenuListWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const MenuItemWrapper = styled.div`
  text-decoration: none;
  height: 100%;
  font-size: 16px;
  color: #2C2C2C;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuIconsAndSearchWrapper = styled(MenuListWrapper)`
  max-width: 100%;
  justify-content: end;
  align-items: center;
  margin: 0px;
`;

function MenuItem({ label }) {
  return (
    <MenuItemWrapper>
      {label}
      <FaChevronDown size={10} style={{ marginLeft: 5, marginTop: 5 }} />
    </MenuItemWrapper>
  );
}

function DesktopNavbar() {
  return (
    <Wrapper>
      <Content>
        <MenuListWrapper>
          <MenuItem label="Demos" />
          <MenuItem label="Pages" />
          <MenuItem label="Portfolio" />
        </MenuListWrapper>
        <MenuIconsAndSearchWrapper>
          <CgShoppingCart size={18} />
          <CgSearch size={18} />
          <TextInput />
        </MenuIconsAndSearchWrapper>
      </Content>
    </Wrapper>
  );
}

export default DesktopNavbar;
