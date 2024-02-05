import { navLinks, projectItem, reviewItem } from "@/types";

// NAVIGATION
export const NAV_LINKS: navLinks[] = [
  { href: "/", key: "home", label: "Головна" },
  { href: "/services", key: "services", label: "Послуги" },
  { href: "/gallery", key: "gallery", label: "Галерея" },
  { href: "/reviews", key: "reviews", label: "Відгуки" },
  { href: "/contacts", key: "contacts", label: "Контакти" },
];

export const initialProjects: projectItem[] = [
  {
    id: "1",
    title: "Проект 1",
    imageSrc: "/no-image.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
  },
  {
    id: "2",
    title: "Проект 2",
    imageSrc: "/no-image.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
  },
  {
    id: "3",
    title: "Проект 3",
    imageSrc: "/no-image.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
  },
  {
    id: "4",
    title: "Проект 4",
    imageSrc: "/no-image.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
  },
];

export const initialReviews: reviewItem[] = [
  {
    id: "1",

    name: "Андрій",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    imageSrc: "/no-image.jpg",
  },
  {
    id: "2",

    name: "Валентина",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    imageSrc: "/no-image.jpg",
  },
  {
    id: "3",

    name: "Степан",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    imageSrc: "/no-image.jpg",
  },
  {
    id: "4",
    name: "Висиль",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    imageSrc: "/no-image.jpg",
  },
];
