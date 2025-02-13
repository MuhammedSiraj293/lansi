import IconCombo from "@/components/Home/IconCombo";
import Flairs from "@/components/Home/Flairs";
import FeatureCard from "@/components/Home/FeatureCard";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Home/CTA";
import CountriesComponent from "@/components/Language/CountriesComponent";
import CecrMethodTile from "@/components/Language/CecrMethodTile";
import Footer from "@/components/Common/Footer";
import FAQSchema from "@/components/Schemas/faqSchema";
const countries = [
  {
    name: "Spanish",
    src: "/assets/Language/Spanish.svg",
  },
  {
    name: "German",
    src: "/assets/Language/German.svg",
  },
  {
    name: "French",
    src: "/assets/Language/French.svg",
  },
  {
    name: "Italian",
    src: "/assets/Language/Italian.svg",
  },
];

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

export default function Language() {
  return (
    <div className="">
      <div className="first-card w-100 position-relative">
        <Flairs />
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <IconCombo name="Lanstitut" />
          <div className="my-1" />
          <h1 className="linear-text page-heading2 text-center">
            Your Complete
            <br />
            Language Partner
          </h1>
          <p className="mt-3">
            Join healthcare professionals around the world, open doors to
            <br />
            International job and educational opportunities.
          </p>
          <div className="my-3" />
          <div
            className="row w-100 d-flex justify-content-center"
            style={{
              maxWidth: "800px",
            }}
          >
            {countries.map((country) => (
              <div className="col-md-4 col-6 mb-3" key={country.name}>
                <CountriesComponent src={country.src} name={country.name} />
              </div>
            ))}
            <div className="col-md-4 col-6 mb-3">
              <CountriesComponent manyMore />
            </div>
          </div>
          <div className="d-flex justify-content-center w-100">
            <div className="d-flex justify-content-center flex-column">
              <button className="btn btn-primary mt-md-3 px-5 py-2">
                Talk to Our Language Expert
              </button>
              <span className="pt-3 text-center">Learn more</span>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center">
        <Flairs />
        <div>
          <IconCombo />
          <h2 className="component-title">
            The Famous
            <br />
            <span className="primary-color">CECR Method</span>
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
        <div className="container">
          <div className="row">
            <div className="col-12">
              <CecrMethodTile
                bgColor="rgba(4, 83, 149, 0.50)"
                isOpened
                title="A : BEGINNER"
                firstlevelheading="Level A1:"
                firstleveldesc="Can understand and use familiar, everyday expressions and very simple sentences, which relate to the satisfying of concrete needs. Can introduce him/herself and others as well as ask others about themselves."
                secondlevelheading="Level A2:"
                secondleveldesc="Can understand sentences and commonly used expressions associated with topics directly related to his/her direct circumstances. Can make him/herself understood in simple, routine situations dealing with a simple and direct exchange of information on familiar and common topics."
              />
            </div>
            <div className="col-12">
              <CecrMethodTile
                bgColor="rgba(4, 83, 149, 0.75)"
                title="B : INTERMEDIATE"
                firstlevelheading="Level B1:"
                firstleveldesc="Can understand the main points when clear, standard language is used and the focus is on familiar topics associated with work, school, leisure time, etc. Can deal with most situations typically encountered when traveling in the language region."
                secondlevelheading="Level B2:"
                secondleveldesc="Can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in his/her field of specialization."
              />
            </div>
            <div className="col-12">
              <CecrMethodTile
                bgColor="#045395"
                title="C : PROFICIENT"
                firstlevelheading="Level C1:"
                firstleveldesc="Can understand a wide range of demanding, longer texts, and recognize implicit meaning. Can express him/herself fluently and spontaneously without much obvious searching for expressions."
                secondlevelheading="Level C2:"
                secondleveldesc="Can understand with ease virtually everything heard or read. Can summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation."
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ marginTop: "100px" }}
      >
        <Flairs />
        <div>
          <IconCombo />
          <h2 className="component-title mt-2">
            Unlock Your
            <br />
            <span className="primary-color">Language Potential</span>
          </h2>
        </div>
        <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
          <div className="col-md-6 col-12 mb-3">
            <FeatureCard
              bgColor="rgba(255,255,255, 0.75)"
              title="Learn Anytime, Anywhere"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, participate in interactive sessions, and get your questions answered instantly."
              featureImage="/assets/Language/Feature1.svg"
            />
          </div>
          <div className="col-md-6 col-12 mb-3">
            <FeatureCard
              bgColor="rgba(255,255,255, 0.75)"
              title="Personalized Learning Experience"
              description="Stay on top of your progress with our individual performance tracking system. Receive detailed feedback, track your improvements, and get personalized recommendations to help you achieve your language learning goals efficiently."
              featureImage="/assets/Language/Feature2.svg"
            />
          </div>
          <div className="col-md-6 col-12 mb-3">
            <FeatureCard
              bgColor="rgba(255,255,255, 0.75)"
              title="Be Exam-Ready"
              description="Prepare for language proficiency exams with confidence. Our exam preparation sessions, complete with mock tests, simulate real exam conditions and provide you with the practice you need to excel."
              featureImage="/assets/Language/Feature3.svg"
            />
          </div>
          <div className="col-md-6 col-12 mb-3">
            <FeatureCard
              bgColor="rgba(255,255,255, 0.75)"
              title="Never Miss a Lesson"
              description="Revisit and review your classes at any time with our recorded sessions. This feature allows you to reinforce your learning, revise key concepts, and ensure you have a thorough understanding of the material."
              featureImage="/assets/Language/Feature4.svg"
            />
          </div>
        </div>
      </div>
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ marginTop: "100px" }}
      >
        <div>
          <h2 className="component-title mt-2">
            Few of the <br />
            <span className="primary-color">Commonly Asked Questions</span>
          </h2>
        </div>
        <FAQSchema />
        <FAQs />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
