
import './App.css';
import  HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Animal from './components/Animal';

function App() {

  const nomes=['Fábio', 'José', 'Augusto'];
  
 
  return (
    <div className="App">
     <Pessoa nome="Fábio" idade="35" imagem="https://png.pngtree.com/png-vector/20240622/ourlarge/pngtree-fish-vector-silhouette-png-image_12826227.png" />
<Pessoa nome="Judite" idade="80" imagem="https://png.pngtree.com/png-vector/20240622/ourlarge/pngtree-fish-vector-silhouette-png-image_12826227.png" />
<Animal nome="Pipoca" idade="5" raca="Pincher"></Animal>

 
   
    </div>
   
  );
}

export default App;
