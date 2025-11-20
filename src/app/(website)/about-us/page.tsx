import Image from "next/image";
import Title from "@/components/Title";
import Link from "next/link";
import { type Metadata } from "next";
// import { CountUp } from "use-count-up";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "About Us",
  description:
    "We've dedicated years to crafting spaces that reflect our clients' dreams. With a foundation built on integrity, quality, and passion for design, we pride ourselves on delivering excellence in every project.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/about-us",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/about-us`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.title,
    description: siteConfig.description,
    images: {
      url: siteConfig.ogImage,
      alt: siteConfig.name,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

function Founded() {
  return (
    <div
      id="founded"
      className="scroll-m-20 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-center">
        <div className="flex flex-col justify-center text-center lg:text-left lg:max-w-lg basis-1/2 mt-6">
          <div className="max-w-xl mb-4 mx-auto">
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-gsm-black sm:text-4xl sm:leading-none lg:text-5xl">
              Founded In{" "}
              <span className="inline-block text-gsm-blue underline decoration-gsm-yellow underline-offset-4">
                2016
              </span>
            </h1>
            <p className="font-medium lg:text-lg lg:max-w-lg">
              We&apos;ve dedicated years to crafting spaces that reflect our
              clients&apos; dreams. With a foundation built on integrity,
              quality, and passion for design, we pride ourselves on delivering
              excellence in every project.
            </p>
          </div>
          <div>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white text-lg transition duration-300 rounded shadow bg-gsm-blue hover:bg-gsm-blue-dark focus:shadow-outline focus:outline-none"
              aria-label="request-estimate"
              title="Request Estimate"
            >
              Request Estimate
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end basis-1/2">
          <div className="flex flex-col items-end px-2">
            <Image
              src={"/about-us-1.jpg"}
              className={
                "object-cover mb-6 rounded shadow h-28 sm:h-48 xl:h-56 w-28 sm:w-56 xl:w-56"
              }
              alt={""}
              width={400}
              height={400}
            />
            <Image
              src={"/about-us-3.jpg"}
              className={
                "object-cover object-left w-20 h-20 rounded shadow sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              }
              alt={""}
              width={300}
              height={300}
            />
          </div>
          <div className="pl-2">
            <Image
              src={"/about-us-2.jpg"}
              className={
                "object-cover object-center w-40 h-40 rounded shadow sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              }
              alt={""}
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionAndVision() {
  return (
    <div
      id="mission-and-vision"
      className="scroll-m-20 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14 text-center"
    >
      <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
        <div>
          <div className="relative">
            <Image
              src={"/mission.svg"}
              alt={"mission"}
              className="h-96 w-auto object-cover object-center mx-auto rounded p-10"
              width={500}
              height={500}
            />
          </div>
          <div className="px-6 py-8 rounded sm:px-8">
            <h5 className="mb-2 font-bold text-2xl sm:leading-none lg:text-3xl">
              <span className="inline-block text-gsm-blue underline decoration-gsm-yellow underline-offset-4">
                Mission
              </span>
            </h5>
            <p className="mb-5 text-lg font-medium text-gsm-black">
              At Ultra GSM Construction, our mission is to enrich the lives of
              Vancouver&apos;s residents by enhancing the functionality, beauty,
              and value of their homes and spaces. We are committed to
              delivering exceptional renovation services that exceed
              expectations, while fostering sustainability and community growth.
            </p>
          </div>
        </div>
        <div>
          <div className="relative">
            <Image
              src={"/vision.svg"}
              alt={"vision"}
              className="h-96 w-auto object-cover object-center mx-auto rounded p-10"
              width={500}
              height={500}
            />
          </div>
          <div className="px-6 py-8 rounded sm:px-8">
            <h5 className="mb-2 font-bold text-2xl sm:leading-none lg:text-3xl">
              <span className="inline-block text-gsm-blue underline decoration-gsm-yellow underline-offset-4">
                Vision
              </span>
            </h5>
            <p className="mb-5 text-lg font-medium text-gsm-black">
              Our vision is to be the premier renovation and design firm in
              Vancouver, recognized for our unwavering commitment to quality,
              creativity, and customer satisfaction. We aspire to lead the
              industry by setting new standards of excellence in craftsmanship,
              innovation, and environmental responsibility, while contributing
              to the enduring beauty of the city we call home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Statistics() {
  return (
    <div className="bg-gsm-blue/30">
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-14">
        <div className="flex flex-col md:flex-row justify-between gap-y-8">
          <div className="text-center">
            <h6 className="text-5xl font-bold text-gsm-blue">
              {/* <CountUp
                isCounting
                end={65}
                duration={3}
              /> */}
              65+
            </h6>
            <p className="mt-3 font-semibold text-2xl md:text-3xl text-gsm-black">
              Projects
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-5xl font-bold text-gsm-blue">
              {/* <CountUp
                isCounting
                end={50}
                duration={4}
              /> */}
              50+
            </h6>
            <p className="mt-3 font-semibold text-2xl md:text-3xl text-gsm-black">
              Clients
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-5xl font-bold text-gsm-blue">
              {/* <CountUp
                isCounting
                end={23}
                duration={5}
              /> */}
              23+
            </h6>
            <p className="mt-3 font-semibold text-2xl md:text-3xl text-gsm-black">
              Partnerships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  const teamMembers = [
    {
      name: "Guss Ash",
      title: "GM & Founder",
      src: "/team/person.jpg",
      linkedIn: "/",
      twitter: "/",
    },
    {
      name: "Samar Ashour",
      title: "Design Consultant",
      src: "/team/person2.jpg",
      linkedIn: "/",
      twitter: "/",
    },
    {
      name: "Dareen Ashour",
      title: "Procurement Officer",
      src: "/team/person3.jpg",
      linkedIn: "/",
      twitter: "/",
    },
    {
      name: "Kawla Alkuhlani",
      title: "Marketing Specialist",
      src: "/team/person4.jpg",
      linkedIn: "/",
      twitter: "/",
    },
  ];
  return (
    <div
      id="team"
      className="scroll-m-20 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-14 "
    >
      <div className="flex flex-col mb-10 text-center max-w-xl mx-auto">
        <p className="mb-6 text-3xl font-bold tracking-tight text-gsm-black sm:text-4xl sm:leading-none lg:text-5xl">
          Discover Our{" "}
          <span className="text-gsm-blue underline underline-offset-4 decoration-gsm-yellow">
            Team
          </span>
        </p>
        <p className="font-medium lg:text-lg">
          Our team is our greatest asset. From seasoned architects to skilled
          craftsmen, each member brings expertise and passion to every project.
          Get to know the people who will be bringing your vision to life.
        </p>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:max-w-screen-xl">
        {teamMembers.map((teamMember, index) => {
          return (
            <div key={index}>
              <div className="relative pb-[28rem] sm:pb-80 md:pb-96 mx-6 mb-4 rounded shadow lg:mx-0">
                <Image
                  className="absolute object-cover w-full h-full rounded"
                  src={teamMember.src}
                  alt={teamMember.name}
                  width={1280}
                  height={720}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-xl font-bold text-gsm-blue">
                  {teamMember.name}
                </p>
                <p className="mb-2 font-medium text-lg text-gsm-black">
                  {teamMember.title}
                </p>
                {/* <div className="flex items-center space-x-3 justify-center">
                  <Link
                    href={teamMember.twitter}
                    className="text-gsm-yellow transition-colors duration-300 hover:text-gsm-blue"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="xl"
                      height={14}
                    />
                  </Link>
                  <Link
                    href={teamMember.linkedIn}
                    className="text-gsm-yellow transition-colors duration-300 hover:text-gsm-blue"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="xl"
                      height={14}
                    />
                  </Link>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div>
      <Title
        title={"About Us"}
        src={"/about-us.jpg"}
      />
      <Founded />
      <Statistics />
      <MissionAndVision />
      {/* <Team /> */}
    </div>
  );
}
