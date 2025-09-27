import fundador from './../assets/images/fundador.jpg'

const Nosotros = () => {
  return (
    <section id='nosotros' className='py-20'>
      <div className='max-w-7xl mx-auto px-3'>
        <div className="flex -mx-3">
          <div className="w-full md:w-1/3 px-3">
            <img src={fundador} alt="" />
          </div>
          <div className="w-full md:w-2/3 px-3">
            <h2>Nosotros</h2>
            <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, commodi minus. Alias sequi pariatur cupiditate sint exercitationem. Eum velit voluptates voluptate molestias magni quia maiores. Necessitatibus veniam quia, reiciendis beatae impedit, eveniet iste, explicabo nobis vero delectus voluptatem nisi expedita asperiores officiis rem? Eos ad fugiat harum, ab saepe unde nam tempore consequatur, incidunt doloremque excepturi. Ipsa vero voluptate dolorum qui alias. Corporis, velit aliquam maxime, qui nostrum impedit consequatur deleniti officiis recusandae est quas temporibus eaque! Saepe optio, hic deserunt esse dolore ullam quo qui.</p>
            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer boton-link' href=''>
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros