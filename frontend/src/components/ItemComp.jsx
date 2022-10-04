function ItemComp({ item }) {
    return (
        <div className="item">
            <div>
                {new Date(item.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{item.text}</h2>
        </div>
    )
}

export default ItemComp