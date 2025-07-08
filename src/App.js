import "./App.css";
import Navbar from "./components/Navbar.js";
import Carrosel from "./components/Carrosel.js";
import Espetaculo from "./components/Espetaculo.js";
import Elenco from "./components/Elenco.js";
import Critica from "./components/Critica.js";
import Galeria from "./components/Galeria.js";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Carrosel />
     <Espetaculo />
     <Elenco />
     <Critica />
     <Galeria />
    </div>
  );
}
export default App;
