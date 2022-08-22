const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "<b>1. Identifique que tipo de oración es la siguiente: ¡Qué alegría verte hoy!<br></b>",
    respuestas: {
      a: "Desiderativa.<br>",
      b: "Interrogativa.<br>",
      c: "Exclamativa.<br>",
      d: "Dubitativa.<br>",
      e: "Negativa.<br><br>",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "<b>2. Identifique que tipo de oración es la siguiente: Desearía volver a verte.<br></b>",
    respuestas: {
        a: "Desiderativa.<br>",
        b: "Interrogativa.<br>",
        c: "Exclamativa.<br>",
        d: "Dubitativa.<br>",
        e: "Negativa.<br><br>",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "<b>3. Identifique que tipo de oración es la siguiente: ¿Cuándo tienes tu examen?.<br></b>",
    respuestas: {
        a: "Desiderativa.<br>",
        b: "Interrogativa.<br>",
        c: "Exclamativa.<br>",
        d: "Dubitativa.<br>",
        e: "Negativa.<br><br>",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "<b>4. Identifique que tipo de oración es la siguiente: Quizá vuelva de su viaje hoy.<br></b>",
    respuestas: {
        a: "Desiderativa.<br>",
        b: "Interrogativa.<br>",
        c: "Exclamativa.<br>",
        d: "Dubitativa.<br>",
        e: "Negativa.<br><br>",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "<b>5. Identifique que tipo de oración es la siguiente: No dejaré que me grite.<br></b>",
    respuestas: {
        a: "Desiderativa.<br>",
        b: "Interrogativa.<br>",
        c: "Exclamativa.<br>",
        d: "Dubitativa.<br>",
        e: "Negativa.<br><br>",
    },
    respuestaCorrecta: "e",
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