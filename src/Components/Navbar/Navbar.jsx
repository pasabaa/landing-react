import { logo } from "../../assets/img";

export default function Navbar() {
  return (
    <>
    <div className="row justify-content-center sticky-top bg-blur">
        <div className="col-lg-8 col-12">
            <nav className="navbar navbar-expand-md navbar-dark p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} width={160} className='img-fluid' alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-4 m-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
  )
}
