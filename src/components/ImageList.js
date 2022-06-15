import React from 'react'

const ImageList = (props) => {
   const images= props.images.map((image)=>{
        return (
            <img key={image.id} src={image.urls.regular}/>
        )
    })
    
  return (
    <div >
    <span>{images}</span>

      
    </div>
  )
}

export default ImageList
