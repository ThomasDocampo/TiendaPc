import ItemDetailContainer from './Components/detailComponents/ItemDetailContainer';
import ItemListContainer from './Components/itemComponents/ItemListContainer';
import NavBar from './Components/NavBarComponents/NavBar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <NavBar/>

     <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
     
      </Routes>
    
   {/* <ItemListContainer/>
    <ItemDetailContainer/>

    */} 
    </div>
  );
}

export default App;