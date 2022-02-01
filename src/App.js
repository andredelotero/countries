import { Route } from "wouter";

import { CountryDetail } from "./components/CountryDetail/CountryDetail";
import { GetCountries } from "./services/GetCountries";
import { NavBar } from "./components/NavBar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="centeredText">250 countries in total</h1>
      <NavBar />
      <Route path="/" component={GetCountries} />
      <Route path="/country/:id" component={CountryDetail} />
      <Route path="/region/:id" component={GetCountries} />
    </>
  );
}

export default App;
