import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, services } from "../../content_option";
import mob from '../../assets/images/mobile.png' 
import web from '../../assets/images/web.png' 

import ai from '../../assets/images/ai.png' 

import ui from '../../assets/images/uiux.png' 

import dev from '../../assets/images/dev.png' 

import dig from '../../assets/images/gig.png' 


export const Portfolio = () => {
  const services = [ {
    imageSrc:mob,
 },
 {   imageSrc:web
 },
 {   imageSrc:ui
 },
 {   imageSrc:ai
 },

 {   imageSrc:dev
 },
 {   imageSrc:dig
 },
 ];
  return (
    <HelmetProvider>
      <Container fluid className="About-heade p-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> SERVICES </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5 po_items_ho">
          {services.map((data, i) => {
            return (
              <Col key={i} md="4" className="po_item bg-black animated-card">
                <img src={data.imageSrc} alt=""  />
             
              </Col>
            );
          })}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
