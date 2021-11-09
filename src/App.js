import ItemCount from './Components/ItemCount';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
     <NavBar/>
      <ItemCount stock = {5} initial= {1}></ItemCount>
    </>
  );
}

export default App;