import { ProjectsGrid } from "@/components/ProjectsGrid";
import Title from "@/components/Title";

export default function Projects() {
  return (
    <div>
      <Title
        title={"Projects"}
        src={"/projects.jpg"}
      />
      <ProjectsGrid />
    </div>
  );
}
