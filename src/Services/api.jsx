export const API_URL = "http://ec2-54-166-24-27.compute-1.amazonaws.com/";

export function GET_MUSICAS() {
  return {
    url: API_URL + "api/musicas",
    options: {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidW5pcXVlX25hbWUiOiJzdHJpbmciLCJleHAiOjE3MzM1MTgxODF9.Fod79-CdBbynfAdDL2lI7dXbbfpNefchnFUZr-jbfb4",
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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidW5pcXVlX25hbWUiOiJzdHJpbmciLCJleHAiOjE3MzM1MTgxODF9.Fod79-CdBbynfAdDL2lI7dXbbfpNefchnFUZr-jbfb4",
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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidW5pcXVlX25hbWUiOiJzdHJpbmciLCJleHAiOjE3MzM1MTgxODF9.Fod79-CdBbynfAdDL2lI7dXbbfpNefchnFUZr-jbfb4",
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_MEMBRO(id) {
  return {
    url: API_URL + "api/musicos/" + id,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidW5pcXVlX25hbWUiOiJzdHJpbmciLCJleHAiOjE3MzM1MTgxODF9.Fod79-CdBbynfAdDL2lI7dXbbfpNefchnFUZr-jbfb4",
      },
    },
  };
}

export function PUT_MEMBRO(body, id) {
  return {
    url: API_URL + "api/musicos/" + id,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidW5pcXVlX25hbWUiOiJzdHJpbmciLCJleHAiOjE3MzM1MTgxODF9.Fod79-CdBbynfAdDL2lI7dXbbfpNefchnFUZr-jbfb4",
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
