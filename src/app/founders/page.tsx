import bezkor from "../../../public/Volonters/Bezkorowainuy.jpg";
import glad from "../../../public/Volonters/gladyshko.png";
import {
  AboutPersonImage,
  AboutPersonDescripton,
} from "@/components/About/AboutPerson";
import bg from "../../../public/background.png";

const Founders = () => {
  return (
    <div style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="container">
        <h1 className="about__title">Засновники</h1>
        <ul className="about__page">
          <li className="about__person-block">
            <AboutPersonImage src={bezkor} />

            <div>
              <AboutPersonDescripton
                name="Безкоровайний Євгеній Олександрович"
                position=""
                email=""
              />
            </div>
          </li>
          <li className="about__person-block">
            {/* <div className="about__person-block"> */}
            <AboutPersonImage src={glad} />
            <div>
              <AboutPersonDescripton
                name="Гладишко Сергій Олексійович"
                position=""
                email=""
              />
            </div>
            {/* </div> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Founders;
