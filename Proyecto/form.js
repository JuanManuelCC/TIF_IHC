const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "<b>1. ¿Cuál es el medio físico que transporta el mensaje?</b>",
    respuestas: {
      a: "Código</br>",
      b: "Canal</br>",
      c: "Ruido</br>",
      d: "Papel</br>",
      e: "Emisor</br></br>"
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. <b>Si el, profesor de lenguaje le pide a Demóstenes que le diga una oración y este se pone a rezar entonces Demóstenes no ha tomado en cuenta:</b>",
    respuestas: {
      a: "El código</br>",
      b: "El mensaje</br>",
      c: "El canal</br>",
      d: "El contexto</br>",
      e: "La redundancia</br></br>",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "3. <b>Es conjunto de signos convencionales empleados por los miembros de una comunidad para realizar el proceso de la comunicación.</b>",
    respuestas: {
      a: "Canal</br>",
      b: "Código</br>",
      c: "Mensaje</br>",
      d: "Referente</br>",
      e: "Contexto</br></br>",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "4. <b>Si encontramos una bandera roja en la playa, sabremos que está contaminada. El código es:</b>",
    respuestas: {
      a: "La bandera</br>",
      b: "El color</br>",
      c: "La playa</br>",
      d: "El mar</br>",
      e: "El bikini</br></br>",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "5. <b>Ambiente que rodea el mensaje y permite al receptor interpretar correctamente lo que el emisor quiso comunicarle.</b></br>",
    respuestas: {
      a: "Canal</br>",
      b: "Código</br>",
      c: "Contexto</br>",
      d: "Mensaje</br>",
      e: "Decodificador</br></br>",
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