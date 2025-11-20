import Title from "@/components/Title";
import ContactUsForm from "@/components/forms/ContactUsForm";
import { siteConfig } from "@/configs/site";
import { type Metadata } from "next";

const pageMetadata = {
  title: "Contact Us",
  description:
    "Have a question, need a quote, or want to start a project? Contact us via email info@ultragsm.ca or phone (778) 251-9457 or fill out our contact form and our team will get in touch with you promptly.",
};

export const metadata: Metadata = {
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/contact-us",
  },
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    url: `${siteConfig.url}/contact-us`,
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
};

export default function ContactUs() {
  return (
    <div>
      <Title
        title={"Contact Us"}
        src={"/contact.jpg"}
      />
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
        <div className="flex flex-col mb-10 text-center max-w-xl mx-auto">
          <p className="font-medium lg:text-xl px-6">
            Have a question, need a quote, or want to start a project? Fill out
            this form and our team will get back to you promptly.
          </p>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
}
