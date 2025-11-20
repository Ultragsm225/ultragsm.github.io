import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/configs/site";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { erasItc } from "./fonts/font";
import { Toaster } from "sonner";
import Financing from "@/components/Financing";

export const metadata: Metadata = {
  creator: siteConfig.creator,
  themeColor: "#ffffff",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: {
    absolute: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: {
      absolute: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      absolute: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    creator: "@",
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

    "Interior Design",
    "Architectural Planning",
    "Creative Concepts",
    "Space Optimization",
    "Customization",
    "Aesthetic Design",
    "Interior Decor",
    "Functional Layout",
    "Innovative Ideas",
    "Design Consultation",

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

    "Flooring Installation",
    "Hardwood Floors",
    "Laminate Flooring",
    "Tile Flooring",
    "Carpet Installation",
    "Floor Refinishing",
    "Floor Restoration",
    "Flooring Materials",
    "Quality Flooring",
    "Floor Repair",

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-US"
      className="scroll-smooth selection:bg-gsm-blue selection:text-white bg-gray-50"
    >
      <body className={erasItc.className}>
        <NavBar />
        <div className="text-gsm-black">{children}</div>
        <Toaster
          richColors
          position="top-right"
          theme="light"
        />
        <Financing />
        <Footer />
      </body>
    </html>
  );
}
