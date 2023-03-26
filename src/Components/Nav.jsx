import React, { useState } from "react";
import imgme from "../img/myAvatar.png";
//)
function Nav() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <input type="checkbox" id="active" />
      <label for="active" className="menu-btn">
        <span></span>
      </label>
      <label for="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <li>
            <a href="#Home">HOME</a>
          </li>
          <li>
            <a href="#about">ACERCA</a>
          </li>
          <li>
            <a href="#Proyects">PROYECTOS</a>
          </li>
          <li>
            <a href="#contacto">CONTACTO</a>
          </li>
        </ul>
      </div>

      <div
        className="Principal"
        id="Home"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="Presentacion">
          <div className="Presentacion__1">
            <h1>Desarrollador Junior Front-End.</h1>
            <p>
              "El secreto para salir adelante es comenzar, Lo único imposible es
              aquello que no intentas."
            </p>
          </div>
          <div className="Presentacion__2">
            <span>
              Apasionado por el trabajo que realizo, ofreciendo y aportando mis
              conocimientos, habilidades como experiencia en el área, al igual
              que nuevas ideas y soluciones.
            </span>
            <span>
              Habilidades intermedias en mejora progresiva constante, aprendo
              rápido y puedo adquirir nuevas habilidades y adaptarme a
              diferentes proyectos y roles.
            </span>
          </div>
        </div>
        <div className="principal_II">
          {!active ? <img src={imgme} alt="Alexander Araujo" /> : ""}{" "}
          <h2 className="name">Alexander Araujo</h2>
        </div>
      </div>
    </div>
  );
}

export default Nav;
