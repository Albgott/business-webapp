import React from 'react';
import FileUpload from 'react-mui-fileuploader';
import { FileUploadProps } from 'react-mui-fileuploader/dist/types/index.types';
import styled from 'styled-components';
export interface ImageUploaderProps {}

const ImageUploader : React.FC<FileUploadProps> = ({onFilesChange}) => {
	return (
		<ImageUploaderStyle>
				<FileUpload 
					onFilesChange={onFilesChange}
					maxUploadFiles={5}
					acceptedType="image/*"
					title=""
					header=''
					imageSrc="/icons/drag_file.png"
					leftLabel='drag or'
					rightLabel=''
					buttonLabel='SELECT IMAGES'
					PlaceholderImageDimension={{xs: {width: 64, height: 64},  md: {width: 100, height: 100}}}
					BannerProps={{ elevation: 0, variant: "outlined" ,
						sx: { p:4, backgroundColor:'rgba(255,165,0,0.4)', gap:5}
					}}
					ContainerProps={{
						elevation: 0,
						variant: "outlined",
						sx: { p: 1, backgroundColor:'rgba(255,165,0,0.1)', gap:5}
					}}
				/>
		</ImageUploaderStyle>
	);
};

export const ImageUploaderStyle = styled.div`
`;

export default ImageUploader;
