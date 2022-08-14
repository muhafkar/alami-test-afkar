import React, { useState } from 'react';
import styled from 'styled-components';

import { CgSearch, CgShoppingCart } from 'react-icons/cg';
import { FaBars, FaChevronDown } from 'react-icons/fa';

import Actions from './Actions';

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
  flex-direction: column;
  justify-content: center;
`;

const MenuIconsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 0px;
`;

const MenuItemWrapper = styled.div`
  text-decoration: none;
  height: 100%;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  color: rgb(24 28 84);
  cursor: pointer;
  margin-bottom: 20px;
`;

const HiddenMenu = styled.div`
  background-color: white;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

function MenuItem({ label, onClick = null }) {
  return (
    <MenuItemWrapper onClick={onClick}>
      {label}
      <FaChevronDown size={10} style={{ marginLeft: 5, marginTop: 5 }} />
    </MenuItemWrapper>
  );
}

function MobileNavbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Wrapper>
      <Content>
        <MenuIconsWrapper>
          <CgSearch size={18} />
          <CgShoppingCart size={18} style={{ marginRight: 30, marginLeft: 30 }} />
          <FaBars
            size={18}
            onClick={() => {
              setMenuVisible((prevState) => !prevState);
            }}
          />
        </MenuIconsWrapper>
      </Content>
      <HiddenMenu isVisible={menuVisible}>
        <MenuListWrapper>
          <MenuItem label="Demos" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} />
          <MenuItem label="Pages" />
          <MenuItem label="Portfolio" />
        </MenuListWrapper>
        <Actions />
      </HiddenMenu>
    </Wrapper>
  );
}

export default MobileNavbar;
