import styled from "styled-components";

interface Props {
  error?: any;
}

export const Input = styled.input<Props>`
  border: none;
  outline: solid 2px ${props => props.error? "red" : "var(--primary-color)"};
  color: ${props => props.error? "red" : "var(--primary-color)"};
  padding: 15px 25px;
  border-radius: 30px;

  &::placeholder{
    color: ${props => props.error? "red" : "var(--primary-color)"};
  }

  &:focus{
    outline: solid 3px ${props => props.error? "red" : "var(--primary-color)"};
  }
` 