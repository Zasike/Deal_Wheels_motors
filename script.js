const autos = [

{
    nombre: "Toyota Corolla 2022",
    precio: "$27.800",
    imagen: "img/toyota.jpg",
    kilometraje: "45.000 km",
    motor: "1.8",
    combustible: "Nafta",
    transmision: "Manual"
},

{
    nombre: "Ford Ranger 2021",
    precio: "$28.000",
    imagen: "img/ford.jpg",
    kilometraje: "60.000 km",
    motor: "3.2",
    combustible: "Diesel",
    transmision: "Manual"
},

{
    nombre: "Peugeot 208 2023",
    precio: "$19.000",
    imagen: "img/peugeot.jpg",
    kilometraje: "12.000 km",
    motor: "1.6",
    combustible: "Nafta",
    transmision: "Automática"
},

{
    nombre: "Chevrolet Tracker 2022",
    precio: "$23.000",
    imagen: "img/chevrolet.jpg",
    kilometraje: "33.000 km",
    motor: "1.2 Turbo",
    combustible: "Nafta",
    transmision: "Automática"
},

{
    nombre: "Fiat Cronos 2022",
    precio: "$17.500",
    imagen: "img/fiat.jpg",
    kilometraje: "40.000 km",
    motor: "1.3",
    combustible: "Nafta",
    transmision: "Manual"
},

{
    nombre: "Toyota Hilux 2018",
    precio: "$31.000",
    imagen: "img/toyotahilux.png",
    kilometraje: "88.000 km",
    motor: "2.8",
    combustible: "Diesel",
    transmision: "Manual"
},

{
    nombre: "Toyota Yaris 2023",
    precio: "$21.000",
    imagen: "img/toyotayaris.png",
    kilometraje: "8.000 km",
    motor: "1.5",
    combustible: "Nafta",
    transmision: "CVT"
},

{
    nombre: "Ford Ka 2020",
    precio: "$14.500",
    imagen: "img/fordka.png",
    kilometraje: "50.000 km",
    motor: "1.5",
    combustible: "Nafta",
    transmision: "Manual"
},

{
    nombre: "Audi Q7 2023",
    precio: "$85.000",
    imagen: "img/audiQ7.png",
    kilometraje: "5.000 km",
    motor: "3.0 Turbo",
    combustible: "Nafta",
    transmision: "Automática"
},

{
    nombre: "BMW 4 Series 2020",
    precio: "$73.000",
    imagen: "img/BMW4series.png",
    kilometraje: "30.000 km",
    motor: "2.0 Turbo",
    combustible: "Nafta",
    transmision: "Automática"
},

{
    nombre: "Mercedes-Benz S 2019",
    precio: "$95.000",
    imagen: "img/MercedesBenzS.png",
    kilometraje: "22.000 km",
    motor: "4.0 V8",
    combustible: "Nafta",
    transmision: "Automática"
}

,
{
    nombre: "Ford Ranger 2018",
    precio: "$24.000",
    imagen: "img/fordranger.png",
    kilometraje: "95.000 km",
    motor: "3.2 Diesel",
    combustible: "Diesel",
    transmision: "Manual"
},

{
    nombre: "Chevrolet Cruze 2018",
    precio: "$18.500",
    imagen: "img/chevroletcruze.png",
    kilometraje: "70.000 km",
    motor: "1.4 Turbo",
    combustible: "Nafta",
    transmision: "Automática"
},

{
    nombre: "Chevrolet Traverse 2024",
    precio: "$79.000",
    imagen: "img/chevrolettraverse.png",
    kilometraje: "3.000 km",
    motor: "3.6 V6",
    combustible: "Nafta",
    transmision: "Automática"
},

{
    nombre: "Fiat Argo 2018",
    precio: "$13.000",
    imagen: "img/fiatargo.png",
    kilometraje: "84.000 km",
    motor: "1.3",
    combustible: "Nafta",
    transmision: "Manual"
},

{
    nombre: "Fiat Fastback 2025",
    precio: "$38.000",
    imagen: "img/fiatfastback.png",
    kilometraje: "0 km",
    motor: "1.3 Turbo",
    combustible: "Nafta",
    transmision: "CVT"
},

{
    nombre: "Peugeot 208 2019",
    precio: "$15.500",
    imagen: "img/peugeot.jpg",
    kilometraje: "62.000 km",
    motor: "1.6",
    combustible: "Nafta",
    transmision: "Manual"
},

{
    nombre: "Volkswagen Amarok 2023",
    precio: "$43.000",
    imagen: "img/volkswagenamarok.png",
    kilometraje: "11.000 km",
    motor: "3.0 V6",
    combustible: "Diesel",
    transmision: "Automática"
},

{
    nombre: "Volkswagen E-BORA 2021",
    precio: "$34.000",
    imagen: "img/volkswagenebora.jpg",
    kilometraje: "26.000 km",
    motor: "Eléctrico",
    combustible: "Eléctrico",
    transmision: "Automática"
},

{
    nombre: "Renault Sandero 2018",
    precio: "$12.500",
    imagen: "img/renauldsandero.png",
    kilometraje: "90.000 km",
    motor: "1.6",
    combustible: "Nafta",
    transmision: "Manual"
},

{
    nombre: "Renault Duster 2021",
    precio: "$26.000",
    imagen: "img/renaulduster.png",
    kilometraje: "35.000 km",
    motor: "1.3 Turbo",
    combustible: "Nafta",
    transmision: "Manual"
}

];

function crearCards() {

    const container =
    document.getElementById("carsContainer")
    ||
    document.getElementById("catalogoContainer");

    if(!container) return;

    container.innerHTML = "";

    autos.forEach(auto => {

        container.innerHTML += `

        <div class="car-card">

            <img src="${auto.imagen}">

            <h2>${auto.nombre}</h2>

            <p>${auto.precio}</p>

            <button onclick="verDetalles('${auto.nombre}')">
                Ver detalles
            </button>

        </div>

        `;

    });

}

crearCards();

function verDetalles(nombre){

    localStorage.setItem("autoSeleccionado", nombre);

    window.location.href = "detalles.html";

}

function buscarAuto(event){

    if(event.key === "Enter"){

        let texto =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

        const resultado =
        autos.filter(auto =>
            auto.nombre.toLowerCase().includes(texto)
        );

        const container =
        document.getElementById("catalogoContainer");

        container.innerHTML = "";

        resultado.forEach(auto => {

            container.innerHTML += `

            <div class="car-card">

                <img src="${auto.imagen}">

                <h2>${auto.nombre}</h2>

                <p>${auto.precio}</p>

                <button onclick="verDetalles('${auto.nombre}')">
                    Ver detalles
                </button>

            </div>

            `;

        });

    }

}
function login(){

    let usuario =
    document.getElementById("user").value;

    let password =
    document.getElementById("pass").value;

    if(usuario === "admin" && password === "1234"){

        alert("Ingreso correcto");

        window.location.href = "index.html";

    }else{

        alert("Usuario o contraseña incorrectos");

    }

}

function filtrarAutos(){

    let marca =
    document.getElementById("marcaFilter").value;

    let year =
    document.getElementById("yearFilter").value;

    let filtrados = autos.filter(auto => {

        let coincideMarca =
        marca === ""
        ||
        auto.nombre.includes(marca);

        let coincideYear =
        year === ""
        ||
        auto.nombre.includes(year);

        return coincideMarca && coincideYear;

    });

    const container =
    document.getElementById("catalogoContainer");

    container.innerHTML = "";

    filtrados.forEach(auto => {

        container.innerHTML += `

        <div class="car-card">

            <img src="${auto.imagen}">

            <h2>${auto.nombre}</h2>

            <p>${auto.precio}</p>

            <button onclick="verDetalles('${auto.nombre}')">
                Ver detalles
            </button>

        </div>

        `;

    });

}
function cambiarIdioma(){

    let idioma =
    document.getElementById("langSelector").value;

    let titulo =
    document.querySelector("header h1");

    if(idioma === "es"){

        titulo.innerText =
        "Deal Wheels Motor Concesionaria";

    }

    if(idioma === "en"){

        titulo.innerText =
        "Deal Wheels Motor Dealership";

    }

    if(idioma === "pt"){

        titulo.innerText =
        "Concessionária Deal Wheels Motor";

    }

    if(idioma === "it"){

        titulo.innerText =
        "Concessionaria Deal Wheels Motor";

    }

}