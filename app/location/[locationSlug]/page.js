import { generateMetadata } from "../[locationSlug]/metadata";

export { generateMetadata };

export default function CoursePage({ params }) {
    const { locationSlug } = params;
  
    return (
      <div>
        <h1>{locationSlug.toUpperCase()} Course</h1>
        <p>Secure your global job placement with Lanstitut.</p>
      </div>
    );
  }