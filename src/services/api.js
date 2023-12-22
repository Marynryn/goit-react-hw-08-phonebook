import axios from 'axios';

axios.defaults.baseURL = 'https://657aab661acd268f9afb81bc.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}
export async function addContact(contact) {
  return await axios.post('/contacts', contact);
}

export async function deleteContact(id) {
  return await axios.delete(`contacts/${id}`);
}
