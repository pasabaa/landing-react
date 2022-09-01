import { cardImg5, cardImg6, cardImg7 } from "../../assets/img";

export default function FusionDesign() {
  const cards = [
    {
      id: 1,
      title: "Equipo de desarrollo",
      desc:
        "Te apoyaremos en los principales pasos para poder construir un verdadero y profesional sitio web, además de trabajar landing pages, e-commerce. CMS, y si tienes alguna otra cosas por agregar, seguro lo desarrollamos.",
      img: cardImg5,
    },
    {
      id: 2,
      title: "Valor por lo que hacemos",
      desc: "¿Tienes redes sociales para tu negocio? Te damos asesoramiento para su correcto manejo, además de otras características como lo son: plantillas para publicaciones, diseños, etc.",
      img: cardImg6,
    },
    {
      id: 3,
      title: "Innovación que no para",
      desc: "¿Edición de videos o creación de sonidos y melodías? Contamos con equipo para poder realizarlos.",
      img: cardImg7,
    }
  ];

  return (
    <>
      <div className="row justify-content-center m-lg">
        <div className="col-8">
          <div className="m-md">
            <h1 className="display-3 fw-bold">
              ¿Por qué <br />
              Fusion Design?
            </h1>
            <div className="w-50">
              <p className="text-muted">
                Descubre porque deberías tener en cuenta el trabajo que realizamos en equipo.
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
                      <h1>{card.title}</h1>
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
