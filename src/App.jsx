import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Mermbers from "./Components/Members";

const App = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <UserStorage>
          <div className="grid grid-template-areas">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/membros" element={<Mermbers />} />
              {/*<Route path="/login/*" element={<Login />} />*/}
            </Routes>
            <Footer />
          </div>
        </UserStorage>
      </BrowserRouter>
    </PrimeReactProvider>
  );
};

export default App;
