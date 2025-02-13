import { headers } from "next/headers";
import { generateMetadata } from "../[courseSlug]/metadeata";
import CourseSchema from "@/components/Schemas/courseSchema";
export { generateMetadata };

export default function CoursePage({ params }) {
    const { courseSlug } = params;
  
    return (
      <div>
        <CourseSchema courseSlug={params.courseSlug} />
        <h1>{courseSlug.toUpperCase()} Course</h1>
        <p>Secure your global job placement with Lanstitut.</p>
      </div>
    );
  }