import React from "react";
import { useState } from 'react';
import AddButton from "../button/addButton";
import CategoryList from "../categoryList/categoryList";

function buildPossibleCategories (categories) {

}

function buildCategoriesList (data) {
    const output: any[] = [];
    data.sharedSelectionEntries.map((sharedSelectionEntry) => {
        if (sharedSelectionEntry.categoryLinks !== undefined) {
            sharedSelectionEntry.categoryLinks.map((categoryLink) => {
                if ( categoryLink.primary === true ) {
                    output.push(buildPossibleCategories(categoryLink));
                }
            })
        }
    })
    return output;
}

export default function EditorScreen ({ data }) {
    const [currentRoster, setCurrentRoster] = useState({});
    console.log(buildCategoriesList(data));
    return (
        <>
            <AddButton></AddButton>
            <CategoryList currentRoster={currentRoster} categories={data.sharedSelectionEntries}></CategoryList>
        </>
    )
}