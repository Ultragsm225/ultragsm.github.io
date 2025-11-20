import Hero from "../components/Hero";
import { FeaturedServices } from "../components/FeaturedServices";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      {/* <FeaturedProjects /> */}
    </div>
  );
}
