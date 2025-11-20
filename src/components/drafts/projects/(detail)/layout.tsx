import { FeaturedProjects } from "@/components/FeaturedProjects";
import { FeaturedServices } from "@/components/FeaturedServices";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <FeaturedProjects />
      <FeaturedServices />
    </div>
  );
}
