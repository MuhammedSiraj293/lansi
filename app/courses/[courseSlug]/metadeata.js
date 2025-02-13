import { generateSEO } from "@/lib/seo";
export async function generateMetadata({ params }) {
  const { courseSlug } = params;
  const courseData = {
    title: `B2 ${courseSlug} Course for Nurses | Lanstitut`,
    description: `Master ${courseSlug} with expert trainers at Lanstitut. Secure your global job placement.`,
    keywords: `${courseSlug}, language course, Lanstitut, global placement`,
    slug: `courses/${courseSlug}`,
    images: `https://images.pexels.com/photos/14928820/pexels-photo-14928820.jpeg`
  }
  
  return generateSEO( {
    title: courseData.title,
    description: courseData.description,
    slug: courseData.slug,
    keywords: courseData.keywords,
    images: courseData.images,
    canonical: `https://www.lanstitut.com/courses/${courseSlug}`,
    
  });
}