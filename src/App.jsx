import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarRB from './components/NavBarRB';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/Error';
//importar al proveedor para dar acceso al contexto
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
function App() {

  return (
    <BrowserRouter> 
    <CartProvider>
    <NavBarRB/>
    <Routes>
      <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a CoderShop!"/>}/>
      <Route path='/category/:type' element={<ItemListContainer mensaje="Estas en la categoria: "/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
