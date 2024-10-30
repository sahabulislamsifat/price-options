import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/priceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar> </NavBar>
      <h1 className="text-2xl bg-red-600">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
