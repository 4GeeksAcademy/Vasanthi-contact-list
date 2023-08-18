import React from "react";

const DeleteModal = (props) => {
  const closeModal = () => {
     props.parentCloseModal()
  }
  const saveModal = () => {
    props.parentSaveModal()
  }
  return (
    <>
    <div className="modal" style={{display: "block"}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Are you sure?</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>delete this contact?</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
        <button type="button" className="btn btn-primary" onClick={saveModal}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default DeleteModal