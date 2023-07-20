import React, { useRef } from "react";
import "./style.css";
import '../portfolio/style.css'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import video from '../../assets/images/video.mp4'
import {
  dataabout,
  meta,
  skills,
  services,
  howWeWork,
  ourTechStacks
} from "../../content_option";
import mern from '../../assets/images/mern.png' 
import mean from '../../assets/images/mean.png' 

import other from '../../assets/images/other.png' 

export const About = () => {
  const services = [ {
    imageSrc:mern,
 },
 {   imageSrc:mean
 },
 {   imageSrc:other
 },

 ];

  return (
    <HelmetProvider>
      <Container fluid className="About-heade p-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>  {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{howWeWork.howTitle}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{howWeWork.howDetails}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Our Tech Stacks</h3>
          </Col>
          <Row className="mb-5 po_items_ho">
          {services.map((data, i) => {
            return (
              <Col key={i} md="4" className="po_item  bg-black animated-card">
                <img src={data.imageSrc} alt=""  />
             
              </Col>
            );
          })}
        </Row>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
