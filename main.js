var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('I am a Front-End Developer')
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('Digital Artist')
    .pauseFor(2500)
    .deleteChars(14)
    .typeString('Graphic Designer')
    .pauseFor(2500)
    .start();