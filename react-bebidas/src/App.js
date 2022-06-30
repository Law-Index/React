import './App.css';
import Cocacola from './Cocacola';
import Pepsi from './Pepsi';
import Fanta from './Fanta';

function App() {
  return (
    <div className="principal">
      <Cocacola año={"1886"}/>
      <Pepsi año={"1890"}/>
      <Fanta nombreproducto={"Fanta"} año={"1995"}/>
    </div>
  )
}

export default App;