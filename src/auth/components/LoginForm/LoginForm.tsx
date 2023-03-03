import { Form, OutlinedButton } from '@/ui/styled-components';
import React from 'react';
import { InputWithLabelAndErrors } from '@/auth/components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { LoginRequest } from '@/auth/models';
import { doLogin } from '@/auth/services';
import { PrivateRoutes } from '@/router';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/states/user';

interface IFormInput {
  businessName: string;
  email: string;
  password: string;
}

const LoginForm : React.FC = () => {

	const { register, handleSubmit } = useForm<IFormInput>()

	const navigate = useNavigate()
	const dispatcher = useDispatch()

	const onsubmit: SubmitHandler<IFormInput> = async (data) => {
		const req: LoginRequest = {
			...data
		}

		try{
			const res = await doLogin(req)
			localStorage.setItem("token", res.token)
			dispatcher(login(res.user))
			navigate(PrivateRoutes.BACKOFFICE, {replace:true})
		} catch(err){
			console.log(err)
		}
	}

	return(
		<Form onSubmit={handleSubmit(onsubmit)}>
			<InputWithLabelAndErrors register={register} required name="businessName" label="Business name:" placeholder='Insert business name'/>
			<InputWithLabelAndErrors register={register} required name="email" label="Email:" placeholder='Insert email' type="email"/>
			<InputWithLabelAndErrors register={register} required name="password" label="Password:" placeholder='Insert password' type="password"/>
			<br />
			<OutlinedButton>Log in</OutlinedButton>
		</Form>
	);
};

export default LoginForm;
