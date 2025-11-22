import { useParams } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import type { Producto } from "../types/Producto";
import { useEffect, useState } from "react";
import "./ProductoDetalles.css";

const ProductoDetalles = () => {
  const params = useParams();
  console.log(params);

  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto>();

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = async () => {
    const response = await fetch('https://servicios.campus.pe/productos.php?idproducto=' + params.idproducto);
    const data: Producto[] = await response.json();
    console.log(data);
    setProductoSeleccionado(data[0]);
  }

  const precioRebajado = productoSeleccionado?.preciorebajado;
  const precio = productoSeleccionado?.precio;

  return (
    <>
      <PageHeader pageTitle={productoSeleccionado?.nombre || ""} pageSubtitle="" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex -mx-3">




            <div className="w-full md:w-1/2 px-3">
              <img src={'https://servicios.campus.pe/' + (productoSeleccionado?.imagengrande ? productoSeleccionado.imagengrande : 'imagenes/nofoto.jpg')} alt="Imagen de tarjeta" className="w-full object-cover px-8 pt-8 transition-transform duration-500 hover:scale-110" />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <table className="tabla-detalle-producto mb-4">
                {productoSeleccionado && (<tbody>

                  <tr>
                    <th>Precio</th>
                    <td>
                      <p className="text-gray-700 text-base">
                        <span className="line-through text-red-500 mr-2">
                          {precioRebajado === 0 ? "" : "S/ " + precio?.toFixed(2)}
                        </span>
                        S/ {precioRebajado === 0 ? precio?.toFixed(2) : precioRebajado?.toFixed(2)}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>Proveedor</th>
                    <td>{productoSeleccionado?.proveedor}</td>
                  </tr>
                  <tr>
                    <th>Categoria</th>
                    <td>{productoSeleccionado?.categoria}</td>
                  </tr>
                  <tr>
                    <th>Stock</th>
                    <td>{productoSeleccionado?.unidadesenexistencia === 0 ? "Sin stock" : productoSeleccionado?.unidadesenexistencia}</td>
                  </tr>
                  <tr>
                    <th>Detalle</th>
                    <td>{productoSeleccionado?.detalle}</td>
                  </tr>
                  <tr>
                    <th>País</th>
                    <td>{productoSeleccionado?.pais}</td>
                  </tr>
                  <tr>
                    <th>Atención al cliente</th>
                    <td>{productoSeleccionado?.telefono}</td>
                  </tr>
                  <tr>
                    <th>Calificación</th>
                    <td>
                      {
                        [...Array(5)].map((_, index) => (
                          <i className={index < Number(productoSeleccionado?.promedioestrellas ?? 0) ? "text-amber-400 fa-solid fa-star" : "text-amber-400 fa-regular fa-star"} key={index}></i>
                        ))
                      }
                      &nbsp;({productoSeleccionado?.totalcalificaciones} calificaciones)
                    </td>
                  </tr>
                </tbody>)
                }
              </table>
              <h3>Descripción</h3>
              <div dangerouslySetInnerHTML={{ __html: productoSeleccionado?.descripcion || "" }}></div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default ProductoDetalles