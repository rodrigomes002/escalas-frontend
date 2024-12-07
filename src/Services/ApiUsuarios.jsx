import { API_URL, POST } from "./ApiBase.jsx";

const url = `${API_URL}api/usuarios`;

export function CREATE_POST(body) {
  return POST(`${url}/create`, null, body);
}

export function LOGIN_POST(body) {
  return POST(`${url}/login`, null, body);
}
