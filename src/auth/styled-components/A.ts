import styled from "styled-components";
import { Link } from "react-router-dom";

export const A = styled(Link)`
  color: black;
  text-decoration: none;
  margin-top: 2rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  font-size: 0.8rem;

  &:hover {
    color: var(--primary-color);
  }
` 