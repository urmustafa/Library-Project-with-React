import styled from "styled-components";
import Flex from "../../styles/Flex";

export const AboutContainer = styled(Flex)`
    flex-direction:column;
    line-height:2;
    text-align:center;
`
export const ProfileImg = styled.img`
  margin: 2rem 0;
  border-radius: 50%;
  height: 200px;
  filter: drop-shadow(-5px 10px 10px #666);
`;

export const InfoContainer = styled.div`
  margin: 0 2rem 1rem;
  width: 60%;
  border: 1px solid white;
  padding: 5rem;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const IconContainer = styled.div`
    margin: 2rem;
    a {
        color:gray;
        padding:1rem;
    }
`
export const H5= styled.h5`
    margin-top: 2rem;
    font-size: 2vh;
    color: #1f1a1a;

`
export const H2= styled.h2`
    margin-top: 2rem;
    font-size: 6vh;
    color: #460505;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
`
