import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { EnvelopeIcon, MapPinIcon, PencilIcon, PhoneIcon, TrashIcon } from '@heroicons/react/24/solid'
import DeleteModal from "../component/deleteModal";
import { Link } from "react-router-dom";

export const Contact = () => {

  const [showDeleteModal, setModal] = useState(false);
  const {store, actions} = useContext(Context);

  // const [contactPerson, setContactPerson] = useState({})

  const deleteModalView = (item) => {
   setModal(true)
   actions.setContactPerson(item)
  }

  const deleteContactFromList = () => {
   actions.deleteContact();
   setModal(false)
  }

  const editContact = (item) => {
    actions.setContactPerson(item)
  }
 
	return (
    <>
  <div className="contact-list">
    <ul>
    {store?.contacts?.map((item, index) => {
      return <div className="row contact-person" key={index}>
        <div className="col-md-2 contact-image">
<img src={'https://xsgames.co/randomusers/avatar.php?g=female'} height={'100px'}/>
        </div>
        <div className="col-md-6 contact-info">
          <div className="text-black">
            {item.full_name}
          </div>
         <div>
          <MapPinIcon className="h-6 w-6 text-secondary pe-1" style={{height:"20px"}} /> {item.address}
         </div>
         <div>
          <PhoneIcon className="h-6 w-6 text-secondary pe-1" style={{ height:"20px" }} />{item.phone}
         </div>
         <div>
          <EnvelopeIcon className="h-6 w-6 text-secondary pe-1" style={{ height:"20px" }} /> {item.email}
         </div>
        </div>
        <div className="col-md-4 contact-actions">
          <Link to={`/update_contact/`+item.id}>
            <PencilIcon className="pencil-icon" style={{ height:"20px" }} onClick={() => editContact(item)}/>
          </Link>
        <TrashIcon className="" style={{ height:"20px" }} onClick={() => deleteModalView(item)} />
        </div>
   
      </div>
    })}
    {store.contacts.length == 0 && 'You have zero contacts. Please create new contact using add new contact button.'}
    </ul>
  </div>
  {showDeleteModal && <DeleteModal  parentCloseModal={() => setModal(false)} parentSaveModal={deleteContactFromList} />}
    </>
  )
};
