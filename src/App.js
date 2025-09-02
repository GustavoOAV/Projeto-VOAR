import "./App.css";
import Carrosel from "./components/Carrosel.js";
import Critica from "./components/Critica.js";
import Elenco from "./components/Elenco.js";
import Espetaculo from "./components/Espetaculo.js";
import Feedback from "./components/Feedback.js";
import Galeria from "./components/Galeria.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Carrosel />
     <Espetaculo />
     <Elenco />
     <Critica />
     <Galeria />
     <Feedback />
    </div>
  );
}
export default App;
