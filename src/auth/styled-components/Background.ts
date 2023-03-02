import styled from "styled-components";

const Background = styled.div`
  position: relative;
  background: linear-gradient(to right, rgba(35,39,42,1) 0%, rgba(35,39,42,1) 50%, rgba(241,153,0,1) 50%, rgba(241,153,0,1) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 40px 0px;
  row-gap: 20px;

  &:before{
    content: "";
    background: center/200px url('/logo/albgott-background-pattern.png');
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.16;
  }
`

export default Background