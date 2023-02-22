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
        setBreedImages(breedIm.data.message)
        setSubBreedImages(subBreedIm.data.message)
        console.log(subBreedImages);

      }))
    }, [images, setBreedImages])

    const Retrieve = async() => {
      const dataFetch = await fetch("https://dog.ceo/api/breed/hound/english/images")
      const response = await dataFetch.json()
      console.log(response);
    }

    Retrieve()
    
    
 console.log(subBreedImages);
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