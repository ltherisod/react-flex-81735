import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Button from "./examples/Button"
import NavBarRB from './components/NavBarRB';
function App() {
  const saludar = ()=>{
    alert('Hola')
  }
  const despedir = ()=>{
    console.log('chau chau 🙌')
  }

  console.log('App')

  return (
    <> 
    {/* <NavBar/> */}
    <NavBarRB/>
    <ItemListContainer mensaje="Bienvenidos a CoderShop!"/>
    {/* <p>Holis!</p>
    <p>Holis!</p>
    <Button text='Hola' clickHandler={saludar} color="yellow"/>
    <Button text='Chau' clickHandler={despedir} color="green"/> */}
    <ItemCount/>
    {/* <Button  clickHandler={saludar} color="yellow">Hola!</Button>
    <Button  clickHandler={despedir} color="green">Chau!</Button>
    <Button  clickHandler={despedir} color="green"><div><p>🤭</p></div><div><span>lala@lala.ccom</span></div></Button> */}
    </>
  )
}

export default App
