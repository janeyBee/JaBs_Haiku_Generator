function displayHaiku(response) {
  console.log("Haiku generated");

  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    pausefor: 1,
    delay: 55,
    cursor: "",
  });
}

function runHaiku(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#userInput");
  let apiKey = "8c03b3b1a26568f726tbe9f7fo7f441d";
  let prompt = `Generate an English haiku about ${instructionInput.value}.`;
  let context = `You are a Zen Master. Your mission is to to generate an enlightening haiku in basic html and be sure to put each line of the haiku onto a seperate line. Please do not provide any quotation marks and please do not use a heading. Please do not use the word "whispering" so much. Please sign your haiku inside a <strong> element at the bottom with "Haisei SheCodes AI"`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  new Typewriter("#haiku", {
    strings: ["Please breathe while I write your haiku"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  console.log("Generating Haiku");
  console.log(`prompt is ${prompt}`);
  console.log(`context is ${context}`);

  axios.get(apiURL).then(displayHaiku);
}

let haikuformElement = document.querySelector("#haiku_form");
haikuformElement.addEventListener("submit", runHaiku);
