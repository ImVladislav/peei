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
      { label: "Про нас 1", href: "/about/1" },
      { label: "Про нас 2", href: "/about/2" },
      { label: "Про нас 3", href: "/about/3" },
    ],
  },
  {
    title: "Напрямки діяльності",
    links: [
      { label: "Діяльність 1", href: "/activities/1" },
      { label: "Діяльність 2", href: "/activities/2" },
      { label: "Діяльність 3", href: "/activities/3" },
    ],
  },
  {
    title: "Новини",
    links: [
      { label: "Новини 1", href: "/news/1" },
      { label: "Новини 2", href: "/news/2" },
      { label: "Новини 3", href: "/news/3" },
    ],
  },
  {
    title: "Підтримати",
    links: [
      { label: "Підтримка 1", href: "/support/1" },
      { label: "Підтримка 2", href: "/support/2" },
      { label: "Підтримка 3", href: "/support/3" },
    ],
  },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      {navItems.map((item) => (
        <div key={item.title} className="nav-item">
          <span>{item.title}</span>
          <ul className="dropdown">
            {item.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={pathname === link.href ? "active" : ""}>

                    {link.label}

                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* <style jsx>{`
        nav {
          display: flex;
        }

        .nav-item {
          position: relative;
          margin-right: 20px;
        }

        .dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          list-style: none;
          padding: 10px;
          border-radius: 4px;
        }

        .nav-item:hover .dropdown {
          display: block;
        }

        .dropdown li {
          margin: 5px 0;
        }

        .dropdown a {
          color: #333;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }

        .dropdown a:hover {
          color: #0070f3;
        }

        .active {
          font-weight: bold;
        }
      `}</style> */}
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