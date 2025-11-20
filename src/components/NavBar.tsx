"use client";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPositions";
import { usePathname, useRouter } from "next/navigation";

export const services = [
  {
    name: "Design",
    description:
      "Tailored architectural and interior design services to bring your unique vision to life with creativity and precision.",
    href: "/services/design",
    src: "/services/design.jpg",
  },
  {
    name: "Residential Renovation",
    description:
      "Comprehensive home transformation services, enhancing living spaces for comfort, functionality, and aesthetic appeal.",
    href: "/services/residential-renovation",
    src: "/services/residential-renovation.jpg",
  },
  {
    name: "Commercial Renovation",
    description:
      "Specialized renovation solutions for businesses, focusing on brand alignment, space optimization, and modernization.",
    href: "/services/commercial-renovation",
    src: "/services/commercial-renovation.jpg",
  },
  {
    name: "Kitchen Renovation",
    description:
      "Custom kitchen makeovers, from cabinetry to countertops, designed for both style and practicality.",
    href: "/services/kitchen-renovation",
    src: "/services/kitchen-renovation.jpg",
  },
  {
    name: "Bathroom Renovation",
    description:
      "Elegant and efficient bathroom remodels, integrating modern amenities with personalized design elements.",
    href: "/services/bathroom-renovation",
    src: "/services/bathroom-renovation.jpg",
  },
  {
    name: "Flooring",
    description:
      "Transform your space with our diverse range of high-quality flooring solutions, from timeless hardwood to modern, low-maintenance alternatives.",
    href: "/services/flooring",
    src: "/services/flooring.jpg",
  },
  {
    name: "Tiling",
    description:
      "Elevate your interiors with precision and style using our expert tiling services, offering a wide selection of materials and patterns for customized designs.",
    href: "/services/tiling",
    src: "/services/tiling.jpg",
  },
  {
    name: "Glazing",
    description:
      "Elegant and efficient bathroom remodels, integrating modern amenities with personalized design elements.",
    href: "/services/glazing",
    src: "/services/glazing.jpg",
  },
  {
    name: "Landscaping",
    description:
      "Creating beautiful, functional outdoor spaces that complement and enhance the overall aesthetic of your property.",
    href: "/services/landscaping",
    src: "/services/landscaping.jpg",
  },
  {
    name: "Painting",
    description:
      "Professional interior and exterior painting services, utilizing quality materials for a durable and visually appealing finish.",
    href: "/services/painting",
    src: "/services/painting.jpg",
  },
];

export const projects = [
  {
    name: "Luxury Loft Evolution",
    municipality: "Fleetwood",
    dateCompleted: "2021",
    tags: [
      "Residential Renovation",
      "Kitchen Renovation",
      "Bathroom Renovation",
    ],
    descriptions: [
      "The living area with an open-plan design, modern kitchen, and stylish seating area.",

      "The bedroom, featuring a king-sized bed, floor-to-ceiling windows, and a comfortable seating area.",

      "The bathroom, showcasing a freestanding bathtub, marble tiles, and a spacious, glass-enclosed shower.",
    ],
    photos: [
      {
        src: "/projects/luxury-loft-evolution/image-1.jpg",
        alt: "",
      },
      {
        src: "/projects/luxury-loft-evolution/image-2.jpg",
        alt: "",
      },
      {
        src: "/projects/luxury-loft-evolution/image-3.jpg",
        alt: "",
      },
    ],
    href: "/projects/luxury-loft-evolution",
    slug: "luxury-loft-evolution",
  },
  {
    name: "Commercial Elegance Overhaul",
    municipality: "Nanaimo",
    dateCompleted: "2019",
    tags: ["Residential", "Glazing", "Tiling"],
    descriptions: [
      "The main lobby area, featuring a high ceiling, impressive chandelier, polished marble floors, and a luxurious reception desk.",
      "The conference room, with a large oval-shaped table, state-of-the-art video conferencing equipment, and panoramic city views.",
      "The dining area, blending modern and classic styles, with round tables, fine linens, tasteful lighting, and fine art.",
    ],
    photos: [
      {
        src: "/projects/commercial-elegance-overhaul/image-1.jpg",
        alt: "",
      },
      {
        src: "/projects/commercial-elegance-overhaul/image-1.jpg",
        alt: "",
      },
      {
        src: "/projects/commercial-elegance-overhaul/image-3.jpg",
        alt: "",
      },
    ],
    href: "/projects/commercial-elegance-overhaul",
    slug: "commercial-elegance-overhaul",
  },
  {
    name: "Coastal Cool Makeover",
    municipality: "Vancouver",
    dateCompleted: "2018",
    tags: ["Commercial Renovation", "Flooring", "Painting"],
    descriptions: [
      "The living room, featuring light, breezy colors, comfortable furniture, and beach-themed decorations.",
      "The kitchen, with white cabinetry, marble countertops, sea glass-inspired tiles, and a view of the ocean.",
      "The bedroom, incorporating tranquil colors, airy linens, beachside decorative elements, and a view of the sea.",
    ],
    photos: [
      {
        src: "/projects/coastal-cool-makeover/image-1.jpg",
        alt: "",
      },
      {
        src: "/projects/coastal-cool-makeover/image-2.jpg",
        alt: "",
      },
      {
        src: "/projects/coastal-cool-makeover/image-3.jpg",
        alt: "",
      },
    ],
    href: "/projects/coastal-cool-makeover",
    slug: "coastal-cool-makeover",
  },
];

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const pathname = usePathname();

  return (
    <header
      className={cn(
        pathname === "/"
          ? scrollPosition > 0
            ? "bg-gray-50 backdrop-filter backdrop-blur-md bg-opacity-80 shadow"
            : "bg-transparent"
          : "bg-gray-50 backdrop-filter backdrop-blur-md bg-opacity-80 shadow",
        "fixed top-0 z-10 w-full transition duration-700 ease-in-out"
      )}
    >
      <div
        className={cn(
          "px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 py-5 lg:px-8"
        )}
      >
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Ultra GSM Construction"
            title="Ultra GSM Construction"
            className="inline-flex items-center"
          >
            <Image
              src={
                pathname === "/"
                  ? scrollPosition > 0
                    ? "/logo.png"
                    : "/logo-white.png"
                  : "/logo.png"
              }
              alt={"Ultra GSM Construction Logo"}
              width={150}
              height={200}
              loading={"eager"}
            />
          </Link>
          <Image
            className="flex sm:hidden"
            src={"/financing.svg"}
            alt={"We offer financing"}
            width={125}
            height={150}
            loading={"eager"}
          />
          <ul className="items-center text-lg hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                aria-label="Home"
                title="Home"
                className={cn(
                  pathname === "/"
                    ? "border-b-2 border-b-gsm-blue"
                    : "border-b-gsm-yellow",
                  pathname === "/"
                    ? scrollPosition > 0
                      ? "text-gsm-black"
                      : "text-white"
                    : "text-gsm-black",
                  "font-semibold tracking-wide transition text-lg xl:text-xl duration-300 hover:border-b-gsm-yellow hover:border-b-2"
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                aria-label="About Us"
                title="About us"
                className={cn(
                  pathname === "/about-us"
                    ? "border-b-2 border-b-gsm-blue"
                    : "border-b-gsm-yellow",
                  pathname === "/"
                    ? scrollPosition > 0
                      ? "text-gsm-black"
                      : "text-white"
                    : "text-gsm-black",
                  "font-semibold tracking-wide transition text-lg xl:text-xl duration-300 hover:border-b-gsm-yellow hover:border-b-2"
                )}
              >
                About Us
              </Link>
            </li>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={cn(
                      pathname === "/"
                        ? scrollPosition > 0
                          ? "text-gsm-black"
                          : "text-white"
                        : "text-gsm-black",
                      "font-medium tracking-wide text-lg xl:text-xl focus-visible:outline-0"
                    )}
                  >
                    <span
                      className={cn(
                        pathname?.includes("/services")
                          ? "border-b-2 border-b-gsm-blue"
                          : "border-b-gsm-yellow",
                        pathname === "/"
                          ? scrollPosition > 0
                            ? "text-gsm-black"
                            : "text-white"
                          : "text-gsm-black",
                        "font-semibold tracking-wide transition text-lg xl:text-xl duration-300 hover:border-b-gsm-yellow hover:border-b-2"
                      )}
                    >
                      Services
                    </span>
                    <FontAwesomeIcon
                      icon={open ? faChevronUp : faChevronDown}
                      className={"ml-2"}
                      size="sm"
                      height={16}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      static
                      className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm lg:-translate-x-[55%] xl:-translate-x-[60%] transform px-4 sm:px-0 lg:max-w-5xl xl:max-w-6xl"
                    >
                      <div className="overflow-hidden rounded shadow ring-1 ring-black/5">
                        <div className="relative grid gap-8 bg-gray-50 p-7 lg:grid-cols-2 xl:grid-cols-3">
                          {services.slice(0, 6).map((item) => (
                            <Popover.Button
                              as={Link}
                              key={item.name}
                              href={item.href}
                              className={cn(
                                pathname === item.href
                                  ? "bg-gsm-blue"
                                  : "hover:bg-gray-200",
                                "-m-3 flex items-center rounded p-2 transition duration-300 ease-in-out hover:scale-[1.02]"
                              )}
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-gsm-blue sm:h-36 sm:w-24">
                                <Image
                                  src={item.src}
                                  className={
                                    "h-full w-full rounded object-cover"
                                  }
                                  alt={item.name}
                                  width={200}
                                  height={200}
                                />
                              </div>
                              <div className="ml-4">
                                <p
                                  className={cn(
                                    pathname === item.href
                                      ? "text-white"
                                      : "text-gsm-black",
                                    "text-md xl:text-lg font-semibold "
                                  )}
                                >
                                  {item.name}
                                </p>
                                <p
                                  className={cn(
                                    pathname === item.href
                                      ? "text-white"
                                      : "text-gsm-black",
                                    "text-base font-medium "
                                  )}
                                >
                                  {item.description}
                                </p>
                              </div>
                            </Popover.Button>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-4 text-center">
                          <Popover.Button
                            as={Link}
                            href="/services"
                            className="flow-root rounded px-2 py-2 transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-[1.02] focus:outline-none"
                          >
                            <span className="text-md font-semibold text-gsm-black">
                              View All
                            </span>

                            <span className="block text-md font-medium text-gsm-black">
                              Check out all of our services at a glance
                            </span>
                          </Popover.Button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* <li>
              <Link
                href="/projects"
                aria-label="Projects"
                title="Projects"
                className={cn(
                  pathname === "/projects"
                    ? "border-b-2 border-b-gsm-blue"
                    : "border-b-gsm-yellow",
                  pathname === "/"
                    ? scrollPosition > 0
                      ? "text-gsm-black"
                      : "text-white"
                    : "text-gsm-black",
                  "font-medium tracking-wide transition text-lg xl:text-xl duration-300 hover:border-b-gsm-yellow hover:border-b-2"
                )}
              >
                Projects
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact-us"
                aria-label="Contact Us"
                title="Contact Us"
                className={cn(
                  pathname === "/contact-us"
                    ? "border-b-2 border-b-gsm-blue"
                    : "border-b-gsm-yellow",
                  pathname === "/"
                    ? scrollPosition > 0
                      ? "text-gsm-black"
                      : "text-white"
                    : "text-gsm-black",
                  "font-semibold tracking-wide transition text-lg xl:text-xl duration-300 hover:border-b-gsm-yellow hover:border-b-2"
                )}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white text-lg xl:text-xl transition duration-300 rounded shadow bg-gsm-blue hover:bg-gsm-blue-dark focus:shadow-outline focus:outline-none"
                aria-label="Request FREE Estimate"
                title="Request FREE Estimate"
              >
                Request FREE Estimate
              </Link>
            </li>
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className={cn(
                pathname === "/"
                  ? scrollPosition > 0
                    ? "text-gsm-black"
                    : "text-white"
                  : "text-gsm-black",
                "p-2 -mr-1 transition duration-300 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-0 focus:bg-deep-purple-0"
              )}
              onClick={() => setIsMenuOpen(true)}
            >
              <FontAwesomeIcon
                className="flex-shrink-0 h-4 w-4"
                icon={faBars}
              />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-gray-50 border rounded shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Ultra GSM Construction"
                        title="Ultra GSM Construction"
                        className="inline-flex"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Image
                          src={"/logo.png"}
                          alt={"Ultra GSM Construction Logo"}
                          width={150}
                          height={200}
                          loading={"eager"}
                        />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-300 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FontAwesomeIcon
                          className="h-4 w-4"
                          icon={faXmark}
                        />
                      </button>
                    </div>
                  </div>
                  <nav className="text-lg">
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/"
                          aria-label="home"
                          title="Home"
                          className={cn(
                            pathname === "/"
                              ? "border-b-2 border-b-gsm-blue"
                              : "",
                            "text-gsm-black font-medium tracking-wide transition text-lg duration-300 hover:border-b-gsm-yellow hover:border-b-2"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-us"
                          aria-label="About us"
                          title="About us"
                          className={cn(
                            pathname === "/about-us"
                              ? "border-b-2 border-b-gsm-blue"
                              : "",
                            "text-gsm-black font-medium tracking-wide transition text-lg duration-300 hover:border-b-gsm-yellow hover:border-b-2"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          About us
                        </Link>
                      </li>
                      <Disclosure
                        as="div"
                        className="-mx-3"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className=" text-gsm-black font-medium tracking-wide text-lg duration-300 ml-3 pr-3.5">
                              <span
                                className={cn(
                                  pathname?.includes("/services")
                                    ? "border-b-2 border-b-gsm-blue"
                                    : "border-b-gsm-yellow",
                                  "text-gsm-black font-medium tracking-wide transition text-lg duration-300  hover:border-b-gsm-yellow hover:border-b-2"
                                )}
                              >
                                Services
                              </span>
                              <FontAwesomeIcon
                                icon={open ? faChevronUp : faChevronDown}
                                className={"ml-2 h-4 w-4"}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2 flex flex-col ml-10">
                              {services.slice(0, 6).map((item) => (
                                <Disclosure.Button
                                  key={item.name}
                                  as={Link}
                                  href={item.href}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <span
                                    className={cn(
                                      pathname === item.href
                                        ? "border-b-2 border-b-gsm-blue"
                                        : "border-b-gsm-yellow",
                                      "text-gsm-black font-medium tracking-wide transition text-lg duration-300  hover:border-b-gsm-yellow hover:border-b-2"
                                    )}
                                  >
                                    {item.name}
                                  </span>
                                </Disclosure.Button>
                              ))}
                              <Disclosure.Button
                                as={Link}
                                href={"/services"}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <hr className="mb-2" />
                                <span
                                  className={cn(
                                    pathname === "/services"
                                      ? "border-b-2 border-b-gsm-blue"
                                      : "border-b-gsm-yellow",
                                    "text-gsm-black font-medium tracking-wide transition text-lg duration-300  hover:border-b-gsm-yellow hover:border-b-2"
                                  )}
                                >
                                  View All Services
                                </span>
                              </Disclosure.Button>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* <li>
                        <Link
                          href="/projects"
                          aria-label="projects"
                          title="Projects"
                          className={cn(
                            pathname === "/projects"
                              ? "border-b-2 border-b-gsm-blue"
                              : "",
                            "text-gsm-black font-medium tracking-wide transition text-lg duration-300 hover:border-b-gsm-yellow hover:border-b-2"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Projects
                        </Link>
                      </li> */}

                      <li>
                        <Link
                          href="/contact-us"
                          aria-label="Contact Us"
                          title="Contact-Us"
                          className={cn(
                            pathname === "/contact-us"
                              ? "border-b-2 border-b-gsm-blue"
                              : "",
                            "text-gsm-black font-medium tracking-wide transition text-lg duration-300 hover:border-b-gsm-yellow hover:border-b-2"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact-us"
                          className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white text-lg xl:text-xl transition duration-300 rounded shadow bg-gsm-blue hover:bg-gsm-blue-dark focus:shadow-outline focus:outline-none"
                          aria-label="Request FREE Estimate"
                          title="Request FREE Estimate"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Request FREE Estimate
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
