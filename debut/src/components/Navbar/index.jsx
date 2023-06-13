/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react';
import {
  Bars,
  ListItem,
  Nav,
  NavDropdown,
  NavDropDownContainer,
  NavDropDownHeader,
  NavDropdownList,
  NavLink,
  NavMenu,
  NavTitle,
} from './NavbarElements';

const Navbar = function NavigationComponent() {
  const [loggedOut, setLoggedOut] = useState(false);
  const [down, setDown] = useState(false);
  const toggle = () => setDown(true);
  const logOut = () => {
    window.location.href = '/';
  };
  if (!loggedOut) {
    return (
      <div>
        <Nav>
          <Bars />
          <NavMenu>
            <NavTitle to="/ " activeStyle>
              DEBUT
            </NavTitle>
            <NavLink to="/home" activeStyle>
              Home
            </NavLink>
            <NavDropdown
              to="/ "
              activeStyle
              onMouseEnter={() => console.log('display projects dropdown')}
              onMouseLeave={() => console.log('hide projects dropdown')}
            >
              Projects
            </NavDropdown>
            <NavLink to="/messages" activeStyle>
              Messages
            </NavLink>
            <NavDropDownContainer>
              <NavDropDownHeader onClick={toggle}>Profile</NavDropDownHeader>
              {down && (
                <NavDropdownList>
                  <ListItem onClick={logOut}>Log out</ListItem>
                </NavDropdownList>
              )}
            </NavDropDownContainer>
          </NavMenu>
        </Nav>
      </div>
    );
  }
};

export default Navbar;

//
// 2. rachel should fix her code what-ever-it is
