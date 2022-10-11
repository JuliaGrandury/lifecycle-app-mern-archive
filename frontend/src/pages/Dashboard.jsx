import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ItemForm from '../components/ItemForm';
import ItemComp from '../components/ItemComp';
import Modal from '../components/Modal';
import Spinner from '../components/Spinner';
import { getItems, reset } from '../features/items/itemSlice';
// import Products from '../components/Products.jsx';
import styles from "./Dashboard.module.css";

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { items, isLoading, isError, message } = useSelector((state) => state.items)

  // Modal to Add Closet Item
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getItems())

    // return () => {
    //   dispatch(reset())
    // }
  }, [user, navigate, isError, message, dispatch])

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <>
      <section className="heading"><h1>Welcome to your closet {user && user.name}!</h1></section>
      <section className="action-bar">
        {/* Add functionality to the tag buttons */}
        <button className={styles.tagBtn}>Tops</button>
        <button className={styles.tagBtn}>Bottoms</button>
        <button className={styles.tagBtn}>Dress + Jumpsuits</button>
        <button className={styles.tagBtn}>Coats + Jackets</button>
        <button className={styles.tagBtn}>Shoes</button>
        <button className={styles.tagBtn}>Accessories</button>
        <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>Add an Item</button>
        {isOpen && <ItemForm setIsOpen={setIsOpen} />}
      </section>
      <section className="content">
        {items.length > 0 ? (
          <div className="items">
            {items.map((item) => (
              <ItemComp key={item._id} item={item} />
            ))}
          </div>
        ) : (<h3>Your closet is empty</h3>)}
      </section>
    </>
  )
}

export default Dashboard;