import React, { useState } from "react";
import { createContext } from "react";


export const Display = createContext("")




const Context = ({children }) => {
    const [breed, setBreed] = useState([])
    const [images, setImages] = useState("")
    const [breedImages, setBreedImages] = useState("")
    const [number, setnumber] = useState(0)
    const [selectedBreed, setSelectedBreed] = useState("Hound Breeds")

    return (

        <Display.Provider value={{ breed, setBreed, images, setImages, number, setnumber,selectedBreed, setSelectedBreed, breedImages, setBreedImages }}>
            {children}
        </Display.Provider>

    )





}

export default Context