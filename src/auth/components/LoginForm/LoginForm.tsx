import { Form, OutlinedButton } from '@/ui/styled-components';
import React from 'react';
import { InputWithLabelAndErrors } from '@/auth/components';
export interface LoginFormProps {}

const LoginForm : React.FC<LoginFormProps> = () => {
	return(
		<Form>
			<InputWithLabelAndErrors label='Business name:'  name="businessName"  placeholder='Insert your business name'/>
			<InputWithLabelAndErrors label='Email:' type="email"  name="email" placeholder='Insert your email'/>
			<InputWithLabelAndErrors label='Password:' type="password"  name="password" placeholder='Insert your password'/>
			<br />
			<OutlinedButton>Log in</OutlinedButton>
		</Form>
	);
};

export default LoginForm;
