const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener('click', function() {
    let inputValue = input.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (inputValue === "") {
        alert("Please input a value");
    } else if (inputValue.length === 1) {
        result.textContent = inputValue + " is a palindrome";
    }

    let reverse = inputValue.split("").reverse().join("");
    if (inputValue === reverse) {
        result.textContent = input.value + " is a palindrome";
    } else {
        result.textContent = input.value + " is not a palindrome";
    }
});