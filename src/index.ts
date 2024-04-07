/*
  Required Task
  1- on click subscribe button check if email is valid or not 
  2- if mail is not valid
    - show error message "Email is not valid"
    - change border color to tomato
    - text color to tomato

  3- if mail is valid 
    - show success message & remove card 
    - remove static email name with email input value
*/

const email = document.getElementById("email") as HTMLInputElement;
const subscribeBtn = document.querySelector(".subscribe") as HTMLButtonElement;
const validMsg = document.querySelector(".validation") as HTMLSpanElement;
const form = document.getElementById("form") as HTMLFormElement;
const successMsg = document.querySelector(".success-msg") as HTMLDivElement;
const card = document.querySelector(".card") as HTMLDivElement;
const emailName = document.querySelector(".email-name") as HTMLSpanElement;
const dismissBtn = document.querySelector(".dismiss") as HTMLButtonElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

subscribeBtn.addEventListener("click", () => {
  if (!email.checkValidity() || email.value === "") {
    // show error message "Email is not valid"
    validMsg.classList.remove("hidden");
    // add error class on email
    email.classList.add("error");
  } else {
    // show success message
    successMsg.classList.remove("hidden");
    // hide card
    card.classList.add("hidden");
    // add email value
    emailName.textContent = email.value;
  }
});

dismissBtn.addEventListener("click", () => {
  // show card & remove sucess
  card.classList.remove("hidden");
  successMsg.classList.add("hidden");
});
