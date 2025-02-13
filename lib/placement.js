function getPlacementData(placementSlug) {

    const placementData = {
      categories: [
        { slug: "nurses", name: "Nurses" },
        { slug: "ausbildung", name: "Ausbildung" },
        { slug: "care-workers", name: "Care Workers" },
        { slug: "allied-health", name: "Allied Health" },
        { slug: "doctors", name: "Doctors" },
        { slug: "optometry", name: "Optometry" },
        { slug: "radiology", name: "Radiology" },
        { slug: "pharmacist", name: "Pharmacist" },
      ],
      benefitsList: [
        {
            title: "Direct Recruitment",
            description:
              "Access direct recruitment with top German hospital employers, enhancing your career opportunities.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Permanent Job Security",
            description:
              "Secure permanent positions in both public and private sectors, ensuring long-term stability.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "High Salary Potential",
            description:
              "Start with a high salary of 3 lakh rupees monthly, with rapid growth potential.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Spouse Visa Support",
            description:
              "Full support for spouse visas, enabling your partner to work and settle in Germany.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "European Travel",
            description:
              "Travel freely across 28 European countries as a German resident.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Recruitment Support",
            description:
              "Comprehensive support throughout the recruitment and language training process.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Fast Track Process",
            description:
              "Complete language training and job securing within 6 to 9 months.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Permanent Residency",
            description:
              "Gain permanent residency in 2-3 years, accessing full social benefits.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Fast-Track Citizenship",
            description:
              "Become eligible for citizenship within 3-5 years with consistent residency.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Free Education and Healthcare",
            description:
              "Benefit from Germany's free education and public health services.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Positive Work Environment",
            description:
              "Work in a culture focused on teamwork, learning, and well-being.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Pension Fund Benefits",
            description:
              "Ensure a comfortable retirement with benefits from a German pension fund.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "No Additional Exams",
            description:
              "Skip exams like IELTS and OET, streamlining your move to a healthcare career in Germany.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
      ],
      servicesList: [
        {
            title: "Language Training Support",
            description:
              "Assistance in obtaining the required German language skills, from basic to advanced, to prepare you for job placement.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Paperwork & Visa Assistance",
            description:
              "Complete handling of job applications, work and spouse visas, ensuring smooth relocation.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Ongoing Job Support",
            description:
              "Continuous support post-placement, helping you adapt and succeed in your new job environment.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Employer Connections",
            description:
              "Direct access to job opportunities through our strong partnerships with top healthcare employers in Germany.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Relocation Guidance",
            description:
              "Support in all aspects of relocation, from finding housing to settling in, for a seamless transition.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Career Counseling & Growth",
            description:
              "Expert counseling to develop and implement a long-term career plan, ensuring continuous growth and satisfaction.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
          {
            title: "Placement Guarantee",
            description:
              "High success rate in job placements, focusing on long-term employment and career fulfillment.",
            featureImage: "/assets/Placements/Benefits/10x.svg",
          },
      ],

      title: "Nursing Jobs in Germany",
      description: "Join the growing demand for healthcare professionals in Germany.",
      images: ["/assets/Placements/Benefits/10x.svg"], 
      keywords: "nursing, healthcare, job placement, Germany"
    };
  
    return placementData;
  }
  
module.exports = { getPlacementData };