import IconCombo from "@/components/Home/IconCombo";
import Flairs from "@/components/Home/Flairs";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Home/CTA";
import Roles from "@/components/Placements/Roles";
import Benefits from "@/components/Placements/Benefits";
import Roadmap from "@/components/Placements/Roadmap";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const websiteDomain = "https://lanstitut.com";

  const pageData = {
    heading: "Lanstitut",
    description: "Secure your Job Placement Globally",
    tags: "Secure, Job, Placement, Globally",
    author: "Lanstitut",
    currentPathName: `language/${slug}`,
    // metaData: {
    //   blogOptionImg: thumbnail
    //     ? urlFor(thumbnail)?.url()
    //     : urlFor(mainImage).url(),
    //   urlTitle: slug,
    //   authorEmail: "lanstitut@gmail.com",
    // },
  };

  return {
    title: pageData.heading,
    keywords: pageData.tags,
    description: pageData.description,

    generator: "Next.js",
    applicationName: "Dview",
    referrer: "origin-when-cross-origin",
    // authors: [
    //   { name: "Dview" },
    //   {
    //     name: pageData.author,
    //     email: pageData.metaData.authorEmail,
    //     url: "https://dview.io",
    //   },
    // ],
    publisher: "Lanstitut",
    catogery: "Technology",

    metadataBase: `${websiteDomain}/blog`,
    alternates: {
      canonical: `${websiteDomain}/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      imageIndex: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },

    // og tags
    openGraph: {
      title: pageData.heading,
      description: pageData.description,
      type: "article",
      url: `${websiteDomain}/language/${slug}`,
      //   images: {
      //     url: pageData.metaData.blogOptionImg,
      //     width: 1200,
      //     height: 630,
      //     alt: pageData.heading,
      //   },
      author: "Dview",
      site_name: "Dview",
      canonical: `${websiteDomain}/language/${slug}`,
    },

    // twitter tags
    twitter: {
      card: "summary_large_image",
      title: pageData.heading,
      description: pageData.description,
      site: "@DviewTech",
      creator: "@DviewTech",
      //   images: {
      //     url: pageData.metaData.blogOptionImg,
      //     alt: pageData.metaData.blogOptionImg,
      //   },
    },

    verification: {
      google: "google",
      bing: "bing",
      yandex: "yandex",
      baidu: "baidu",
      norton: "norton",
      yahoo: "yahoo",
      pinterest: "pinterest",
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
      instagram: "instagram",
      apple: "apple",
      android: "android",
      alexa: "alexa",
      yandexVerification: "yandexVerification",
      msvalidate: "msvalidate",
      pinterestVerification: "pinterestVerification",
      twitterVerification: "twitterVerification",
      linkedinVerification: "linkedinVerification",
      instagramVerification: "instagramVerification",
      facebookVerification: "facebookVerification",
      googleVerification: "googleVerification",
      bingVerification: "bingVerification",
      nortonVerification: "nortonVerification",
      appleVerification: "appleVerification",
      androidVerification: "androidVerification",
      alexaVerification: "alexaVerification",
      other: {
        me: ["contact@lanstitut.io", "https://lanstitut.com"],
      },
      //   applinks: {
      //     web: {
      //       url: "https://cloud.dview.io",
      //       should_fallback: true,
      //     },
      //   },
    },
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default async function Language({ params }) {
  console.log(params);

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
            {capitalize(params.slug)}
            <br />
            Meistere Deutsch mit
            <br />
            Lanstitut
          </h1>
          <p className="mt-md-5 mt-3">
            Meistern Sie Deutsch mit unseren gezielten Kursen für medizinisches
            Fachpersonal.
            <br />
            Verbessern Sie Ihre Karriere weltweit – beginnen Sie noch heute!
          </p>
          <div className="my-3" />
          <div
            className="row w-100 d-flex justify-content-center"
            style={{
              maxWidth: "800px",
            }}
          >
            {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
              <div className="col-3">
                <Roles />
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
}
