import "./App.css";
import LineChart from "./components/lineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/priceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar> </NavBar>
      <h1 className="text-2xl bg-red-600">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
