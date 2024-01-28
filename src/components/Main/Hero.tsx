import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__img">
            <div className="hero__title-container">
              <div className="visually-hidden">
                <h1 className="hero__title">
                  Платформа еко-енергетичних ініціатив
                </h1>
                <div className="line " />
              </div>
              <h2 className="hero__text">Екологічна безпека</h2>
              <h2 className="hero__text">Енергетична незалежність</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Image
              className="hero__img-first"
              src="/environmental-nonprofit.jpg"
              alt="вітряки"
              width={480}
              height={300}
            />
            <Image
              className="hero__img-second"
              src="/environmental-nonprofit-34.jpg"
              alt="листя"
              width={480}
              height={300}
            />
          </div>

          <div>
            <p className="hero__text-second">
              Громадська Організація “Платформа еко-енергетичних ініціатив” – це
              неприбуткова громадська організація, яка об’єднує експертів та
              активістів навколо просування ідеї збереження довкілля, переробки
              вторсировини, впровадження інновацій в відновлювальній енергетиці
              за міжнародними стандартами сталого розвитку у галузі енергетики.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
