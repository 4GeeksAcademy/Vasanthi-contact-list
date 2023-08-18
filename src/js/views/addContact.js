import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link, redirect } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
	
	const {store, actions} = useContext(Context);

	let data = {
		full_name: '',
		email: "",
		agenda_slug: "vasanthi",
		address: "",
		phone: "",
	}
	const location = useLocation()
	const params = useParams()

	const [formObj, setFormObj] = useState(data);


	useEffect(() => {
		if(location.pathname.includes("/update_contact")) {
			setFormObj({
				full_name: store.contactPerson.full_name,
				email: store.contactPerson.email,
				agenda_slug: 'vasanthi',
				address: store.contactPerson.address,
				phone: store.contactPerson.phone
			})
		} else {
			setFormObj({
				full_name: '',
				email: "",
				agenda_slug: "vasanthi",
				address: "",
				phone: ""
			})
		}
	},[params])

	useEffect(() => {
		if(params?.id) {
			actions.getContact(params?.id)
		}
	}, [])

	const setInput = (event) => {
   setFormObj((old) => {
     return {
			full_name: event,
			email: old.email,
			agenda_slug: "vasanthi",
			address: old.address,
			phone: old.phone
		 }
	 })
	}

	const setInputEmail = (event) => {
		setFormObj((old) => {
			return {
			 full_name: old.full_name,
			 email: event,
			 agenda_slug: "vasanthi",
			 address: old.address,
			 phone: old.phone
			}
		})
	}
	const setInputPhone = (event) => {
		setFormObj((old) => {
			return {
			 full_name: old.full_name,
			 email: old.email,
			 agenda_slug: "vasanthi",
			 address: old.address,
			 phone: event
			}
		})
	}
	const setInputAddress = (event) => {
		setFormObj((old) => {
			return {
			 full_name: old.full_name,
			 email: old.email,
			 agenda_slug: "vasanthi",
			 address: event,
			 phone: old.phone
			}
		})
	}

	const saveAction = () => {
		if (
			formObj.full_name != '' &&
			formObj.email != '' &&
			formObj.phone != '' &&
			formObj.address != ''
		) {
			if(location.pathname.includes('/update_contact')) {
				actions.updateContact(formObj, params.id)
			} else {
				actions.saveContact(formObj)
			}
		}
	}


	return (
	<>
	  <div className="text-center mt-5">

			{location.pathname.includes('/update_contact') && <h1>Update Contact</h1>}
			{!location.pathname.includes('/update_contact') && <h1>Add New Contact</h1>}
		</div>
		<div className="text-start mt-5 add-form">
			<div className="mb-3">
				<label htmlFor="name" className="form-label">Full Name</label>
				<input type="text" className="form-control" required id="name" placeholder="Enter Full Name" value={formObj.full_name} onChange={(event) => setInput(event.target.value)}/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
				<input type="email" className="form-control" required id="exampleFormControlInput1" placeholder="name@example.com" value={formObj.email} onChange={(event) => setInputEmail(event.target.value)}/>
			</div>
			<div className="mb-3">
				<label htmlFor="phone" className="form-label">Phone</label>
				<input type="text" className="form-control" required id="phone" placeholder="Enter phone" value={formObj.phone} onChange={(event) => setInputPhone(event.target.value)}/>
			</div>
			<div className="mb-3">
				<label htmlFor="address" className="form-label">Address</label>
				<input type="text" className="form-control" required id="address" placeholder="Enter address" value={formObj.address} onChange={(event) => setInputAddress(event.target.value)}/>
			</div>
		  <button className="btn btn-primary w-100" onClick={saveAction}>Save</button>
			<Link to="/">
				Back to contacts.
			</Link>
		</div>
			</>
		)
}


export default AddContact
