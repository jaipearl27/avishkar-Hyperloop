import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AccordionComponent = ({ accordionData }) => {
  return (
    <Accordion defaultActiveKey="0">
      {accordionData.map((item, index) => (
        <Accordion.Item eventKey={item.eventKey} key={index}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
