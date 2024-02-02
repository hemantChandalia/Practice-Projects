const data = [
  {
    id: "6",
    questions: `The more you take, the more you leave behind. What am I?`,
    answers: ` A Footsteps`,
  },
  {
    id: "8",
    questions: `I have keys but no locks. I have space but no room. You can enter, but you can't go inside. What am I?`,
    answers: `A Keyboard`,
  },
  {
    id: "3",
    questions: "Which animal is known as the 'Ship of the Desert?",
    answers:
      "The animal known as the Ship of the Desert is the camel. This nickname is often used to refer to both the dromedary camel, which has one hump, and the Bactrian camel, which has two humps. Camels are well-adapted to desert environments and have been traditionally used as transportation and pack animals in arid regions. The humps of camels store fat, which they can use as a source of energy and hydration when food and water are scarce.",
  },
  {
    id: "4",
    questions: "How many days are there in a week?",
    answers:
      "There are seven days in a week. They are, in order: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.",
  },
  {
    id: "5",
    questions: `I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?`,
    answers: `An Echo`,
  },
  {
    id: "1",
    questions: "How many letters are there in the English alphabet?",
    answers: `The English alphabet consists of 26 letters. These letters are:
     A B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.
     Each letter represents a unique sound or combination of sounds, and they are used to form words and convey meaning in the English language. The English alphabet is based on the Latin alphabet, with additional letters such as J, U, and W added over time.`,
  },
  {
    id: "7",
    questions: `The person who makes it, sells it. The person who buys it never uses it. What is it?`,
    answers: `A Coffin`,
  },
  {
    id: "2",
    questions: "Rainbow consist of how many colours?",
    answers: `
    A rainbow is traditionally considered to have seven colors: red, orange, yellow, green, blue, indigo, and violet. However, the colors form a continuous spectrum, and the division is somewhat arbitrary. Different people may perceive additional shades, but the seven-color representation is a common convention.`,
  },
];

const puzzleWrapper = document.querySelector(".puzzle");

function createPuzzleData() {
  puzzleWrapper.innerHTML = data
    .map(
      (dataItem) => `
      <div class="puzzle_item">
        <div class="puzzle_title">
          <h3>${dataItem.questions}</h3>
          <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class = "puzzle_content">
    <p>${dataItem.answers}</p>
</div>
      </div>
    `
    )
    .join(" ");
}

createPuzzleData();
const getPuzzleTitles = document.querySelectorAll(".puzzle_title");

console.log(getPuzzleTitles);

getPuzzleTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });

      currentItem.classList.add("active");
    }
  });
});
