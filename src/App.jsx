import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Escalas from "./Pages/Escalas";
import Header from "./Components/Header";
import { UserContext, UserStorage } from "./Context/UserContext";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Membros from "./Pages/Membros";
import Repertorio from "./Pages/Repertorio";
import Sidenav from "./Components/Sidenav";
import "./Styles.css";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import ProximasEscalas from "./Pages/ProximasEscalas";
import Container from "./Components/Container";

const App = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <UserStorage>
          <Container>
            <Sidenav />
            <main>
              <Header />
              <Routes>
                <Route path="/" element={<ProximasEscalas />} />
                <Route path="/login/*" element={<Login />} />

                <Route
                  path="/escalas"
                  element={
                    <ProtectedRoute>
                      <Escalas />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/membros"
                  element={
                    <ProtectedRoute>
                      <Membros />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/repertorio"
                  element={
                    <ProtectedRoute>
                      <Repertorio />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </Container>
        </UserStorage>
      </BrowserRouter>
    </PrimeReactProvider>
  );
};

export default App;
