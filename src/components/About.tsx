import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { About } from "../types";

export default function About(props: {name: string, summary: string, imageUrl: string, about: About }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="section">
      <div className="container aos-init aos-animate">
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="row gy-4 justify-content-between">
              <div className="col-lg-5">
                <img src={props.imageUrl} alt="Profile" className="img-fluid rounded" />
              </div>
              <div className="col-lg-7">
                <p>
                  <strong>Name: </strong>
									<span>{props.name}</span>
                </p>
                <p>
                  <strong>Profile: </strong>
									<span>{props.about?.role}</span>
                </p>
                <p>
                  <strong>Email: </strong>
									<span>{props.about?.email}</span>
                </p>
                <p>
                  <strong>Phone: </strong>
									<span>{props.about?.mobile}</span>
                </p>
								<p>
                  <strong>Website: </strong>
									<span>
										<a href={props.about?.website} target="_blank">{props.about?.website}</a>
									</span>
                </p>
								<p>
                  <strong>Github: </strong>
									<span>
										<a href={props.about?.github} target="_blank">{props.about?.github}</a>
									</span>
                </p>
								<p>
                  <strong>Linkedin: </strong>
									<span>
										<a href={props.about?.linkedin} target="_blank">{props.about?.linkedin}</a>
									</span>
                </p>
								<p>
                  <strong>Stackoverflow: </strong>
									<span>
										<a href={props.about?.stackoverflow} target="_blank">{props.about?.stackoverflow}</a>
									</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
						<h4 className="h4 header-line">About me</h4>
						<p>{props.summary}</p>
					</div>
        </div>
      </div>
    </section>
  );
}
