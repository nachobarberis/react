import React from 'react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";
import imgLogo from '../assets/logo.png'

const NavBar = ({ nombre }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={'/'}><img src={imgLogo} alt="" width={100} height={100} /></Link>
          <a className="navbar-brand" href="/">{nombre}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse centrar" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Catalogo</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>



                <ul className="dropdown-menu">
                  <Link to={`/category/${"Deportiva"}`}><li className="dropdown-item">Deportiva</li></Link>
                  <Link to={`/category/${"Casual"}`}><li className="dropdown-item">Casual</li></Link>
                  <Link to={`/category/${"Formal"}`}><li className="dropdown-item">Formal</li></Link>

                  {/* <li><a className="dropdown-item" href={`/category/${"3"}`}>Botas</a></li> */}
                </ul>
              </li>
            </ul>
          </div>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar
