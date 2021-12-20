import { useState } from "react";

export const useAddCart = () => {

    const [addCart, setAddCart] = useState(false);

    const onAdd = (quantity) => {
            console.log(quantity);
            setAddCart(true);
        };

    return {
        addCart,
        onAdd
    }
}