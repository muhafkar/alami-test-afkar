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
  justify-content: center;
`;

const MenuItemWrapper = styled.div`
  text-decoration: none;
  height: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  color: rgb(24 28 84);
  cursor: pointer;
`;

const MenuIconsAndSearchWrapper = styled(MenuListWrapper)`
  max-width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 0px;
  margin-left: 30px;
  cursor: pointer;
`;

// function onMenuClicked() {

// }

function MenuItem({ label, onClick = null }) {
  return (
    <MenuItemWrapper onClick={onClick}>
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
          <MenuItem label="Demos" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} />
          <MenuItem label="Pages" />
          <MenuItem label="Portfolio" />
        </MenuListWrapper>
        <MenuIconsAndSearchWrapper>
          <CgShoppingCart size={18} style={{ marginLeft: 30 }} />
          <CgSearch size={18} style={{ marginLeft: 30, marginRight: 30 }} />
          <TextInput />
        </MenuIconsAndSearchWrapper>
      </Content>
    </Wrapper>
  );
}

export default DesktopNavbar;
