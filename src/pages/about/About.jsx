import React from 'react'
import { AboutContainer, H2, H5, IconContainer, InfoContainer, ProfileImg } from './About.style'
import Icon from '../../components/icon/Icon'
import { iconData } from '../../helper/iconData'
import profile from "../../assets/profile.png"

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="mustsfa"></ProfileImg>
      <InfoContainer>
        <H2>Merhaba, Ben Mustafa Tayyar</H2>
        {/* <h2>Merhaba, Ben Mustafa Tayyar</h2> */}
        <h3>Bilgisayar mühendsiiyim.</h3>
        <h4>React üzerine çalışmalr yapıyor ve kendimi geiştiriyorum. Sürekli öğrenmeye ve kendimi geliştirmeye gayret ediyorum. Özellikle Js, ReactJs, NextJs, 
          Django ve Sql üzerine yoğunlaşıyorum </h4>
          <H5>Meraknız için teşekkürler</H5>
        {/* <h5>Meraknız için teşekkürler</h5>   */}
      </InfoContainer>
      <IconContainer>
        {iconData.map(item=><a key={item.icon} href={item.href}><Icon icon={item.icon} path={item.path} hoverColor={item.color}></Icon></a>)}
      </IconContainer>
    </AboutContainer>
  )
}

export default About