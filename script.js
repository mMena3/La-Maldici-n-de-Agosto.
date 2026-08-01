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