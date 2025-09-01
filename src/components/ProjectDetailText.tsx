import type { TitleDesc } from "../types";

export default function ProjectDetailText({ title, desc }: TitleDesc) {
  return (
    <div className="mb-4">
			<h5 className="card-title h6 fw-bold">{title}</h5>
			<h6>{desc}</h6>
		</div>
  );
}
