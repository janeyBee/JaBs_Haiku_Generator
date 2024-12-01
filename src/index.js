function runHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: "What will you do with your one magnificent life?",
    autoStart: true,
    delay: 55,
    cursor: "",
  });
}

let haikuformElement = document.querySelector("#haiku_form");
haikuformElement.addEventListener("submit", runHaiku);
