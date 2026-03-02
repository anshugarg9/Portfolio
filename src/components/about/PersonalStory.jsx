import { motion } from "framer-motion";

const story = [
  "I am a Software Developer Engineer at Infosys (Apple Client Projects), maintaining and enhancing a Java microservices platform with 7+ services.",
  "My work focuses on Spring Boot, Spring MVC, and Spring Data JPA with Angular UIs, including migrations from JAX-RS to Spring and API performance improvements.",
  "I earned a B.Tech in ECE from Dr BR Ambedkar National Institute Of Technology, Jalandhar (2020–2024), and I enjoy building solid, testable systems with JUnit and Mockito."
];

export default function PersonalStory() {
  return (
    <div className="space-y-4 text-foreground-muted">
      {story.map((line, index) => (
        <motion.p
          key={line}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}
