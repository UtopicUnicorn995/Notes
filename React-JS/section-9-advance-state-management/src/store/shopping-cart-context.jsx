import {createContext} from 'react'

export const CartContext = createContext(
    {items: [],
    addItemsToCart: () => {}}
    //initial value, can be anything
    //helps with the auto completion
)
//value -> onject that contains a react component

