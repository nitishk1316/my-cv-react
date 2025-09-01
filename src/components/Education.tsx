import type { Education } from "../types";

export default function Education(props: { education:  Education }) {
  return (
    <section id="education" className="education section py-5">
			<div className="container">
				<h3 className="h3 header-line">Education</h3>
				<h4 className="text-h1">{props.education?.title}</h4>
				<h4 className="text-h2">{props.education?.college}</h4>
      	<h4 className="text-h3">{props.education?.date}</h4>
			</div>
		</section>
  );
}