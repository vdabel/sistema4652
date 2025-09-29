import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import type { Empleado } from "../types/Empleado";

const Empleados = () => {
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

  const dibujarCuadricula = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {listaEmpleados.map(empleado =>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={'https://servicios.campus.pe/' + empleado.foto} alt="Imagen de tarjeta" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2 text-gray-800">{empleado.nombres} {empleado.apellidos}</h5>
              <p className="text-gray-700 text-base">{empleado.cargo}</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <PageHeader pageTitle="Empleados" pageSubtitle="El recurso más valioso de nuestra empresa" />

      <section className='py-20'>
        <div className="max-w-7xl mx-auto px-3">
          {dibujarCuadricula()}
        </div>
      </section>
    </>
  )
}

export default Empleados;