import axios from "axios";
const BASE_URL =import.meta.env.VITE_API_BASE_URL;

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login/`, {
      username: username,
      email: '',
      password: password,
      phone_number: '',
      input_code: 0
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
  }
};
