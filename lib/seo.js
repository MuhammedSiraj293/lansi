const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://lanstitut.com";

export const generateSEO = ({ title, description, slug, type = "website", images, keywords, canonical }) => {
  const cleanSlug = typeof slug === "string" ? slug : ""; 
  const finalCanonical = canonical || `${baseUrl}/${cleanSlug}`; 

  return {
    title,
    description,
    keywords,
    canonical: finalCanonical, 
    author: "Lanstitut Team",
    robots: "index, follow",
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${slug}`,
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
    robots: {
      index: true,
      follow: true,
    },
  };
};
