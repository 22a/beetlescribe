import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";


export default class ListPicker extends React.Component {
    render(): React.ReactNode {
        return (
            <ListGroup>
                <ListGroup.Item>test1</ListGroup.Item>
                <ListGroup.Item>test2</ListGroup.Item>
                <ListGroup.Item>test3</ListGroup.Item>
                <ListGroup.Item>test4</ListGroup.Item>
            </ListGroup>
        )
    }
}
