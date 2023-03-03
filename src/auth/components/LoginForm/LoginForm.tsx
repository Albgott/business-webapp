import { Form, OutlinedButton } from '@/ui/styled-components';
import React from 'react';
import { InputWithLabelAndErrors } from '@/auth/components';

export interface LoginFormProps {}

const LoginForm : React.FC<LoginFormProps> = () => {



	return(
		<Form>
			{/* {
				fields.map(field => <InputWithLabelAndErrors key={field.name} {...field}/>)
			} */}
			<br />
			<OutlinedButton>Log in</OutlinedButton>
		</Form>
	);
};

export default LoginForm;
