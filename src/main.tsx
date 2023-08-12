import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from "./pages/Home/";
import Footer from './components/Footer';
import ListaServicos from './pages/ListaServicos';
import ListaDevs from './pages/ListaDevs';
import Header from './components/Header';

//estilizacao global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*indica que aplicacao tera rotas*/}
      {/*HEADER*/}
      <Routes> {/*indica uma lista de rotas*/}
        <Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='lista/servicos' element={<ListaServicos />} />
        <Route path='lista/devs' element={<ListaDevs />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>,
)
