import logo from './logo.svg';
import './App.css';
import HolaMundo from "./components/HolaMundo";
import AdiosMundo from './components/AdiosMundo';
import Saludar from "./components/Saludar";

function App() {
  
  //Objeto que sera enviado como propiedad al componente Saludar.
  const user = {
    name: "Fulanito",
    age: 25,
    colour: "Black" 
  };
  
  // Funcion de tipo flecha
  const saludar = (name, age, colour) => {
    // Este metodo no es viable es mejor usar TEMPLATE STRING ` ` console.log("Hola " + name);
    console.log(`Hola ${name} tiene ${age} años y le gusta el color ${colour}.`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludar}/>
     </header>
    </div>
  );
}

export default App;
