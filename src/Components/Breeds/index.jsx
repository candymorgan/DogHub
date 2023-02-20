import React, { useContext, useEffect } from 'react'
import "./Breeds.css"
import Group6 from "../../Group6.svg"
import Group from "../../Group.svg"
import Group4 from "../../Group4.svg"
import Group5 from "../../Group5.svg"
import Group2 from "../../Group2.svg"
import axios from "axios"
import { Display } from '../Context'



const Breeds = () => {
    const { breed, setBreed, setImages, setSelectedBreed, setSubBreedImages, subBreed, setSubBreed, setSelectedSubBreed } = useContext(Display)


    useEffect(() => {
        axios.all([axios.get("https://dog.ceo/api/breeds/list"), axios.get("https://dog.ceo/api/breed/hound/list")])
         .then(axios.spread((dogB, dogSB) => {
            setBreed(dogB.data.message)
            setSubBreed(dogSB.data.message)
                
            }))

            .catch((err) => console.log("This is the Error... " + err))


    }, [setBreed, setSubBreed])

    
    

    const handleChange = (e) => {
        const actualVal = e.target.value
        setSelectedBreed(actualVal)
       setImages(`https://dog.ceo/api/breed/${actualVal}/images`)
    }


    const handlesubBreed = (e) => {
        const subBreedVal = e.target.value
        setSelectedSubBreed(subBreedVal)
        setSubBreedImages(`https://dog.ceo/api/breed/${subBreedVal}/images`)
    }

    return (
        <>
            <div className="parentContainer">
                <div className="dogImages">
                    <div className='dogHeads'>
                        <img src={Group6} alt="" />
                        <img src={Group} alt="" />
                        <img src={Group4} alt="" />
                        <img src={Group5} alt="" />
                        <img src={Group2} alt="" />
                    </div>
                    <div><h1>Dog Breeds</h1></div>
                </div>

                <div className="selectBreedContainer">
                    <div className="subCont">
                        <div>
                            <select onChange={handleChange}>
                            <option value="">Breeds</option>
                                {breed?.map((brd, idx) => {
                                    return (
                                    <option key={idx} value={brd}>{brd}</option>
                                  
                                )})
                                }

                            </select>
                        </div>

                        <div><select name="" id="" onChange={handlesubBreed}>
                        <option value="">Sub-Breeds</option>
                            {subBreed?.map((sbrd, idx) => {
                                return( 
                            <option key={idx} value={sbrd}>{sbrd}</option>
                                )
                            })}
                            
                        </select></div>
                        <div><select name="" id="">
                            <option value="">Display-Number</option>
                            <option value="">Display-Number</option>
                        </select>
                        </div>
                    </div>
                    <div className="randomCont"><p>Randomize Breed Image Display</p></div>
                </div>

            </div>
        </>
    )
}
export default Breeds