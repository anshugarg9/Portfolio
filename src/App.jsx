import { Helmet } from "react-helmet-async";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import SectionWrapper from "./components/layout/SectionWrapper.jsx";
import CursorGlow from "./components/layout/CursorGlow.jsx";
import HeroSection from "./components/hero/HeroSection.jsx";
import AboutSection from "./components/about/AboutSection.jsx";
import ProjectsSection from "./components/projects/ProjectsSection.jsx";
import SkillsSection from "./components/skills/SkillsSection.jsx";
import ExperienceSection from "./components/experience/ExperienceSection.jsx";
import ContactSection from "./components/contact/ContactSection.jsx";

const sections = [
  { id: "about", title: "About", component: AboutSection },
  { id: "projects", title: "Projects", component: ProjectsSection },
  { id: "skills", title: "Skills", component: SkillsSection },
  { id: "experience", title: "Experience", component: ExperienceSection },
  { id: "contact", title: "Contact", component: ContactSection }
];

export default function App() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Anshu Garg | Software Developer Engineer</title>
        <meta
          name="description"
          content="Cinematic portfolio of Anshu Garg, Software Developer Engineer building Java microservices, Spring Boot APIs, and Angular enterprise experiences."
        />
        <link rel="canonical" href={baseUrl} />
        <meta
          property="og:title"
          content="Anshu Garg | Software Developer Engineer"
        />
        <meta
          property="og:description"
          content="Projects and experience in Spring Boot microservices, REST APIs, and Angular platforms at Infosys."
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Anshu Garg | Software Developer Engineer"
        />
        <meta
          property="twitter:description"
          content="Software Developer Engineer focused on Java, Spring Boot, microservices, and Angular."
        />
      </Helmet>
      <CursorGlow />
      <Navbar sections={[{ id: "hero", title: "Home" }, ...sections]} />
      <main>
        <HeroSection />
        {sections.map((section) => {
          const SectionComponent = section.component;
          return (
            <SectionWrapper id={section.id} key={section.id}>
              <SectionComponent />
            </SectionWrapper>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
