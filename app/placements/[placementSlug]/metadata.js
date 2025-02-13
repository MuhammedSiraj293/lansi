import { generateSEO } from "@/lib/seo";
import { getPlacementData } from "@/lib/placement";

export async function generateMetadata({ params }) {

  const { placementSlug } = params; 
  
  
  const placementData = getPlacementData(placementSlug);

  const seoData = generateSEO({
    title: placementData.title || "Default Title", 
    description: placementData.description || "Default description",  
    slug: placementSlug,
    images: placementData.images || [],
    keywords: placementData.keywords || "nursing, healthcare, placement",
    canonical: `/placements/${placementSlug}`,
  });

  return seoData;
}
