// export function addForm(el) {
// //   const input = document.getElementById("input");
// //   const addButton = document.getElementById("addButton");
// //
// //   input.addEventListener("keyup", inputChange);
// //   addButton.addEventListener("click", addElement);
// //
// //   function inputChange(event) {
// //     if (event.target.value !== null && event.target.value.trim() !== "") {
// //       addButton.style.visibility = "visible";
// //     } else {
// //       addButton.style.visibility = "hidden";
// //     }
// //   }
// //
// //   function addElement() {
// //     const listElement = document.getElementById("listElement");
// //     const input = document.getElementById("input");
// //     const p = document.createElement("p");
// //     if (input.value !== null && input.value.trim() !== "") {
// //       p.textContent = input.value;
// //       input.value = null;
// //       addButton.style.visibility = "hidden";
// //       listElement.appendChild(p);
// //       if (listElement.childElementCount > 4) {
// //         listElement.removeChild(listElement.firstChild);
// //       }
// //     }
// //   }
// //
// // };
// // addForm();
// import { addForm } from "./homework7";
import { addForm } from "./homework7";

addForm(document.querySelector("#app"));
