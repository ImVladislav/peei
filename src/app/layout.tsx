import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { Mulish } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "@/scss/globals.css";
import "@/scss/index.scss";

const inter = Inter({ subsets: ["latin"] });

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ГО",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={mulish.className}>{children}</main>
        {/* <main className="relative overflow-hidden">{children}</main> */}
        <Footer />
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }