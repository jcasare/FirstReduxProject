import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Modal from './Components/Modal'
import { openModal, closeModal } from './features/modal/modalSlice'
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
