import React from "react";
import imgskill from "../img/Contenido.png";
function ABOUT() {
  return (
    <div className="container__about" id="about">
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
            ¡Hola! Mi nombre es Alexander Araujo valles, pero mejor llámame Alex
            😄,Es un gusto el poder saludarte👋🏻 y darte la bienvenida a mi
            portafolio:
          </p>
          <p>
            Soy un desarrollador web junior, responsable de construir interfaces
            web a partir de código que utilizo partiendo de ideas o diseños, con
            exactitud, realizo la parte frontal que se ve en tu sitio web o en
            tu aplicación. Incluye el diseño, la distribución del contenido, las
            funcionalidades y todos los elementos con los que interactúan los
            usuarios: fuentes, botones, tablas, menús, colores y más. Echa un
            vistazo a algunos de mis trabajos en la sección de{" "}
            <a href="#Proyects">Proyectos💼.</a>
          </p>
          <p>
            Estudiante de informática👩🏻‍💻, sistemas y Desarrollador front-end
            autodidacta, como de la programación en general, Soy una persona
            apasionada por la tecnología, que le gusta estar actualizándose,
            capaz de comunicar ideas, responsable, optimista y emprendedor.
            Comprometido con el desarrollo de los proyectos en los que
            participo❤️.
          </p>
        </div>
        <div className="skillsMe">
          <h3>Mis habilidades</h3>
          <div className="skillsmeMe">
            {" "}
            <span >JavaScript</span>
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
