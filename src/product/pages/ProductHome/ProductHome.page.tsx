import React from 'react';
import { Button, Container, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircle';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { PageTitle } from '@/ui/components';


export interface ProductHomeProps {}

const rows: GridRowsProp = [
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
	{ id: 1, code: 'Hello', name: 'World' , description: "This is a description"},
]
const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width:5},
	{ field: 'code', headerName: 'Code', minWidth:150 ,flex:1},
  { field: 'name', headerName: 'Name',minWidth:150,flex:1},
  { field: 'description', headerName: 'Description', minWidth:300,flex:3},
]


const ProductHome : React.FC<ProductHomeProps> = () => {
	return (
		<Container>
			<Toolbar sx={{
					placeContent:'space-between',
					fontSize:'1.3rem'
				}}
			>
				<PageTitle>Products</PageTitle>
				<Button 
				  
					variant='contained' 
					sx={{
						backgroundColor:'var(--primary-color)',
						':hover':{
							backgroundColor:'var(--secondary-color)',

						},
						fontSize:{xs:'0.7rem', md:'1rem'}
					}}
					startIcon={<AddIcon/>}
				>
					new product
				</Button>
			</Toolbar>
		
      <DataGrid rows={rows} columns={columns} pageSize={15} autoHeight={true}/>
		</Container>
    
	);
};



export default ProductHome;
