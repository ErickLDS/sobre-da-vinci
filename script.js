// Variáveis 

// Imagens
const btn_img = document.getElementsByClassName("btn-img"),
img_view = document.getElementsByClassName("img-view"),
img_cont = document.getElementsByClassName("img-cont"),
btn_fechar = document.getElementsByClassName("button-fechar");

// Scroll
const menu_element = document.querySelectorAll(".menu-element"),
btn_subir = document.getElementById("btn-subir");


// Botão de voltar ao topo
window.addEventListener("scroll", function () {
	if (window.scrollY >= document.querySelector("#biografia").offsetTop) {
		btn_subir.classList.add("fade-in");
		btn_subir.style.display = "flex";
	} else if (window.scrollY < document.querySelector("#biografia").offsetTop) {
		btn_subir.style.display = "none";
	}
});


// Scroll animation
for (let i = 0; i < menu_element.length; i++) {
	menu_element[i].addEventListener("click", function (ev) {
		ev.preventDefault();
		var id = menu_element[i].getAttribute("href");
		var to = document.querySelector(id).offsetTop;
		window.scroll({
			top: to,
			behavior: "smooth",
		});
	});
}

// Scroll para 0
btn_subir.addEventListener("click", function (ev) {
	ev.preventDefault();
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
})


// Expandir imagens
for (let i = 0; i < btn_img.length; i++) {
	btn_img[i].addEventListener("click", function () {
		img_view[i].style.display = "flex";
		img_cont[i].classList.add("fade-in");
	});
}

// Fechar imagens
for (let i = 0; i < btn_fechar.length; i++) {
	btn_fechar[i].addEventListener("click", function () {
		img_cont[i].classList.remove("fade-in");
		img_view[i].classList.add("fade-out");
		setTimeout(fechar, 450);

		function fechar () {
			img_view[i].style.display = "none";
			img_view[i].classList.remove("fade-out");
		}
	});
}