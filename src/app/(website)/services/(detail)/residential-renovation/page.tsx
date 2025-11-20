import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";
import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Residential Renovation",
  description:
    "Comprehensive home transformation services, enhancing living spaces for comfort, functionality, and aesthetic appeal.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/residential-renovation",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/residential-renovation`,
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

    "Home Improvement",
    "Remodeling Services",
    "House Renovation",
    "Residential Remodel",
    "Interior Refurbishment",
    "Home Upgrade",
    "Renovation Contractor",
    "Home Transformation",
    "House Restoration",
    "Modernizing Homes",

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

export default function ResidentialRenovation() {
  const residentialRenovationFeatures = [
    "Structural modifications & repairs",
    "Roofing & siding improvements",
    "Window & door replacements",
    "Insulation upgrades",
    "Flooring installation or refinishing",
    "Kitchen & bathroom remodels",
    "Painting & wallpapering",
  ];

  return (
    <div>
      <Title
        title={"Residential Renovation"}
        src={"/services/residential-renovation.jpg"}
      />
      <ServiceDetail
        title={"Home Renewed:"}
        underlined={"Tailored Renovation Excellence."}
        description={pageMetadata.description}
        tagLine={"Residential Services"}
        features={residentialRenovationFeatures}
        src={"/services/residential-renovation-1.jpg"}
      />
    </div>
  );
}
