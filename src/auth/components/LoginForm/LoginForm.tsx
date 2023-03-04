import { Form, OutlinedButton } from '@/ui/styled-components';
import React from 'react';
import { InputWithLabelAndErrors } from '@/auth/components';
import useLoginForm from '@/auth/hooks/useLoginForm';


const LoginForm : React.FC = () => {

	const { errors, register, doLogin } = useLoginForm()


	return(
		<Form onSubmit={doLogin}>
			<InputWithLabelAndErrors register={register} required name="businessName" label="Business name:" placeholder='Insert business name' errors={errors.businessName}/>
			<InputWithLabelAndErrors register={register} required name="email" label="Email:" placeholder='Insert email' type="email" errors={errors.email}/>
			<InputWithLabelAndErrors register={register} required name="password" label="Password:" placeholder='Insert password' type="password"errors={errors.businessName}/>
			<br />
			<OutlinedButton>Log in</OutlinedButton>
		</Form>
	);
};

export default LoginForm;
