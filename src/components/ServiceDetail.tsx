import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const ServiceDetail = ({
  title,
  underlined,
  description,
  tagLine,
  features,
  src,
}: {
  title: string | undefined;
  underlined: string | undefined;
  description: string | undefined;
  tagLine: string;
  features: string[];
  src: string;
}) => {
  let splitValue = 1;
  if (features.length % 2 !== 0) {
    splitValue = features.length / 2 + 1;
  } else {
    splitValue = features.length / 2;
  }

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="grid gap-2 row-gap-10 grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col justify-center col-span-2">
          <div className="max-w-lg lg:max-w-2xl text-center lg:text-left">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-gsm-black sm:text-4xl sm:leading-none">
              {title}{" "}
              <span className="text-gsm-blue underline underline-offset-4 decoration-gsm-yellow ">
                {underlined}
              </span>
            </h2>
            <p className="mb-10 text-base text-gsm-black font-semibold md:text-lg">
              {description}
            </p>
            <p className="mb-4 text-sm text-gsm-blue font-bold tracking-widest uppercase">
              {tagLine}
            </p>
          </div>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-1 lg:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              {features?.slice(0, splitValue).map((feature, index) => (
                <li
                  key={index}
                  className="flex text-left text-lg font-medium items-center"
                >
                  <FontAwesomeIcon
                    icon={faHammer}
                    className="text-gsm-yellow mr-2"
                    size={"sm"}
                    height={16}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {features?.slice(splitValue).map((feature, index) => (
                <li
                  key={index}
                  className="flex text-left text-lg font-medium items-center"
                >
                  <FontAwesomeIcon
                    icon={faHammer}
                    className="text-gsm-yellow mr-2"
                    size={"sm"}
                    height={16}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-5 lg:mt-0">
          <Image
            className="object-cover mx-auto w-full h-[20rem] rounded shadow lg:h-[30rem]"
            src={src}
            alt={tagLine}
            height={900}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};
