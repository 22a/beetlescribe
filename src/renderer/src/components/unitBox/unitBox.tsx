import React from "react";
import Card from 'react-bootstrap/Card';
import AddButton from "../button/addButton";


export default class UnitBox extends React.Component {
    render(): React.ReactNode {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}