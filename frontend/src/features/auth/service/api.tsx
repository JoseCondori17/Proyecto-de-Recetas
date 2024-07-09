import {AuthLogin, AuthRegister} from "@/interfaces/auth";

interface ResponseData {
  ok: boolean;
  message?: string;
}

export async function verifyLogin(values: AuthLogin): Promise<ResponseData> {
  const body = {
    Correo_electronico: values.email,
    Contrasena: values.password,
  };

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch('https://h0z4t4u2d9.execute-api.us-east-1.amazonaws.com/PostUserr/Cocina/login', requestOptions);

    if (!response.ok) {
      const errorData = await response.json();
      return { ok: false, message: errorData.message || 'Failed to login user' };
    }

    return { ok: true };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed', error.message, body);
      return { ok: false, message: error.message || 'Failed to login user' };
    } else {
      console.error('Failed', error, body);
      return { ok: false, message: 'An unknown error occurred' };
    }
  }
}

export async function registerUser(values: AuthRegister): Promise<ResponseData> {
  const body = {
    Username: values.username,
    Correo_electronico: values.email,
    Contrasena: values.password,
  };

  try {
    const response = await fetch('https://h0z4t4u2d9.execute-api.us-east-1.amazonaws.com/PostUserr/Cocina/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { ok: false, message: errorData.message || 'Failed to register user' };
    }

    return { ok: true };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed', error.message, body);
      return { ok: false, message: error.message || 'Failed to register user' };
    } else {
      console.error('An unknown error occurred', body);
      return { ok: false, message: 'An unknown error occurred' };
    }
  }
}