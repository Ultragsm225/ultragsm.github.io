"use client";
import { FeaturedServices } from "@/components/FeaturedServices";
import { projects } from "@/components/NavBar";
import { ProjectDetail } from "@/components/ProjectDetail";
import Title from "@/components/Title";

export default function Project1() {
  const project = projects
    .filter((x) => x.slug == "luxury-loft-evolution")
    .pop()!;
  const titleImage = project.photos[0];

  return (
    <div>
      <Title
        title={project.name}
        src={titleImage.src}
      />
      <ProjectDetail
        name={project.name}
        municipality={project.municipality}
        dateCompleted={project.dateCompleted}
        descriptions={project.descriptions!}
        photos={project.photos}
      />
    </div>
  );
}
