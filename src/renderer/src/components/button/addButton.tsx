import React from "react";
import Button from 'react-bootstrap/Button';


export default class AddButton extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <Button variant="outline-dark">Dark</Button>
            </>
        )
    }
}
