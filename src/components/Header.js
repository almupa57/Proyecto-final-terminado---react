import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logomision.png";

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-container">
        <div className="site-title">
          <Link to="/" className="link-header">
            <h2 className="title">Presupuesto Electrico</h2>
          </Link>
        </div>

        {/* <!-- Inicio menú navegación --> */}
        <nav className="site-nav">
          <Link to="/#inicio" className="link">
            Inicio
          </Link>
          <a href="/#services">Servicios</a>
          <a href="/#news">Noticias</a>
          <a href="/#team">Nuestro equipo</a>
        </nav>
        {/* <!-- Fin menú navegación --> */}

        <div className="logo-container">
          <img
            className="logo-container__site-logo"
            src={logo}
            alt="Logo MisionTic 2022"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
