import React from "react";
import AddButton from "../button/button"
import UnitBox from "../unitBox/unitBox";

export default class Category extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <AddButton></AddButton>
                <UnitBox></UnitBox>
                <UnitBox></UnitBox>
                <UnitBox></UnitBox>
            </>
        )
    }
}