import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext(
  { items: [], addItemsToCart: () => {}, updateItemQuantity: () => {} }
  //initial value, can be anything
  //helps with the auto completion
);
//value -> onject that contains a react component

function shoppingCartReducer(state, action) {
  // Does not need access to props
  // Should not be recreated

  if(action.type === 'ADD_ITEM'){
      const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });

      return {
        items: updatedItems,
      }
    }
  }
  if(action.type === 'UPDATE_ITEM'){
    const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state, // not needed here because we have only one value
        items: updatedItems,
      };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );


  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      // most cases actions are objects
      type: 'ADD_ITEM',
      // common convention
      payload: id,
    })

  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount
      }
    })
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemsToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    //any component could now access the additemstocart function
  };
  return (
    <CartContext.Provider value={ctxValue}>
      {/* The default value set when creating the context is only used if a component that was not wrappeed by the provider component tries to access the context value */}
      {children}
    </CartContext.Provider>
  );
}
