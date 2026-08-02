function cambiarModo() {
    const cuerpo = document.body;
    if (cuerpo.style.backgroundColor === 'rgb(43, 43, 43)') {
        cuerpo.style.backgroundColor = '#f4f1ea';
        cuerpo.style.color = '#2b2b2b';
    } else {
        cuerpo.style.backgroundColor = '#2b2b2b';
        cuerpo.style.color = '#f4f1ea';
    }
}

function revelarSecret() {
    const elemento = document.getElementById('mensaje-sorpresa');
    elemento.classList.remove('oculto');

    // Opcional: Cerrar el mensaje si vuelve a hacer clic en cualquier lado
    setTimeout(() => {
        window.addEventListener('click', function cerrar(e) {
            if (!elemento.contains(e.target) && !e.target.classList.contains('secreto')) {
                elemento.classList.add('oculto');
                window.removeEventListener('click', cerrar);
            }
        });
    }, 100);
}