import { useEffect, useState } from "react"
import type { Envio } from "../types/Envio";

const Envios = () => {
  const [listaEnvios, setListaEnvios] = useState<Envio[]>([]);

  useEffect(() => {
    leerServicio();
  });

  const leerServicio = () => {
    fetch("http://servicios.campus.pe/envios")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setListaEnvios(data);
      })
  }

  return (
    <>
      <section id='envios' className='py-20'>
        <div className="max-w-7xl mx-auto px-3">
          <table className="tabla-reporte">
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Telefono</th>
                <th className="!text-right">Latitud</th>
                <th className="!text-right">Longitud</th>
              </tr>
            </thead>
            <tbody>
              {listaEnvios.map(envio =>
                <tr key={envio.id}>
                  <td>{envio.nombre}</td>
                  <td>{envio.telefono}</td>
                  <td className="!text-right">{envio.latitud}</td>
                  <td className="!text-right">{envio.longitud}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Envios