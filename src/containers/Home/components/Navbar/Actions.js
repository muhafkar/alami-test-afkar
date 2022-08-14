import React from 'react';
import styled from 'styled-components';
import { BsChatLeft } from 'react-icons/bs';
import {
  FiLifeBuoy, FiFileText, FiVideo, FiUsers, FiShoppingCart,
} from 'react-icons/fi';

const Wrapper = styled.div`
  display: flex;
  border-width: 0px;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const ActionItem = styled.div`
  text-align: center;
  color: black;
  padding: 12px;

  &:not(:last-of-type) {
    border-right: 1px gray solid;
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
