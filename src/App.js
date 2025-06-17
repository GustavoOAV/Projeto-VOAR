import "./App.css";
import Navbar from "./components/Navbar.js";
import Carrosel from "./components/Carrosel.js";
import Espetaculo from "./components/Espetaculo.js";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Carrosel />
     <Espetaculo />
    </div>
  );
}
export default App;
