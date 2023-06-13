import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  text-decoration: none;
  padding: 30px;
  height: 100%;
  cursor: pointer;
  font-size: 20px;

  &.active {
    color: #15cdfc;
  }
`;

export const NavTitle = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 700px;
  cursor: pointer;
  font-size: 30px;
  font-weight: 900;

  &.active {
    color: #15cdfc;
  }
`;

export const NavDropdown = styled(Link)`
  color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  text-decoration: none;
  padding: 30px;
  height: 100%;
  cursor: pointer;
  font-size: 20px;

  &.active {
    color: #15cdfc;
  }
`;

export const NavDropDownHeader = styled('div')`
  padding: 1em 1.1em 1em 1.1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  color: #fff;
  &.active {
    color: #fff;
  }
`;

export const NavDropdownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #000;
  border: 1px solid #000;
  box-sizing: border-box;
  color: #fff;
  font-size: 20px;
  &:first-child {
    padding-top: 0.8em;
`;

export const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
  &.active {
    color: #fff;
  }
`;

export const NavDropDownContainer = styled('div')`
  width: 8em;
  margin: 0 auto;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 100%) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
