import { ServiceDetail } from "@/components/ServiceDetail";
import Title from "@/components/Title";

import { type Metadata } from "next";
import { siteConfig } from "@/configs/site";

const pageMetadata = {
  title: "Tiling",
  description:
    "Elevate your interiors with precision and style using our expert tiling services, offering a wide selection of materials and patterns for customized designs.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services/tiling",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services/tiling`,
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

    "Tile Installation",
    "Ceramic Tiles",
    "Porcelain Tile",
    "Mosaic Tiling",
    "Grout and Tile",
    "Backsplash Design",
    "Bathroom Tiles",
    "Kitchen Tile Flooring",
    "Tiling Patterns",
    "Tile Repair",

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

export default function Tiling() {
  const tilingFeatures = [
    "Surface preparation & leveling",
    "Tile selection & layout design",
    "Tile cutting & installation",
    "Grouting & sealing",
    "Backsplash installation",
    "Repair or replacement of damaged tiles",
  ];

  return (
    <div>
      <Title
        title={"Tiling"}
        src={"/services/tiling.jpg"}
      />
      <ServiceDetail
        title={"Tile by Tile, Style Unveiled:"}
        underlined={"Expert Tiling Transformations."}
        description={pageMetadata.description}
        tagLine={"Tiling Services"}
        features={tilingFeatures}
        src={"/services/tiling-1.jpg"}
      />
    </div>
  );
}
