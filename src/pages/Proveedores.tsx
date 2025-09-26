import { useEffect, useState } from "react";
import type { Proveedor } from "../types/Proveedor";

const Proveedores = () => {
  const [listaProveedores, setListaProveedores] = useState<Proveedor[]>([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = async () => {
    fetch('https://servicios.campus.pe/proveedores')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setListaProveedores(data);
      })
  }

  return (
    <section id='proveedores' className='py-20'>
      <div className="max-w-7xl mx-auto px-3">
        <h2>Proveedores</h2>
        <table>
          <thead>
            <tr>
              <th>CÓDIGO</th>
              <th>EMPRESA</th>
              <th>CONTACTO</th>
            </tr>
          </thead>
          <tbody>
            {listaProveedores.map(proveedor =>
              <tr key={proveedor.idproveedor}>
                <td>{proveedor.idproveedor}</td>
                <td>{proveedor.nombreempresa}</td>
                <td>{proveedor.nombrecontacto}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Proveedores;