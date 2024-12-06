export const API_URL = "http://ec2-54-166-24-27.compute-1.amazonaws.com/";

export function GET_MUSICAS() {
  return {
    url: API_URL + "api/musicas",
    options: {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3IiwidW5pcXVlX25hbWUiOiJyb2RyaWdvIiwiZXhwIjoxNzMzNDUwNDkwfQ.TGgFMXwT0_eWeBwSQETWEGhdXRxNkjKswU03xqgjGwE",
      },
    },
  };
}

export function GET_MUSICOS() {
  return {
    url: API_URL + "api/musicos",
    options: {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3IiwidW5pcXVlX25hbWUiOiJyb2RyaWdvIiwiZXhwIjoxNzMzNDUwNDkwfQ.TGgFMXwT0_eWeBwSQETWEGhdXRxNkjKswU03xqgjGwE",
      },
    },
  };
}

export function POST_MEMBRO(body) {
  return {
    url: API_URL + "api/musicos",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3IiwidW5pcXVlX25hbWUiOiJyb2RyaWdvIiwiZXhwIjoxNzMzNDUwNDkwfQ.TGgFMXwT0_eWeBwSQETWEGhdXRxNkjKswU03xqgjGwE",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_POST(body) {
  return {
    url: API_URL + "api/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + "api/user",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + "api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "api/token",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
