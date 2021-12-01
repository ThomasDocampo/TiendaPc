import { createContext, useState, useEffect, useContext} from 'react';

export const CartContext = createContext();

export const UseCart = () => useContext(CartContext);
export const CartProvider = ({children}) =>{

    const [addedProducts, setAddedProducts] = useState([]);
    useEffect(() => {
        //setAddedProducts(addedProducts.filter(item => item !== undefined ))
      console.log(addedProducts);
      },[addedProducts])


const addItem = (item, quantity) => { 
    setAddedProducts(addedProducts.filter(item => item !== undefined ))
    if(insIncart(item.Id)){
     
        let index =  addedProducts.findIndex((prod) => prod.item.Id === item.Id)
       
        let PosibleQuantity = addedProducts[index].quantity + quantity;
     
        if(PosibleQuantity < item.Stock){
            
            addedProducts[index].quantity = PosibleQuantity
    
        }  
    }else{
    setAddedProducts([...addedProducts,{item, quantity}]);
    
}
}
const removeItem = (id) => { 
    let index = 0;
    addedProducts.map(product =>{
       if(product.item.Id === id){
        delete addedProducts[index];
        
        
       } 
       index++;
        
        
    } )
    setAddedProducts(addedProducts.filter(item => item !== undefined && item.lenght !== 0 ))
}
const clear = () => { 
    setAddedProducts([]);
}

const insIncart = (id) => { 

    let bool = false;
    addedProducts.map(product =>{
    
       if(product.item.Id === id)  bool = true;
      
});
return bool;
}



return (
    <CartContext.Provider value = {{addItem, removeItem}}>
        {children}
    </CartContext.Provider>
)
};