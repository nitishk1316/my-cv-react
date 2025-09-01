
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProjectById } from "../store/projectsSlice";
import type { RootState, AppDispatch } from "../store";
import ProjectDetailText from "../components/ProjectDetailText";
import ProjectDetailLink from "../components/ProjectDetailLink";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function ProjectDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { detail, loading, error } = useSelector((s: RootState) => s.projects);

	useEffect(() => {
    if (id) {
      dispatch(fetchProjectById(id));
    }
  }, [dispatch, id]);

  if (loading || !detail) return <Loader />;
  if (error) return <ErrorMessage />;

	return (
		<section id="project-detail" className="project section">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="card mb-3">
							<div className="card-body py-4">
								<h4 className="card-title h4">{detail?.title}</h4>
								<p className="card-text">{detail?.description}</p>
							</div>
						</div>
						<div className="card mb-3">
							<div className="card-body py-4">
								<h4 className="card-title h4">Technologies</h4>
								<div className="card-text">
									{detail?.technologies?.map((tech, idx) => (
										<ProjectDetailText key={idx} title={tech.title} desc={tech.desc} />
									))}
								</div>
							</div>
						</div>
						{detail?.features?.map((feature) => (
							<div className="card mb-3">
								<div className="card-body py-4">
									<h4 className="card-title h4">{feature.title}</h4>
									<div className="card-text">
										<ul>
											{feature?.list?.map((l) => (
												<li>{l}</li>
											))}
										</ul>
										</div>
								</div>
							</div>
						))}
					</div>
					<div className="col-md-3">
						<div className="card mb-3">
							<div className="card-body">
								<h4 className="card-title h4">DEMO</h4>
								<div className="card-text">
									{detail?.demos?.map((demo, idx) => (
										<ProjectDetailLink key={idx} title={demo.title} desc={demo.desc} />
									))}
								</div>
							</div>
						</div>
						<div className="card mb-3">
							<div className="card-body py-4">
								<h4 className="card-title h4">SOURCE CODE</h4>
								<div className="card-text">
									{detail?.codes?.map((code, idx) => (
										<ProjectDetailLink key={idx} title={code.title} desc={code.desc} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

  );
}
