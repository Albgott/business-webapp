import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  background-color: #fff;
  padding: 30px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) { 
    width: auto;
    min-width: 30%;
    max-width: 1200px;
    padding: 30px 170px;
    border-radius: 50px;
    justify-self: center;
  }
`

export default Container