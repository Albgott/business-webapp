import { Form, OutlinedButton } from '@/ui/styled-components';
import React, { FormEvent } from 'react';
import { InputWithLabelAndErrors } from '../InputWithLabelAndErrors';

export interface SignupFormProps {}

const handleSubmit = (event: FormEvent) => {
	event.preventDefault();
};

const SignupForm : React.FC<SignupFormProps> = () => {


	return(
		<Form onSubmit={handleSubmit}>
			{/* {
				fields.map(field => <InputWithLabelAndErrors key={field.name} {...field}/>)
			} */}
			<br />
			<OutlinedButton>Sign up</OutlinedButton>
		</Form>
	);
};

export default SignupForm;
