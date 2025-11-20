"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  let newDate = new Date();
  let currentMonth = newDate.getMonth() + 1;
  let heroImageSrc = "/hero.jpg";

  if (currentMonth > 0 && currentMonth <= 3) {
    heroImageSrc = "/hero1.jpg";
  } else if (currentMonth > 3 && currentMonth <= 6) {
    heroImageSrc = "/hero2.jpg";
  } else if (currentMonth > 6 && currentMonth <= 9) {
    heroImageSrc = "/hero3.jpg";
  } else {
    heroImageSrc = "/hero.jpg";
  }

  return (
    <div className="relative isolate min-h-screen lg:min-h-screen lg:max-h-screen xl:min-h-screen overflow-hidden">
      <Image
        src={heroImageSrc}
        className={"absolute inset-0 -z-10 h-full w-full object-cover"}
        alt={"Hero Image"}
        width={1250}
        height={1000}
        loading="lazy"
      />
      <div className="bg-gsm-blue min-h-screen lg:min-h-screen xl:min-h-screen bg-opacity-50">
        <div className="px-4 pt-44 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-60">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="w-full text-center max-w-5xl mb-12 sm:ml-14 lg:pr-10 lg:text-left xl:mb-0 xl:pr-14 lg:w-8/12 gap-y-4 flex flex-col sm:gap-y-4">
              <h2 className="max-w-4xl mx-auto lg:mx-0 mb-6 text-5xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:max-w-7xl lg:text-6xl xl:text-7xl sm:leading-none">
                Transforming Spaces, Enhancing Lives{" "}
              </h2>
              <p className="max-w-xl mx-auto lg:mx-0 mb-4 font-medium text-2xl text-white lg:text-2xl xl:text-3xl">
                Whether it&apos;s a cozy cottage renovation or a grand
                commercial construction, we are committed to excellence in every
                nail driven and brick laid.
              </p>
              <div className="flex flex-col gap-y-3 lg:flex-row gap-x-3 justify-center lg:justify-start">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white text-lg transition duration-300 rounded shadow bg-gsm-blue hover:bg-gsm-blue-dark focus:shadow-outline focus:outline-none"
                  aria-label="Request FREE Estimate"
                  title="Request FREE Estimate"
                >
                  Request FREE Estimate
                </Link>
                {/* <Link
                  href="/projects"
                  className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white text-lg transition duration-300 rounded shadow ring-1 ring-gsm-yellow hover:bg-gsm-yellow hover:ring-0 focus:shadow-outline focus:outline-none"
                  aria-label="view-projects"
                  title="View Projects"
                >
                  View Projects{" "}
                  <FontAwesomeIcon
                    className="ml-1"
                    icon={faAngleRight}
                    size="sm"
                    height={16}
                  />
                </Link> */}
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white text-lg transition duration-300 rounded shadow ring-1 ring-gsm-yellow hover:bg-gsm-yellow hover:ring-0 focus:shadow-outline focus:outline-none"
                  aria-label="View Services"
                  title="View Services"
                >
                  View Services{" "}
                  <FontAwesomeIcon
                    className="ml-1"
                    icon={faAngleRight}
                    size="sm"
                    height={16}
                  />
                </Link>
              </div>
            </div>
            {/* <div className="w-full max-w-xl xl:px-10 xl:w-5/6 hidden lg:visible">
              <ContactUsForm />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
