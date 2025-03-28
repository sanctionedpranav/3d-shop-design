import Canvas from "./canvas";
import Home from "./pages/home";
import Customizer from "./pages/Customizer";

function App() {
  return (
    <main className="App transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
