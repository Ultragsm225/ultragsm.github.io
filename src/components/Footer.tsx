"use client";
import Image from "next/image";
import Link from "next/link";
import { services } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  let newDate = new Date();
  let currentYear = newDate.getFullYear();

  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
      <div className="grid gap-4 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:max-w-sm text-center md:text-left">
          <Link
            href="/"
            aria-label="Ultra GSM Construction"
            title="Ultra GSM Construction"
            className="inline-flex items-center"
          >
            <Image
              src={"/logo.png"}
              alt={"Ultra GSM Construction Logo"}
              width={150}
              height={200}
            />
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-lg font-medium text-gsm-black">
              Revitalize your spaces with our expert renovation services,
              combining innovative design, superior craftsmanship, and Link
              commitment to transforming your vision into Link beautifully
              renewed reality.
            </p>
          </div>
          <Image
            className="mx-auto lg:mx-0"
            src={"/triple-bbb.svg"}
            alt={"triple-bbb"}
            width={250}
            height={200}
          />
        </div>
        <div className="space-y-2 text-center md:text-left">
          <p className="text-lg font-semibold tracking-wide text-gsm-black">
            About Us
          </p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/about-us#founded"
                aria-label="Founded"
                className="font-medium text-gsm-black transition-colors duration-300 hover:text-gsm-blue"
              >
                Founded
              </Link>
            </li>
            <li>
              <Link
                href="/about-us#mission-and-vision"
                aria-label="Mission & Vision"
                className="font-medium text-gsm-black transition-colors duration-300 hover:text-gsm-blue"
              >
                Mission & Vision
              </Link>
            </li>
            {/* <li>
              <Link
                href="/about-us#team"
                className="font-medium text-gsm-black transition-colors duration-300 hover:text-gsm-blue"
              >
                Team
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <p className="text-lg font-semibold tracking-wide text-gsm-black">
            Services
          </p>
          <ul className="mt-2 space-y-2">
            {services.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  aria-label={item.name}
                  className="font-medium text-gsm-black transition-colors duration-300 hover:text-gsm-blue"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <p className="text-lg font-semibold tracking-wide text-gsm-black">
            Quick Links
          </p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/"
                aria-label="Home"
                className="font-medium text-gsm-black transition-colors duration-300 hover:text-gsm-blue"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                aria-label="About Us"
                className="font-medium text-gsm-black transition-colors duration-300 hover:text-gsm-blue"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                aria-label="Services"
                className="font-medium text-gsm-black transition-colors duration-300 hover:text-gsm-blue"
              >
                Services
              </Link>
            </li>
            {/* <li>
              <Link
                href="/projects"
                aria-label="Projects"
                className="font-medium text-gsm-black transition-colors duration-300 hover:text-gsm-blue"
              >
                Projects
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact-us"
                aria-label="Contact Us"
                className="font-medium text-gsm-black transition-colors duration-300 hover:text-gsm-blue"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <p className="text-lg font-semibold tracking-wide text-gsm-black">
            Contact
          </p>
          <div className="font-medium">
            <Link
              href="tel:778-251-9457"
              aria-label="+1 (778) 251-9457"
              title="Our phone"
              className="transition-colors duration-300 text-gsm-black hover:text-gsm-blue"
            >
              <FontAwesomeIcon
                className="text-gsm-blue mr-2"
                icon={faPhone}
                size="lg"
                height={14}
              />
              +1 (778) 251-9457
            </Link>
          </div>
          <div className="font-medium">
            <Link
              href="mailto:info@ultragsm.ca"
              aria-label="info@utragsm.ca"
              title="Our email"
              className="transition-colors duration-300 text-gsm-black hover:text-gsm-blue"
            >
              <FontAwesomeIcon
                className="text-gsm-blue mr-2"
                icon={faEnvelope}
                size="lg"
                height={14}
              />
              info@utragsm.ca
            </Link>
          </div>
        </div>
        {/* <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <Link
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5"
              >
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg
                viewBox="0 0 30 30"
                fill="currentColor"
                className="h-6"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="4"
                />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5"
              >
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </p>
        </div> */}
      </div>
      <div className="flex flex-col justify-between pt-5 pb-5 border-t lg:flex-row text-center lg:text-left">
        <p className="text-sm font-medium text-gsm-black">
          &copy; {currentYear}{" "}
          <span className="text-gsm-blue">Ultra GSM Construction Ltd.</span> All
          rights reserved.
        </p>
        <p className="text-sm font-medium text-gsm-black font-sans">
          Designed by{" "}
          <Link
            href={"https://spiderweb.pro"}
            aria-label="SpiderWeb"
            className="text-[#6061ef]"
            target="_blank"
          >
            SpiderWeb
          </Link>
        </p>
      </div>
    </div>
  );
};
