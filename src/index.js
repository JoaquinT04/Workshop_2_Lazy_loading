// Mi intento 
/* /* <div id="images">
<div class= "p-4">
	<img class = "mx-auto" width="320" src="https://randomfox.ca/images/2.jpg" alt="">
</div>
</div> 

const baseUrlImageFox = "https://randomfox.ca/images/"; 

const appNode = document.querySelector("#app");


// const buttonAgregar = document.createElement("button");
// button.className = "w-8 height-6";

// const buttonEliminar = document.createElement("button");
// button.className = "w-8 height-6";
const todosLosItems= [];

// Creando un conteiner para la imagen y el/los botones
const container = document.createElement("div");
// Creando el boton
const buttonAgregar = document.createElement("button");
buttonAgregar.type = 'button';
buttonAgregar.className = "w-16 h-16 border-red-700 rounded-lg 	";
buttonAgregar.innerText = "agregar";

//Creando un container para las imagenes
const imagesContainer = document.createElement("div");
imagesContainer.id = "images";

//Creando un container para cada imagen
const imageContainer = document.createElement("div");
imageContainer.className = "p-4";

// Creando la etiqueta img con su respectivo src
const image = document.createElement("img")
image.className = "mx-auto w-80"

image.src = `${baseUrlImageFox}2.jpg`;

// Agregando la imagen adentro del imageContainer
imageContainer.appendChild(image);

// Agregando el container de la imagen individual, adentro del conteiner de imagenes
imagesContainer.appendChild(imageContainer);

// Agregando el boton y la imagen al container de mi aplicacion
container.append(buttonAgregar, imagesContainer);

// agrego el container a el array
todosLosItems.push(container);

// Destructurando 'todosLosItems' para agregarlo dentro de appNode
appNode.append(...todosLosItems); */


import { registerImage } from './lazy'


export const reportImgs = {
	imgLoaded: 0,
	totalImg: 0
}


export const showReportImg = () => {
	console.log('----------------------------------------')
	console.log(`%c⚪Total Imgs: ${reportImgs.totalImg}`, 'color: white; font-size: 0.8rem');
	console.log(`%c🟣Total Cargadas: ${reportImgs.imgLoaded}`, 'color: hotpink; font-size: 0.8rem');
	console.log('----------------------------------------')
}

const maximun = 122;
const minimum = 2;
const random = () => Math.floor(Math.random() * (maximun - minimum)) + minimum;

const createImageNode = () =>{
	const container = document.createElement("div");
	container.className = "p-4";

	const imagen = document.createElement('img');
	imagen.className = "mx-auto bg-current";
	imagen.width = '320';
	imagen.height = "320";
	imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

	container.appendChild(imagen);

	return container;
}

let mountNode = document.getElementById("images")

const addButton = document.querySelector("#add_button");
const addImage = () => {
	reportImgs.totalImg++;
	showReportImg();

	const newImage = createImageNode();
	mountNode.append(newImage);
	registerImage(newImage);
};
addButton.addEventListener("click", addImage);

const clearButton = document.querySelector("#clear_button");

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

const deletAll = () => {
	console.clear()
	reportImgs.imgLoaded = 0;
	reportImgs.totalImg = 0;
	removeAllChildren(mountNode)
}

clearButton.addEventListener("click", deletAll)