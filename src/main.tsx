import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Header from './components/Header';
import Home from "./pages/Home/";
import Footer from './components/Footer';
import ListaServicos from './pages/ListaServicos';



//estilizacao global
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
    {/* <ListaServicos /> */}

  </React.StrictMode>,
)
