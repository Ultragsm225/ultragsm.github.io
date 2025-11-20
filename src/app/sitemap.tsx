import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/design`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/residential-renovation`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/commercial-renovation`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/kitchen-renovation`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/bathroom-renovation`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/flooring`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/tiling`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/glazing`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/landscaping`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/services/painting`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
