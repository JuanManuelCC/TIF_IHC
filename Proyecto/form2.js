const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. <b>La palabra “jesuítico” lleva tilde porque</b>",
    respuestas: {
      a: "Termina en vocal.</br>",
      b: "Forma diptongo.</br>",
      c: "Produce un hiato.</br>",
      d: "Es polisílaba.</br>",
      e: "Es esdrújula.</br></br>"
    },
    respuestaCorrecta: "e",
  },
  {
    pregunta: "2. <b>La palabra música es:</b> ",
    respuestas: {
      a: "Aguda.</br>",
      b: "Grave.</br>",
      c: "Esdrújula.</br></br>",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. <b>Las palabras Agudas NO llevan tilde cuando terminan en:</b>",
    respuestas: {
      a: "N, S o vocal.</br>",
      b: "Cualquier consonante, menos N o S.</br>",
      c: "Siempre llevan tilde.</br>",
      d: "Vocal.</br></br>",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "4. <b>Césped es una palabra...</b>",
    respuestas: {
      a: "Aguda.</br>",
      b: "Grave.</br>",
      c: "Esdrújula.</br></br>",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "5. <b>¿Qué tipo de palabra es: Matemáticas?</b>",
    respuestas: {
      a: "Aguda.</br>",
      b: "Llana.</br>",
      c: "Esdrújula.</br>",
      d: "Sobre esdrújula.</br></br>",
    },
    respuestaCorrecta: "c",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);