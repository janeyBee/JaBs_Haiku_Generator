function runHaiku(event) {
  event.preventDefault();

  new Typewriter('#haiku', {
    strings: 'change is like a river,',
    autoStart: true,
    delay: 75,
    cursor: null,
  });
}

let haikuFormElement = document.querySelector('#haiku_generator');
haikuFormElement.addEventListener('submit', runHaiku);
