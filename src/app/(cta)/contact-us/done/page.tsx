import { siteConfig } from "@/configs/site";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type Metadata } from "next";
import Link from "next/link";

const pageMetadata = {
  title: "Contact Us Submitted",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/contact-us/done",
  },
  title: pageMetadata.title,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ContactUsDone() {
  return (
    <div className="mt-28 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="flex flex-col mb-10 text-center max-w-xl mx-auto">
        <div className="px-6 py-8 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mt-10 text-3xl font-bold tracking-tight text-gsm-black sm:text-4xl">
              Submitted Successfully!
            </h1>
            <p className="mt-6 text-lg font-medium leading-7 text-gsm-black">
              Thank you for reaching out to us. We appreciate your interest and
              the time you&apos;ve taken to fill out our contact form. Your
              inquiry is important to us. Our team is committed to providing you
              with the information or assistance you need.
            </p>
            <br />
            <p className="mt-6 text-lg font-medium leading-7 text-gsm-black">
              In the meantime, feel free to explore our website and the various
              services we offer.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="text-md flex rounded-lg bg-gsm-blue px-3 py-2 font-bold text-white shadow-sm hover:bg-gsm-blue-dark hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gsm-blue"
              >
                <FontAwesomeIcon
                  icon={faHome}
                  className="mr-2 h-6 w-6"
                />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
