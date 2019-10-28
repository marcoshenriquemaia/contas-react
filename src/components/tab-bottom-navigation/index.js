import React from "react";
import { Container, Wrapper, Icon, IconExpanse } from "./style";
import ButtonAdd from "./button-add";
import { NavLink } from 'react-router-dom'
 
const TabBottomNavigation = () => {
  return (
    <Container>
      <Wrapper>
        <NavLink to='/'> <Icon/> </NavLink>
        <NavLink to='/expanses'> <IconExpanse/> </NavLink>
      </Wrapper>
      <NavLink to='/dialer'> <ButtonAdd/> </NavLink>
      <Wrapper>
        <Icon />
        <Icon />
      </Wrapper>
    </Container>
  );
};

export default TabBottomNavigation;
