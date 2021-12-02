import { createContext, useState,  useContext} from 'react';

export const CartContext = createContext();

export const UseCart = () => useContext(CartContext);
export const CartProvider = ({children}) =>{

    const [addedProducts, setAddedProducts] = useState([]);
    ///useEffect(() => {
        //setAddedProducts(addedProducts.filter(item => item !== undefined ))
      ///console.log(addedProducts);
      ///},[addedProducts])


const addItem = (item, quantity) => { 
    setAddedProducts(addedProducts.filter(item => item !== undefined ))
    if(insIncart(item.Id)){
     
        let index =  addedProducts.findIndex((prod) => prod.item.Id === item.Id)
        let PosibleQuantity = addedProducts[index].quantity + quantity;
     
        if(PosibleQuantity < item.Stock){
            
            addedProducts[index].quantity = PosibleQuantity
    
        }  else{
            alert(`El nuemero de productos (${PosibleQuantity})que estas intentando agregar supera el stock`);
        }
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
    
       if(product.item.Id === id)  bool = true;
      
});
return bool;
}



return (
    <CartContext.Provider value = {{addItem, removeItem, addedProducts, getTotalPrice, itemSumatory}}>
        {children}
    </CartContext.Provider>
)
};