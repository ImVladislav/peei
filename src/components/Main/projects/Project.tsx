import Image from "next/image";
import { projectItem } from "@/types";
import Link from "next/link";

interface ProjectProps {
  project: projectItem;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-item">
      <h3 className="project-item__title">{project.title}</h3>
      <div className="project-item__wrap">
        <Image
          className="project-item__image"
          src={project.imageSrc}
          alt={project.title}
          width={300}
          height={300}
        />
        <button className="project-item__btn">Допомогти</button>
      </div>
      <Link href="/">
        <p className="project-item__text">{project.text}</p>
      </Link>
    </div>
  );
};

export default Project;
