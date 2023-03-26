import React from "react";
import { Datos } from "./ProyectosInfo";
function PROJECTS() {
  console.log(Datos);
  return (
    <div
      className="container__PROJECTS"
      id="Proyects"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="title">
        <h3>PROYECTOS</h3>
        <p>
          En esta sección encontrarás algunos de mis proyectos con una breve
          descripción y un enlace donde se encuentra alojado en la web.{" "}
        </p>
      </div>
      {Datos.map((datos) => {
        return (
          //
          <div
            className={datos.id % 2 == 0 ? "containerProyests" : "containertwo"}
            key={datos.id}
            data-aos={datos.id % 2 == 0 ? "fade-left" : "fade-right"}
            data-aos-duration="3000"
            data-aos-once="true"
          >
            <div className="img">
              <img
                src={`Pro/${datos.img}`}
                className="pc"
                alt={datos.title}
              ></img>{" "}
              <a href={datos.link} target="_blank">
                <button>Look At It</button>
              </a>
            </div>

            <div className="description">
              <h4>{datos.title}</h4>
              <span>{datos.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PROJECTS;
