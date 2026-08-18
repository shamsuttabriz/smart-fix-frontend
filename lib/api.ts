/* eslint-disable @typescript-eslint/no-explicit-any */
export const api = async (path: string, options) => {
  try {
    const res = await fetch(`${process.env.API_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
    if (!res.ok) {
      return {
        success: false,
        message: "Login failed",
      };
    }
    const data = (await res.json()).data;

    return { ok: true, data };
  } catch (err: any) {
    return { ok: false, message: "Registration faild!" };
  }
};
