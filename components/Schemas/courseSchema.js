"use client";
import { useEffect } from "react";

export default function CourseSchema({ courseSlug }) {
  useEffect(() => {
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": `B2 ${courseSlug} Course for Nurses | Lanstitut`,
      "description": `Master ${courseSlug} with expert trainers at Lanstitut. Secure your global job placement.`,
      "provider": {
        "@type": "Organization",
        "name": "Lanstitut",
        "url": "https://www.lanstitut.com",
        "logo": "https://www.lanstitut.com/logo.png"
      },
      "educationalCredentialAwarded": "Certification",
      "courseMode": "Online",
      "url": `https://www.lanstitut.com/courses/${courseSlug}`,
      "keywords": `${courseSlug}, language course, Lanstitut, global placement`,
      "startDate": "2025-03-01",
      "endDate": "2025-06-30",
      "instructor": {
        "@type": "Person",
        "name": "siraj",
        "url": "https://www.lanstitut.com/instructor/john-doe"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Healthcare professionals",
        "geographicArea": {
          "@type": "Place",
          "name": "Germany"
        }
      },
      "image": "https://images.pexels.com/photos/14928820/pexels-photo-14928820.jpeg"
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(courseSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [courseSlug]);

  return null; 
}
