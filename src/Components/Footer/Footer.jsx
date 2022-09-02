import { logo } from '../../assets/img'

export default function Footer() {
return (
<>


        <footer className='p-4'>
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <h5>COMPAÑÍA</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Términos de servicio</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Política de privacidad</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Política de cookies</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contacto</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <h5>REDES SOCIALES</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Instagram</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Facebook</a></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3 d-flex">
              <div className="text-start mb-4 align-self-center">
                <img src={logo} className='img-fluid' alt="" width={350}/>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center text-center">
            <hr />
            <p>&copy; 2022 Fusion Design, Inc. Todos los derechos reservados.</p>
          </div>
        </footer>

</>
)
}