import React from 'react';
import { StyledHeader } from './style';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="inner">
        <div className="logo">
          <a href="/">고속도로 휴게소 홈페이지</a>
        </div>
      </div>
    </StyledHeader>
  );
};
