import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Landingbanner.css";

export const Landingbanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["to success!", "unlocks your degree!", "builds your future!", "maps your degree path!", "drives your goals!", "simplifies your journey!"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(100); 
    } else {
        setDelta(200 - Math.random() * 100); 
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200 - Math.random() * 100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        
        <Row className="align-items-center">
          <Col xs={12} md={7} className="content">
          <span className="tagline">
                Find your <span className="highlight-green">PATHWAYS</span> of your own
            </span>
            <h1>
                {"Pathways"} <span className="wrap">{text}</span>
            </h1>
            <p>
            Planning your courses can feel overwhelming, but Pathways is here to guide you. Our AI-powered tools create personalized degree plans, making your university journey clear and efficient.
            </p>
            <Button className="but" variant="success" href="/Ai">AI</Button> {/* Add button here */}
            <span style={{ marginLeft: '-20px', display: 'inline-block', textIndent: '36px', position: 'relative', top: '10px' }}>
             Explore how our AI <br />&nbsp;&nbsp;&nbsp;&nbsp;optimizes your study plan!
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Landingbanner;