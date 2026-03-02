import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa6";
import { personal } from "../../data/personal.js";

const linkItems = [
  { label: "GitHub", icon: FaGithub, href: personal.socials.github },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/anshu-garg-3835b6373"
  }
].filter((link) => Boolean(link.href));

const staticItems = [
  { label: "Email", icon: FaEnvelope, value: "garg.anshu0007@gmail.com" },
  { label: "Phone", icon: FaPhone, value: "+91-7710392005" }
];

export default function SocialLinks() {
  return (
    <div className="mt-6 space-y-4">
      {linkItems.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            className="flex items-center gap-3 text-sm text-foreground-muted transition hover:text-foreground"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-background-tertiary/70 text-accent">
              <Icon />
            </span>
            {link.label}
          </a>
        );
      })}
      {staticItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="flex items-center gap-3 text-sm text-foreground-muted"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-background-tertiary/70 text-accent">
              <Icon />
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
                {item.label}
              </span>
              <span className="text-sm text-foreground">{item.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
