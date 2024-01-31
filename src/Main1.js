





import React from "react";
import { FormControl, Button, Container, Row, Col } from "react-bootstrap";

export default function Main1() {
  return (
    <div>
      <Container>
        <Row id="row" className="mb-3 mb-sm-4">
          <Col xs={9} sm={9} lg={8}>
            <FormControl className="form2" type="text" placeholder="Enter text"
            
            
            style={{ width: "60vw", maxWidth: "250px" }}
            
            
            />
          </Col>
          <Col xs={3} sm={3} lg={4}>
            <Button  className="rounded-circle"  style={{ backgroundColor: "black" }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>



            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}














