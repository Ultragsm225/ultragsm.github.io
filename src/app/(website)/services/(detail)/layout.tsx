import { FeaturedProjects } from "@/components/FeaturedProjects";
import { FeaturedServices } from "@/components/FeaturedServices";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <FeaturedServices />
      {/* <FeaturedProjects /> */}
    </div>
  );
}
