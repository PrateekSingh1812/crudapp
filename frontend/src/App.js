import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Detail from './pages/Details'
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  console.log(`${process.env.REACT_APP_BASE_URL}`);
  return (
    <div className="App">
     

      <Routes>
        <Route path="/" element={ <Cards />}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/addProduct" element={<AddProduct/>}/>
        <Route path="/updateProduct" element={<UpdateProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
