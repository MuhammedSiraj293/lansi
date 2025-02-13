"use client";
import { useEffect } from "react";

export default function JobPostingSchema() {
  const jobListings = [
    {
      title: "Registered Nurse",
      description:
        "We are looking for skilled Registered Nurses to work in top German healthcare facilities. Enjoy competitive salaries and a clear path to permanent residency.",
      employmentType: "Full-time",
      hiringOrganization: {
        name: "Lanstitut",
        website: "https://www.lanstitut.com",
      },
      jobLocation: {
        city: "Berlin",
        country: "Germany",
      },
      salary: {
        currency: "EUR",
        min: "2500",
        max: "3500",
        unit: "MONTH",
      },
      datePosted: "2024-02-12",
      validThrough: "2024-12-31",
    },
    {
      title: "Care Worker",
      description:
        "Join our team of compassionate Care Workers, supporting elderly patients in Germany. Training provided with excellent relocation benefits.",
      employmentType: "Full-time",
      hiringOrganization: {
        name: "Lanstitut",
        website: "https://www.lanstitut.com",
      },
      jobLocation: {
        city: "Munich",
        country: "Germany",
      },
      salary: {
        currency: "EUR",
        min: "2200",
        max: "3000",
        unit: "MONTH",
      },
      datePosted: "2024-02-12",
      validThrough: "2024-12-31",
    },
    {
      title: "Pharmacist",
      description:
        "Seeking qualified Pharmacists for leading German healthcare institutions. Enjoy professional growth with excellent work-life balance.",
      employmentType: "Full-time",
      hiringOrganization: {
        name: "Lanstitut",
        website: "https://www.lanstitut.com",
      },
      jobLocation: {
        city: "Hamburg",
        country: "Germany",
      },
      salary: {
        currency: "EUR",
        min: "2800",
        max: "4000",
        unit: "MONTH",
      },
      datePosted: "2024-02-12",
      validThrough: "2024-12-31",
    },
  ];

  useEffect(() => {
    jobListings.forEach((job) => {
      const jobSchema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: job.description,
        datePosted: job.datePosted,
        validThrough: job.validThrough,
        employmentType: job.employmentType,
        hiringOrganization: {
          "@type": "Organization",
          name: job.hiringOrganization.name,
          sameAs: job.hiringOrganization.website,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.jobLocation.city,
            addressCountry: job.jobLocation.country,
          },
        },
        baseSalary: {
          "@type": "MonetaryAmount",
          currency: job.salary.currency,
          value: {
            "@type": "QuantitativeValue",
            minValue: job.salary.min,
            maxValue: job.salary.max,
            unitText: job.salary.unit,
          },
        },
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(jobSchema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    });
  }, []);

  return null; 
}
