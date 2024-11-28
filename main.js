var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Soy Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteChars(27)
    .typeString('Artista Digital')
    .pauseFor(2500)
    .deleteChars(15)
    .typeString('Diseñadora')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Conóceme!</strong>')
    .pauseFor(2500)
    .start();