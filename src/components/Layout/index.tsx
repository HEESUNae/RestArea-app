import { Outlet } from 'react-router-dom';
import { StyledLayout } from './style';
import { Header } from '../Header';

export const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  );
};
