import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Boton from "./Componentes/Boton.jsx";
import Input from "./Componentes/Input.jsx";
 
 
function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
 
 
  /*
  cdconst BotonFormulario = () => {
    if (password === '252525') {
      return (<Boton></Boton>)
    } else {
      return (<></>)
    }
  }
*/
 
  return (
    <div className="App">
      <h1>Desafío de Estados y Componentes</h1>
      <Input
        nombre={nombre}
        setNombre={setNombre}
        password={password}
        setPassword={setPassword}/>
 
      
      {password === '252525' ? <Boton/> : null}
 
      
    </div>
  );
}
 
export default App;

