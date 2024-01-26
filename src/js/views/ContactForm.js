import React, { useContext } from "react";
import "../../styles/contactForm.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ContactForm = () => {


	return (
		<div className="contactForm container">
			<h2>Add a new contact</h2>
			<form>
				<div className="mb-2">
					<label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
					<input type="text" className="fullNameInput" id="exampleInputFullName" placeholder="Enter Full Name" />
				</div>
				<div className="mb-2">
					<label htmlFor="exampleInputEmail" className="form-label">Email</label>
					<input type="email" className="emailInput" id="exampleInputEmail" placeholder="Enter email" />
				</div>
				<div className="mb-2">
					<label htmlFor="exampleInputPhone" className="form-label">Password</label>
					<input type="text" className="phoneInput" id="exampleInputPhone" placeholder="Enter phone" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputAddress" className="emailLabel">Address</label>
					<input type="text" className="addressInput" id="exampleInputAddress" placeholder="Enter Adress" />
				</div>
				<button type="submit" className="btn btn-primary">Save</button>
			</form>
			<Link to={"/agenda"}>
				<span>Or get back to Agenda</span>
			</Link>
		</div>
	);
};