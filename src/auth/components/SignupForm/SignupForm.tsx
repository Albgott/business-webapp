import { Form, Input, OutlinedButton } from '@/ui/styled-components';
import React from 'react';
import { InputWithLabelAndErrors } from '../InputWithLabelAndErrors';
export interface SignupFormProps {}

const SignupForm : React.FC<SignupFormProps> = () => {
	return(
		<Form>
			<InputWithLabelAndErrors label='Business name:'  name="businessName"  placeholder='Insert business name'/>
			<InputWithLabelAndErrors label='Username:'  name="accountName" placeholder='Insert a username'/>
			<InputWithLabelAndErrors label='Email:' type="email"  name="email" placeholder='Insert an email'/>
			<InputWithLabelAndErrors label='Password:' type="password"  name="password" placeholder='Insert password'/>
			<br />
			<OutlinedButton>Sign up</OutlinedButton>
		</Form>
	);
};

export default SignupForm;
