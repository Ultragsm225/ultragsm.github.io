"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faEnvelope,
  faPhone,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";

export type ContactUsFormData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
};

export default function ContactUsForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const data: ContactUsFormData = {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      message,
    };

    try {
      const res = await axios({
        method: "POST",
        url: "/api/sendContactUsEmail",
        data: JSON.stringify(data),
      });

      if (res.status === 200) {
        router.push("/contact-us/done");
      }
      setLoading(true);
      toast.success("You've successfully submitted the form!");
    } catch (e) {
      toast.error("Ooops! An error has occured...", {
        description:
          "An error has occured while trying to submit the form. If you continue to have issues, please contact us via phone or e-mail.",
      });
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div
      id="contact-us"
      className="mx-auto scroll-m-1 md:scroll-m-12"
    >
      <div className="mt-10 max-w-2xl mx-auto items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="group mx-2 rounded bg-white shadow ring-1 ring-gray-700/5 lg:m-0 drop-shadow"
          noValidate
        >
          <div className="px-6 py-6 sm:p-8">
            <div className="grid max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:grid-cols-12">
              <div className="sm:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-md font-semibold leading-6 text-gsm-black"
                >
                  First Name <span className="text-red-600">*</span>
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    value={firstName}
                    disabled={loading}
                    autoComplete="given-name"
                    className="block w-full rounded border-0 py-1.5 text-gsm-black shadow ring-1 ring-inset ring-gray-300 placeholder:text-gsm-black focus:ring-2 font-medium focus:ring-inset focus:ring-gsm-blue sm:text-md sm:leading-6"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="last-name"
                  className="block text-md font-semibold leading-6 text-gsm-black"
                >
                  Last Name{" "}
                  <span className="text-sm font-medium">(Optional)</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    value={lastName}
                    disabled={loading}
                    autoComplete="family-name"
                    className="block w-full rounded border-0 py-1.5 text-gsm-black shadow ring-1 ring-inset ring-gray-300 placeholder:text-gsm-black focus:ring-2 font-medium focus:ring-inset focus:ring-gsm-blue sm:text-md sm:leading-6"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-md font-semibold leading-6 text-gsm-black"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <div className="relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="h-5 w-5 text-gsm-blue"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={emailAddress}
                    disabled={loading}
                    autoComplete="email"
                    // pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                    className="block w-full rounded border-0 py-1.5 pl-10 text-gsm-black shadow ring-1 ring-inset ring-gray-300 placeholder:text-gsm-black focus:ring-2 font-medium focus:ring-inset focus:ring-gsm-blue sm:text-md sm:leading-6"
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                    }}
                  />
                  <span className="mt-2 hidden text-md text-red-600 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Please enter a valid email address
                  </span>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="tel"
                  className="block text-md font-semibold leading-6 text-gsm-black"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <div className="relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="h-5 w-5 text-gsm-blue"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    required
                    id="tel"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    value={phoneNumber}
                    disabled={loading}
                    // pattern="^(\+\d{1,2})?\d{10,}$"
                    className="form-input block w-full rounded border-0 py-1.5 pl-10 text-gsm-black shadow ring-1 ring-inset ring-gray-300 placeholder:text-gsm-black font-medium focus:ring-2 focus:ring-inset focus:ring-gsm-blue sm:text-md sm:leading-6"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-12">
                <label
                  htmlFor="message"
                  className="block text-md font-semibold leading-6 text-gsm-black"
                >
                  Message{" "}
                  <span className="text-sm font-medium">(Optional)</span>
                </label>
                <p className="text-md font-medium text-gsm-black">
                  Enter a brief message.
                </p>
                <div className="mt-2">
                  <textarea
                    name="project-description"
                    id="project-description"
                    value={message}
                    disabled={loading}
                    className="block w-full rounded border-0 py-1.5 text-gsm-black shadow ring-1 ring-inset ring-gray-300 placeholder:text-gsm-black font-medium focus:ring-2 focus:ring-inset focus:ring-gsm-blue sm:text-md sm:leading-6"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-x-6 border-t border-gray-700/10 px-4 py-4 sm:px-8">
            <div className="text-md font-medium text-gsm-black">
              Note: Fields marked by (<span className="text-red-600">*</span>)
              are required to submit this form.
            </div>
            <div className="group/submit relative mt-3 w-max">
              <button
                disabled={loading}
                type="submit"
                className={cn(
                  loading ? "pointer-events-none opacity-30" : "",

                  "text-md flex  rounded bg-gsm-blue px-3 py-2 font-bold text-white shadow hover:bg-gsm-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gsm-blue group-invalid:pointer-events-none group-invalid:opacity-30"
                )}
              >
                {loading ? (
                  <>
                    <FontAwesomeIcon
                      icon={faArrowRotateRight}
                      className="mr-2 animate-spin"
                      size="xl"
                      height={24}
                    />
                    Submitting
                  </>
                ) : (
                  <>Submit</>
                )}
              </button>
              <span className="pointer-events-none absolute -left-[3.9rem] -top-16 w-max rounded bg-white px-3 py-2 opacity-0 shadow transition-opacity duration-300 group-invalid:group-hover/submit:opacity-100">
                <p className="text-md font-medium text-gsm-black">
                  Please fill in the required (
                  <span className="text-red-600">*</span>) <br />
                  fields to submit this form.
                </p>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
