"use client";
import { faAngleRight, faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { projects } from "@/components/NavBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FeaturedProjects = () => {
  const pathname = usePathname();
  let currentItemName = projects.filter((x) => x.href == pathname).pop()?.name;
  let updatedProjects = projects.filter((x) => x.href !== pathname);

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="m-2 flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <h2 className="text-3xl font-bold leading-none tracking-tight text-gsm-black sm:text-4xl">
            {currentItemName ? <>More</> : <>Featured</>}{" "}
            <span className="text-gsm-blue underline underline-offset-4 decoration-gsm-yellow ">
              Projects
            </span>
          </h2>
        </div>
        <p className="w-full text-gsm-black font-medium lg:text-xl lg:max-w-lg">
          Explore our featured projects showcasing our expertise in transforming
          spaces through innovative design and meticulous craftsmanship.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 lg:row-gap-8">
        {updatedProjects.slice(0, 4).map((item, index) => (
          <div
            className="group overflow-hidden rounded p-2"
            key={index}
          >
            <Link
              href={item.href}
              aria-label={item.name}
            >
              <Image
                className={
                  "object-cover w-full h-72 mb-6 rounded shadow md:h-96 group-hover:scale-[1.02] group-hover:drop-shadow-lg transition duration-300"
                }
                src={item.photos.at(0)!.src}
                alt={""}
                width={950}
                height={500}
              />
            </Link>
            <p className="mb-2 text-center text-xl font-semibold group-hover:text-gsm-blue transition duration-300 leading-none">
              <Link
                href={item.href}
                aria-label={item.name}
              >
                {item.name}
              </Link>
            </p>
          </div>
        ))}
      </div>
      {projects.length > updatedProjects.length + 1 ? (
        <div className="text-center">
          <Link
            href="/projects"
            aria-label="view-all-projects"
            className="inline-flex text-lg items-center font-semibold transition-colors duration-200 text-gsm-black hover:text-gsm-blue-dark"
          >
            View All Projects
            <FontAwesomeIcon
              className="ml-1"
              icon={faAngleRight}
              size="sm"
              height={14}
            />
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
