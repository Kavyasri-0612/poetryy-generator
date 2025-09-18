function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });

  let submitButton = document.querySelector("#submit-button");
  submitButton.removeAttribute("disabled");
}

function displaybestPoem() {
  let poem = `
    Beneath the stars where silence grows,<br />
    A dream takes flight on midnight’s rose.<br />
    Time may fade, but echoes stay,<br />
    In hearts that dared to lose their way.<br /><br />

    <strong>Coded by Kavyasri Kandula 💜</strong>
    `;

  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    delay: 50,
    cursor:"",
  });
}

function generate(event) {
  event.preventDefault();
  
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'Coded by Kavyasri Kandula 🩷' inside a <strong> element at the end of the poem and NOT at the beginning. Do not include markdown around it";
  let instructionsInput = document.querySelector("#instructions");
  let prompt = `User instructions: Generate a romantic poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=8d9c6f00c08bcb1a3bo8fd87a4d1b4t6`;

  let submitButton = document.querySelector("#submit-button");
  submitButton.setAttribute("disabled", "disabled");

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="waiting">⏳ Generating a poem about ${instructionsInput.value}..</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generate);
displaybestPoem();
