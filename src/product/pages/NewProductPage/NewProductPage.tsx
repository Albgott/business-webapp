
import { useAddProductForm } from '@/product/hooks';
import { FormBox, OrangeButton, PageTitle} from '@/ui/components';
import OrangeTextField  from '@/ui/components/OrangeTextField/OrangeTextField';
import { Container, Toolbar} from '@mui/material';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
export interface NewProductPageProps {}

const NewProductPage : React.FC<NewProductPageProps> = () => {

	const { add, register, reset } = useAddProductForm()

	const handleSubmit: SubmitHandler<any>  = async (data) => {
		await add(data).then(() => reset())
	}


	return (
		<Container>
			<Toolbar>
				<PageTitle>New product</PageTitle>
			</Toolbar>
			<FormBox title='Product information'>
				<form onSubmit={handleSubmit}>
					<div style={{
						paddingTop: '50px',
						paddingBottom: '50px',
						display: 'flex',
						flexDirection: 'column',
						rowGap:'40px'
					}}>
						<OrangeTextField {...register('product_name')} id="product_name" name="product_name" variant='filled' label="Name" required/>
						<OrangeTextField {...register('product_code')} id="product_code" name="product_code" variant='filled' label="Internal code" defaultValue=""/>
						<OrangeTextField {...register('product_description')} id="product_description" name="product_description" variant='filled' label="Description" defaultValue="" multiline/>
						<OrangeButton type='submit'>Add product</OrangeButton>
					</div>	
				</form>
			</FormBox>
		</Container>
	);
};

export default NewProductPage;
