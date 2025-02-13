import IconCombo from "@/components/Home/IconCombo";
import Flairs from "@/components/Home/Flairs";
import "bootstrap/dist/css/bootstrap.min.css";
import CTA from "@/components/Home/CTA";
import Benefits from "@/components/Placements/Benefits";

const page = ({ params }) => {
  const { slug, level } = params;
  return (
    <div className="">
      <div className="first-card w-100 position-relative">
        <Flairs />
        <div
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="my-3" />
          <div className="d-flex align-items-end">
            <h1 className="linear-text page-heading2 text-start p-0 m-0">
              {level}
            </h1>
            <h4 className="linear-text text-start">{slug.toUpperCase()}</h4>
          </div>
          <p className="mt-md-5 mt-3">
            Meistern Sie Deutsch mit unseren gezielten Kursen für medizinisches
            Fachpersonal.
            <br />
            Verbessern Sie Ihre Karriere weltweit – beginnen Sie noch heute!
          </p>
          <div className="my-3" />
        </div>
      </div>
      <div className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center">
        <Flairs />

        <div>
          <IconCombo />
          <h2 className="component-title">
            Our Academic
            <br />
            <span className="primary-color">Programes</span>
          </h2>
          <p
            className="para p-2 "
            style={{
              maxWidth: "1200px",
            }}
          >
            We offer a diverse range of German language courses designed to meet
            your specific needs, whether you're a beginner embarking on your
            language journey or an advanced learner seeking to refine your
            skills.
          </p>
        </div>
        <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
          <div className="col-md-6 col-12 px-3 mb-3">
            <Benefits
              title="10x your current Salary"
              featureImage="/assets/Placements/Benefits/10x.svg"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, answered instantly."
            />
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default page;
