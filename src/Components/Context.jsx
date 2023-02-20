import React, { useState } from "react";
import { createContext } from "react";


export const Display = createContext("")




const Context = ({children }) => {
    const [breed, setBreed] = useState([])
    const [subBreed, setSubBreed] = useState([])
    const [images, setImages] = useState("")
    const [subBreedimages, setSubBreedImages] = useState("")
    const [number, setnumber] = useState(0)
    const [selectedBreed, setSelectedBreed] = useState("Hound Breeds")
    const [selectedSubBreed, setSelectedSubBreed] = useState("Hound Breeds")

    return (

        <Display.Provider value={{ breed, setBreed, images, setImages, number, setnumber,selectedBreed, subBreed, setSubBreed, setSelectedBreed, subBreedimages, setSubBreedImages, selectedSubBreed, setSelectedSubBreed }}>
            {children}
        </Display.Provider>

    )





}

export default Context