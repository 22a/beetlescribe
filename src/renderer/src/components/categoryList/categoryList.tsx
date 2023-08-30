import Category from "../category/category";

export default function CategoryList  ({ currentRoster, categories }) {
    return (
        <ul>
            <li>{ 
                categories.map(
                    (category) => {
                        return <Category category={category}></Category>
                    }
                )
            }</li>
        </ul>
    )
}