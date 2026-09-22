// Agrega aquí las estrofas de tu soneto
const estrofas = [
  "Un verso aquí que empieza la penumbra,<br>otro verso que sigue en la distancia,<br>la luz lejana que apenas alumbra,<br>y el susurro tenue de su fragancia.",
  "Segunda estrofa del soneto aquí,<br>continúa el ritmo con elegancia,<br>palabras dulces que guardé para ti,<br>llenas de calma y de resonancia.",
  "Tercera estrofa que empieza a cerrar,<br>con sentimiento firme y profundo,<br>un verso claro para recordar.",
  "Y en el último verso de este mundo,<br>dejar la huella que no ha de borrar,<br>este secreto sutil y fecundo.",
  
  // 💖 Corazón gigante tipeado en caracteres ASCII:
  "<div class='corazon-ascii'>" +
  "  &#10084;&#10084;   &#10084;&#10084;  <br>" +
  "&#10084;&#10084;&#10084;&#10084;&#10084; &#10084;&#10084;&#10084;&#10084;&#10084;<br>" +
  "&#10084;&#10084;&#10084;&#10084;&#10084;&#10084;&#10084;&#10084;&#10084;&#10084;&#10084;<br>" +
  " &#10084;&#10084;&#10084;&#10084;&#10084;&#10084;&#10084;&#10084;&#10084; <br>" +
  "   &#10084;&#10084;&#10084;&#10084;&#10084;&#10084;&#10084;   <br>" +
  "     &#10084;&#10084;&#10084;&#10084;&#10084;     <br>" +
  "       &#10084;&#10084;&#10084;       <br>" +
  "         &#10084;         " +
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
      // Manejo de etiquetas <br> y entidades HTML de caracteres
      if (textoHTML.substring(i, i + 4) === "<br>") {
        p.innerHTML += "<br>";
        i += 4;
      } else if (textoHTML.substring(i, i + 8) === "&#10084;") {
        p.innerHTML += "&#10084;";
        i += 8;
      } else if (textoHTML.substring(i, i + 27) === "<div class='corazon-ascii'>") {
        p.innerHTML += "<div class='corazon-ascii'>";
        i += 27;
      } else if (textoHTML.substring(i, i + 6) === "</div>") {
        p.innerHTML += "</div>";
        i += 6;
      } else {
        p.innerHTML += textoHTML.charAt(i);
        i++;
      }

      if (i < textoHTML.length) {
        setTimeout(escribirLetra, 25); // Velocidad al tipear
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