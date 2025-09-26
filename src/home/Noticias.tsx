import noticia1 from '../assets/images/noticia-1.jpg'
import noticia2 from '../assets/images/noticia-2.jpg'
import noticia3 from '../assets/images/noticia-3.jpg'

const Noticias = () => {
  return (
    <section id='noticias'>
      <div className='max-w-7xl mx-auto px-3'>
        <h2>Noticias</h2>
        <div className='flex -mx-3'>
          <article className="w-full md:w-1/3 px-3">
            <figure className='mb-3'>
              <img src={noticia1} alt="" />
            </figure>
            <h3>Noticia 1</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ipsum, fugiat dolores consectetur ea maiores alias veritatis. Voluptatibus delectus maxime ut velit inventore? Molestiae omnis iure a expedita sint, porro voluptatibus neque!</p>
            <p>Tempora dolores possimus repellat, illum debitis assumenda totam neque harum esse, maiores eos commodi maxime repellendus. Est mollitia nihil at, tempore, odit dolorem enim aspernatur impedit cupiditate omnis consectetur hic delectus pariatur.</p>
          </article>
          <article className="w-full md:w-1/3 px-3">
            <figure className='mb-3'>
              <img src={noticia2} alt="" />
            </figure>
            <h3>Noticia 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veritatis sed, quas blanditiis earum quaerat possimus! Ullam, odio harum natus placeat velit praesentium libero incidunt iure dolor ratione recusandae assumenda cupiditate dolores?</p>
            <p>Sequi eveniet mollitia quam. Tempore perspiciatis eius, possimus quaerat fugit a quidem fuga, quos voluptatem soluta assumenda aspernatur non optio minima aperiam atque quibusdam quisquam illum eum unde? Mollitia cum commodi minus.</p>
          </article>
          <article className="w-full md:w-1/3 px-3">
            <figure className='mb-3'>
              <img src={noticia3} alt="" />
            </figure>
            <h3>Noticia 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta explicabo corporis quibusdam dolore sit adipisci id sunt nostrum maxime doloremque officia illum sed magnam debitis sapiente doloribus, reiciendis cum repellat tempore.</p>
            <p>Quas mollitia officia ut aspernatur consequatur rem eum ducimus reprehenderit cumque, sit consectetur maxime ea esse, nemo nobis exercitationem animi fugit itaque culpa saepe commodi!</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Noticias