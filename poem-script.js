// Agrega aquí las estrofas de tu soneto
const estrofas = [
  "Un verso aquí que empieza la penumbra,<br>otro verso que sigue en la distancia,<br>la luz lejana que apenas alumbra,<br>y el susurro tenue de su fragancia.",
  "Segunda estrofa del soneto aquí,<br>continúa el ritmo con elegancia,<br>palabras dulces que guardé para ti,<br>llenas de calma y de resonancia.",
  "Tercera estrofa que empieza a cerrar,<br>con sentimiento firme y profundo,<br>un verso claro para recordar.",
  "Y en el último verso de este mundo,<br>dejar la huella que no ha de borrar,<br>este secreto sutil y fecundo.",
  
  // Corazón alineado con proporciones reales:
  "<div class='corazon-puntos'>" +
  " * *       * * <br>" +
  "*   *     *   *<br>" +
  "*     * *     *<br>" +
  " *           * <br>" +
  "   *       *   <br>" +
  "     *   *     <br>" +
  "       *       " +
  "</div>"
];

const contenedor = document.getElementById("contenedor-poema");
let indiceEstrofa = 0;

function escribirEstrofa() {
  if (indiceEstrofa < estrofas.length) {
    const p = document.createElement("div");
    p.classList.add("estrofa-tipeando");
    contenedor.appendChild(p);

    let textoHTML = estrofas[indiceEstrofa];
    let i = 0;

    function escribirLetra() {
      // Reconoce saltos de línea y el contenedor del corazón
      if (textoHTML.substring(i, i + 4) === "<br>") {
        p.innerHTML += "<br>";
        i += 4;
      } else if (textoHTML.substring(i, i + 28) === "<div class='corazon-puntos'>") {
        p.innerHTML += "<div class='corazon-puntos'>";
        i += 28;
      } else if (textoHTML.substring(i, i + 6) === "</div>") {
        p.innerHTML += "</div>";
        i += 6;
      } else {
        p.innerHTML += textoHTML.charAt(i);
        i++;
      }

      if (i < textoHTML.length) {
        setTimeout(escribirLetra, 20); // Velocidad de tipeo fluida
      } else {
        p.classList.remove("estrofa-tipeando");
        indiceEstrofa++;
        setTimeout(escribirEstrofa, 500);
      }
    }

    escribirLetra();
  }
}

window.onload = () => {
  setTimeout(escribirEstrofa, 500);
};