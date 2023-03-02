import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--tertiary-color);
  font-weight: 700;
  padding: 15px 60px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
`

export const OutlinedButton = styled(Button)`
  outline: 3px solid var(--primary-color);
  outline-offset: 3px;

  &:hover{
    outline: 4px solid var(--primary-color);
    outline-offset: 4px;
  }
`
