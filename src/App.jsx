import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarRB from './components/NavBarRB';
import FetchCountry from './examples/FetchCountry';
import FetchApi from './examples/FetchApi';
import withLogging from './hocs/withLogging';
function App() {
//utlizamos el HOC
   const ComponenteConHoc = withLogging(FetchCountry)
   const ItemListContainerConHoc = withLogging(ItemListContainer)
  return (
    <> 
    <NavBarRB/>
    {/* <ItemListContainer mensaje="Bienvenidos a CoderShop!"/> */}
    <FetchCountry/>
    {/* <ComponenteConHoc/> */}
    {/* <ItemListContainerConHoc mensaje="Bienvenidos a CoderShop!"/> */}
    <FetchApi/>
    {/* <ItemCount/> */}
    
    </>
  )
}

export default App
