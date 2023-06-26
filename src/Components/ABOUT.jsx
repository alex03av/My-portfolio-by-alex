import React from "react";
import imgskill from "../img/Contenido.png";
function ABOUT() {
  return (
    <div
      className="container__about"
      id="about"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="aboutMe">
        <h3>ACERCA DE MÍ</h3>
        <p>
          Aquí encontrarás más información sobre mí, lo que hago y mis
          habilidades actuales, principalmente en términos de programación y
          tecnología.
        </p>
      </div>
      <div className="getskillsme">
        <div className="getMe">
          <h3>¡Llegar a conocerme!</h3>{" "}
          <p>
            ¡Hola! Mi nombre es Alexander Araujo Valles, pero puedes llamarme
            Alex 😄. Es un placer saludarte 👋🏻 y darte la bienvenida a mi
            portafolio.
          </p>
          <p>
            Soy un desarrollador web junior encargado de construir interfaces
            web a partir de código, utilizando diseños e ideas previamente
            establecidas. Mi trabajo consiste en desarrollar la parte frontal de
            sitios web y aplicaciones, incluyendo el diseño, la distribución del
            contenido, las funcionalidades y todos los elementos con los que
            interactúan los usuarios, tales como fuentes, botones, tablas, menús
            y colores. Le invito a revisar algunos de mis trabajos en la sección
            de <a href="#Proyects">Proyectos💼.</a>
          </p>
          <p>
            Soy un estudiante de informática y sistemas, así como un
            desarrollador Web autodidacta con experiencia en programación en
            general. Mi pasión por la tecnología me lleva a estar constantemente
            actualizado en mi campo de trabajo. Poseo habilidades para comunicar
            mis ideas de manera efectiva y soy una persona responsable,
            optimista y emprendedora. Me encuentro plenamente comprometido con
            el desarrollo de los proyectos en los que participo.
          </p>
        </div>
        <div className="skillsMe">
          <h3>Mis habilidades</h3>
          <div className="skillsmeMe">
            {" "}
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS</span>
            <span>PHP</span>
            <span>Responsive</span>
            <span>SQL</span>
            <span>React</span>
            <span>Sass</span>
            <span>GIT</span>
          </div>
          <img src={imgskill} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ABOUT;
