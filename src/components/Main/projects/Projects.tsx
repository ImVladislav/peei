"use client";
import React, { useState } from "react";

import { initialProjects } from "@/constants/index";

import { projectItem } from "@/types";

import Project from "./Project";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(initialProjects);
  const admin = true;

  const handleAddProject = () => {
    const newProject: projectItem = {
      id: `${projects.length + 1}`,
      title: `Новий проект ${projects.length + 1}`,
      imageSrc: "/no-image.jpg",
      text: "Опис нового проекту...",
    };

    setProjects([...projects, newProject]);
  };

  return (
    <section className="project">
      <div className="container">
        <h2 className="project__title title">ДОПОМОЖІТЬ ЗІБРАТЬ КОШТИ</h2>
        <div className="line" />

        {/* <ul className="project__list">
            {projects.map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </ul> */}

        <Swiper
          // style={{
          //   "--swiper-navigation-color": "#000000",
          // }}
          spaceBetween={10}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {admin && (
          <button
            className="project__add-button button-admin"
            onClick={handleAddProject}
          >
            Додати проект
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
