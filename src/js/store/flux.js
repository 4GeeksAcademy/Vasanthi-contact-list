const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactPerson: {
				full_name: "",
				email: "",
				agenda_slug: "vasanthi",
				address: "",
				phone: "",
				id: ''
			},
			contacts: []
		},
		actions: {
			fetchAllContacts: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/vasanthi').then(async (res) => {
					const data = await res.json()
					setStore({contacts: data})
				})
			},

			setContactPerson: (person) => {
				setStore({ contactPerson: person });
			},

			deleteContact: () => {
				const store = getStore();
				fetch(`https://playground.4geeks.com/apis/fake/contact/${store.contactPerson.id}`, {
					method: 'DELETE',
					headers: {'Content-Type': 'application/json'}
				}).then((res) => {
					const updateContactList = store.contacts.filter((item) => item.id != store.contactPerson.id)
					getActions().setContactPerson({})
					setStore({ contacts: updateContactList})
				})
			},

			saveContact: (obj) => {
        const store = getStore();
				fetch(`https://playground.4geeks.com/apis/fake/contact`, {
					method: 'POST',
					body: JSON.stringify(obj),
					headers: {'Content-Type' : 'application/json'}
				}).then((res) => {
          getActions().fetchAllContacts();
				})
			},

			getContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`).then(async (res) => {
					const data = await res.json()
					getActions().setContactPerson(data[0])
				})
			},

			updateContact: (obj, id) => {
        const store = getStore();
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: 'PUT',
					body: JSON.stringify(obj),
					headers: {'Content-Type' : 'application/json'}
				}).then((res) => {
					setStore({contactPerson: obj})
          getActions().fetchAllContacts();
				})
			},

			storeReset: () => {
        setStore({contactPerson: {
					full_name: "",
					email: "",
					agenda_slug: "",
					address: "",
					phone: ""
				}})
			},

		}
	};
};

export default getState;
