import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";
import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Bathroom Renovation",
  description:
    "Elegant and efficient bathroom remodels, integrating modern amenities with personalized design elements.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/bathroom-renovation",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/bathroom-renovation`,
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

    "Bathroom Remodel",
    "Shower Installation",
    "Vanity Upgrade",
    "Bathroom Tile Design",
    "Bathtub Replacement",
    "Plumbing Renovation",
    "Luxury Bathroom",
    "Spa-Inspired Bathrooms",
    "Small Bathroom Makeover",
    "Accessibility Renovations",

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

export default function BathroomRenovation() {
  const bathroomRenovationFeatures = [
    "Shower & bathtub installation or replacement",
    "Vanity & sink upgrades",
    "Toilet replacement & plumbing adjustments",
    "Tile installation for floors & walls",
    "Lighting fixture upgrades",
    "Ventilation system improvements",
  ];

  return (
    <div>
      <Title
        title={"Bathroom Renovation"}
        src={"/services/bathroom-renovation.jpg"}
      />
      <ServiceDetail
        title={"Serenity Redefined:"}
        underlined={"Luxury Bathroom Renovation."}
        description={pageMetadata.description}
        tagLine={"Bathroom Services"}
        features={bathroomRenovationFeatures}
        src={"/services/bathroom-renovation-1.jpg"}
      />
    </div>
  );
}
