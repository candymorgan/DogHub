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
    const { breed, setBreed, setImages, selectedBreed, setSelectedBreed } = useContext(Display)


    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/list")
            .then((res) => {
                setBreed(res.data.message)
                // console.log(res.data.message)
            })


    }, [setBreed])
    

    // const handleClick = (dogBrdname) => {
    //     setSelectedBreed(dogBrdname)
    //     const url = "https://dog.ceo/api/breed"
    //     // console.log(dogBrdname)
    //     // setBreed(breed)
    //     setImages(`${url}/${dogBrdname}/images`)

    // }

    const handleChange = (e) => {
        const actualVal = e.target.value
        setSelectedBreed(actualVal)
        // console.log(actualVal);
        const url = "https://dog.ceo/api/breed"
       setImages(`${url}/${actualVal}/images`)
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
                            <select value={selectedBreed} onChange={handleChange}>
                            <option value="">Breeds</option>
                                {breed?.map((brd) => (
                                    <option value={brd}>{brd}</option>
                                  
                                ))
                                }

                            </select>
                        </div>






                        <div><select name="" id="">
                            <option value="">Sub-Breeds</option>
                            <option value="">Sub-Breeds</option>
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