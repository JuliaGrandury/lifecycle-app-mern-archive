// import styles from './Modal.module.css';
// import { RiCloseLine } from "react-icons/ri";
// import ItemForm from './ItemForm';

// function Modal({ setIsOpen }) {
//     return (
//         <>
//             <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
//             <div className={styles.centered}>
//                 <div className={styles.modal}>
//                     <div className={styles.modalHeader}><h5 className={styles.heading}>Add an Item</h5></div>
//                     <button className={styles.closeBtn} onClick={() => setIsOpen(false)}><RiCloseLine style={{ marginBottom: "-3px" }} /></button>
//                     <div className={styles.modalContent}>
//                         <ItemForm />
//                     </div>
//                     <div className={styles.modalActions}>
//                         <div className={styles.actionsContainer}>
//                             <button className={styles.saveBtn} onClick={() => setIsOpen(false)}>Save</button>
//                             <button className={styles.clearBtn} onClick={() => setIsOpen(false)}>Clear</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };


// export default Modal