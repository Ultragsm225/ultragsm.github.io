import Image from "next/image";

export default function Financing() {
  return (
    <div className="invisible sm:visible fixed bottom-5 -right-1 md:bottom-24 md:-right-2 z-20 bg-gray-50 backdrop-filter backdrop-blur-md bg-opacity-80 shadow-xl ring-2 ring-gsm-blue px-4 py-2 mt-6 text-white rounded">
      <div className="flex justify-center lg:justify-start">
        <Image
          src={"/financing.svg"}
          alt={"We offer financing"}
          width={150}
          height={150}
          loading={"eager"}
        />
      </div>
    </div>
  );
}
