import evento1 from './../assets/images/mountains-7779007_1280.jpg'
import evento2 from './../assets/images/riverbank-7885727_1280.jpg'
import evento3 from './../assets/images/noticia-3.jpg'
import evento4 from './../assets/images/noticia-1.jpg'



const Eventos = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-3">
        <h2>Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={evento1} alt="Imagen de tarjeta" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi modi iusto eaque accusantium error optio blanditiis explicabo et minima sapiente ut dicta quidem</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={evento2} alt="Imagen de tarjeta" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi modi iusto eaque accusantium error optio blanditiis explicabo et minima sapiente ut dicta quidem</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={evento3} alt="Imagen de tarjeta" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi modi iusto eaque accusantium error optio blanditiis explicabo et minima sapiente ut dicta quidem</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={evento4} alt="Imagen de tarjeta" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi modi iusto eaque accusantium error optio blanditiis explicabo et minima sapiente ut dicta quidem</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Eventos