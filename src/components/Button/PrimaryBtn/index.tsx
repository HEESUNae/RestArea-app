import React, { PropsWithChildren } from 'react';
import { StyledPrimaryBtn } from './style';

export const PrimaryBtn = ({ children, onClick }: PropsWithChildren<{ onClick: () => void }>) => {
  return (
    <StyledPrimaryBtn type="button" onClick={onClick}>
      {children}
    </StyledPrimaryBtn>
  );
};
