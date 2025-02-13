"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HreflangTags() {
  const pathname = usePathname();
  const baseUrl = "https://www.lanstitut.com";

  const languages = [
    { code: "en", url: `${baseUrl}${pathname}` },
    { code: "de", url: `${baseUrl}/de${pathname}` },
    { code: "fr", url: `${baseUrl}/fr${pathname}` },
  ];

  useEffect(() => {
    languages.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang.code;
      link.href = lang.url;
      document.head.appendChild(link);
    });

    return () => {
      document.querySelectorAll('link[rel="alternate"]').forEach((link) => link.remove());
    };
  }, [pathname]);

  return null;
}
