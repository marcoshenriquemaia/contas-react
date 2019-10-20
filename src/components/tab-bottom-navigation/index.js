import React from "react";
import { Container, Wrapper, Icon } from "./style";
import ButtonAdd from "./button-add";
import { NavLink } from 'react-router-dom'
 
const TabBottomNavigation = () => {
  return (
    <Container>
      <Wrapper>
        <NavLink to='/'> <Icon/> </NavLink>
        <Icon />
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
