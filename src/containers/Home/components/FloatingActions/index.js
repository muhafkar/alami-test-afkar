import React from 'react';
import styled from 'styled-components';
import { BsChatLeft } from 'react-icons/bs';
import {
  FiLifeBuoy, FiFileText, FiVideo, FiUsers, FiShoppingCart,
} from 'react-icons/fi';

const Wrapper = styled.div`
  position: fixed;
  top: 250px;
  right: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-width: 0px;
  background-color: white;
`;

const ActionItem = styled.div`
  text-align: center;
  color: black;
  padding: 12px;

  &:not(:last-of-type) {
    border-bottom: 1px gray solid;
  }
`;

export default function FloatingActions() {
  return (
    <Wrapper>
      <ActionItem>
        <BsChatLeft size={18} />
      </ActionItem>
      <ActionItem>
        <FiLifeBuoy size={18} />
      </ActionItem>
      <ActionItem>
        <FiFileText size={18} />
      </ActionItem>
      <ActionItem>
        <FiVideo size={18} />
      </ActionItem>
      <ActionItem>
        <FiUsers size={18} />
      </ActionItem>
      <ActionItem>
        <FiShoppingCart size={18} color="green" />
      </ActionItem>
    </Wrapper>
  );
}
