import { useState } from "react";
import emailjs from "@emailjs/browser";
import GlowButton from "../ui/GlowButton.jsx";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_EMAIL =
  import.meta.env.VITE_EMAIL_TO_EMAIL || "garg.anshu0007@gmail.com";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "").trim();

    const emailValue = email.trim();

    if (!name || !emailValue || !message) {
      setSendStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setSendStatus("error");
      setErrorMsg("Please enter a valid email.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSendStatus("error");
      setErrorMsg(
        "Email is not set up yet. Add EmailJS keys in .env.local and restart the dev server."
      );
      return;
    }

    setIsSending(true);
    setSendStatus("idle");
    setErrorMsg("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          email,
          message,
          to_email: TO_EMAIL
        },
        { publicKey: PUBLIC_KEY }
      );
      setSendStatus("success");
      form.reset();
    } catch (error) {
      setSendStatus("error");
      setErrorMsg("Failed to send. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className="glass-card flex flex-col gap-4 rounded-3xl p-8"
      onSubmit={handleSubmit}
    >
      <label className="text-xs uppercase tracking-[0.3em] text-foreground-muted">
        Name
        <input
          className="mt-2 w-full rounded-2xl border border-border/70 bg-background-tertiary/60 px-4 py-3 text-sm text-foreground"
          name="name"
          placeholder="Your name"
          required
        />
      </label>
      <label className="text-xs uppercase tracking-[0.3em] text-foreground-muted">
        Email
        <input
          className="mt-2 w-full rounded-2xl border border-border/70 bg-background-tertiary/60 px-4 py-3 text-sm text-foreground"
          name="email"
          type="email"
          placeholder="you@email.com"
          required
        />
      </label>
      <label className="text-xs uppercase tracking-[0.3em] text-foreground-muted">
        Message
        <textarea
          className="mt-2 min-h-[140px] w-full rounded-2xl border border-border/70 bg-background-tertiary/60 px-4 py-3 text-sm text-foreground"
          name="message"
          placeholder="Tell me about the role or project."
          required
        />
      </label>
      <div className="pt-2">
        <GlowButton as="button" type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </GlowButton>
        {sendStatus === "success" ? (
          <p className="mt-3 text-xs text-emerald-400">Message sent!</p>
        ) : null}
        {sendStatus === "error" ? (
          <p className="mt-3 text-xs text-red-400">{errorMsg}</p>
        ) : null}
      </div>
    </form>
  );
}
