interface Productos {
  codigoCategoria: number;
}

const Productos = (props: Productos) => {
  console.log(props);
  return (
    <>
      <h3>Productos</h3>
    </>
  )
}

export default Productos;