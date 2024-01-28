"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

interface NavItem {
  title: string;
  links: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    title: "Про нас",
    links: [
      { label: "Засновники", href: "/about/1" },
      { label: "Правління", href: "/about/2" },
      { label: "Наша команда", href: "/about/3" },
      { label: "Наші партнери", href: "/about/4" },
      { label: "Офіційні документи", href: "/about/5" },
      { label: "Звіти", href: "/about/6" },
      { label: "Контакти", href: "/about/7" },
    ],
  },
  {
    title: "Напрямки діяльності",
    links: [
      { label: "Робота з дітьми та молоддю", href: "/activities/1" },
      { label: "Направлення діяльності", href: "/activities/2" },
      { label: "Благодійні акції", href: "/activities/3" },
      { label: "Охорона довкілля", href: "/activities/3" },
    ],
  },
  {
    title: "Новини",
    links: [
      { label: "Новини", href: "/news/1" },
      { label: "Новини2", href: "/news/2" },
      { label: "Новини3", href: "/news/3" },
      { label: "Новини4", href: "/news/4" },
    ],
  },
  {
    title: "Підтримати",
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
        <div key={item.title} className="nav-item">
          <span>{item.title}</span>{" "}
          <svg
            id={`svg-${item.title}`}
            width="20px"
            height="20px"
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
                <Link href={link.href} className="link">
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
        style={{ height: "fit-content" }}
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
