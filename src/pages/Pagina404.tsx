import PageHeader from "../components/PageHeader"

const Pagina404 = () => {
  return (
    <>
      <PageHeader pageTitle="404" pageSubtitle="Página no encontrada" />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-3">
          Página no encontrada.
        </div>
      </section>
    </>
  )
}

export default Pagina404