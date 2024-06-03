import React from 'react';
import { StyledPreloader } from './style';
import { FadeLoader } from 'react-spinners';

export const Preloader = () => {
  return (
    <StyledPreloader>
      <FadeLoader color="#ddd" />
    </StyledPreloader>
  );
};
