import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/contactForm.css";

export const ContactForm = ({ isEditing }) => {
	const { id } = useParams();
	const { actions, store } = useContext(Context);

	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		address: ""
	});

	useEffect(() => {
		if (isEditing && id) {
			actions.getContactData(id)
				.then(contactData => {
					if (contactData) {
						setFormData({
							fullName: contactData.full_name,
							email: contactData.email,
							phone: contactData.phone,
							address: contactData.address
						});
					}
				})
				.catch(error => console.error("Error al obtener los datos del contacto:", error));
		}
	}, [isEditing, id]);

	const handleInputChange = evt => {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value
		});
	};

	const handleSubmit = evt => {
		evt.preventDefault();
		const url = isEditing ? `https://playground.4geeks.com/apis/fake/contact/${id}` : "https://playground.4geeks.com/apis/fake/contact/";
		actions.saveContact(formData, isEditing, id);
		setFormData({
			fullName: "",
			email: "",
			phone: "",
			address: ""
		});
	};

	return (
		<div className="contactForm container">
			<h2>{isEditing ? "Edit Contact" : "Add a new contact"}</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-2">
					<label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
					<input type="text" className="fullNameInput" id="exampleInputFullName" name="fullName" placeholder="Enter Full Name" value={formData.fullName} onChange={handleInputChange} />
				</div>
				<div className="mb-2">
					<label htmlFor="exampleInputEmail" className="form-label">Email</label>
					<input type="email" className="emailInput" id="exampleInputEmail" name="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
				</div>
				<div className="mb-2">
					<label htmlFor="exampleInputPhone" className="form-label">Phone</label>
					<input type="text" className="phoneInput" id="exampleInputPhone" name="phone" placeholder="Enter phone" value={formData.phone} onChange={handleInputChange} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputAddress" className="form-label">Address</label>
					<input type="text" className="addressInput" id="exampleInputAddress" name="address" placeholder="Enter Address" value={formData.address} onChange={handleInputChange} />
				</div>
				<button type="submit" className="btn btn-primary">{isEditing ? "Update" : "Save"}</button>
			</form>
			<Link to={"/"}>
				<span>Or get back to Agenda</span>
			</Link>
		</div>
	);
};
