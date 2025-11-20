import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";
import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Commercial Renovation",
  description:
    "Specialized renovation solutions for businesses, focusing on brand alignment, space optimization, and modernization.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/commercial-renovation",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/commercial-renovation`,
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

    "Office Refurbishment",
    "Commercial Upgrades",
    "Business Renovation",
    "Workspace Remodeling",
    "Commercial Interior Design",
    "Office Fit-Out",
    "Retail Renovation",
    "Commercial Contractors",
    "Storefront Remodel",
    "Corporate Interior Renovation",

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

export default function CommercialRenovation() {
  const commercialRenovationFeatures = [
    "Office space planning & cubicle installation",
    "Retail store layout & display design",
    "HVAC system upgrades",
    "Lighting & electrical improvements",
    "Compliance with building codes & regulations",
    "Commercial-grade flooring & finishes",
    "Accessibility enhancements",
  ];

  return (
    <div>
      <Title
        title={"Commercial Renovation"}
        src={"/services/commercial-renovation.jpg"}
      />
      <ServiceDetail
        title={"Business Transformed:"}
        underlined={"Expert Commercial Solutions."}
        description={pageMetadata.description}
        tagLine={"Commercial Services"}
        features={commercialRenovationFeatures}
        src={"/services/commercial-renovation-1.jpg"}
      />
    </div>
  );
}
