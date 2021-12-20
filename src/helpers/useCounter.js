import { useState } from "react";

export const useCounter = (initial, stock) => {

    const [counter, setCounter] = useState(initial);

    const handleSum = () => {
        (counter < stock) &&
            setCounter(Math.max(counter + 1, 1))
    }
    const handleRest = () => {
        (counter > initial) &&
            setCounter(Math.max(counter - 1, 1))
    }

    return {
        counter,
        handleSum,
        handleRest
    }
}