import React from 'react'
import { Div, FooterBtn, FooterContainer } from './Footer.style';
import { lightIcon, darkIcon } from "../../helper/iconData";

const Footer = ({myTheme,setMyTheme}) => {


  return (
    <FooterContainer>
      {/* <FooterBtn>
       Merhaba
      </FooterBtn> */}
      <Div>Mustafa Tayyar tarafından tasarlandı. 2023</Div>
    </FooterContainer>
  );
}

export default Footer