function Catalog({categories}) {
    return (
        <div>
            Product Categories
            <hr />
            <ul>
            { categories.map( category => <li key={category.CategoryValue}>{category.CatName}</li> ) }
            </ul>
            
        </div>
    )
}

export default Catalog
