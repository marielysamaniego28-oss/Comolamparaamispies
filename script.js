// Tu base de datos de productos
const productos = [
    {
        id: 1,
        nombre: "Guía de Oración",
        precio: "$5.00",
        fotos: ["guia1.jpg", "guia-dentro.jpg", "guia-atras.jpg"],
        descripcion: "Una guía completa de 30 días para tu tiempo con Dios."
    },
    {
        id: 2,
        nombre: "Planificador Versículos",
        precio: "$7.00",
        fotos: ["plan1.jpg", "plan2.jpg"],
        descripcion: "Organiza tu semana con la palabra de Dios."
    }
    // Aquí puedes seguir añadiendo hasta 100...
];

const contenedor = document.getElementById('contenedor-productos');

// Función para mostrar los productos en la tienda
productos.forEach(prod => {
    contenedor.innerHTML += `
        <div class="tarjeta" onclick="verDetalles(${prod.id})">
            <img src="${prod.fotos[0]}">
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
        </div>
    `;
});

function verDetalles(id) {
    const p = productos.find(item => item.id === id);
    document.getElementById('modal-titulo').innerText = p.nombre;
    document.getElementById('modal-desc').innerText = p.descripcion;
    document.getElementById('foto-principal').src = p.fotos[0];
    
    // Cargar miniaturas
    const mins = document.getElementById('miniaturas-contenedor');
    mins.innerHTML = "";
    p.fotos.forEach(f => {
        mins.innerHTML += `<img src="${f}" onclick="document.getElementById('foto-principal').src='${f}'">`;
    });

    document.getElementById('modal-producto').style.display = "block";
}