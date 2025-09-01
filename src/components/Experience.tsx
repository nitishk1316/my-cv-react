import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import ExperienceItem from "./ExperienceItem";
import type { Experience } from "../types";

export default function Experience(props: { experiences: Experience[] }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="experience" className="experience section py-5">
			<Container>
				<h3 className="h3 header-line">Professional Experience</h3>
				{props.experiences?.map((exp, idx) => (
					<ExperienceItem key={idx} {...exp} />
				))}
      </Container>
    </section>
  );
}
