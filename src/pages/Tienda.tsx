import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader"
import type { Categoria } from "../types/Categoria";

const Tienda = () => {
  const [listaCategorias, setListaCategorias] = useState<Categoria[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | null>(null);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    fetch('https://servicios.campus.pe/categorias')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setListaCategorias(data);
      })
  }

  const seleccionarCategoria = (itemSeleccionado: Categoria): void => {
    console.log(`Categoría seleccionada: ${itemSeleccionado.nombre}`);
    setCategoriaSeleccionada(itemSeleccionado);
  }

  return (
    <>
      <PageHeader pageTitle="Tienda" pageSubtitle="Los mejores productos" />
      <section className='py-20'>
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex -mx-3">
            <div className="w-full md:w-1/4 px-3">
              <h3>Categorias</h3>
              <ul>
                {listaCategorias.map((categoria) =>
                  <li key={categoria.idcategoria}
                    className={"border-b border-gray-300 px-4 py-2 cursor-pointer " + (categoriaSeleccionada?.idcategoria === categoria.idcategoria ? "bg-gray-200" : "hover:bg-gray-200")}
                    title={categoria.descripcion}
                    onClick={() => seleccionarCategoria(categoria)}>
                    {categoria.nombre} ({categoria.total})</li>
                )}
              </ul>
            </div>
            <div className="w-full md:w-3/4 px-3">
              <h2>{categoriaSeleccionada?.nombre}</h2>
              {categoriaSeleccionada &&
                <p>Hay {categoriaSeleccionada.total} productos en total</p>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tienda