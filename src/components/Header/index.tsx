import React from 'react';
import { StyledHeader } from './style';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div className="inner">
        <h1 className="logo" onClick={() => navigate('/')}>
          EX 고속도로 휴게소 홈페이지
        </h1>
      </div>
    </StyledHeader>
  );
};
