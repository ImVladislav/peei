import React from "react";
import background from "../../../public/background.png";

const Main = () => {
  const containerStyle = {
    backgroundImage: `url(${background.src})`, // Use background.src to get the URL
    backgroundSize: "auto",
    backgroundPosition: "center",
    padding: "20px",
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="main_title">
        <h1>ЕКОЛОГІЧНА БЕЗПЕКА ЕНЕРГЕТИЧНА НЕЗАЛЕЖНІСТЬ</h1>
      </div>

      <p>
        Громадська Організація "Платформа єко-енергетичних ініціатив" - ще
        неприбуткова громадська, організація, яка об'єднує експертів та
        активістів навколо просування ідеї збереження (довкілля, переробки,
        вторсировини, впровадження інновацій в відновлювальній енергетиці за
        міжнародними стандартами сталого розвитку у талузі енергетики.
      </p>
    </div>
  );
};

export default Main;
