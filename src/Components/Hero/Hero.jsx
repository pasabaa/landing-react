import { cardImg8 } from '../../assets/img'
import './Hero.css'

export default function Hero() {
  return (
    <>
      <div className='row justify-content-around align-items-center bg-gradient' id='start'>
        <div className="col-lg-4 col-10 text-center">
          <img src={cardImg8} className='img-fluid' alt="" />
        </div>
        <div className='col-lg-5 col-10 hero'>
          <h1 className='display-1 fw-bold'>Desarollo web personalizado</h1>
          <h2 className='display-4 fw-normal my-4'>¿No cuentas con un sitio?</h2>
          <p className='text-muted lead my-4'>Contamos con las herramientas y el equipo para desarrollar tu próximo proyecto.</p>
          <div className="d-flex mt-4 mb-4">
            <button className='btn btn-lg btn-primary-variant rounded-2 fw-bold'><a target={'_blank'} rel="noreferrer noopener" className='text-decoration-none text-black' href="https://forms.gle/zMb7wqPJUF1k9Y2e9">¡Contrate a nuestro equipo!</a></button>
          </div>
        </div>
      </div>
    </>
  )
}
