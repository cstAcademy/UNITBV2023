console.log("merge");

const firstNameInput = document.querySelector("#fname");
console.log(firstNameInput);

const pageTitle = document.querySelector("h1");
console.log(pageTitle);

firstNameInput.addEventListener("input", (inputValue) => {
  console.log(inputValue.target.value);
  pageTitle.textContent = inputValue.target.value;
});

const checkboxOne = document.querySelector("#item1");
const labelOne = document.querySelector("label");
checkboxOne.addEventListener("input", (inputValue) => {
  labelOne.textContent = inputValue.target.checked;
});

let clickCounter = 0;
const counterDisplay = document.querySelector("h2");
addEventListener("click", () => {
  clickCounter++;
  counterDisplay.textContent = clickCounter;
});

const minimalistLambdaFunction = (text) => text;

const longerLambdaFunction = (text) => {
  return text;
};

function normalFunction(text) {
  return text;
}

console.log(normalFunction("I am called by a normal function"));
console.log(minimalistLambdaFunction("I am called by the minimalist lambda"));
console.log(longerLambdaFunction("I am called by the longer lambda"));

const simpleArray = [1, 2, 3, 4, 5, 6, 7];

simpleArray.forEach((item) => {
  console.log(item);
});

console.log(simpleArray.filter((item) => item % 2 === 0));
