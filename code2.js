const containerEl = document.querySelector(".container");

const careers = ["my mom..", "my papa..", "my life.."];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>My love ${careers[
    careerIndex
  ].slice(0, characterIndex)} &#129392</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}