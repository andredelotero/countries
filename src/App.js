import { Routes, Route } from "react-router-dom";
import { CountryDetail } from "./components/CountryDetail/CountryDetail";
import { GetCountries } from "./services/GetCountries";
import { NavBar } from "./components/NavBar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="centeredText">250 countries in total</h1>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<GetCountries />} />
        <Route path="/:id" exact element={<CountryDetail />} />
        <Route path="/region/:id" exact element={<GetCountries />} />
      </Routes>
    </>
  );
}

export default App;
