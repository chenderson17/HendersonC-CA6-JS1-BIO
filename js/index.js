let userName = prompt("Welcome to Bear Hunter Ninja! Please enter your name to get started:");
alert(`Hi ${userName}! Lets Play!!`);
let userResponse = prompt("Who are you: Bear, Ninja, or Hunter?");
let computerResponse = "Bear";
document.getElementById("result").innerHTML = `${userName}, you picked ${userResponse}! <br> The computer picked ${computerResponse}!`;
