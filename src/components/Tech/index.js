import React from 'react';
import styled from 'styled-components';

import { Span } from './styles';

const Tech = ({ className, name, Icon }) => {
  return (
    <div className={className}>
      <Icon size='3rem' />
      <Span>{name}</Span>
    </div>
  );
};

export default styled(Tech)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 8px;
  border-style: solid;
  border-width: 2px;
  border-color: #6d75d1;
  border-radius: 4px;
  padding: 8px 16px;
`;
