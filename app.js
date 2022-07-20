const email = document.querySelector("#email");
const btn = document.querySelector("#submit");
const err = document.querySelector("#err");
const reg =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

// btn.addEventListener("click", () => {
//   if (reg.test(email.value)) {
//     alert("valid email");
//   } else {
//     alert("invalid email");
//   }
// });

const emailVerif = () => {
  if (email.value === "") {
    email.style.border = "1px solid red";
    err.innerHTML = "Please complete the query";
    err.style.color = "red";
    return;
  }
  if (reg.test(email.value)) {
    err.style.color = "hsl(223, 87%, 63%)";
    err.innerHTML = "We will notify you shortly";
    return;
  } else {
    email.style.border = "1px solid red";
    err.innerHTML = "Please provide a valid email adress";
    err.style.color = "red";

    return;
  }
};
