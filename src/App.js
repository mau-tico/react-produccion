import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Componentes
import { Navbar } from "./components/Navbar";
//Paginas
//import { Home } from "./pages/Home";
//import { About } from "./pages/About";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Suspense fallback={ <h3>Cargando...</h3> }><Home /></Suspense>} path="/"></Route>
        <Route element={<Suspense fallback={ <h3>Cargando...</h3> }><About /></Suspense>} path="about"></Route>
        {/* <Route element={<About />} path="about"></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
