import React from "react";

const RoadmapSection = ({ step, title, items }) => {
  return (
    <>
      <div className="d-flex gap-2 align-items-center text-white">
        <div
          className="p-2 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#E7B057",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        >
          {step}
        </div>
        <h3
          className="h5 fw-bold m-0 p-0 text-start"
          style={{
            lineHeight: "30px",
          }}
        >
          {title}
        </h3>
      </div>
      <div
        style={{
          marginLeft: "24px",
          borderLeft: "2px solid #E7B057",
        }}
      >
        <div className="py-2"></div>
        {items.map((item, index) => (
          <p
            key={index}
            className="normal-text text-white text-start p-0 m-0 ps-4 ms-md-2"
            style={{
              lineHeight: "2",
            }}
          >
            {item}
          </p>
        ))}
        <div className="py-3"></div>
      </div>
    </>
  );
};

const Roadmap = () => {
  const sections = [
    {
      step: 1,
      title: "Initial Consultation & Career Assessment",
      items: [
        "We begin by understanding your qualifications, skills, and career goals.",
        <>
          <b>Detailed Assessment:</b> Our team conducts a detailed assessment to
          determine the best job opportunities and pathways for you in the
          healthcare industry.
        </>,
      ],
    },
    {
      step: 2,
      title: "Language Training & Certification",
      items: [
        "Since proficiency in the German language is crucial, we provide you with the necessary training.",
        <>
          <b>Structured Modules:</b> Training includes A1-B2 level courses with
          speaking, reading, writing, and listening practice.
        </>,
      ],
    },
    {
      step: 3,
      title: "Job Matching & Placement Preparation",
      items: [
        "Based on your qualifications and language proficiency, we match you with suitable job opportunities.",
        <>
          <b>Application Assistance:</b> We assist you in preparing your CV,
          covering letters, and other necessary documents.
        </>,
      ],
    },
    {
      step: 4,
      title: "Interview Preparation & Mock Sessions",
      items: [
        "Our team will guide you through the interview process with mock interview sessions.",
        <>
          <b>Feedback and Tips:</b> We provide feedback and tips on how to
          improve your chances of securing the job.
        </>,
      ],
    },
    {
      step: 5,
      title: "Applying for Jobs & Visa Assistance",
      items: [
        "Once you’re ready, we help you apply for positions in leading hospitals in Germany.",
        <>
          <b>Visa Assistance:</b> We also provide visa assistance, including
          work and spouse visas, to ensure smooth processing of all paperwork.
        </>,
      ],
    },
    {
      step: 6,
      title: "Secure the Job Offer",
      items: [
        "Once you’ve successfully completed the interview process and received your job offer, we assist with the official paperwork.",
        <>
          <b>Finalizing Employment:</b> This includes contract signing and
          preparing for relocation.
        </>,
      ],
    },
    {
      step: 7,
      title: "Relocation & Settlement Assistance",
      items: [
        "We guide you through the relocation process, helping with accommodation arrangements and travel planning.",
        <>
          <b>Settlement Support:</b> We assist with any other necessary steps to
          settle into your new life in Germany.
        </>,
      ],
    },
    {
      step: 8,
      title: "Continuous Support & Career Development",
      items: [
        "Once you’re in Germany, we continue offering support to help you adjust to your new job and environment.",
        <>
          <b>Career Development:</b> We also provide ongoing career development
          advice to ensure you progress in your role and take advantage of
          future opportunities.
        </>,
      ],
    },
    {
      step: 9,
      title: "Permanent Residency (PR) Application",
      items: [
        "After a few years of employment and stable living in Germany, we guide you through the process of applying for Permanent Residency (PR).",
        <>
          <b>Long-term Benefits:</b> Offering you long-term benefits such as
          access to healthcare, education, and social services.
        </>,
      ],
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <RoadmapSection
          key={index}
          step={section.step}
          title={section.title}
          items={section.items}
        />
      ))}
      <div
        className="d-flex justify-content-center gap-3 pb-3 pt-4"
        style={{
          borderTop: "2px solid #E7B057",
        }}
      >
        <button
          className="btn px-4 py-1"
          style={{
            backgroundColor: "#fff",
            background: "#fff",
            width: "500px",
          }}
        >
          <p
            className="button-text primary-color m-0"
            style={{
              fontWeight: "600",
            }}
          >
            Get Started
          </p>
        </button>
        <button
          className="btn px-4 py-1"
          style={{
            backgroundColor: "#fff",
            background: "#fff",
            width: "500px",
          }}
        >
          <p
            className="button-text primary-color m-0"
            style={{
              fontWeight: "600",
            }}
          >
            Call Now
          </p>
        </button>
      </div>
    </div>
  );
};

export default Roadmap;
