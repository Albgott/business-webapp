import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

const OrangeTextField = styled(TextField)({
	input: {
		color: 'white',
	},
	label: {
		color: 'var(--primary-color)',
	},
	"& .MuiFormHelperText-root": {
		color: 'red'
	},
	'& label.Mui-focused': {
    color: 'var(--primary-color)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--primary-color)',
  },
  '&:hover .MuiInput-root::before': {
    borderBottomColor: 'var(--primary-color)',
  },
  '& .MuiInput-root::before': {
    borderBottomColor: 'var(--primary-color)',
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: 'var(--primary-color)',
  },
  '& .MuiFilledInput-root.Mui-focused': {
    backgroundColor: 'rgba(255, 165, 0, 0.1)',
  },
  '& .MuiFilledInput-root': {
    backgroundColor: 'rgba(255, 165, 0, 0.04)',
  },
  '&:hover .MuiFilledInput-underline:before': {
		borderWidth: '2px',
    borderBottomColor: 'var(--primary-color)',
  },
  '& .MuiFilledInput-underline:before': {
    borderBottomColor: 'var(--primary-color)',
  },
	'&.MuiOutlinedInput-root': {
		fieldset: {
			borderColor: 'var(--primary-color)',
		},
    '&:hover fieldset': {
			borderWidth: '2px',
      borderColor: 'var(--primary-color)',
    },
		'&.Mui-focused fieldset': {
      borderColor: 'var(--primary-color)',
    },
  },
  '& .MuiInputBase-root' : {
    color: 'white'
  }
})

export default OrangeTextField;
