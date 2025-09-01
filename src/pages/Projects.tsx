
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../store/projectsSlice";
import type { RootState, AppDispatch } from "../store";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Projects() {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading, error } = useSelector((s: RootState) => s.projects);

  useEffect(() => {
    if (!projects.length) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projects.length]);

  if (loading || !projects) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <div className="project container">
      <h3 className="h3 text-center py-5">My Projects</h3>
      <Row className="gy-4">
          {projects?.map((project, idx) => (
            <Col
              key={idx}
              lg={4}
              md={6}
              data-aos-delay={(idx + 1) * 100}
            >
							<Link to={`${project.slug}`}>
								<div className="item position-relative">
									<h2 className="h2 text-h1">{project.title}</h2>
									<div className="pb-2">
										{project.shortTech?.map((tech) => (
											<span className="badge">{tech}</span>
										))}
									</div>
									<p className="description">{project.description}</p>
								</div>
								</Link>
            </Col>
          ))}
        </Row>
    </div>
  );
}
