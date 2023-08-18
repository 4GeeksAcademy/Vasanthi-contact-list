import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Go to Contacts</span>
			</Link>
			<div className="ml-auto">
				<Link to="/add_contact">
					<button className="btn btn-success">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
