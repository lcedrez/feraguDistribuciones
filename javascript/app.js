
let datos

const listadoProductos=document.querySelector('#contenedorCards')
const articuloDetallado=document.querySelector('#ContenedorGr')
const cantidades=document.querySelectorAll('#cantidad')



const listadolimp=document.querySelector('#contenedorCards')

const renderizarListProductos=(datos)=>{
    //Limpio mi html para renderizar nuevamente ya se por orden alfabetico a precio
   listadolimp.innerHTML=''
    console.log(datos)
    datos.forEach((producto)=>{
        if(producto.descuento > 0)
        {

       const artDiv = document.createElement('div')
       let precio=producto.precio
        let precDescuento=(producto.descuento/100)*producto.precio
        producto.precio-=precDescuento
        artDiv.className='card-body'
        artDiv.innerHTML=`
        <img class="imgDetalle" src=${producto.imagen} alt="${producto.descripcion}" cod="${producto.cod_articulo}" precioDesc="${producto.precio}">
            <h4 class="card-title">${producto.nombre}</h4>
            <div class="precioActualizado">
            <p class="card-text3"><del>U$s ${precio}</del></p>
            <p class="card-text2">$${producto.precio}</p>
            </div>
            <div class="descuento">
            <p class="card-text2">${producto.descuento}% OFF</p>
            <img class="imgDescuento" src="Imagenes/E-Commerce/Sale.jpg" alt="sale">
            </div>
        
        
      </div>
        `

        listadoProductos.append(artDiv)
    }
    else
    {
        const artDiv = document.createElement('div')
        artDiv.className='card-body'
        artDiv.innerHTML=`
        <img class="imgDetalle" src=${producto.imagen} alt="${producto.descripcion}" cod="${producto.cod_articulo}">
            <h4 class="card-title">${producto.nombre}</h4>
            <p class="card-text2">$ ${producto.precio}</p>
           
      
        
        
      </div>
        `

        listadoProductos.append(artDiv)

    }
    })
        agregarListennersBtns()
        agregarListennerImagen()
      
}



const cargarCatalogo = async ()=>{
    try{
   const respuesta=await fetch("https://demo4551182.mockable.io/productos")
   
   if(respuesta.status=== 200){
    const datos =await respuesta.json();

    //convierto mi objerto en un array
    Object.keys(datos).forEach(key => {
         
        let nuevoArray = datos[key]; 
        localStorage.setItem('catalogo', JSON.stringify(nuevoArray));
        renderizarListProductos(nuevoArray)
       
       
       });


   
   }
 
    }
    catch(error)
    {
        console.log(error)
    }
}




cargarCatalogo()
