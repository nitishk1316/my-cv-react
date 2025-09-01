import type { TitleDesc } from "../types";

export default function ProjectDetailLink({ title, desc }: TitleDesc) {
  return (
    <div className="mb-4">
			<h5 className="card-title h6 fw-bold">{title}</h5>
			<h6>
			<a href={desc} target="_blank">{desc}</a>
		</h6>
		</div>
  );
}
