import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";
import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Glazing",
  description:
    "Elegant and efficient bathroom remodels, integrating modern amenities with personalized design elements.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/glazing",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/glazing`,
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

    "Window Installation",
    "Glass Repair",
    "Window Glazing",
    "Glass Replacement",
    "Double Glazing",
    "Energy-Efficient Glass",
    "Glass Balustrades",
    "Skylight Installation",
    "Glazing Services",
    "Glass Paneling",

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

export default function Glazing() {
  const glazingFeatures = [
    "Installation of windows & doors",
    "Glass partition installation",
    "Replacement of broken or foggy glass panes",
    "UV coating or tinting for energy efficiency",
    "Glass balustrade installation",
    "Skylight installation",
  ];

  return (
    <div>
      <Title
        title={"Glazing"}
        src={"/services/glazing.jpg"}
      />
      <ServiceDetail
        title={"Through Clear Panes:"}
        underlined={"Expert Glazing for Modern Aesthetics."}
        description={pageMetadata.description}
        tagLine={"Glazing Services"}
        features={glazingFeatures}
        src={"/services/glazing-1.jpg"}
      />
    </div>
  );
}
