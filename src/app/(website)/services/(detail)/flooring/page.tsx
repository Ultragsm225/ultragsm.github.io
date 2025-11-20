import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";
import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Flooring",
  description:
    "Transform your space with our diverse range of high-quality flooring solutions, from timeless hardwood to modern, low-maintenance alternatives.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/flooring",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/flooring`,
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

    "Flooring Installation",
    "Hardwood Floors",
    "Laminate Flooring",
    "Tile Flooring",
    "Carpet Installation",
    "Floor Refinishing",
    "Floor Restoration",
    "Flooring Materials",
    "Quality Flooring",
    "Floor Repair",

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

export default function Flooring() {
  const flooringFeatures = [
    "Subfloor preparation & repairs",
    "Installation of hardwood, laminate, tile, or carpet",
    "Floor sanding, staining, & finishing",
    "Moisture barrier installation",
    "Baseboard & trim installation",
    "Floor sealing or waxing",
  ];

  return (
    <div>
      <Title
        title={"Flooring"}
        src={"/services/flooring.jpg"}
      />
      <ServiceDetail
        title={"Beneath Your Feet:"}
        underlined={"Quality Flooring Solutions for Every Space."}
        description={pageMetadata.description}
        tagLine={"Flooring Services"}
        features={flooringFeatures}
        src={"/services/flooring-1.jpg"}
      />
    </div>
  );
}
