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
			saveContact: formData => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
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
						console.log("Contact saved successfully:", data);
					})
			},

			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "DELETE"
					});

					if (response.ok) {
						console.log("Contacto eliminado exitosamente");

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
