export const API_URL = "http://ec2-3-80-208-160.compute-1.amazonaws.com/";

export function GET(url, token) {
  return {
    url: url,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function POST(url, token, body) {
  let request = {
    url: url,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };

  if (token != null) {
    request.options.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
}

export function DELETE(url, token, id) {
  return {
    url: `${url}/${id}`,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function PUT(url, token, body, id) {
  return {
    url: `${url}/${id}`,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}
