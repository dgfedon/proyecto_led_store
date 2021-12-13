import { useState } from "react";

export const useCounter = (initial, stock) => {

    const [counter, setCounter] = useState(initial);

    const handleSum = () => {
        (counter < stock) &&
            setCounter(prev => prev + 1)
    }
    const handleRest = () => {
        (counter > initial) &&
            setCounter(prev => prev - 1)
    }

    return {
        counter,
        handleSum,
        handleRest
    }
}