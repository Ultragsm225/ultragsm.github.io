"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./NavBar";

export const ProjectsGrid = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="flex flex-col mb-10 text-center max-w-xl mx-auto">
        <p className="font-medium lg:text-xl px-6">
          Explore our diverse portfolio showcasing our expertise in transforming
          spaces through innovative design and meticulous craftsmanship.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 lg:row-gap-8">
        {projects.map((item, index) => (
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
                  "object-cover w-full h-72 mb-6 rounded shadow md:h-96 lg:group-hover:scale-[1.02] transition duration-300"
                }
                src={item.photos.at(0)!.src}
                alt={item.photos.at(0)!.alt}
                width={950}
                height={500}
                loading="eager"
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
    </div>
  );
};
