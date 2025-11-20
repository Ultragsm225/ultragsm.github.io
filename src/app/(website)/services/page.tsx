import { ServicesGrid } from "@/components/ServicesGrid";
import Title from "@/components/Title";
import { siteConfig } from "@/configs/site";
import { type Metadata } from "next";

const pageMetadata = {
  title: "Services",
  description:
    "We offer specialized design-build services to ensure a seamless transition from conception to completion.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/services",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/services`,
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
  keywords: [],
};

export default function Services() {
  return (
    <div>
      <Title
        title={"Services"}
        src={"/services.jpg"}
      />
      <ServicesGrid />
    </div>
  );
}
