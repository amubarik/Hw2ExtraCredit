import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
const HomeCard = props => (
    <Card>
        <CardBody>
            <img src={props.img} height="200" width="100%" />
            <h3>{props.title}</h3>
            <p>{props.price}</p>
        </CardBody>

    </Card>


)


export default HomeCard;