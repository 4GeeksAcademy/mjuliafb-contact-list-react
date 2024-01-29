const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: []
		},
		actions: {

			loadSomeData: () => {
				return fetch("https://playground.4geeks.com/apis/fake/contact/agenda/limberg")
					.then(res => res.json())
					.then(data => {
						setStore({ contact: data });
					})
			},

			getContactData: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "GET"
					});

					if (response.ok) {
						const contactData = await response.json();
						return contactData;
					} else {
						console.error("Error al buscar el contacto:", response.status, response.statusText);
						return null;
					}
				} catch (error) {
					console.error("Error en el fetch del contacto:", error);
					return null;
				}
			},
			saveContact: (formData, isEditing, id) => {
				const url = isEditing ? `https://playground.4geeks.com/apis/fake/contact/${id}` : "https://playground.4geeks.com/apis/fake/contact/";

				const method = isEditing ? "PUT" : "POST";

				fetch(url, {
					method: method,
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: formData.fullName,
						email: formData.email,
						agenda_slug: "limberg",
						address: formData.address,
						phone: formData.phone
					})
				})
					.then(res => res.json())
					.then(data => {
						alert("Contact saved successfully:");
					})
					.catch(error => {
						console.error("Error al guardar el contacto:", error);
					});
			},

			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "DELETE"
					});

					if (response.ok) {
						alert("Contacto eliminado exitosamente");

						const { contact } = getStore();
						const updatedContactList = contact.filter((item) => item.id !== id);
						setStore({ contact: updatedContactList });

						return true;
					} else {
						console.error("Error al eliminar el contacto:", response.status, response.statusText);
						return false;
					}
				} catch (error) {
					console.error("Error al eliminar el contacto:", error);
					return false;
				}
			}
		}
	};
};

export default getState;
