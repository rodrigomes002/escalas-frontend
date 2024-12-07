import { API_URL, GET, POST, PUT, DELETE } from "./ApiBase.jsx";

const url = `${API_URL}api/musicas`;
const token = window.localStorage.getItem("token");

export function MUSICAS_GET() {
  return GET(url, token);
}

export function MUSICAS_POST(body) {
  return POST(url, token, body);
}

export function MUSICAS_DELETE(id) {
  return DELETE(url, token, id);
}

export function MUSICAS_PUT(body, id) {
  return PUT(url, token, body, id);
}
