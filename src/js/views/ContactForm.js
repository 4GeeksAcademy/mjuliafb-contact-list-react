import React, { useContext, useState } from "react";
import "../../styles/contactForm.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactForm = () => {
	const { actions } = useContext(Context);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		address: ""
	});

	const handleInputChange = evt => {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value
		});
	};

	const handleSubmit = evt => {
		evt.preventDefault();
		actions.saveContact(formData);
		evt.target.reset();
	};

	return (
		<div className="contactForm container">
			<h2>Add a new contact</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-2">
					<label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
					<input type="text" className="fullNameInput" id="exampleInputFullName" name="fullName" placeholder="Enter Full Name" onChange={handleInputChange} />
				</div>
				<div className="mb-2">
					<label htmlFor="exampleInputEmail" className="form-label">Email</label>
					<input type="email" className="emailInput" id="exampleInputEmail" name="email" placeholder="Enter email" onChange={handleInputChange} />
				</div>
				<div className="mb-2">
					<label htmlFor="exampleInputPhone" className="form-label">Phone</label>
					<input type="text" className="phoneInput" id="exampleInputPhone" name="phone" placeholder="Enter phone" onChange={handleInputChange} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputAddress" className="form-label">Address</label>
					<input type="text" className="addressInput" id="exampleInputAddress" name="address" placeholder="Enter Address" onChange={handleInputChange} />
				</div>
				<button type="submit" className="btn btn-primary">Save</button>
			</form>
			<Link to={"/"}>
				<span>Or get back to Agenda</span>
			</Link>
		</div>
	);
};