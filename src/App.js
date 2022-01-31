import "./App.css";
import { Regions } from "./components/Region/Region";
import { Routes, Route } from "react-router-dom";
import { CountryDetail } from "./components/CountryDetail/CountryDetail";
import { GetCountries } from "./services/GetCountries";

function App() {
  return (
    <>
      <h1 className="centeredText">250 countries in total</h1>
      <Regions />
      <Routes>
        <Route path="/" exact element={<GetCountries />} />
        <Route path="/:id" exact element={<CountryDetail />} />
        <Route path="/region/:id" exact element={<GetCountries />} />
      </Routes>
    </>
  );
}

export default App;
