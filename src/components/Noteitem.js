import React from 'react'

const Noteitem = (props) => {
    const {note}=props;
  return (
    <div className='col-md-3'>
      <div className="card" style={{ width: "18rem" }}>

  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i class="ri-sticky-note-add-line mx-4"></i>
    <i class="ri-edit-line mx-4"></i>
    <i class="ri-delete-bin-line mx-4"></i>
  </div>
</div>
    </div>
  )
}

export default Noteitem
