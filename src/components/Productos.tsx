import { useEffect, useState } from "react";
import type { Producto } from "../types/Producto";
import './Productos.css';

interface ProductosProps {
  codigoCategoria: number;
}

const Productos = (props: ProductosProps) => {
  console.log(props.codigoCategoria);
  const [listaProductos, setListaProductos] = useState<Producto[]>([]);

  useEffect(() => {
    leerServicio(props.codigoCategoria);
  }, [props.codigoCategoria])

  const leerServicio = (codCategoria: number) => {
    fetch(`https://servicios.campus.pe/productos.php?idcategoria=${codCategoria}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setListaProductos(data);
      })
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {listaProductos.map(producto => {
          const precioRebajado = producto.preciorebajado
          const precio = producto.precio
          const porcentajeDescuento = Math.round((precio - precioRebajado) / precio * 100);
          return (

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-1 border-gray-200 text-center relative card-producto" key={producto.idproducto}>
              <img src={'https://servicios.campus.pe/' + (producto.imagenchica ? producto.imagenchica : 'imagenes/nofoto.jpg')} alt="Imagen de tarjeta" className="w-full h-64 object-cover px-8 pt-8 transition-transform duration-500 hover:scale-110" />

              <i className="fa-regular fa-eye bg-gray-200 absolute p-4 !inline-table rounded-full icono-vista-rapida" title="Vista rapida"></i>

              {precioRebajado !== 0 ? <div className="absolute inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 inset-ring inset-ring-pink-700/10 top-5 right-5">-{porcentajeDescuento + "%"}</div> : ""}

              <div className="p-3">
                <p className="mb-2 text-gray-800">{producto.nombre}</p>
                <p className="text-gray-700 text-base">
                  <span className="line-through text-red-500 mr-2">
                    {precioRebajado === 0 ? "" : "S/ " + precio.toFixed(2)}
                  </span>
                  S/ {precioRebajado === 0 ? precio.toFixed(2) : precioRebajado.toFixed(2)}
                  <i className="fa-solid fa-basket-shopping cursor-pointer hover:text-red-700" title="Añadir al carrito"></i>
                </p>
              </div>
            </div>
          )
        }
        )}
      </div>
    </>
  )
}

export default Productos;