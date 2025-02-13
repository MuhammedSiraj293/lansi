import IconCombo from "@/components/Home/IconCombo";
import Flairs from "@/components/Home/Flairs";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Home/CTA";
import Roles from "@/components/Placements/Roles";
import Benefits from "@/components/Placements/Benefits";
import Roadmap from "@/components/Placements/Roadmap";
import Footer from "@/components/Common/Footer";
import JobPostingSchema from "@/components/Schemas/jobpostingSchema";
export default function Placements() {
  const categories = [
    "Nurses",
    "Ausbildung",
    "Care Workers",
    "Allied Health",
    "Doctors",
    "Optometry",
    "Radiology",
    "Pharmacist",
    "+ Many More",
  ];

  const benefitsList = [
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
  ];

  const servicesList = [
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
  ];

  return (
    <div className="">
      <div className="first-card w-100 position-relative">
        <Flairs />
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <IconCombo name="Lanstitut" />
          <div className="my-3" />
          <h1 className="linear-text page-heading2 text-center">
            Secure your Job
            <br />
            Placement Globally
          </h1>
          <p className="mt-md-5 mt-3">
            Achieve Your Global Nursing Career Goals with Our Job Placement
            Support.
          </p>
          <div className="my-3" />
          <div
            className="row w-100 d-flex justify-content-center"
            style={{
              maxWidth: "800px",
            }}
          >
            {categories.map((i) => (
              <div className="col-md-3 col-dm-4 col-6" key={i}>
                <Roles role={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center">
        <Flairs />

        <div>
          <IconCombo />
          <h2 className="component-title">
            Want to Work Abroad?
            <br />
            <span className="primary-color">
              Benefits of being nurses in germany
            </span>
          </h2>
          <p
            className="para p-2 "
            style={{
              maxWidth: "1200px",
            }}
          >
            The CEFR (Common European Framework of Reference for Languages) is
            an international standard for measuring language proficiency. It
            describes six levels, from A1 (beginner) to C2 (proficient),
            assessing abilities in reading, writing, speaking, and listening.
            <br />
            It helps learners and educators gauge and compare language skills
            across different languages.
          </p>
        </div>
        <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
          {benefitsList.map((benefit) => (
            <div className="col-md-6 col-12 px-3 mb-3" key={benefit.title}>
              <Benefits
                title={benefit.title}
                description={benefit.description}
                featureImage={benefit.featureImage}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center">
        <Flairs />

        <div
          style={{
            marginTop: "200px",
          }}
        >
          <IconCombo />
          <h2 className="component-title">
            How can we help you?
            <br />
            <span className="primary-color">Our Job Placement Services</span>
          </h2>
          <p
            className="para p-2"
            style={{
              maxWidth: "1200px",
            }}
          >
            The CEFR (Common European Framework of Reference for Languages) is
            an international standard for measuring language proficiency. It
            describes six levels, from A1 (beginner) to C2 (proficient),
            assessing abilities in reading, writing, speaking, and listening.
            <br />
            It helps learners and educators gauge and compare language skills
            across different languages.
          </p>
        </div>
        <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
          {servicesList.map((service) => (
            <div className="col-md-6 col-12 px-3 mb-3">
              <Benefits
                title={service.title}
                description={service.description}
                featureImage={service.featureImage}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center mt-5"
        style={{
          background: "#045395",
        }}
      >
        <Flairs />

        <div
          style={{
            marginTop: "100px",
          }}
        >
          <IconCombo isWhite />
          <h2
            style={{
              color: "#fff",
            }}
            className="component-title"
          >
            Step-by-Step
            <br />
            <span className="secondary-color">Guide to your Goals</span>
          </h2>
        </div>
        <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
          <Roadmap />
        </div>
      </div>

      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ marginTop: "100px" }}
      >
        <Flairs />
        <JobPostingSchema />
        <div>
          <h2 className="component-title mt-2">
            Few of the <br />
            <span className="primary-color">Commonly Asked Questions</span>
          </h2>
        </div>
        <FAQs />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
