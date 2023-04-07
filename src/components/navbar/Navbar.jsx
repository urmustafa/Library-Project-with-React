import React from 'react'
import {HamburgerIcon, Logo, Menu, MenuLink, Nav} from './Navbar.style'
import {menuIcon} from "../../helper/iconData"
import { useState } from 'react'

const Navbar = ({currentUser, setCurrentUser}) => {
  const [showMenu, setShowMEnu]=useState(false)

  const logout=()=>{
      setCurrentUser(false)
      sessionStorage.clear();
  }


  return (
    <Nav justify="space-between" wrap="wrap">
        <Logo to="/"> Mustafa Library </Logo>
        <HamburgerIcon onClick={()=>setShowMEnu(!showMenu)}>
          {menuIcon}
        </HamburgerIcon>
        <Menu showMenu={showMenu}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          {/* <MenuLink to="/register">Register</MenuLink>
          <MenuLink to="/login">Login</MenuLink>
          <MenuLink to="/login">Logout</MenuLink> */}
          {
            currentUser ? <MenuLink to="/login" onClick={logout}>Logout</MenuLink>
             :
             (
             <>
              <MenuLink to="/register">Register</MenuLink>
              <MenuLink to="/login">Login</MenuLink>
             </>
            )
          }

        </Menu>
    </Nav>
  )
}

export default Navbar