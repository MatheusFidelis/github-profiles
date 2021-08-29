import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 15px 15px 0px 0px;
  height: 80px;
  width: 375px;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  height: 50px;
  color: #a5a5a5;
`;

export const NavbarIcon = styled.div`
  height: 34px;
`;

export const NavbarText = styled.p`
  color: ${({ color }) => color};
  font-size: 15px;
  text-align: center;
  font-weight: 700;

  margin: 0;
`;
