"use client";
import { faAngleRight, faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { services } from "@/components/NavBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FeaturedServices = () => {
  const pathname = usePathname();

  let currentItemName = services.filter((x) => x.href == pathname).pop()?.name;
  let updatedServices = services.filter((x) => x.href !== pathname);

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="m-2 flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <h2 className="text-3xl font-bold leading-none tracking-tight text-gsm-black sm:text-4xl">
            {currentItemName ? <>More</> : <>Our</>}{" "}
            <span className="text-gsm-blue underline underline-offset-4 decoration-gsm-yellow ">
              Services
            </span>
          </h2>
        </div>
        <p className="w-full text-gsm-black font-medium lg:text-xl lg:max-w-lg">
          {currentItemName ? (
            <>
              In addition to {currentItemName}, we offer various specialized
              services to ensure a seamless transition from conception to
              completion.
            </>
          ) : (
            <>
              We offer specialized design-build services to ensure a seamless
              transition from conception to completion.
            </>
          )}
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 lg:row-gap-8">
        {updatedServices.slice(0, 4).map((item, index) => (
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
                  "object-cover w-full h-56 mb-6 rounded shadow md:h-64 xl:h-80 group-hover:scale-[1.02] group-hover:drop-shadow-lg transition duration-300"
                }
                src={item.src}
                alt={item.name}
                width={500}
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

      <div className="text-center">
        <Link
          href="/services"
          aria-label="View All Services"
          className="inline-flex text-lg items-center font-semibold transition-colors duration-200 text-gsm-black hover:text-gsm-blue-dark"
        >
          View All Services
          <FontAwesomeIcon
            className="ml-1"
            icon={faAngleRight}
            size="sm"
            height={14}
          />
        </Link>
      </div>
    </div>
  );
};
