import React from 'react';
import { StyledBedge } from './style';

interface BedgeProps {
  name: string | null;
}

export const Bedge: React.FC<BedgeProps> = ({ name }) => {
  return <StyledBedge>{name}</StyledBedge>;
};
