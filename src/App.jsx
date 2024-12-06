import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Escalas from "./Pages/Escalas";
import Header from "./Components/Header";
import { UserStorage } from "./Context/UserContext";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Membros from "./Pages/Membros";
import Repertorio from "./Pages/Repertorio";
import Sidenav from "./Components/Sidenav";
import "./Styles.css";

const App = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <UserStorage>
          <div className="container">
            <Sidenav />
            <main>
              <Header />
              <Routes>
                <Route path="/" element={<Escalas />} />
                <Route path="/membros" element={<Membros />} />
                <Route path="/repertorio" element={<Repertorio />} />
              </Routes>
            </main>
          </div>
        </UserStorage>
      </BrowserRouter>
    </PrimeReactProvider>
  );
};

export default App;
