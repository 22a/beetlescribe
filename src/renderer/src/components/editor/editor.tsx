import React from "react";
import Category from "../category/category";
import AddButton from "../button/addButton";

export default class EditorScreen extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <AddButton></AddButton>
                <Category></Category>
                <Category></Category>
            </>
        )
    }
}