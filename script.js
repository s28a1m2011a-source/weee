console.log("Javascript is connected");
let button = document.getElementById("calculateBtn");
let birthYearInput = document.getElementById("birthYear");
let result = document.getElementById("result");

button.addEventListener("click", function() {
    console.log("Button clicked");
    let birthYear = birthYearInput.value;
    let age = 2026 - birthYear;
    if (birthYear === "" || birthYear > 2026|| isNaN(birthYear)) {
        result.textContent = "Please enter a valid birth year.";
    } else {
        result.textContent = "Your age is: " + age;
    }
});