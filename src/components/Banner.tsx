import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-gsm-blue px-4 py-1 text-white">
      <p className="text-center text-md font-medium flex justify-between md:justify-center md:gap-x-6">
        <p className="hidden sm:block">Request a FREE Estimate Today!</p>
        <Link
          href="mailto:info@ultragsm.ca"
          className="inline-block underline"
        >
          <FontAwesomeIcon
            className="inline-flex h-4 w-4 mr-1"
            icon={faEnvelope}
          />
          info@ultragsm.ca
        </Link>

        <Link
          href="tel:+17782519457"
          className="inline-block underline"
        >
          <FontAwesomeIcon
            className="inline-flex h-4 w-4 mr-1"
            icon={faPhone}
          />
          +1 (778) 251-9457
        </Link>
      </p>
    </div>
  );
}
