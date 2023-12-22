import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

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

export async function userAuth(user) {
  return await axios.post('/users/signup', user);
}
export async function userLogin(user) {
  return await axios.post('/users/login', user);
}
export async function userLogout() {
  return await axios.post('/users/logout');
}
export async function userRefresh() {
  return await axios.post('/users/me');
}
