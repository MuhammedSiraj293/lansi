import { generateSEO } from "@/lib/seo"; 
export async function generateMetadata({ params }) {
  const { locationSlug, city } = params;  
  const locationData = {
    kozhikode: {
        title: `OET Coaching in  ${locationSlug} | Lanstitut`,
      description: `Master ${locationSlug} with expert trainers in Kozhikode at Lanstitut. Secure your global job placement.`,
      keywords: `${locationSlug}, language course, Lanstitut, Kozhikode, global placement`,
      images: `https://images.pexels.com/photos/14928820/pexels-photo-14928820.jpeg`
    },
    bangalore: {
        title: `OET Coaching in  ${locationSlug} | Lanstitut`,
      description: `Master ${locationSlug} with expert trainers in Bangalore at Lanstitut. Secure your global job placement.`,
      keywords: `${locationSlug}, language course, Lanstitut, Bangalore, global placement`,
      images: `https://images.pexels.com/photos/14928820/pexels-photo-14928820.jpeg`
    },
    kochi: {
      title: `OET Coaching in  ${locationSlug} | Lanstitut`,
      description: `Master ${locationSlug} with expert trainers in Kochi at Lanstitut. Secure your global job placement.`,
      keywords: `${locationSlug}, language course, Lanstitut, Kochi, global placement`,
      images: `https://images.pexels.com/photos/14928820/pexels-photo-14928820.jpeg`
    }
  };

  const cityLowerCase = city ? city.toLowerCase() : 'kozhikode';
  const cityData = locationData[cityLowerCase] || locationData.kozhikode;

  return generateSEO({
    title: cityData.title,
    description: cityData.description,
    slug: `location/${locationSlug}`, 
    keywords: cityData.keywords,
    images: cityData.images,
    canonical: `https://www.lanstitut.com/location/${locationSlug}`,
  });
}
