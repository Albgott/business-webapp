import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}

const adaptData = (image) => {
  return {
    image: image,
    caption: ""
  }
}

const CarouselImages  = ({
  data,
  width = "850px",
  height = "500px"
}) => {
  
  const adaptedData = []
  for (let index = 0; index < data.length; index++) {
    const element = adaptData(data[index]);
    adaptedData.push(element)
  }

	return (
    
    <Carousel
            data={adaptedData}
            time={3000}
            width={width}
            height={height}
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#23272a"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "0",
            }}
          />
  );
};

export default CarouselImages;
