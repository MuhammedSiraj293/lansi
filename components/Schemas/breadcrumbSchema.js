"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbs = pathSegments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: decodeURIComponent(segment.replace(/-/g, " ")), 
      item: `https://www.lanstitut.com/${pathSegments.slice(0, index + 1).join("/")}`,
    }));

    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.lanstitut.com",
        },
        ...breadcrumbs,
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(breadcrumbList);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [pathname]);

  return null; 
}
