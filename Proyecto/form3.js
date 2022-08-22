const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "<b>1. Seleccione la oración que cumple las normas del uso de las mayúsculas.<br></b>",
    respuestas: {
      a: "El papa francisco visitó Ecuador<br>",
      b: "La provincia de Imbabura se encuentra ubicada al norte del país.<br>",
      c: "Solamente el señor nos puede ayudar a solucionar los problemas.<br>",
      d: "El i.t.s.i. es una Institución Educativa de Educación Superior.<br><br>",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "<b>2. Señale la oración que presente uso incorrecto de mayúsculas y minúsculas.<br></b> ",
    respuestas: {
      a: "Salió el último número de la Revista de Crítica Literaria Latinoamericana.<br>",
      b: "Mi brújula marca el Este, no el Sur.<br>",
      c: "Los Heraldos negros es una obra famosa.<br>",
      d: "Se matriculó en la Facultad de Ciencias y Artes de la Comunicación.<br><br>",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "<b>3. Uso correcto de mayúsculas:<br></b>",
    respuestas: {
      a: "La inocente Caperucita Roja se comió a su abuelita.<br>",
      b: "La albiceleste jugará contra la Roja.<br>",
      c: "Ya entiendo el teorema de pitágoras.<br>",
      d: "La Torre eiffel fue construida por Gustave Eiffel.<br><br>",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "<b>4. Se escribe con mayúsculas.<br></b>",
    respuestas: {
      a: "Todas las abreviaturas.<br>",
      b: "Los tratamientos de respeto que se presentan en forma abreviada.<br>",
      c: "Despues de un punto y coma.<br>",
      d: "Luego de dos puntos.<br><br>",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "<b>5. Presenta uso inadecuado de las mayúsculas.<br></b>",
    respuestas: {
      a: "Hildebrando es Capricornio.<br>",
      b: "El Papa es argentino.<br>",
      c: "El tauro posee un sexto sentido.<br><br>",
    },
    respuestaCorrecta: "a",
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