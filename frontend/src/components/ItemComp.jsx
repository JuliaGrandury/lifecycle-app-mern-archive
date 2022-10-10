import { useDispatch } from 'react-redux'
import { deleteItem } from '../features/items/itemSlice'

function ItemComp({ item }) {
    const dispatch = useDispatch()

    return (
        <div className="item">
            <h5>{new Date(item.createdAt).toLocaleString('en-US')}</h5>
            <h2>{item.name}</h2>
            <h3>Color: {item.color}</h3>
            <h3>Category: {item.category}</h3>
            <h3>Season: {item.season}</h3>
            <h5>In Closet: {item.incloset ? "True" : "False"}</h5>
            <h5>To Repair: {item.torepair ? "True" : "False"}</h5>
            <button onClick={() => dispatch(deleteItem(item._id))} className="close">X</button>
        </div>
    )
}

export default ItemComp