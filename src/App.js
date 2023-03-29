import Mensaje from  './Mensaje.js';
import './App.css'

const Description = () =>{
 return <p>Esta es la app del curso fullstacj bootcamp</p>
}



function App() {
  return (
    <div className="App">
      <Mensaje color= 'red' msj = 'Estamos trabajando'/>
      <Mensaje color = 'blue' msj = 'En un curso'/>
      <Mensaje color = 'yellow' msj = 'De React'/>
      <Description />
    </div>
  );
}

export default App;
