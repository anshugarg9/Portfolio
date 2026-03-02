import SectionHeading from "../ui/SectionHeading.jsx";
import ContactForm from "./ContactForm.jsx";
import SocialLinks from "./SocialLinks.jsx";
import ResumeButton from "./ResumeButton.jsx";
import GradientDivider from "../ui/GradientDivider.jsx";

export default function ContactSection() {
  return (
    <div>
      <SectionHeading
        title="Contact"
        subtitle="Let’s connect about backend services, microservices, and Java platform work."
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground-muted">
            Let’s connect
          </h3>
          <SocialLinks />
          <GradientDivider />
          <ResumeButton />
        </div>
      </div>
    </div>
  );
}
