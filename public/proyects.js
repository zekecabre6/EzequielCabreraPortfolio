import {
    arayproyectos
} from "./proyectos.js";

const producto = (nombre, img, href) => {
    return `
    <div>
        <h3><b>${nombre}</b></h3>
        <img src="${img}">
        <a href="${href}"></a>
        
    </div>
    `
}
const contenedor = document.getElementById('productos');


contenedor.innerHTML = "";

arayproyectos.forEach(productoIndividual => {
    contenedor.innerHTML += producto(productoIndividual.nombre, productoIndividual.img, productoIndividual.href)
});