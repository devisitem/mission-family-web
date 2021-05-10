import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

export default function ZoomImage({ imageLink, imageAlt, imageWidth ,imageClass }){
    return(

        <ImageZoom
        image={{
          src:  imageLink  ,
          alt:  imageAlt ,
          className: 'img',
          style: { width : imageWidth }
        }}
        zoomImage={{
          src:   imageLink  ,
          alt:  imageAlt 
        }}
      />
      
    )
}