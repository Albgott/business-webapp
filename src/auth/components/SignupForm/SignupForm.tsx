import { CreateBusinessRequest } from '@/auth/models';
import { Form, OutlinedButton } from '@/ui/styled-components';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputWithLabelAndErrors } from '../InputWithLabelAndErrors';
import {v4 as uuid} from 'uuid';
import { createBusiness } from '@/auth/services';
import { useNavigate } from 'react-router';
import { PublicRoutes } from '@/router';

interface IFormInput {
  businessName: string;
  accountName: string;
  email: string;
  password: string;
}


const SignupForm : React.FC = () => {

	const { register, handleSubmit } = useForm<IFormInput>()
	const navigate = useNavigate()

	const onsubmit: SubmitHandler<IFormInput> = async (data) => {
		console.log(data)
		const req: CreateBusinessRequest = {
			...data,
			businessId: uuid().toString(),
			accountId: uuid().toString()
		}

		try{
			await createBusiness(req)
			navigate(PublicRoutes.MAIL_SENDED, {replace:true})
		} catch(err){

		}
	}

	return(
		<Form onSubmit={handleSubmit(onsubmit)}>
			<InputWithLabelAndErrors register={register} required name="businessName" label="Business name:" placeholder='Insert business name'/>
			<InputWithLabelAndErrors register={register} required name="accountName" label="Username:" placeholder='Insert username'/>
			<InputWithLabelAndErrors register={register} required name="email" label="Email:" placeholder='Insert email' type="email"/>
			<InputWithLabelAndErrors register={register} required name="password" label="Password:" placeholder='Insert password' type="password"/>
			<br />
			<OutlinedButton type='submit'>Sign up</OutlinedButton>
		</Form>
	);
};

export default SignupForm;
