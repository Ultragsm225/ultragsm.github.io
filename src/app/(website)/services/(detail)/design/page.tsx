import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";
import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Design",
  description:
    "Tailored architectural and interior design services to bring your unique vision to life with creativity and precision.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/design",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/design`,
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
  keywords: [
    "Ultra GSM Construction",
    "Ultra GSM",
    "General Contractor",
    "Renovation",

    "Interior Design",
    "Architectural Planning",
    "Creative Concepts",
    "Space Optimization",
    "Customization",
    "Aesthetic Design",
    "Interior Decor",
    "Functional Layout",
    "Innovative Ideas",
    "Design Consultation",

    "Vancouver",
    "Surrey",
    "Burnaby",
    "Richmond",
    "Abbotsford",
    "Coquitlam",
    "Kelowna",
    "Langley",
    "Delta",
    "North Vancouver",
    "Chilliwack",
    "Maple Ridge",
    "New Westminster",
    "Port Coquitlam",
    "Mission",
    "West Kelowna",
    "White Rock",
    "Port Moody",
  ],
};

export default function Design() {
  const designFeatures = [
    "Conceptualizing & construction design drawings",
    "Interior space planning & layout design",
    "Selection of color schemes, materials & finishes",
    "Custom furniture & fixture design",
    "Lighting design & placement",
    "3D modeling & virtual walkthroughs",
  ];

  return (
    <div>
      <Title
        title={"Design"}
        src={"/services/design.jpg"}
      />
      <ServiceDetail
        title={"Vision to Reality:"}
        underlined={"Crafted Design Solutions for Every Space."}
        description={pageMetadata.description}
        tagLine={"Design Services"}
        features={designFeatures}
        src={"/services/design-1.jpg"}
      />
    </div>
  );
}
