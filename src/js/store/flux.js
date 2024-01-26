const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadSomeData: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/limberg")
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

		}
	};
};

export default getState;
