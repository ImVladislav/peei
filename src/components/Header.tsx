import Image from "next/image";
import Logo from "../../public/LOGO-BIG.png";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <>
      <div className="header-contact">
        <div className="header-contact-to-center">
          <div className="header-contact-phone-and-email-block">
            <a
              className="link"
              style={{
                display: "flex",
                alignItems: "center",
                // marginLeft: "20px",
                fontSize: "20px",
              }}
              href="mailto:copeeiua@gmail.com"
            >
              <svg
                className="social-icon"
                style={{ margin: "5px" }}
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g
                  data-name="mail email e-mail letter"
                  id="mail_email_e-mail_letter"
                >
                  <path d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z" />
                  <path d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z" />
                </g>
              </svg>
              copeeiua@gmail.com
            </a>

            <a
              className="link"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                fontSize: "20px",
              }}
              href="tel:+380506558561"
            >
              <svg
                style={{ margin: "5px" }}
                className="social-icon"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g
                  data-name="phone celuler contact call"
                  id="phone_celuler_contact_call"
                >
                  <path d="M27.36,6.15,25.09,3.88a3,3,0,0,0-4.54.35l-2.21,3a3,3,0,0,0-.44,2.66l.13.38c.27.89.62,2,.84,2.74a1,1,0,0,1-.05.7,12.44,12.44,0,0,1-2.08,3,1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0,14.14,14.14,0,0,0,2.46-3.51,2.92,2.92,0,0,0,.17-2.17c-.21-.72-.57-1.86-.85-2.75l-.12-.39A1,1,0,0,1,20,8.44l2.21-3a1,1,0,0,1,1.51-.12l.67.67-2,3.1a1,1,0,0,0,.84,1.54,1,1,0,0,0,.84-.45l1.77-2.74.16.15a2.59,2.59,0,0,1,.68,1.88c0,1.76-1.19,5-6.73,10.44-5.81,5.7-10.42,8-12.33,6.07L5.29,23.68A1,1,0,0,1,5,22.9a1,1,0,0,1,.41-.73l3-2.21a1,1,0,0,1,.88-.15l1.89.59L9.05,21.91a1,1,0,0,0-.24,1.4,1,1,0,0,0,.82.42,1,1,0,0,0,.57-.18L14,20.88a1,1,0,0,0,.25-1.4,1,1,0,0,0-.53-.36v0L9.92,17.9a3,3,0,0,0-2.66.44l-3,2.21a3,3,0,0,0-.35,4.54l2.27,2.28A4.31,4.31,0,0,0,9.3,28.63c2.52,0,6.32-1.75,12-7.32,4.84-4.75,7.31-8.74,7.33-11.86A4.46,4.46,0,0,0,27.36,6.15Z" />
                </g>
              </svg>
              +38 050 655 85 61
            </a>
          </div>
          <div className="social">
            <a
              className="header__svg-link "
              style={{
                // display: "flex",
                alignItems: "center",
                marginLeft: "0px",
                width: "30px",
              }}
              href="/"
            >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <title />
                <g
                  data-name="telegram social media network chat"
                  id="telegram_social_media_network_chat"
                >
                  <path d="M28.59,4.29a2.23,2.23,0,0,0-2.27-.36L3.41,13.1a1.83,1.83,0,0,0,0,3.38l1.48.61a1,1,0,0,0,1.31-.53,1,1,0,0,0-.54-1.31L4.56,14.8l22.51-9a.22.22,0,0,1,.23,0,.24.24,0,0,1,.08.23L23.27,25.21a.4.4,0,0,1-.26.3.39.39,0,0,1-.39-.06l-8-6.24,7.83-7.91a1,1,0,0,0-1.22-1.56L9.75,16.54a1,1,0,1,0,1,1.72l4.83-2.85L13.23,17.8a2,2,0,0,0,.2,3.08l8,6.15a2.4,2.4,0,0,0,1.47.5,2.47,2.47,0,0,0,.83-.15,2.37,2.37,0,0,0,1.52-1.75L29.33,6.47A2.23,2.23,0,0,0,28.59,4.29Z" />
                </g>
              </svg>
            </a>
            <a
              className="header__svg-link "
              style={{
                alignItems: "center",
                marginLeft: "0px",
                width: "30px",
              }}
              href="/"
            >
              <svg
                className="social"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="facebook fb face book" id="facebook_fb_face_book">
                  <path d="M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5h8a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H15V17h1a1,1,0,0,0,1-1V12.5A2.5,2.5,0,0,1,19.5,10H22v2H21a2,2,0,0,0-2,2v2a1,1,0,0,0,1,1h1.72l-.5,2H20a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V21h1a1,1,0,0,0,1-.76l1-4a1,1,0,0,0-.18-.86A1,1,0,0,0,23,15H21V14h2a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H19.5A4.51,4.51,0,0,0,15,12.5V15H14a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1v6H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3V24a3,3,0,0,1-3,3H20a1,1,0,0,0,0,2h4a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Z" />
                </g>
              </svg>
            </a>
            <a
              className="header__svg-link "
              style={{
                // display: "flex",
                alignItems: "center",
                marginLeft: "0px",
                width: "30px",
              }}
              href="/"
            >
              <svg
                className="social"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g
                  data-name="in linkedin portfolio social media"
                  id="in_linkedin_portfolio_social_media"
                >
                  <path d="M6.5,3A3.5,3.5,0,1,0,10,6.5,3.5,3.5,0,0,0,6.5,3Zm0,5A1.5,1.5,0,1,1,8,6.5,1.5,1.5,0,0,1,6.5,8Z" />
                  <path d="M9,11H4a1,1,0,0,0,0,2H8V27H5V16a1,1,0,0,0-2,0V28a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V12A1,1,0,0,0,9,11Z" />
                  <path d="M27.34,12.68A5.94,5.94,0,0,0,23,11H22a7.84,7.84,0,0,0-4,.89A1,1,0,0,0,17,11H12a1,1,0,0,0-1,1V28a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V19a2,2,0,0,1,4,0v9a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V17A5.9,5.9,0,0,0,27.34,12.68ZM27,27H24V19a4,4,0,0,0-8,0v8H13V13h3v1a1,1,0,0,0,.62.92,1,1,0,0,0,1.09-.21c.95-1,1.7-1.71,4.29-1.71h1a4,4,0,0,1,2.92,1.09A4,4,0,0,1,27,17Z" />
                </g>
              </svg>
            </a>
            <a
              className="header__svg-link "
              style={{
                // display: "flex",
                alignItems: "center",
                marginLeft: "0px",
                width: "30px",
              }}
              href="/"
            >
              <svg
                className="link"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g
                  data-name="youtube youtuber video play"
                  id="youtube_youtuber_video_play"
                >
                  <path d="M30,12a5.71,5.71,0,0,0-5.31-5.7C18.92,6,13.06,6,7.33,6.28,4.51,6.28,2,9,2,12a43.69,43.69,0,0,0,0,8.72,5.32,5.32,0,0,0,5.28,5.33h0q4.35.24,8.72.24t8.67-.23A5.34,5.34,0,0,0,30,20.8,31.67,31.67,0,0,0,30,12Zm-2,8.63a.49.49,0,0,0,0,.12,3.36,3.36,0,0,1-3.39,3.34,166,166,0,0,1-17.28,0A3.36,3.36,0,0,1,4,20.65a42,42,0,0,1,0-8.47.45.45,0,0,0,0-.11A3.78,3.78,0,0,1,7.38,8.28c2.86-.13,5.74-.19,8.62-.19s5.76.06,8.62.19h.05c1.71,0,3.33,1.84,3.33,3.79a.76.76,0,0,0,0,.15A30.11,30.11,0,0,1,28,20.61Z" />
                  <path d="M20.79,15.51l-7.14-3.68a1,1,0,1,0-.92,1.78l5.43,2.79-4,2.07V16.4a1,1,0,0,0-2,0v3.72a1,1,0,0,0,1,1,1,1,0,0,0,.46-.11l7.14-3.72a1,1,0,0,0,.54-.89A1,1,0,0,0,20.79,15.51Z" />
                </g>
              </svg>
            </a>

            <a
              className="header__svg-link "
              style={{
                // display: "flex",
                alignItems: "center",
                marginLeft: "0px",
                width: "30px",
              }}
              href="/"
            >
              <svg
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <style>.cls-1{}</style>
                </defs>
                <title />
                <path d="M83,23a22,22,0,0,1,22,22V83a22,22,0,0,1-22,22H45A22,22,0,0,1,23,83V45A22,22,0,0,1,45,23H83m0-8H45A30.09,30.09,0,0,0,15,45V83a30.09,30.09,0,0,0,30,30H83a30.09,30.09,0,0,0,30-30V45A30.09,30.09,0,0,0,83,15Z" />
                <path d="M90.14,32a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,90.14,32Z" />
                <path d="M64.27,46.47A17.68,17.68,0,1,1,46.6,64.14,17.7,17.7,0,0,1,64.27,46.47m0-8A25.68,25.68,0,1,0,90,64.14,25.68,25.68,0,0,0,64.27,38.47Z" />
              </svg>
            </a>
            {/* <Image
            src={facebook2Svg}
            alt="Facebook"
            width={30}
            height={30}
            className="social-icon"
          /> */}

            {/* <Image
            src={locationSvg}
            alt="Location"
            width={30}
            height={30}
            className="social-icon"
          /> */}

            {/* Зображення Telegram */}
            {/* <Image
            src={telegramSvg}
            alt="Telegram"
            width={30}
            height={30}
            className="social-icon"
          /> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header">
          {/* Зображення логотипу */}
          <Image src={Logo} width={300} height={110} alt="Logo" />
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
