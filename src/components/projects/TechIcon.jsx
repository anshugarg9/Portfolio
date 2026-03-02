import {
  FaJava,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaAngular,
  FaMicrosoft
} from "react-icons/fa6";
import {
  SiSpring,
  SiApachekafka,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiKubernetes
} from "react-icons/si";

const iconMap = {
  Java: FaJava,
  "Spring Boot": SiSpring,
  Kafka: SiApachekafka,
  MongoDB: SiMongodb,
  React: FaReact,
  TypeScript: SiTypescript,
  Redux: SiRedux,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Azure: FaMicrosoft,
  Angular: FaAngular,
  "Node.js": FaNodeJs
};

export default function TechIcon({ name }) {
  const Icon = iconMap[name];
  if (!Icon) return <span className="text-xs">★</span>;
  return <Icon className="text-base text-accent" />;
}


