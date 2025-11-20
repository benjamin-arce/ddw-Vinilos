// Array de productos
const productos = [
    {
        id: 1,
        nombre: "Dark Side of the Moon - Pink Floyd",
        precio: 45900,
        imagen: "img/pinkfloyd.jpg",
        categoria: "rock"
    },
    {
        id: 2,
        nombre: "Abbey Road - The Beatles",
        precio: 42500,
        imagen: "img/thebeatles.jpg",
        categoria: "rock"
    },
    {
        id: 3,
        nombre: "Random Access Memories - Daft Punk",
        precio: 39800,
        imagen: "img/daftpunk.jpg",
        categoria: "electronica"
    },
    {
        id: 4,
        nombre: "Kind of Blue - Miles Davis",
        precio: 36400,
        imagen: "img/milesdavis.jpg",
        categoria: "jazz"
    },
    {
        id: 5,
        nombre: "Fine Line - Harry Styles",
        precio: 33200,
        imagen: "img/harrystyles.jpg",
        categoria: "pop"
    },
    {
        id: 6,
        nombre: "Thriller - Michael Jackson",
        precio: 41900,
        imagen: "img/michaeljackson.jpg",
        categoria: "pop"
    }
];

// Función para mostrar productos
function mostrarProductos() {
    const contenedor = document.getElementById('productos-container'); 
    if (!contenedor) return;
    
    let html = '';
    
    for (let i = 0; i < productos.length; i++) {
        html += `
            <div class="producto">
                <img src="${productos[i].imagen}" alt="${productos[i].nombre}">
                <h3>${productos[i].nombre}</h3>
                <p class="precio">$${productos[i].precio}</p>
            </div>
        `;
    }
    
    contenedor.innerHTML = html;
}

// Llena el selector de álbumes en la página de contacto
function poblarSelectorAlbumes() {
    const selectorAlbum = document.getElementById('album');
    if (!selectorAlbum) return;

    selectorAlbum.innerHTML = '<option value="" disabled selected>Selecciona un álbum</option>';

    productos.forEach((producto) => {
        const option = document.createElement('option');
        option.value = producto.nombre;
        option.textContent = producto.nombre;
        selectorAlbum.appendChild(option);
    });
}

// Maneja el envío del formulario de contacto y muestra errores si faltan campos
function manejarFormularioContacto() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', (event) => {
        // Evita el envío real y valida manualmente
        event.preventDefault();
        feedback.textContent = '';
        feedback.classList.remove('error');

        // Usa las reglas HTML existentes para determinar validez
        if (!form.checkValidity()) {
            feedback.textContent = 'Por favor completa todos los campos para enviar tu consulta.';
            feedback.classList.add('error');
            return;
        }

        feedback.textContent = '¡Mensaje enviado! Te responderemos pronto.';
    });
}

// Event listeners cuando carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar productos si estamos en la página correcta
    mostrarProductos();
    // Llenar selector de contacto si corresponde
    poblarSelectorAlbumes();
    // Validar formulario de contacto
    manejarFormularioContacto();
    
    // Año dinámico en footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Menu hamburger
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
}); 
