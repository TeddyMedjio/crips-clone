import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sinscrire from "./components/Sinscrire";
import Connexion from "./components/Connexion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/sinscrire" element={<Sinscrire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
