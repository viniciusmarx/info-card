let seta = document.querySelectorAll(".material-symbols-rounded");
let item = document.querySelectorAll(".summary");
let paragrafo = document.createElement("p");
paragrafo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis egestas ex, a elementum est. Mauris auctor nunc quis erat.";

for (let i = 0; i < seta.length; i++) {
	seta[i].addEventListener("click", (e) => {
		if (e.target.classList.contains("open")) {
			e.target.classList.remove("open");
			paragrafo.remove();
		} else {
			seta[i].classList.add("open");
			item[i].appendChild(paragrafo);
		}

		seta.forEach((valor) => {
			if (valor !== e.target) {
				valor.classList.remove("open");
			}
		});
	});
}
