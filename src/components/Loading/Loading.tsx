import React from 'react';
import { Circles } from 'react-loader-spinner';
export interface LoadingProps {}

const Loading : React.FC<LoadingProps> = () => {
	return <Circles
		height="100"
		width="100"
		color="var(--primary-color)"
		ariaLabel="circles-loading"
		wrapperStyle={{
			justifyContent:'center'
		}}
		wrapperClass=""
		visible={true}
	/>;
};

export default Loading;
