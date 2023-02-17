import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookSquare,
  FaGitAlt,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  const form = useRef();
  const cliente = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_703xpqu",
        "template_ye3f6k9",
        form.current,
        "79xtyRH3maF92n0gE"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Su Mensaje fue Envidado Satifactoriamente!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="footerContainer" id="contacto">
      <div className="contacto">
        <div className="contactoTitle">
          <h5>CONTACTO</h5>
          <p>
            No dude en ponerse en contacto conmigo enviando el siguiente
            formulario y me pondré en contacto con usted lo antes posible.
          </p>
        </div>

        <form id="Form" ref={form} onSubmit={cliente}>
          <label>Nombre</label>
          <input
            placeholder=" Ingrese Su Nombre"
            type="text"
            name="from_name"
            required
          />
          <label>Email</label>
          <input
            placeholder=" Introduzca Su Dirección De Correo Electrónico
            
            "
            type="email"
            name="email_id"
            required
          />
          <label>Mensage</label>
          <textarea
            placeholder="  Ingrese Su Mensaje"
            required
            name="message"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a
            href="https://www.facebook.com/alexander.araujo.796"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a href="https://github.com/alex03av" target="_blank">
            <FaGitAlt />
          </a>
          <a
            href="https://www.instagram.com/alexanderaraujo00/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/alexander-araujo-03840a258" target="_blank">
            <FaLinkedin />
          </a>
        </div>

        <div class="footer-left">
          <p>Company Anonymous &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
