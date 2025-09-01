import { Container, Row, Col } from "react-bootstrap";
import type { Project } from "../types";

export default function Project(props: { data : Project[]}) {
  // const services = [
  //   {
  //     icon: "bi bi-activity",
  //     title: "Online Cake Delivery Store",
  //     desc: "Online Cake store comes with a customer website, customer mobile app, delivery app and admin dashboard. It has all features for your online cake business.",
  //     delay: 100,
  //   },
  //   {
  //     title: "Readymade Flower Delivery App",
  //     desc: "Readymade Flower store comes with a customer website, customer mobile app, delivery app, and admin dashboard. It has all features for your online flower business.",
  //     delay: 200,
  //   }
  // ];

  return (
    <section id="project" className="project section">
      <Container>
        <h3 className="h3 header-line">Projects</h3>
				<Row className="gy-4">
          {props.data?.map((service, idx) => (
            <Col
              key={idx}
              lg={4}
              md={6}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="item position-relative">
                <a href="#" className="stretched-link">
                  <h3 className="h3 text-h1">{service.title}</h3>
                </a>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
