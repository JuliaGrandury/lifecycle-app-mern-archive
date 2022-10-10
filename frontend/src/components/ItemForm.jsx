import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createItem } from '../features/items/itemSlice'

function ItemForm() {
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')
    const [season, setSeason] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createItem({ name, color, category, season }))
        setName('')
        setColor('')
        setCategory('')
        setSeason('')
    }

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Add a Closet Item</label>
                    <input type="text" name="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    {/* Make the two following a dropdown menu */}
                    <input type="text" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <input type="text" name="season" id="season" value={season} onChange={(e) => setSeason(e.target.value)} />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type="submit">Add Closet Item</button>
                </div>
            </form>
        </section>
    )
}

export default ItemForm