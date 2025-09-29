import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader"

const Tienda = () => {
  const [listaEmpleados, setListaEmpleados] = useState<Empleado[]>([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    fetch('https://servicios.campus.pe/empleados')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setListaEmpleados(data);
      })
  }

  return (
    <>
      <PageHeader pageTitle="Tienda" pageSubtitle="Los mejores productos" />
      <section className='py-20'>
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex -mx-3">
            <div className="w-full md:w-1/3 px-3">
              <h3>Categorias</h3>
              <ul>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria 5</li>
              </ul>
            </div>
            <div className="w-full md:w-2/3 px-3">

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tienda