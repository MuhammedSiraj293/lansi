import { generateSEO } from "@/lib/seo";
import IconCombo from "@/components/Home/IconCombo";
import Flairs from "@/components/Home/Flairs";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Home/CTA";
import Roles from "@/components/Placements/Roles";
import Benefits from "@/components/Placements/Benefits";
import Roadmap from "@/components/Placements/Roadmap";
import Footer from "@/components/Common/Footer";
import { getPlacementData } from "@/lib/placement";  
import { generateMetadata } from "./metadata";
export { generateMetadata };

export default async function PlacementsPage({ params }) {
  const { placementSlug } = params;

  // Fetch data dynamically based on the placementSlug
  const placementData = await getPlacementData(placementSlug);  // Example fetch function

  const categories = placementData.categories.name  || [];
  const benefitsList = placementData.benefitsList || [];
  const servicesList = placementData.servicesList || [];

  return (
    <div className="">
      <div className="first-card w-100 position-relative">
        <Flairs />
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "90vh" }}>
          <IconCombo name="Lanstitut" />
          <div className="my-3" />
          <h1 className="linear-text page-heading2 text-center">
            Secure your Job <br /> Placement Globally
          </h1>
          <p className="mt-md-5 mt-3">Achieve Your Global Nursing Career Goals with Our Job Placement Support.</p>
          <div className="my-3" />
          <div className="row w-100 d-flex justify-content-center" style={{ maxWidth: "800px" }}>
            {categories.map((i) => (
              <div className="col-md-3 col-dm-4 col-6" key={i}>
                <Roles role={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
        {benefitsList.map((benefit) => (
          <div className="col-md-6 col-12 px-3 mb-3" key={benefit.title}>
            <Benefits title={benefit.title} description={benefit.description} featureImage={benefit.featureImage} />
          </div>
        ))}
      </div>
      <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
        {servicesList.map((benefit) => (
          <div className="col-md-6 col-12 px-3 mb-3" key={benefit.title}>
            <Benefits title={benefit.title} description={benefit.description} featureImage={benefit.featureImage} />
          </div>
        ))}
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
