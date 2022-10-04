import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ItemForm from '../components/ItemForm';
import Spinner from '../components/Spinner';
import { getItems } from '../features/items/itemSlice';
// import Products from '../components/Products.jsx';

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { items, isLoading, isError, message } = useSelector((state) => state.items)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }
    dispatch(getItems())
  }, [user, navigate])

  return <>
    <section className="heading">
      <h1>Welcome to your closet {user && user.name}</h1>
      <p>Closet Items</p>
    </section>
    <ItemForm />
  </>
}

export default Dashboard;