import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createItem } from '../features/items/itemSlice';
import styles from './ItemForm.module.css';
import { RiCloseLine } from "react-icons/ri";

function ItemForm({ setIsOpen }) {
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
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}><h5 className={styles.heading}>Add an Item</h5></div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}><RiCloseLine style={{ marginBottom: "-3px" }} /></button>

                    <form onSubmit={onSubmit}>
                        <div className={styles.formgroup}>
                            <input className={styles.formgroupInput} type="text" name="name" id="name" placeholder='Enter item name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input className={styles.formgroupInput} type="text" name="color" id="color" placeholder='Enter item color' value={color} onChange={(e) => setColor(e.target.value)} />

                            <select className={styles.formgroupInput} name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="" disabled selected hidden>Select item category</option>
                                <option value="tops">Tops</option>
                                <option value="bottoms">Bottoms</option>
                                <option value="dressesandjumpsuits">Dresses + Jumpsuits</option>
                                <option value="coatsandjackets">Coats + Jackets</option>
                                <option value="shoes">Shoes</option>
                                <option value="accessories">Accessories</option>
                                <option value="sportswear">Sportswear</option>
                            </select>

                            <select className={styles.formgroupInput} name="season" id="season" value={season} onChange={(e) => setSeason(e.target.value)}>
                                <option value="" disabled selected hidden>Select item season</option>
                                <option value="hot">Hot</option>
                                <option value="temperate">Temperate</option>
                                <option value="cold">Cold</option>
                                <option value="all">All</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <button className={styles.saveBtn} type="submit" onClick={() => setIsOpen(true)}>Add</button>
                            <button className={styles.clearBtn} type="reset">Clear</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default ItemForm;