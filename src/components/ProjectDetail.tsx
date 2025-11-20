import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";

export const ProjectDetail = ({
  name = "",
  municipality = "",
  dateCompleted = "",
  descriptions = [""],
  photos = [{ src: "", alt: "" }],
}: {
  name: string;
  municipality: string;
  dateCompleted: string;
  descriptions: string[] | undefined;
  photos: { src: string; alt: string }[];
}) => {
  const product = {
    name: "Zip Tote Basket",
    price: "$140",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
      {
        name: "Features",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      // More sections...
    ],
  };

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <Tab.Group
          as="div"
          className="flex flex-col-reverse col-span-2"
        >
          {/* Image selector */}
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
              {photos.map((image, index) => (
                <Tab
                  key={index}
                  className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gsm-black hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  {({ selected }) => (
                    <>
                      <span className="sr-only">{image.alt}</span>
                      <span className="absolute inset-0 overflow-hidden rounded">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover object-center rounded shadow"
                          width={500}
                          height={500}
                        />
                      </span>
                      <span
                        className={
                          "pointer-events-none absolute inset-0 rounded ring-2 ring-offset-2"
                        }
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <Tab.Panels className="aspect-h-4 aspect-w-5 w-full rounded">
            {photos.map((image, index) => (
              <Tab.Panel key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center rounded"
                  width={1000}
                  height={1000}
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* Project Info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-5xl font-bold tracking-tight text-gsm-black">
            <span className="text-gsm-blue underline underline-offset-4 decoration-gsm-yellow ">
              {name}
            </span>
          </h1>

          <div className="mt-3 text-xl font-semibold">
            {/* Municpality */}
            <h3>
              Municipality:{" "}
              <span className="text-gsm-blue">{municipality}</span>
            </h3>
            {/* Date Completed */}
            <h3>
              Completion Date:{" "}
              <span className="text-gsm-blue">{dateCompleted}</span>
            </h3>
          </div>

          {/* Description */}

          {descriptions.map((description, index) => (
            <div
              key={index}
              className="mt-6"
            >
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6 text-lg font-medium text-gsm-black">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
