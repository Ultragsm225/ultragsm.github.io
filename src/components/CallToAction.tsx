import Link from "next/link";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="relative mt-10">
      <Image
        src={"/cta.jpg"}
        className={"absolute inset-0 -z-10 h-full w-full object-cover"}
        alt={""}
        width={1000}
        height={500}
      />
      <div className="bg-gsm-blue min-h-[200px] bg-opacity-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl text-center lg:text-left font-bold tracking-tight text-white sm:text-4xl">
            Like what you see?
            <br />
            Request a FREE Estimate!
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/contact-us"
              className="inline-flex mx-auto items-center justify-center h-10 px-4 font-medium tracking-wide text-white text-lg xl:text-xl transition duration-300 rounded shadow bg-gsm-blue hover:bg-gsm-blue-dark focus:shadow-outline focus:outline-none"
              aria-label="request free estimate"
              title="Request FREE Estimate"
            >
              Request FREE Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
