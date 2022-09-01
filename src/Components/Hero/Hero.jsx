import './Hero.css'

export default function Hero() {
  return (
    <>
      <div className='row justify-content-center align-items-center bg-gradient'>
        <div className='col-lg-8 col-10 hero text-center'>
          <h1 className='display-1 fw-bold'>Desarollo web personalizado</h1>
          <h1 className='display-3 my-4'>¿No cuentas con un sitio?</h1>
          <p className='text-muted lead my-4'>Contamos con las herramientas y el equipo para desarrollar su próximo proyecto.</p>
          <div className="d-flex gap-4 mt-4">
            <button className='btn btn-lg btn-primary-variant rounded-2 fw-bold'><a target={'_blank'} rel="noreferrer noopener" className='text-decoration-none text-black' href="https://forms.gle/zMb7wqPJUF1k9Y2e9">¡Contrate a nuestro equipo!</a></button>
          </div>
        </div>
      </div>
    </>
  )
}
