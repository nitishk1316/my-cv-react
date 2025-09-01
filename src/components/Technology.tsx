import type { TitleList } from "../types";

export default function Technology(props: { technologies: TitleList[] }) {

  return (
		<section id="technology" className="section technology py-5">
			<div className="container">
				<h3 className="h3 header-line">Technical Skills</h3>
				{props.technologies?.map((exp, idx) => (
					<div key={idx} className="pb-4">
						<h3 className="sub-header">{exp['title']}</h3>
						{exp['list'].map((tech, idx2) => (
							<span className="badge" key={idx2}>{tech}</span>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
