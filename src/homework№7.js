export function addForm(el) {
	const input = document.createElement("input");
	const button = document.createElement("button");
	// let p = document.createElement("p");
	button.innerHTML = "add";
	button.addEventListener("click", () => {
		const p = document.createElement("p");
		el.appendChild(p);
		p.innerHTML = input.value;
		input.value = "";
		if (el.querySelectorAll("p").length > 4) {
			el.removeChild(el.querySelectorAll("p")[0]);
		}
	});

	el.appendChild(input);
	el.appendChild(document.createElement("p"));
	el.appendChild(document.createElement("p"));
	el.appendChild(document.createElement("p"));

	input.addEventListener("keyup", () => {
		if (input.value !== "") {
			el.appendChild(button);
		} else {
			el.removeChild(button);
		}
	});
}
