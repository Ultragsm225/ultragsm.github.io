import Image from "next/image";

export default function Title({ title, src }: { title: string; src: string }) {
  return (
    <div className="relative mt-28">
      <Image
        src={src}
        className={
          "absolute inset-0 object-cover origin-center object-center w-full h-full"
        }
        alt={""}
        width={1000}
        height={500}
        loading="eager"
        priority={true}
      />
      <div className="relative bg-opacity-70 bg-gsm-blue">
        <div className="px-4 py-16 flex flex-col items-center lg:py-24 xl:py-24">
          <h2 className="max-w-lg text-6xl font-bold text-center tracking-tight text-white sm:text-7xl sm:leading-none">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
