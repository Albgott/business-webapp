import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const OrangeButton = styled(Button)({
	backgroundColor: 'var(--primary-color)',
	color: 'var(--secondary-color)',
	fontWeight:'700',
	'&:hover':{
		backgroundColor: '#cf7c00',
	}
})

export default OrangeButton
