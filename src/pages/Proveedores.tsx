import { useEffect, useState } from "react";
import type { Proveedor } from "../types/Proveedor";
import PageHeader from "../components/PageHeader";

const Proveedores = () => {
  const [listaProveedores, setListaProveedores] = useState<Proveedor[]>([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    fetch('https://servicios.campus.pe/proveedores')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setListaProveedores(data);
      })
  }

  const dibujarTabla = () => {
    return (
      <table className="tabla-reporte">
        <thead>
          <tr>
            <th>CÓDIGO</th>
            <th>EMPRESA</th>
            <th>CONTACTO</th>
            <th>CARGO</th>
            <th>CIUDAD</th>
            <th>PAIS</th>
          </tr>
        </thead>
        <tbody>
          {listaProveedores.map(proveedor =>
            <tr key={proveedor.idproveedor}>
              <td>{proveedor.idproveedor}</td>
              <td>{proveedor.nombreempresa}</td>
              <td>{proveedor.nombrecontacto}</td>
              <td>{proveedor.cargocontacto}</td>
              <td>{proveedor.ciudad}</td>
              <td>{proveedor.pais}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  return (
    <>
      <PageHeader pageTitle="Proveedores" pageSubtitle="Gestión de los proveedores de la empresa" />
      <section id='proveedores' className='py-20'>
        <div className="max-w-7xl mx-auto px-3">
          {dibujarTabla()}
        </div>
      </section>
    </>
  )
}

export default Proveedores;