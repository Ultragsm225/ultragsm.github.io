import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-28 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="flex flex-col mb-10 text-center max-w-xl mx-auto">
        <Image
          src={"/404.svg"}
          alt={"404 not found"}
          className="h-full w-full object-cover object-center"
          width={500}
          height={500}
        />
        <h1 className="mt-10 text-3xl font-bold tracking-tight text-gsm-black sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium leading-7 text-gsm-black">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-lg bg-gsm-blue px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-gsm-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gsm-blue"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
