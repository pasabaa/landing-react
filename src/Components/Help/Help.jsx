import { cardImg1, cardImg2, cardImg3 } from "../../assets/img";

export default function Help() {
  const cards = [
    {
      id: 1,
      title: "Desarollo Web",
      desc:
        "Te apoyaremos en los principales pasos para poder construir un verdadero y profesional sitio web, además de trabajar landing pages, e-commerce. CMS, y si tienes alguna otra cosas por agregar, seguro lo desarrollamos.",
      img: cardImg2,
    },
    {
      id: 2,
      title: "Social Media",
      desc: "¿Tienes redes sociales para tu negocio? Te damos asesoramiento para su correcto manejo, además de otras características como lo son: plantillas para publicaciones, diseños, etc.",
      img: cardImg3,
    },
    {
      id: 3,
      title: "Postproducción de Audio y Vídeo",
      desc: "¿Edición de videos o creación de sonidos y melodías? Contamos con equipo para poder realizarlos.",
      img: cardImg1,
    }
  ];

  return (
    <>
      <div className="row justify-content-center align-items-center m-lg bg-green" id="services">
        <div className="col-lg-8 col-10 m-lg">
          <div className="m-md">
            <h1 className="display-3 fw-bold">
              ¿Cómo puede ayudarme <br />
              Fusion Design?
            </h1>
            <div className="w-50">
              <p className="text-muted lead">
                Descubre en que puede ayudarte el equipo de desarrollo.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {cards.map((card) => {
              return (
                <div className="col position-relative">
                  <div
                    className="card border-0 bg-dark-variant rounded-5 h-100"
                    key={card.id}
                  >
                    <div className="card-body p-4">
                      <div className="text-center">
                        <img src={card.img} alt="" className="img-fluid" />
                      </div>
                      <h2 className="text-white">{card.title}</h2>
                      <p className="text-muted">{card.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
