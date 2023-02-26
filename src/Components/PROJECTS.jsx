import React from "react";
import { Datos } from "./ProyectosInfo";
function PROJECTS() {
  console.log(Datos);
  return (
    <div className="container__PROJECTS" id="Proyects">
      <div className="title">
        <h3>PROYECTOS</h3>
        <p>En esta sección encontrarás algunos de mis proyectos con una breve descripción y un enlace donde se encuentra alojado en la web. </p>
      </div>
      {Datos.map((datos) => {
        return (//
          <div className={datos.id%2==0?"containerProyests":"containertwo"} key={datos.id}>
            <div className="img">
              <img /*https://github.com/alex03av/My-portfolio-by-alex/blob/master/src/img/Pro/0.png?raw=true
               C:\Users\AlexanderAraujo\Desktop\Portafolio-React\src\img\Pro\0.png
               */
                src={`src/img/Pro/${datos.img}`}
                className="pc"
                alt={datos.title}
              ></img>
            </div>

            <div className="description">
              <h4>{datos.title}</h4>
              <span>
                {datos.description}</span>
                <a href={datos.link} target="_blank">
                  <button>Look At It</button>
                </a>
              
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PROJECTS;
