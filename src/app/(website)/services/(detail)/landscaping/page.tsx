import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";
import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Landscaping",
  description:
    "Creating beautiful, functional outdoor spaces that complement and enhance the overall aesthetic of your property.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/landscaping",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/landscaping`,
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

    "Landscape Design",
    "Garden Planning",
    "Outdoor Spaces",
    "Hardscape Construction",
    "Lawn Care",
    "Irrigation Systems",
    "Patio Design",
    "Landscape Lighting",
    "Sustainable Landscaping",
    "Garden Maintenance",

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

export default function Landscaping() {
  const landscapingFeatures = [
    "Lawn installation or revitalization",
    "Planting trees, shrubs, & flowers",
    "Hardscaping with pathways & patios",
    "Outdoor lighting design & installation",
    "Irrigation system installation",
    "Retaining wall construction",
  ];

  return (
    <div>
      <Title
        title={"Landscaping"}
        src={"/services/landscaping.jpg"}
      />
      <ServiceDetail
        title={"Nature's Canvas:"}
        underlined={"Transformative Landscaping for Outdoor Bliss."}
        description={pageMetadata.description}
        tagLine={"Landscaping Services"}
        features={landscapingFeatures}
        src={"/services/landscaping-1.jpg"}
      />
    </div>
  );
}
