export function addForm() {
	const input = document.querySelector(".input");
	const addButton = document.querySelector(".addButton");
	function inputChange(event) {
		if (event.target.value !== null && event.target.value.trim() !== "") {
			addButton.style.visibility = "visible";
		} else {
			addButton.style.visibility = "hidden";
		}
	}
	function addElement() {
		const listElement = document.querySelector(".listElement");
		const p = document.createElement("p");
		if (input.value !== null && input.value.trim() !== "") {
			p.textContent = input.value;
			input.value = null;
			addButton.style.visibility = "hidden";
			listElement.appendChild(p);
			if (listElement.childElementCount > 4) {
				listElement.removeChild(listElement.firstChild);
				input.addEventListener("keyup", inputChange);
				addButton.addEventListener("click", addElement);
			}
		}
	}
	input.addEventListener("keyup", inputChange);
	addButton.addEventListener("click", addElement);
}
