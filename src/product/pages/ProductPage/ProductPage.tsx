import { Product } from '@/product/models';
import { Box, Container, Grid, Toolbar, Typography} from '@mui/material';
import { getProductById } from '@/product/services';
import Carousel from '@/components/Carousel/CarouselImages'

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
export interface ProductPageProps {}

const ProductPage : React.FC<ProductPageProps> = () => {

	const [product, setProduct] = useState<Product>()
	const { id } = useParams()

	const fecthP = async () => {
		return await getProductById(id)
	}

	useEffect( () => {
		const fetchProduct = fecthP()
		.then(p => setProduct(p))
	}, [id])
	

	return(
		<Box>
			<Container maxWidth={'xl'}>
				<Grid container>
					<Grid item xs={12} sm={4}>
						{ product &&
							<Carousel data={product?.images_ids} />
						}
					</Grid>
					<Grid item xs={12} sm={8}>
						<Container sx={{justifyContent: 'start',
					}}>
							<Toolbar disableGutters>
								<Typography
									variant='h2'
									fontWeight="bold"
									fontSize={{xs: '2rem', md:'3rem'}}
									sx={{ 
										color: 'var(--secondary-color)',
										textAlign: 'left'
									}}>
									{product?.name}
								</Typography>
								<Typography
									variant='h3'
									fontSize={{xs: '2rem', md:'3rem'}}
									sx={{ 
										color: 'var(--secondary-color)',
										textAlign: 'left',
										fontWeight:'light'
									}}>
									({product?.code})
								</Typography>
							</Toolbar>
							{product?.code}
							{product?.description}
						</Container>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
};

export default ProductPage;
