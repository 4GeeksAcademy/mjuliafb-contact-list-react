const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
				{
					fullName: "Dave Bradley",
                    email: "dave@gmail.com",
                    agenda_slug: "my_super_agenda",
                    address:"47568 NW 34ST, 33434 FL, USA",
                    phone:"7864445566"
				},
				{
					fullName: "Matt Damon",
                    email: "dave@gmail.com",
                    agenda_slug: "my_super_agenda",
                    address:"47568 NW 34ST, 33434 FL, USA",
                    phone:"7864445566"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
