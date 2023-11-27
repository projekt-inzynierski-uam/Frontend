import Modal from './Modal'
import { useState } from 'react'

const ListHeader = ({ listName, getData, assigned }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          DODAJ
        </button>
      </div>
      {showModal && (
        <Modal
          mode={'create'}
          setShowModal={setShowModal}
          getData={getData}
          assignedTo={assigned}
        />
      )}
    </div>
  )
}

export default ListHeader
