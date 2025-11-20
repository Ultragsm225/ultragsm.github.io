import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";
import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Painting",
  description:
    "Professional interior and exterior painting services, utilizing quality materials for a durable and visually appealing finish.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/painting",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/painting`,
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

    "Interior Painting",
    "Exterior Painting",
    "Professional Painters",
    "Paint Color Consultation",
    "Surface Preparation",
    "House Painting Services",
    "Custom Paint Finishes",
    "Residential Painting",
    "Commercial Painting",
    "Painting Contractors",

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

export default function Painting() {
  const paintingFeatures = [
    "Surface preparation including sanding and patching",
    "Specialty finishes like faux painting or textured coatings",
    "Interior and exterior painting",
    "Trim and molding painting",
    "Deck and fence staining or painting",
    "Priming and sealing",
  ];

  return (
    <div>
      <Title
        title={"Painting"}
        src={"/services/painting.jpg"}
      />
      <ServiceDetail
        title={"Brushing Life In:"}
        underlined={"Vibrant Painting Services for Your Space."}
        description={pageMetadata.description}
        tagLine={"Painting Services"}
        features={paintingFeatures}
        src={"/services/painting-1.jpg"}
      />
    </div>
  );
}
