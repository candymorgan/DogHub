import React, { useContext, useEffect } from 'react'
import "./BreedDisplay.css"
import { Display } from '../Context'
import axios from 'axios'

const BreedDisplay = () => {
  const { images, selectedBreed, setBreedImages, breedImages} = useContext(Display)
  // console.log(selectedBreed)
  // const url = `"https://dog.ceo/api/breed"/${selectedBreed}/images`
    useEffect(() => {
      axios.get(images)
      .then((res) => {
        setBreedImages(res.data.message)
        // console.log(breedImages);
        
      })
    }, [setBreedImages, images])
    
 
 
  return (
    <>
    <div className="breedsContainer">
        <div><p>{selectedBreed}</p></div>
        <div className='imageCont'>
          {breedImages?.map((im) => (
            <img src={im} alt="" />
          ))}
            
        </div>
    </div>
    </>
  )
}

export default BreedDisplay