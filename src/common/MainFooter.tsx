import './MainFooter.css'

function MainFooter() {
  return (
    <footer id='main-footer'>
      <div className="max-w-7xl mx-auto px-3">
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex -mx-3">
            <div className="w-full md:w-1/2 px-3">
              2025 Todos los derechos reservados
            </div>
            <div className="w-full md:w-1/2  px-3" id="redes-sociales">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-pink-600 hover:text-pink-800">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-600">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="text-black hover:text-gray-800 ml-3">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default MainFooter