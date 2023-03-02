import React from 'react';
import styled from 'styled-components';
export interface WelcomeMessageProps {}

const WelcomeMessage : React.FC<WelcomeMessageProps> = () => {
	return(
		<WelcomeMessageStyle>
			Welcome to <br/> <span>Albgott</span>
		</WelcomeMessageStyle>
	) 
};

export const WelcomeMessageStyle = styled.h2`
	font-size: 50px;
  text-align: center;
  color: var(--secondary-color);

	span {
		color: var(--primary-color);
	}
`;

export default WelcomeMessage;
