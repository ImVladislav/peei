"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

interface NavLink {
  label: string;
  href: string;
}

interface NavItem {
  title: NavLink;
  links: NavLink[];
}

const navItems: NavItem[] = [
  {
    title: { label: "Про нас", href: "/about" },
    links: [
      { label: "Засновники", href: "/founders" },
      { label: "Правління", href: "/rule" },
      { label: "Наша команда", href: "/team" },
      { label: "Наші партнери", href: "/about/4" },
      { label: "Офіційні документи", href: "/about/5" },
      { label: "Звіти", href: "/about/6" },
      { label: "Контакти", href: "/about/7" },
    ],
  },
  {
    title: { label: "Напрямки діяльності", href: "/activities" },
    links: [
      { label: "Робота з дітьми та молоддю", href: "/work-with-teens" },
      { label: "Направлення діяльності", href: "/activities/2" },
      { label: "Благодійні акції", href: "/activities/3" },
      { label: "Охорона довкілля", href: "/environmentalProtection" },
    ],
  },
  {
    title: { label: "Новини", href: "/news" },
    links: [
      { label: "Новини", href: "/news" },
      // { label: "Новини2", href: "/news/2" },
      // { label: "Новини3", href: "/news/3" },
      // { label: "Новини4", href: "/news/4" },
    ],
  },
  {
    title: { label: "Підтримати", href: "/support" },
    links: [
      { label: "Волонтерством", href: "/support/1" },
      { label: "Фінансово", href: "/support/2" },
      { label: "Партнерством", href: "/support/3" },
    ],
  },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      {navItems.map((item) => (
        <div key={item.title.label} className="nav-item">
          <Link href={item.title.href}>
            {/* Remove the <a> tag here */}
            <span
              style={{ fontSize: "20px", cursor: "pointer", color: "black" }}
            >
              {item.title.label}
            </span>
          </Link>{" "}
          <svg
            id={`svg-${item.title.label}`}
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <ul className="dropdown">
            {item.links.map((link) => (
              <li style={{ padding: "5px" }} key={link.label}>
                <Link
                  style={{ fontSize: "18px" }}
                  href={link.href}
                  className="link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link
        href="to_contact_page"
        className="link"
        style={{ height: "fit-content", fontSize: "px" }}
      >
        Контакти
      </Link>
    </nav>
  );
};

export default Navbar;

// const Navbar: FC = () => {
//   const pathname = usePathname();
//   return (
//     <nav>
//       <ul className="flex space-x-3">
//         {NAV_LINKS.map(({ key, href, label }) => {
//           return (
//             <li key={key}>
//               <Link
//                 href={href}
//                 className={`text-xl ${pathname === href ? "active" : ""}`}
//               >
//                 {label}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };
