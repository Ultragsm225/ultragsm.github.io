import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";
import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Kitchen Renovation",
  description:
    "Custom kitchen makeovers, from cabinetry to countertops, designed for both style and practicality.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/kitchen-renovation",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/kitchen-renovation`,
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

    "Kitchen Remodeling",
    "Cabinet Refacing",
    "Countertop Installation",
    "Kitchen Upgrades",
    "Custom Kitchen Design",
    "Appliance Replacement",
    "Kitchen Flooring",
    "Modern Kitchen Renovation",
    "Kitchen Makeover",
    "Functional Kitchen Design",

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

export default function KitchenRenovation() {
  const kitchenRenovationFeatures = [
    "Cabinetry design & installation",
    "Countertop selection & installation",
    "Appliance upgrades & installations",
    "Plumbing & electrical work for new fixtures",
    "Flooring replacement or refinishing",
    "Backsplash design & installation",
  ];

  return (
    <div>
      <Title
        title={"Kitchen Renovation"}
        src={"/services/kitchen-renovation.jpg"}
      />
      <ServiceDetail
        title={"Heart of the Home:"}
        underlined={"Innovative Kitchen Mastery."}
        description={pageMetadata.description}
        tagLine={"Kitchen Services"}
        features={kitchenRenovationFeatures}
        src={"/services/kitchen-renovation-1.jpg"}
      />
    </div>
  );
}
