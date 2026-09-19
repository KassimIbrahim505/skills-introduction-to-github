const form = document.getElementById("calculator-form");
const resultElement = document.getElementById("result");

function calculate(firstNumber, secondNumber, operation) {
  switch (operation) {
    case "add":
      return firstNumber + secondNumber;
    case "subtract":
      return firstNumber - secondNumber;
    case "multiply":
      return firstNumber * secondNumber;
    case "divide":
      if (secondNumber === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return firstNumber / secondNumber;
    default:
      throw new Error("Invalid operation.");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseFloat(document.getElementById("first-number").value);
  const secondNumber = Number.parseFloat(document.getElementById("second-number").value);
  const operation = document.getElementById("operation").value;

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    resultElement.textContent = "Please enter valid numbers.";
    return;
  }

  try {
    const result = calculate(firstNumber, secondNumber, operation);
    resultElement.textContent = `Result: ${result}`;
  } catch (error) {
    resultElement.textContent = error.message;
  }
});
