import React, { useContext, useEffect, useState } from 'react'
import "./BreedDisplay.css"
import { Display } from '../Context'
import axios from 'axios'

const BreedDisplay = () => {
  const {images, selectedBreed} = useContext(Display)
  console.log(images)

  // useEffect(() => {
  //   axios.get(images)
  //   .then((res) => {
  //     console.log(res.data);
      
  //   })
  // })
 
  return (
    <>
    <div className="breedsContainer">
        <div><p>{selectedBreed}</p></div>
        <div className='imageCont'>
            <img src="" alt="" />
        </div>
    </div>
    </>
  )
}

export default BreedDisplay