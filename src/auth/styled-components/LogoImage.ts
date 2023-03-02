import styled from "styled-components";

const LogoImage = styled.img`
  position: relative;
  filter: drop-shadow(5px 5px 3px rgba(0,0,0,0.8));
  min-width: 150px;

  @media (min-width: 768px){
    width: 230px;
    align-self: flex-start;
    margin-left: 50px;
  }
`

export default LogoImage