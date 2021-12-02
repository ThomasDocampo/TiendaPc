import ItemDetailContainer from './Components/detailComponents/ItemDetailContainer';
import ItemListContainer from './Components/itemComponents/ItemListContainer';
import NavBar from './Components/NavBarComponents/NavBar';
import { Routes, Route } from "react-router-dom";
import { CartProvider } from './Components/contexts/CartProvider';
import Cart from './Components/CarComponent/Cart'
function App() {

  
  return (
   
    <CartProvider >
  
     <NavBar/>

     <Routes>
       
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
     
      </Routes>

    </CartProvider>
 
  );
}

export default App;