import { Input } from '@/ui/styled-components';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ErrorIcon from "@/assets/error-icon.png"
export interface InputWithLabelAndErrorsProps {
	label: string
	errors?: string[]
	value?: string
	type?: string
	name: string
	placeholder: string
	register: any,
	required?: boolean
}

const InputWithLabelAndErrors : React.FC<InputWithLabelAndErrorsProps> = (props) => {

	let hasErrors = props.errors? props.errors.length > 0 : false
	useEffect(() => {
		hasErrors = props.errors? props.errors.length > 0 : false
	}, [props.errors])
	

	return (
		<InputWithLabelAndErrorsStyle>
			<label htmlFor={props.name}>{props.label}</label>
			<Input value={props.value} id={props.name} placeholder={props.placeholder}  type={props.type} error={hasErrors} {...props.register(props.name,{required:props.required})}/>
			{hasErrors && 
			<ErrorWrapper >
				<img width="20" height="20" src={ErrorIcon}/>
				<Errors>
					{props.errors?.map(e => <span key={e}>{e}</span>)}
				</Errors>
			</ErrorWrapper>
			}
		</InputWithLabelAndErrorsStyle>
	)
};

InputWithLabelAndErrors.defaultProps = {
	type: "text",
	errors: [],
	required: false
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
	align-items: center;
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
