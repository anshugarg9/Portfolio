import GlowButton from "../ui/GlowButton.jsx";

export default function ResumeButton() {
  return (
    <div className="mt-6">
      <GlowButton
        href="https://drive.google.com/file/d/1dmg1JfDH4vZiaB3MW8fK5rDZjBLWCzM0/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </GlowButton>
    </div>
  );
}
