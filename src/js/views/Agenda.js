import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/agenda.css";


export const Agenda = () => {
	const { store, actions } = useContext(Context);
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		actions.loadSomeData()
			.then(() => setDataLoaded(true))
			.catch(error => console.error("Error al cargar los datos:", error));
	}, []);

	const handleDelete = async idIndex => {

		try {
			await actions.deleteContact(idIndex);
		} catch (error) {
			console.error("Error al eliminar el contacto:", error);
		}
	};

	return (
		<div className="container">
			<div className="headerAgenda m-2 d-flex justify-content-between">
				<h2>Agenda</h2>
				<Link to="/contact-form">
					<button type="button" className="btn btn-success">Add a new contact</button>
				</Link>

			</div>
			{dataLoaded && <ul className="list-group">
				{store.contact.map((item, index) => {
					return (
						<li
							key={item.id}
							className="contactList list-group-item d-flex justify-content-between">
							<div><img src="https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></img></div>
							<div className="contactItems">
								<h3> {item.full_name} </h3>
								<p><i className="fa-solid fa-location-dot"></i> {item.address} </p>
								<p><i className="fa-solid fa-phone"></i> {item.phone} </p>
								<p> <i className="fa-solid fa-envelope"></i>{item.email} </p>
							</div>
							<div className="contactIcons d-flex">
								<div><Link to={"/contact-form"}>
									<i className="fa-solid fa-pen"></i>
								</Link></div>
								<div><i className="fa-solid fa-trash" onClick={() => handleDelete(item.id)}></i></div>
							</div>
						</li>
					);
				})}
			</ul>
			}
			<br />
		</div>
	);
};