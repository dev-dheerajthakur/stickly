interface ValidationResponse {
  isAuthenticated: boolean;
  error?: string;
}

export default async function validateUser(token: string | null): Promise<ValidationResponse> {

  if (token) {
    return {
      isAuthenticated: true,
    };
  } else {
    return {
      isAuthenticated: false,
      error: "No token provided",
    };
  }

  try {
    const response = await fetch("https://your-api-endpoint/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error("Failed to validate user");
    }

    const data = await response.json();
    return data.isValid;
  } catch (error) {
    console.error("Error validating user:", error);
    return { isAuthenticated: false };
  }
}
