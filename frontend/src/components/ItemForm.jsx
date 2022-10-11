import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createItem } from '../features/items/itemSlice';
import styles from './Modal.module.css';
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
        // <section className="form">
        //     <form onSubmit={onSubmit}>
        //         <div className="form-group">
        //             {/* <label htmlFor="name">Add a Closet Item</label> */}
        //             <input type="text" name="name" id="name" placeholder='Enter item name' value={name} onChange={(e) => setName(e.target.value)} />
        //             <input type="text" name="color" id="color" placeholder='Enter item color' value={color} onChange={(e) => setColor(e.target.value)} />
        //             {/* Make the two following a dropdown menu */}
        //             <input type="text" name="category" id="category" placeholder='Select item category' value={category} onChange={(e) => setCategory(e.target.value)} />
        //             <input type="text" name="season" id="season" placeholder='Select item season' value={season} onChange={(e) => setSeason(e.target.value)} />
        //         </div>
        //         <div className="form-actions">
        //             <button className="btn btn-block" type="submit">Save</button>
        //             <button className="btn btn-block" type="submit">Clear</button>
        //         </div>
        //     </form>
        // </section>
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}><h5 className={styles.heading}>Add an Item</h5></div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}><RiCloseLine style={{ marginBottom: "-3px" }} /></button>
                    <div className={styles.modalContent}>
                        {/* <ItemForm /> */}
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.saveBtn} onClick={() => setIsOpen(false)}>Save</button>
                            <button className={styles.clearBtn} onClick={() => setIsOpen(false)}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemForm