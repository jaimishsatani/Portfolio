import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TalkOn"
              description="TalkOn is a real-time personal chat room and collaborative workspace built using React.js, Material-UI, and Firebase. Designed for seamless and fun communication with friends, it supports real-time messaging, image sharing, and emoji reactions - creating an engaging, modern chat experience."
              ghLink="https://github.com/jaimishsatani/TalkOn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TrendKart"
              description="TrendKart is a modern e-commerce web app with real-time product browsing, user authentication, and a responsive shopping interface.
It allows users to explore products, manage their cart, and proceed to a smooth checkout flow.
Built with React.js, Material-UI, and Firebase for seamless UI, real-time data, and secure auth."
              ghLink="https://github.com/jaimishsatani/TrendKart"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Intellistock"
              description="IntelliStock is a Streamlit-based smart inventory system that forecasts product demand, detects stockout risks, and suggests dynamic pricing.
It evaluates supplier performance, analyzes customer sentiment in real-time, and generates professional PDF inventory reports.
Powered by scikit-learn, Plotly, and TextBlob, it delivers actionable insights through an interactive dashboard."
              ghLink="https://github.com/jaimishsatani/intellistock"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI-Powered Job-Portal"
              description="AI-Powered Job Portal is a full-stack MERN web app that uses AI and NLP to parse resumes and recommend jobs tailored to users’ skills and experience.
It features secure authentication, role-based dashboards for job seekers and recruiters, job posting, applications, and real-time notifications.
With advanced AI-driven search and filters, it streamlines the job search and hiring process for both users and employers."
              ghLink="https://github.com/jaimishsatani/AI-Powered-Job-Portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Scalable-URL-Shortener-with-Caching-Analytics"
              description="Scalable URL Shortener is a MERN-based application that shortens long URLs and delivers lightning-fast redirection using Redis caching and MongoDB indexing.
It tracks analytics like clicks, referrers, and user locations while supporting secure JWT authentication and rate limiting to prevent abuse.
Custom link expiration, performance optimization, and real-time tracking make it ideal for high-traffic use cases."
              ghLink="https://github.com/jaimishsatani/Scalable-URL-Shortener-with-Caching-Analytics"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Medical-RAG-Meditron7B"
              description="The Medical RAG QA App utilizes the Meditron 7B LLM, Qdrant Vector Database, and PubMedBERT Embedding Model to provide accurate medical answers. It retrieves relevant documents through semantic search and generates context-aware responses using advanced language models. This system enhances medical question answering by combining retrieval-based and generative AI techniques."
              ghLink="https://github.com/jaimishsatani/Medical-RAG-Meditron7B"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
