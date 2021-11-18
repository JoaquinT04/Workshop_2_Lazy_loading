import { reportImgs, showReportImg } from'./index.js'
const isIntersecting = (entry) => {
	// console.log("entry de isIntersecting: ",entry)
	// console.log("entry.target.isConnected de isIntersecting: ",entry.target.isConnected);
	// SI esta a 200px de la pantalla hacer x o y cosa 
	return entry.isIntersecting  // true ( dentro de la pantalla)
}
const loadImage = (entry) => {
	
	const container = entry.target; // div que tiene adentro a la imagen
	
	const imagen = container.firstChild;
	const url = imagen.dataset.src;
	
	//load image
	imagen.src = url;
	
	// unobserve
	observer.unobserve(container)
	reportImgs.imgLoaded++;
	showReportImg();
}

const observer = new IntersectionObserver((entries) => {
	// console.log("entries de: IntersectionObserver: ",entries);
	entries.filter(isIntersecting).forEach(loadImage)
}) 


export const registerImage = (imanen) => {
	// IntersectionObserver => observer(imagen)
	observer.observe(imanen)
};
