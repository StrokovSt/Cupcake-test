import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { hideModal } from '../redux/actions'

const ModalBookComponent = () => {
  const dispatch = useDispatch()
  const modalBook = useSelector(state => state.modal.book)

  const closeHandler = () => {
    dispatch(hideModal())
    window.removeEventListener('keyup', escPressHandler)
  }

  const escPressHandler = (evt) => {
    if (evt.keyCode === 27) {
      closeHandler()
    }
  }

  window.addEventListener('keyup', escPressHandler)

  return (
    <article className="modal-article">
      <h3>{modalBook.title}</h3>
      <img src={modalBook.image}></img>
      <span>Price: {modalBook.price}</span>
      <button type="button" onClick={closeHandler}>Закрыть окно</button>
    </article>
  )
}

export default ModalBookComponent