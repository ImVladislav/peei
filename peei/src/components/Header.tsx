import React from "react";
import Navbar from "./Navbar";
import Logo from "../../public/LOGO-BIG.png";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Image src={Logo.src} width={300} height={110} alt="Logo" />
      <Navbar />
    </div>
  );
};

export default Header;
