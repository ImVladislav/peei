import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__img">
            <div className="hero__title-container">
              <h1 className="hero__title">Про нас</h1>

              <p className="hero__text">Екологічна безпека</p>
              <p className="hero__text">Енергетична незалежність</p>
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
              src="/environmental-nonprofit.jpg" // оновіть шлях, якщо потрібно
              alt="вітряки"
              width={480} // зазначте ширину за потреби
              height={300} // зазначте висоту за потреби
            />
            <Image
              className="hero__img-second"
              src="/environmental-nonprofit-34.jpg" // оновіть шлях, якщо потрібно
              alt="листя"
              width={480} // зазначте ширину за потреби
              height={300} // зазначте висоту за потреби
            />
          </div>
          <div className="line" />
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
