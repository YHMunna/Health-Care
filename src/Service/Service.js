import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = (props) => {
  const { service } = props;
  console.log(service);
  return (
    <div>
      <div class="container px-4">
        <div class="row gx-5">
          <Col>
            <Card>
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Title>{service.serviceName}</Card.Title>
                <Card.Text>{service.details}</Card.Text>
                <button className="bg-gray-300 rounded-sm py-1 px-2">
                  More
                </button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Service;
