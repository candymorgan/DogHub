import React, { useContext, useEffect, useState } from 'react'
import "./BreedDisplay.css"
import { Display } from '../Context'
import axios from 'axios'


const BreedDisplay = () => {
  const [breedImages, setBreedImages] = useState([])
  const [subBreedImages, setSubBreedImages] = useState([])
  const { images, selectedBreed, subBreedimages} = useContext(Display)
  
    useEffect(() => {
      axios.all([axios.get(images), axios.get(subBreedimages)]) 
      .then(axios.spread((breedIm, subBreedIm) => {
        console.log(breedIm.data.message);
        setBreedImages(breedIm.data.message)
        setSubBreedImages(subBreedIm.data.message)
        
        

      }))
    }, [images])
    
 
  return (
    <>
    <div className="breedsContainer">
        <div><p>{selectedBreed}</p></div>
        <div className='imageCont'>
          {breedImages?.map((im, idx) => {
           return (
              <img key={idx} src={im} alt="" />
            )})
          
        } 
        
            
        </div>
    </div>
    </>
  )
}

export default BreedDisplay