const { createContext, useContext, useState } = require("react");

const ShoppingCartContext = createContext({});

function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuntity(id, itemDetails) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
  
      if (!existingItem) {
        return [...currItems, { id, ...itemDetails, quantity: 1 }];
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.id.quantity + 1 } : item
        );
      }
      
    });
   
  }
  
   
   

  console.log('CartItems', cartItems);
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuntity,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export { ShoppingCartProvider, useShoppingCart };
