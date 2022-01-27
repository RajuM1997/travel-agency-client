import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <div>
      <Container>
        <div className="faq-main-text py-5 text-center">
          <i className="text-warning">
            <h6>Get in Touch</h6>
          </i>
          <h1 className="title"> FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <Accordion className="pb-5 w-75 mx-auto">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Check website issues in-depth</Accordion.Header>
            <Accordion.Body>
              ravel agency and tour operator managed by a professional and
              experienced team strives to provide its best services to the
              valued
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Think about client's budget</Accordion.Header>
            <Accordion.Body>
              ravelers and clients in Bangladesh and abroad. The Dhaka Travels
              is registered by Ministry of Civil Aviation & Tourism And obtained
              IATA
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Check Competitveness</Accordion.Header>
            <Accordion.Body>
              ravels are having experienced about air Ticketing, traveling and
              professional tour guides who are knowledgeable, capable &
              passionate about the services that we offer. We always try our
              best level to provide best fare & best services to our valuable
              client
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Finding New Opportunities</Accordion.Header>
            <Accordion.Body>
              Create and provide an exclusive Air ticketing services and tour
              package with comprehensive and professionally matched terms at
              minimum cost and maximum pleasure to the customers. Also
              commitment and quality service. Thus, The Dhaka Travels want to
              become one of the largest and most reliable travel organizations
              in the region for setting standards in the industry for
              professionalism and reliability to the customer
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Check website issues in-depth</Accordion.Header>
            <Accordion.Body>
              travels treats their clients as guest and will provide best
              quality services in travel and tourism industry with sincerity,
              and honesty
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Think about client's budget</Accordion.Header>
            <Accordion.Body>
              travels treats their clients as guest and will provide best
              quality services in travel and tourism industry with sincerity,
              and honesty
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
