import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createItem } from '../features/items/itemSlice';
import styles from './Modal.module.css';
import morestyles from './ItemForm.module.css';
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
        //     </form>
        // </section>
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}><h5 className={styles.heading}>Add an Item</h5></div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}><RiCloseLine style={{ marginBottom: "-3px" }} /></button>

                    <form onSubmit={onSubmit}>
                        <div className={morestyles.formgroup}>
                            <input className={morestyles.formgroupInput} type="text" name="name" id="name" placeholder='Enter item name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" name="color" id="color" placeholder='Enter item color' value={color} onChange={(e) => setColor(e.target.value)} />

                            <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="" disabled selected hidden>Select item category</option>
                                <option value="tops">Tops</option>
                                <option value="bottoms">Bottoms</option>
                                <option value="dressesandjumpsuits">Dresses + Jumpsuits</option>
                                <option value="coatsandjackets">Coats + Jackets</option>
                                <option value="shoes">Shoes</option>
                                <option value="accessories">Accessories</option>
                                <option value="sportswear">Sportswear</option>
                            </select>

                            <select name="season" id="season" value={season} onChange={(e) => setSeason(e.target.value)}>
                                <option value="" disabled selected hidden>Select item season</option>
                                <option value="hot">Hot</option>
                                <option value="temperate">Temperate</option>
                                <option value="cold">Cold</option>
                                <option value="all">All</option>
                            </select>

                            {/* <input type="text" name="category" id="category" placeholder='Select item category' value={category} onChange={(e) => setCategory(e.target.value)} /> */}
                            {/* <input type="text" name="season" id="season" placeholder='Select item season' value={season} onChange={(e) => setSeason(e.target.value)} /> */}
                        </div>
                        <div className='form-group'>
                            <button className={styles.saveBtn} type="submit" onClick={() => setIsOpen(false)}>Add</button>
                            <button className={styles.clearBtn} type="reset">Clear</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default ItemForm