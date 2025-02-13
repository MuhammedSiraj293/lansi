const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.lanstitut.com";

export const generateSEO = ({ title, description, slug, type = "website", images, keywords, canonical }) => {
  const finalCanonical = canonical || `${baseUrl}/${slug}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: finalCanonical,
    },
    authors: [{ name: "Lanstitut Team" }],
    robots: {
      index: true,
      follow: true,
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    openGraph: {
      title,
      description,
      url: finalCanonical,
      type,
      images,
      locale: "en_US",
      siteName: "Lanstitut",
    },
    twitter: {
      card: "summary_large_image",
      site: "@Lanstitut",
      title,
      description,
      images,
    },
  };
};
