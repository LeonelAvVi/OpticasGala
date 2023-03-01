let data = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 100,
        "description": "Product 1 description",
        "image": "uno.jpg",
        "colors": [ "red", "blue", "green" ],
        "category": "women",
        "marca": "timberland",
        "new": true,
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 200,
        "description": "Product 2 description",
        "image": "dos.jpg",
        "colors": [ "red", "blue", "green" ],
        "category" : "women",
        "marca": "miraflex",
        "new": true,
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 300,
        "description": "Product 3 description",
        "image": "tres.jpg",
        "colors": [ "red", "blue", "green" ],
        "category" : "man",
        "marca": "miraflex",
        "new": false,
    },
    {
        "id": 4,
        "name": "Product 3",
        "price": 300,
        "description": "Product 3 description",
        "image": "cuatro.jpg",
        "colors": [ "red", "blue", "green" ],
        "category" : "chield",
        "marca": "timberland",
        "new": false,
    },
    {
        "id": 5,
        "name": "Product 3",
        "price": 300,
        "description": "Product 3 description",
        "image": "cinco.jpg",
        "colors": [ "red", "blue", "green" ],
        "category" : "unisex",
        "marca": "miraflex",
        "new": false,
    },
    {
        "id": 6,
        "name": "Product 3",
        "price": 300,
        "description": "Product 3 description",
        "image": "seis.jpg",
        "colors": [ "red", "blue", "green" ],
        "category" : "unisex",
        "marca": "miraflex",
        "new": false,
    },

]

let all = data.length;
let women = 0;
let man = 0;
let chield = 0;
let unisex = 0;

llenar = () => {
    data.forEach((item) => {
        switch (item.category){
            case "women" : women++; break;
            case "man" : man ++; break;
            case "chield" : chield ++; break;
            case "unisex" : unisex ++; break;
        }
    })
}
llenar();

document.getElementById("all").innerHTML = all;
document.getElementById("women").innerHTML = women;
document.getElementById("man").innerHTML = man;
document.getElementById("chield").innerHTML = chield;
document.getElementById("unisex").innerHTML = unisex;

let card = (product) => {
    return `
    <div class="col-lg-4 col-md-6 mb-3 rounded text-center p-0 box-shadow pb-3 px-3">
        <div class="position-relative mb-0">
            <img class="img-fluid w-100" src="img/catalog/${product.image}" alt="" style="border-radius: 10px 10px 0 0;">
            ${
                product.new ? `<span class="badge badge-secondary badge-pill position-absolute p-2" style="top: 10px; right: 10px;">Nuevo</span>`
                : ''
            }
        </div>
        <div class="bg-light rounded-bottom">
        <p class=" mx-2 text-secondary font-weight-semi-bold" style="color:#3E3E4E">${product.name}</p>
        <p class="mx-2" style="font-size: small;">
            ${product.description} 
        </p>
        <!-- <div class="d-flex justify-content-around align-items-center"> -->
            <p style="margin-bottom: 0 !important; font-size: x-large;" class="font-weight-semi-bold font-large">Bs:<span class="text-secondary"> ${product.price}</span></p>
            <button class="btn btn-sm btn-primary py-2 m-2 my-3 color-white mb-1" data-toggle="modal"
            data-target="#videoModal"
            data-dismiss="modal" aria-label="Close" href=""
            onclick="loadModal(${product.id})"
            >Ver producto</button>
        <!-- </div> -->
        </div>
    </div>
    `
}

cargarData = () => {

    let html = '';
    data.forEach((item) => {
        html += card(item);
        console.log("cargando"+item.name);
    })
    document.getElementById("catalog").innerHTML = html;
}
cargarData();

dataCategory = (category) => {
    let dataCategory = data.filter((item) => {
        return item.category == category;
    })
    return dataCategory;
}

loadModal = (id) => {
    let product = data.find((item) => {
        return item.id == id;
    })

    document.getElementById("bodyModal").innerHTML = `
        <img class="img-fluid w-100" src="img/catalog/${product.image}" alt="" style="border-radius: 10px 10px 0 0;"> 
        <div class="card p-3">
            <h4 class="text-secondary">${product.name}</h4>
            <p>
                ${product.description}
            </p>
            <p>Colores</p>
            <ul>
                ${product.colors.map((color) => {
                    return `<li style="background-color: ${color};"></li>`
                }).join('')}
            </ul>
            <p>Marca</p>
            <img class="img-fluid w-100" src="img/mark/${product.marca}.png" alt="" style="border-radius: 10px 10px 0 0;border : 0px solid #1a1b1b00; height: auto;">
            <p>Precio :</p>
            <p style="margin-bottom: 0 !important; font-size: x-large;" class="font-weight-semi-bold font-large">Bs:<span class="text-secondary"> ${product.price}</span></p>
            <button class="btn btn-sm btn-primary py-2 m-2 color-white mb-1" data-toggle="modal"
            data-target="#videoModal"
            data-dismiss="modal" aria-label="Close" href=""
            >Comprar</button>

        </div>  
    `;
}


