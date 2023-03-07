import React, { useEffect } from 'react';
import {Container, Toolbar} from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { PageTitle } from '@/ui/components';
import { useBusinessProducts } from '@/product/hooks';
import { GoNewProductButton } from './GoNewProductButton';
import { NoProductHolder } from '../NoProductHolder';


export interface ProductHomeProps {}

const columns: GridColDef[] = [
	{field: 'name', headerName:'Name', minWidth:150, flex:1},
	{field: 'code', headerName:'Code', minWidth:150, flex:1},
	{field: 'description', headerName:'Description', minWidth:300, flex:3}
]

const pageSize = 15;

const ProductHome : React.FC<ProductHomeProps> = () => {

	const { products, hasProducts } = useBusinessProducts()
	
	return (
		<Container>
			<Toolbar sx={{placeContent:'space-between',fontSize:'1.3rem'}}>
				<PageTitle>Products</PageTitle>
				{hasProducts && <GoNewProductButton />}
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
				:
				<NoProductHolder />
			}
		</Container>
    
	);
};



export default ProductHome;
