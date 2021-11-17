const isIntersecting = (entry) => {
	// SI esta a 200px de la pantalla hacer x o y cosa 
	return entry.isIntersecting  // true ( dentro de la pantalla)
}

const accion = (entry) => {
	const nodo = entry.target;
	
	console.log("holis");

	// unobserve
	observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
	entries.filter(isIntersecting).forEach(accion)
}) 


export const registerImage = (imanen) => {
	// IntersectionObserver => observer(imagen)
	observer.observe(imanen)
};
