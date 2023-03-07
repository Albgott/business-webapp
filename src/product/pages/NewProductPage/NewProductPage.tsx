
import { ImageUploader } from '@/components/ImageUploader';
import { useAddProductForm } from '@/product/hooks';
import { uploadImageToProduct } from '@/product/services';
import { FormBox, OrangeButton, PageTitle} from '@/ui/components';
import OrangeTextField  from '@/ui/components/OrangeTextField/OrangeTextField';
import { Container, Toolbar} from '@mui/material';
import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
export interface NewProductPageProps {}

const NewProductPage : React.FC<NewProductPageProps> = () => {

	const { add, register, reset, product_id } = useAddProductForm()

	const handleSubmit: SubmitHandler<any>  = async (data) => {
		await add(data)
		.then(() => {
			reset()

    	filesToUpload.forEach((file) => uploadImageToProduct({
				image: file,
				product_id
			}))
			setFilesToUpload([])
		})
	}
	
	const [filesToUpload, setFilesToUpload] = useState<File[]>([])

	const handleFilesChange = (files: any) => {
    setFilesToUpload([ ...files ])
  };

	return (
		<Container>
			<Toolbar>
				<PageTitle>New product</PageTitle>
			</Toolbar>
			<FormBox title='Product information' >
				<div style={{display:'flex', placeItems:'start', flexWrap:'wrap', paddingBottom:'40px',paddingTop:'40px', gap:'30px'}}>
					<form onSubmit={handleSubmit} style={{flexGrow:1}}>
						<div style={{
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
				<ImageUploader onFilesChange={handleFilesChange}/>
				</div>
			</FormBox>
		</Container>
	);
};

export default NewProductPage;
