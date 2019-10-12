import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Smurfs = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Name: {props.item.name}</CardTitle>
          <CardSubtitle>Age: {props.item.age}</CardSubtitle>
          <CardText>Height: {props.item.height}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Smurfs;