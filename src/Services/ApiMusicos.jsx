import { API_URL, GET, POST, PUT, DELETE } from "./ApiBase.jsx";

const url = `${API_URL}api/musicos`;
const token = window.localStorage.getItem("token");

export function MUSICOS_GET() {
  return GET(url, token);
}

export function MUSICOS_POST(body) {
  return POST(url, token, body);
}

export function MUSICOS_DELETE(id) {
  return DELETE(url, token, id);
}

export function MUSICOS_PUT(body, id) {
  return PUT(url, token, body, id);
}
