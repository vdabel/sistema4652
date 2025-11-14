import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader"
import type { Categoria } from "../types/Categoria";
import Productos from "../components/Productos";

const Tienda = () => {
  const [listaCategorias, setListaCategorias] = useState<Categoria[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | null>(null);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = async () => {
    // fetch('https://servicios.campus.pe/categorias')
    //   .then(response => response.json())
    //   .then(data => {
    //     setListaCategorias(data);
    //   })

    const response = await fetch('https://servicios.campus.pe/categorias');
    const data: Categoria[] = await response.json();
    console.log(data);
    setListaCategorias(data);
    setCategoriaSeleccionada(data[0]);
  }

  const seleccionarCategoria = (itemSeleccionado: Categoria): void => {
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
              <Productos codigoCategoria={categoriaSeleccionada ? categoriaSeleccionada.idcategoria : 0} />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Tienda