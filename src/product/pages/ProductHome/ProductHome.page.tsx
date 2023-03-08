import React, { useEffect } from 'react';
import {Container, Toolbar} from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { PageTitle } from '@/ui/components';
import { useBusinessProducts } from '@/product/hooks';
import { GoNewProductButton } from './GoNewProductButton';
import { NoProductHolder } from '../NoProductHolder';
import { Loading } from '@/components/Loading';


export interface ProductHomeProps {}

const columns: GridColDef[] = [
	{field: 'name', headerName:'Name', minWidth:150, flex:1},
	{field: 'code', headerName:'Code', minWidth:150, flex:1},
	{field: 'description', headerName:'Description', minWidth:300, flex:3}
]

const pageSize = 15;

const ProductHome : React.FC<ProductHomeProps> = () => {

	const { products, hasProducts, loading } = useBusinessProducts()
	
	return (
		<Container >
			<Toolbar sx={{placeContent:'space-between',fontSize:'1.3rem'}}>
				<PageTitle>Products</PageTitle>
				{ !loading && <GoNewProductButton />}
			</Toolbar>
		{
			hasProducts?
				<DataGrid
					disableColumnSelector
					disableSelectionOnClick
					autoHeight
					pageSize={pageSize}
					rowsPerPageOptions={[pageSize]}
					rows={products}
					columns={columns}
				/>
				: (!loading && <NoProductHolder />)
			}
			{ loading && <Loading /> }
		</Container>
    
	);
};



export default ProductHome;
