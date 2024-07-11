interface ResponseData {
  ok: boolean
  message?: string
  data?: any
}

export async function getProfile(id: string): Promise<ResponseData> {
  const requestOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`https://zsf3957lq6.execute-api.us-east-1.amazonaws.com/Recetas/Usuario/${id}`, requestOptions);
    const data = await response.json();

    if (!response.ok) {
      return {
        ok: false,
        message: data.message || 'Failed to fetch profile',
      };
    }

    return {
      ok: true,
      data: data[0],
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.message,
    };
  }
}