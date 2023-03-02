import { Input } from '@/ui/styled-components';
import React from 'react';
import styled from 'styled-components';
import ErrorIcon from "@/assets/error-icon.png"
export interface InputWithLabelAndErrorsProps {
	label: string
	errors?: string[]
	value?: string
	type?: string
	name: string
	onChange?: any
  onBlur?: any
	placeholder: string
}

const InputWithLabelAndErrors : React.FC<InputWithLabelAndErrorsProps> = (props) => {

	const hasErrors = props.errors? props.errors.length > 0 : false

	return (
		<InputWithLabelAndErrorsStyle>
			<label>{props.label}</label>
			<Input value={props.value} id={props.name} placeholder={props.placeholder} name={props.name} type={props.type} onBlur={props.onBlur} onChange={props.onChange} error={hasErrors}/>
			{hasErrors && 
			<ErrorWrapper >
				<img width="20" height="20" src={ErrorIcon}/>
				<Errors>
					{props.errors?.map(e => <span>{e}</span>)}
				</Errors>
			</ErrorWrapper>
			}
		</InputWithLabelAndErrorsStyle>
	)
};

InputWithLabelAndErrors.defaultProps = {
	type: "text",
	errors: []
} as Partial<InputWithLabelAndErrorsProps>

export const InputWithLabelAndErrorsStyle = styled.div`
	display:flex;
	flex-direction: column;
	gap: 5px;
	width: min-content;

	label {
		font-weight: 600;
  	text-transform: uppercase;
	}
`;

const ErrorWrapper = styled.div`
	color: red;
	display: flex;
`

const Errors = styled.div`
	display:flex;
	flex-wrap: wrap;
	font-size: 0.6rem;
	text-transform: uppercase;
	gap: 0;
	span{
		margin: 0;
	}
`

export default InputWithLabelAndErrors;
