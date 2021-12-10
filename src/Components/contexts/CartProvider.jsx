import { createContext, useState,  useContext} from 'react';

export const CartContext = createContext();

export const UseCart = () => useContext(CartContext);
export const CartProvider = ({children}) =>{

    const [addedProducts, setAddedProducts] = useState([]);
  

const addItem = (item, quantity) => { 
    setAddedProducts(addedProducts.filter(item => item !== undefined ))
    if(insIncart(item.Id)){
     
        let index =  addedProducts.findIndex((prod) => prod.item.Id === item.Id)
        let PosibleQuantity = addedProducts[index].quantity + quantity;
        addedProducts[index].quantity = PosibleQuantity
        
    }else{
    setAddedProducts([...addedProducts,{item, quantity}]);
    
}
}
const removeItem = (id) => { 
 
    setAddedProducts(addedProducts.filter(item => item.item.Id !== id ))
}
const getTotalPrice = () => { 
 let aux = 0;
    addedProducts.map(item =>{
aux = aux + (item.item.Price * item.quantity) ;

    }  )
    return aux;
}



const itemSumatory = ()=>{
    let aux = 0;
    addedProducts.map(item =>{
aux = aux + item.quantity;

    }  )
    return aux;
}
const clear = () => { 
    setAddedProducts([]);
}

const insIncart = (id) => { 

    let bool = false;
    addedProducts.map(product =>{
    
       if(product.item.Id === id) {
        bool = true;
       } 
      
});

return bool;
}
const getItemQuantity = (id) => { 
let quant = 0
    addedProducts.map(product =>{
    
       if(product.item.Id === id) {
       
                quant = (product.quantity)
       }   
});

return quant
}



return (
    <CartContext.Provider value = {{addItem, removeItem, addedProducts, getTotalPrice, itemSumatory, clear, getItemQuantity, insIncart}}>
        {children}
    </CartContext.Provider>
)
};