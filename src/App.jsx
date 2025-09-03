import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarRB from './components/NavBarRB';
function App() {

  return (
    <> 
    <NavBarRB/>
    <ItemListContainer mensaje="Bienvenidos a CoderShop!"/>
    <ItemCount/>
    
    </>
  )
}

export default App
