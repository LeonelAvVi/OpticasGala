var data=[];
fetch('prueba.php')
.then(response => response.json())
.then(result => {
    let html = '';
    data = result;
    data.forEach((item) => {
        //alert(item);
        html += rowProduct(item);
        console.log(item);
    })
    document.getElementById("productos").innerHTML = html;
    //cargarData();
}).catch(error => {
    console.log(error)
    });

const search = () => {
    const catalog = document.getElementById("productos");
    catalog.classList.add("catalog-transition");
    setTimeout(() => {
        catalog.innerHTML = "";
        let search = document.getElementById("search").value;
        let dataSearch = data.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        })
        let html = '';
        dataSearch.forEach((item) => {
            html += rowProduct(item);
        })
        document.getElementById("productos").innerHTML = html;
        catalog.classList.remove("catalog-transition");
    }, 300);
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {

  console.log(searchInput.value);
  if(searchInput.value == ""){
    let html = '';
    data.forEach((item) => {
        //alert(item);
        html += rowProduct(item);
        console.log(item);
    })
    document.getElementById("productos").innerHTML = html;
  }
});

const modalCreate = () => {
    let html = `
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Crear Producto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form
                action="update.php"
                method="POST"
                enctype="multipart/form-data"
            >
                <input type="hidden" name="type" id="type" value="create">
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nombre" name="nombre">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Descripcion:</label>
                    <textarea class="form-control" id="descripcion" name="descripcion"></textarea>
                </div>
                <div class="form-group d-flex flex-row gap-2">
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Precio:</label>
                        <input type="text" class="form-control" id="precio" name="precio">
                    </div>
                    <div class="form-group ml-2">
                        <label for="message-text" class="col-form-label">Cantidad:</label>
                        <input type="text" class="form-control" id="cantidad" name="cantidad">
                    </div>
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Imagen:</label>
                    <input type="file" class="form-control" id="imagen" name="imagen" >
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Categoria:</label>
                    <input type="text" class="form-control" id="categoria" name="categoria">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Fecha:</label>
                    <input type="text" class="form-control" id="fecha" name="fecha">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Marca:</label>
                    <input type="text" class="form-control" id="mark" name="mark">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Nuevo:</label>
                    <input type="text" class="form-control" id="nuevo" name="new">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" >Actualizar</button>
                </div>
            </form>                
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        </div>
    </div>`
    document.getElementById("Modal-content").innerHTML = html;
}


const modalUpdate = ( id, nombre, descripcion, precio, cantidad, imagen,categoria, fecha,mark, nuevo ) => {
    let html = `
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Actualizar Producto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form
                action="update.php"
                method="POST"
                enctype="multipart/form-data"
            >
                <input type="hidden" name="type" id="type" value="update">
                <div class="form-group">
                <input type="hidden" id="id" value="${id}" name="id">
                    <label for="recipient-name" class="col-form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" value="${nombre}">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Descripcion:</label>
                    <textarea class="form-control" id="descripcion" name="descripcion">${descripcion}</textarea>
                </div>
                <div class="form-group d-flex flex-row gap-2">
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Precio:</label>
                        <input type="text" class="form-control" id="precio" name="precio" value="${precio}">
                    </div>
                    <div class="form-group ml-2">
                        <label for="message-text" class="col-form-label">Cantidad:</label>
                        <input type="text" class="form-control" id="cantidad" name="cantidad" value="${cantidad}">
                    </div>
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Imagen:</label>
                    <input type="file" class="form-control" id="imagen" name="imagen" value="${imagen}">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Categoria:</label>
                    <input type="text" class="form-control" id="categoria" name="categoria" value="${categoria}">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Fecha:</label>
                    <input type="text" class="form-control" id="fecha" name="fecha" value="${fecha}">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Marca:</label>
                    <input type="text" class="form-control" id="mark" value="${mark}" name="mark">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Nuevo:</label>
                    <input type="text" class="form-control" id="nuevo" value="${nuevo}" name="new">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" >Actualizar</button>
                </div>
            </form>                
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        </div>
    </div>`

    document.getElementById("Modal-content").innerHTML = html;
}
     
const modalDelete = (id, name) => {
    let html = `
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Eliminar Producto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>¿Estas seguro de eliminar el producto ${name}?</p>
            <form
                action="update.php"
                method="POST"
                enctype="multipart/form-data"
            >
                <input type="hidden" name="type" id="type" value="delete">
                <input type="hidden" id="id" value="${id}" name="id"> 
                <button type="submit" class="btn btn-primary" >Actualizar</button>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        </div>
    </div>`
    document.getElementById("Modal-content").innerHTML = html;
}

const modalShopping = (id, name, cantidad) => {
    let html = `
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Venta:</h5>
            <p>Producto: ${name}</p>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form
                action="update.php"
                method="POST"
                enctype="multipart/form-data"
            >
                <input type="hidden" name="type" id="type" value="shopping">
                <input type="hidden" id="id" value="${id}" name="id">
                <input type="hidden" id="operacion" value="shop" name="operacion">
                <input type="hidden" id="cantidad" value="${cantidad}" name="cantidad">
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Cantidad:</label>
                    <input type="text" class="form-control" id="mark" name="newData" required>
                </div>
                <button type="submit" class="btn btn-primary" >Vender</button>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        </div>
    </div>`
    document.getElementById("Modal-content").innerHTML = html;
}

const modalAddStcok = (id, name,cantidad) => {
    let html = `
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Añadir:</h5>
            <p>Producto: ${name}</p>
            <p>cantidad: ${cantidad}</p>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form
                action="update.php"
                method="POST"
                enctype="multipart/form-data"
            >
                <input type="hidden" name="type" id="type" value="shopping">
                <input type="hidden" id="id" value="${id}" name="id">
                <input type="hidden" id="cantidad" value="${cantidad}" name="cantidad">
                <input type="hidden" id="operacion" value="add" name="operacion">
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Cantidad:</label>
                    <input type="text" class="form-control" id="mark" name="newData" required>
                </div>
                <button type="submit" class="btn btn-primary" >Añadir</button>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        </div>
    </div>`
    document.getElementById("Modal-content").innerHTML = html;
}


const rowProduct = (product) => {
    return `
        <th scope="row">${product.id}</th>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.cantidad}</td>
            <td>
                <img src="data:image/png;base64,${product.image}" alt="" width="100px">
            </td>
            <td>
                <div style="display:flex">
                    <i class="fas fa-pencil-alt fa-x bg-info  text-white p-2 rounded" data-toggle="modal" data-target="#exampleModal" 
                    onclick="modalUpdate(
                        ${product.id}, 
                        '${product.name}',
                        '${product.description}',
                        '${product.price}',
                        '${product.cantidad}',
                        '${product.image}',
                        '${product.category}',
                        '${product.fecha}',
                        '${product.mark}',
                        '${product.new}'
                    )"></i>
                    <i class="fas fa-trash-alt fa-x mx-2 bg-danger text-white p-2 rounded"      data-toggle="modal"  data-target="#exampleModal"
                    onclick="modalDelete(${product.id}, '${product.name}')"
                    ></i>
                    <i class="fas fa-shopping-cart fa-x bg-success text-white p-2 rounded" data-toggle="modal" data-target="#exampleModal" 
                        onclick="modalShopping(${product.id}, '${product.name}', '${product.cantidad}')"
                    ></i>
                    <i class="fas fa-plus fa-x ml-2 bg-warning text-white p-2 rounded" data-toggle="modal" data-target="#exampleModal" 
                        onclick="modalAddStcok(${product.id}, '${product.name}', '${product.cantidad}')"
                    ></i>  
                </div>
            </td>
        </tr>`
}
