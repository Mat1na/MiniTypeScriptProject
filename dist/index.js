"use strict";
const btn = document.getElementById("btn"); //add ! to say it's not null if we are sure that the id exists
const input = document.getElementById("todoinput");
const form = document.querySelector("#todoform");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submited");
});
// btn.addEventListener("click", () => {
//  alert( input.value); //Property 'value' does not exist on type 'HTMLElement' so we ad above as HTMLInputElement
//  input.value=""
// });
