import logo from './logo.svg';
import './App.css';
import Sidebar from './mycomponents/Sidebar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Analytics from './pages/Analytics';

function App() {
  return (
   <BrowserRouter>
   <Sidebar>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/comment' element={<Comment/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/productlist' element={<ProductList/>}/>
    <Route path='/analytics' element={<Analytics/>}/>
  </Routes>
  </Sidebar>
   </BrowserRouter>
  );
}

export default App;
