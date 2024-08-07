import {AuthLogin, AuthRegister} from "@/interfaces/auth";

interface ResponseData {
  ok: boolean
  message?: string
  data?: {
    id: any
  }
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
    const response = await fetch('https://71c30bu5xl.execute-api.us-east-1.amazonaws.com/Usuario/Usuario/login', requestOptions);
    const data = await response.json();
    const responseBody = JSON.parse(data.body);

    if (data.statusCode === 200) {
      console.log('test', data);
      return { ok: true, data: { id: responseBody.Usuario_id } };
    } else if (data.statusCode === 401) {
      return { ok: false, message: data.message || 'password incorrect' };
    } else if (data.statusCode === 404) {
      return { ok: false, message: data.message || 'user not fount' };
    } else {
      return { ok: false, message: data.message || 'Error' };
    }
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
    Nombre_y_apellidos: values.fullName,
    Correo_electronico: values.email,
    Contrasena: values.password,
    Edad: 0,
    Fecha_de_nacimiento: "1998-07-08",
    Sexo: "",
    Presentacion: "I am a new user at RIKKO",
    Num_seguidores: 0,
    Num_seguidos: 0,
  };

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch('https://71c30bu5xl.execute-api.us-east-1.amazonaws.com/Usuario/Usuario/register', requestOptions);
    const dataRegister = await response.json();
    if (dataRegister.statusCode === 200) {
      return { ok: true };
    } else if (dataRegister.statusCode === 401) {
      return { ok: false, message: dataRegister.message || 'Already existing e-mail or password' };
    } else if (dataRegister.statusCode === 500) {
      return { ok: false, message: dataRegister.message || 'Error getting the following User_id' };
    } else {
      return { ok: false, message: dataRegister.message || 'Error' };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed', error.message, body);
      return { ok: false, message: error.message || 'Failed to register user' };
    } else {
      console.error('Failed', error, body);
      return { ok: false, message: 'An unknown error occurred' };
    }
  }
}