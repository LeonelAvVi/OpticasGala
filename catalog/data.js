var data=[];

let all = data.length;
//let all = 0;
let women = 0;
let man = 0;
let chield = 0;
let unisex = 0;

fetch('prueba.php')
.then(response => response.json())
.then(result => {
    // Procesa los datos como un objeto
    console.log(result);
    data = result;
    data.forEach((item) => {
        switch (item.category){
            case "women" : women++; break;
            case "man" : man ++; break;
            case "chield" : chield ++; break;
            case "unisex" : unisex ++; break;
        }
    })

    document.getElementById("all").innerHTML = data.length;
    document.getElementById("women").innerHTML = women;
    document.getElementById("man").innerHTML = man;
    document.getElementById("chield").innerHTML = chield;
    document.getElementById("unisex").innerHTML = unisex;
    let html = '';
    data.forEach((item) => {
        html += card(item);
    })
    document.getElementById("catalog").innerHTML = html;
    //cargarData();
});

//mostrar solo los productos de la categoria seleccionada
const viewCategory = (category) => {
    const catalog = document.getElementById("catalog");
    catalog.classList.add("catalog-transition");
    setTimeout(() => {
        catalog.innerHTML = "";
        if(category == "all"){
            let html = '';
            data.forEach((item) => {
                html += card(item);
            })
            catalog.innerHTML = html;
            catalog.classList.remove("catalog-transition");
            return;
        }
       //alert(category);
        let dataCategory = data.filter((item) => {
            return item.category == category;
        })
        let html = '';
        dataCategory.forEach((item) => {
            html += card(item);
        })
        catalog.innerHTML = html;
        catalog.classList.remove("catalog-transition");
    }, 300);
}

const search = () => {
    const catalog = document.getElementById("catalog");
    catalog.classList.add("catalog-transition");
    setTimeout(() => {
        catalog.innerHTML = "";
        let search = document.getElementById("search").value;
        let dataSearch = data.filter((item) => {
            return item.description.toLowerCase().includes(search.toLowerCase());
        })
        let html = '';
        dataSearch.forEach((item) => {
            html += card(item);
        })
        document.getElementById("catalog").innerHTML = html;
        catalog.innerHTML = html;
        catalog.classList.remove("catalog-transition");
    }, 300);
}

// una funcion q se active cada ves que el valor de input con el id search cambie

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {

  //console.log(searchInput.value);
  if(searchInput.value == ""){
    viewCategory("all");
  }
});



let card = (product) => {
    return `
    <div class="col-lg-4 col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-img-top position-relative">
                <img class="img-fluid rounded-top" src="data:image/png;base64,${product.image}" alt="${product.name}">
                ${
                    product.cantidad > 0 ? '<span class="badge badge-danger badge-pill position-absolute p-2" style="top: 10px; left: 10px;">Agotado</span>'
                    :
                    product.new == "1" ?'<span class="badge badge-primary badge-pill position-absolute p-2" style="top: 10px; left: 10px;">Nuevo</span>':''
                }
            </div>
            <div class="card-body">
                <h5 class="card-title text-secondary font-weight-semi-bold text-lg mb-2">${product.name}</h5>
                <p class="card-text text-muted mb-2">${product.description}</p>
                <p class="card-text font-weight-semi-bold font-large text-secondary mb-3">Bs: ${product.price}</p>
                <button class="btn btn-sm btn-primary py-2 color-white mb-1" data-toggle="modal" data-target="#videoModal" onclick="loadModal(${product.id})" ${product.cantidad > 0 ? 'disabled' : ''}>${product.cantidad > 0 ? 'Agotado' : 'Ver producto'}</button>
            </div>
        </div>
    </div>
    `
}

loadModal = (id) => {
    let product = data.find((item) => {
        return item.id == id;
    })


    document.getElementById("bodyM").innerHTML = `
    <div class="row no-gutters m-4 sm:m-0" >
        <div class="col-md-8">
            <div class="embed-responsive">
                <img class="img-fluid w-100 rounded-top mx-2" src="data:image/png;base64,${product.image}" alt="">
            </div>
            </div>
            <div class="col-md-4">
            <div class="card h-100">
                <div class="card-body">
                <h4 class="text-secondary mb-3">${product.name}</h4>
                <p class="mb-4">${product.description}</p>
                <p class="mb-1"><strong>Marca:</strong></p>
                <div class="mb-4">
                <h3>${product.mark}</h3>
                </div>
                <p class="mb-1"><strong>Precio:</strong></p>
                <p class="font-weight-bold text-secondary mb-0 h3">Bs. ${product.price}</p>
                </div>
                <div class="card-footer bg-white">
                <button type="button" class="btn btn-primary w-100 py-2"
                onclick="alertas('${product.name}')"
                >Comprar</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

alertas = (nombre) => {
    let mensaje = `Hola, estoy interesado en el producto ${nombre} y quisiera saber mas informacion`;
    let url = 'https://api.whatsapp.com/send?phone=59171172522&text='+mensaje;
    window.open(url, '_blank');
}


