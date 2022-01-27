import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage';
import ProductForm from './containers/ProductForm';
import Nav from './containers/Nav';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routers>
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/form" element={<ProductForm/>}/>
      </Routes>
      </Routers>
  )
}

export default App;
