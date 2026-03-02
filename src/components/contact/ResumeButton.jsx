import GlowButton from "../ui/GlowButton.jsx";

export default function ResumeButton() {
  return (
    <div className="mt-6">
      <GlowButton
        href="https://drive.google.com/file/d/1b66Fa1_6cbU0AwCxIFpAMRvtc4vfazIy/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </GlowButton>
    </div>
  );
}
